// Camada unificada de dados (Supabase + fallback local)
import { supabase, isSupabaseConfigured } from './supabase';
import { COURSES } from '@/data/courses';
import type { User, UserRole } from '@/types';
import type { ProgressData } from '@/hooks/useProgress';

export { supabase, isSupabaseConfigured };

// ============================================================================
// 1. USUÁRIOS
// ============================================================================

export async function dbGetUser(id: string): Promise<User | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error || !data) return null;

    return {
      id: data.id,
      username: data.username || 'Coder',
      email: data.email || '',
      avatarUrl: data.avatar_url || '',
      role: (data.role as UserRole) || 'student',
      level: data.level || 1,
      xp: data.xp || 0,
      currentStreak: data.current_streak || 0,
      longestStreak: data.longest_streak || 0,
      className: data.class_name || 'Initiate',
      title: data.title || 'Iniciante',
      joinedAt: data.joined_at || data.created_at || new Date().toISOString(),
    };
  } catch (e) {
    console.error('dbGetUser error:', e);
    return null;
  }
}

export async function dbSaveUser(user: Partial<User> & { id: string }): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const payload: Record<string, unknown> = {
      id: user.id,
      updated_at: new Date().toISOString(),
    };
    if (user.email !== undefined) payload.email = user.email;
    if (user.username !== undefined) payload.username = user.username;
    if (user.avatarUrl !== undefined) payload.avatar_url = user.avatarUrl;
    if (user.role !== undefined) payload.role = user.role;
    if (user.level !== undefined) payload.level = user.level;
    if (user.xp !== undefined) payload.xp = user.xp;
    if (user.currentStreak !== undefined) payload.current_streak = user.currentStreak;
    if (user.longestStreak !== undefined) payload.longest_streak = user.longestStreak;
    if (user.className !== undefined) payload.class_name = user.className;
    if (user.title !== undefined) payload.title = user.title;
    if (user.joinedAt !== undefined) payload.joined_at = user.joinedAt;

    const { error } = await supabase.from('users').upsert(payload, { onConflict: 'id' });
    if (error) {
      console.error('dbSaveUser error:', error);
      return false;
    }
    return true;
  } catch (e) {
    console.error('dbSaveUser exception:', e);
    return false;
  }
}

export async function dbGetAllUsers(): Promise<User[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const { data, error } = await supabase.from('users').select('*').order('created_at', { ascending: false });
    if (error || !data) return [];
    return data.map((d) => ({
      id: d.id,
      username: d.username || 'Coder',
      email: d.email || '',
      avatarUrl: d.avatar_url || '',
      role: (d.role as UserRole) || 'student',
      level: d.level || 1,
      xp: d.xp || 0,
      currentStreak: d.current_streak || 0,
      longestStreak: d.longest_streak || 0,
      className: d.class_name || 'Initiate',
      title: d.title || 'Iniciante',
      joinedAt: d.joined_at || d.created_at || new Date().toISOString(),
    }));
  } catch (e) {
    console.error('dbGetAllUsers error:', e);
    return [];
  }
}

export async function dbUpdateUserRole(id: string, role: UserRole): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const { error } = await supabase
      .from('users')
      .update({ role, updated_at: new Date().toISOString() })
      .eq('id', id);
    return !error;
  } catch {
    return false;
  }
}

export async function dbDeleteUser(id: string): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const { error } = await supabase.from('users').delete().eq('id', id);
    return !error;
  } catch {
    return false;
  }
}

// ============================================================================
// 2. PROFESSORES / CANDIDATURAS
// ============================================================================

export async function dbSaveTeacherApplication(data: {
  userId: string;
  fullName: string;
  email: string;
  birthDate?: string;
  phone?: string;
  knowledgeArea?: string;
  documentName?: string;
}): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const payload = {
      user_id: data.userId,
      full_name: data.fullName,
      email: data.email,
      birth_date: data.birthDate || '',
      phone: data.phone || '',
      knowledge_area: data.knowledgeArea || '',
      document_name: data.documentName || '',
      status: 'pending',
      submitted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase.from('teachers').upsert(payload, { onConflict: 'user_id' });
    if (error) {
      console.error('dbSaveTeacherApplication error:', error);
      return false;
    }
    // Atualiza status do professor na tabela users também
    await supabase.from('users').update({ teacher_status: 'pending' }).eq('id', data.userId);
    return true;
  } catch (e) {
    console.error('dbSaveTeacherApplication exception:', e);
    return false;
  }
}

export async function dbGetAllTeachers(): Promise<any[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .order('submitted_at', { ascending: false });
    if (error || !data) return [];
    return data;
  } catch (e) {
    console.error('dbGetAllTeachers error:', e);
    return [];
  }
}

export async function dbUpdateTeacherStatus(
  userId: string,
  status: 'approved' | 'rejected'
): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const now = new Date().toISOString();
    await supabase
      .from('teachers')
      .update({ status, reviewed_at: now, updated_at: now })
      .eq('user_id', userId);

    await supabase
      .from('users')
      .update({
        teacher_status: status,
        role: status === 'approved' ? 'teacher' : 'student',
        updated_at: now,
      })
      .eq('id', userId);

    return true;
  } catch {
    return false;
  }
}

// ============================================================================
// 3. CURSOS
// ============================================================================

export async function dbGetPublishedCourses(): Promise<any[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
    if (error || !data) return [];
    return data.map((c) => ({
      ...c,
      teacherId: c.teacher_id,
      averageRating: Number(c.average_rating) || 0,
      ratingsCount: c.ratings_count || 0,
    }));
  } catch (e) {
    console.error('dbGetPublishedCourses error:', e);
    return [];
  }
}

export async function dbGetTeacherCourses(teacherId: string): Promise<any[]> {
  if (!isSupabaseConfigured) return [];
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('teacher_id', teacherId)
      .order('created_at', { ascending: false });
    if (error || !data) return [];
    return data.map((c) => ({
      ...c,
      teacherId: c.teacher_id,
      averageRating: Number(c.average_rating) || 0,
      ratingsCount: c.ratings_count || 0,
    }));
  } catch (e) {
    console.error('dbGetTeacherCourses error:', e);
    return [];
  }
}

export async function dbSaveCourse(course: any): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const payload = {
      id: course.id,
      teacher_id: course.teacherId,
      slug: course.slug || course.id,
      name: course.name,
      description: course.description || '',
      icon: course.icon || '',
      color: course.color || '',
      average_rating: course.averageRating || 0,
      ratings_count: course.ratingsCount || 0,
      views: course.views || 0,
      published: Boolean(course.published),
      lessons: Array.isArray(course.lessons) ? course.lessons : [],
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase.from('courses').upsert(payload, { onConflict: 'id' });
    return !error;
  } catch (e) {
    console.error('dbSaveCourse error:', e);
    return false;
  }
}

export async function dbDeleteCourse(courseId: string): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const { error } = await supabase.from('courses').delete().eq('id', courseId);
    return !error;
  } catch {
    return false;
  }
}

// ============================================================================
// 4. PROGRESSO DO ALUNO
// ============================================================================

export async function dbGetUserProgress(userId: string): Promise<ProgressData | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (error || !data) return null;

    return {
      completedLessons: Array.isArray(data.completed_lessons) ? data.completed_lessons : [],
      downloadedLessons: Array.isArray(data.downloaded_lessons) ? data.downloaded_lessons : [],
      xp: typeof data.xp === 'number' ? data.xp : 0,
      lastUpdated: data.last_updated || new Date().toISOString(),
    };
  } catch (e) {
    console.error('dbGetUserProgress error:', e);
    return null;
  }
}

export async function dbSaveUserProgress(userId: string, progress: ProgressData): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const payload = {
      user_id: userId,
      completed_lessons: progress.completedLessons,
      downloaded_lessons: progress.downloadedLessons,
      xp: progress.xp,
      last_updated: progress.lastUpdated || new Date().toISOString(),
    };
    const { error } = await supabase.from('user_progress').upsert(payload, { onConflict: 'user_id' });
    return !error;
  } catch (e) {
    console.error('dbSaveUserProgress error:', e);
    return false;
  }
}

// ============================================================================
// 5. FEEDBACK DA PLATAFORMA & AVALIAÇÃO DE CURSOS
// ============================================================================

export async function dbGetPlatformFeedback(userId: string): Promise<{ rating: number; comment: string } | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const { data, error } = await supabase
      .from('platform_ratings')
      .select('rating, comment')
      .eq('user_id', userId)
      .maybeSingle();

    if (error || !data) return null;
    return {
      rating: data.rating,
      comment: data.comment || '',
    };
  } catch {
    return null;
  }
}

export async function dbSavePlatformFeedback(data: {
  userId: string;
  rating: number;
  comment: string;
  username?: string;
  role?: string;
}): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const payload = {
      user_id: data.userId,
      rating: data.rating,
      comment: data.comment,
      username: data.username || '',
      role: data.role || 'student',
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase.from('platform_ratings').upsert(payload, { onConflict: 'user_id' });
    return !error;
  } catch (e) {
    console.error('dbSavePlatformFeedback error:', e);
    return false;
  }
}

export async function dbGetCourseRating(courseId: string, userId: string): Promise<{ rating: number; comment: string } | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const { data, error } = await supabase
      .from('course_ratings')
      .select('rating, comment')
      .eq('course_id', courseId)
      .eq('user_id', userId)
      .maybeSingle();

    if (error || !data) return null;
    return { rating: data.rating, comment: data.comment || '' };
  } catch {
    return null;
  }
}

export async function dbSaveCourseRating(data: {
  courseId: string;
  userId: string;
  rating: number;
  comment: string;
  username?: string;
}): Promise<boolean> {
  if (!isSupabaseConfigured) return false;
  try {
    const payload = {
      course_id: data.courseId,
      user_id: data.userId,
      rating: data.rating,
      comment: data.comment,
      username: data.username || '',
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase.from('course_ratings').upsert(payload, { onConflict: 'course_id,user_id' });
    return !error;
  } catch {
    return false;
  }
}

// ============================================================================
// 8. ESTATÍSTICAS DA PLATAFORMA (DADOS REAIS)
// ============================================================================

export interface PlatformStats {
  planets: number;
  lessons: number;
  coders: number;
}

export async function dbGetPlatformStats(): Promise<PlatformStats> {
  const planets = COURSES.length;
  const lessons = COURSES.reduce((sum, c) => sum + (c.lessons?.length || 0), 0);

  let coders = 0;

  // Busca do Supabase se configurado
  if (isSupabaseConfigured) {
    try {
      const { count, error } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });
      if (!error && typeof count === 'number' && count > 0) {
        coders = count;
      }
    } catch {
      // Ignora erro
    }
  }

  // Se Supabase ainda não tem a tabela ou retornou 0, busca cadastros salvos localmente
  if (coders === 0) {
    try {
      const stored = localStorage.getItem('codequest_registered_users');
      if (stored) {
        const list = JSON.parse(stored);
        if (Array.isArray(list) && list.length > 0) {
          coders = list.length;
        }
      }
      if (coders === 0) {
        const authStorage = localStorage.getItem('auth-storage');
        if (authStorage) {
          const parsed = JSON.parse(authStorage);
          if (parsed?.state?.user?.id) {
            coders = 1;
          }
        }
      }
    } catch {
      // Ignora
    }
  }

  return {
    planets,
    lessons,
    coders,
  };
}
