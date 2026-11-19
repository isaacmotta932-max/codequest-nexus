import { useEffect, useMemo, useState } from 'react';
import { getMissions } from '@/lib/mockApi';
import { useProgress } from '@/hooks/useProgress';
import type { Mission } from '@/types';

export function Missions() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);

  const { progress } = useProgress();

  useEffect(() => {
    async function loadMissions() {
      try {
        const data = await getMissions();
        setMissions(data);
      } finally {
        setLoading(false);
      }
    }

    loadMissions();
  }, []);

  /*
   * O mockApi possui valores iniciais fixos para as missões.
   * Aqui usamos o progresso REAL do aluno.
   */
  const missionsWithProgress = useMemo(() => {
    const completedLessons =
      progress?.completedLessons?.length ?? 0;

    return missions.map((mission) => {
      let currentProgress = mission.progress;

      /*
       * mission-1:
       * Complete sua primeira aula.
       */
      if (mission.id === 'mission-1') {
        currentProgress = Math.min(
          completedLessons,
          mission.target
        );
      }

      /*
       * mission-2:
       * Complete 3 aulas.
       */
      if (mission.id === 'mission-2') {
        currentProgress = Math.min(
          completedLessons,
          mission.target
        );
      }

      return {
        ...mission,
        progress: currentProgress,
        completed:
          currentProgress >= mission.target,
      };
    });
  }, [missions, progress?.completedLessons]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-white text-sm">
        Carregando missões...
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 py-5 md:p-8 text-white">
      <div className="mb-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#00D4FF]">
          CENTRAL DE OPERAÇÕES
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight m-0 mt-1">
          🎯 Missões
        </h1>
        <p className="text-xs md:text-sm text-gray-400 m-0 mt-1">
          Complete missões diárias e semanais para ganhar XP extra.
        </p>
      </div>

      {/* Resumo de Progresso */}
      <div className="ios-glass rounded-2xl p-4 md:p-5 mb-5 flex items-center justify-between gap-4 border border-[#00D4FF]/25">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#00D4FF]/15 border border-[#00D4FF]/30 flex items-center justify-center text-xl shrink-0">
            📚
          </div>
          <div>
            <strong className="text-sm md:text-base text-white block">
              Progresso das aulas
            </strong>
            <p className="text-xs text-gray-400 m-0 mt-0.5">
              {progress?.completedLessons?.length ?? 0} aulas concluídas até agora
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#00FF88]/15 text-[#00FF88] border border-[#00FF88]/30 shrink-0">
          Ativo
        </span>
      </div>

      {/* Lista de Missões estilo iOS Native */}
      <div className="flex flex-col gap-3">
        {missionsWithProgress.map((mission) => {
          const percentage =
            mission.target > 0
              ? Math.min((mission.progress / mission.target) * 100, 100)
              : 0;

          return (
            <div
              key={mission.id}
              className="ios-glass rounded-2xl p-4 md:p-5 transition-all"
              style={{
                borderColor: mission.completed
                  ? 'rgba(34, 197, 94, 0.5)'
                  : 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="m-0 text-base md:text-lg font-bold text-white">
                      {mission.title}
                    </h2>
                    {mission.completed && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30">
                        ✓ Concluída
                      </span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-gray-400 m-0 mt-1 leading-relaxed">
                    {mission.description}
                  </p>
                </div>

                <span className="px-2.5 py-1 rounded-xl text-xs font-extrabold bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/30 shrink-0">
                  +{mission.xpReward} XP
                </span>
              </div>

              <div className="mt-3.5 h-2 bg-[#1F2937] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${percentage}%`,
                    background: mission.completed
                      ? 'linear-gradient(90deg, #22C55E, #10B981)'
                      : 'linear-gradient(90deg, #00D4FF, #8B5CF6)',
                  }}
                />
              </div>

              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-400 text-xs m-0 font-medium">
                  Progresso: {mission.progress} / {mission.target}
                </p>

                <span className="text-xs font-bold text-gray-300">
                  {Math.round(percentage)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
