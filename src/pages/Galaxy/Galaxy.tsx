import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { dbGetPublishedCourses, isSupabaseConfigured, supabase } from '@/lib/database';
import { getAllCourses } from '@/data/courses';

interface Lesson {
  id: string;
  title: string;
  description?: string;
  type: 'pdf' | 'video' | 'quiz';
  content?: string;
  duration?: number;
  xpReward?: number;
  fileName?: string;
  fileUrl?: string;
  fileSize?: number;
  fileType?: string;
  uploadedAt?: unknown;
}

interface FirebaseCourse {
  id: string;
  slug?: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  views?: number;
  lessons?: Lesson[];
  teacherId?: string;
  published?: boolean;
  averageRating?: number;
  ratingsCount?: number;
}

interface CourseWithTeacher extends FirebaseCourse {
  teacherName: string;
}

function materialLabel(type: Lesson['type']) {
  if (type === 'pdf') return '📄 PDF';
  if (type === 'video') return '🎥 Vídeo';
  return '🧠 Quiz';
}

export function Galaxy() {
  const [courses, setCourses] = useState<CourseWithTeacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const getDefaultCourses = (): CourseWithTeacher[] => {
      return getAllCourses().map((c) => ({
        id: c.id,
        slug: c.slug,
        name: c.name,
        description: c.description,
        icon: c.icon,
        color: c.color,
        teacherName: 'CodeQuest Nexus',
        teacherId: '',
        published: true,
        lessons: c.lessons.map((l) => ({
          id: l.id,
          title: l.title,
          description: l.description,
          type: 'pdf',
          content: l.content,
          duration: l.duration,
          xpReward: l.xpReward,
        })),
      }));
    };

    const loadCourses = async () => {
      if (!isSupabaseConfigured) {
        setCourses(getDefaultCourses());
        setLoading(false);
        return;
      }

      try {
        const rawCourses = await dbGetPublishedCourses();
        if (cancelled) return;

        if (!rawCourses || rawCourses.length === 0) {
          setCourses(getDefaultCourses());
          return;
        }

        const loadedCourses = await Promise.all(
          rawCourses.map(async (course) => {
            let teacherName = 'Professor';
            if (course.teacherId) {
              try {
                const { data: teacher } = await supabase
                  .from('teachers')
                  .select('full_name')
                  .eq('user_id', course.teacherId)
                  .maybeSingle();

                if (teacher?.full_name) {
                  teacherName = teacher.full_name;
                } else {
                  const { data: user } = await supabase
                    .from('users')
                    .select('username')
                    .eq('id', course.teacherId)
                    .maybeSingle();
                  if (user?.username) teacherName = user.username;
                }
              } catch (e) {
                console.error('Erro ao buscar professor:', e);
              }
            }

            return {
              id: course.id,
              ...course,
              teacherName,
              lessons: Array.isArray(course.lessons) ? course.lessons : [],
            };
          })
        );

        if (!cancelled) {
          setCourses(loadedCourses.length > 0 ? loadedCourses : getDefaultCourses());
        }
      } catch (error) {
        console.error('Erro ao carregar cursos:', error);
        if (!cancelled) setCourses(getDefaultCourses());
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadCourses();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '18px',
        }}
      >
        Carregando cursos...
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '30px',
        color: 'white',
      }}
    >
      <div
        style={{
          marginBottom: '30px',
        }}
      >
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            margin: 0,
          }}
        >
          🌌 Galáxia
        </h1>

        <p
          style={{
            color: '#9CA3AF',
            marginTop: '8px',
          }}
        >
          Escolha um curso para começar sua
          jornada.
        </p>
      </div>

      {courses.length === 0 ? (
        <div
          style={{
            background: '#111827',
            border: '1px solid #374151',
            borderRadius: '16px',
            padding: '30px',
            textAlign: 'center',
            color: '#9CA3AF',
          }}
        >
          <div
            style={{
              fontSize: '40px',
              marginBottom: '12px',
            }}
          >
            🚀
          </div>

          <h2
            style={{
              color: 'white',
              marginBottom: '8px',
            }}
          >
            Nenhum curso publicado ainda
          </h2>

          <p>
            Quando um professor publicar um
            curso, ele aparecerá aqui.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {courses.map((course) => {
            const lessons =
              course.lessons || [];

            const color =
              course.color || '#6366F1';

            const slug =
              course.slug || course.id;

            return (
              <div
                key={course.id}
                style={{
                  background: '#111827',
                  border: `1px solid ${color}`,
                  borderRadius: '16px',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontSize: '42px',
                    marginBottom: '15px',
                  }}
                >
                  {course.icon || '🚀'}
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontSize: '22px',
                  }}
                >
                  {course.name}
                </h2>

                <p
                  style={{
                    color: '#9CA3AF',
                    lineHeight: 1.5,
                  }}
                >
                  {course.description ||
                    'Curso disponível para você.'}
                </p>

                <div
                  style={{
                    marginTop: '15px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: '#1F2937',
                    color: '#D1D5DB',
                  }}
                >
                  👨‍🏫 Professor:{' '}
                  <strong
                    style={{
                      color: 'white',
                    }}
                  >
                    {course.teacherName}
                  </strong>
                </div>

                <div
                  style={{
                    marginTop: '15px',
                    color: '#D1D5DB',
                    fontSize: '14px',
                  }}
                >
                  📚 {lessons.length}{' '}
                  {lessons.length === 1
                    ? 'aula'
                    : 'aulas'}
                </div>

                {lessons.length > 0 && (
                  <div
                    style={{
                      marginTop: '18px',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '15px',
                        marginBottom: '10px',
                      }}
                    >
                      📦 Material disponível
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection:
                          'column',
                        gap: '8px',
                      }}
                    >
                      {lessons
                        .slice(0, 5)
                        .map((lesson, index) => (
                          <div
                            key={
                              lesson.id ||
                              `${course.id}-${index}`
                            }
                            style={{
                              background:
                                '#1F2937',
                              borderRadius:
                                '8px',
                              padding:
                                '10px',
                            }}
                          >
                            <div
                              style={{
                                fontWeight:
                                  'bold',
                                fontSize:
                                  '14px',
                              }}
                            >
                              {index + 1}.{' '}
                              {lesson.title}
                            </div>

                            <div
                              style={{
                                marginTop:
                                  '4px',
                                color:
                                  '#9CA3AF',
                                fontSize:
                                  '12px',
                              }}
                            >
                              {materialLabel(
                                lesson.type
                              )}
                            </div>
                          </div>
                        ))}
                    </div>

                    {lessons.length > 5 && (
                      <div
                        style={{
                          marginTop: '8px',
                          color: '#9CA3AF',
                          fontSize: '12px',
                        }}
                      >
                        +{' '}
                        {lessons.length - 5}{' '}
                        materiais
                      </div>
                    )}
                  </div>
                )}

                <Link
                  to={`/lesson/${slug}/${lessons[0]?.id || '1'}`}
                  style={{
                    display: 'block',
                    marginTop: '20px',
                    padding: '12px',
                    borderRadius: '8px',
                    background: color,
                    color: '#000',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  🚀 Entrar no curso
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}