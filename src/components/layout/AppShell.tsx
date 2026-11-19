import { Outlet, Link } from 'react-router-dom';
import { Menu, Zap } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { BottomNav } from './BottomNav';
import { useUIStore } from '@/stores/useUIStore';
import { useAuthStore } from '@/stores/useAuthStore';

export function AppShell() {
  const { toggleSidebar } = useUIStore();
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col md:flex-row antialiased overflow-x-hidden">
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
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_12px_rgba(0,212,255,0.45)]">
            <Zap size={15} color="white" fill="white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[13px] tracking-wider text-white">CODEQUEST</span>
            <span className="text-[9px] font-semibold tracking-[0.22em] text-[#00D4FF]">NEXUS</span>
          </div>
        </Link>

        {user ? (
          <Link
            to="/profile"
            className="ios-press flex items-center justify-center p-0.5 rounded-full border border-[#00D4FF]/40 hover:border-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all"
            title="Meu Perfil"
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
