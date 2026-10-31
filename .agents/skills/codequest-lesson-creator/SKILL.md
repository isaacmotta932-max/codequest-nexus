---
name: codequest-lesson-creator
description: >-
  Use this skill whenever creating, updating, or expanding interactive lessons,
  quizzes, live coding challenges, or courses in CodeQuest Nexus. Enforces
  gamified Cyberpunk narrative, rich Markdown theory with callouts, entity escaping,
  progressive hints (never revealing answers), and 4 diversified activity types.
---

# CodeQuest Nexus: Metodologia e Criação de Aulas Interativas

Este guia orienta o agente e desenvolvedores na criação de aulas imersivas, desafiadoras e visualmente estilizadas para a plataforma **CodeQuest Nexus**.

Todas as lições seguem a filosofia de **Gamificação Cyberpunk**, onde o estudante é um **Cadete / Hacker Ético** explorando planetas da Galáxia de Código, precisando superar desafios práticos para validar seu aprendizado.

---

## 🧭 Pilares Fundamentais

1. **Narrativa & Contexto do Mundo Real**:
   - Cada lição deve conectar o tópico técnico a uma missão prática ou caso real da indústria (ex: por que a estrutura HTML correta salva o SEO e a acessibilidade, como um botão precisa de semântica para leitores de tela).
2. **Teoria Visual com Callouts Cyberpunk**:
   - Uso obrigatório de callouts formatados com emojis padronizados:
     - `> **💡 Dica Pro:**` — Truques e atalhos usados por sêniores.
     - `> **⚠️ Armadilha Comum:**` — Erros frequentes de iniciantes e pegadinhas.
     - `> **🛡️ Boa Prática:**` — Acessibilidade, segurança, Clean Code e padrões W3C.
     - `> **❤️ Curiosidade Hacker:**` — História da computação e fatos fascinantes.
3. **Escapamento Obrigatório de Tags e Símbolos**:
   - Quando citar tags em código inline ou listas (ex: `<!DOCTYPE html>`, `<html>`, `<h1>`), sempre usar crases. O renderizador do CodeQuest escapa entidades automaticamente, mas evite tags soltas em texto puro que possam quebrar a renderização.
4. **Regra de Ouro Pedagógica: Pistas Progressivas (NUNCA dê a resposta!)**:
   - Tanto nos quizzes quanto nos desafios práticos, o sistema **NUNCA deve entregar a resposta pronta** ao aluno quando ele erra.
   - Forneça pistas conceituais que façam o aluno raciocinar:
     - *Exemplo Ruim:* "A resposta correta é a B: use <header>."
     - *Exemplo Excelente:* "💡 Dica da Academia: Pense na tag semântica introduzida no HTML5 feita especificamente para agrupar logotipos e navegações no topo da página."
5. **Trava de Conclusão Obrigatória**:
   - O aluno **só conclui a lição e ganha XP** após resolver com sucesso 100% dos exercícios vinculados àquela aula.

---

## 🎮 Catálogo de 4 Tipos de Atividades Interativas

Toda lição deve conter pelo menos **2 ou 3 atividades**, combinando tipos diferentes para manter o engajamento alto:

| Tipo | Nome | Componente | Quando Usar |
| :--- | :--- | :--- | :--- |
| **`quiz`** | Desafio de Conhecimento | `InteractiveQuiz` | Testar conceitos, discernimento de boas práticas e arquitetura. |
| **`code`** | Laboratório de Código ao Vivo | `InteractiveCodeChallenge` | Escrever código do zero com live preview em tempo real. |
| **`bughunt`** | Missão: Caça aos Bugs | `InteractiveBugHunt` | Depurar um código realista que veio com falha intencional. |
| **`fillblank`** | Preencha as Lacunas | `InteractiveFillBlank` | Fixar sintaxe e atributos cruciais em trechos semi-prontos. |

Consulte as especificações completas de schema e exemplos em:
- [Guia dos 4 Tipos de Atividades](./references/exercise-types.md)
- [Template Completo de Lição](./references/lesson-template.md)
- [Guia Pedagógico & Lore](./references/pedagogical-guide.md)

---

## 🛠️ Passo a Passo para Criar ou Expandir uma Lição

1. **Definir Metadados**:
   - `id`: identificador único (ex: `html-1`, `css-2`, `js-3`).
   - `title`: Título numerado com emoji (ex: `1. O que é HTML & Anatomia da Web`).
   - `description`: 1 frase instigante sobre o que o aluno será capaz de fazer.
   - `duration`: tempo estimado em minutos (ex: `12`).
   - `xpReward`: pontuação da lição (ex: `50` a `80` XP).
   - `language`: `html`, `css`, `javascript`, `python`, `typescript`, etc.

2. **Redigir o Conteúdo Teórico**:
   - Título nível 1 (`# 🌐 ...`)
   - Introdução com contextualização no planeta temático.
   - Pelo menos 2 callouts (`> **💡 ...**` e `> **⚠️ ...**`).
   - Blocos de código comentados (` ```html ... ``` `).
   - Resumo em tópicos com listas (`- `).

3. **Adicionar o `codeExample`**:
   - Um exemplo prático e elegante que o aluno possa copiar com um clique para seu editor local.

4. **Elaborar as Atividades (`exercises`)**:
   - Pelo menos um quiz conceitual.
   - Pelo menos um desafio prático (`code`, `bughunt` ou `fillblank`).
   - Configurar `hints` estimulantes (sem spoilers de código).
   - Configurar `expectedKeywords` para validação robusta.

5. **Registrar em `src/data/courses.ts`**:
   - Localize o curso correspondente no array `COURSES`.
   - Adicione a lição ao array `lessons`.
   - Atualize `totalXp` do curso somando a recompensa da nova aula.

6. **Validação Técnica**:
   - Execute `npm run build` para garantir conformidade de tipagem do TypeScript.
   - Teste no navegador para confirmar que os testes passam e o botão de conclusão se desbloqueia apenas após resolver todos os exercícios.
