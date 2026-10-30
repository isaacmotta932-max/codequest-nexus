// scripts/seed.ts
// Seed script para popular dados iniciais de teste no Supabase.

import dotenv from 'dotenv';
import { supabaseAdmin } from '../src/lib/supabaseAdmin';

dotenv.config({ path: '../.env' });

async function main() {
  console.log('🔧 Iniciando seed no Supabase...');

  // 1. Usuários de exemplo
  const users = [
    {
      id: 'demo-user-001',
      email: 'demo@nexus.io',
      username: 'DemoCoder',
      role: 'student',
      level: 1,
      xp: 150,
      current_streak: 3,
      longest_streak: 5,
      class_name: 'Initiate',
      title: 'Iniciante',
    },
    {
      id: 'demo-user-002',
      email: 'prof@nexus.io',
      username: 'Professor Alan',
      role: 'teacher',
      teacher_status: 'approved',
      level: 10,
      xp: 2500,
      current_streak: 15,
      longest_streak: 20,
      class_name: 'Full Stack Legend',
      title: 'Professor',
    },
  ];

  const { error: usersError } = await supabaseAdmin
    .from('users')
    .upsert(users, { onConflict: 'id' });

  if (usersError) {
    console.error('❌ Falha ao popular usuários:', usersError.message);
  } else {
    console.log('✅ Usuários populados com sucesso.');
  }

  // 2. Progresso do usuário demo
  const userProgress = [
    {
      user_id: 'demo-user-001',
      completed_lessons: ['html-1', 'html-2'],
      downloaded_lessons: [],
      xp: 150,
      last_updated: new Date().toISOString(),
    },
  ];

  const { error: progressError } = await supabaseAdmin
    .from('user_progress')
    .upsert(userProgress, { onConflict: 'user_id' });

  if (progressError) {
    console.error('❌ Falha ao popular progresso:', progressError.message);
  } else {
    console.log('✅ Progresso populado com sucesso.');
  }

  console.log('🚀 Seed concluído!');
}

main().catch((e) => {
  console.error('❌ Erro inesperado no seed:', e);
  process.exit(1);
});
