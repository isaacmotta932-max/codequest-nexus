import { useEffect, useState } from 'react';
import type {
  CSSProperties,
  ReactNode,
} from 'react';
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
      <div style={styles.center}>
        <p>Carregando perfil...</p>
      </div>
    );
  }

  if (progressLoading) {
    return (
      <div style={styles.center}>
        <p>
          Carregando seu progresso...
        </p>
      </div>
    );
  }

  /*
   * Dados pessoais do usuário.
   */
  const profile: ProfileUser =
    firebaseProfile || {
      username:
        user.username,

      email:
        user.email,

      avatarUrl:
        user.avatarUrl || '',

      currentStreak:
        user.currentStreak,

      longestStreak:
        user.longestStreak,

      className:
        user.className,

      title:
        user.title,

      joinedAt:
        normalizeDate(
          user.joinedAt
        ),
    };

  /*
   * IMPORTANTE:
   *
   * XP vem exclusivamente do progresso
   * do usuário atual.
   *
   * Não usamos user.xp.
   * Não usamos users/{uid}.xp.
   * Não usamos valor fixo.
   */
  const xp = Math.max(
    0,
    progress.xp
  );

  const levelData =
    calculateLevelProgress(xp);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <section style={styles.hero}>
          <div style={styles.heroGlow} />

          <div style={styles.heroContent}>
            <div style={styles.avatarWrapper}>
              <div
                style={{ ...styles.avatar, cursor: 'pointer' }}
                onClick={() => setIsAvatarModalOpen(true)}
                title="Clique para escolher seu avatar pixel art"
              >
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.username}
                    style={{
                      ...styles.avatarImage,
                      imageRendering: 'pixelated',
                    }}
                  />
                ) : (
                  profile.username
                    .charAt(0)
                    .toUpperCase()
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsAvatarModalOpen(true)}
                style={styles.avatarChangeBadge}
                title="Escolher entre 10 ícones pixelados de programação"
              >
                <Sparkles size={14} />
              </button>
            </div>

            <div>
              <div
                style={styles.eyebrow}
              >
                CODEQUEST MEMBER
              </div>

              <h1 style={styles.name}>
                {profile.username}
              </h1>

              <p style={styles.email}>
                {profile.email}
              </p>

              <div
                style={styles.badges}
              >
                <Badge>
                  {profile.title}
                </Badge>

                <Badge>
                  {profile.className}
                </Badge>

                <Badge>
                  Nível{' '}
                  {levelData.level}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* 10 Opções de Ícones Pixelados de Programação */}
        <section style={styles.pixelAvatarsSection}>
          <div style={styles.pixelAvatarsHeader}>
            <div>
              <div style={styles.eyebrow}>IDENTIDADE VISUAL 8-BIT</div>
              <h2 style={styles.pixelAvatarsTitle}>
                Insígnias de Programação em Pixel Art
              </h2>
              <p style={styles.pixelAvatarsSubtitle}>
                Escolha seu avatar temático de desenvolvedor: 10 opções exclusivas criadas para coders do Nexus.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsAvatarModalOpen(true)}
              style={styles.openModalBtn}
            >
              <Sparkles size={15} /> Ver Catálogo Completo
            </button>
          </div>

          <div style={styles.pixelAvatarsGrid}>
            {PIXEL_AVATARS.map((av) => {
              const isSelected =
                profile.avatarUrl === av.dataUrl || profile.avatarUrl === av.id;
              return (
                <button
                  key={av.id}
                  type="button"
                  onClick={() => handleSelectAvatar(av)}
                  style={{
                    ...styles.pixelAvatarItem,
                    borderColor: isSelected
                      ? av.accentColor
                      : 'rgba(255, 255, 255, 0.08)',
                    boxShadow: isSelected
                      ? `0 0 16px ${av.accentColor}50`
                      : 'none',
                    background: isSelected
                      ? 'rgba(255, 255, 255, 0.07)'
                      : 'rgba(15, 23, 42, 0.6)',
                  }}
                  title={`${av.name} (${av.category}) - ${av.description}`}
                >
                  <div style={styles.pixelAvatarImgWrapper}>
                    <img
                      src={av.dataUrl}
                      alt={av.name}
                      style={styles.pixelAvatarImg}
                    />
                  </div>
                  <span style={styles.pixelAvatarName}>{av.name}</span>
                  <span
                    style={{
                      ...styles.pixelAvatarCategory,
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

        <div style={styles.statsGrid}>
          <Stat
            icon="⭐"
            title="XP"
            value={xp}
          />

          <Stat
            icon="🔥"
            title="Sequência atual"
            value={
              profile.currentStreak
            }
          />

          <Stat
            icon="🏆"
            title="Maior sequência"
            value={
              profile.longestStreak
            }
          />

          <Stat
            icon="🎖️"
            title="Nível"
            value={
              levelData.level
            }
          />
        </div>

        <section
          style={
            styles.progressCard
          }
        >
          <div
            style={
              styles.progressHeader
            }
          >
            <div>
              <h2
                style={
                  styles.sectionTitle
                }
              >
                🚀 Progresso para o
                próximo nível
              </h2>

              <p
                style={
                  styles.muted
                }
              >
                Continue estudando
                para ganhar mais XP.
              </p>
            </div>

            <strong
              style={
                styles.progressPercent
              }
            >
              {levelData.percent}%
            </strong>
          </div>

          <div
            style={
              styles.progressTrack
            }
          >
            <div
              style={{
                ...styles.progressFill,
                width: `${levelData.percent}%`,
              }}
            />
          </div>

          <p
            style={
              styles.progressCaption
            }
          >
            {Math.floor(
              levelData.xpIntoLevel
            ).toLocaleString(
              'pt-BR'
            )}{' '}
            /{' '}
            {Math.floor(
              levelData.xpNeeded
            ).toLocaleString(
              'pt-BR'
            )}{' '}
            XP para o nível{' '}
            {levelData.level + 1}
          </p>
        </section>

        <section style={styles.infoGrid}>
          <InfoCard
            icon="📅"
            title="Membro desde"
            value={new Date(
              profile.joinedAt
            ).toLocaleDateString(
              'pt-BR'
            )}
          />

          <InfoCard
            icon="🧑‍💻"
            title="Classe atual"
            value={
              profile.className
            }
          />

          <InfoCard
            icon="👑"
            title="Título"
            value={
              profile.title
            }
          />
        </section>

        <AvatarSelectorModal
          isOpen={isAvatarModalOpen}
          onClose={() => setIsAvatarModalOpen(false)}
          currentAvatarUrl={profile.avatarUrl}
          onSelect={handleSelectAvatar}
        />
      </div>
    </div>
  );
}

function Badge({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span style={styles.badge}>
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
    <div style={styles.stat}>
      <div
        style={styles.statIcon}
      >
        {icon}
      </div>

      <div
        style={styles.statLabel}
      >
        {title}
      </div>

      <strong
        style={styles.statNumber}
      >
        {value.toLocaleString(
          'pt-BR'
        )}
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
    <div style={styles.infoCard}>
      <div
        style={styles.infoIcon}
      >
        {icon}
      </div>

      <h3
        style={styles.infoTitle}
      >
        {title}
      </h3>

      <p style={styles.muted}>
        {value}
      </p>
    </div>
  );
}

const styles: Record<
  string,
  CSSProperties
> = {
  page: {
    minHeight: '100vh',
    padding: 30,
    color: 'white',
    fontFamily: 'sans-serif',
    background:
      'radial-gradient(circle at top right, #182447 0%, #080D19 50%, #050811 100%)',
    boxSizing: 'border-box',
  },

  center: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },

  container: {
    maxWidth: 1000,
    margin: '0 auto',
  },

  hero: {
    position: 'relative',
    background:
      'linear-gradient(135deg, #111827, #10172A)',
    border:
      '1px solid #273653',
    borderRadius: 20,
    padding: 30,
    overflow: 'hidden',
  },

  heroGlow: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: '50%',
    background:
      'rgba(0, 212, 255, 0.08)',
    right: -80,
    top: -100,
  },

  heroContent: {
    position: 'relative',
    display: 'flex',
    gap: 25,
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  avatar: {
    width: 100,
    height: 100,
    flexShrink: 0,
    borderRadius: '50%',
    background:
      'linear-gradient(135deg, #00D4FF, #8B5CF6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    boxShadow:
      '0 0 35px rgba(0,212,255,.25)',
    overflow: 'hidden',
  },

  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  eyebrow: {
    color: '#00D4FF',
    fontSize: 11,
    letterSpacing: 3,
    fontWeight: 'bold',
  },

  name: {
    margin: '6px 0',
    fontSize: 32,
  },

  email: {
    margin: 0,
    color: '#9CA3AF',
  },

  badges: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginTop: 12,
  },

  badge: {
    display: 'inline-block',
    padding: '6px 10px',
    borderRadius: 20,
    background: '#17233A',
    border:
      '1px solid #29415F',
    color: '#D1D5DB',
    fontSize: 11,
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 15,
    marginTop: 20,
  },

  stat: {
    background: '#0D1424',
    border:
      '1px solid #1F2937',
    borderRadius: 14,
    padding: 20,
  },

  statIcon: {
    fontSize: 24,
  },

  statLabel: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 8,
  },

  statNumber: {
    display: 'block',
    marginTop: 3,
    fontSize: 24,
  },

  progressCard: {
    background: '#0D1424',
    border:
      '1px solid #1F2937',
    borderRadius: 16,
    padding: 25,
    marginTop: 20,
  },

  progressHeader: {
    display: 'flex',
    justifyContent:
      'space-between',
    gap: 10,
    alignItems: 'flex-start',
    marginBottom: 15,
  },

  sectionTitle: {
    margin: 0,
    fontSize: 18,
  },

  muted: {
    color: '#9CA3AF',
    marginTop: 8,
  },

  progressPercent: {
    color: '#00D4FF',
    fontSize: 18,
  },

  progressTrack: {
    height: 12,
    background: '#1F2937',
    borderRadius: 20,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    background:
      'linear-gradient(90deg, #00D4FF, #8B5CF6)',
    borderRadius: 20,
  },

  progressCaption: {
    color: '#6B7280',
    fontSize: 12,
    marginBottom: 0,
  },

  infoGrid: {
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 15,
    marginTop: 20,
  },

  infoCard: {
    background: '#0D1424',
    border:
      '1px solid #1F2937',
    borderRadius: 14,
    padding: 20,
  },

  infoIcon: {
    fontSize: 28,
  },

  infoTitle: {
    marginBottom: 0,
  },

  avatarWrapper: {
    position: 'relative',
    display: 'inline-block',
  },

  avatarChangeBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    background: '#00E5FF',
    color: '#0A0E1A',
    borderRadius: '50%',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #0B1220',
    boxShadow: '0 0 12px rgba(0, 229, 255, 0.6)',
    cursor: 'pointer',
  },

  pixelAvatarsSection: {
    background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(15, 23, 42, 0.9))',
    border: '1px solid rgba(0, 229, 255, 0.2)',
    borderRadius: 18,
    padding: '24px 28px',
    marginTop: 20,
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
  },

  pixelAvatarsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },

  pixelAvatarsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: '4px 0',
    color: '#FFFFFF',
    letterSpacing: '0.5px',
  },

  pixelAvatarsSubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    margin: 0,
  },

  openModalBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 16px',
    borderRadius: 10,
    background: 'linear-gradient(135deg, #00E5FF, #8B5CF6)',
    color: '#0A0E1A',
    fontWeight: 'bold',
    fontSize: 13,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)',
  },

  pixelAvatarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
    gap: 12,
  },

  pixelAvatarItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px 8px',
    borderRadius: 12,
    border: '1px solid',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  pixelAvatarImgWrapper: {
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },

  pixelAvatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    imageRendering: 'pixelated',
  },

  pixelAvatarName: {
    fontSize: 11,
    fontWeight: 600,
    color: '#E2E8F0',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
  },

  pixelAvatarCategory: {
    fontSize: 9,
    fontFamily: 'monospace',
    padding: '2px 6px',
    borderRadius: 4,
    marginTop: 4,
  },
};