import { useEffect, useState, useCallback } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import {
  dbGetUserProgress,
  dbSaveUserProgress,
  isSupabaseConfigured,
} from '@/lib/database';

export interface ProgressData {
  completedLessons: string[];
  xp: number;
  downloadedLessons: string[];
  lastUpdated: string;
}

const createDefaultProgress = (): ProgressData => ({
  completedLessons: [],
  xp: 0,
  downloadedLessons: [],
  lastUpdated: new Date().toISOString(),
});

const getStorageKey = (userId: string) => `codequest-progress-direct-${userId}`;

const normalizeProgress = (value: unknown): ProgressData => {
  if (!value || typeof value !== 'object') {
    return createDefaultProgress();
  }

  const parsed = value as Record<string, unknown>;

  return {
    completedLessons: Array.isArray(parsed.completedLessons)
      ? parsed.completedLessons.filter(
          (item): item is string => typeof item === 'string'
        )
      : [],
    xp:
      typeof parsed.xp === 'number' && Number.isFinite(parsed.xp)
        ? parsed.xp
        : 0,
    downloadedLessons: Array.isArray(parsed.downloadedLessons)
      ? parsed.downloadedLessons.filter(
          (item): item is string => typeof item === 'string'
        )
      : [],
    lastUpdated:
      typeof parsed.lastUpdated === 'string'
        ? parsed.lastUpdated
        : new Date().toISOString(),
  };
};

const getStoredProgress = (userId: string): ProgressData | null => {
  try {
    const stored = localStorage.getItem(getStorageKey(userId));
    if (!stored) return null;
    return normalizeProgress(JSON.parse(stored));
  } catch (error) {
    console.error('❌ Erro ao carregar progresso local:', error);
    return null;
  }
};

const saveLocalProgress = (userId: string, progress: ProgressData) => {
  try {
    localStorage.setItem(getStorageKey(userId), JSON.stringify(progress));
  } catch (error) {
    console.error('❌ Erro ao salvar progresso local:', error);
  }
};

export function useProgress() {
  const userId = useAuthStore((state) => state.user?.id);

  const [progress, setProgress] = useState<ProgressData>(() =>
    userId ? getStoredProgress(userId) ?? createDefaultProgress() : createDefaultProgress()
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadUserProgress = async () => {
      if (!userId) {
        setProgress(createDefaultProgress());
        setLoading(false);
        return;
      }

      setLoading(true);

      const localProgress = getStoredProgress(userId);
      if (!cancelled && localProgress) {
        setProgress(localProgress);
      } else if (!cancelled) {
        setProgress(createDefaultProgress());
      }

      if (!isSupabaseConfigured) {
        if (!cancelled) setLoading(false);
        return;
      }

      try {
        const remoteProgress = await dbGetUserProgress(userId);

        if (cancelled) return;

        if (remoteProgress) {
          setProgress(remoteProgress);
          saveLocalProgress(userId, remoteProgress);
        } else {
          const initialProgress = localProgress ?? createDefaultProgress();
          setProgress(initialProgress);
          await dbSaveUserProgress(userId, initialProgress);
          saveLocalProgress(userId, initialProgress);
        }
      } catch (error) {
        console.error('❌ Erro ao carregar progresso do Supabase:', error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadUserProgress();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  const save = useCallback(
    async (newData: ProgressData) => {
      if (!userId) return;

      const normalized = normalizeProgress(newData);
      setProgress(normalized);
      saveLocalProgress(userId, normalized);

      if (isSupabaseConfigured) {
        try {
          await dbSaveUserProgress(userId, normalized);
        } catch (error) {
          console.error('❌ Erro ao salvar progresso no Supabase:', error);
        }
      }
    },
    [userId]
  );

  const completeLesson = useCallback(
    async (lessonId: string, xpReward: number = 50) => {
      if (progress.completedLessons.includes(lessonId)) return;

      const newProgress: ProgressData = {
        ...progress,
        completedLessons: [...progress.completedLessons, lessonId],
        xp: progress.xp + xpReward,
        lastUpdated: new Date().toISOString(),
      };

      await save(newProgress);
    },
    [progress, save]
  );

  const uncompleteLesson = useCallback(
    async (lessonId: string, xpReward: number = 50) => {
      if (!progress.completedLessons.includes(lessonId)) return;

      const newProgress: ProgressData = {
        ...progress,
        completedLessons: progress.completedLessons.filter((id) => id !== lessonId),
        xp: Math.max(0, progress.xp - xpReward),
        lastUpdated: new Date().toISOString(),
      };

      await save(newProgress);
    },
    [progress, save]
  );

  const markAsDownloaded = useCallback(
    async (lessonId: string) => {
      if (progress.downloadedLessons.includes(lessonId)) return;

      const newProgress: ProgressData = {
        ...progress,
        downloadedLessons: [...progress.downloadedLessons, lessonId],
        lastUpdated: new Date().toISOString(),
      };

      await save(newProgress);
    },
    [progress, save]
  );

  const removeDownload = useCallback(
    async (lessonId: string) => {
      if (!progress.downloadedLessons.includes(lessonId)) return;

      const newProgress: ProgressData = {
        ...progress,
        downloadedLessons: progress.downloadedLessons.filter((id) => id !== lessonId),
        lastUpdated: new Date().toISOString(),
      };

      await save(newProgress);
    },
    [progress, save]
  );

  const isLessonCompleted = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const isLessonDownloaded = useCallback(
    (lessonId: string) => progress.downloadedLessons.includes(lessonId),
    [progress.downloadedLessons]
  );

  const getCourseProgress = useCallback(
    (param: string[] | string, totalLessons?: number) => {
      if (Array.isArray(param)) {
        if (param.length === 0) return 0;
        const completed = param.filter((id) => progress.completedLessons.includes(id)).length;
        return Math.round((completed / param.length) * 100);
      }
      if (typeof param === 'string' && typeof totalLessons === 'number') {
        if (totalLessons <= 0) return 0;
        const completed = progress.completedLessons.filter((id) =>
          id.toLowerCase().includes(param.toLowerCase())
        ).length;
        return Math.min(100, Math.round((completed / totalLessons) * 100));
      }
      return 0;
    },
    [progress.completedLessons]
  );

  const resetProgress = useCallback(async () => {
    const defaultData = createDefaultProgress();
    await save(defaultData);
  }, [save]);

  return {
    progress,
    loading,
    completeLesson,
    uncompleteLesson,
    markAsDownloaded,
    removeDownload,
    isLessonCompleted,
    isLessonDownloaded,
    getCourseProgress,
    resetProgress,
  };
}
