import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Sparkles, Lock, Crown, Check, Palette } from 'lucide-react';

import { useAuthStore } from '@/stores/useAuthStore';
import { dbGetUser, isSupabaseConfigured } from '@/lib/database';
import { useProgress } from '@/hooks/useProgress';
import { AvatarSelectorModal } from '@/components/ui/AvatarSelectorModal';
import {
  STARTER_PIXEL_AVATARS,
  PLANETARY_PIXEL_AVATARS,
  getAvatarByUrlOrId,
  applyAvatarThemeToDOM,
  isAvatarUnlocked,
  type PixelAvatar,
} from '@/constants/pixelAvatars';

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

  const handleSelectAvatar = (avatar: PixelAvatar) => {
    // 1. Atualiza imediatamente o estado local e o DOM (zero espera de rede!)
    applyAvatarThemeToDOM(avatar.dataUrl);
    setFirebaseProfile((prev) =>
      prev ? { ...prev, avatarUrl: avatar.dataUrl } : prev
    );
    // 2. Persiste no Zustand + Supabase em background
    void updateAvatar(avatar.dataUrl);
  };

  /*
   * O documento users/{uid} é usado somente
   * para os dados cadastrais do perfil.
   * Dependemos apenas de user?.id para não re-buscar o banco antigo quando o avatar muda!
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
          const latestUser = useAuthStore.getState().user;
          setFirebaseProfile({
            username: profileData.username || latestUser?.username || user.username,
            email: profileData.email || latestUser?.email || user.email,
            avatarUrl: latestUser?.avatarUrl || profileData.avatarUrl || user.avatarUrl || '',
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
  }, [user?.id]);

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

  const profile: ProfileUser = {
    username: firebaseProfile?.username || user.username,
    email: firebaseProfile?.email || user.email,
    // Sempre prioriza user.avatarUrl do Zustand para refletir mudanças em 0ms!
    avatarUrl: user.avatarUrl || firebaseProfile?.avatarUrl || '',
    currentStreak: firebaseProfile?.currentStreak ?? user.currentStreak,
    longestStreak: firebaseProfile?.longestStreak ?? user.longestStreak,
    className: firebaseProfile?.className || user.className,
    title: firebaseProfile?.title || user.title,
    joinedAt: firebaseProfile?.joinedAt || normalizeDate(user.joinedAt),
  };

  const xp = Math.max(0, progress.xp);
  const levelData = calculateLevelProgress(xp);
  const completedLessons = progress.completedLessons || [];
  const activeAvatar = getAvatarByUrlOrId(profile.avatarUrl);
  const { primary: avatarPrimary, secondary: avatarSecondary, glowRgb } = activeAvatar.themePalette;

  const unlockedPlanetaryCount = PLANETARY_PIXEL_AVATARS.filter(
    (av) => isAvatarUnlocked(av, completedLessons).unlocked
  ).length;

  return (
    <div className="w-full max-w-[1050px] mx-auto px-4 py-5 md:p-8 text-white">
      {/* iOS Native Profile Hero Card */}
      <section
        className="ios-glass relative rounded-2xl p-5 md:p-8 overflow-hidden border shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-colors duration-300"
        style={{
          borderColor: `rgba(${glowRgb}, 0.35)`,
        }}
      >
        <div
          className="absolute -right-16 -top-20 w-56 h-56 rounded-full pointer-events-none transition-colors duration-500"
          style={{ background: `rgba(${glowRgb}, 0.12)`, filter: 'blur(24px)' }}
        />

        <div className="relative flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-6 text-center sm:text-left">
          <div className="relative inline-block shrink-0">
            <div
              onClick={() => setIsAvatarModalOpen(true)}
              title="Clique para escolher seu avatar pixel art"
              className="ios-press w-22 h-22 md:w-24 md:h-24 rounded-full flex items-center justify-center text-4xl font-bold overflow-hidden cursor-pointer border-2 transition-all duration-300"
              style={{
                width: 88,
                height: 88,
                borderColor: `rgba(${glowRgb}, 0.65)`,
                boxShadow: `0 0 30px rgba(${glowRgb}, 0.3)`,
                background: profile.avatarUrl
                  ? '#0B1220'
                  : `linear-gradient(135deg, ${avatarPrimary}, ${avatarSecondary})`,
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
              className="ios-press absolute -bottom-0.5 -right-0.5 text-[#0A0E1A] rounded-full w-8 h-8 flex items-center justify-center border-2 border-[#0B1220] cursor-pointer transition-colors duration-300"
              style={{
                background: avatarPrimary,
                boxShadow: `0 0 12px rgba(${glowRgb}, 0.65)`,
              }}
              title="Escolher entre 20 ícones pixelados de programação"
            >
              <Sparkles size={14} />
            </button>
          </div>

          <div className="min-w-0 flex-1">
            <div
              className="text-[10px] md:text-[11px] tracking-[2.5px] font-bold uppercase transition-colors duration-300"
              style={{ color: avatarPrimary }}
            >
              CODEQUEST MEMBER • TEMA: {activeAvatar.name.toUpperCase()}
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
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border"
                style={{
                  background: `rgba(${glowRgb}, 0.14)`,
                  borderColor: `rgba(${glowRgb}, 0.4)`,
                  color: avatarPrimary,
                }}
              >
                <Palette size={12} /> Paleta Ativa
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SEÇÃO 1: 10 OPÇÕES INICIAIS (16-BIT) + TEMAS DINÂMICOS
         ===================================================================== */}
      <section
        className="ios-glass rounded-2xl p-4 md:p-6 mt-4 md:mt-5 border transition-colors duration-300"
        style={{ borderColor: `rgba(${glowRgb}, 0.25)` }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div
              className="text-[10px] tracking-[2px] font-bold uppercase"
              style={{ color: avatarPrimary }}
            >
              IDENTIDADE VISUAL 16-BIT • TEMA ADAPTATIVO
            </div>
            <h2 className="text-base md:text-xl font-bold m-0 mt-0.5 text-white">
              Insígnias Base de Programação (10 Desbloqueadas)
            </h2>
            <p className="text-xs text-gray-400 m-0 mt-0.5">
              Ao trocar de ícone, a paleta de cores da interface se adapta sutilmente às cores do seu avatar.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsAvatarModalOpen(true)}
            className="ios-press inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[#0A0E1A] font-bold text-xs border-none cursor-pointer shrink-0"
            style={{
              background: `linear-gradient(135deg, ${avatarPrimary}, ${avatarSecondary})`,
              boxShadow: `0 0 15px rgba(${glowRgb}, 0.35)`,
            }}
          >
            <Sparkles size={14} /> Abrir Arsenal Completo (20)
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {STARTER_PIXEL_AVATARS.map((av) => {
            const isSelected = activeAvatar.id === av.id;
            return (
              <button
                key={av.id}
                type="button"
                onClick={() => handleSelectAvatar(av)}
                className="ios-press relative flex flex-col items-center p-3 rounded-xl border cursor-pointer transition-all"
                style={{
                  borderColor: isSelected
                    ? av.accentColor
                    : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected
                    ? `0 0 16px ${av.accentColor}40`
                    : 'none',
                  background: isSelected
                    ? `${av.accentColor}15`
                    : 'rgba(10, 16, 32, 0.7)',
                }}
                title={`${av.name} (${av.category}) - ${av.description}`}
              >
                {isSelected && (
                  <span
                    className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center text-black"
                    style={{ background: av.accentColor }}
                  >
                    <Check size={10} strokeWidth={3} />
                  </span>
                )}
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

      {/* =====================================================================
          SEÇÃO 2: 10 NOVOS GUARDIÕES PLANETÁRIOS (24-BIT HIGH-DETAIL)
         ===================================================================== */}
      <section className="ios-glass rounded-2xl p-4 md:p-6 mt-4 md:mt-5 border border-[#FFD700]/25">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="text-[#FFD700] text-[10px] tracking-[2px] font-bold uppercase flex items-center gap-1.5">
              <Crown size={12} /> COLEÇÃO DE ELITE 24-BIT • DESBLOQUEIO POR PLANETAS
            </div>
            <h2 className="text-base md:text-xl font-bold m-0 mt-0.5 text-white">
              Guardiões Planetários ({unlockedPlanetaryCount}/10 Desbloqueados)
            </h2>
            <p className="text-xs text-gray-400 m-0 mt-0.5">
              Ícones ultra-detalhados de 24x24 pixels desbloqueados conforme você completa 100% das aulas de cada planeta na Galáxia!
            </p>
          </div>

          <span className="px-3 py-1.5 rounded-xl bg-[#FFD700]/15 border border-[#FFD700]/35 text-[#FFD700] text-xs font-extrabold shrink-0 self-start sm:self-center">
            🏆 {unlockedPlanetaryCount} / 10 Conquistados
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {PLANETARY_PIXEL_AVATARS.map((av) => {
            const isSelected = activeAvatar.id === av.id;
            const unlockInfo = isAvatarUnlocked(av, completedLessons);
            const pct =
              unlockInfo.totalInPlanet > 0
                ? Math.round((unlockInfo.completedInPlanet / unlockInfo.totalInPlanet) * 100)
                : 0;

            return (
              <button
                key={av.id}
                type="button"
                onClick={() => {
                  if (unlockInfo.unlocked) {
                    void handleSelectAvatar(av);
                  } else {
                    setIsAvatarModalOpen(true);
                  }
                }}
                className="ios-press relative flex flex-col items-center justify-between p-3 rounded-xl border cursor-pointer transition-all text-center"
                style={{
                  borderColor: isSelected
                    ? av.accentColor
                    : unlockInfo.unlocked
                      ? `${av.accentColor}50`
                      : 'rgba(255, 255, 255, 0.07)',
                  boxShadow: isSelected
                    ? `0 0 18px ${av.accentColor}45`
                    : 'none',
                  background: isSelected
                    ? `${av.accentColor}18`
                    : unlockInfo.unlocked
                      ? 'rgba(15, 23, 42, 0.85)'
                      : 'rgba(10, 14, 26, 0.55)',
                }}
                title={`${av.name} — ${unlockInfo.progressText}`}
              >
                {/* Badge HD 24-Bit */}
                <span
                  className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase"
                  style={{
                    background: `${av.accentColor}22`,
                    color: av.accentColor,
                  }}
                >
                  24-BIT
                </span>

                {/* Status: Desbloqueado ou Cadeado */}
                {unlockInfo.unlocked ? (
                  isSelected ? (
                    <span
                      className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center text-black"
                      style={{ background: av.accentColor }}
                    >
                      <Check size={10} strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="absolute top-2 right-2 text-[10px] text-[#00FF88] font-bold">
                      ✓
                    </span>
                  )
                ) : (
                  <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-gray-400">
                    <Lock size={10} />
                  </span>
                )}

                <div
                  className="w-13 h-13 flex items-center justify-center mt-4 mb-2 transition-transform"
                  style={{
                    width: 52,
                    height: 52,
                    opacity: unlockInfo.unlocked ? 1 : 0.4,
                    filter: unlockInfo.unlocked ? 'none' : 'grayscale(65%)',
                  }}
                >
                  <img
                    src={av.dataUrl}
                    alt={av.name}
                    className="w-full h-full object-contain"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>

                <div className="w-full">
                  <span className="block text-[11px] font-bold text-gray-100 truncate w-full">
                    {av.name}
                  </span>

                  <span
                    className="inline-block text-[9px] font-mono px-1.5 py-0.5 rounded mt-1"
                    style={{
                      color: av.accentColor,
                      background: `${av.accentColor}18`,
                    }}
                  >
                    {av.category}
                  </span>

                  {/* Mini barra de progresso do planeta */}
                  <div className="mt-2 w-full bg-[#1F2937] h-1 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${pct}%`,
                        background: unlockInfo.unlocked ? '#00FF88' : av.accentColor,
                      }}
                    />
                  </div>
                  <span className="block text-[9px] text-gray-400 mt-1 truncate">
                    {unlockInfo.unlocked
                      ? '★ Desbloqueado'
                      : `${unlockInfo.completedInPlanet}/${unlockInfo.totalInPlanet} aulas`}
                  </span>
                </div>
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
        completedLessons={completedLessons}
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