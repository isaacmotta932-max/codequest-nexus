import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
}

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const astronautRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];

    const starColors = ['#FFFFFF', '#E2E8F0', '#BAE6FD', '#DDD6FE'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      const count = Math.min(95, Math.floor((window.innerWidth * window.innerHeight) / 16000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.4 + 0.4,
        baseAlpha: Math.random() * 0.45 + 0.12,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      }));
    };

    // Estado do astronauta flutuante (viagem em linha reta rebatendo nos cantos/bordas)
    const ASTRO_SIZE = 96;
    let ax = Math.max(40, Math.random() * Math.max(100, window.innerWidth - ASTRO_SIZE - 80));
    let ay = Math.max(80, Math.random() * Math.max(100, window.innerHeight - ASTRO_SIZE - 80));
    let vx = (Math.random() > 0.5 ? 1 : -1) * 0.72;
    let vy = (Math.random() > 0.5 ? 1 : -1) * 0.56;
    let angle = Math.random() * 360;
    let vAngle = 0.16;

    let tick = 0;

    const animate = () => {
      tick += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenha estrelas sutis cintilando
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const alpha = s.baseAlpha + Math.sin(tick * s.twinkleSpeed + s.phase) * 0.16;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0.04, Math.min(0.75, alpha));
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Atualiza física do astronauta em linha reta
      const maxX = Math.max(0, window.innerWidth - ASTRO_SIZE);
      const maxY = Math.max(0, window.innerHeight - ASTRO_SIZE);

      ax += vx;
      ay += vy;
      angle += vAngle;

      if (ax <= 0) {
        ax = 0;
        vx = Math.abs(vx);
        vAngle = (vAngle >= 0 ? -1 : 1) * (0.14 + Math.random() * 0.14);
      } else if (ax >= maxX) {
        ax = maxX;
        vx = -Math.abs(vx);
        vAngle = (vAngle >= 0 ? -1 : 1) * (0.14 + Math.random() * 0.14);
      }

      if (ay <= 0) {
        ay = 0;
        vy = Math.abs(vy);
        vAngle = (vAngle >= 0 ? -1 : 1) * (0.14 + Math.random() * 0.14);
      } else if (ay >= maxY) {
        ay = maxY;
        vy = -Math.abs(vy);
        vAngle = (vAngle >= 0 ? -1 : 1) * (0.14 + Math.random() * 0.14);
      }

      if (astronautRef.current) {
        astronautRef.current.style.transform = `translate3d(${ax.toFixed(2)}px, ${ay.toFixed(2)}px, 0) rotate(${angle.toFixed(2)}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    initStars();
    animate();

    const handleResize = () => {
      resize();
      initStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Nebulosas cósmicas muito sutis */}
      <div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-[0.09] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #38BDF8 0%, #6366F1 50%, transparent 75%)',
        }}
      />
      <div
        className="absolute top-[38%] -right-40 h-[560px] w-[560px] rounded-full opacity-[0.08] blur-[150px]"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, #1E1B4B 55%, transparent 78%)',
        }}
      />
      <div
        className="absolute -bottom-36 left-[25%] h-[460px] w-[460px] rounded-full opacity-[0.06] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #0EA5E9 0%, #312E81 55%, transparent 78%)',
        }}
      />

      {/* Campo de estrelas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Astronauta flutuando em segundo plano (rebatendo nas bordas da tela) */}
      <div
        ref={astronautRef}
        className="absolute top-0 left-0 will-change-transform opacity-60"
        style={{ width: 96, height: 96 }}
      >
        <svg
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-[0_0_18px_rgba(56,189,248,0.22)]"
        >
          <defs>
            {/* Gradiente do traje espacial 3D */}
            <linearGradient id="astroSuit" x1="35" y1="25" x2="105" y2="115" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="55%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Gradiente de sombra suave para partes traseiras */}
            <linearGradient id="astroShade" x1="30" y1="45" x2="90" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            {/* Gradiente do capacete */}
            <radialGradient id="astroHelmet" cx="42%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </radialGradient>

            {/* Visor espacial com reflexo cósmico */}
            <linearGradient id="astroVisor" x1="48" y1="26" x2="92" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="32%" stopColor="#1E3A8A" />
              <stop offset="72%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>

            {/* Gradiente da mochila PLSS */}
            <linearGradient id="astroPack" x1="32" y1="54" x2="54" y2="92" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            {/* Gradiente das botas e luvas */}
            <linearGradient id="astroAccent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
          </defs>

          {/* Cabo/cordão umbilical flutuando levemente */}
          <path
            d="M36 78 C16 82, 10 66, 18 54 C24 44, 14 34, 8 38"
            stroke="#64748B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 2"
            opacity="0.65"
          />

          {/* Mochila de suporte de vida (PLSS) */}
          <rect
            x="34"
            y="54"
            width="20"
            height="36"
            rx="6"
            fill="url(#astroPack)"
            stroke="#CBD5E1"
            strokeWidth="1.2"
          />
          <line x1="39" y1="62" x2="46" y2="62" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />
          <line x1="39" y1="67" x2="45" y2="67" stroke="#94A3B8" strokeWidth="1.4" strokeLinecap="round" />

          {/* Antena da mochila */}
          <line x1="41" y1="54" x2="36" y2="34" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="35.5" cy="33" r="2.6" fill="#38BDF8" />
          <circle cx="35.5" cy="33" r="5" fill="#38BDF8" opacity="0.22" />

          {/* Braço esquerdo (atrás/estendido em gravidade zero) */}
          <path
            d="M52 63 C38 58, 28 49, 26 39"
            stroke="url(#astroShade)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Anel do punho esquerdo */}
          <path d="M24 43 L31 40" stroke="#00D4FF" strokeWidth="2.2" strokeLinecap="round" />
          {/* Luva esquerda */}
          <circle cx="25" cy="36" r="5.8" fill="url(#astroAccent)" stroke="#94A3B8" strokeWidth="1.2" />

          {/* Perna esquerda (levemente dobrada flutuando) */}
          <path
            d="M60 92 C56 104, 48 112, 49 120"
            stroke="url(#astroShade)"
            strokeWidth="13"
            strokeLinecap="round"
          />
          {/* Detalhe do joelho esquerdo */}
          <path d="M51 106 L58 109" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />
          {/* Bota esquerda */}
          <path
            d="M42 119 C42 115, 52 114, 55 119 L56 125 C56 127, 43 128, 41 124 Z"
            fill="url(#astroAccent)"
            stroke="#94A3B8"
            strokeWidth="1.2"
          />
          <path d="M42 124 L55 124.5" stroke="#00D4FF" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />

          {/* Perna direita (flutuando para frente) */}
          <path
            d="M78 92 C83 103, 91 108, 94 117"
            stroke="url(#astroSuit)"
            strokeWidth="13.5"
            strokeLinecap="round"
          />
          {/* Detalhe do joelho direito */}
          <path d="M81 104 L88 101" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
          {/* Bota direita */}
          <path
            d="M87 116 C90 112, 100 113, 102 118 L101 124 C100 126, 88 125, 86 121 Z"
            fill="url(#astroAccent)"
            stroke="#CBD5E1"
            strokeWidth="1.2"
          />
          <path d="M87 121 L100 122.5" stroke="#00D4FF" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />

          {/* Tronco / Traje Principal */}
          <rect
            x="49"
            y="55"
            width="38"
            height="42"
            rx="14"
            fill="url(#astroSuit)"
            stroke="#CBD5E1"
            strokeWidth="1.2"
          />

          {/* Cinto técnico */}
          <rect x="49" y="84" width="38" height="6" rx="2.5" fill="#334155" />
          <rect x="64" y="83" width="8" height="8" rx="2" fill="#94A3B8" stroke="#1E293B" strokeWidth="1" />

          {/* Módulo de controle no peito (DCM) */}
          <rect
            x="57"
            y="64"
            width="22"
            height="14"
            rx="3.5"
            fill="#1E293B"
            stroke="#64748B"
            strokeWidth="1.2"
          />
          {/* LEDs e botões do peito */}
          <rect x="60.5" y="67.5" width="7" height="3.2" rx="1" fill="#00D4FF" opacity="0.9" />
          <circle cx="72" cy="69" r="1.7" fill="#A78BFA" />
          <circle cx="75.5" cy="69" r="1.4" fill="#34D399" />
          <line x1="60.5" y1="74" x2="75.5" y2="74" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />

          {/* Braço direito (flutuando para frente) */}
          <path
            d="M85 63 C99 61, 108 68, 108 79"
            stroke="url(#astroSuit)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Anel do punho direito */}
          <path d="M103 77 L111 77" stroke="#00D4FF" strokeWidth="2.2" strokeLinecap="round" />
          {/* Luva direita */}
          <circle cx="107.5" cy="83" r="5.8" fill="url(#astroAccent)" stroke="#CBD5E1" strokeWidth="1.2" />

          {/* Anel do colarinho (pescoço) */}
          <ellipse cx="68" cy="56" rx="14" ry="4" fill="#475569" stroke="#94A3B8" strokeWidth="1.2" />

          {/* Capacete */}
          <circle
            cx="68"
            cy="39"
            r="22"
            fill="url(#astroHelmet)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Detalhe lateral do capacete (fone/trava) */}
          <rect x="44" y="34" width="4.5" height="10" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1" />
          <rect x="87.5" y="34" width="4.5" height="10" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1" />

          {/* Visor Espacial Curvo */}
          <path
            d="M52 36 C52 27.5, 59 24, 69 24 C79 24, 86 27.5, 86 36 C86 45, 79.5 50.5, 69 50.5 C58.5 50.5, 52 45, 52 36 Z"
            fill="url(#astroVisor)"
            stroke="#38BDF8"
            strokeWidth="1.4"
          />

          {/* Reflexo principal de vidro no visor */}
          <path
            d="M57 32 C60 27.5, 68 26.5, 74 28.5"
            stroke="#E0F2FE"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Reflexo secundário + brilho estelar no visor */}
          <circle cx="78.5" cy="31.5" r="1.6" fill="#FFFFFF" opacity="0.85" />
          <path
            d="M58 43 C63 46.5, 73 47, 79 44"
            stroke="#8B5CF6"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </div>
    </div>
  );
}
