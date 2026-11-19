import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  BookOpen,
  Clock,
  Zap,
  CheckCircle2,
  ChevronRight,
  Compass,
  LayoutGrid,
  Orbit,
  X,
  Play,
  Layers,
  User,
} from 'lucide-react';

import { dbGetPublishedCourses, isSupabaseConfigured, supabase } from '@/lib/database';
import { getAllCourses } from '@/data/courses';
import { useProgress } from '@/hooks/useProgress';

interface Lesson {
  id: string;
  title: string;
  description?: string;
  type: 'pdf' | 'video' | 'quiz';
  content?: string;
  duration?: number;
  xpReward?: number;
  fileName?: string;
  fileUrl?: string;
  fileSize?: number;
  fileType?: string;
  uploadedAt?: unknown;
}

interface FirebaseCourse {
  id: string;
  slug?: string;
  name: string;
  planetName?: string;
  description?: string;
  icon?: string;
  color?: string;
  level?: 'Iniciante' | 'Intermediário' | 'Avançado';
  totalXp?: number;
  views?: number;
  lessons?: Lesson[];
  teacherId?: string;
  published?: boolean;
  averageRating?: number;
  ratingsCount?: number;
}

interface CourseWithTeacher extends FirebaseCourse {
  teacherName: string;
  sector: 'frontend' | 'backend' | 'data-devops' | 'custom';
}

type ViewMode = 'constellation' | 'sectors' | 'catalog';
type LevelFilter = 'all' | 'Iniciante' | 'Intermediário' | 'Avançado';

function detectSector(slug: string): CourseWithTeacher['sector'] {
  const s = slug.toLowerCase();
  if (['html', 'css', 'javascript', 'typescript', 'react'].includes(s)) {
    return 'frontend';
  }
  if (['nodejs', 'python', 'java', 'golang', 'rust', 'graphql'].includes(s)) {
    return 'backend';
  }
  if (['sql', 'git', 'docker', 'ciberseguranca'].includes(s)) {
    return 'data-devops';
  }
  return 'custom';
}

const SECTOR_META: Record<
  CourseWithTeacher['sector'],
  { title: string; subtitle: string; badge: string; accent: string; icon: string }
> = {
  frontend: {
    title: 'Nebulosa Front-End & Interfaces',
    subtitle: 'Domine a estrutura, o design futurista e a reatividade visual da web.',
    badge: 'SETOR ALFA • INTERFACES',
    accent: '#00D4FF',
    icon: '🌐',
  },
  backend: {
    title: 'Núcleo Back-End & Sistemas de Alta Performance',
    subtitle: 'Construa motores escaláveis, APIs resilientes, inteligência artificial e microsserviços.',
    badge: 'SETOR BETA • SERVIDORES',
    accent: '#8B5CF6',
    icon: '⚙️',
  },
  'data-devops': {
    title: 'Cinturão de Dados, Cloud & Cibersegurança',
    subtitle: 'Bancos de dados relacionais, containers orbitais, controle temporal e defesa cibernética.',
    badge: 'SETOR GAMA • INFRA & SEC',
    accent: '#00FF88',
    icon: '🛡️',
  },
  custom: {
    title: 'Estações Especiais dos Professores',
    subtitle: 'Módulos exclusivos publicados pelos mentores da academia.',
    badge: 'SETOR ÔMEGA • MENTORIA',
    accent: '#FFD700',
    icon: '🚀',
  },
};

export function Galaxy() {
  const [courses, setCourses] = useState<CourseWithTeacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('sectors');
  const [levelFilter, setLevelFilter] = useState<LevelFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState<CourseWithTeacher | null>(null);

  const { progress } = useProgress();

  const completedSet = useMemo(
    () => new Set(progress?.completedLessons || []),
    [progress?.completedLessons]
  );

  useEffect(() => {
    let cancelled = false;

    const getDefaultCourses = (): CourseWithTeacher[] => {
      return getAllCourses().map((c) => ({
        id: c.id,
        slug: c.slug,
        name: c.name,
        planetName: c.planetName,
        description: c.description,
        icon: c.icon,
        color: c.color,
        level: c.level,
        totalXp: c.totalXp,
        teacherName: 'CodeQuest Nexus',
        teacherId: '',
        published: true,
        sector: detectSector(c.slug),
        lessons: c.lessons.map((l) => ({
          id: l.id,
          title: l.title,
          description: l.description,
          type: 'pdf',
          content: l.content,
          duration: l.duration,
          xpReward: l.xpReward,
        })),
      }));
    };

    const loadCourses = async () => {
      const defaults = getDefaultCourses();
      const defaultsBySlug = new Map(defaults.map((d) => [d.slug, d]));

      if (!isSupabaseConfigured) {
        setCourses(defaults);
        setLoading(false);
        return;
      }

      try {
        const rawCourses = await dbGetPublishedCourses();
        if (cancelled) return;

        if (!rawCourses || rawCourses.length === 0) {
          setCourses(defaults);
          return;
        }

        const loadedCourses = await Promise.all(
          rawCourses.map(async (course) => {
            let teacherName = 'CodeQuest Nexus';
            if (course.teacherId) {
              try {
                const { data: teacher } = await supabase
                  .from('teachers')
                  .select('full_name')
                  .eq('user_id', course.teacherId)
                  .maybeSingle();

                if (teacher?.full_name) {
                  teacherName = teacher.full_name;
                } else {
                  const { data: user } = await supabase
                    .from('users')
                    .select('username')
                    .eq('id', course.teacherId)
                    .maybeSingle();
                  if (user?.username) teacherName = user.username;
                }
              } catch (e) {
                console.error('Erro ao buscar professor:', e);
              }
            }

            const slug = course.slug || course.id;
            const fallbackMeta = defaultsBySlug.get(slug);
            const lessons = Array.isArray(course.lessons) ? course.lessons : [];
            const computedXp = lessons.reduce(
              (acc: number, l: Lesson) => acc + (typeof l.xpReward === 'number' ? l.xpReward : 50),
              0
            );

            return {
              id: course.id,
              ...course,
              slug,
              planetName:
                (course as FirebaseCourse).planetName ||
                fallbackMeta?.planetName ||
                `Planeta ${course.name}`,
              level:
                (course as FirebaseCourse).level ||
                fallbackMeta?.level ||
                'Iniciante',
              totalXp:
                (course as FirebaseCourse).totalXp ||
                fallbackMeta?.totalXp ||
                computedXp,
              teacherName,
              sector: detectSector(slug),
              lessons,
            } as CourseWithTeacher;
          })
        );

        if (!cancelled) {
          setCourses(loadedCourses.length > 0 ? loadedCourses : defaults);
        }
      } catch (error) {
        console.error('Erro ao carregar cursos:', error);
        if (!cancelled) setCourses(defaults);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadCourses();

    return () => {
      cancelled = true;
    };
  }, []);

  // Calcula progresso de cada curso
  const coursesWithStats = useMemo(() => {
    return courses.map((course) => {
      const lessons = course.lessons || [];
      const total = lessons.length;
      const completedCount = lessons.filter((l) => completedSet.has(l.id)).length;
      const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
      const totalDuration = lessons.reduce((acc, l) => acc + (l.duration || 15), 0);
      const totalXp =
        course.totalXp ||
        lessons.reduce((acc, l) => acc + (l.xpReward || 50), 0);
      const nextLesson =
        lessons.find((l) => !completedSet.has(l.id)) || lessons[0];

      return {
        ...course,
        completedCount,
        totalLessons: total,
        percent,
        totalDuration,
        totalXp,
        nextLesson,
      };
    });
  }, [courses, completedSet]);

  // Filtro de busca e nível
  const filteredCourses = useMemo(() => {
    return coursesWithStats.filter((c) => {
      const matchesLevel =
        levelFilter === 'all' || c.level === levelFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        (c.planetName && c.planetName.toLowerCase().includes(q)) ||
        (c.description && c.description.toLowerCase().includes(q));
      return matchesLevel && matchesSearch;
    });
  }, [coursesWithStats, levelFilter, searchQuery]);

  // Estatísticas globais da Galáxia
  const galaxyStats = useMemo(() => {
    const totalPlanets = coursesWithStats.length;
    const conqueredPlanets = coursesWithStats.filter((c) => c.percent === 100).length;
    const inProgressPlanets = coursesWithStats.filter(
      (c) => c.percent > 0 && c.percent < 100
    ).length;
    const totalLessonsAvailable = coursesWithStats.reduce(
      (acc, c) => acc + c.totalLessons,
      0
    );
    return {
      totalPlanets,
      conqueredPlanets,
      inProgressPlanets,
      totalLessonsAvailable,
    };
  }, [coursesWithStats]);

  // Planeta em destaque (em progresso ou o primeiro)
  const featuredCourse = useMemo(() => {
    return (
      coursesWithStats.find((c) => c.percent > 0 && c.percent < 100) ||
      coursesWithStats[0] ||
      null
    );
  }, [coursesWithStats]);

  if (loading) {
    return (
      <div className="flex min-h-[65vh] flex-col items-center justify-center gap-3 text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-[#00D4FF] border-t-transparent" />
        <p className="text-sm text-gray-400">Mapeando coordenadas da Galáxia...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 py-5 md:p-8 text-white">
      {/* =====================================================================
          CABEÇALHO ESPACIAL & RESUMO DE EXPLORAÇÃO
         ===================================================================== */}
      <div className="relative rounded-3xl overflow-hidden p-5 md:p-7 mb-6 border border-[#00D4FF]/25 bg-gradient-to-br from-[#0D1730] via-[#091022] to-[#050814] shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        {/* Glow decorativo */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00D4FF, #8B5CF6, transparent)' }}
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest mb-2.5">
              <Sparkles size={12} /> Mapa Estelar Interativo
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight m-0">
              🌌 Galáxia de Planetas
            </h1>
            <p className="text-xs md:text-sm text-gray-300/90 m-0 mt-1.5 max-w-xl leading-relaxed">
              Cada tecnologia é um mundo próprio com missões, laboratórios de código ao vivo e insígnias. Escolha sua rota espacial ou explore as constelações.
            </p>
          </div>

          {/* Mini Widgets de Status da Galáxia */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 shrink-0">
            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 px-3.5 py-3 text-center">
              <span className="block text-lg md:text-2xl font-extrabold text-[#00D4FF]">
                {galaxyStats.totalPlanets}
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-400 font-medium">
                Planetas
              </span>
            </div>

            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 px-3.5 py-3 text-center">
              <span className="block text-lg md:text-2xl font-extrabold text-[#FFD700]">
                {galaxyStats.inProgressPlanets}
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-400 font-medium">
                Em Órbita
              </span>
            </div>

            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 px-3.5 py-3 text-center">
              <span className="block text-lg md:text-2xl font-extrabold text-[#00FF88]">
                {galaxyStats.conqueredPlanets}
              </span>
              <span className="text-[10px] md:text-[11px] text-gray-400 font-medium">
                Dominados
              </span>
            </div>
          </div>
        </div>

        {/* Destaque de Missão Atual / Recomendada */}
        {featuredCourse && (
          <div
            className="mt-5 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 border"
                style={{
                  background: `${featuredCourse.color}20`,
                  borderColor: `${featuredCourse.color}50`,
                  boxShadow: `0 0 20px ${featuredCourse.color}30`,
                }}
              >
                {featuredCourse.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D4FF]">
                    {featuredCourse.percent > 0 ? '⚡ CONTINUAR ÓRBITA ATUAL' : '🚀 ROTA RECOMENDADA'}
                  </span>
                  <span className="text-[11px] text-gray-400">
                    • {featuredCourse.planetName}
                  </span>
                </div>
                <h2 className="text-sm md:text-base font-bold text-white m-0 mt-0.5 truncate">
                  {featuredCourse.name} — {featuredCourse.nextLesson?.title}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedPlanet(featuredCourse)}
                className="ios-press px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white cursor-pointer"
              >
                Ver Aulas ({featuredCourse.totalLessons})
              </button>
              <Link
                to={`/lesson/${featuredCourse.slug}/${featuredCourse.nextLesson?.id || '1'}`}
                className="ios-press inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-black no-underline shadow-lg"
                style={{ background: featuredCourse.color || '#00D4FF' }}
              >
                <Play size={13} fill="black" /> Decolar
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          BARRA DE CONTROLE ESTILO iOS: SEGMENTED PICKER + BUSCA + NÍVEL
         ===================================================================== */}
      <div className="flex flex-col gap-3.5 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* iOS Segmented Control para alternar o modo de visualização */}
          <div className="grid grid-cols-3 bg-[#0A1020] p-1 rounded-2xl border border-white/10 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setViewMode('sectors')}
              className={`ios-press flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                viewMode === 'sectors'
                  ? 'bg-[#172542] text-[#00D4FF] shadow-[0_2px_10px_rgba(0,212,255,0.2)] border border-[#00D4FF]/30'
                  : 'bg-transparent text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              <Compass size={14} />
              <span>Trilhas</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('constellation')}
              className={`ios-press flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                viewMode === 'constellation'
                  ? 'bg-[#172542] text-[#00D4FF] shadow-[0_2px_10px_rgba(0,212,255,0.2)] border border-[#00D4FF]/30'
                  : 'bg-transparent text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              <Orbit size={14} />
              <span>Planetas</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('catalog')}
              className={`ios-press flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                viewMode === 'catalog'
                  ? 'bg-[#172542] text-[#00D4FF] shadow-[0_2px_10px_rgba(0,212,255,0.2)] border border-[#00D4FF]/30'
                  : 'bg-transparent text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              <LayoutGrid size={14} />
              <span>Catálogo</span>
            </button>
          </div>

          {/* Campo de Busca */}
          <div className="relative flex-1 max-w-md w-full">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar planeta, linguagem ou tecnologia..."
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-[#0A1020] border border-white/10 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white bg-transparent border-none cursor-pointer"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Pílulas de Filtro de Dificuldade */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 md:mx-0 md:px-0">
          {(['all', 'Iniciante', 'Intermediário', 'Avançado'] as const).map((lvl) => {
            const active = levelFilter === lvl;
            return (
              <button
                key={lvl}
                type="button"
                onClick={() => setLevelFilter(lvl)}
                className={`ios-press px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer border transition-all ${
                  active
                    ? 'bg-[#00D4FF] text-black border-[#00D4FF] shadow-[0_0_12px_rgba(0,212,255,0.35)]'
                    : 'bg-[#111827]/90 text-gray-300 border-white/10 hover:text-white'
                }`}
              >
                {lvl === 'all' ? 'Todos os Níveis' : lvl}
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          ESTADO VAZIO
         ===================================================================== */}
      {filteredCourses.length === 0 ? (
        <div className="ios-glass rounded-3xl p-10 text-center text-gray-400">
          <div className="text-4xl mb-3">🪐</div>
          <h2 className="text-base md:text-lg font-bold text-white m-0 mb-1">
            Nenhum planeta encontrado neste quadrante
          </h2>
          <p className="text-xs md:text-sm m-0">
            Tente limpar o filtro de busca ou selecionar outro nível de dificuldade.
          </p>
        </div>
      ) : (
        <>
          {/* =================================================================
              MODO 1: TRILHAS ESPACIAIS (CARROSSEL POR SETOR ESTILO APP STORE)
             ================================================================= */}
          {viewMode === 'sectors' && (
            <div className="flex flex-col gap-8">
              {(['frontend', 'backend', 'data-devops', 'custom'] as const).map((sectorKey) => {
                const sectorCourses = filteredCourses.filter((c) => c.sector === sectorKey);
                if (sectorCourses.length === 0) return null;
                const meta = SECTOR_META[sectorKey];

                return (
                  <section key={sectorKey} className="flex flex-col">
                    {/* Cabeçalho do Setor */}
                    <div className="flex items-end justify-between gap-3 mb-3.5">
                      <div>
                        <span
                          className="text-[10px] font-extrabold uppercase tracking-widest"
                          style={{ color: meta.accent }}
                        >
                          {meta.badge}
                        </span>
                        <h2 className="text-lg md:text-xl font-extrabold text-white m-0 mt-0.5 flex items-center gap-2">
                          <span>{meta.icon}</span>
                          <span>{meta.title}</span>
                        </h2>
                        <p className="text-xs text-gray-400 m-0 mt-0.5">
                          {meta.subtitle}
                        </p>
                      </div>

                      <span className="text-xs font-semibold text-gray-400 shrink-0">
                        {sectorCourses.length}{' '}
                        {sectorCourses.length === 1 ? 'planeta' : 'planetas'}
                      </span>
                    </div>

                    {/* Carrossel horizontal estilo iOS App Store no mobile / Grid no desktop */}
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-2 snap-x snap-mandatory">
                      {sectorCourses.map((course) => {
                        const color = course.color || '#00D4FF';
                        const slug = course.slug || course.id;

                        return (
                          <div
                            key={course.id}
                            className="snap-center shrink-0 w-[85vw] sm:w-[330px] md:w-auto ios-glass rounded-3xl overflow-hidden flex flex-col justify-between border transition-all hover:translate-y-[-2px]"
                            style={{
                              borderColor: `${color}45`,
                              boxShadow: `0 10px 30px -10px ${color}25`,
                            }}
                          >
                            {/* Banner Visual do Planeta */}
                            <div>
                              <div
                                className="relative p-5 pb-4 overflow-hidden"
                                style={{
                                  background: `radial-gradient(circle at 85% 20%, ${color}35 0%, ${color}08 55%, transparent 100%)`,
                                }}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  {/* Orbe 3D do Planeta */}
                                  <button
                                    type="button"
                                    onClick={() => setSelectedPlanet(course)}
                                    className="ios-press relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl cursor-pointer border"
                                    style={{
                                      background: `radial-gradient(circle at 30% 30%, ${color}40, #0A1020 80%)`,
                                      borderColor: `${color}60`,
                                      boxShadow: `0 0 25px ${color}40, inset 0 0 12px ${color}30`,
                                    }}
                                    title="Inspecionar órbita e aulas"
                                  >
                                    <span>{course.icon || '🪐'}</span>
                                  </button>

                                  <div className="flex flex-col items-end gap-1.5">
                                    <span
                                      className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border"
                                      style={{
                                        background: `${color}18`,
                                        color: color,
                                        borderColor: `${color}40`,
                                      }}
                                    >
                                      {course.level || 'Iniciante'}
                                    </span>

                                    <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                                      🪐 {course.planetName}
                                    </span>
                                  </div>
                                </div>

                                <div className="mt-3.5">
                                  <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-extrabold text-white m-0">
                                      {course.name}
                                    </h3>
                                    {course.percent === 100 && (
                                      <CheckCircle2 size={16} className="text-[#00FF88] shrink-0" />
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-300/90 m-0 mt-1 line-clamp-2 leading-relaxed">
                                    {course.description}
                                  </p>
                                </div>

                                {/* Pílulas de Metadados */}
                                <div className="flex items-center gap-3 mt-3.5 pt-3 border-t border-white/10 text-[11px] text-gray-300">
                                  <span className="flex items-center gap-1">
                                    <BookOpen size={12} style={{ color }} />
                                    {course.totalLessons} aulas
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock size={12} className="text-gray-400" />
                                    {course.totalDuration} min
                                  </span>
                                  <span className="flex items-center gap-1 font-bold text-[#FFD700] ml-auto">
                                    <Zap size={12} />
                                    {course.totalXp} XP
                                  </span>
                                </div>
                              </div>

                              {/* Próximas aulas resumidas (2 itens clicáveis) */}
                              <div className="px-4 py-2.5 bg-[#070B16]/60 border-t border-b border-white/5">
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                                    Rota de Aulas
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setSelectedPlanet(course)}
                                    className="text-[11px] font-semibold text-[#00D4FF] bg-transparent border-none cursor-pointer p-0"
                                  >
                                    Ver todas ({course.totalLessons}) →
                                  </button>
                                </div>

                                <div className="flex flex-col gap-1">
                                  {(course.lessons || []).slice(0, 2).map((lesson, idx) => {
                                    const isDone = completedSet.has(lesson.id);
                                    return (
                                      <Link
                                        key={lesson.id || idx}
                                        to={`/lesson/${slug}/${lesson.id}`}
                                        className="ios-press no-underline text-inherit flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] transition-colors"
                                      >
                                        <div className="flex items-center gap-2 min-w-0">
                                          <span
                                            className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${
                                              isDone
                                                ? 'bg-[#00FF88] text-black'
                                                : 'bg-white/10 text-gray-300'
                                            }`}
                                          >
                                            {isDone ? '✓' : idx + 1}
                                          </span>
                                          <span className="text-xs text-gray-200 truncate">
                                            {lesson.title.replace(/^\d+\.\s*/, '')}
                                          </span>
                                        </div>
                                        <ChevronRight size={13} className="text-gray-500 shrink-0" />
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* Rodapé com Progresso e Ação */}
                            <div className="p-4 pt-3">
                              <div className="flex items-center justify-between text-[11px] mb-1.5">
                                <span className="text-gray-400">
                                  {course.completedCount}/{course.totalLessons} concluídas
                                </span>
                                <span className="font-bold" style={{ color }}>
                                  {course.percent}%
                                </span>
                              </div>

                              <div className="h-1.5 bg-[#1F2937] rounded-full overflow-hidden mb-3.5">
                                <div
                                  className="h-full rounded-full transition-all duration-500"
                                  style={{
                                    width: `${course.percent}%`,
                                    background: color,
                                  }}
                                />
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => setSelectedPlanet(course)}
                                  className="ios-press px-3 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-200 cursor-pointer"
                                  title="Inspecionar todas as aulas do planeta"
                                >
                                  <Layers size={15} />
                                </button>

                                <Link
                                  to={`/lesson/${slug}/${course.nextLesson?.id || '1'}`}
                                  className="ios-press flex-1 py-2.5 px-4 rounded-xl text-black no-underline text-center font-bold text-xs shadow-md flex items-center justify-center gap-1.5"
                                  style={{ background: color }}
                                >
                                  <span>
                                    {course.percent > 0 && course.percent < 100
                                      ? 'Continuar Missão'
                                      : course.percent === 100
                                        ? 'Revisar Planeta'
                                        : 'Explorar Planeta'}
                                  </span>
                                  <ChevronRight size={14} strokeWidth={2.5} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          {/* =================================================================
              MODO 2: MAPA DE PLANETAS / CONSTELAÇÃO INTERATIVA
             ================================================================= */}
          {viewMode === 'constellation' && (
            <div className="relative rounded-3xl p-5 md:p-8 border border-white/10 bg-[#070B18] overflow-hidden">
              <div className="text-center max-w-lg mx-auto mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D4FF]">
                  TOQUE EM UM PLANETA PARA ABRIR SUA CÁPSULA DE AULAS
                </span>
                <h2 className="text-lg md:text-2xl font-extrabold text-white m-0 mt-1">
                  Sistema Planetário CodeQuest
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {filteredCourses.map((course, idx) => {
                  const color = course.color || '#00D4FF';
                  // Anel SVG de progresso
                  const radius = 38;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset =
                    circumference - (course.percent / 100) * circumference;

                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => setSelectedPlanet(course)}
                      className="ios-press group relative flex flex-col items-center text-center p-4 rounded-3xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all cursor-pointer"
                      style={{
                        boxShadow:
                          course.percent > 0
                            ? `0 0 25px ${color}25`
                            : 'none',
                      }}
                    >
                      {/* Número da Órbita */}
                      <span className="absolute top-2.5 left-3 text-[10px] font-mono text-gray-500">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Badge de Concluído ou Nível */}
                      <span
                        className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold"
                        style={{
                          background: `${color}20`,
                          color,
                        }}
                      >
                        {course.percent === 100 ? '✓ 100%' : `${course.percent}%`}
                      </span>

                      {/* Orbe com Anel de Progresso Orbital */}
                      <div className="relative w-24 h-24 flex items-center justify-center my-2">
                        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 92 92">
                          <circle
                            cx="46"
                            cy="46"
                            r={radius}
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="4"
                            fill="transparent"
                          />
                          <circle
                            cx="46"
                            cy="46"
                            r={radius}
                            stroke={color}
                            strokeWidth="4"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            fill="transparent"
                          />
                        </svg>

                        {/* Núcleo do Planeta */}
                        <div
                          className="absolute w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: `radial-gradient(circle at 30% 30%, ${color}55, #0B1220 80%)`,
                            boxShadow: `0 0 24px ${color}50, inset 0 0 12px ${color}40`,
                            border: `1.5px solid ${color}80`,
                          }}
                        >
                          {course.icon || '🪐'}
                        </div>
                      </div>

                      <h3 className="text-sm font-extrabold text-white m-0 leading-tight">
                        {course.name}
                      </h3>
                      <span
                        className="text-[11px] font-medium mt-0.5 truncate max-w-full"
                        style={{ color }}
                      >
                        {course.planetName}
                      </span>

                      <div className="mt-2.5 pt-2 border-t border-white/5 w-full flex items-center justify-between text-[10px] text-gray-400">
                        <span>{course.totalLessons} aulas</span>
                        <span className="text-[#FFD700] font-bold">
                          +{course.totalXp} XP
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* =================================================================
              MODO 3: CATÁLOGO COMPACTO ESTILO LISTA NATIVA DO iOS
             ================================================================= */}
          {viewMode === 'catalog' && (
            <div className="ios-glass rounded-3xl overflow-hidden divide-y divide-white/10">
              {filteredCourses.map((course) => {
                const color = course.color || '#00D4FF';

                return (
                  <div
                    key={course.id}
                    className="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors"
                  >
                    <div
                      onClick={() => setSelectedPlanet(course)}
                      className="flex items-center gap-3.5 min-w-0 flex-1 cursor-pointer"
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 border"
                        style={{
                          background: `${color}18`,
                          borderColor: `${color}45`,
                          boxShadow: `0 0 16px ${color}25`,
                        }}
                      >
                        {course.icon || '🚀'}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-extrabold text-white m-0">
                            {course.name}
                          </h3>
                          <span
                            className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                            style={{
                              background: `${color}20`,
                              color,
                            }}
                          >
                            {course.planetName}
                          </span>
                          <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                            {course.level}
                          </span>
                        </div>

                        <p className="text-xs text-gray-400 m-0 mt-1 line-clamp-1">
                          {course.description}
                        </p>

                        <div className="flex items-center gap-3 mt-1.5 text-[11px] text-gray-400">
                          <span>📚 {course.totalLessons} aulas</span>
                          <span>⏱️ {course.totalDuration} min</span>
                          <span className="text-[#FFD700] font-bold">
                            ⚡ {course.totalXp} XP
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:shrink-0">
                      <button
                        type="button"
                        onClick={() => setSelectedPlanet(course)}
                        className="ios-press flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-200 cursor-pointer"
                      >
                        Ver Aulas
                      </button>

                      <Link
                        to={`/lesson/${course.slug || course.id}/${course.nextLesson?.id || '1'}`}
                        className="ios-press flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold text-black no-underline text-center"
                        style={{ background: color }}
                      >
                        {course.percent > 0 ? `Continuar (${course.percent}%)` : 'Iniciar →'}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* =====================================================================
          MODAL / BOTTOM SHEET ESTILO iOS PARA INSPECIONAR O PLANETA E SUAS AULAS
         ===================================================================== */}
      {selectedPlanet && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-md p-0 sm:p-4"
          onClick={() => setSelectedPlanet(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-xl max-h-[88vh] rounded-t-3xl sm:rounded-3xl bg-[#0B1222] border-t sm:border border-white/15 shadow-2xl flex flex-col overflow-hidden"
            style={{
              borderColor: `${selectedPlanet.color || '#00D4FF'}50`,
            }}
          >
            {/* Puxador estilo iOS Sheet no mobile */}
            <div className="flex justify-center pt-2.5 pb-1 sm:hidden">
              <div className="w-10 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* Cabeçalho do Planeta Selecionado */}
            <div
              className="p-5 border-b border-white/10 relative"
              style={{
                background: `radial-gradient(circle at top right, ${selectedPlanet.color || '#00D4FF'}30, transparent 70%)`,
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 border"
                    style={{
                      background: `${selectedPlanet.color || '#00D4FF'}20`,
                      borderColor: `${selectedPlanet.color || '#00D4FF'}50`,
                    }}
                  >
                    {selectedPlanet.icon || '🪐'}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-widest"
                        style={{ color: selectedPlanet.color || '#00D4FF' }}
                      >
                        🪐 {selectedPlanet.planetName || 'Planeta'}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-semibold">
                        {selectedPlanet.level || 'Iniciante'}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-white m-0 mt-0.5">
                      {selectedPlanet.name}
                    </h2>
                    <p className="text-xs text-gray-400 m-0 mt-0.5 flex items-center gap-1.5">
                      <User size={12} /> Mentor: <strong className="text-gray-200">{selectedPlanet.teacherName}</strong>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPlanet(null)}
                  className="ios-press w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border-none text-gray-300 flex items-center justify-center cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-xs text-gray-300 m-0 mt-3 leading-relaxed">
                {selectedPlanet.description}
              </p>
            </div>

            {/* Lista Completa de Aulas do Planeta */}
            <div className="p-4 overflow-y-auto flex-1 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-1 mb-2">
                📚 Cronograma da Missão ({(selectedPlanet.lessons || []).length} aulas)
              </div>

              {(selectedPlanet.lessons || []).map((lesson, index) => {
                const isDone = completedSet.has(lesson.id);
                const color = selectedPlanet.color || '#00D4FF';
                const slug = selectedPlanet.slug || selectedPlanet.id;

                return (
                  <Link
                    key={lesson.id || index}
                    to={`/lesson/${slug}/${lesson.id}`}
                    onClick={() => setSelectedPlanet(null)}
                    className="ios-press no-underline text-inherit flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#111A2E]/90 hover:bg-[#16223B] border border-white/5 transition-colors"
                  >
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div
                        className="w-7 h-7 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5"
                        style={{
                          background: isDone ? '#00FF88' : `${color}20`,
                          color: isDone ? '#000' : color,
                          border: isDone ? 'none' : `1px solid ${color}40`,
                        }}
                      >
                        {isDone ? '✓' : index + 1}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-xs md:text-sm text-white truncate">
                          {lesson.title}
                        </div>
                        {lesson.description && (
                          <p className="text-[11px] text-gray-400 m-0 mt-0.5 line-clamp-1">
                            {lesson.description}
                          </p>
                        )}
                        <div className="flex items-center gap-3 mt-1.5 text-[10px] text-gray-400">
                          {lesson.duration && <span>⏱️ {lesson.duration} min</span>}
                          {lesson.xpReward && (
                            <span className="text-[#FFD700] font-bold">
                              +{lesson.xpReward} XP
                            </span>
                          )}
                          {isDone && (
                            <span className="text-[#00FF88] font-bold">
                              • Concluída
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <ChevronRight size={16} className="text-gray-400 shrink-0" />
                  </Link>
                );
              })}
            </div>

            {/* Rodapé do Sheet */}
            <div className="p-4 border-t border-white/10 bg-[#080D1A]">
              <Link
                to={`/lesson/${selectedPlanet.slug || selectedPlanet.id}/${
                  (selectedPlanet.lessons || []).find((l) => !completedSet.has(l.id))?.id ||
                  selectedPlanet.lessons?.[0]?.id ||
                  '1'
                }`}
                onClick={() => setSelectedPlanet(null)}
                className="ios-press block w-full py-3.5 px-4 rounded-2xl text-center font-extrabold text-sm text-black no-underline shadow-lg"
                style={{ background: selectedPlanet.color || '#00D4FF' }}
              >
                🚀 Iniciar Próxima Aula deste Planeta
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
