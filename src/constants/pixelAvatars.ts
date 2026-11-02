/**
 * CodeQuest Nexus - Coleção Oficial de Ícones Pixel Art de Programação
 * Estilo: 16x16 Pixel Art Cyberpunk AAA com cores neon vibrantes.
 */

export interface PixelAvatar {
  id: string;
  name: string;
  description: string;
  category: string;
  accentColor: string;
  svg: string;
  dataUrl: string;
}

interface RawSprite {
  id: string;
  name: string;
  description: string;
  category: string;
  accentColor: string;
  palette: Record<string, string>;
  grid: string[];
}

const RAW_SPRITES: RawSprite[] = [
  {
    id: 'pixel-hacker',
    name: 'Cyber Hacker',
    description: 'Hacker sombrio de elite com visor neon pulsante e capuz cibernético.',
    category: 'Coder',
    accentColor: '#00E5FF',
    palette: {
      '.': 'none',
      'H': '#181829', // sombra profunda do capuz
      'h': '#312E81', // tecido principal do capuz
      'L': '#4F46E5', // realce neon do capuz
      'C': '#00E5FF', // visor ciano brilhante
      'c': '#0284C7', // sombra do visor
      'f': '#F87171', // implante cibernético auricular
      'B': '#0A0A14', // fundo de silhueta
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
    accentColor: '#FF0055',
    palette: {
      '.': 'none',
      'A': '#FF0055', // antenas e glow
      'B': '#990033', // vermelho escuro
      'C': '#FF3366', // carapaça principal
      'L': '#FF7597', // reflexo da carapaça
      'Y': '#FFE600', // olhos amarelos brilhantes
      'K': '#1A0510', // contorno e patas
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
    palette: {
      '.': 'none',
      'M': '#334155', // moldura clara
      'm': '#1E293B', // moldura escura
      'B': '#0F172A', // tela interna
      'G': '#00FF66', // fósforo verde neon
      'S': '#475569', // suporte/base
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
    palette: {
      '.': 'none',
      'B': '#2563EB', // serpente azul
      'b': '#1D4ED8', // contorno azul
      'Y': '#FBBF24', // serpente amarela
      'y': '#D97706', // contorno amarelo
      'W': '#FFFFFF', // brilho do olho
      'P': '#1E1B4B', // pupila
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
    palette: {
      '.': 'none',
      'P': '#F59E0B', // pinos dourados
      'C': '#0F172A', // corpo cerâmico
      'c': '#1E293B', // borda do chip
      'N': '#00E5FF', // barramentos neon
      'n': '#0284C7', // barramento escuro
      'W': '#FFFFFF', // núcleo central quântico
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
    palette: {
      '.': 'none',
      'F': '#475569', // carcaça clara
      'f': '#1E293B', // chassi escuro
      'S': '#0F172A', // tela
      'C': '#A855F7', // matriz holográfica roxa
      'c': '#EC4899', // matriz rosa
      'K': '#334155', // teclas
      'N': '#00FFA3', // LEDs neon verdes
      'n': '#06B6D4', // teclas iluminadas
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
    accentColor: '#F05032',
    palette: {
      '.': 'none',
      'o': '#991B1B', // borda do commit
      'N': '#FFFFFF', // nó do commit
      'L': '#FB923C', // linha do branch
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
    accentColor: '#0284C7',
    palette: {
      '.': 'none',
      'S': '#0284C7', // contorno do escudo
      'B': '#0369A1', // preenchimento interno
      'C': '#00E5FF', // reflexo ciano
      'K': '#FCD34D', // fechadura dourada
      'k': '#D97706', // sombra da fechadura
      'L': '#38BDF8', // realce claro
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
    palette: {
      '.': 'none',
      'M': '#64748B', // chassi metálico claro
      'm': '#334155', // chassi escuro
      'A': '#FF007F', // antena neon rosa
      'E': '#00E5FF', // olho ciano
      'e': '#0284C7', // sombra do olho
      'W': '#FFFFFF', // brilho óptico
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
    palette: {
      '.': 'none',
      'P': '#EC4899', // chaves rosa neon
      'p': '#9D174D', // sombra da chave
      'C': '#00FFA3', // ponto-e-vírgula verde matriz
      'c': '#047857', // sombra verde
      'W': '#FFFFFF', // brilho
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

function compileSprite(sprite: RawSprite): PixelAvatar {
  let rects = '';
  for (let y = 0; y < sprite.grid.length; y++) {
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

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="64" height="64" shape-rendering="crispEdges">${rects}</svg>`;
  const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return {
    id: sprite.id,
    name: sprite.name,
    description: sprite.description,
    category: sprite.category,
    accentColor: sprite.accentColor,
    svg,
    dataUrl,
  };
}

export const PIXEL_AVATARS: PixelAvatar[] = RAW_SPRITES.map(compileSprite);

export const PIXEL_AVATARS_MAP: Record<string, PixelAvatar> = Object.fromEntries(
  PIXEL_AVATARS.map((av) => [av.id, av])
);

export const DEFAULT_PIXEL_AVATAR = PIXEL_AVATARS[0];

/**
 * Retorna o dataUrl ou resolve o ID de um avatar pixelado.
 */
export function resolveAvatarUrl(avatarUrlOrId?: string | null): string {
  if (!avatarUrlOrId) return DEFAULT_PIXEL_AVATAR.dataUrl;
  if (PIXEL_AVATARS_MAP[avatarUrlOrId]) {
    return PIXEL_AVATARS_MAP[avatarUrlOrId].dataUrl;
  }
  return avatarUrlOrId;
}
