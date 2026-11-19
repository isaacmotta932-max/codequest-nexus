/**
 * CodeQuest Nexus - Coleção Oficial de Ícones Pixel Art de Programação
 * - 10 Avatares Base (16x16 Pixel Art Cyberpunk) — Desbloqueados desde o início
 * - 10 Avatares Mestres / Guardiões Planetários (24x24 High-Detail Pixel Art) — Desbloqueados ao completar planetas!
 * - Cada avatar possui sua própria paleta sutil de interface (themePalette) que adapta o visual do app.
 */

import { COURSES } from '@/data/courses';

export interface AvatarThemePalette {
  primary: string;      // Cor de destaque principal do avatar
  secondary: string;    // Cor secundária para gradientes
  bgTint: string;       // Fundo escuro sutilmente tonalizado com a cor do avatar
  surfaceTint: string;  // Superfície/card sutilmente tonalizado
  glowRgb: string;      // R, G, B para efeitos de brilho translúcidos
}

export interface PixelAvatar {
  id: string;
  name: string;
  description: string;
  category: string;
  accentColor: string;
  secondaryColor: string;
  tier: 'starter' | 'planetary';
  requiredPlanetSlug?: string;
  requiredPlanetName?: string;
  requiredCoursesCount?: number;
  themePalette: AvatarThemePalette;
  svg: string;
  dataUrl: string;
}

interface RawSprite {
  id: string;
  name: string;
  description: string;
  category: string;
  accentColor: string;
  secondaryColor: string;
  tier?: 'starter' | 'planetary';
  requiredPlanetSlug?: string;
  requiredPlanetName?: string;
  requiredCoursesCount?: number;
  bgTint: string;
  surfaceTint: string;
  palette: Record<string, string>;
  grid: string[];
}

function hexToRgbString(hex: string): string {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r}, ${g}, ${b}`;
}

// ============================================================================
// 1. OS 10 AVATARES INICIAIS (16x16) — DESBLOQUEADOS DESDE O NÍVEL 1
// ============================================================================
const STARTER_SPRITES: RawSprite[] = [
  {
    id: 'pixel-hacker',
    name: 'Cyber Hacker',
    description: 'Hacker sombrio de elite com visor neon pulsante e capuz cibernético.',
    category: 'Coder',
    accentColor: '#00E5FF',
    secondaryColor: '#6366F1',
    bgTint: '#050918',
    surfaceTint: '#0C152B',
    palette: {
      '.': 'none',
      'H': '#181829',
      'h': '#312E81',
      'L': '#4F46E5',
      'C': '#00E5FF',
      'c': '#0284C7',
      'f': '#F87171',
      'B': '#0A0A14',
    },
    grid: [
      '.....hhhhh......',
      '...hhLLLLhB.....',
      '..hLhhhhhhLB....',
      '.hLhHHHHHHhLB...',
      '.hLHHHHHHHHhB...',
      '.hLHHHHHHHHhB...',
      '.hLCCCCCCCCfB...',
      '.hLCCCCCCCChB...',
      '.hLHHHHHHHHhB...',
      '..hHHHHHHHHhB...',
      '..hLhhhhhhLhB...',
      '.hhLLLLLLLLhhB..',
      'hLLhhhhLLhhhhLB.',
      'hLhhhhhhhhhhLhB.',
      'hLLLLLLLLLLLLhB.',
      '.BBBBBBBBBBBBB..'
    ]
  },
  {
    id: 'pixel-bug',
    name: 'Debug Bug',
    description: 'O clássico inseto cibernético do sistema pronto para ser depurado.',
    category: 'Debugging',
    accentColor: '#FF2A6D',
    secondaryColor: '#FF7597',
    bgTint: '#110612',
    surfaceTint: '#1F0D22',
    palette: {
      '.': 'none',
      'A': '#FF0055',
      'B': '#990033',
      'C': '#FF3366',
      'L': '#FF7597',
      'Y': '#FFE600',
      'K': '#1A0510',
    },
    grid: [
      'A..............A',
      '.A............A.',
      '..A..KKKKKK..A..',
      '..KAKCCCCCCKAK..',
      '...KCYKCCKYCK...',
      'K..KCYKCCKYCK..K',
      '.K.KCCCCCCCCK.K.',
      '..KKCCCCCCCCKK..',
      'KKKKKKKKKKKKKKKK',
      '..KCCLLLLCCK....',
      '.KKCCCCCCCCCKK..',
      'K.KCCCCCCCCCK.K.',
      '..KCCCCCCCCK....',
      '..KCCLLLLCCK..K.',
      '.K.KKKKKKKK.K...',
      'K............K..'
    ]
  },
  {
    id: 'pixel-terminal',
    name: 'Terminal CRT',
    description: 'Monitor CRT retrô com tela fosforescente verde e prompt de comando.',
    category: 'Ambiente',
    accentColor: '#00FF66',
    secondaryColor: '#10B981',
    bgTint: '#04110D',
    surfaceTint: '#0A1E17',
    palette: {
      '.': 'none',
      'M': '#334155',
      'm': '#1E293B',
      'B': '#0F172A',
      'G': '#00FF66',
      'S': '#475569',
    },
    grid: [
      '..mmmmmmmmmmmm..',
      '.mMMMMMMMMMMMMm.',
      '.mMBBBBBBBBBBMm.',
      '.mMBGGGBBBBGBMm.',
      '.mMBBGGBBBGBBMm.',
      '.mMBBBGGBBBBBMm.',
      '.mMBBGGBBBBBBMm.',
      '.mMBGGGBBGGGBMm.',
      '.mMBBBBBBGGGBMm.',
      '.mMBBBBBBBBBBMm.',
      '.mMMMMMMMMMMMMm.',
      '..mmmmmmmmmmmm..',
      '.....mSSSSm.....',
      '....mSSSSSSm....',
      '...mMMMMMMMMm...',
      '..mmmmmmmmmmmm..'
    ]
  },
  {
    id: 'pixel-python',
    name: 'Serpente Python',
    description: 'A lendária serpente de duas cores em nó digital para mestres do código.',
    category: 'Linguagem',
    accentColor: '#3B82F6',
    secondaryColor: '#FBBF24',
    bgTint: '#060B19',
    surfaceTint: '#101A32',
    palette: {
      '.': 'none',
      'B': '#2563EB',
      'b': '#1D4ED8',
      'Y': '#FBBF24',
      'y': '#D97706',
      'W': '#FFFFFF',
      'P': '#1E1B4B',
    },
    grid: [
      '....bbbbbb......',
      '...bBBBBBBb.....',
      '..bBBWBBBBBb....',
      '..bBBPBBBBBb....',
      '..bBBBBBBBbbb...',
      '..bBBBBBBbyyyb..',
      '..bbbbbbbyYYYYb.',
      '....bYYYYYYYYYb.',
      '.bYYYYYYYYYb....',
      '.bYYYYybbbbbbb..',
      '..byyybBBBBBBb..',
      '...bbbBBBBBBb...',
      '....bBBBBPPBb...',
      '....bBBBBWBBb...',
      '.....bBBBBBBb...',
      '......bbbbbb....'
    ]
  },
  {
    id: 'pixel-cpu',
    name: 'Quantum CPU',
    description: 'Microprocessador de alta performance com barramento de circuitos neon.',
    category: 'Hardware',
    accentColor: '#F59E0B',
    secondaryColor: '#00E5FF',
    bgTint: '#120C05',
    surfaceTint: '#22170B',
    palette: {
      '.': 'none',
      'P': '#F59E0B',
      'C': '#0F172A',
      'c': '#1E293B',
      'N': '#00E5FF',
      'n': '#0284C7',
      'W': '#FFFFFF',
    },
    grid: [
      '..P.P.P.P.P.P...',
      '.ccccccccccccc..',
      'PcCCCCCCCCCCCc.P',
      '.cCNNNCCCCCNCc..',
      'PcCNnNCCCCCNCc.P',
      '.cCNnNNNNNnNCc..',
      'PcCCCCNWWNCCCc.P',
      '.cCCCCNWNWCCCc..',
      'PcCCCCNWWNCCCc.P',
      '.cCNnNNNNNnNCc..',
      'PcCNnNCCCCCNCc.P',
      '.cCNNNCCCCCNCc..',
      'PcCCCCCCCCCCCc.P',
      '.ccccccccccccc..',
      '..P.P.P.P.P.P...',
      '................'
    ]
  },
  {
    id: 'pixel-cyberdeck',
    name: 'Cyberdeck Portátil',
    description: 'Terminal portátil futurista para invasão remota de servidores.',
    category: 'Cyberpunk',
    accentColor: '#A855F7',
    secondaryColor: '#EC4899',
    bgTint: '#0D0618',
    surfaceTint: '#1B102E',
    palette: {
      '.': 'none',
      'F': '#475569',
      'f': '#1E293B',
      'S': '#0F172A',
      'C': '#A855F7',
      'c': '#EC4899',
      'K': '#334155',
      'N': '#00FFA3',
      'n': '#06B6D4',
    },
    grid: [
      '..FFFFFFFFFFFF..',
      '.Ffffffffffffff.',
      '.FfSSSSSSSSSSff.',
      '.FfSCcCSSCcCSff.',
      '.FfSSSSCcCSSSff.',
      '.FfSCcCSSCcCSff.',
      '.FfSSSSSSSSSSff.',
      '.Ffffffffffffff.',
      'FFFFFFFFFFFFFFFF',
      'fKKKKKKKKKKKKKKf',
      'fKKnKKKnKKKnKKNf',
      'fKKKKKKKKKKKKKKf',
      'fKKKKKKKKKKKKKKf',
      'ffffffffffffffff',
      '.NNNNNNNNNNNNNN.',
      '................'
    ]
  },
  {
    id: 'pixel-git',
    name: 'Git Branch',
    description: 'Árvore de commits e ramificações concorrentes da branch principal.',
    category: 'DevOps',
    accentColor: '#F97316',
    secondaryColor: '#EF4444',
    bgTint: '#130805',
    surfaceTint: '#25120D',
    palette: {
      '.': 'none',
      'o': '#991B1B',
      'N': '#FFFFFF',
      'L': '#FB923C',
    },
    grid: [
      '......oooo......',
      '.....oNNNNo.....',
      '.....oNNNNo.....',
      '......oooo......',
      '.......LL.......',
      '.......LL..oooo.',
      '....LLLLL.oNNNNo',
      '...LL..LL.oNNNNo',
      '..LL...LL..oooo.',
      '.LL....LL.......',
      'oooo...LL.......',
      'oNNNNo.LL.......',
      'oNNNNo.LL.......',
      'oooo...LL.......',
      '......oooo......',
      '.....oNNNNo.....'
    ]
  },
  {
    id: 'pixel-shield',
    name: 'Firewall Shield',
    description: 'Escudo criptográfico contra invasões, firewalls e pacotes maliciosos.',
    category: 'Segurança',
    accentColor: '#0EA5E9',
    secondaryColor: '#FCD34D',
    bgTint: '#050E1A',
    surfaceTint: '#0C1C30',
    palette: {
      '.': 'none',
      'S': '#0284C7',
      'B': '#0369A1',
      'C': '#00E5FF',
      'K': '#FCD34D',
      'k': '#D97706',
      'L': '#38BDF8',
    },
    grid: [
      '..SSSSSSSSSSSS..',
      '.SCCCCCCCCCCCCS.',
      'SCLLLLLLLLLLLLCS',
      'SCLBBBBBBBBBBCCS',
      'SCLBBKKKKBBBBCCS',
      'SCLBKkKKkKBBBCCS',
      'SCLBKkKKkKBBBCCS',
      'SCLBBKkkKBBBBCCS',
      'SCLBBBkkBBBBBCCS',
      '.SCLBBkkBBBBCCS.',
      '.SCLBBkkBBBBCCS.',
      '..SCLBBBBBBCCS..',
      '...SCLBBBBCCS...',
      '....SCLBBCCS....',
      '.....SCLCCS.....',
      '......SSSS......'
    ]
  },
  {
    id: 'pixel-bot',
    name: 'Droide AI',
    description: 'Robô copiloto assistente com visor de LED e inteligência sintética.',
    category: 'Inteligência',
    accentColor: '#38BDF8',
    secondaryColor: '#FF007F',
    bgTint: '#060C1A',
    surfaceTint: '#111D35',
    palette: {
      '.': 'none',
      'M': '#64748B',
      'm': '#334155',
      'A': '#FF007F',
      'E': '#00E5FF',
      'e': '#0284C7',
      'W': '#FFFFFF',
    },
    grid: [
      '.......AA.......',
      '.......AA.......',
      '......mmmm......',
      '..mmmmmmmmmmmm..',
      '.mMMMMMMMMMMMMm.',
      '.mMEEEEMMEEEEMm.',
      '.mMEEWEMMEEWEMm.',
      '.mMEEEEMMEEEEMm.',
      '.mMMMMMMMMMMMMm.',
      '.mMMMmMMmMMMMMm.',
      '..mmmmmmmmmmmm..',
      '....mMMMMMMm....',
      '..mmmmmmmmmmmm..',
      '.mMMMMMMMMMMMMm.',
      '.mMMMmMMMMmMEMm.',
      '..mmmm....mmmm..'
    ]
  },
  {
    id: 'pixel-brackets',
    name: 'Code Matrix { ; }',
    description: 'Chaves e ponto-e-vírgula sagrados da sintaxe pura de desenvolvimento.',
    category: 'Sintaxe',
    accentColor: '#EC4899',
    secondaryColor: '#00FFA3',
    bgTint: '#120512',
    surfaceTint: '#240E24',
    palette: {
      '.': 'none',
      'P': '#EC4899',
      'p': '#9D174D',
      'C': '#00FFA3',
      'c': '#047857',
      'W': '#FFFFFF',
    },
    grid: [
      '..PP........PP..',
      '.PPP........PPP.',
      '.PP..........PP.',
      '.PP..........PP.',
      'PPP..........PPP',
      '.PP....CC....PP.',
      '..PP..CWWC..PP..',
      '.......CC.......',
      '.......CC.......',
      '..PP...Cc...PP..',
      '.PP...Cc....PP..',
      'PPP...c......PPP',
      '.PP..........PP.',
      '.PP..........PP.',
      '.PPP........PPP.',
      '..PP........PP..'
    ]
  }
];

// ============================================================================
// 2. OS 10 NOVOS ÍCONES ULTRA-DETALHADOS (24x24 HIGH-DETAIL)
//    DESBLOQUEADOS CONFORME O ALUNO COMPLETA OS PLANETAS!
// ============================================================================
const PLANETARY_SPRITES: RawSprite[] = [
  {
    id: 'master-html-architect',
    name: 'Arquiteto da Terra Digital',
    description: 'Capacete espacial holográfico com globo orbital ciano. Concedido a quem domina todas as aulas de HTML5.',
    category: 'Mestre HTML5',
    accentColor: '#00D4FF',
    secondaryColor: '#38BDF8',
    tier: 'planetary',
    requiredPlanetSlug: 'html',
    requiredPlanetName: 'Terra Digital (HTML5)',
    bgTint: '#040C1A',
    surfaceTint: '#0A1931',
    palette: {
      '.': 'none',
      'K': '#081020',
      'D': '#0369A1',
      'B': '#0284C7',
      'C': '#00D4FF',
      'L': '#7DD3FC',
      'W': '#FFFFFF',
      'G': '#22D3EE',
      'S': '#1E293B',
      'M': '#475569',
      'Y': '#FACC15',
    },
    grid: [
      '........KKKKKKKK........',
      '......KKCCCCCCCCKK......',
      '....KKCCLLLLLLLLCCKK....',
      '...KCCLLWWWWWWWWLLCCK...',
      '..KCCLWWBBBBBBBBWWLCCK..',
      '..KCLWBBDDDDDDDDBBWLCCK.',
      '.KCLWBDDCCCCCCCCDDBWLCK.',
      '.KCLWBDCCLLLLLLCCDBWLCK.',
      '.KCLWBDCLWWWWWWLCDBWLCK.',
      'KCLWBDCCLWWGGWWLCCDBWLCK',
      'KCLWBDCCLWGGGGWLCCDBWLCK',
      'KCLWBDCCLWWGGWWLCCDBWLCK',
      'KCLWBDCLWWWWWWLCDBWLCK..',
      '.KCLWBDCCLLLLLLCCDBWLCK.',
      '.KCLWBDDCCCCCCCCDDBWLCK.',
      '..KCLWBBDDDDDDDDBBWLCCK.',
      '..KSSMMMMMMMMMMMMMMSSK..',
      '.KSMMYYYYCCCCCCYYYYMMSK.',
      '.KSMMMMMCCCCCCCCMMMMMSK.',
      '..KSSSSSSSSSSSSSSSSSSK..',
      '...KKCCCCCCCCCCCCCCKK...',
      '....KKBBBBBBBBBBBBKK....',
      '......KKKKKKKKKKKK......',
      '........................'
    ]
  },
  {
    id: 'master-css-prism',
    name: 'Soberano de Neon City',
    description: 'Cristal prismático multidimensional com aura synthwave. Desbloqueado ao completar o planeta CSS3.',
    category: 'Mestre CSS3',
    accentColor: '#A855F7',
    secondaryColor: '#F43F5E',
    tier: 'planetary',
    requiredPlanetSlug: 'css',
    requiredPlanetName: 'Neon City (CSS3)',
    bgTint: '#0D061A',
    surfaceTint: '#1C0E33',
    palette: {
      '.': 'none',
      'K': '#130722',
      'V': '#6B21A8',
      'P': '#9333EA',
      'A': '#A855F7',
      'L': '#D8B4FE',
      'M': '#EC4899',
      'R': '#F43F5E',
      'C': '#00E5FF',
      'W': '#FFFFFF',
      'Y': '#FDE047',
    },
    grid: [
      '...........KK...........',
      '..........KWWK..........',
      '.........KWLLWK.........',
      '........KWLAAWLK........',
      '.......KWLAAAAWLK.......',
      '......KWLAAWWAAWLK......',
      '.....KWLAAWCCWAAWLK.....',
      '....KWLAAWCCCCWAAWLK....',
      '...KWLAAWCCWWCCWAAWLK...',
      '..KWLAAWCCWYYWCCWAAWLK..',
      '.KWLAAWCCWYYYYWCCWAAWLK.',
      'KWLMMMRRRWYYYYWRRRMMMWLK',
      'KWLMMMRRRWYYYYWRRRMMMWLK',
      '.KVPPPMMMRWYYWRMMMPPPVK.',
      '..KVPPPMMMRWWRMMMPPPVK..',
      '...KVPPPMMMWWMMMPPPVK...',
      '....KVPPPMMMMMMPPPVK....',
      '.....KVPPPPPPPPPPVK.....',
      '......KVPPPPPPPPVK......',
      '.......KVVPPPPVV........',
      '........KVVPPVV.........',
      '.........KVVVV..........',
      '..........KVK...........',
      '...........K............'
    ]
  },
  {
    id: 'master-js-overlord',
    name: 'Senhor do Cyber Core',
    description: 'Reator de plasma dourado de alta voltagem com bobinas Tesla. Desbloqueado ao dominar JavaScript.',
    category: 'Mestre JS',
    accentColor: '#FFD700',
    secondaryColor: '#F59E0B',
    tier: 'planetary',
    requiredPlanetSlug: 'javascript',
    requiredPlanetName: 'Cyber Core (JavaScript)',
    bgTint: '#120E04',
    surfaceTint: '#241C0A',
    palette: {
      '.': 'none',
      'K': '#1C1305',
      'D': '#92400E',
      'O': '#D97706',
      'A': '#F59E0B',
      'Y': '#FFD700',
      'L': '#FEF08A',
      'W': '#FFFFFF',
      'C': '#00E5FF',
      'S': '#334155',
    },
    grid: [
      '.......KKKKKKKKKK.......',
      '.....KKYYYYYYYYYYKK.....',
      '...KKYYLLLLLLLLLLYYKK...',
      '..KYYLLOOOOOOOOOOLLYYK..',
      '.KYYLOODDDDDDDDDDOOLYYK.',
      '.KYLOODKKKKKKKKKKDOOLYK.',
      'KYLOODKCCCCCCYYYYKDOOLYK',
      'KYLOODKCCWWCCYLLYKDOOLYK',
      'KYLOODKCCWWCCYLLYKDOOLYK',
      'KYLOODKCCWWCCYYYYKDOOLYK',
      'KYLOODKCCWWCCYLLKKDOOLYK',
      'KYLOODKCCWWCCKLLYYDOOLYK',
      'KYLOODKCCWWCCKKLLWKDOOLK',
      'KYLOODKCCWWCCYYLWKDOOLYK',
      'KYLOODKCCWWCCYYLWKDOOLYK',
      'KYLOODKCCCCCKYYYYKDOOLYK',
      '.KYLOODKKKKKKKKKKDOOLYK.',
      '.KYYLOODDDDDDDDDDOOLYYK.',
      '..KYYLLOOOOOOOOOOLLYYK..',
      '...KKYYLLLLLLLLLLYYKK...',
      '.....KKYYYYYYYYYYKK.....',
      '.......KKKKKKKKKK.......',
      '.........KSSSSK.........',
      '........................'
    ]
  },
  {
    id: 'master-ts-templar',
    name: 'Templário Quantum',
    description: 'Elmo de cavaleiro quântico com runas de tipagem estática. Desbloqueado ao completar TypeScript.',
    category: 'Mestre TS',
    accentColor: '#3178C6',
    secondaryColor: '#60A5FA',
    tier: 'planetary',
    requiredPlanetSlug: 'typescript',
    requiredPlanetName: 'Quantum Station (TypeScript)',
    bgTint: '#050B18',
    surfaceTint: '#0E1B33',
    palette: {
      '.': 'none',
      'K': '#081024',
      'N': '#1E3A8A',
      'B': '#2563EB',
      'T': '#3178C6',
      'L': '#60A5FA',
      'C': '#93C5FD',
      'W': '#FFFFFF',
      'G': '#FFD700',
    },
    grid: [
      '........KKKKKKKK........',
      '......KKTTTTTTTTKK......',
      '....KKTTLLLLLLLLTTKK....',
      '...KTTLLCCCCCCCCLLTTK...',
      '..KTTLCCBBBBBBBBCCLTTK..',
      '..KTLCCBBNNNNNNBBCCLTK..',
      '.KTLCCBNNKKKKKKNNBCLTK..',
      '.KTLCCBNKWWWWWWKNBCLTK..',
      '.KTLCCBNKWWWWWWKNBCLTK..',
      '.KTLCCBNKKKKKKKKNBCLTK..',
      '.KTLCCBNNNBWWBNNNBCLTK..',
      '.KTLCCBBBBWWWWBBBBCLTK..',
      '.KTLCCBBBBWWWWBBBBCLTK..',
      '..KTLCCBBBWWWWBBBCLTK...',
      '..KTTLCCBBWWWWBBCLTTK...',
      '...KTTLLCCBWWBCCLLTTK...',
      '...KGGTTLLCCCCLLTTGGK...',
      '..KGGGGTTTTTTTTTTGGGGK..',
      '.KGGNNNNTTTTTTTTNNNNNGK.',
      '.KGNNNNNNNNNNNNNNNNNNGK.',
      '..KKKKKKKKKKKKKKKKKKKK..',
      '........................',
      '........................',
      '........................'
    ]
  },
  {
    id: 'master-react-core',
    name: 'Núcleo Atômico React',
    description: 'Átomo estelar com anéis elípticos energizados em rotação quântica. Desbloqueado ao completar React.',
    category: 'Mestre React',
    accentColor: '#61DAFB',
    secondaryColor: '#00E5FF',
    tier: 'planetary',
    requiredPlanetSlug: 'react',
    requiredPlanetName: 'React Nexus (React)',
    bgTint: '#040F18',
    surfaceTint: '#0B2030',
    palette: {
      '.': 'none',
      'K': '#071624',
      'D': '#0284C7',
      'B': '#06B6D4',
      'C': '#61DAFB',
      'L': '#BAE6FD',
      'W': '#FFFFFF',
      'P': '#A855F7',
    },
    grid: [
      '.....CCCC......CCCC.....',
      '...CCLLLLCC..CCLLLLCC...',
      '..CLL....LLCCLL....LLC..',
      '.CL.......LLLL.......LC.',
      '.CL......LL..LL......LC.',
      '.CL.....LL....LL.....LC.',
      '..CL...LL......LL...LC..',
      '..CCLLLLCCCCCCCCLLLLCC..',
      '.CCLLLLCCDDDDDDCCLLLLCC.',
      'CCL...LLDCCCCCCDLL...LCC',
      'CL....LDCLLLLLLCDL....LC',
      'CL....LDCLWWWWLCDL....LC',
      'CL....LDCLWWWWLCDL....LC',
      'CL....LDCLLLLLLCDL....LC',
      'CCL...LLDCCCCCCDLL...LCC',
      '.CCLLLLCCDDDDDDCCLLLLCC.',
      '..CCLLLLCCCCCCCCLLLLCC..',
      '..CL...LL......LL...LC..',
      '.CL.....LL....LL.....LC.',
      '.CL......LL..LL......LC.',
      '.CL.......LLLL.......LC.',
      '..CLL....LLCCLL....LLC..',
      '...CCLLLLCC..CCLLLLCC...',
      '.....CCCC......CCCC.....'
    ]
  },
  {
    id: 'master-node-commander',
    name: 'Comandante da Colônia Node',
    description: 'Reator hexagonal esmeralda de processamento assíncrono infinito. Desbloqueado ao completar Node.js.',
    category: 'Mestre Node.js',
    accentColor: '#22C55E',
    secondaryColor: '#84CC16',
    tier: 'planetary',
    requiredPlanetSlug: 'nodejs',
    requiredPlanetName: 'Backend Colony (Node.js)',
    bgTint: '#041208',
    surfaceTint: '#0B2312',
    palette: {
      '.': 'none',
      'K': '#051A0B',
      'D': '#14532D',
      'G': '#16A34A',
      'N': '#22C55E',
      'L': '#86EFAC',
      'Y': '#BEF264',
      'W': '#FFFFFF',
    },
    grid: [
      '..........KKKK..........',
      '........KKNNNNKK........',
      '......KKNNLLLLNNKK......',
      '....KKNNLLGGGGLLNNKK....',
      '..KKNNLLGGDDDDGGLLNNKK..',
      '.KNNLLGGDDKKKKDDGGLLNNK.',
      'KNNLGGDDKKYYYYKKDDGGLNNK',
      'KNLGGDDKYYYYYYYYKDDGGLNK',
      'KNLGGDDKYYWWWWYYKDDGGLNK',
      'KNLGGDDKYYWKKWYYKDDGGLNK',
      'KNLGGDDKYYWKKWYYKDDGGLNK',
      'KNLGGDDKYYWWWWYYKDDGGLNK',
      'KNLGGDDKYYYYYYYYKDDGGLNK',
      'KNNLGGDDKKYYYYKKDDGGLNNK',
      '.KNNLLGGDDKKKKDDGGLLNNK.',
      '..KKNNLLGGDDDDGGLLNNKK..',
      '....KKNNLLGGGGLLNNKK....',
      '......KKNNLLLLNNKK......',
      '........KKNNNNKK........',
      '..........KKKK..........',
      '........................',
      '........................',
      '........................',
      '........................'
    ]
  },
  {
    id: 'master-python-oracle',
    name: 'Oráculo Neural Python',
    description: 'Cobra cibernética imperial com coroa de sinapses de Inteligência Artificial. Desbloqueado ao completar Python.',
    category: 'Mestre Python',
    accentColor: '#00FF88',
    secondaryColor: '#3B82F6',
    tier: 'planetary',
    requiredPlanetSlug: 'python',
    requiredPlanetName: 'AI Planet (Python)',
    bgTint: '#04120F',
    surfaceTint: '#09241E',
    palette: {
      '.': 'none',
      'K': '#06141F',
      'B': '#2563EB',
      'C': '#00E5FF',
      'G': '#00FF88',
      'E': '#10B981',
      'Y': '#FACC15',
      'O': '#D97706',
      'W': '#FFFFFF',
      'R': '#FF0055',
    },
    grid: [
      '.......YY..YY..YY.......',
      '.......YYYYYYYYYY.......',
      '......KOOOOOOOOOOK......',
      '....KKBBBBBBBBBBBBKK....',
      '...KBBBBCCCCCCCCBBBBK...',
      '..KBBBCCGGGGGGGGCCBBBK..',
      '.KBBBCGGEKBBBBKEGGCBBBK.',
      '.KBBCGGEKWRBBRWKGGCBBBK.',
      'KBBCGGEKWRRBBRRWKGGCBBBK',
      'KBBCGGEKBBBBBBBBKGGCBBBK',
      'KBBCGGEKBBBBBBBBKGGCBBBK',
      '.KBBCGGEKKBBBBKKEGCBBBK.',
      '..KBBCGGGEEBBEEGGGCBBK..',
      '...KBBCCGGGGGGGGCCBBK...',
      '....KKBBCCCCCCCCBBKK....',
      '.....KYYYYYYYYYYYYK.....',
      '....KYYOOOOOOOOOOYYK....',
      '...KYYOOYYYYYYYYOOYYK...',
      '...KYYOOYGGGGGGYOOYYK...',
      '....KYYOOYYYYYYOOYYK....',
      '.....KKYYOOOOOOYYKK.....',
      '.......KKYYYYYYKK.......',
      '.........KKKKKK.........',
      '........................'
    ]
  },
  {
    id: 'master-rust-titan',
    name: 'Titã da Cidadela de Ferro',
    description: 'Engrenagem blindada de titânio com núcleo de fusão incandescente. Desbloqueado ao completar Rust ou Java.',
    category: 'Mestre Sistemas',
    accentColor: '#FB923C',
    secondaryColor: '#F87171',
    tier: 'planetary',
    requiredPlanetSlug: 'rust',
    requiredPlanetName: 'Cidadela de Ferro (Rust)',
    bgTint: '#140905',
    surfaceTint: '#26130C',
    palette: {
      '.': 'none',
      'K': '#1C0D06',
      'D': '#7C2D12',
      'R': '#C2410C',
      'O': '#EA580C',
      'A': '#FB923C',
      'Y': '#FDE047',
      'W': '#FFFFFF',
    },
    grid: [
      '.........KKKKKK.........',
      '.........KAAAAK.........',
      '....KKKKKKAOOAKKKKKK....',
      '...KAAAAOOOOOOOOAAAAK...',
      '..KAAOORRRRRRRRRROOAAK..',
      '..KAORRDDDDDDDDDDRROAK..',
      '...KORRDKKKKKKKKDRROK...',
      'KKK.KRRDKYYYYYYKDRRK.KKK',
      'KAAKKRRDKYYWWYYKDRRKAAAK',
      'KAOORRRDKYWWWWYKDRRROOAK',
      'KAOORRRDKYWWWWYKDRRROOAK',
      'KAAKKRRDKYYWWYYKDRRKAAAK',
      'KKK.KRRDKYYYYYYKDRRK.KKK',
      '...KORRDKKKKKKKKDRROK...',
      '..KAORRDDDDDDDDDDRROAK..',
      '..KAAOORRRRRRRRRROOAAK..',
      '...KAAAAOOOOOOOOAAAAK...',
      '....KKKKKKAOOAKKKKKK....',
      '.........KAAAAK.........',
      '.........KKKKKK.........',
      '........................',
      '........................',
      '........................',
      '........................'
    ]
  },
  {
    id: 'master-cyber-phantom',
    name: 'Fantasma da Shadow Grid',
    description: 'Máscara tática stealth de hacker ético com matriz criptográfica neon. Desbloqueado ao completar Cibersegurança ou Docker.',
    category: 'Mestre Security',
    accentColor: '#00E5FF',
    secondaryColor: '#00FF88',
    tier: 'planetary',
    requiredPlanetSlug: 'ciberseguranca',
    requiredPlanetName: 'Shadow Grid (Cibersegurança)',
    bgTint: '#030D14',
    surfaceTint: '#081D29',
    palette: {
      '.': 'none',
      'K': '#050B14',
      'S': '#1E293B',
      'M': '#334155',
      'L': '#64748B',
      'C': '#00E5FF',
      'G': '#00FF88',
      'W': '#FFFFFF',
    },
    grid: [
      '.......KKKKKKKKKK.......',
      '.....KKSSSSSSSSSSKK.....',
      '...KKSSMMMMMMMMMMSSKK...',
      '..KSSMMLLLLLLLLLLMMSKK..',
      '.KSSMLLSSSSSSSSSSLLMSKK.',
      '.KSMLLSSKKKKKKKKSSLLMSK.',
      'KSMLLSSKCCCCCCCCKSSLLMSK',
      'KSMLLSKCCWWWWWWCCKSLLMSK',
      'KSMLLSKCWWGGGGWWCKSLLMSK',
      'KSMLLSKCCCCCCCCCCKSLLMSK',
      'KSMLLSSKKKKKKKKKKSSLLMSK',
      '.KSMLLSSSSMMMMSSSSLLMSK.',
      '.KSMLLSSSMGGGGMSSSLLMSK.',
      '..KSMLLSSMGGGGMSSLLMSK..',
      '..KSSMLLSSSSSSSSLLMSKK..',
      '...KSSMLLKCKCKCLLMSKK...',
      '....KSSMMKCKCKCMMSKK....',
      '.....KKSSKKKKKKSSKK.....',
      '.......KKSSSSSSKK.......',
      '.........KKKKKK.........',
      '........................',
      '........................',
      '........................',
      '........................'
    ]
  },
  {
    id: 'master-galaxy-emperor',
    name: 'Imperador Cósmico do Nexus',
    description: 'A insígnia suprema da galáxia: coroa astral forjada em matéria escura e ouro estelar. Desbloqueada ao dominar 3 ou mais planetas!',
    category: 'Lenda Cósmica',
    accentColor: '#FFD700',
    secondaryColor: '#EC4899',
    tier: 'planetary',
    requiredCoursesCount: 3,
    requiredPlanetName: 'Dominar 3 Planetas da Galáxia',
    bgTint: '#12091A',
    surfaceTint: '#231332',
    palette: {
      '.': 'none',
      'K': '#12061C',
      'P': '#7E22CE',
      'V': '#A855F7',
      'M': '#EC4899',
      'O': '#D97706',
      'Y': '#FFD700',
      'L': '#FEF08A',
      'C': '#00E5FF',
      'W': '#FFFFFF',
    },
    grid: [
      '..KK.......KK.......KK..',
      '.KYYK.....KYYK.....KYYK.',
      '.KWWK.....KWWK.....KWWK.',
      '.KYYK....KYYYYK....KYYK.',
      '.KYYYK..KYYLLYYK..KYYYK.',
      '..KYYYKKYYLCCLYYKKYYYK..',
      '..KYYYYYYLCCCCLYYYYYYK..',
      '..KYYYYOCCCCCCCCOYYYYK..',
      '...KYYOOCWWWWWWCOOYYK...',
      '...KYYOYYYYYYYYYYOYYK...',
      '...KYYOYYMMMMMMYYOYYK...',
      '..KYYYOYYMWWWWMMYOYYYK..',
      '..KYYYOYYMMMMMMYYOYYYK..',
      '..KYYYOYYYYYYYYYYOYYYK..',
      '..KOOOOSSSSSSSSSSOOOOK..',
      '.KPPPPVVVVVVVVVVVVPPPPK.',
      '.KPPVVVMMMMMMMMMMVVVPPK.',
      '..KPVMMCCCCCCCCCCMMVPK..',
      '...KPPPPPPPPPPPPPPPPK...',
      '....KKKKKKKKKKKKKKKK....',
      '........................',
      '........................',
      '........................',
      '........................'
    ]
  },
];

const RAW_SPRITES: RawSprite[] = [...STARTER_SPRITES, ...PLANETARY_SPRITES];

function compileSprite(sprite: RawSprite): PixelAvatar {
  const gridSize = sprite.grid.length;
  let rects = '';
  for (let y = 0; y < gridSize; y++) {
    const row = sprite.grid[y];
    let x = 0;
    while (x < row.length) {
      const char = row[x];
      const color = sprite.palette[char];
      if (!color || color === 'none') {
        x++;
        continue;
      }
      let width = 1;
      while (x + width < row.length && row[x + width] === char) {
        width++;
      }
      rects += `<rect x="${x}" y="${y}" width="${width}" height="1" fill="${color}"/>`;
      x += width;
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${gridSize} ${gridSize}" width="96" height="96" shape-rendering="crispEdges">${rects}</svg>`;
  const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return {
    id: sprite.id,
    name: sprite.name,
    description: sprite.description,
    category: sprite.category,
    accentColor: sprite.accentColor,
    secondaryColor: sprite.secondaryColor,
    tier: sprite.tier || 'starter',
    requiredPlanetSlug: sprite.requiredPlanetSlug,
    requiredPlanetName: sprite.requiredPlanetName,
    requiredCoursesCount: sprite.requiredCoursesCount,
    themePalette: {
      primary: sprite.accentColor,
      secondary: sprite.secondaryColor,
      bgTint: sprite.bgTint,
      surfaceTint: sprite.surfaceTint,
      glowRgb: hexToRgbString(sprite.accentColor),
    },
    svg,
    dataUrl,
  };
}

export const PIXEL_AVATARS: PixelAvatar[] = RAW_SPRITES.map(compileSprite);

export const STARTER_PIXEL_AVATARS: PixelAvatar[] = PIXEL_AVATARS.filter(
  (av) => av.tier === 'starter'
);

export const PLANETARY_PIXEL_AVATARS: PixelAvatar[] = PIXEL_AVATARS.filter(
  (av) => av.tier === 'planetary'
);

export const PIXEL_AVATARS_MAP: Record<string, PixelAvatar> = Object.fromEntries(
  PIXEL_AVATARS.map((av) => [av.id, av])
);

export const PIXEL_AVATARS_DATAURL_TO_ID: Record<string, string> = Object.fromEntries(
  PIXEL_AVATARS.map((av) => [av.dataUrl, av.id])
);

export const DEFAULT_PIXEL_AVATAR = PIXEL_AVATARS[0];

/**
 * Converte um dataUrl ou ID de avatar para o ID curto ('pixel-hacker', etc.)
 * caso pertença ao catálogo oficial.
 */
export function normalizeAvatarId(avatarUrlOrId?: string | null): string {
  if (!avatarUrlOrId) return '';
  if (PIXEL_AVATARS_MAP[avatarUrlOrId]) return avatarUrlOrId;
  if (PIXEL_AVATARS_DATAURL_TO_ID[avatarUrlOrId]) {
    return PIXEL_AVATARS_DATAURL_TO_ID[avatarUrlOrId];
  }
  return avatarUrlOrId;
}

/**
 * Retorna o objeto PixelAvatar completo a partir do ID ou dataUrl.
 */
export function getAvatarByUrlOrId(avatarUrlOrId?: string | null): PixelAvatar {
  if (!avatarUrlOrId) return DEFAULT_PIXEL_AVATAR;
  const id = normalizeAvatarId(avatarUrlOrId);
  return PIXEL_AVATARS_MAP[id] || DEFAULT_PIXEL_AVATAR;
}

/**
 * Retorna o dataUrl renderizável a partir de um ID ('pixel-hacker') ou dataUrl.
 */
export function resolveAvatarUrl(avatarUrlOrId?: string | null): string {
  if (!avatarUrlOrId) return '';
  if (PIXEL_AVATARS_MAP[avatarUrlOrId]) {
    return PIXEL_AVATARS_MAP[avatarUrlOrId].dataUrl;
  }
  return avatarUrlOrId;
}

/**
 * Verifica se um avatar está desbloqueado com base nas aulas concluídas pelo aluno.
 * - Avatares 'starter' estão sempre desbloqueados.
 * - Avatares 'planetary' desbloqueiam quando:
 *   a) O aluno concluiu todas as aulas do planeta correspondente (requiredPlanetSlug), OU
 *   b) O aluno concluiu pelo menos 1 planeta completo para cada nível de guardião, OU
 *   c) O aluno concluiu N planetas completos (quando requiredCoursesCount está definido).
 */
export function isAvatarUnlocked(
  avatar: PixelAvatar,
  completedLessons: string[] = []
): {
  unlocked: boolean;
  progressText: string;
  completedInPlanet: number;
  totalInPlanet: number;
} {
  if (avatar.tier === 'starter') {
    return {
      unlocked: true,
      progressText: 'Desbloqueado desde o início',
      completedInPlanet: 1,
      totalInPlanet: 1,
    };
  }

  const completedSet = new Set(completedLessons);

  // Conta quantos cursos/planetas completos o aluno já dominou
  let totalCompletedCourses = 0;
  for (const course of COURSES) {
    if (
      course.lessons.length > 0 &&
      course.lessons.every((l) => completedSet.has(l.id))
    ) {
      totalCompletedCourses++;
    }
  }

  if (typeof avatar.requiredCoursesCount === 'number') {
    const target = avatar.requiredCoursesCount;
    const unlocked = totalCompletedCourses >= target;
    return {
      unlocked,
      progressText: unlocked
        ? `Desbloqueado! (${totalCompletedCourses}/${target} planetas dominados)`
        : `Complete ${target} planetas na Galáxia (${totalCompletedCourses}/${target} concluídos)`,
      completedInPlanet: Math.min(totalCompletedCourses, target),
      totalInPlanet: target,
    };
  }

  if (avatar.requiredPlanetSlug) {
    const course = COURSES.find((c) => c.slug === avatar.requiredPlanetSlug);
    if (course && course.lessons.length > 0) {
      const done = course.lessons.filter((l) => completedSet.has(l.id)).length;
      const total = course.lessons.length;
      const unlocked = done >= total;
      return {
        unlocked,
        progressText: unlocked
          ? `Planeta ${course.planetName} dominado!`
          : `Complete o planeta ${course.name} (${done}/${total} aulas)`,
        completedInPlanet: done,
        totalInPlanet: total,
      };
    }
  }

  return {
    unlocked: true,
    progressText: 'Desbloqueado',
    completedInPlanet: 1,
    totalInPlanet: 1,
  };
}
