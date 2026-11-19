import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Sparkles,
  Trophy,
  Code2,
  Cpu,
  ArrowRight,
  Star,
  BookOpen,
  CheckCircle2,
  Terminal,
  ChevronRight,
  Play,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ParticleBackground } from '@/components/effects/ParticleBackground';
import { COURSES } from '@/data/courses';
import { dbGetPlatformStats, PlatformStats } from '@/lib/database';

type SectorFilter = 'all' | 'frontend' | 'backend' | 'data-devops';

function getCourseSector(slug: string): Exclude<SectorFilter, 'all'> {
  const s = slug.toLowerCase();
  if (['html', 'css', 'javascript', 'typescript', 'react'].includes(s)) {
    return 'frontend';
  }
  if (['nodejs', 'python', 'java', 'golang', 'rust', 'graphql'].includes(s)) {
    return 'backend';
  }
  return 'data-devops';
}

const SECTOR_LABELS: Record<SectorFilter, { label: string; icon: string }> = {
  all: { label: 'Todos (15)', icon: '🌌' },
  frontend: { label: 'Front-End & UI', icon: '🌐' },
  backend: { label: 'Back-End & IA', icon: '⚙️' },
  'data-devops': { label: 'Dados, Cloud & Sec', icon: '🛡️' },
};

// Mini desafio rápido para o visitante experimentar na própria Landing Page
const MINI_CHALLENGES = [
  {
    id: 'demo-html',
    lang: 'HTML5',
    planet: 'Terra Digital',
    color: '#00D4FF',
    question: 'Complete a tag para criar um título principal na página:',
    codePrefix: '<',
    codeSuffix: '>Bem-vindo ao Nexus</h1>',
    options: ['h1', 'title', 'head', 'p'],
    correct: 'h1',
    feedback: 'Perfeito! A tag <h1> cria o título principal visível da página (+50 XP).',
  },
  {
    id: 'demo-js',
    lang: 'JavaScript',
    planet: 'Cyber Core',
    color: '#FFD700',
    question: 'Qual comando exibe uma mensagem no console do navegador?',
    codePrefix: '',
    codeSuffix: '("Iniciando propulsores...");',
    options: ['console.log', 'print.screen', 'system.out', 'echo.text'],
    correct: 'console.log',
    feedback: 'Excelente! console.log() é a ferramenta essencial de todo desenvolvedor JS (+75 XP).',
  },
  {
    id: 'demo-py',
    lang: 'Python',
    planet: 'AI Planet',
    color: '#00FF88',
    question: 'Como definimos uma função em Python?',
    codePrefix: '',
    codeSuffix: ' ativar_ia():\n    return "IA Online"',
    options: ['def', 'function', 'fn', 'func'],
    correct: 'def',
    feedback: 'Correto! Em Python usamos a palavra-chave "def" para declarar funções (+80 XP).',
  },
];

export function Landing() {
  const [stats, setStats] = useState<PlatformStats>({
    planets: COURSES.length,
    lessons: COURSES.reduce((sum, c) => sum + (c.lessons?.length || 0), 0),
    coders: 0,
  });

  const [sectorFilter, setSectorFilter] = useState<SectorFilter>('all');
  const [selectedSlug, setSelectedSlug] = useState<string>(COURSES[0]?.slug || 'html');

  // Estado do Mini Desafio Interativo para visitantes
  const [demoIndex, setDemoIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    dbGetPlatformStats().then((res) => {
      if (!cancelled) {
        setStats(res);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredCourses = useMemo(() => {
    if (sectorFilter === 'all') return COURSES;
    return COURSES.filter((c) => getCourseSector(c.slug) === sectorFilter);
  }, [sectorFilter]);

  const activeCourse = useMemo(() => {
    return (
      COURSES.find((c) => c.slug === selectedSlug) ||
      filteredCourses[0] ||
      COURSES[0]
    );
  }, [selectedSlug, filteredCourses]);

  // Quando troca de filtro de setor, seleciona automaticamente o primeiro planeta daquele setor
  const handleSectorChange = (sector: SectorFilter) => {
    setSectorFilter(sector);
    const list =
      sector === 'all'
        ? COURSES
        : COURSES.filter((c) => getCourseSector(c.slug) === sector);
    if (list.length > 0 && !list.some((c) => c.slug === selectedSlug)) {
      setSelectedSlug(list[0].slug);
    }
  };

  const currentDemo = MINI_CHALLENGES[demoIndex];
  const isDemoCorrect = selectedAnswer === currentDemo.correct;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <ParticleBackground />

      {/* =====================================================================
          NAVBAR ESTILO iOS TRANSLÚCIDA
         ===================================================================== */}
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#070C1E]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-15 max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] shadow-[0_0_15px_rgba(0,212,255,0.4)]">
              <Zap className="h-5 w-5 text-white" fill="white" />
            </div>
            <div>
              <h1 className="font-display text-sm md:text-base font-black leading-none tracking-wider">
                CODEQUEST
              </h1>
              <p className="font-display text-[9px] font-bold tracking-[0.28em] text-[#00D4FF] mt-0.5">
                NEXUS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/auth/login" className="no-underline">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            <Link to="/auth/register" className="no-underline">
              <Button variant="primary" size="sm" glow>
                Começar grátis
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          HERO SECTION — LIMPA, FOCADA E RESPONSIVA NO CELULAR
         ===================================================================== */}
      <section className="relative z-10 px-4 pt-10 pb-14 md:pt-16 md:pb-20 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge rarity="legendary" variant="glass" size="md" className="mb-5">
              <Star className="h-3 w-3" />
              ACADEMIA GAMIFICADA DE PROGRAMAÇÃO
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-black leading-[1.12] tracking-tight"
          >
            Aprenda a programar
            <br />
            explorando a{' '}
            <span className="text-gradient">GALÁXIA DO CÓDIGO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-300/90 leading-relaxed"
          >
            Cada linguagem é um planeta com teoria direta ao ponto, editor de código ao vivo, caça aos bugs, missões diárias e insígnias em Pixel Art que evoluem com você.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto"
          >
            <Link to="/auth/register" className="no-underline">
              <Button
                size="lg"
                fullWidth
                glow
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Criar Conta Grátis
              </Button>
            </Link>
            <a href="#explorar-planetas" className="no-underline">
              <Button size="lg" fullWidth variant="outline">
                Explorar os {stats.planets} Planetas
              </Button>
            </a>
          </motion.div>

          {/* Barra Compacta de Estatísticas estilo iOS Widget */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-2.5 sm:gap-4 rounded-2xl bg-white/[0.04] border border-white/10 p-3.5 backdrop-blur-xl"
          >
            {[
              { v: stats.planets, l: 'Planetas' },
              { v: stats.lessons, l: 'Aulas Práticas' },
              { v: stats.coders, l: 'Coders Ativos' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-2xl sm:text-3xl font-black text-gradient m-0">
                  {s.v}
                </p>
                <p className="mt-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 m-0">
                  {s.l}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          EXPLORADOR INTERATIVO DE PLANETAS (COM DESCRIÇÃO COMPLETA E ZERO POLUIÇÃO!)
          Em vez de 15 cards vazios empilhados, o visitante escolhe um planeta e vê
          sua descrição detalhada, nível, XP, aulas e pode clicar para começar!
         ===================================================================== */}
      <section id="explorar-planetas" className="relative z-10 px-4 py-12 md:py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#00D4FF]">
              CATÁLOGO INTERATIVO DE TECNOLOGIAS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black mt-1 m-0">
              EXPLORE A <span className="text-gradient">GALÁXIA</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-400 m-0">
              Toque em qualquer planeta abaixo para inspecionar o que você vai aprender, sua descrição completa, nível e cronograma de aulas.
            </p>
          </div>

          {/* 1. Pílulas de Filtro de Setor */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-5 -mx-4 px-4 sm:mx-0 sm:px-0">
            {(Object.keys(SECTOR_LABELS) as SectorFilter[]).map((key) => {
              const active = sectorFilter === key;
              const item = SECTOR_LABELS[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSectorChange(key)}
                  className={`ios-press flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer border transition-all ${
                    active
                      ? 'bg-[#00D4FF] text-black border-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.35)]'
                      : 'bg-[#0D1426]/90 text-gray-300 border-white/10 hover:text-white'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* 2. Seletor Horizontal de Planetas (Dock Estilo iOS) */}
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2 mb-6 -mx-4 px-4 md:mx-0 md:px-0 snap-x">
            {filteredCourses.map((course) => {
              const isSelected = activeCourse.slug === course.slug;
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => setSelectedSlug(course.slug)}
                  className={`ios-press snap-center shrink-0 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-white/15 scale-[1.03]'
                      : 'bg-[#0B1222]/85 hover:bg-white/[0.07] border-white/10 opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    borderColor: isSelected ? course.color : undefined,
                    boxShadow: isSelected ? `0 0 20px ${course.color}35` : undefined,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{
                      backgroundColor: `${course.color}22`,
                      border: `1px solid ${course.color}45`,
                    }}
                  >
                    {course.icon}
                  </div>
                  <div className="text-left">
                    <div
                      className="text-xs font-extrabold leading-tight"
                      style={{ color: isSelected ? course.color : '#FFFFFF' }}
                    >
                      {course.name}
                    </div>
                    <div className="text-[10px] text-gray-400 leading-tight mt-0.5">
                      {course.planetName}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 3. Painel de Inspeção do Planeta Selecionado (Com Descrição Completa & Aulas!) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCourse.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border bg-[#0B1222]/90 backdrop-blur-xl p-5 sm:p-7 md:p-8 shadow-2xl overflow-hidden relative"
              style={{
                borderColor: `${activeCourse.color}55`,
                boxShadow: `0 12px 40px -10px ${activeCourse.color}25`,
              }}
            >
              {/* Brilho radial suave do planeta ativo */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
                style={{ background: activeCourse.color }}
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Coluna Esquerda: Identidade do Planeta + Descrição */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center text-4xl sm:text-5xl shrink-0 border"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${activeCourse.color}45, #080E1C 80%)`,
                          borderColor: `${activeCourse.color}70`,
                          boxShadow: `0 0 28px ${activeCourse.color}40`,
                        }}
                      >
                        {activeCourse.icon}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border"
                            style={{
                              backgroundColor: `${activeCourse.color}18`,
                              borderColor: `${activeCourse.color}45`,
                              color: activeCourse.color,
                            }}
                          >
                            🪐 Planeta {activeCourse.planetName}
                          </span>
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-gray-200">
                            Nível {activeCourse.level}
                          </span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-black text-white m-0 mt-1.5">
                          {activeCourse.name}
                        </h3>
                      </div>
                    </div>

                    {/* Descrição clara do Planeta */}
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed m-0 mb-5">
                      {activeCourse.description}
                    </p>

                    {/* Metadados do Curso */}
                    <div className="grid grid-cols-3 gap-2.5 mb-6">
                      <div className="rounded-2xl bg-[#070B16]/80 border border-white/10 p-3">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                          Módulos
                        </span>
                        <strong className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                          <BookOpen size={14} style={{ color: activeCourse.color }} />
                          {activeCourse.lessons.length} Aulas
                        </strong>
                      </div>

                      <div className="rounded-2xl bg-[#070B16]/80 border border-white/10 p-3">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                          Recompensa
                        </span>
                        <strong className="text-sm sm:text-base font-extrabold text-[#FFD700] flex items-center gap-1.5 mt-0.5">
                          <Zap size={14} />+{activeCourse.totalXp} XP
                        </strong>
                      </div>

                      <div className="rounded-2xl bg-[#070B16]/80 border border-white/10 p-3">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                          Prática
                        </span>
                        <strong className="text-sm sm:text-base font-extrabold text-[#00FF88] flex items-center gap-1.5 mt-0.5">
                          <Terminal size={14} />
                          Live Code
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Link
                      to="/auth/register"
                      className="ios-press no-underline py-3.5 px-6 rounded-2xl font-extrabold text-sm text-black text-center flex items-center justify-center gap-2 shadow-lg"
                      style={{ background: activeCourse.color }}
                    >
                      <Play size={15} fill="black" />
                      <span>Começar {activeCourse.name} Grátis</span>
                    </Link>
                    <span className="text-xs text-gray-400 text-center sm:text-left">
                      Desbloqueie o Guardião 24-Bit deste planeta ao concluir!
                    </span>
                  </div>
                </div>

                {/* Coluna Direita: Amostra das Aulas deste Planeta */}
                <div className="lg:col-span-5 rounded-2xl bg-[#070B16]/90 border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                      <Layers size={14} style={{ color: activeCourse.color }} />
                      O que você vai dominar em {activeCourse.name}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400">
                      {activeCourse.lessons.length} etapas
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {activeCourse.lessons.slice(0, 4).map((lesson, idx) => (
                      <div
                        key={lesson.id}
                        className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5 flex items-start gap-2.5"
                      >
                        <span
                          className="w-5 h-5 rounded-lg text-[10px] font-extrabold flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            backgroundColor: `${activeCourse.color}22`,
                            color: activeCourse.color,
                          }}
                        >
                          {idx + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-white truncate">
                            {lesson.title.replace(/^\d+\.\s*/, '')}
                          </div>
                          <p className="text-[11px] text-gray-400 m-0 mt-0.5 line-clamp-1">
                            {lesson.description}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-[#FFD700] shrink-0">
                          +{lesson.xpReward} XP
                        </span>
                      </div>
                    ))}
                  </div>

                  {activeCourse.lessons.length > 4 && (
                    <div className="mt-2.5 text-center text-[11px] text-gray-400">
                      + {activeCourse.lessons.length - 4} aulas práticas e desafios interativos
                    </div>
                  )}
                </div>
              </div>

              {/* 4. Visão Geral Compacta de Todos os Planetas do Setor (para troca rápida) */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Todos os planetas deste quadrante (toque para ver a descrição):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {filteredCourses.map((planet) => {
                    const isCurrent = planet.slug === activeCourse.slug;
                    return (
                      <button
                        key={planet.id}
                        type="button"
                        onClick={() => setSelectedSlug(planet.slug)}
                        className={`ios-press text-left p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                          isCurrent
                            ? 'bg-white/10'
                            : 'bg-[#070B16]/60 hover:bg-white/[0.05] border-white/5'
                        }`}
                        style={{
                          borderColor: isCurrent ? planet.color : undefined,
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 mt-0.5"
                          style={{
                            backgroundColor: `${planet.color}20`,
                            border: `1px solid ${planet.color}40`,
                          }}
                        >
                          {planet.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className="text-xs font-extrabold truncate"
                              style={{ color: planet.color }}
                            >
                              {planet.name}
                            </span>
                            <span className="text-[10px] text-gray-400 shrink-0">
                              {planet.planetName}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-300/90 m-0 mt-1 line-clamp-2 leading-snug">
                            {planet.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================================
          SIMULADOR INTERATIVO AO VIVO PARA VISITANTES ("EXPERIMENTE AGORA")
         ===================================================================== */}
      <section className="relative z-10 px-4 py-12 md:py-16 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-[#00D4FF]/30 bg-gradient-to-br from-[#0D162E] via-[#091020] to-[#060A14] p-5 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/30 px-2.5 py-1 rounded-full">
                  <Sparkles size={11} /> Teste Interativo Instantâneo
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-black text-white m-0 mt-2">
                  Experimente resolver uma missão agora
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 m-0 mt-0.5">
                  Veja como funcionam os desafios práticos do CodeQuest Nexus antes mesmo de criar sua conta:
                </p>
              </div>

              {/* Abas de linguagem do simulador */}
              <div className="flex items-center gap-1.5 bg-[#060913] p-1 rounded-xl border border-white/10 self-start">
                {MINI_CHALLENGES.map((ch, idx) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      setDemoIndex(idx);
                      setSelectedAnswer(null);
                    }}
                    className={`ios-press px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer border-none transition-all ${
                      demoIndex === idx
                        ? 'bg-white/15 text-white'
                        : 'bg-transparent text-gray-400 hover:text-white'
                    }`}
                    style={{
                      color: demoIndex === idx ? ch.color : undefined,
                    }}
                  >
                    {ch.lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Pergunta + Terminal */}
            <div className="rounded-2xl bg-[#060913] border border-white/10 p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <span>🪐 Planeta: <strong style={{ color: currentDemo.color }}>{currentDemo.planet}</strong></span>
                <span className="font-mono text-[11px] text-[#FFD700]">Recompensa: +50 XP</span>
              </div>

              <p className="text-sm sm:text-base font-bold text-white m-0 mb-3">
                {currentDemo.question}
              </p>

              {/* Bloco de Código com lacuna interativa */}
              <div className="rounded-xl bg-[#0B1220] border border-white/10 p-3.5 font-mono text-xs sm:text-sm text-gray-200 overflow-x-auto mb-4">
                <code>
                  {currentDemo.codePrefix}
                  <span
                    className="inline-block px-2.5 py-0.5 mx-1 rounded-md font-bold border"
                    style={{
                      backgroundColor: selectedAnswer
                        ? isDemoCorrect
                          ? 'rgba(0, 255, 136, 0.2)'
                          : 'rgba(239, 68, 68, 0.2)'
                        : `${currentDemo.color}20`,
                      borderColor: selectedAnswer
                        ? isDemoCorrect
                          ? '#00FF88'
                          : '#EF4444'
                        : currentDemo.color,
                      color: selectedAnswer
                        ? isDemoCorrect
                          ? '#00FF88'
                          : '#FCA5A5'
                        : currentDemo.color,
                    }}
                  >
                    {selectedAnswer || ' ? '}
                  </span>
                  {currentDemo.codeSuffix}
                </code>
              </div>

              {/* Botões de Opção */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {currentDemo.options.map((opt) => {
                  const chosen = selectedAnswer === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedAnswer(opt)}
                      className="ios-press py-2.5 px-3 rounded-xl font-mono text-xs sm:text-sm font-bold border cursor-pointer transition-all"
                      style={{
                        backgroundColor: chosen
                          ? opt === currentDemo.correct
                            ? 'rgba(0, 255, 136, 0.18)'
                            : 'rgba(239, 68, 68, 0.18)'
                          : '#111A2E',
                        borderColor: chosen
                          ? opt === currentDemo.correct
                            ? '#00FF88'
                            : '#EF4444'
                          : 'rgba(255,255,255,0.1)',
                        color: chosen
                          ? opt === currentDemo.correct
                            ? '#00FF88'
                            : '#FCA5A5'
                          : '#FFFFFF',
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Feedback instantâneo */}
              {selectedAnswer && (
                <div
                  className={`mt-4 p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isDemoCorrect
                      ? 'bg-[#00FF88]/10 border-[#00FF88]/40 text-[#A7F3D0]'
                      : 'bg-red-500/10 border-red-500/40 text-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle2
                      size={18}
                      className={isDemoCorrect ? 'text-[#00FF88] shrink-0' : 'text-red-400 shrink-0'}
                    />
                    <span>
                      {isDemoCorrect
                        ? currentDemo.feedback
                        : 'Quase lá! Toque em outra opção acima para testar.'}
                    </span>
                  </div>

                  {isDemoCorrect && (
                    <Link
                      to="/auth/register"
                      className="ios-press no-underline px-4 py-2 rounded-xl bg-[#00FF88] text-black font-extrabold text-xs shrink-0 text-center"
                    >
                      Salvar meu XP →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          RECURSOS DE ELITE — 3 PILARES DIRETOS E SEM POLUIÇÃO
         ===================================================================== */}
      <section className="relative z-10 px-4 py-10 md:py-14 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Code2,
                title: '4 Tipos de Desafios Práticos',
                desc: 'Quizzes inteligentes, Editor de Código com Live Preview, Caça aos Bugs e Preenchimento de Sintaxe.',
                accent: '#00D4FF',
              },
              {
                icon: Trophy,
                title: 'Gamificação & 20 Avatares Pixel Art',
                desc: 'Suba de nível, cumpra missões diárias e desbloqueie Guardiões 24-Bit que mudam a paleta da sua interface.',
                accent: '#FFD700',
              },
              {
                icon: Sparkles,
                title: 'Apostilas PDF & Modo Mobile iOS',
                desc: 'Estude no celular com layout de app nativo ou baixe as aulas em PDF para revisar offline.',
                accent: '#8B5CF6',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="ios-glass rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="mb-3.5 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${f.accent}18`,
                      color: f.accent,
                      border: `1px solid ${f.accent}35`,
                    }}
                  >
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white m-0">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-400 m-0 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAMADA FINAL (CTA)
         ===================================================================== */}
      <section className="relative z-10 px-4 py-12 md:py-16 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#00D4FF]/40 bg-[#0B1222]/90 backdrop-blur-xl p-7 sm:p-10 text-center shadow-[0_0_40px_rgba(0,212,255,0.15)]">
            <Cpu className="mx-auto mb-3 h-10 w-10 text-[#00D4FF]" />
            <h2 className="font-display text-2xl sm:text-4xl font-black m-0">
              Pronto para iniciar sua <span className="text-gradient">jornada</span>?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
              Escolha seu avatar em Pixel Art, embarque no primeiro planeta e domine a programação passo a passo.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/auth/register" className="no-underline w-full sm:w-auto">
                <Button
                  size="lg"
                  fullWidth
                  glow
                  rightIcon={<ChevronRight className="h-5 w-5" />}
                >
                  Criar Conta Grátis
                </Button>
              </Link>
              <Link to="/auth/login" className="no-underline w-full sm:w-auto">
                <Button size="lg" fullWidth variant="ghost">
                  Já tenho uma conta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-6 text-center text-xs text-gray-500 px-4">
        <p className="m-0">© 2026 CodeQuest Nexus. Feito com ⚡ para a próxima geração de devs.</p>
      </footer>
    </div>
  );
}
