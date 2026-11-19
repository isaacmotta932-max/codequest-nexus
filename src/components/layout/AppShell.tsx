import { useLayoutEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, Zap } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { BottomNav } from './BottomNav';
import { useUIStore } from '@/stores/useUIStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { getAvatarByUrlOrId, applyAvatarThemeToDOM } from '@/constants/pixelAvatars';

export function AppShell() {
  const { toggleSidebar } = useUIStore();
  const { user } = useAuthStore();

  const activeAvatar = getAvatarByUrlOrId(user?.avatarUrl);
  const { primary, secondary, bgTint, glowRgb } = activeAvatar.themePalette;

  // Aplica sincronamente antes da pintura do navegador (zero atraso visual)
  useLayoutEffect(() => {
    applyAvatarThemeToDOM(user?.avatarUrl);
  }, [user?.avatarUrl]);

  return (
    <div
      className="relative min-h-screen text-white flex flex-col md:flex-row antialiased overflow-x-hidden transition-colors duration-150"
      style={{
        backgroundColor: bgTint,
        backgroundImage: `radial-gradient(circle at 85% 0%, rgba(${glowRgb}, 0.11) 0%, transparent 45%), radial-gradient(circle at 10% 90%, rgba(${glowRgb}, 0.06) 0%, transparent 50%)`,
      }}
    >
      {/* iOS Native Top Navigation Bar (Mobile only) */}
      <header className="ios-header sticky top-0 z-30 flex min-h-[54px] w-full items-center justify-between px-4 md:hidden">
        <button
          onClick={toggleSidebar}
          className="ios-press flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] border border-white/10 text-gray-200 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          aria-label="Abrir menu lateral"
          title="Abrir menu"
        >
          <Menu size={20} strokeWidth={2.2} />
        </button>

        <Link to="/dashboard" className="ios-press flex items-center gap-2 no-underline">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${primary}, ${secondary})`,
              boxShadow: `0 0 12px rgba(${glowRgb}, 0.45)`,
            }}
          >
            <Zap size={15} color="white" fill="white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[13px] tracking-wider text-white">CODEQUEST</span>
            <span
              className="text-[9px] font-semibold tracking-[0.22em] transition-colors duration-300"
              style={{ color: primary }}
            >
              NEXUS
            </span>
          </div>
        </Link>

        {user ? (
          <Link
            to="/profile"
            className="ios-press flex items-center justify-center p-0.5 rounded-full border transition-all duration-300"
            style={{
              borderColor: `rgba(${glowRgb}, 0.55)`,
              boxShadow: `0 0 10px rgba(${glowRgb}, 0.25)`,
            }}
            title={`Meu Perfil • Tema: ${activeAvatar.name}`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#0B1220] flex items-center justify-center text-xs font-bold text-white">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.username}
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'pixelated' }}
                />
              ) : (
                (user.username?.[0] || 'U').toUpperCase()
              )}
            </div>
          </Link>
        ) : (
          <div className="w-10" />
        )}
      </header>

      {/* Slide-out Sidebar for mobile & Fixed Sidebar for desktop */}
      <Sidebar />

      {/* Main Content Area: Full width on mobile, offset on desktop */}
      <main className="min-h-screen w-full max-w-[100vw] transition-all duration-300 md:ml-[260px] md:w-[calc(100%-260px)] pb-28 md:pb-8 overflow-x-hidden">
        <Outlet />
      </main>

      {/* Quick thumb navigation at the bottom on mobile */}
      <BottomNav />
    </div>
  );
}
