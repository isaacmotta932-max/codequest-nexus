import { ACHIEVEMENTS, type Rarity } from '@/data/achievements';
import { useProgress } from '@/hooks/useProgress';
import { useState } from 'react';

const RARITY_COLORS: Record<Rarity, string> = {
  common: '#9CA3AF',
  rare: '#3B82F6',
  epic: '#8B5CF6',
  legendary: '#FFD700',
  mythic: '#FF0080',
};

const RARITY_LABELS: Record<Rarity, string> = {
  common: 'Comum',
  rare: 'Raro',
  epic: 'Epico',
  legendary: 'Lendario',
  mythic: 'Mitico',
};

export function Achievements() {
  const { progress } = useProgress();
  const [filter, setFilter] = useState<'all' | Rarity>('all');

  // Verifica quais achievements foram desbloqueadas
  const achievementsWithStatus = ACHIEVEMENTS.map((a) => {
    let currentValue = 0;
    if (a.criteria.type === 'lessons_completed') currentValue = progress.completedLessons.length;
    if (a.criteria.type === 'xp_earned') currentValue = progress.xp;
    if (a.criteria.type === 'downloads') currentValue = progress.downloadedLessons.length;
    if (a.criteria.type === 'courses_completed') {
      const uniqueCourses = new Set(
        progress.completedLessons.map((id) => id.split('-')[0])
      );
      currentValue = uniqueCourses.size;
    }
    return {
      ...a,
      unlocked: currentValue >= a.criteria.target,
      progress: currentValue,
    };
  });

  const filtered = filter === 'all'
    ? achievementsWithStatus
    : achievementsWithStatus.filter((a) => a.rarity === filter);

  const unlockedCount = achievementsWithStatus.filter((a) => a.unlocked).length;

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-5 md:p-8 text-white">
      <div className="mb-5">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFD700]">
          SALA DE TROFÉUS
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight m-0 mt-1">
          🏆 Conquistas
        </h1>
        <p className="text-xs md:text-sm text-gray-400 m-0 mt-1">
          {unlockedCount} de {ACHIEVEMENTS.length} desbloqueadas
        </p>
      </div>

      {/* iOS Horizontal Scrollable Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4 -mx-4 px-4 md:mx-0 md:px-0">
        {(['all', 'common', 'rare', 'epic', 'legendary', 'mythic'] as const).map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`ios-press px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer transition-all ${
                active
                  ? 'bg-[#FFD700] text-black border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)]'
                  : 'bg-[#111827]/90 text-gray-300 border-white/10 hover:text-white'
              }`}
            >
              {f === 'all' ? 'Todas' : RARITY_LABELS[f as Rarity]}
            </button>
          );
        })}
      </div>

      {/* 2 Columns on Mobile, up to 4 on Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filtered.map((achievement) => {
          const color = RARITY_COLORS[achievement.rarity];
          return (
            <div
              key={achievement.id}
              className="ios-glass rounded-2xl p-4 md:p-5 text-center flex flex-col items-center justify-between transition-transform duration-200"
              style={{
                border: `1.5px solid ${achievement.unlocked ? `${color}80` : 'rgba(255,255,255,0.07)'}`,
                opacity: achievement.unlocked ? 1 : 0.45,
                filter: achievement.unlocked ? 'none' : 'grayscale(80%)',
              }}
            >
              <div className="w-full flex flex-col items-center">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-3xl md:text-4xl mb-2.5"
                  style={{
                    background: achievement.unlocked ? `${color}15` : 'rgba(255,255,255,0.04)',
                    filter: achievement.unlocked ? 'none' : 'blur(1px)',
                  }}
                >
                  {achievement.unlocked ? achievement.icon : '🔒'}
                </div>

                <h3
                  className="text-xs md:text-sm font-bold m-0 mb-1 line-clamp-1"
                  style={{
                    color: achievement.unlocked ? color : '#9CA3AF',
                  }}
                >
                  {achievement.name}
                </h3>

                <p className="text-[11px] md:text-xs text-gray-400 m-0 mb-3 line-clamp-2 leading-snug">
                  {achievement.description}
                </p>
              </div>

              <div className="w-full flex flex-col items-center gap-1.5">
                <span
                  className="inline-block text-[9px] md:text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                  style={{
                    background: `${color}20`,
                    color: color,
                    border: `1px solid ${color}60`,
                  }}
                >
                  {RARITY_LABELS[achievement.rarity]}
                </span>

                <span className="text-xs font-extrabold text-[#FFD700]">
                  +{achievement.xpReward} XP
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
