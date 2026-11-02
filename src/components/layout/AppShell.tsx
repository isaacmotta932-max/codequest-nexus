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
      {/* Mobile Top Header */}
      <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-white/10 bg-[#0A1020]/95 px-4 backdrop-blur-xl md:hidden">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          aria-label="Abrir menu lateral"
          title="Abrir menu"
        >
          <Menu size={22} />
        </button>

        <Link to="/dashboard" className="flex items-center gap-2 no-underline">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_10px_rgba(0,212,255,0.4)]">
            <Zap size={15} color="white" fill="white" />
          </div>
          <span className="font-bold text-sm tracking-wider text-white">CODEQUEST</span>
        </Link>

        {user ? (
          <Link
            to="/profile"
            className="flex items-center justify-center p-0.5 rounded-full border border-[#00D4FF]/40 hover:border-[#00D4FF] transition-all"
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
          <div className="w-8" />
        )}
      </header>

      {/* Slide-out Sidebar for mobile & Fixed Sidebar for desktop */}
      <Sidebar />

      {/* Main Content Area: Full width on mobile, offset on desktop */}
      <main className="min-h-screen w-full transition-all duration-300 md:ml-[260px] md:w-[calc(100%-260px)] pb-24 md:pb-6 overflow-x-hidden">
        <Outlet />
      </main>

      {/* Quick thumb navigation at the bottom on mobile */}
      <BottomNav />
    </div>
  );
}
