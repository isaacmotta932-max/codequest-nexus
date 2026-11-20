import { Link } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';
import { useEffect, useMemo, useState } from 'react';

import { dbGetPublishedCourses, isSupabaseConfigured } from '@/lib/database';
import { getAllCourses } from '@/data/courses';
import { MISSIONS } from '@/data/missions';
import { ACHIEVEMENTS } from '@/data/achievements';
import { useProgress } from '@/hooks/useProgress';
import { getAvatarByUrlOrId } from '@/constants/pixelAvatars';

type LessonType = 'pdf' | 'word' | 'video' | 'quiz';

interface Lesson {
  id: string;
  title: string;
  description?: string;
  type: LessonType;
  content?: string;
  duration?: number;
  xpReward?: number;
  fileName?: string;
  fileUrl?: string;
  fileSize?: number;
  fileType?: string;
}

interface Course {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  teacherId: string;
  published: boolean;
  views: number;
  averageRating: number;
  ratingsCount: number;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function normalizeLesson(
  value: unknown,
  index: number
): Lesson {
  if (!isRecord(value)) {
    return {
      id: `lesson-${index + 1}`,
      title: `Aula ${index + 1}`,
      description: '',
      type: 'pdf',
      content: '',
      xpReward: 0,
    };
  }

  const rawType = value.type;

  const type: LessonType =
    rawType === 'word' ||
    rawType === 'video' ||
    rawType === 'quiz'
      ? rawType
      : 'pdf';

  return {
    id:
      typeof value.id === 'string'
        ? value.id
        : `lesson-${index + 1}`,

    title:
      typeof value.title === 'string'
        ? value.title
        : `Aula ${index + 1}`,

    description:
      typeof value.description === 'string'
        ? value.description
        : '',

    type,

    content:
      typeof value.content === 'string'
        ? value.content
        : '',

    duration:
      typeof value.duration === 'number'
        ? value.duration
        : undefined,

    xpReward:
      typeof value.xpReward === 'number'
        ? value.xpReward
        : 0,

    fileName:
      typeof value.fileName === 'string'
        ? value.fileName
        : undefined,

    fileUrl:
      typeof value.fileUrl === 'string'
        ? value.fileUrl
        : undefined,

    fileSize:
      typeof value.fileSize === 'number'
        ? value.fileSize
        : undefined,

    fileType:
      typeof value.fileType === 'string'
        ? value.fileType
        : undefined,
  };
}

function normalizeCourse(
  id: string,
  value: Record<string, unknown>
): Course {
  const lessons = Array.isArray(value.lessons)
    ? value.lessons.map(normalizeLesson)
    : [];

  return {
    id,

    slug:
      typeof value.slug === 'string' &&
      value.slug.trim()
        ? value.slug
        : id,

    name:
      typeof value.name === 'string' &&
      value.name.trim()
        ? value.name
        : 'Curso sem nome',

    description:
      typeof value.description === 'string'
        ? value.description
        : '',

    icon:
      typeof value.icon === 'string'
        ? value.icon
        : '📚',

    color:
      typeof value.color === 'string'
        ? value.color
        : '#00D4FF',

    lessons,

    teacherId:
      typeof value.teacherId === 'string'
        ? value.teacherId
        : '',

    published: value.published === true,

    views:
      typeof value.views === 'number'
        ? value.views
        : 0,

    averageRating:
      typeof value.averageRating === 'number'
        ? value.averageRating
        : 0,

    ratingsCount:
      typeof value.ratingsCount === 'number'
        ? value.ratingsCount
        : 0,
  };
}

function getLocalFallbackCourses(): Course[] {
  return getAllCourses().map((course) => ({
    id: course.id,
    slug: course.slug,
    name: course.name,
    description: course.description,
    icon: course.icon,
    color: course.color,

    lessons: course.lessons.map((lesson) => {
      const rawLesson =
        lesson as unknown as Record<string, unknown>;

      const rawType = rawLesson.type;

      const type: LessonType =
        rawType === 'word' ||
        rawType === 'video' ||
        rawType === 'quiz'
          ? rawType
          : 'pdf';

      return {
        id: lesson.id,
        title: lesson.title,
        description: lesson.description,
        type,
        content: lesson.content,
        duration: lesson.duration,
        xpReward: lesson.xpReward,

        fileName:
          typeof rawLesson.fileName === 'string'
            ? rawLesson.fileName
            : undefined,

        fileUrl:
          typeof rawLesson.fileUrl === 'string'
            ? rawLesson.fileUrl
            : undefined,

        fileSize:
          typeof rawLesson.fileSize === 'number'
            ? rawLesson.fileSize
            : undefined,

        fileType:
          typeof rawLesson.fileType === 'string'
            ? rawLesson.fileType
            : undefined,
      };
    }),

    teacherId: '',
    published: true,
    views: 0,
    averageRating: 0,
    ratingsCount: 0,
  }));
}

function getCourseProgress(
  course: Course,
  completedLessons: Set<string>
) {
  const total = course.lessons.length;

  if (total === 0) {
    return {
      completed: 0,
      percent: 0,
    };
  }

  const completed = course.lessons.filter(
    (lesson) =>
      completedLessons.has(lesson.id)
  ).length;

  return {
    completed,
    percent: Math.round(
      (completed / total) * 100
    ),
  };
}

function getLevelData(xp: number) {
  const safeXp = Math.max(0, xp);

  const xpForLevel = (level: number) =>
    100 * Math.pow(level, 1.5);

  let level = 1;
  let xpSpent = 0;

  for (
    let current = 1;
    current <= 100;
    current++
  ) {
    const needed = xpForLevel(current);

    if (
      safeXp >=
      xpSpent + needed
    ) {
      xpSpent += needed;
      level = current + 1;
    } else {
      break;
    }
  }

  const xpIntoLevel = Math.max(
    0,
    safeXp - xpSpent
  );

  const xpNeededForNextLevel =
    xpForLevel(level);

  const percent =
    xpNeededForNextLevel > 0
      ? Math.min(
          100,
          Math.round(
            (xpIntoLevel /
              xpNeededForNextLevel) *
              100
          )
        )
      : 0;

  return {
    level,
    xpIntoLevel,
    xpNeededForNextLevel,
    percent,
  };
}

export function Dashboard() {
  const { user } = useAuthStore();

  /*
   * IMPORTANTE:
   * O Dashboard agora usa exatamente o mesmo
   * progresso utilizado pelo Lesson.
   *
   * Não existe mais leitura direta de:
   * codequest-progress-direct
   *
   * O progresso vem de:
   * users/{userId}/progress/main
   */
  const {
    progress,
    loading: progressLoading,
  } = useProgress();

  const [courses, setCourses] =
    useState<Course[]>([]);

  const [coursesLoading, setCoursesLoading] =
    useState(true);

  const [coursesError, setCoursesError] =
    useState('');

  /*
   * Carrega somente cursos publicados.
   */
  useEffect(() => {
    let cancelled = false;

    if (!user) {
      setCourses([]);
      setCoursesLoading(false);
      return;
    }

    if (!isSupabaseConfigured) {
      setCourses(getLocalFallbackCourses());
      setCoursesLoading(false);
      setCoursesError('');
      return;
    }

    setCoursesLoading(true);
    setCoursesError('');

    dbGetPublishedCourses()
      .then((raw) => {
        if (cancelled) return;
        if (!raw || raw.length === 0) {
          setCourses(getLocalFallbackCourses());
        } else {
          const loaded = raw
            .map((item) => normalizeCourse(item.id, item))
            .filter((course) => course.lessons.length > 0);
          setCourses(loaded.length > 0 ? loaded : getLocalFallbackCourses());
        }
        setCoursesLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar cursos:', error);
        if (!cancelled) {
          setCourses(getLocalFallbackCourses());
          setCoursesLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  /*
   * Todos estes números agora vêm do useProgress().
   */
  const totalCompleted =
    progress.completedLessons.length;

  const totalDownloaded =
    progress.downloadedLessons.length;

  const levelData = useMemo(
    () =>
      getLevelData(progress.xp),
    [progress.xp]
  );

  const completedSet = useMemo(
    () =>
      new Set(
        progress.completedLessons
      ),
    [progress.completedLessons]
  );

  const coursesWithProgress = useMemo(
    () =>
      courses.map((course) => ({
        ...course,

        progress:
          getCourseProgress(
            course,
            completedSet
          ),
      })),
    [courses, completedSet]
  );

  const activeCoursesCount =
    coursesWithProgress.filter(
      (course) =>
        course.progress.percent > 0
    ).length;

  /*
   * Próxima aula.
   */
  const nextLesson = useMemo(() => {
    const started =
      coursesWithProgress.filter(
        (course) =>
          course.progress.percent > 0 &&
          course.progress.percent < 100
      );

    const ordered = [
      ...started,

      ...coursesWithProgress.filter(
        (course) =>
          !started.some(
            (item) =>
              item.id === course.id
          )
      ),
    ];

    for (const course of ordered) {
      const lesson =
        course.lessons.find(
          (item) =>
            !completedSet.has(
              item.id
            )
        );

      if (lesson) {
        return {
          course,
          lesson,
        };
      }
    }

    return null;
  }, [
    coursesWithProgress,
    completedSet,
  ]);

  /*
   * Missões.
   */
  const dailyMissions =
    MISSIONS
      .filter(
        (mission) =>
          mission.type === 'daily'
      )
      .map((mission) => {
        let current = 0;

        if (
          mission.id === 'm1' ||
          mission.id === 'm2'
        ) {
          current =
            totalCompleted;
        }

        if (mission.id === 'm3') {
          current =
            coursesWithProgress.filter(
              (course) =>
                course.progress.percent > 0
            ).length;
        }

        return {
          ...mission,

          progress:
            Math.min(
              current,
              mission.target
            ),

          completed:
            current >=
            mission.target,
        };
      });

  /*
   * Conquistas.
   */
  const recentAchievements =
    ACHIEVEMENTS
      .slice(0, 4)
      .map((achievement) => {
        let current = 0;

        if (
          achievement.criteria.type ===
          'lessons_completed'
        ) {
          current =
            totalCompleted;
        }

        if (
          achievement.criteria.type ===
          'xp_earned'
        ) {
          current =
            progress.xp;
        }

        if (
          achievement.criteria.type ===
          'downloads'
        ) {
          current =
            totalDownloaded;
        }

        return {
          ...achievement,

          unlocked:
            current >=
            achievement.criteria.target,
        };
      });

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-white">
        <p className="text-sm text-gray-400">Carregando usuário...</p>
      </div>
    );
  }

  /*
   * Enquanto o progresso individual está
   * sendo carregado, evitamos mostrar números
   * temporários errados.
   */
  if (progressLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-white">
        <p className="text-sm text-gray-400">Carregando seu progresso...</p>
      </div>
    );
  }

  const activeAvatar = getAvatarByUrlOrId(user.avatarUrl);
  const { primary: avatarPrimary, secondary: avatarSecondary, glowRgb } = activeAvatar.themePalette;

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-5 md:p-8 text-white">
      {/* iOS Native Profile & Welcome Header */}
      <div className="flex items-center gap-3.5 md:gap-5 mb-6 md:mb-8">
        {user.avatarUrl && (
          <div
            className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#0B1220] border-2 flex items-center justify-center p-1.5 shrink-0 transition-all duration-300"
            style={{
              borderColor: `rgba(${glowRgb}, 0.55)`,
              boxShadow: `0 0 22px rgba(${glowRgb}, 0.25)`,
            }}
          >
            <img
              src={user.avatarUrl}
              alt={user.username}
              className="w-full h-full object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-gray-400 m-0">
            {new Date().toLocaleDateString('pt-BR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
            })}
          </p>

          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight m-0 mt-0.5 truncate">
            Olá,{' '}
            <span
              className="transition-colors duration-300"
              style={{ color: avatarPrimary }}
            >
              {user.username}
            </span>
            !
          </h1>

          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border transition-colors duration-300"
              style={{
                backgroundColor: `rgba(${glowRgb}, 0.14)`,
                color: avatarPrimary,
                borderColor: `rgba(${glowRgb}, 0.35)`,
              }}
            >
              Nível {levelData.level}
            </span>
            <span className="text-xs text-gray-400 truncate">
              {user.title} • Insígnia: <strong style={{ color: avatarPrimary }}>{activeAvatar.name}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* iOS Widget Grid: XP Full Width on Mobile + 3 Compact Widgets, 4 cols on Desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {/* XP Widget - Spans 2 cols on mobile for clean iOS look */}
        <div
          className="col-span-2 lg:col-span-1 ios-glass rounded-2xl p-4 md:p-5 border shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex flex-col justify-between transition-colors duration-300"
          style={{
            borderColor: `rgba(${glowRgb}, 0.35)`,
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-xs font-medium text-gray-400 m-0">XP Total</p>
              <p
                className="text-2xl md:text-3xl font-extrabold m-0 mt-0.5 tracking-tight transition-colors duration-300"
                style={{ color: avatarPrimary }}
              >
                {progress.xp.toLocaleString('pt-BR')}
              </p>
            </div>
            <div
              className="w-11 h-11 rounded-2xl border flex items-center justify-center text-xl transition-colors duration-300"
              style={{
                backgroundColor: `rgba(${glowRgb}, 0.14)`,
                borderColor: `rgba(${glowRgb}, 0.35)`,
              }}
            >
              ⚡
            </div>
          </div>

          <div>
            <div className="bg-[#1F2937] rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${levelData.percent}%`,
                  background: `linear-gradient(90deg, ${avatarPrimary}, ${avatarSecondary})`,
                }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-gray-400 mt-1.5">
              <span>Nível {levelData.level}</span>
              <span>
                {Math.floor(levelData.xpIntoLevel)} / {Math.floor(levelData.xpNeededForNextLevel)} XP
              </span>
            </div>
          </div>
        </div>

        <StatCard
          icon="✓"
          label="Lições Completas"
          value={totalCompleted}
          color="#00FF88"
        />

        <StatCard
          icon="📄"
          label="PDFs Baixados"
          value={totalDownloaded}
          color="#8B5CF6"
        />

        <StatCard
          icon="🚀"
          label="Cursos Ativos"
          value={activeCoursesCount}
          color="#FFD700"
          fullWidthMobile
        />
      </div>

      {/* Continue Aprendendo - iOS Hero Action Card */}
      {nextLesson && (
        <div
          className="ios-glass rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border-2 transition-all"
          style={{
            borderColor: `${nextLesson.course.color}80`,
            boxShadow: `0 8px 30px ${nextLesson.course.color}22`,
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
              ⚡ Continue Aprendendo
            </span>
            <span
              className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
              style={{
                background: `${nextLesson.course.color}20`,
                color: nextLesson.course.color,
              }}
            >
              {nextLesson.course.name}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 border"
                style={{
                  background: `${nextLesson.course.color}15`,
                  borderColor: `${nextLesson.course.color}40`,
                }}
              >
                {nextLesson.course.icon}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-base md:text-xl font-bold text-white m-0 leading-snug">
                  {nextLesson.lesson.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-400 m-0 mt-1 line-clamp-2 leading-relaxed">
                  {nextLesson.lesson.description || 'Continue sua jornada de aprendizado.'}
                </p>
              </div>
            </div>

            <Link
              to={`/lesson/${nextLesson.course.slug}/${nextLesson.lesson.id}`}
              className="ios-press w-full sm:w-auto text-center px-6 py-3.5 rounded-xl font-bold text-sm text-black no-underline shrink-0 shadow-lg"
              style={{
                background: nextLesson.course.color,
              }}
            >
              Continuar →
            </Link>
          </div>
        </div>
      )}

      {/* Main Content Grid: Single column on mobile (NO HORIZONTAL OVERFLOW!), 2 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Missões Diárias Card */}
        <section className="ios-glass rounded-2xl p-4 md:p-6">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h2 className="text-base md:text-lg font-bold m-0 flex items-center gap-2">
              🎯 Missões Diárias
            </h2>

            <Link
              to="/missions"
              className="ios-press text-xs font-semibold text-[#00D4FF] no-underline whitespace-nowrap"
            >
              Ver todas →
            </Link>
          </div>

          <div className="flex flex-col gap-2.5">
            {dailyMissions.slice(0, 3).map((mission) => {
              const percent =
                mission.target > 0
                  ? (mission.progress / mission.target) * 100
                  : 0;

              return (
                <div
                  key={mission.id}
                  className="p-3.5 rounded-xl bg-[#0A1020]/90 border transition-colors"
                  style={{
                    borderColor: mission.completed ? '#00FF8860' : 'rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="text-xs md:text-[13px] font-bold m-0 text-gray-100">
                      {mission.title}
                    </p>

                    <span className="text-xs font-bold text-[#FFD700] shrink-0">
                      +{mission.xpReward} XP
                    </span>
                  </div>

                  <div className="bg-[#1F2937] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(percent, 100)}%`,
                        background: mission.completed
                          ? 'linear-gradient(90deg, #00FF88, #10B981)'
                          : 'linear-gradient(90deg, #00D4FF, #8B5CF6)',
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between mt-1.5">
                    <p className="text-[11px] text-gray-400 m-0">
                      {mission.progress}/{mission.target} concluídos
                    </p>
                    {mission.completed && (
                      <span className="text-[10px] font-bold text-[#00FF88]">✓ Concluída</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Conquistas Card */}
        <section className="ios-glass rounded-2xl p-4 md:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <h2 className="text-base md:text-lg font-bold m-0 flex items-center gap-2">
                🏆 Conquistas
              </h2>

              <Link
                to="/achievements"
                className="ios-press text-xs font-semibold text-[#FFD700] no-underline whitespace-nowrap"
              >
                Ver todas →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {recentAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex flex-col items-center justify-center text-center p-3.5 rounded-xl bg-[#0A1020]/90 border border-white/5"
                  style={{
                    opacity: achievement.unlocked ? 1 : 0.45,
                  }}
                >
                  <div className="text-2xl md:text-3xl mb-1.5">
                    {achievement.unlocked ? achievement.icon : '🔒'}
                  </div>

                  <p className="text-[11px] font-semibold text-gray-300 m-0 line-clamp-1">
                    {achievement.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
            <span>Desbloqueie insígnias estudando</span>
            <Link to="/achievements" className="text-[#00D4FF] no-underline font-medium">
              Explorar →
            </Link>
          </div>
        </section>

        {/* Cursos Section - Full Width on Desktop & Mobile */}
        <section className="ios-glass rounded-2xl p-4 md:p-6 lg:col-span-2">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-base md:text-lg font-bold m-0">
                📚 Cursos
              </h2>
              <p className="text-xs text-gray-400 m-0 mt-0.5">
                Cursos publicados pelos professores.
              </p>
            </div>

            <Link
              to="/galaxy"
              className="ios-press text-xs font-semibold text-[#00D4FF] no-underline whitespace-nowrap"
            >
              Ver galáxia →
            </Link>
          </div>

          {coursesLoading ? (
            <div className="min-h-[150px] flex flex-col items-center justify-center text-center text-gray-300 gap-2">
              Carregando cursos...
            </div>
          ) : coursesError ? (
            <div className="min-h-[150px] flex flex-col items-center justify-center text-center text-gray-300 gap-2">
              <p>{coursesError}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-1 border border-[#00D4FF] bg-[#0A1020] text-[#00D4FF] rounded-lg px-3.5 py-2 cursor-pointer text-xs font-bold"
              >
                Tentar novamente
              </button>
            </div>
          ) : courses.length === 0 ? (
            <div className="min-h-[150px] flex flex-col items-center justify-center text-center text-gray-300 gap-2">
              <div className="text-4xl">🪐</div>
              <strong>Nenhum curso publicado ainda</strong>
              <p className="text-xs text-gray-400 m-0">
                Quando um professor publicar um curso, ele aparecerá aqui.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {coursesWithProgress.slice(0, 6).map((course) => {
                const firstIncomplete = course.lessons.find(
                  (lesson) => !completedSet.has(lesson.id)
                );
                const targetLesson = firstIncomplete || course.lessons[0];

                if (!targetLesson) {
                  return null;
                }

                return (
                  <Link
                    key={course.id}
                    to={`/lesson/${course.slug}/${targetLesson.id}`}
                    className="ios-press no-underline text-inherit block"
                  >
                    <div
                      className="bg-[#0A1020]/90 border rounded-2xl p-4 h-full flex flex-col justify-between transition-all hover:bg-[#0A1020]"
                      style={{
                        borderColor: `${course.color}40`,
                      }}
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2.5">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
                            style={{
                              background: `${course.color}15`,
                              border: `1px solid ${course.color}35`,
                            }}
                          >
                            {course.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3
                              className="font-bold text-sm m-0 truncate"
                              style={{ color: course.color }}
                            >
                              {course.name}
                            </h3>
                            <span className="text-[11px] text-gray-400">
                              {course.lessons.length} {course.lessons.length === 1 ? 'aula' : 'aulas'}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-3">
                          {course.description || 'Curso disponível para você.'}
                        </p>
                      </div>

                      <div>
                        <div className="bg-[#1F2937] rounded-full h-1.5 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${course.progress.percent}%`,
                              background: course.color,
                            }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-gray-400 mt-1.5">
                          <span>
                            {course.progress.completed}/{course.lessons.length} aulas
                          </span>
                          <span className="font-semibold" style={{ color: course.color }}>
                            {course.progress.percent}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
  fullWidthMobile = false,
}: {
  icon: string;
  label: string;
  value: number;
  color: string;
  fullWidthMobile?: boolean;
}) {
  return (
    <div
      className={`ios-glass rounded-2xl p-3.5 md:p-5 flex items-center gap-3 md:gap-4 border ${
        fullWidthMobile ? 'col-span-2 sm:col-span-1' : 'col-span-1'
      }`}
      style={{
        borderColor: `${color}35`,
      }}
    >
      <div
        className="w-11 h-11 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-xl md:text-2xl shrink-0"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
        }}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[11px] md:text-xs font-medium text-gray-400 m-0 truncate">
          {label}
        </p>

        <p
          className="text-xl md:text-2xl font-extrabold m-0 mt-0.5 tracking-tight"
          style={{ color }}
        >
          {value.toLocaleString('pt-BR')}
        </p>
      </div>
    </div>
  );
}