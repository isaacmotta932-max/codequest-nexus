import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap,
  Sparkles,
  Trophy,
  Code2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SpaceBackground } from '@/components/effects/SpaceBackground';
import { SolarSystemShowcase } from '@/components/landing/SolarSystemShowcase';
import { COURSES } from '@/data/courses';
import { dbGetPlatformStats, PlatformStats } from '@/lib/database';

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
    feedback: 'Perfeito! A tag <h1> define o título principal da página (+50 XP).',
  },
  {
    id: 'demo-js',
    lang: 'JavaScript',
    planet: 'Cyber Core',
    color: '#FACC15',
    question: 'Qual comando exibe uma mensagem no console?',
    codePrefix: '',
    codeSuffix: '("Iniciando propulsores...");',
    options: ['console.log', 'print.screen', 'system.out', 'echo.text'],
    correct: 'console.log',
    feedback: 'Excelente! console.log() registra mensagens no console (+75 XP).',
  },
  {
    id: 'demo-py',
    lang: 'Python',
    planet: 'AI Planet',
    color: '#34D399',
    question: 'Como declaramos uma função em Python?',
    codePrefix: '',
    codeSuffix: ' ativar_ia():\n    return "IA Online"',
    options: ['def', 'function', 'fn', 'func'],
    correct: 'def',
    feedback: 'Correto! Em Python usamos "def" para definir funções (+80 XP).',
  },
];

export function Landing() {
  const [stats, setStats] = useState<PlatformStats>({
    planets: COURSES.length,
    lessons: COURSES.reduce((sum, c) => sum + (c.lessons?.length || 0), 0),
    coders: 0,
  });

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

  const currentDemo = MINI_CHALLENGES[demoIndex];
  const isDemoCorrect = selectedAnswer === currentDemo.correct;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040712] text-white selection:bg-[#00D4FF]/30">
      {/* Tema de universo sutil + astronauta flutuando em segundo plano */}
      <SpaceBackground />

      {/* =====================================================================
          NAVBAR MINIMALISTA
         ===================================================================== */}
      <nav className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#040712]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6]">
              <Zap className="h-4 w-4 text-[#040712]" fill="#040712" />
            </div>
            <span className="font-display text-sm sm:text-base font-bold tracking-wider text-white">
              CODEQUEST <span className="text-[#00D4FF] font-normal">NEXUS</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/auth/login"
              className="ios-press no-underline px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Entrar
            </Link>
            <Link
              to="/auth/register"
              className="ios-press no-underline px-4 py-2 rounded-xl bg-white text-[#040712] hover:bg-gray-100 text-xs sm:text-sm font-bold transition-colors"
            >
              Começar grátis
            </Link>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          HERO SECTION
         ===================================================================== */}
      <section className="relative z-10 px-4 pt-14 pb-16 md:pt-24 md:pb-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 text-xs font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Plataforma interativa de programação
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-black leading-[1.12] tracking-tight m-0 text-white"
          >
            Domine programação{' '}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#A78BFA] bg-clip-text text-transparent">
              na prática
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-normal"
          >
            Aulas diretas ao ponto, editor de código no navegador e desafios interativos organizados em um universo de aprendizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <Link
              to="/auth/register"
              className="ios-press no-underline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00D4FF] hover:bg-[#33DDFF] text-[#040712] font-bold text-sm transition-colors shadow-[0_0_25px_rgba(0,212,255,0.25)]"
            >
              <span>Criar conta gratuita</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5px]" />
            </Link>

            <a
              href="#trilhas"
              className="ios-press no-underline inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-sm font-medium text-gray-200 hover:text-white transition-colors"
            >
              <span>Explorar planetas</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-center gap-8 sm:gap-14"
          >
            {[
              { value: stats.planets, label: 'Planetas' },
              { value: stats.lessons, label: 'Aulas Práticas' },
              { value: '100%', label: 'No Navegador' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-xl sm:text-2xl font-bold text-white">
                  {item.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          SISTEMA SOLAR INTERATIVO DOS PLANETAS
         ===================================================================== */}
      <SolarSystemShowcase />

      {/* =====================================================================
          DESAFIO RÁPIDO — TERMINAL LIMPO ESTILO IDE
         ===================================================================== */}
      <section className="relative z-10 px-4 py-14 md:py-20 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white m-0">
              Teste na prática agora
            </h2>
            <p className="mt-1.5 text-sm text-gray-400 m-0">
              Complete a lacuna de código abaixo para ver como funcionam as atividades rápidas.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0B101E]/90 backdrop-blur-md overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 bg-[#070B14]/90 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>

              <div className="flex items-center gap-1">
                {MINI_CHALLENGES.map((ch, idx) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      setDemoIndex(idx);
                      setSelectedAnswer(null);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer border-none transition-colors ${
                      demoIndex === idx
                        ? 'bg-white/10 text-white'
                        : 'bg-transparent text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {ch.lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-sm sm:text-base font-medium text-gray-200 m-0 mb-4">
                {currentDemo.question}
              </p>

              <div className="rounded-xl bg-[#060913] border border-white/[0.06] p-4 font-mono text-xs sm:text-sm text-gray-200 overflow-x-auto mb-5">
                <code>
                  {currentDemo.codePrefix}
                  <span
                    className="inline-block px-2.5 py-0.5 mx-1 rounded font-bold border transition-colors"
                    style={{
                      backgroundColor: selectedAnswer
                        ? isDemoCorrect
                          ? 'rgba(52, 211, 153, 0.15)'
                          : 'rgba(239, 68, 68, 0.15)'
                        : 'rgba(0, 212, 255, 0.12)',
                      borderColor: selectedAnswer
                        ? isDemoCorrect
                          ? '#34D399'
                          : '#EF4444'
                        : '#00D4FF',
                      color: selectedAnswer
                        ? isDemoCorrect
                          ? '#34D399'
                          : '#FCA5A5'
                        : '#00D4FF',
                    }}
                  >
                    {selectedAnswer || ' ? '}
                  </span>
                  {currentDemo.codeSuffix}
                </code>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {currentDemo.options.map((opt) => {
                  const chosen = selectedAnswer === opt;
                  const correct = opt === currentDemo.correct;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedAnswer(opt)}
                      className={`ios-press py-2.5 px-3 rounded-xl font-mono text-xs sm:text-sm font-semibold border cursor-pointer transition-all ${
                        chosen
                          ? correct
                            ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300'
                            : 'bg-red-500/15 border-red-500/50 text-red-300'
                          : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-gray-200'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer && (
                <div
                  className={`mt-4 px-4 py-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm ${
                    isDemoCorrect
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                      : 'bg-red-500/10 border-red-500/30 text-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className={isDemoCorrect ? 'text-emerald-400 shrink-0' : 'text-red-400 shrink-0'}
                    />
                    <span>
                      {isDemoCorrect
                        ? currentDemo.feedback
                        : 'Resposta incorreta. Tente outra opção acima.'}
                    </span>
                  </div>

                  {isDemoCorrect && (
                    <Link
                      to="/auth/register"
                      className="no-underline font-bold text-emerald-300 hover:text-emerald-200 shrink-0"
                    >
                      Continuar aprendendo →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          DIFERENCIAIS — 3 CARDS SIMPLES E ELEGANTES
         ===================================================================== */}
      <section className="relative z-10 px-4 py-12 md:py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Code2,
                title: 'Prática no Navegador',
                desc: 'Resolva quizzes, caça aos bugs e escreva código com feedback imediato sem precisar instalar nada.',
              },
              {
                icon: Trophy,
                title: 'Progressão Gamificada',
                desc: 'Ganhe XP a cada aula, cumpra missões diárias e desbloqueie insígnias conforme evolui.',
              },
              {
                icon: Sparkles,
                title: 'Material para Consulta',
                desc: 'Acesse a teoria formatada a qualquer momento ou baixe apostilas em PDF para estudar offline.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#0B101E]/80 backdrop-blur-sm border border-white/[0.07] p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#00D4FF]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-white m-0">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-400 m-0 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          CTA FINAL & RODAPÉ
         ===================================================================== */}
      <footer className="relative z-10 border-t border-white/[0.06] mt-8 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg font-bold text-white m-0">
              Comece sua jornada no CodeQuest Nexus
            </h3>
            <p className="text-xs text-gray-500 m-0 mt-1">
              © 2026 CodeQuest Nexus • Plataforma gratuita de aprendizado prático.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/auth/login"
              className="ios-press no-underline px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Já tenho conta
            </Link>
            <Link
              to="/auth/register"
              className="ios-press no-underline px-5 py-2.5 rounded-xl bg-[#00D4FF] hover:bg-[#33DDFF] text-[#040712] text-xs font-bold transition-colors"
            >
              Criar conta grátis
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
