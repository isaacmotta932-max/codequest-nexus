import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  RotateCcw,
  Eye,
  Zap,
  Copy,
  Check,
  Award,
  Terminal,
  ArrowRight,
  ArrowLeft,
  Lock,
  Bug,
  Code2,
} from 'lucide-react';

import { dbGetPublishedCourses, isSupabaseConfigured } from '@/lib/database';
import { getCourseBySlug } from '@/data/courses';
import { downloadLessonPDF } from '@/utils/pdfGenerator';
import { useProgress } from '@/hooks/useProgress';
import DOMPurify from 'dompurify';
import type {
  LessonExercise,
  QuizExercise,
  CodeExercise,
  BugHuntExercise,
  FillBlankExercise,
} from '@/types';

type LessonType = 'pdf' | 'word' | 'video' | 'quiz';

interface Lesson {
  id: string;
  title: string;
  description?: string;
  type: LessonType;
  content?: string;
  duration?: number;
  xpReward?: number;
  language?: string;
  codeExample?: string;
  fileName?: string;
  fileUrl?: string;
  fileSize?: number;
  fileType?: string;
  uploadedAt?: unknown;
  exercises?: LessonExercise[];
}

interface Course {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  planetName: string;
  teacherId: string;
  lessons: Lesson[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function convertLesson(value: unknown): Lesson {
  if (!isRecord(value)) {
    return {
      id: '',
      title: 'Aula sem título',
      type: 'pdf',
      content: '',
      xpReward: 0,
    };
  }

  let type: LessonType = 'pdf';
  if (value.type === 'word') type = 'word';
  else if (value.type === 'video') type = 'video';
  else if (value.type === 'quiz') type = 'quiz';

  const rawExercises = Array.isArray(value.exercises) ? (value.exercises as LessonExercise[]) : undefined;

  return {
    id: typeof value.id === 'string' ? value.id : '',
    title: typeof value.title === 'string' ? value.title : 'Aula sem título',
    description: typeof value.description === 'string' ? value.description : '',
    type,
    content: typeof value.content === 'string' ? value.content : '',
    duration: typeof value.duration === 'number' ? value.duration : undefined,
    xpReward: typeof value.xpReward === 'number' ? value.xpReward : 0,
    language: typeof value.language === 'string' ? value.language : undefined,
    codeExample: typeof value.codeExample === 'string' ? value.codeExample : undefined,
    fileName: typeof value.fileName === 'string' ? value.fileName : undefined,
    fileUrl: typeof value.fileUrl === 'string' ? value.fileUrl : undefined,
    fileSize: typeof value.fileSize === 'number' ? value.fileSize : undefined,
    fileType: typeof value.fileType === 'string' ? value.fileType : undefined,
    uploadedAt: value.uploadedAt,
    exercises: rawExercises,
  };
}

function convertCourse(courseId: string, data: Record<string, unknown>): Course {
  const slug = typeof data.slug === 'string' && data.slug.trim() ? data.slug : courseId;
  const rawLessons: unknown[] = Array.isArray(data.lessons) ? data.lessons : [];

  return {
    id: courseId,
    slug,
    name: typeof data.name === 'string' ? data.name : 'Curso sem nome',
    description: typeof data.description === 'string' ? data.description : '',
    icon: typeof data.icon === 'string' ? data.icon : '🚀',
    color: typeof data.color === 'string' ? data.color : '#6366F1',
    planetName:
      typeof data.planetName === 'string'
        ? data.planetName
        : typeof data.name === 'string'
          ? data.name
          : 'Curso',
    teacherId: typeof data.teacherId === 'string' ? data.teacherId : '',
    lessons: rawLessons.map(convertLesson),
  };
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();

    if (hostname === 'youtu.be') {
      const id = parsed.pathname.split('/').filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (
      hostname === 'youtube.com' ||
      hostname === 'www.youtube.com' ||
      hostname.endsWith('.youtube.com')
    ) {
      const watchId = parsed.searchParams.get('v');
      if (watchId) return `https://www.youtube.com/embed/${watchId}`;

      const parts = parsed.pathname.split('/').filter(Boolean);
      if (parts[0] === 'embed' && parts[1]) {
        return `https://www.youtube.com/embed/${parts[1]}`;
      }
      if (parts[0] === 'shorts' && parts[1]) {
        return `https://www.youtube.com/embed/${parts[1]}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}

function downloadDataUrl(dataUrl: string, fileName: string) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = fileName || 'material.docx';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ============================================================================
// COMPONENTE: QUIZ INTERATIVO (SEM ENTREGAR RESPOSTA, COM DICAS)
// ============================================================================
function InteractiveQuiz({
  quiz,
  onComplete,
}: {
  quiz: QuizExercise;
  onComplete: () => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSelected(null);
    setSubmitted(false);
  }, [quiz]);

  const isCorrect = selected === quiz.correctIndex;

  const handleVerify = () => {
    if (selected === null) return;
    setSubmitted(true);
    if (selected === quiz.correctIndex) {
      onComplete();
    }
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <div style={exerciseStyles.card}>
      <div style={exerciseStyles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={exerciseStyles.badgeIcon}>
            <HelpCircle size={18} color="#00D4FF" />
          </div>
          <div>
            <span style={exerciseStyles.badgeLabel}>DESAFIO DE CONHECIMENTO</span>
            <h3 style={exerciseStyles.quizTitle}>{quiz.question}</h3>
          </div>
        </div>
      </div>

      <div style={exerciseStyles.optionsGrid}>
        {quiz.options.map((option, index) => {
          const isThisSelected = selected === index;
          let buttonBg = '#111827';
          let borderColor = '#1F2937';
          let textColor = '#E5E7EB';

          if (isThisSelected) {
            buttonBg = '#1E293B';
            borderColor = '#00D4FF';
            textColor = '#00D4FF';
          }

          // Se enviou:
          // Se ACERTOU, destaca em verde apenas a opção correta.
          // Se ERROU, destaca em vermelho APENAS a opção incorreta que o aluno marcou (NÃO ENTREGA A RESPOSTA CERTA!)
          if (submitted) {
            if (isCorrect && index === quiz.correctIndex) {
              buttonBg = 'rgba(0, 255, 136, 0.15)';
              borderColor = '#00FF88';
              textColor = '#00FF88';
            } else if (!isCorrect && isThisSelected) {
              buttonBg = 'rgba(255, 75, 75, 0.15)';
              borderColor = '#FF4B4B';
              textColor = '#FF4B4B';
            }
          }

          return (
            <button
              key={index}
              onClick={() => {
                if (!submitted) setSelected(index);
              }}
              disabled={submitted}
              style={{
                ...exerciseStyles.optionButton,
                backgroundColor: buttonBg,
                borderColor,
                color: textColor,
              }}
            >
              <span style={exerciseStyles.optionLetter}>
                {String.fromCharCode(65 + index)}
              </span>
              <span style={{ flex: 1, textAlign: 'left', lineHeight: 1.5 }}>
                {option}
              </span>
              {submitted && isCorrect && index === quiz.correctIndex && (
                <CheckCircle2 size={20} color="#00FF88" />
              )}
              {submitted && !isCorrect && isThisSelected && (
                <XCircle size={20} color="#FF4B4B" />
              )}
            </button>
          );
        })}
      </div>

      <div style={exerciseStyles.footer}>
        {!submitted ? (
          <button
            onClick={handleVerify}
            disabled={selected === null}
            style={{
              ...exerciseStyles.actionButton,
              opacity: selected === null ? 0.5 : 1,
              cursor: selected === null ? 'not-allowed' : 'pointer',
            }}
          >
            <Sparkles size={16} />
            Verificar Resposta
          </button>
        ) : (
          <div style={{ width: '100%' }}>
            {isCorrect ? (
              <div style={exerciseStyles.successBox}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <CheckCircle2 size={20} color="#00FF88" />
                  <strong style={{ color: '#00FF88', fontSize: 15 }}>
                    Resposta Correta! Desafio cumprido!
                  </strong>
                </div>
                <p style={exerciseStyles.explanationText}>{quiz.explanation}</p>
              </div>
            ) : (
              <div style={exerciseStyles.errorBox}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <XCircle size={20} color="#FF4B4B" />
                  <strong style={{ color: '#FF4B4B', fontSize: 15 }}>
                    Resposta Incorreta!
                  </strong>
                </div>
                <p style={exerciseStyles.explanationText}>
                  💡 <strong>Dica da Academia:</strong> Não desanime! Pense na função primária do elemento e revise com atenção os conceitos explicados acima na lição.
                </p>
                <button onClick={handleReset} style={exerciseStyles.retryButton}>
                  <RotateCcw size={14} /> Tentar Novamente
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// COMPONENTE: DESAFIO PRÁTICO COM LIVE PREVIEW (SEM ENTREGAR RESPOSTA)
// ============================================================================
function InteractiveCodeChallenge({
  challenge,
  onComplete,
}: {
  challenge: CodeExercise;
  onComplete: () => void;
}) {
  const [code, setCode] = useState(challenge.initialCode);
  const [validated, setValidated] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setCode(challenge.initialCode);
    setValidated(null);
    setErrorMessage('');
    setShowHint(false);
  }, [challenge]);

  const handleValidate = () => {
    const cleanUserCode = code.trim();
    const normalizedWhitespace = cleanUserCode.replace(/\s+/g, ' ');
    const lowerUserCode = cleanUserCode.toLowerCase();
    const lowerNormalized = normalizedWhitespace.toLowerCase();

    const quoteNormalized = normalizedWhitespace.replace(/'/g, '"');
    const lowerQuoteNormalized = lowerNormalized.replace(/'/g, '"');
    const tagNormalized = lowerQuoteNormalized
      .replace(/<\s+/g, '<')
      .replace(/\s+>/g, '>')
      .replace(/\s*\/\s*>/g, '/>')
      .replace(/\s*=\s*/g, '=');

    const missingKeywords: string[] = [];

    for (const rawKw of challenge.expectedKeywords) {
      const kw = rawKw.trim();
      const kwNormalized = kw.replace(/\s+/g, ' ');
      const lowerKw = kwNormalized.toLowerCase();
      const quoteNormalizedKw = kwNormalized.replace(/'/g, '"');
      const lowerQuoteNormalizedKw = lowerKw.replace(/'/g, '"');
      const tagNormalizedKw = lowerQuoteNormalizedKw
        .replace(/<\s+/g, '<')
        .replace(/\s+>/g, '>')
        .replace(/\s*\/\s*>/g, '/>')
        .replace(/\s*=\s*/g, '=');

      // 1. Verificação exata direta
      if (code.includes(kw) || normalizedWhitespace.includes(kwNormalized)) {
        continue;
      }

      // 2. Verificação com aspas normalizadas (' vs ")
      if (quoteNormalized.includes(quoteNormalizedKw)) {
        continue;
      }

      // 3. Verificação case-insensitive e tags flexíveis
      if (
        lowerUserCode.includes(lowerKw) ||
        lowerNormalized.includes(lowerKw) ||
        tagNormalized.includes(tagNormalizedKw)
      ) {
        continue;
      }

      // 4. Regex flexível para espaçamento interno de tags e textos
      try {
        const escaped = lowerKw
          .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          .replace(/\\\s\+/g, '\\s*')
          .replace(/\\\s/g, '\\s*');
        const regex = new RegExp(escaped, 'i');
        if (regex.test(cleanUserCode)) {
          continue;
        }
      } catch {
        // Fallback silencioso
      }

      missingKeywords.push(kw);
    }

    if (missingKeywords.length === 0) {
      setValidated(true);
      setErrorMessage('');
      onComplete();
    } else {
      setValidated(false);
      const detalhe = missingKeywords.length <= 2
        ? `Verifique se incluiu: ${missingKeywords.map(k => `"${k}"`).join(' e ')}`
        : 'Verifique se todos os elementos, tags ou palavras-chave solicitadas foram incluídos com a grafia correta.';
      setErrorMessage(
        `Ainda falta algo no seu código. ${detalhe}. Revise a sintaxe e consulte a dica se precisar!`
      );
    }
  };

  const handleReset = () => {
    setCode(challenge.initialCode);
    setValidated(null);
    setErrorMessage('');
    setShowHint(false);
  };

  return (
    <div style={exerciseStyles.card}>
      <div style={exerciseStyles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ ...exerciseStyles.badgeIcon, background: 'rgba(139, 92, 246, 0.2)' }}>
            <Terminal size={18} color="#8B5CF6" />
          </div>
          <div>
            <span style={{ ...exerciseStyles.badgeLabel, color: '#8B5CF6' }}>
              LABORATÓRIO DE CÓDIGO AO VIVO
            </span>
            <h3 style={exerciseStyles.quizTitle}>{challenge.instruction}</h3>
          </div>
        </div>
      </div>

      <div style={exerciseStyles.editorPreviewGrid}>
        {/* Editor */}
        <div style={exerciseStyles.pane}>
          <div style={exerciseStyles.paneHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
              <span style={{ fontSize: 12, color: '#9CA3AF', fontFamily: 'monospace', marginLeft: 8 }}>
                editor.html
              </span>
            </div>
            <button onClick={handleReset} style={exerciseStyles.smallButton} title="Restaurar código original">
              <RotateCcw size={13} /> Limpar
            </button>
          </div>

          <textarea
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              if (validated !== null) setValidated(null);
            }}
            placeholder="Digite seu código HTML aqui..."
            spellCheck={false}
            style={exerciseStyles.editorTextarea}
          />
        </div>

        {/* Live Preview */}
        <div style={exerciseStyles.pane}>
          <div style={exerciseStyles.paneHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#00D4FF' }}>
              <Eye size={14} />
              <span style={{ fontSize: 12, fontWeight: 'bold' }}>Pré-visualização (Live Preview)</span>
            </div>
            <span style={{ fontSize: 11, color: '#9CA3AF' }}>Tempo Real</span>
          </div>

          <div style={exerciseStyles.previewContainer}>
            <iframe
              srcDoc={`
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="utf-8">
                    <style>
                      body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                        color: #111827;
                        margin: 16px;
                        line-height: 1.6;
                        background: #ffffff;
                      }
                      h1 { color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; }
                      h2 { color: #1e293b; }
                      a { color: #0284c7; text-decoration: underline; }
                      img { max-width: 100%; height: auto; border-radius: 6px; }
                    </style>
                  </head>
                  <body>${code}</body>
                </html>
              `}
              title="Pré-visualização ao vivo"
              sandbox="allow-scripts"
              style={exerciseStyles.previewIframe}
            />
          </div>
        </div>
      </div>

      <div style={exerciseStyles.footer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', width: '100%', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => setShowHint(!showHint)}
              style={exerciseStyles.secondaryButton}
            >
              <HelpCircle size={15} />
              {showHint ? 'Ocultar Dica' : 'Ver Dica'}
            </button>
          </div>

          <button onClick={handleValidate} style={exerciseStyles.actionButton}>
            <Zap size={16} />
            Validar & Concluir Desafio
          </button>
        </div>

        {showHint && (
          <div style={exerciseStyles.hintBox}>
            💡 <strong>Dica Pedagógica:</strong> {challenge.hint}
          </div>
        )}

        {validated === true && (
          <div style={{ ...exerciseStyles.successBox, marginTop: 12, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={22} color="#00FF88" />
              <div>
                <strong style={{ color: '#00FF88', fontSize: 15 }}>Excelente trabalho! Desafio superado!</strong>
                <p style={{ margin: 0, fontSize: 13, color: '#A7F3D0' }}>
                  Seu código cumpriu todos os critérios da missão com louvor.
                </p>
              </div>
            </div>
          </div>
        )}

        {validated === false && (
          <div style={{ ...exerciseStyles.errorBox, marginTop: 12, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <XCircle size={22} color="#FF4B4B" />
              <div>
                <strong style={{ color: '#FF4B4B', fontSize: 15 }}>Ainda falta algo no seu código.</strong>
                <p style={{ margin: 0, fontSize: 13, color: '#FECACA' }}>{errorMessage}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// COMPONENTE: CAÇA AOS BUGS (BUG HUNT / DEBUGGING DE MISSÃO)
// ============================================================================
function InteractiveBugHunt({
  challenge,
  onComplete,
}: {
  challenge: BugHuntExercise;
  onComplete: () => void;
}) {
  const [code, setCode] = useState(challenge.buggyCode);
  const [validated, setValidated] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setCode(challenge.buggyCode);
    setValidated(null);
    setErrorMessage('');
    setShowHint(false);
  }, [challenge]);

  const handleValidate = () => {
    const cleanUserCode = code.trim();
    const normalizedWhitespace = cleanUserCode.replace(/\s+/g, ' ');
    const lowerUserCode = cleanUserCode.toLowerCase();
    const lowerNormalized = normalizedWhitespace.toLowerCase();

    const quoteNormalized = normalizedWhitespace.replace(/'/g, '"');
    const lowerQuoteNormalized = lowerNormalized.replace(/'/g, '"');
    const tagNormalized = lowerQuoteNormalized
      .replace(/<\s+/g, '<')
      .replace(/\s+>/g, '>')
      .replace(/\s*\/\s*>/g, '/>')
      .replace(/\s*=\s*/g, '=');

    const missingKeywords: string[] = [];

    for (const rawKw of challenge.expectedKeywords) {
      const kw = rawKw.trim();
      const kwNormalized = kw.replace(/\s+/g, ' ');
      const lowerKw = kwNormalized.toLowerCase();
      const quoteNormalizedKw = kwNormalized.replace(/'/g, '"');
      const lowerQuoteNormalizedKw = lowerKw.replace(/'/g, '"');
      const tagNormalizedKw = lowerQuoteNormalizedKw
        .replace(/<\s+/g, '<')
        .replace(/\s+>/g, '>')
        .replace(/\s*\/\s*>/g, '/>')
        .replace(/\s*=\s*/g, '=');

      if (code.includes(kw) || normalizedWhitespace.includes(kwNormalized)) continue;
      if (quoteNormalized.includes(quoteNormalizedKw)) continue;
      if (
        lowerUserCode.includes(lowerKw) ||
        lowerNormalized.includes(lowerKw) ||
        tagNormalized.includes(tagNormalizedKw)
      ) continue;

      try {
        const escaped = lowerKw
          .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          .replace(/\\\s\+/g, '\\s*')
          .replace(/\\\s/g, '\\s*');
        const regex = new RegExp(escaped, 'i');
        if (regex.test(cleanUserCode)) continue;
      } catch {
        // Fallback
      }

      missingKeywords.push(kw);
    }

    const hasForbidden = challenge.forbiddenKeywords?.some((kw) => {
      const kwNorm = kw.replace(/\s+/g, ' ');
      return code.includes(kw) || normalizedWhitespace.includes(kwNorm);
    });

    if (missingKeywords.length === 0 && !hasForbidden) {
      setValidated(true);
      setErrorMessage('');
      onComplete();
    } else {
      setValidated(false);
      setErrorMessage(
        hasForbidden
          ? 'O bug ou trecho incorreto ainda está presente no código! Encontre e remova/corrija a linha falha.'
          : missingKeywords.length <= 2
            ? `A correção ainda não satisfaz todos os critérios. Verifique se incluiu: ${missingKeywords.map(k => `"${k}"`).join(' e ')}.`
            : 'A correção ainda não satisfaz todos os critérios. Revise a sintaxe e consulte a dica!'
      );
    }
  };

  const handleReset = () => {
    setCode(challenge.buggyCode);
    setValidated(null);
    setErrorMessage('');
    setShowHint(false);
  };

  return (
    <div style={exerciseStyles.card}>
      <div style={exerciseStyles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ ...exerciseStyles.badgeIcon, background: 'rgba(239, 68, 68, 0.15)' }}>
            <Bug size={18} color="#EF4444" />
          </div>
          <div>
            <span style={{ ...exerciseStyles.badgeLabel, color: '#EF4444' }}>
              MISSÃO: CAÇA AOS BUGS
            </span>
            <h3 style={exerciseStyles.quizTitle}>{challenge.title}</h3>
          </div>
        </div>
      </div>

      <div
        style={{
          background: 'rgba(239, 68, 68, 0.08)',
          borderLeft: '4px solid #EF4444',
          borderRadius: 8,
          padding: '12px 16px',
          marginBottom: 16,
          fontSize: 14,
          color: '#FECACA',
          lineHeight: 1.5,
        }}
      >
        <strong style={{ display: 'block', color: '#F87171', marginBottom: 4 }}>
          🚨 Chamado de Suporte / Falha Relatada:
        </strong>
        {challenge.scenario}
      </div>

      <div style={exerciseStyles.editorPreviewGrid}>
        <div style={exerciseStyles.pane}>
          <div style={exerciseStyles.paneHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontSize: 12, color: '#9CA3AF', fontFamily: 'monospace', marginLeft: 8 }}>
                depurar_arquivo
              </span>
            </div>
            <button onClick={handleReset} style={exerciseStyles.smallButton} title="Restaurar código com bug">
              <RotateCcw size={13} /> Resetar Bug
            </button>
          </div>

          <textarea
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              if (validated !== null) setValidated(null);
            }}
            placeholder="Corrija o bug no código aqui..."
            spellCheck={false}
            style={exerciseStyles.editorTextarea}
          />
        </div>

        <div style={exerciseStyles.pane}>
          <div style={exerciseStyles.paneHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#EF4444' }}>
              <Eye size={14} />
              <span style={{ fontSize: 12, fontWeight: 'bold' }}>Resultado da Execução</span>
            </div>
            <span style={{ fontSize: 11, color: '#9CA3AF' }}>Tempo Real</span>
          </div>

          <div style={exerciseStyles.previewContainer}>
            <iframe
              srcDoc={`
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="utf-8">
                    <style>
                      body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                        color: #111827;
                        margin: 16px;
                        line-height: 1.6;
                        background: #ffffff;
                      }
                      h1 { color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; }
                      h2 { color: #1e293b; }
                      a { color: #0284c7; text-decoration: underline; }
                      img { max-width: 100%; height: auto; border-radius: 6px; }
                    </style>
                  </head>
                  <body>${code}</body>
                </html>
              `}
              title="Pré-visualização do bug"
              sandbox="allow-scripts"
              style={exerciseStyles.previewIframe}
            />
          </div>
        </div>
      </div>

      <div style={exerciseStyles.footer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', width: '100%', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => setShowHint(!showHint)}
              style={exerciseStyles.secondaryButton}
            >
              <HelpCircle size={15} />
              {showHint ? 'Ocultar Dica' : 'Ver Dica de Depuração'}
            </button>
          </div>

          <button
            onClick={handleValidate}
            style={exerciseStyles.actionButton}
          >
            <Sparkles size={16} />
            Eliminar Bug & Validar
          </button>
        </div>

        {showHint && (
          <div style={exerciseStyles.hintBox}>
            <p style={{ margin: 0 }}>
              💡 <strong>Dica de Depuração:</strong> {challenge.hint}
            </p>
          </div>
        )}

        {validated === true && (
          <div style={{ ...exerciseStyles.successBox, marginTop: 12, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={22} color="#00FF88" />
              <div>
                <strong style={{ color: '#00FF88', fontSize: 15 }}>Bug Neutralizado com Sucesso!</strong>
                <p style={{ margin: 0, fontSize: 13, color: '#A7F3D0' }}>
                  {challenge.solutionExplanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {validated === false && (
          <div style={{ ...exerciseStyles.errorBox, marginTop: 12, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <XCircle size={22} color="#FF4B4B" />
              <div>
                <strong style={{ color: '#FF4B4B', fontSize: 15 }}>Falha na Depuração</strong>
                <p style={{ margin: 0, fontSize: 13, color: '#FECACA' }}>{errorMessage}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// COMPONENTE: PREENCHIMENTO DE LACUNAS (FILL-IN-THE-BLANKS)
// ============================================================================
function InteractiveFillBlank({
  exercise,
  onComplete,
}: {
  exercise: FillBlankExercise;
  onComplete: () => void;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [validated, setValidated] = useState<boolean | null>(null);
  const [activeHintIndex, setActiveHintIndex] = useState<number | null>(null);

  useEffect(() => {
    setAnswers({});
    setValidated(null);
    setActiveHintIndex(null);
  }, [exercise]);

  const handleInputChange = (fieldId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [fieldId]: value }));
    if (validated !== null) setValidated(null);
  };

  const handleValidate = () => {
    const allCorrect = exercise.blanks.every((blank) => {
      const userVal = (answers[blank.id] || '').trim().toLowerCase().replace(/['"]/g, '');
      return blank.expectedValues.some((exp) => {
        const expClean = exp.trim().toLowerCase().replace(/['"]/g, '');
        return expClean === userVal;
      });
    });

    if (allCorrect) {
      setValidated(true);
      onComplete();
    } else {
      setValidated(false);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setValidated(null);
    setActiveHintIndex(null);
  };

  return (
    <div style={exerciseStyles.card}>
      <div style={exerciseStyles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ ...exerciseStyles.badgeIcon, background: 'rgba(236, 72, 153, 0.15)' }}>
            <Code2 size={18} color="#EC4899" />
          </div>
          <div>
            <span style={{ ...exerciseStyles.badgeLabel, color: '#EC4899' }}>
              PREENCHA AS LACUNAS
            </span>
            <h3 style={exerciseStyles.quizTitle}>{exercise.title}</h3>
          </div>
        </div>
      </div>

      <p style={{ color: '#CBD5E1', fontSize: 14.5, marginBottom: 16 }}>
        {exercise.instruction}
      </p>

      <div
        style={{
          background: '#090E1A',
          border: '1px solid #1E293B',
          borderRadius: 10,
          padding: '18px 20px',
          marginBottom: 18,
          fontFamily: 'monospace',
          fontSize: 14,
          color: '#E2E8F0',
          lineHeight: 2.2,
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
        }}
      >
        {(() => {
          const parts: React.ReactNode[] = [];
          let remaining = exercise.codeSnippet;

          exercise.blanks.forEach((blank, idx) => {
            const token = `{{${blank.id}}}`;
            const tokenPos = remaining.indexOf(token);
            if (tokenPos !== -1) {
              const before = remaining.substring(0, tokenPos);
              parts.push(<span key={`text-${idx}`}>{before}</span>);
              parts.push(
                <input
                  key={blank.id}
                  type="text"
                  placeholder={blank.placeholder}
                  value={answers[blank.id] || ''}
                  onChange={(e) => handleInputChange(blank.id, e.target.value)}
                  style={{
                    background: '#1E293B',
                    border: '1px solid #38BDF8',
                    borderRadius: 4,
                    color: '#38BDF8',
                    fontFamily: 'monospace',
                    fontSize: 13,
                    padding: '2px 8px',
                    margin: '0 4px',
                    outline: 'none',
                    minWidth: Math.max(90, (blank.placeholder.length + 3) * 8),
                  }}
                />
              );
              remaining = remaining.substring(tokenPos + token.length);
            }
          });
          parts.push(<span key="text-end">{remaining}</span>);
          return parts;
        })()}
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        {exercise.blanks.map((b, idx) => (
          <button
            key={b.id}
            onClick={() => setActiveHintIndex(activeHintIndex === idx ? null : idx)}
            style={{
              ...exerciseStyles.secondaryButton,
              fontSize: 12,
              padding: '6px 12px',
            }}
          >
            <HelpCircle size={13} />
            Dica [{b.placeholder}]
          </button>
        ))}
      </div>

      {activeHintIndex !== null && exercise.blanks[activeHintIndex] && (
        <div style={{ ...exerciseStyles.hintBox, marginBottom: 16 }}>
          💡 <strong>Dica ({exercise.blanks[activeHintIndex].placeholder}):</strong>{' '}
          {exercise.blanks[activeHintIndex].hint}
        </div>
      )}

      <div style={exerciseStyles.footer}>
        <div style={{ display: 'flex', gap: 10, width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={handleReset} style={exerciseStyles.secondaryButton}>
            <RotateCcw size={14} /> Limpar
          </button>
          <button onClick={handleValidate} style={exerciseStyles.actionButton}>
            <Sparkles size={16} /> Verificar Lacunas
          </button>
        </div>

        {validated === true && (
          <div style={{ ...exerciseStyles.successBox, marginTop: 12, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={22} color="#00FF88" />
              <div>
                <strong style={{ color: '#00FF88', fontSize: 15 }}>Todas as lacunas corretas!</strong>
                <p style={{ margin: 0, fontSize: 13, color: '#A7F3D0' }}>
                  {exercise.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {validated === false && (
          <div style={{ ...exerciseStyles.errorBox, marginTop: 12, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <XCircle size={22} color="#FF4B4B" />
              <div>
                <strong style={{ color: '#FF4B4B', fontSize: 15 }}>Alguma lacuna não está correta</strong>
                <p style={{ margin: 0, fontSize: 13, color: '#FECACA' }}>
                  Revise a sintaxe, consulte as dicas das caixas e tente novamente!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// PÁGINA PRINCIPAL DA LIÇÃO
// ============================================================================
export function Lesson() {
  const navigate = useNavigate();
  const { courseSlug, lessonId } = useParams<{
    courseSlug: string;
    lessonId: string;
  }>();

  const [course, setCourse] = useState<Course | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);
  const [completedExerciseIndexes, setCompletedExerciseIndexes] = useState<Set<number>>(new Set());

  useEffect(() => {
    let cancelled = false;
    setCompletedExerciseIndexes(new Set());

    async function loadCourse() {
      if (!courseSlug) {
        if (!cancelled) {
          setCourse(null);
          setLesson(null);
          setLoading(false);
        }
        return;
      }

      try {
        let selectedCourse: Course | null = null;

        // Prioriza os cursos locais oficiais para garantir que tenham todo o currículo de lições e exercícios
        const localCourse = getCourseBySlug(courseSlug);
        if (localCourse) {
          selectedCourse = {
            id: localCourse.id,
            slug: localCourse.slug,
            name: localCourse.name,
            description: localCourse.description,
            icon: localCourse.icon,
            color: localCourse.color,
            planetName: localCourse.planetName,
            teacherId: '',
            lessons: localCourse.lessons.map((l) => ({
              id: l.id,
              title: l.title,
              description: l.description,
              type: 'pdf',
              content: l.content,
              codeExample: l.codeExample,
              language: l.language,
              duration: l.duration,
              xpReward: l.xpReward,
              exercises: l.exercises,
            })),
          };
        } else if (isSupabaseConfigured) {
          try {
            const rawCourses = await dbGetPublishedCourses();
            for (const item of rawCourses) {
              const possibleSlug =
                typeof item.slug === 'string' && item.slug.trim()
                  ? item.slug
                  : item.id;

              if (possibleSlug === courseSlug) {
                selectedCourse = convertCourse(item.id, item);
                break;
              }
            }
          } catch (dbErr) {
            console.warn('Falha ao buscar cursos do Supabase:', dbErr);
          }
        }

        if (cancelled) return;

        if (!selectedCourse) {
          setCourse(null);
          setLesson(null);
          setLoading(false);
          return;
        }

        const selectedLesson =
          selectedCourse.lessons.find((item) => item.id === lessonId) ||
          selectedCourse.lessons[0] ||
          null;

        setCourse(selectedCourse);
        setLesson(selectedLesson);
      } catch (error) {
        console.error('Erro ao carregar curso:', error);
        if (!cancelled) {
          setCourse(null);
          setLesson(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    setLoading(true);
    loadCourse();

    return () => {
      cancelled = true;
    };
  }, [courseSlug, lessonId]);

  const {
    completeLesson,
    markAsDownloaded,
    isLessonCompleted,
    isLessonDownloaded,
  } = useProgress();

  const completed = lesson?.id ? isLessonCompleted(lesson.id) : false;
  const downloaded = lesson?.id ? isLessonDownloaded(lesson.id) : false;

  const totalExercises = lesson?.exercises?.length || 0;
  // A lição só é considerada concluída se o aluno já concluiu ou se resolveu TODOS os exercícios presentes
  const isLessonDone = completed || (totalExercises > 0 && completedExerciseIndexes.size >= totalExercises);

  const handleExerciseCompleted = (index: number) => {
    setCompletedExerciseIndexes((prev) => {
      const next = new Set(prev);
      next.add(index);
      if (next.size >= totalExercises && lesson?.id && !completed) {
        completeLesson(lesson.id, lesson.xpReward || 0);
      }
      return next;
    });
  };

  if (loading) {
    return <div style={styles.center}>Carregando curso...</div>;
  }

  if (!course || !lesson) {
    return (
      <div style={styles.notFound}>
        <h2>Lição não encontrada</h2>
        <p>O curso ou a aula não foi encontrado.</p>
        <Link to="/galaxy" style={styles.simpleLink}>
          Voltar à Galáxia
        </Link>
      </div>
    );
  }

  const currentIndex = course.lessons.findIndex((item) => item.id === lessonId);
  const previousLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex >= 0 && currentIndex < course.lessons.length - 1
      ? course.lessons[currentIndex + 1]
      : null;

  const courseColor = course.color || '#00D4FF';
  const lessonContent = lesson.content || '';
  const videoUrl = lesson.fileUrl?.trim() || '';
  const youtubeEmbedUrl = getYouTubeEmbedUrl(videoUrl);

  const isSafeUrl = (url: string): boolean => {
    if (!url) return false;
    const trimmed = url.trim().toLowerCase();
    return (
      trimmed.startsWith('https://') ||
      trimmed.startsWith('http://') ||
      trimmed.startsWith('data:application/pdf') ||
      trimmed.startsWith('data:application/msword') ||
      trimmed.startsWith('data:application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    );
  };

  const iframeVideoUrl = youtubeEmbedUrl || (isSafeUrl(videoUrl) ? videoUrl : '');

  const handleDownload = async () => {
    try {
      if (!downloaded) {
        await markAsDownloaded(lesson.id);
      }

      if (!lesson.fileUrl) return;

      if (lesson.type === 'word') {
        downloadDataUrl(lesson.fileUrl, lesson.fileName || 'material.docx');
      } else if (lesson.type === 'pdf') {
        downloadLessonPDF(lesson as any, course as any);
      }
    } catch (error) {
      console.error('Erro ao baixar material:', error);
    }
  };

  const copyCodeExample = () => {
    if (!lesson.codeExample) return;
    navigator.clipboard.writeText(lesson.codeExample);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Helper para escapar entidades HTML em códigos
  const escapeHtml = (str: string): string =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  // Renderizador de Markdown aprimorado com estilos Cyberpunk
  const renderContent = (markdown: string): string => {
    const rawHtml = markdown
      // Callouts / Quotes
      .replace(
        /^>\s*(\*\*💡[^*]+\*\*)\s*\n>([^\n]+)/gim,
        '<div style="background: rgba(0, 212, 255, 0.08); border-left: 4px solid #00D4FF; border-radius: 8px; padding: 14px 18px; margin: 20px 0;"><strong style="color: #00D4FF; display: block; font-size: 15px; margin-bottom: 4px;">$1</strong><span style="color: #E2E8F0; font-size: 14px; line-height: 1.6;">$2</span></div>'
      )
      .replace(
        /^>\s*(\*\*⚠️[^*]+\*\*)\s*\n>([^\n]+)/gim,
        '<div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; border-radius: 8px; padding: 14px 18px; margin: 20px 0;"><strong style="color: #F59E0B; display: block; font-size: 15px; margin-bottom: 4px;">$1</strong><span style="color: #E2E8F0; font-size: 14px; line-height: 1.6;">$2</span></div>'
      )
      .replace(
        /^>\s*(\*\*🛡️[^*]+\*\*)\s*\n>([^\n]+)/gim,
        '<div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8B5CF6; border-radius: 8px; padding: 14px 18px; margin: 20px 0;"><strong style="color: #8B5CF6; display: block; font-size: 15px; margin-bottom: 4px;">$1</strong><span style="color: #E2E8F0; font-size: 14px; line-height: 1.6;">$2</span></div>'
      )
      .replace(
        /^>\s*(\*\*❤️[^*]+\*\*)\s*\n>([^\n]+)/gim,
        '<div style="background: rgba(236, 72, 153, 0.1); border-left: 4px solid #EC4899; border-radius: 8px; padding: 14px 18px; margin: 20px 0;"><strong style="color: #EC4899; display: block; font-size: 15px; margin-bottom: 4px;">$1</strong><span style="color: #E2E8F0; font-size: 14px; line-height: 1.6;">$2</span></div>'
      )
      // Headers
      .replace(
        /^# (.*$)/gim,
        '<h1 style="color: #FFFFFF; font-size: 26px; font-weight: 800; margin: 24px 0 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">$1</h1>'
      )
      .replace(
        /^### (.*$)/gim,
        '<h3 style="color: #00D4FF; font-size: 19px; font-weight: 700; margin: 22px 0 10px;">$1</h3>'
      )
      .replace(
        /^## (.*$)/gim,
        '<h2 style="color: #E2E8F0; font-size: 22px; font-weight: 700; margin: 24px 0 12px;">$1</h2>'
      )
      // Code blocks (escapa tags para que apareçam visivelmente no HTML)
      .replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        (_match, lang, code) =>
          `<div style="background: #090E1A; border: 1px solid #1E293B; border-radius: 8px; margin: 18px 0; overflow: hidden;"><div style="background: #111827; padding: 6px 14px; font-size: 12px; color: #94A3B8; font-family: monospace; border-bottom: 1px solid #1E293B;">Exemplo de Código (${escapeHtml(lang || 'código')})</div><pre style="margin: 0; padding: 16px; overflow-x: auto; font-family: monospace; font-size: 13px; color: #38BDF8; line-height: 1.6;"><code>${escapeHtml(code)}</code></pre></div>`
      )
      // Inline code (escapa tags como <!DOCTYPE html>, <html>, etc.)
      .replace(
        /`([^`]+)`/g,
        (_match, code) =>
          `<code style="background: rgba(0, 212, 255, 0.12); color: #38BDF8; padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.92em;">${escapeHtml(code)}</code>`
      )
      // Bold and italics
      .replace(/\*\*([^*]+)\*\*/g, '<strong style="color: #FFFFFF;">$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em style="color: #CBD5E1;">$1</em>')
      // Horizontal rule
      .replace(/^---$/gim, '<hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 26px 0;" />')
      // Lists (agrupamento de itens de lista contíguos)
      .replace(/^\- (.*$)/gim, '<li style="margin-bottom: 6px; color: #D1D5DB;">$1</li>')
      .replace(/((?:<li[\s\S]*?<\/li>\s*)+)/g, '<ul style="padding-left: 20px; margin: 14px 0;">$1</ul>')
      // Paragraphs
      .split('\n\n')
      .map((block) => {
        if (
          block.startsWith('<h') ||
          block.startsWith('<div') ||
          block.startsWith('<ul') ||
          block.startsWith('<hr')
        ) {
          return block;
        }
        return `<p style="margin: 12px 0; color: #CBD5E1; font-size: 15px; line-height: 1.75;">${block.replace(/\n/g, '<br>')}</p>`;
      })
      .join('\n');

    return DOMPurify.sanitize(rawHtml, {
      ALLOWED_TAGS: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong', 'em', 'code', 'pre',
        'div', 'span', 'ul', 'ol', 'li', 'hr', 'br', 'blockquote',
        'table', 'thead', 'tbody', 'tr', 'th', 'td', 'a'
      ],
      ALLOWED_ATTR: ['style', 'class', 'href', 'target', 'rel'],
    });
  };

  return (
    <div style={{ ...styles.page, maxWidth: 940 }}>
      {/* Barra superior de navegação */}
      <div style={styles.topBar}>
        <Link to="/galaxy" style={styles.simpleLink}>
          <ArrowLeft size={16} /> Voltar à Galáxia
        </Link>
        <span style={{ color: courseColor, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>{course.icon}</span> {course.name}
        </span>
      </div>

      {/* Hero da Aula */}
      <div
        style={{
          ...styles.hero,
          borderColor: isLessonDone ? '#00FF88' : courseColor,
          boxShadow: isLessonDone ? '0 0 30px rgba(0, 255, 136, 0.25)' : `0 0 30px ${courseColor}30`,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
          <div>
            <p style={{ ...styles.eyebrow, color: courseColor }}>
              {course.planetName} • Lição {currentIndex + 1} de {course.lessons.length}
            </p>
            <h1 style={styles.title}>{lesson.title}</h1>
            <p style={styles.description}>{lesson.description}</p>
          </div>
        </div>

        <div style={styles.meta}>
          {lesson.duration !== undefined && <span>⏱ {lesson.duration} min</span>}
          <span style={{ color: '#FFD700', fontWeight: 'bold' }}>
            ⚡ +{lesson.xpReward || 0} XP
          </span>
          {lesson.language && <span>💻 {lesson.language}</span>}
          <span>
            {lesson.type === 'pdf' && '📄 PDF'}
            {lesson.type === 'word' && '📝 WORD'}
            {lesson.type === 'video' && '🎥 Vídeo'}
            {lesson.type === 'quiz' && '🧠 Quiz'}
          </span>
        </div>

        {/* Status de Conclusão: Não pode ser marcado livremente sem fazer os exercícios */}
        <div style={styles.actions}>
          {isLessonDone ? (
            <div style={exerciseStyles.completedHeroBadge}>
              <CheckCircle2 size={18} color="#000000" />
              <span>✓ LIÇÃO CONCLUÍDA (+{lesson.xpReward || 0} XP)</span>
            </div>
          ) : totalExercises > 0 ? (
            <div style={exerciseStyles.lockedHeroBadge}>
              <Lock size={16} color="#F59E0B" />
              <span>
                BLOQUEADA: Resolva os desafios práticos abaixo ({completedExerciseIndexes.size}/{totalExercises} concluídos)
              </span>
            </div>
          ) : (
            <div style={exerciseStyles.lockedHeroBadge}>
              <CheckCircle2 size={16} color="#00D4FF" />
              <span>Leia o conteúdo para absorver os conceitos</span>
            </div>
          )}

          {(lesson.type === 'pdf' || lesson.type === 'word') && lesson.fileUrl && (
            <button onClick={handleDownload} style={styles.downloadButton}>
              {downloaded
                ? lesson.type === 'word'
                  ? '📝 Baixado - Baixar Word novamente'
                  : '📄 Baixado - Gerar PDF novamente'
                : lesson.type === 'word'
                  ? '📝 Baixar Word'
                  : '📄 Baixar PDF'}
            </button>
          )}
        </div>
      </div>

      {/* Material em Vídeo (se houver) */}
      {lesson.type === 'video' && lesson.fileUrl && (
        <div style={styles.materialCard}>
          <h2>🎥 Vídeo da aula</h2>
          <div style={styles.videoWrapper}>
            {iframeVideoUrl ? (
              <iframe
                src={iframeVideoUrl}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={styles.videoFrame}
              />
            ) : null}
          </div>
          {!youtubeEmbedUrl && isSafeUrl(lesson.fileUrl || '') && (
            <a
              href={lesson.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.simpleLink, display: 'inline-block', marginTop: 12 }}
            >
              ▶️ Abrir vídeo em outra aba
            </a>
          )}
        </div>
      )}

      {/* Conteúdo Pedagógico da Lição */}
      {lessonContent && lesson.type !== 'word' && (
        <div
          style={styles.content}
          dangerouslySetInnerHTML={{ __html: renderContent(lessonContent) }}
        />
      )}

      {/* Bloco de Código Exemplo */}
      {lesson.codeExample && (
        <div style={styles.codeCard}>
          <div style={styles.codeHeader}>
            <span style={styles.codeLanguage}>exemplo.{lesson.language || 'html'}</span>
            <button onClick={copyCodeExample} style={styles.copyButton}>
              {copiedCode ? <Check size={14} color="#00FF88" /> : <Copy size={14} />}
              {copiedCode ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
          <pre style={styles.code}>
            <code>{lesson.codeExample}</code>
          </pre>
        </div>
      )}

      {/* SEÇÃO DE EXERCÍCIOS & DESAFIOS INTERATIVOS */}
      {lesson.exercises && lesson.exercises.length > 0 && (
        <div style={{ marginTop: 35, marginBottom: 35 }}>
          <div style={exerciseStyles.sectionTitleContainer}>
            <div style={exerciseStyles.sectionTitleIcon}>
              <Award size={22} color="#00D4FF" />
            </div>
            <div>
              <h2 style={exerciseStyles.sectionTitle}>🎯 Desafios Práticos da Lição</h2>
              <p style={exerciseStyles.sectionSubtitle}>
                Você precisa resolver os desafios abaixo para validar seu aprendizado e desbloquear a conclusão desta aula!
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {lesson.exercises.map((exercise, index) => {
              const uniqueExerciseKey = `${lesson.id}-exercise-${index}`;

              if (exercise.type === 'quiz') {
                return (
                  <InteractiveQuiz
                    key={uniqueExerciseKey}
                    quiz={exercise}
                    onComplete={() => handleExerciseCompleted(index)}
                  />
                );
              }

              if (exercise.type === 'code') {
                return (
                  <InteractiveCodeChallenge
                    key={uniqueExerciseKey}
                    challenge={exercise}
                    onComplete={() => handleExerciseCompleted(index)}
                  />
                );
              }

              if (exercise.type === 'bughunt') {
                return (
                  <InteractiveBugHunt
                    key={uniqueExerciseKey}
                    challenge={exercise}
                    onComplete={() => handleExerciseCompleted(index)}
                  />
                );
              }

              if (exercise.type === 'fillblank') {
                return (
                  <InteractiveFillBlank
                    key={uniqueExerciseKey}
                    exercise={exercise}
                    onComplete={() => handleExerciseCompleted(index)}
                  />
                );
              }

              return null;
            })}
          </div>
        </div>
      )}

      {/* Navegação entre Aulas */}
      <div style={styles.navigation}>
        {previousLesson ? (
          <Link
            to={`/lesson/${course.slug}/${previousLesson.id}`}
            style={styles.navButton}
          >
            <ArrowLeft size={16} /> Anterior: {previousLesson.title}
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <button
            onClick={() => {
              if (!isLessonDone && totalExercises > 0) {
                alert(
                  `⚠️ Atenção Cadete!\n\nVocê precisa resolver todos os ${totalExercises} desafios práticos desta aula (${completedExerciseIndexes.size}/${totalExercises} concluídos) para desbloquear a próxima etapa.`
                );
                return;
              }
              navigate(`/lesson/${course.slug}/${nextLesson.id}`);
            }}
            style={{
              ...styles.navButton,
              background: isLessonDone ? courseColor : '#1E293B',
              color: isLessonDone ? '#000000' : '#94A3B8',
              fontWeight: 'bold',
              cursor: isLessonDone ? 'pointer' : 'not-allowed',
              opacity: isLessonDone ? 1 : 0.6,
            }}
          >
            {!isLessonDone && totalExercises > 0 && <Lock size={15} style={{ marginRight: 4 }} />}
            Próxima Aula: {nextLesson.title} <ArrowRight size={16} />
          </button>
        ) : (
          <button
            onClick={() => {
              if (!isLessonDone && totalExercises > 0) {
                alert(
                  `⚠️ Conclua todos os desafios práticos desta aula antes de finalizar o curso!`
                );
                return;
              }
              navigate('/galaxy');
            }}
            style={{
              ...styles.navButton,
              background: isLessonDone ? '#FFD700' : '#1E293B',
              color: isLessonDone ? '#000000' : '#94A3B8',
              fontWeight: 'bold',
            }}
          >
            🎉 Finalizar Curso na Galáxia
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// ESTILOS GERAIS DA PÁGINA
// ============================================================================
const styles: Record<string, React.CSSProperties> = {
  page: {
    padding: '24px 20px',
    color: 'white',
    fontFamily: 'Inter, sans-serif',
    margin: '0 auto',
    minHeight: '100vh',
  },
  center: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
  },
  notFound: {
    padding: 40,
    color: 'white',
    textAlign: 'center',
  },
  simpleLink: {
    color: '#00D4FF',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 14,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 15,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  hero: {
    background: '#0B1120',
    border: '1px solid',
    borderRadius: 14,
    padding: '28px 32px',
    marginBottom: 24,
  },
  eyebrow: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  title: {
    fontSize: 30,
    fontWeight: 900,
    marginTop: 4,
    marginBottom: 8,
    color: '#FFFFFF',
    fontFamily: 'Orbitron, sans-serif',
  },
  description: {
    fontSize: 15,
    color: '#94A3B8',
    lineHeight: 1.6,
    maxWidth: 720,
  },
  meta: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    marginTop: 18,
    fontSize: 13,
    color: '#94A3B8',
  },
  actions: {
    display: 'flex',
    gap: 12,
    marginTop: 22,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  completeButton: {
    padding: '10px 20px',
    borderRadius: 8,
    border: 'none',
    fontWeight: 'bold',
    fontSize: 14,
    cursor: 'pointer',
    transition: 'transform 0.15s ease',
  },
  downloadButton: {
    padding: '10px 20px',
    borderRadius: 8,
    background: '#1E293B',
    color: 'white',
    border: '1px solid #334155',
    fontWeight: 'bold',
    fontSize: 14,
    cursor: 'pointer',
  },
  content: {
    background: '#0B1120',
    border: '1px solid #1E293B',
    borderRadius: 14,
    padding: '32px 36px',
    marginBottom: 24,
    lineHeight: 1.8,
  },
  codeCard: {
    background: '#090E1A',
    border: '1px solid #1E293B',
    borderLeft: '4px solid #00D4FF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  codeHeader: {
    background: '#111827',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #1E293B',
  },
  codeLanguage: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#9CA3AF',
  },
  copyButton: {
    background: 'transparent',
    border: '1px solid #334155',
    color: '#CBD5E1',
    borderRadius: 6,
    padding: '4px 10px',
    fontSize: 12,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  code: {
    padding: 20,
    margin: 0,
    overflow: 'auto',
    fontSize: 13.5,
    color: '#38BDF8',
    fontFamily: 'JetBrains Mono, monospace',
    lineHeight: 1.6,
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 40,
    marginBottom: 50,
    flexWrap: 'wrap',
  },
  navButton: {
    padding: '12px 22px',
    background: '#1E293B',
    color: 'white',
    borderRadius: 8,
    textDecoration: 'none',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    border: '1px solid #334155',
  },
  materialCard: {
    background: '#0B1120',
    border: '1px solid #1E293B',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
    overflow: 'hidden',
    borderRadius: 8,
    marginTop: 12,
  },
  videoFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

// ============================================================================
// ESTILOS ESPECÍFICOS DOS EXERCÍCIOS
// ============================================================================
const exerciseStyles: Record<string, React.CSSProperties> = {
  completedHeroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 18px',
    borderRadius: 8,
    background: '#00FF88',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 13.5,
    boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)',
  },
  lockedHeroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 18px',
    borderRadius: 8,
    background: 'rgba(245, 158, 11, 0.12)',
    border: '1px solid rgba(245, 158, 11, 0.4)',
    color: '#FBBF24',
    fontWeight: 'bold',
    fontSize: 13,
  },
  sectionTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginBottom: 20,
  },
  sectionTitleIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    background: 'rgba(0, 212, 255, 0.12)',
    border: '1px solid rgba(0, 212, 255, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 800,
    color: '#FFFFFF',
    margin: 0,
    fontFamily: 'Orbitron, sans-serif',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#94A3B8',
    margin: '4px 0 0',
  },
  card: {
    background: '#0B1120',
    border: '1px solid #1E293B',
    borderRadius: 14,
    padding: '24px 28px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
  },
  header: {
    marginBottom: 18,
  },
  badgeIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: 'rgba(0, 212, 255, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#00D4FF',
    textTransform: 'uppercase',
  },
  quizTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: '#FFFFFF',
    marginTop: 4,
    margin: 0,
    lineHeight: 1.5,
  },
  optionsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginBottom: 20,
  },
  optionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '14px 18px',
    borderRadius: 10,
    border: '1px solid',
    fontSize: 14.5,
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  },
  optionLetter: {
    width: 28,
    height: 28,
    borderRadius: 6,
    background: 'rgba(255, 255, 255, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
  },
  actionButton: {
    background: 'linear-gradient(135deg, #00D4FF, #0284C7)',
    color: '#000000',
    border: 'none',
    borderRadius: 8,
    padding: '11px 22px',
    fontWeight: 'bold',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
  },
  secondaryButton: {
    background: '#1E293B',
    color: '#E2E8F0',
    border: '1px solid #334155',
    borderRadius: 8,
    padding: '9px 16px',
    fontSize: 13,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    cursor: 'pointer',
  },
  retryButton: {
    background: 'transparent',
    color: '#FF4B4B',
    border: '1px solid #FF4B4B',
    borderRadius: 6,
    padding: '6px 14px',
    fontSize: 12,
    fontWeight: 'bold',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
    cursor: 'pointer',
  },
  successBox: {
    background: 'rgba(0, 255, 136, 0.1)',
    border: '1px solid #00FF88',
    borderRadius: 10,
    padding: '14px 18px',
    width: '100%',
    boxSizing: 'border-box',
  },
  errorBox: {
    background: 'rgba(255, 75, 75, 0.1)',
    border: '1px solid #FF4B4B',
    borderRadius: 10,
    padding: '14px 18px',
    width: '100%',
    boxSizing: 'border-box',
  },
  explanationText: {
    fontSize: 13.5,
    color: '#E2E8F0',
    margin: 0,
    lineHeight: 1.6,
  },
  editorPreviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 16,
    marginBottom: 18,
  },
  pane: {
    background: '#090E1A',
    border: '1px solid #1E293B',
    borderRadius: 10,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  paneHeader: {
    background: '#111827',
    padding: '8px 14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #1E293B',
  },
  smallButton: {
    background: 'transparent',
    border: 'none',
    color: '#9CA3AF',
    fontSize: 12,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  editorTextarea: {
    background: '#090E1A',
    color: '#38BDF8',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 13.5,
    lineHeight: 1.6,
    padding: 16,
    border: 'none',
    outline: 'none',
    resize: 'vertical',
    minHeight: 180,
    width: '100%',
    boxSizing: 'border-box',
  },
  previewContainer: {
    background: '#FFFFFF',
    flex: 1,
    minHeight: 180,
  },
  previewIframe: {
    width: '100%',
    height: '100%',
    minHeight: 180,
    border: 'none',
  },
  hintBox: {
    background: 'rgba(255, 215, 0, 0.08)',
    border: '1px solid rgba(255, 215, 0, 0.3)',
    borderRadius: 8,
    padding: '12px 16px',
    fontSize: 13.5,
    color: '#FEF08A',
    width: '100%',
    boxSizing: 'border-box',
  },
};
