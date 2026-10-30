# 🚀 Guia de Deploy no Netlify — CodeQuest Nexus

A pasta de build de produção (`dist`) já está gerada, testada e 100% pronta para envio ao Netlify.

---

## 🌟 Método 1: Netlify Drop (Mais Rápido — Arrastar e Soltar)

1. Acesse o painel do [Netlify Drop](https://app.netlify.com/drop).
2. Arraste a pasta:
   ```
   codequestnexus-main/dist
   ```
   diretamente para a área indicada na tela do Netlify.
3. Seu site estará no ar em poucos segundos!
4. **Configurar o Banco de Dados (Supabase)**:
   - No painel do seu site no Netlify, vá em **Site configuration** > **Environment variables**.
   - Adicione as seguintes variáveis:
     - `VITE_SUPABASE_URL`: URL do seu projeto no Supabase (ex: `https://xxxx.supabase.co`)
     - `VITE_SUPABASE_ANON_KEY`: Sua chave pública anônima do Supabase (`anon` / `publishable`)
   - Em seguida, vá em **Deploys** e acione um novo deploy (ou re-publique a pasta `dist` se tiver compilado com novas variáveis no `.env`).

---

## 🐙 Método 2: Deploy Contínuo via Git / GitHub

1. Faça o push da pasta `codequestnexus-main` para um repositório no seu GitHub/GitLab.
2. No Netlify, clique em **Add new site** > **Import an existing project**.
3. Selecione o repositório.
4. As configurações já foram pré-configuradas no arquivo `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Adicione as variáveis de ambiente antes de clicar em Deploy:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Clique em **Deploy site**.

---

## 🗄️ Banco de Dados (Supabase)

Para garantir que todas as tabelas e permissões estejam criadas no Supabase:

1. Acesse o painel do [Supabase](https://supabase.com/dashboard).
2. Vá em **SQL Editor** > **New Query**.
3. Abra o arquivo `codequestnexus-main/supabase/schema.sql`, copie todo o conteúdo e cole no editor.
4. Clique em **Run**.
5. As seguintes tabelas e regras RLS serão criadas:
   - `users`: Usuários, níveis, XP, perfil e streaks.
   - `teachers`: Candidaturas e status de professores.
   - `courses`: Cursos criados e publicados por professores com lições em JSON.
   - `user_progress`: Progresso sincronizado de lições e XP do aluno.
   - `platform_ratings`: Feedbacks e notas da plataforma.
   - `course_ratings`: Avaliações e comentários dos cursos.
   - `searches`: Histórico de buscas.

---

## ✅ O que foi preparado e testado:

- **Redirecionamento SPA:** Arquivo `_redirects` criado em `public/` e embutido em `dist/`, além da regra configurada em `netlify.toml`. Isso impede erros 404 ao dar F5 em rotas internas (`/dashboard`, `/galaxy`, `/auth/login`, etc.).
- **Integração Completa:** Conexão com Supabase implementada em Auth, Progresso, Dashboard, Galáxia, Painel do Professor, Painel de Admin, Feedback e Avaliações.
- **Fallback Resiliente:** Caso o Supabase esteja temporariamente indisponível ou em configuração inicial, o site mantém os cursos base e a interface funcionando perfeitamente sem travar ou quebrar a tela.
- **Build de Produção:** Testado e compilado com sucesso (`npm run build`) sem erros de TypeScript ou Vite.
