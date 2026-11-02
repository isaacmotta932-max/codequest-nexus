import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { User, UserRole } from '@/types';
import {
  supabase,
  isSupabaseConfigured,
  dbGetUser,
  dbSaveUser,
  dbSaveTeacherApplication,
} from '@/lib/database';

interface TeacherApplicationData {
  name: string;
  phone: string;
  birthDate: string;
  knowledgeArea: string;
  document: File | null;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  avatarUrl?: string;
  teacherApplication?: TeacherApplicationData;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  initialized: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  updateAvatar: (avatarUrl: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void> | void;
  initAuth: () => void;
}

const MOCK_USER: User = {
  id: 'demo-user-001',
  username: 'DemoCoder',
  email: 'demo@nexus.io',
  avatarUrl: '',
  role: 'student',
  level: 1,
  xp: 0,
  currentStreak: 0,
  longestStreak: 0,
  className: 'Initiate',
  title: 'Iniciante',
  joinedAt: new Date().toISOString(),
};

function criarUsuario(
  id: string,
  username: string,
  email: string,
  role: UserRole
): User {
  return {
    id,
    username,
    email,
    avatarUrl: '',
    role,
    level: 1,
    xp: 0,
    currentStreak: 0,
    longestStreak: 0,
    className: 'Initiate',
    title:
      role === 'teacher'
        ? 'Professor'
        : role === 'admin'
          ? 'Administrador'
          : 'Iniciante',
    joinedAt: new Date().toISOString(),
  };
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      loading: false,
      initialized: false,
      error: null,

      initAuth: () => {
        if (!isSupabaseConfigured) {
          set({ initialized: true });
          return;
        }

        // Listener de sessão do Supabase
        supabase.auth.getSession().then(({ data: { session } }) => {
          if (session?.user) {
            dbGetUser(session.user.id).then((profile) => {
              if (profile) {
                set({ user: profile, initialized: true });
              } else {
                set({ initialized: true });
              }
            });
          } else {
            set({ initialized: true });
          }
        });

        supabase.auth.onAuthStateChange(async (_event, session) => {
          if (session?.user) {
            const profile = await dbGetUser(session.user.id);
            if (profile) {
              set({ user: profile });
            }
          }
        });
      },

      login: async (email, password) => {
        set({ loading: true, error: null });

        try {
          if (isSupabaseConfigured) {
            const { data, error } = await supabase.auth.signInWithPassword({
              email,
              password,
            });

            if (error) {
              throw error;
            }

            if (!data.user) {
              throw new Error('Usuário não encontrado.');
            }

            // Buscar perfil no banco
            let profile = await dbGetUser(data.user.id);

            if (!profile) {
              // Se não existir perfil, cria um novo
              profile = criarUsuario(
                data.user.id,
                email.split('@')[0],
                email,
                'student'
              );
              await dbSaveUser(profile);
            }

            set({
              user: profile,
              loading: false,
              error: null,
            });

            return;
          }

          // Mock fallback
          await new Promise((resolve) => setTimeout(resolve, 500));
          set({
            user: { ...MOCK_USER, email },
            loading: false,
            error: null,
          });
        } catch (err: unknown) {
          const error = err as { message?: string };
          let msg = error.message || 'Erro ao autenticar.';
          const lower = msg.toLowerCase();
          if (lower.includes('email not confirmed')) {
            msg = 'E-mail não confirmado. Confirme seu e-mail na sua caixa de entrada ou desative a confirmação de e-mail no painel do Supabase.';
          } else if (lower.includes('invalid login credentials')) {
            msg = 'E-mail ou senha incorretos.';
          } else if (lower.includes('failed to fetch') || lower.includes('fetch failed')) {
            msg = 'Não foi possível conectar ao banco de dados (servidor Supabase pausado ou inacessível).';
          }
          set({
            error: msg,
            loading: false,
          });
          throw new Error(msg);
        }
      },

      register: async (data) => {
        set({ loading: true, error: null });

        try {
          if (data.role === 'admin') {
            throw new Error(
              'Uma conta de administrador não pode ser criada pelo cadastro público.'
            );
          }

          if (isSupabaseConfigured) {
            const { data: authData, error } = await supabase.auth.signUp({
              email: data.email,
              password: data.password,
              options: {
                data: {
                  username: data.username,
                  role: data.role,
                },
              },
            });

            if (error) throw error;
            if (!authData.user) throw new Error('Não foi possível criar o usuário.');

            const newUser = criarUsuario(
              authData.user.id,
              data.username,
              data.email,
              data.role
            );
            if (data.avatarUrl) {
              newUser.avatarUrl = data.avatarUrl;
            }

            // Salva dados na tabela users
            await dbSaveUser(newUser);

            // Registra o coder no histórico de cadastros
            try {
              const stored = JSON.parse(localStorage.getItem('codequest_registered_users') || '[]');
              if (!stored.includes(newUser.email)) {
                stored.push(newUser.email);
                localStorage.setItem('codequest_registered_users', JSON.stringify(stored));
              }
            } catch {
              // Ignora
            }

            // Se for professor, salva candidatura na tabela teachers
            if (data.role === 'teacher' && data.teacherApplication) {
              await dbSaveTeacherApplication({
                userId: authData.user.id,
                fullName: data.teacherApplication.name,
                email: data.email,
                birthDate: data.teacherApplication.birthDate,
                phone: data.teacherApplication.phone,
                knowledgeArea: data.teacherApplication.knowledgeArea,
                documentName: data.teacherApplication.document?.name || '',
              });
            }

            set({
              user: newUser,
              loading: false,
              error: null,
            });

            return;
          }

          // Modo local/mock
          await new Promise((resolve) => setTimeout(resolve, 500));
          const localUser = criarUsuario(
            `local-${Date.now()}`,
            data.username,
            data.email,
            data.role
          );
          if (data.avatarUrl) {
            localUser.avatarUrl = data.avatarUrl;
          }

          try {
            const stored = JSON.parse(localStorage.getItem('codequest_registered_users') || '[]');
            if (!stored.includes(localUser.email)) {
              stored.push(localUser.email);
              localStorage.setItem('codequest_registered_users', JSON.stringify(stored));
            }
          } catch {
            // Ignora
          }

          set({
            user: localUser,
            loading: false,
            error: null,
          });
        } catch (err: unknown) {
          const error = err as { message?: string };
          let msg = error.message || 'Não foi possível criar a conta.';
          const lower = msg.toLowerCase();
          if (lower.includes('user already registered') || lower.includes('already registered')) {
            msg = 'Este e-mail já está cadastrado. Vá para a tela de login.';
          } else if (lower.includes('failed to fetch') || lower.includes('fetch failed')) {
            msg = 'Não foi possível conectar ao banco de dados (servidor Supabase pausado ou inacessível). Verifique seu projeto no Supabase.';
          }
          set({
            error: msg,
            loading: false,
          });
          throw new Error(msg);
        }
      },

      loginWithGoogle: async () => {
        set({ loading: true, error: null });

        try {
          if (isSupabaseConfigured) {
            const { error } = await supabase.auth.signInWithOAuth({
              provider: 'google',
              options: {
                redirectTo: window.location.origin,
              },
            });

            if (error) throw error;
            return;
          }

          // Mock fallback
          await new Promise((resolve) => setTimeout(resolve, 500));
          set({
            user: MOCK_USER,
            loading: false,
            error: null,
          });
        } catch (err: unknown) {
          const error = err as { message?: string };
          set({
            error: error.message || 'Erro ao entrar com Google.',
            loading: false,
          });
          throw err;
        }
      },

      updateAvatar: async (avatarUrl: string) => {
        const currentUser = get().user;
        if (!currentUser) return;

        const updatedUser = { ...currentUser, avatarUrl };
        set({ user: updatedUser });

        if (isSupabaseConfigured && currentUser.id) {
          try {
            await dbSaveUser({ id: currentUser.id, avatarUrl });
          } catch (e) {
            console.error('Erro ao salvar avatar no Supabase:', e);
          }
        }
      },

      logout: async () => {
        if (isSupabaseConfigured) {
          try {
            await supabase.auth.signOut();
          } catch (e) {
            console.error('Logout error:', e);
          }
        }
        set({
          user: null,
          error: null,
          loading: false,
        });
      },
    }),
    {
      name: 'codequest-auth',
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);
