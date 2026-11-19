import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Sparkles } from 'lucide-react';

import { useAuthStore } from '@/stores/useAuthStore';
import { dbGetUser, isSupabaseConfigured } from '@/lib/database';
import { useProgress } from '@/hooks/useProgress';
import { AvatarSelectorModal } from '@/components/ui/AvatarSelectorModal';
import { PIXEL_AVATARS, type PixelAvatar } from '@/constants/pixelAvatars';

interface ProfileUser {
  username: string;
  email: string;
  avatarUrl: string;
  currentStreak: number;
  longestStreak: number;
  className: string;
  title: string;
  joinedAt: string;
}

function normalizeDate(value: unknown): string {
  if (
    typeof value === 'string' &&
    value.trim()
  ) {
    return value;
  }

  if (
    value &&
    typeof value === 'object' &&
    'toDate' in value &&
    typeof (
      value as {
        toDate?: unknown;
      }
    ).toDate === 'function'
  ) {
    try {
      return (
        value as {
          toDate: () => Date;
        }
      ).toDate().toISOString();
    } catch {
      return new Date().toISOString();
    }
  }

  return new Date().toISOString();
}

function calculateLevelProgress(xp: number) {
  const safeXp = Math.max(0, xp);

  const xpForLevel = (
    currentLevel: number
  ) =>
    100 *
    Math.pow(currentLevel, 1.5);

  let calculatedLevel = 1;
  let xpSpent = 0;

  for (
    let currentLevel = 1;
    currentLevel <= 100;
    currentLevel++
  ) {
    const needed =
      xpForLevel(currentLevel);

    if (
      safeXp >=
      xpSpent + needed
    ) {
      xpSpent += needed;
      calculatedLevel =
        currentLevel + 1;
    } else {
      break;
    }
  }

  const xpIntoLevel = Math.max(
    0,
    safeXp - xpSpent
  );

  const xpNeeded =
    xpForLevel(calculatedLevel);

  const percent =
    xpNeeded > 0
      ? Math.min(
          100,
          Math.round(
            (xpIntoLevel /
              xpNeeded) *
              100
          )
        )
      : 0;

  return {
    level: calculatedLevel,
    xpIntoLevel,
    xpNeeded,
    percent,
  };
}

export function Profile() {
  const { user, updateAvatar } = useAuthStore();
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  /*
   * O progresso pertence exclusivamente
   * ao usuário atualmente logado.
   *
   * XP, aulas concluídas e downloads
   * vêm do documento:
   *
   * users/{userId}/progress/main
   */
  const {
    progress,
    loading: progressLoading,
  } = useProgress();

  const [
    firebaseProfile,
    setFirebaseProfile,
  ] = useState<ProfileUser | null>(
    null
  );

  const handleSelectAvatar = async (avatar: PixelAvatar) => {
    await updateAvatar(avatar.dataUrl);
    setFirebaseProfile((prev) =>
      prev ? { ...prev, avatarUrl: avatar.dataUrl } : prev
    );
  };

  /*
   * O documento users/{uid} é usado somente
   * para os dados cadastrais do perfil.
   *
   * XP NÃO é mais lido daqui.
   */
  useEffect(() => {
    let cancelled = false;

    if (!user?.id || !isSupabaseConfigured) {
      setFirebaseProfile(null);
      return;
    }

    dbGetUser(user.id)
      .then((profileData) => {
        if (cancelled) return;
        if (profileData) {
          setFirebaseProfile({
            username: profileData.username || user.username,
            email: profileData.email || user.email,
            avatarUrl: profileData.avatarUrl || user.avatarUrl || '',
            currentStreak: profileData.currentStreak ?? user.currentStreak,
            longestStreak: profileData.longestStreak ?? user.longestStreak,
            className: profileData.className || user.className,
            title: profileData.title || user.title,
            joinedAt: normalizeDate(profileData.joinedAt || user.joinedAt),
          });
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar perfil do usuário:', error);
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-white text-sm">
        <p>Carregando perfil...</p>
      </div>
    );
  }

  if (progressLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-white text-sm">
        <p>Carregando seu progresso...</p>
      </div>
    );
  }

  const profile: ProfileUser =
    firebaseProfile || {
      username: user.username,
      email: user.email,
      avatarUrl: user.avatarUrl || '',
      currentStreak: user.currentStreak,
      longestStreak: user.longestStreak,
      className: user.className,
      title: user.title,
      joinedAt: normalizeDate(user.joinedAt),
    };

  const xp = Math.max(0, progress.xp);
  const levelData = calculateLevelProgress(xp);

  return (
    <div className="w-full max-w-[1050px] mx-auto px-4 py-5 md:p-8 text-white">
      {/* iOS Native Profile Hero Card */}
      <section className="ios-glass relative rounded-2xl p-5 md:p-8 overflow-hidden border border-[#00D4FF]/30 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
        <div
          className="absolute -right-16 -top-20 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: 'rgba(0, 212, 255, 0.08)', filter: 'blur(20px)' }}
        />

        <div className="relative flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-6 text-center sm:text-left">
          <div className="relative inline-block shrink-0">
            <div
              onClick={() => setIsAvatarModalOpen(true)}
              title="Clique para escolher seu avatar pixel art"
              className="ios-press w-22 h-22 md:w-24 md:h-24 rounded-full flex items-center justify-center text-4xl font-bold overflow-hidden cursor-pointer border-2 border-[#00D4FF]/50 shadow-[0_0_30px_rgba(0,212,255,0.25)]"
              style={{
                width: 88,
                height: 88,
                background: profile.avatarUrl
                  ? '#0B1220'
                  : 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
                padding: profile.avatarUrl ? 6 : 0,
              }}
            >
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.username}
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'pixelated' }}
                />
              ) : (
                profile.username.charAt(0).toUpperCase()
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsAvatarModalOpen(true)}
              className="ios-press absolute -bottom-0.5 -right-0.5 bg-[#00E5FF] text-[#0A0E1A] rounded-full w-8 h-8 flex items-center justify-center border-2 border-[#0B1220] shadow-[0_0_12px_rgba(0,229,255,0.6)] cursor-pointer"
              title="Escolher entre 10 ícones pixelados de programação"
            >
              <Sparkles size={14} />
            </button>
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-[#00D4FF] text-[10px] md:text-[11px] tracking-[2.5px] font-bold uppercase">
              CODEQUEST MEMBER
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold m-0 mt-1 truncate">
              {profile.username}
            </h1>

            <p className="text-xs md:text-sm text-gray-400 m-0 mt-0.5 truncate">
              {profile.email}
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap mt-3">
              <Badge>{profile.title}</Badge>
              <Badge>{profile.className}</Badge>
              <Badge>Nível {levelData.level}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Opções de Ícones Pixelados de Programação */}
      <section className="ios-glass rounded-2xl p-4 md:p-6 mt-4 md:mt-5 border border-[#00E5FF]/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="text-[#00D4FF] text-[10px] tracking-[2px] font-bold uppercase">
              IDENTIDADE VISUAL 8-BIT
            </div>
            <h2 className="text-base md:text-xl font-bold m-0 mt-0.5 text-white">
              Insígnias de Programação em Pixel Art
            </h2>
            <p className="text-xs text-gray-400 m-0 mt-0.5">
              Escolha seu avatar temático de desenvolvedor: 10 opções exclusivas.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsAvatarModalOpen(true)}
            className="ios-press inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[#0A0E1A] font-bold text-xs border-none cursor-pointer shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.35)]"
            style={{
              background: 'linear-gradient(135deg, #00E5FF, #8B5CF6)',
            }}
          >
            <Sparkles size={14} /> Ver Catálogo Completo
          </button>
        </div>

        {/* Horizontal scroll on mobile or compact 5-col grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {PIXEL_AVATARS.map((av) => {
            const isSelected =
              profile.avatarUrl === av.dataUrl || profile.avatarUrl === av.id;
            return (
              <button
                key={av.id}
                type="button"
                onClick={() => handleSelectAvatar(av)}
                className="ios-press flex flex-col items-center p-3 rounded-xl border cursor-pointer transition-all"
                style={{
                  borderColor: isSelected
                    ? av.accentColor
                    : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected
                    ? `0 0 16px ${av.accentColor}40`
                    : 'none',
                  background: isSelected
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(10, 16, 32, 0.7)',
                }}
                title={`${av.name} (${av.category}) - ${av.description}`}
              >
                <div className="w-11 h-11 flex items-center justify-center mb-1.5">
                  <img
                    src={av.dataUrl}
                    alt={av.name}
                    className="w-full h-full object-contain"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <span className="text-[11px] font-semibold text-gray-200 text-center truncate w-full">
                  {av.name}
                </span>
                <span
                  className="text-[9px] font-mono px-1.5 py-0.5 rounded mt-1"
                  style={{
                    color: av.accentColor,
                    background: `${av.accentColor}18`,
                  }}
                >
                  {av.category}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2x2 Grid on Mobile, 4 cols on Desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-5">
        <Stat icon="⭐" title="XP Total" value={xp} />
        <Stat icon="🔥" title="Sequência atual" value={profile.currentStreak} />
        <Stat icon="🏆" title="Maior sequência" value={profile.longestStreak} />
        <Stat icon="🎖️" title="Nível" value={levelData.level} />
      </div>

      {/* Progresso para o próximo nível */}
      <section className="ios-glass rounded-2xl p-4 md:p-6 mt-4 md:mt-5">
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div>
            <h2 className="m-0 text-base md:text-lg font-bold">
              🚀 Progresso para o próximo nível
            </h2>
            <p className="text-xs text-gray-400 m-0 mt-1">
              Continue estudando para ganhar mais XP.
            </p>
          </div>

          <strong className="text-[#00D4FF] text-base md:text-lg">
            {levelData.percent}%
          </strong>
        </div>

        <div className="h-2.5 bg-[#1F2937] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${levelData.percent}%`,
              background: 'linear-gradient(90deg, #00D4FF, #8B5CF6)',
            }}
          />
        </div>

        <p className="text-gray-400 text-xs m-0 mt-2">
          {Math.floor(levelData.xpIntoLevel).toLocaleString('pt-BR')} /{' '}
          {Math.floor(levelData.xpNeeded).toLocaleString('pt-BR')} XP para o nível{' '}
          {levelData.level + 1}
        </p>
      </section>

      {/* Info Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-5">
        <InfoCard
          icon="📅"
          title="Membro desde"
          value={new Date(profile.joinedAt).toLocaleDateString('pt-BR')}
        />
        <InfoCard
          icon="🧑‍💻"
          title="Classe atual"
          value={profile.className}
        />
        <InfoCard
          icon="👑"
          title="Título"
          value={profile.title}
        />
      </section>

      <AvatarSelectorModal
        isOpen={isAvatarModalOpen}
        onClose={() => setIsAvatarModalOpen(false)}
        currentAvatarUrl={profile.avatarUrl}
        onSelect={handleSelectAvatar}
      />
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-[#17233A] border border-[#29415F] text-gray-200 text-[11px] font-semibold">
      {children}
    </span>
  );
}

function Stat({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: number;
}) {
  return (
    <div className="ios-glass rounded-2xl p-4">
      <div className="text-2xl">{icon}</div>
      <div className="text-gray-400 text-xs mt-1.5">{title}</div>
      <strong className="block mt-0.5 text-xl md:text-2xl font-extrabold text-white">
        {value.toLocaleString('pt-BR')}
      </strong>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="ios-glass rounded-2xl p-4 flex items-center sm:block gap-3.5">
      <div className="text-2xl shrink-0">{icon}</div>
      <div>
        <h3 className="text-xs font-bold text-gray-300 m-0 sm:mt-2">{title}</h3>
        <p className="text-sm font-semibold text-white m-0 mt-0.5">{value}</p>
      </div>
    </div>
  );
}