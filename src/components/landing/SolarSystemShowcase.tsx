import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { COURSES } from '@/data/courses';

export function SolarSystemShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationDeg, setRotationDeg] = useState(0);

  const total = COURSES.length;
  const stepDeg = 360 / total;
  const activeCourse = COURSES[activeIndex];

  const selectPlanet = (targetIndex: number) => {
    const normalizedTarget = ((targetIndex % total) + total) % total;
    if (normalizedTarget === activeIndex) return;

    let diff = normalizedTarget - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    setRotationDeg((prev) => prev - diff * stepDeg);
    setActiveIndex(normalizedTarget);
  };

  // Raio da órbita principal dos planetas
  const ORBIT_RADIUS = 172;

  return (
    <section id="trilhas" className="relative z-10 px-4 py-14 md:py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho limpo */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white m-0">
            Sistema Solar do Código
          </h2>
          <p className="mt-2 text-sm text-gray-400 m-0">
            Clique em qualquer planeta para girar a órbita e conhecer a linguagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* ===============================================================
              SISTEMA SOLAR INTERATIVO
             =============================================================== */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-[310px] h-[310px] sm:w-[420px] sm:h-[420px] select-none">
              <div className="relative w-[420px] h-[420px] scale-[0.74] sm:scale-100 shrink-0 flex items-center justify-center">
                {/* Órbitas decorativas sutis */}
                <div className="pointer-events-none absolute w-[150px] h-[150px] rounded-full border border-white/[0.05]" />
                <div className="pointer-events-none absolute w-[250px] h-[250px] rounded-full border border-dashed border-white/[0.06]" />
                <div
                  className="pointer-events-none absolute rounded-full border border-white/[0.1]"
                  style={{
                    width: ORBIT_RADIUS * 2,
                    height: ORBIT_RADIUS * 2,
                  }}
                />
                <div className="pointer-events-none absolute w-[405px] h-[405px] rounded-full border border-white/[0.03]" />

                {/* Marcador sutil na posição de destaque (3 horas / direita) */}
                <div
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-[1px] w-14 opacity-40 transition-colors duration-300"
                  style={{
                    left: `calc(50% + ${ORBIT_RADIUS + 26}px)`,
                    background: `linear-gradient(90deg, ${activeCourse.color}, transparent)`,
                  }}
                />

                {/* Sol / Estrela Central */}
                <div className="relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#FDE047]/20 via-[#00D4FF]/15 to-[#8B5CF6]/20 border border-white/15 backdrop-blur-md shadow-[0_0_50px_rgba(0,212,255,0.18)]">
                  <div
                    className="absolute inset-2 rounded-full opacity-35 blur-md transition-colors duration-500"
                    style={{ backgroundColor: activeCourse.color }}
                  />
                  <span className="relative text-2xl">{activeCourse.icon}</span>
                  <span className="relative font-display text-[9px] font-bold tracking-[0.2em] text-gray-300 mt-1">
                    NEXUS
                  </span>
                </div>

                {/* Anel giratório com os planetas */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: rotationDeg }}
                  transition={{
                    type: 'spring',
                    stiffness: 52,
                    damping: 16,
                    mass: 0.9,
                  }}
                >
                  {COURSES.map((course, idx) => {
                    const angleRad = (idx * stepDeg * Math.PI) / 180;
                    const x = Math.cos(angleRad) * ORBIT_RADIUS;
                    const y = Math.sin(angleRad) * ORBIT_RADIUS;
                    const isSelected = idx === activeIndex;

                    return (
                      <div
                        key={course.id}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                      >
                        <motion.button
                          type="button"
                          onClick={() => selectPlanet(idx)}
                          title={`${course.name} — ${course.planetName}`}
                          aria-label={`Selecionar ${course.name}`}
                          animate={{
                            rotate: -rotationDeg,
                            scale: isSelected ? 1.28 : 1,
                          }}
                          whileHover={{ scale: isSelected ? 1.32 : 1.15 }}
                          transition={{
                            rotate: {
                              type: 'spring',
                              stiffness: 52,
                              damping: 16,
                              mass: 0.9,
                            },
                            scale: { duration: 0.2 },
                          }}
                          className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full border cursor-pointer transition-shadow"
                          style={{
                            background: isSelected
                              ? `radial-gradient(circle at 30% 30%, ${course.color}55, #0B101E 85%)`
                              : `radial-gradient(circle at 30% 30%, ${course.color}24, #090E1B 85%)`,
                            borderColor: isSelected
                              ? course.color
                              : 'rgba(255, 255, 255, 0.14)',
                            boxShadow: isSelected
                              ? `0 0 24px ${course.color}55, inset 0 0 12px ${course.color}30`
                              : '0 4px 12px rgba(0, 0, 0, 0.4)',
                          }}
                        >
                          <span className="text-lg leading-none">{course.icon}</span>

                          {/* Anel orbital sutil no planeta ativo */}
                          {isSelected && (
                            <span
                              className="pointer-events-none absolute -inset-1.5 rounded-full border opacity-50"
                              style={{ borderColor: course.color }}
                            />
                          )}
                        </motion.button>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>

          {/* ===============================================================
              INFORMAÇÕES ESSENCIAIS DA LINGUAGEM SELECIONADA
             =============================================================== */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCourse.slug}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/[0.08] bg-[#0B101E]/85 backdrop-blur-md p-6 sm:p-7"
              >
                {/* Identificação essencial */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 border"
                    style={{
                      backgroundColor: `${activeCourse.color}15`,
                      borderColor: `${activeCourse.color}40`,
                    }}
                  >
                    {activeCourse.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-medium text-gray-400 block truncate">
                      Planeta {activeCourse.planetName} • {activeCourse.level}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white m-0 mt-0.5 truncate">
                      {activeCourse.name}
                    </h3>
                  </div>
                </div>

                {/* Descrição direta */}
                <p className="text-sm text-gray-300 leading-relaxed m-0 mb-5">
                  {activeCourse.description}
                </p>

                {/* Métricas essenciais em linha */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 pb-5 border-b border-white/[0.06]">
                  <span>
                    <strong className="text-white font-semibold">
                      {activeCourse.lessons.length}
                    </strong>{' '}
                    aulas práticas
                  </span>
                  <span className="text-white/15">•</span>
                  <span>
                    <strong
                      className="font-semibold"
                      style={{ color: activeCourse.color }}
                    >
                      +{activeCourse.totalXp} XP
                    </strong>{' '}
                    no total
                  </span>
                </div>

                {/* Ações: Iniciar + Navegação rápida na órbita */}
                <div className="flex items-center justify-between gap-3">
                  <Link
                    to="/auth/register"
                    className="ios-press no-underline flex-1 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-[#060913] text-center inline-flex items-center justify-center gap-2 transition-opacity hover:opacity-95"
                    style={{ backgroundColor: activeCourse.color }}
                  >
                    <Play size={14} fill="#060913" />
                    <span>Explorar {activeCourse.name}</span>
                  </Link>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => selectPlanet(activeIndex - 1)}
                      aria-label="Planeta anterior"
                      className="ios-press w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-gray-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => selectPlanet(activeIndex + 1)}
                      aria-label="Próximo planeta"
                      className="ios-press w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-gray-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center text-[11px] text-gray-500">
                  Planeta {activeIndex + 1} de {total}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
