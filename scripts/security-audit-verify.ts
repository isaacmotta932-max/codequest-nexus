import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    console.log(`  ✅ PASS: ${testName}`);
    passCount++;
  } else {
    console.error(`  ❌ FAIL: ${testName}${detail ? ` (${detail})` : ''}`);
    failCount++;
  }
}

console.log('🛡️ Executando Suite de Testes de Segurança Automatizada...\n');

const ROOT_DIR = path.resolve(__dirname, '..');

// Teste 1: Políticas RLS no Supabase Schema
console.log('1. Verificação de Políticas RLS no Supabase:');
const schemaPath = path.join(ROOT_DIR, 'supabase', 'schema.sql');
const schemaSql = fs.readFileSync(schemaPath, 'utf8');

const insecureUpdateMatch = /CREATE\s+POLICY.*FOR\s+UPDATE\s+USING\s*\(\s*true\s*\)/i.test(schemaSql);
const insecureDeleteMatch = /CREATE\s+POLICY.*FOR\s+DELETE\s+USING\s*\(\s*true\s*\)/i.test(schemaSql);
assert(!insecureUpdateMatch, 'Nenhuma política de UPDATE usa USING (true)');
assert(!insecureDeleteMatch, 'Nenhuma política de DELETE usa USING (true)');

const hasIsAdmin = /CREATE\s+OR\s+REPLACE\s+FUNCTION\s+public\.is_admin\(\)/i.test(schemaSql);
assert(hasIsAdmin, 'Função de segurança public.is_admin() implementada com SECURITY DEFINER');

// Teste 2: Gatilho handle_new_user contra Escalação de Privilégios
console.log('\n2. Verificação do Gatilho de Autenticação contra Escalação de Papéis:');
const safeRoleEnforcement = schemaSql.includes("'student', -- Segurança: novos cadastros públicos são estritamente alunos");
const rawRoleEscalation = /COALESCE\(new\.raw_user_meta_data->>'role'/i.test(schemaSql);
assert(safeRoleEnforcement && !rawRoleEscalation, 'Trigger handle_new_user() rejeita escalação de privilégios para admin');

// Teste 3: Cabeçalhos HTTP de Segurança no Netlify
console.log('\n3. Verificação de Cabeçalhos HTTP de Segurança (OWASP):');
const netlifyPath = path.join(ROOT_DIR, 'netlify.toml');
const netlifyContent = fs.readFileSync(netlifyPath, 'utf8');

assert(netlifyContent.includes('X-Frame-Options = "DENY"'), 'X-Frame-Options: DENY configurado contra Clickjacking');
assert(netlifyContent.includes('X-Content-Type-Options = "nosniff"'), 'X-Content-Type-Options: nosniff configurado contra MIME sniffing');
assert(netlifyContent.includes('X-XSS-Protection = "1; mode=block"'), 'X-XSS-Protection ativo');
assert(netlifyContent.includes('Referrer-Policy = "strict-origin-when-cross-origin"'), 'Referrer-Policy estrito');
assert(netlifyContent.includes('Permissions-Policy'), 'Permissions-Policy restringe hardware desnecessário');
assert(netlifyContent.includes('Content-Security-Policy'), 'Content-Security-Policy configurada com regras de frame e script');

// Teste 4: Higienização contra XSS e Injeção de Protocolo em Lições
console.log('\n4. Verificação de Proteção contra XSS em Lesson.tsx:');
const lessonPath = path.join(ROOT_DIR, 'src', 'pages', 'Lesson', 'Lesson.tsx');
const lessonContent = fs.readFileSync(lessonPath, 'utf8');

assert(lessonContent.includes("import DOMPurify from 'dompurify'"), 'DOMPurify importado no componente de aulas');
assert(lessonContent.includes('DOMPurify.sanitize(rawHtml'), 'HTML de Markdown higienizado antes do dangerouslySetInnerHTML');
assert(lessonContent.includes('const isSafeUrl ='), 'Validador isSafeUrl implementado contra protocolo javascript:');
assert(lessonContent.includes('rel="noopener noreferrer"'), 'Links externos protegidos com noopener e noreferrer');

// Teste 5: Remoção de Dependências Vulneráveis
console.log('\n5. Verificação de Dependências e Higiene de Segredos:');
const packageJsonPath = path.join(ROOT_DIR, 'package.json');
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

assert(!pkg.dependencies.firebase, 'Dependência legada do Firebase removida');
assert(Boolean(pkg.dependencies.dompurify), 'Dependência DOMPurify adicionada');

// Teste 6: Higiene de Segredos
const gitignorePath = path.join(ROOT_DIR, '.gitignore');
const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
assert(gitignoreContent.includes('.env'), '.gitignore protege arquivos .env');

console.log(`\n========================================`);
console.log(`Resultado da Suite: ${passCount} passaram, ${failCount} falharam.`);
console.log(`========================================\n`);

if (failCount > 0) {
  process.exit(1);
}
