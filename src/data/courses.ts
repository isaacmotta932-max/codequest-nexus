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
            initialCode: '<!-- Escreva seu código HTML abaixo -->\n<h1>Base Nexus</h1>\n',
            expectedKeywords: ['<h1>', '</h1>', 'Base Nexus', '<p>', '</p>', 'Sistema inicializado'],
            hint: 'Abra a tag <p>, escreva Sistema inicializado e feche com </p>.',
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
            instruction: 'Crie um subtítulo <h2> com o texto "Aeronaves" e abaixo um parágrafo <p> que contenha a palavra "URGENTE" dentro da tag <strong>.',
            initialCode: '<h2>Aeronaves</h2>\n<p>Status: </p>',
            expectedKeywords: ['<h2>', '</h2>', 'Aeronaves', '<p>', '</p>', '<strong>', '</strong>', 'URGENTE'],
            hint: 'Coloque <strong>URGENTE</strong> dentro da tag <p>.',
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
            initialCode: '<!-- Crie seu link abaixo -->\n',
            expectedKeywords: ['<a', 'href=', 'https://codequest.nexus', 'target="_blank"', 'Entrar no Nexus', '</a>'],
            hint: 'A sintaxe é: <a href="https://codequest.nexus" target="_blank">Entrar no Nexus</a>',
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
            initialCode: '<ul>\n  \n</ul>',
            expectedKeywords: ['<ul>', '</ul>', '<li>', '</li>', 'HTML5', 'CSS3', 'JavaScript'],
            hint: 'Insira <li>HTML5</li>, <li>CSS3</li> e <li>JavaScript</li> dentro do bloco <ul>.',
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
            hint: 'Escreva: <img src="https://picsum.photos/300/200" alt="Robô astronauta navegando no espaço" />',
            solution: '<img src="https://picsum.photos/300/200" alt="Robô astronauta navegando no espaço" />',
          },
        ],
      },
    ],
  },
  {
    id: 'css',
    slug: 'css',
    name: 'CSS',
    planetName: 'Neon City',
    description: 'Estilize suas paginas com cores e layouts.',
    icon: '🎨',
    color: '#8B5CF6',
    language: 'css',
    level: 'Iniciante',
    totalXp: 100,
    lessons: [
      {
        id: 'css-1',
        title: 'Introducao ao CSS',
        description: 'O que e CSS e como aplica-lo.',
        content: `# Introducao ao CSS

CSS (Cascading Style Sheets) estiliza documentos HTML.

## Como aplicar CSS
1. Inline: \`<p style="color: red">\`
2. Interno: tag \`<style>\`
3. Externo: arquivo \`.css\`

## Sintaxe Basica
\`\`\`css
seletor {
  propriedade: valor;
}
\`\`\``,
        codeExample: `body {
  background-color: #050816;
  color: white;
}`,
        language: 'css',
        duration: 12,
        xpReward: 35,
      },
      {
        id: 'css-2',
        title: 'Cores e Fundos',
        description: 'Trabalhe com cores e gradientes.',
        content: `# Cores e Fundos

## Formas de definir cores
- Nome: \`red\`, \`blue\`
- Hex: \`#FF0000\`
- RGB: \`rgb(255, 0, 0)\`

## Gradientes
\`\`\`css
background: linear-gradient(90deg, #00D4FF, #8B5CF6);
\`\`\``,
        codeExample: `.caixa {
  background: linear-gradient(135deg, #00D4FF, #8B5CF6);
  padding: 20px;
}`,
        language: 'css',
        duration: 10,
        xpReward: 35,
      },
    ],
  },
  {
    id: 'javascript',
    slug: 'javascript',
    name: 'JavaScript',
    planetName: 'Cyber Core',
    description: 'De vida as suas paginas com programacao.',
    icon: '⚡',
    color: '#FFD700',
    language: 'javascript',
    level: 'Intermediário',
    totalXp: 120,
    lessons: [
      {
        id: 'js-1',
        title: 'Introducao ao JavaScript',
        description: 'Variaveis, tipos de dados e operadores.',
        content: `# Introducao ao JavaScript

JavaScript e a **linguagem de programacao** da web.

## Variaveis
\`\`\`javascript
let nome = "Coder";
const idade = 25;
\`\`\`

## Tipos de Dados
- \`string\` — texto
- \`number\` — numeros
- \`boolean\` — true/false
- \`array\` — listas
- \`object\` — objetos`,
        codeExample: `let nome = "CodeQuest";
let xp = 100;
console.log("Jogador: " + nome);`,
        language: 'javascript',
        duration: 15,
        xpReward: 40,
      },
      {
        id: 'js-2',
        title: 'Funcoes',
        description: 'Crie blocos de codigo reutilizaveis.',
        content: `# Funcoes

## Declaracao de Funcao
\`\`\`javascript
function saudacao(nome) {
  return "Ola, " + nome;
}
\`\`\`

## Arrow Function
\`\`\`javascript
const saudacao = (nome) => "Ola, " + nome;
\`\`\``,
        codeExample: `function calcularXp(nivel) {
  return 100 * nivel;
}`,
        language: 'javascript',
        duration: 12,
        xpReward: 45,
      },
    ],
  },
  {
    id: 'typescript',
    slug: 'typescript',
    name: 'TypeScript',
    planetName: 'Quantum Station',
    description: 'JavaScript com superpoderes: tipos e seguranca.',
    icon: '🔷',
    color: '#3178C6',
    language: 'typescript',
    level: 'Intermediário',
    totalXp: 80,
    lessons: [
      {
        id: 'ts-1',
        title: 'Tipos Basicos',
        description: 'Aprenda os tipos primitivos do TypeScript.',
        content: `# Tipos Basicos

TypeScript adiciona **tipagem estatica** ao JavaScript.

\`\`\`typescript
let nome: string = "Coder";
let nivel: number = 10;
let ativo: boolean = true;
\`\`\``,
        codeExample: `interface Jogador {
  nome: string;
  nivel: number;
}

const jogador: Jogador = {
  nome: "Neo",
  nivel: 42
};`,
        language: 'typescript',
        duration: 12,
        xpReward: 40,
      },
    ],
  },
  {
    id: 'react',
    slug: 'react',
    name: 'React',
    planetName: 'React Nexus',
    description: 'Construa interfaces modernas com componentes.',
    icon: '⚛️',
    color: '#61DAFB',
    language: 'tsx',
    level: 'Intermediário',
    totalXp: 60,
    lessons: [
      {
        id: 'react-1',
        title: 'Introducao ao React',
        description: 'Componentes, JSX e props.',
        content: `# Introducao ao React

React e uma biblioteca para criar **interfaces de usuario**.

## Componente Basico
\`\`\`tsx
function Saudacao({ nome }: { nome: string }) {
  return <h1>Ola, {nome}!</h1>;
}
\`\`\``,
        codeExample: `function Botao() {
  return <button>Clique aqui</button>;
}`,
        language: 'tsx',
        duration: 15,
        xpReward: 50,
      },
    ],
  },
  {
    id: 'nodejs',
    slug: 'nodejs',
    name: 'Node.js',
    planetName: 'Backend Colony',
    description: 'JavaScript no servidor.',
    icon: '🟢',
    color: '#339933',
    language: 'javascript',
    level: 'Intermediário',
    totalXp: 50,
    lessons: [
      {
        id: 'node-1',
        title: 'Introducao ao Node.js',
        description: 'O que e Node.js e como usa-lo.',
        content: `# Introducao ao Node.js

Node.js permite rodar JavaScript **fora do navegador**.

\`\`\`javascript
const http = require('http');
http.createServer((req, res) => {
  res.end('Ola, Mundo!');
}).listen(3000);
\`\`\``,
        codeExample: `console.log("Servidor Node.js rodando!");`,
        language: 'javascript',
        duration: 12,
        xpReward: 40,
      },
    ],
  },
  {
    id: 'python',
    slug: 'python',
    name: 'Python',
    planetName: 'AI Planet',
    description: 'Linguagem versatil para IA, dados e automacao.',
    icon: '🐍',
    color: '#00FF88',
    language: 'python',
    level: 'Iniciante',
    totalXp: 50,
    lessons: [
      {
        id: 'py-1',
        title: 'Introducao ao Python',
        description: 'Sintaxe basica e variaveis.',
        content: `# Introducao ao Python

Python e uma linguagem **simples e poderosa**.

\`\`\`python
nome = "Coder"
nivel = 10
print(f"Jogador: {nome}")
\`\`\``,
        codeExample: `def saudacao(nome):
    return f"Ola, {nome}!"

print(saudacao("CodeQuest"))`,
        language: 'python',
        duration: 10,
        xpReward: 35,
      },
    ],
  },
  {
    id: 'java',
    slug: 'java',
    name: 'Java',
    planetName: 'Enterprise World',
    description: 'A linguagem corporativa.',
    icon: '☕',
    color: '#F89820',
    language: 'java',
    level: 'Avançado',
    totalXp: 50,
    lessons: [
      {
        id: 'java-1',
        title: 'Introducao ao Java',
        description: 'Classes, objetos e o Hello World.',
        content: `# Introducao ao Java

Java e uma linguagem **orientada a objetos**.

\`\`\`java
public class Main {
  public static void main(String[] args) {
    System.out.println("Ola, Mundo!");
  }
}
\`\`\``,
        codeExample: `public class Jogador {
  public static void main(String[] args) {
    System.out.println("CodeQuest");
  }
}`,
        language: 'java',
        duration: 12,
        xpReward: 40,
      },
    ],
  },
  {
    id: 'sql',
    slug: 'sql',
    name: 'SQL',
    planetName: 'Data Matrix',
    description: 'Consulte e manipule bancos de dados.',
    icon: '🗄️',
    color: '#E48E00',
    language: 'sql',
    level: 'Intermediário',
    totalXp: 50,
    lessons: [
      {
        id: 'sql-1',
        title: 'SELECT e WHERE',
        description: 'Consultas basicas em SQL.',
        content: `# Comandos Basicos SQL

## SELECT
\`\`\`sql
SELECT * FROM usuarios;
\`\`\`

## WHERE
\`\`\`sql
SELECT nome FROM usuarios WHERE nivel > 10;
\`\`\``,
        codeExample: `SELECT username, xp
FROM usuarios
WHERE nivel >= 5
ORDER BY xp DESC
LIMIT 10;`,
        language: 'sql',
        duration: 10,
        xpReward: 35,
      },
    ],
  },
  {
    id: 'git',
    slug: 'git',
    name: 'Git',
    planetName: 'Version Control Base',
    description: 'Controle de versao para seus projetos.',
    icon: '🔀',
    color: '#F05032',
    language: 'bash',
    level: 'Iniciante',
    totalXp: 50,
    lessons: [
      {
        id: 'git-1',
        title: 'Comandos Basicos do Git',
        description: 'init, add, commit, push, pull.',
        content: `# Git Basico

## Inicializar repositorio
\`\`\`bash
git init
git add .
git commit -m "Primeiro commit"
\`\`\`

## Conectar ao GitHub
\`\`\`bash
git remote add origin URL
git push -u origin main
\`\`\``,
        codeExample: `git status
git add .
git commit -m "feat: nova feature"`,
        language: 'bash',
        duration: 10,
        xpReward: 30,
      },
    ],
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
