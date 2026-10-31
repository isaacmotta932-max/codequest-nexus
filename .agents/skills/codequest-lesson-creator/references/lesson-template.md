# Template Padrão de Lição do CodeQuest Nexus

Use este template para construir novas lições em `src/data/courses.ts`. Substitua os placeholders entre colchetes.

```ts
{
  id: '[CURSO]-[NUMERO]', // ex: 'css-3' ou 'js-2'
  title: '[NUMERO]. [NOME_DA_AULA_COM_EMOJI]', // ex: '2. Seletores & Especificidade'
  description: '[FRASE_RESUMO_DA_MISSAO]',
  duration: 15, // minutos (10 a 20)
  xpReward: 60, // XP da lição (40 a 90)
  language: '[LINGUAGEM]', // 'html' | 'css' | 'javascript' | 'python'
  content: `# [EMOJI] [NOME_DA_AULA]

Bem-vindo ao setor [SETOR/PLANETA], cadete! Nesta missão, vamos dominar [TÓPICO PRINCIPAL].

> **💡 O que é [TÓPICO]?**
> [CONCEITO FUNDAMENTAL EM 2 OU 3 FRASES CLARAS COM METÁFORA DO MUNDO REAL].

---

### ⚙️ Como Funciona na Prática

[EXPLICAÇÃO TÉCNICA CLARA E DIDÁTICA].

\`\`\`[LINGUAGEM]
// Exemplo de código demonstrativo com comentários explicativos
[CODIGO_EXEMPLO]
\`\`\`

> **⚠️ Armadilha Comum:**
> [ERRO FREQUENTE QUE INICIANTES COMETEM E COMO EVITAR].

---

### 🛡️ Boas Práticas da Frota Estelar

- \`[CONCEITO_1]\`: [EXPLICAÇÃO BREVE].
- \`[CONCEITO_2]\`: [EXPLICAÇÃO BREVE].
- \`[CONCEITO_3]\`: [EXPLICAÇÃO BREVE].

> **🛡️ Regra de Ouro:**
> [BOA PRÁTICA INEGOCIÁVEL (ACESSIBILIDADE, SEGURANÇA OU PERFORMANCE)].

---

### 🎯 Resumo da Missão

Agora que você assimilou a teoria, é hora de provar suas habilidades nos terminais abaixo. Resolva os desafios práticos para validar sua licença de voo nesta aula!
`,
  codeExample: `// Código de referência rápido para o aluno copiar e usar como base
[CODIGO_DE_REFERENCIA]`,
  exercises: [
    // 1. Desafio de Conhecimento (Quiz)
    {
      type: 'quiz',
      question: '[PERGUNTA_CONCEITUAL_DESAFIADORA]',
      options: [
        '[OPCAO_INCORRETA_1]',
        '[OPCAO_CORRETA]',
        '[OPCAO_INCORRETA_2]',
        '[OPCAO_INCORRETA_3]'
      ],
      correctIndex: 1,
      explanation: '[EXPLICACAO_DO_PORQUE_A_OPCAO_ESTA_CORRETA]'
    },

    // 2. Desafio Prático (Code, BugHunt ou FillBlank)
    {
      type: 'code',
      instruction: '[INSTRUCAO_CLARA_DO_QUE_CONSTRUIR]',
      initialCode: '<!-- Escreva seu código aqui -->\n',
      expectedKeywords: ['[ELEMENTO_1]', '[ELEMENTO_2]'],
      hint: '[PISTA_DIDATICA_SEM_ENTREGAR_O_CODIGO_PRONTO]',
      solution: '[CODIGO_FINAL_ESPERADO]'
    }
  ]
}
```
