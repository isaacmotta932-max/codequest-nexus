-- ==============================================================================
-- CODEQUEST NEXUS: ESQUEMA COMPLETO PARA SUPABASE (POSTGRESQL)
-- ==============================================================================
-- Este script cria todas as tabelas, índices e políticas de segurança (RLS)
-- necessárias para o funcionamento integral do CodeQuest Nexus.
-- Execute este script no SQL Editor do seu projeto Supabase.
-- ==============================================================================

BEGIN;

-- 1. TABELA DE USUÁRIOS (users)
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email VARCHAR(320),
    username VARCHAR(120),
    avatar_url TEXT DEFAULT '',
    role VARCHAR(20) NOT NULL DEFAULT 'student'
        CHECK (role IN ('student', 'teacher', 'admin')),
    teacher_status VARCHAR(20)
        CHECK (teacher_status IS NULL OR teacher_status IN ('pending', 'approved', 'rejected')),
    level INT NOT NULL DEFAULT 1,
    xp INT NOT NULL DEFAULT 0,
    current_streak INT NOT NULL DEFAULT 0,
    longest_streak INT NOT NULL DEFAULT 0,
    class_name VARCHAR(100) NOT NULL DEFAULT 'Initiate',
    title VARCHAR(100) NOT NULL DEFAULT 'Iniciante',
    joined_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. TABELA DE PROFESSORES / CANDIDATURAS (teachers)
CREATE TABLE IF NOT EXISTS teachers (
    user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    full_name VARCHAR(200) NOT NULL,
    email VARCHAR(320),
    birth_date VARCHAR(40),
    phone VARCHAR(60),
    knowledge_area VARCHAR(200),
    document_name VARCHAR(255),
    title VARCHAR(255),
    status VARCHAR(20) NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'approved', 'rejected')),
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMPTZ,
    reviewed_by VARCHAR(120),
    rejection_reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. TABELA DE CURSOS (courses)
CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY,
    teacher_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    slug VARCHAR(150),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    icon TEXT,
    color VARCHAR(50),
    average_rating NUMERIC(3,2) NOT NULL DEFAULT 0
        CHECK (average_rating >= 0 AND average_rating <= 5),
    ratings_count INT NOT NULL DEFAULT 0,
    views INT NOT NULL DEFAULT 0,
    published BOOLEAN NOT NULL DEFAULT FALSE,
    lessons JSONB NOT NULL DEFAULT '[]'::JSONB
        CHECK (jsonb_typeof(lessons) = 'array'),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. TABELA DE HISTÓRICO DE BUSCAS (searches)
CREATE TABLE IF NOT EXISTS searches (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    query TEXT NOT NULL DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 5. TABELA DE FEEDBACK DA PLATAFORMA (platform_ratings)
CREATE TABLE IF NOT EXISTS platform_ratings (
    user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT NOT NULL DEFAULT '',
    username VARCHAR(120),
    role VARCHAR(20) NOT NULL DEFAULT 'student'
        CHECK (role IN ('student', 'teacher', 'admin')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 6. TABELA DE PROGRESSO DO ALUNO (user_progress)
CREATE TABLE IF NOT EXISTS user_progress (
    user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    completed_lessons JSONB NOT NULL DEFAULT '[]'::JSONB,
    downloaded_lessons JSONB NOT NULL DEFAULT '[]'::JSONB,
    xp INT NOT NULL DEFAULT 0,
    last_updated TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 7. TABELA DE AVALIAÇÕES POR CURSO (course_ratings)
CREATE TABLE IF NOT EXISTS course_ratings (
    course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT NOT NULL DEFAULT '',
    username VARCHAR(120),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (course_id, user_id)
);

-- ÍNDICES DE DESEMPENHO
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
CREATE INDEX IF NOT EXISTS idx_teachers_status ON teachers(status);
CREATE INDEX IF NOT EXISTS idx_courses_teacher_id ON courses(teacher_id);
CREATE INDEX IF NOT EXISTS idx_courses_published ON courses(published);
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_searches_user_created ON searches(user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_platform_ratings_created ON platform_ratings(created_at);
CREATE INDEX IF NOT EXISTS idx_course_ratings_course ON course_ratings(course_id);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) & POLÍTICAS DE ACESSO
-- ==============================================================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_ratings ENABLE ROW LEVEL SECURITY;

-- Políticas para users
DROP POLICY IF EXISTS "Public can read users" ON users;
CREATE POLICY "Public can read users" ON users FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can insert own record" ON users;
CREATE POLICY "Users can insert own record" ON users FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update own record" ON users;
CREATE POLICY "Users can update own record" ON users FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Users can delete own record" ON users;
CREATE POLICY "Users can delete own record" ON users FOR DELETE USING (true);

-- Políticas para teachers
DROP POLICY IF EXISTS "Public can read teachers" ON teachers;
CREATE POLICY "Public can read teachers" ON teachers FOR SELECT USING (true);

DROP POLICY IF EXISTS "Teachers can insert application" ON teachers;
CREATE POLICY "Teachers can insert application" ON teachers FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Teachers can update application" ON teachers;
CREATE POLICY "Teachers can update application" ON teachers FOR UPDATE USING (true);

-- Políticas para courses
DROP POLICY IF EXISTS "Public can read courses" ON courses;
CREATE POLICY "Public can read courses" ON courses FOR SELECT USING (true);

DROP POLICY IF EXISTS "Teachers can create courses" ON courses;
CREATE POLICY "Teachers can create courses" ON courses FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Teachers can update own courses" ON courses;
CREATE POLICY "Teachers can update own courses" ON courses FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Teachers can delete own courses" ON courses;
CREATE POLICY "Teachers can delete own courses" ON courses FOR DELETE USING (true);

-- Políticas para user_progress
DROP POLICY IF EXISTS "Users can read own progress" ON user_progress;
CREATE POLICY "Users can read own progress" ON user_progress FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can manage own progress" ON user_progress;
CREATE POLICY "Users can manage own progress" ON user_progress FOR ALL USING (true);

-- Políticas para platform_ratings
DROP POLICY IF EXISTS "Public can read platform ratings" ON platform_ratings;
CREATE POLICY "Public can read platform ratings" ON platform_ratings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can manage own platform rating" ON platform_ratings;
CREATE POLICY "Users can manage own platform rating" ON platform_ratings FOR ALL USING (true);

-- Políticas para course_ratings
DROP POLICY IF EXISTS "Public can read course ratings" ON course_ratings;
CREATE POLICY "Public can read course ratings" ON course_ratings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can manage own course rating" ON course_ratings;
CREATE POLICY "Users can manage own course rating" ON course_ratings FOR ALL USING (true);

-- Políticas para searches
DROP POLICY IF EXISTS "Users can manage searches" ON searches;
CREATE POLICY "Users can manage searches" ON searches FOR ALL USING (true);

COMMIT;
