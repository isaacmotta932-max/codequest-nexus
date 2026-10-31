# Especificação dos 4 Tipos de Atividades Interativas

No CodeQuest Nexus, as atividades são modeladas pela união `LessonExercise` em `src/types/index.ts`. Cada tipo possui uma proposta pedagógica e uma interface gráfica temática.

---

## 1. Desafio de Conhecimento (`type: 'quiz'`)

Projetado para testar discernimento técnico, tomada de decisão e compreensão conceitual.

### Schema TypeScript:
```ts
export interface QuizExercise {
  id?: string;
  type: 'quiz';
  question: string;
  options: string[]; // 4 alternativas
  correctIndex: number; // 0, 1, 2 ou 3
  explanation: string; // Exibida APENAS quando o aluno acertar
}
```

### Regras Pedagógicas:
- Forneça 4 alternativas plausíveis. Evite respostas absurdas ou óbvias demais.
- Os distratores (opções erradas) devem representar equívocos frequentes do mundo real.
- Quando o aluno errar, a interface destaca em vermelho apenas a opção que ele escolheu e exibe uma mensagem encorajadora incentivando-o a reler a aula (sem revelar a opção correta!).
- `explanation`: deve aprofundar o porquê daquela opção ser o padrão da indústria.

### Exemplo:
```ts
{
  type: 'quiz',
  question: 'Você precisa criar o cabeçalho principal do seu site com o logo e o menu. Qual elemento HTML5 é semanticamente o mais adequado?',
  options: [
    '<div class="topo">',
    '<header>',
    '<head>',
    '<top>'
  ],
  correctIndex: 1,
  explanation: 'O elemento <header> é a tag semântica do HTML5 criada especificamente para agrupar logotipos, títulos introdutórios e navegações no topo do site ou de uma seção.'
}
```

---

## 2. Laboratório de Código ao Vivo (`type: 'code'`)

O aluno escreve ou completa código dentro de um editor integrado e vê o resultado imediatamente na janela de Pré-visualização (Live Preview Iframe).

### Schema TypeScript:
```ts
export interface CodeExercise {
  id?: string;
  type: 'code';
  instruction: string; // O que o cadete deve construir
  initialCode: string; // Ponto de partida no editor
  expectedKeywords: string[]; // Trechos obrigatórios que devem constar no código
  hint: string; // Dica progressiva (sem entregar o código pronto)
  solution: string; // Gabarito de referência
}
```

### Regras de Validação:
- `expectedKeywords`: Array de substrings essenciais que o validador procura no código digitado (ex: `['<h1>', '</h1>', '<p>', '</p>']`). A validação normaliza espaços extras automaticamente.
- `hint`: Forneça a estrutura conceitual. Exemplo: *"Lembre-se de abrir com a tag <p> e fechar com </p> logo após o texto."*

### Exemplo:
```ts
{
  type: 'code',
  instruction: 'Construa um cartão de herói com um título <h1> "Cadete Espacial" e um parágrafo <p> descrevendo sua primeira missão.',
  initialCode: '<!-- Escreva seu código abaixo -->\n',
  expectedKeywords: [
    '<h1>',
    '</h1>',
    '<p>',
    '</p>',
    'Cadete Espacial'
  ],
  hint: 'Inicie com a tag <h1> para o título com o texto solicitado e em seguida declare uma tag <p> com qualquer descrição de missão.',
  solution: '<h1>Cadete Espacial</h1>\n<p>Explorando a órbita da Terra Digital em busca de novos módulos.</p>'
}
```

---

## 3. Missão: Caça aos Bugs (`type: 'bughunt'`)

Simula um chamado de suporte ou cenário de produção quebrado. O aluno deve analisar o código falho, encontrar o erro e corrigi-lo.

### Schema TypeScript:
```ts
export interface BugHuntExercise {
  id?: string;
  type: 'bughunt';
  title: string; // Título da ocorrência
  scenario: string; // O problema relatado (ex: "O link não abre...")
  buggyCode: string; // Código inicial com a falha
  expectedKeywords: string[]; // Elementos que devem estar presentes na versão corrigida
  forbiddenKeywords?: string[]; // Trechos que PRECISAM ser removidos
  hint: string; // Pista de depuração
  solutionExplanation: string; // Explicação após neutralizar o bug
}
```

### Regras Pedagógicas:
- O cenário deve simular situações corriqueiras: atributos com erros de digitação (`scr` em vez de `src`, `href` vazio, tags sem fechamento, seletores CSS inválidos).
- `forbiddenKeywords` garante que o aluno não apenas adicionou o código certo, mas que de fato removeu a linha quebrada.

### Exemplo:
```ts
{
  type: 'bughunt',
  title: 'Protocolo de Imagem Quebrada',
  scenario: 'A telemetria do sistema aponta que o avatar do capitão não está carregando na interface. O desenvolvedor júnior cometeu um erro de digitação no atributo da tag.',
  buggyCode: '<img scr="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" alt="Avatar do Capitão">',
  expectedKeywords: ['src=', 'alt="Avatar do Capitão"'],
  forbiddenKeywords: ['scr='],
  hint: 'Observe com atenção o nome do atributo que aponta para o endereço da imagem (Source). Será que a ordem das letras está correta?',
  solutionExplanation: 'Excelente! O atributo correto é "src" (abreviação de source), e não "scr". Esse é um dos erros mais comuns no início do desenvolvimento web!'
}
```

---

## 4. Preencha as Lacunas (`type: 'fillblank'`)

Ideal para memorização de sintaxe específica, nomes de propriedades, tags raras ou parâmetros de funções sem a sobrecarga de digitar um documento inteiro.

### Schema TypeScript:
```ts
export interface BlankField {
  id: string; // Identificador da lacuna correspondente em {{id}}
  placeholder: string; // Rótulo que aparece no campo vazio
  expectedValues: string[]; // Variações aceitas (ex: ['target', 'target="_blank"'])
  hint: string; // Dica específica desta lacuna
}

export interface FillBlankExercise {
  id?: string;
  type: 'fillblank';
  title: string;
  instruction: string;
  codeSnippet: string; // Código com tokens {{campo_1}}, {{campo_2}}
  blanks: BlankField[];
  explanation: string;
}
```

### Exemplo:
```ts
{
  type: 'fillblank',
  title: 'Configuração do Link Externo',
  instruction: 'Preencha os atributos para fazer o link apontar para o destino e abrir em uma nova aba do navegador com segurança.',
  codeSnippet: '<a {{atributo_link}}="https://codequest.dev" {{alvo}}="_blank" rel="noopener noreferrer">Acessar Nexus</a>',
  blanks: [
    {
      id: 'atributo_link',
      placeholder: 'atributo de URL',
      expectedValues: ['href'],
      hint: 'Pense no atributo padrão que define o Hypertext REFerence.'
    },
    {
      id: 'alvo',
      placeholder: 'destino da aba',
      expectedValues: ['target'],
      hint: 'Palavra em inglês que significa "alvo", usada para direcionar onde o link será aberto.'
    }
  ],
  explanation: 'Perfeito! O atributo href aponta para o endereço web e target="_blank" garante a abertura em uma nova guia, preservando a navegação do usuário no CodeQuest!'
}
```
