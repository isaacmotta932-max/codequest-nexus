import { NavLink } from 'react-router-dom';
import {
  Home,
  Globe,
  Target,
  Award,
  User,
  Settings,
  MessageCircle,
  Zap,
  X,
} from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUIStore } from '@/stores/useUIStore';

export function Sidebar() {
  const { user } = useAuthStore();
  const { sidebarOpen, closeSidebar } = useUIStore();

  const items = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/galaxy', icon: Globe, label: 'Galáxia' },
    { to: '/missions', icon: Target, label: 'Missões' },
    { to: '/achievements', icon: Award, label: 'Conquistas' },
    { to: '/profile', icon: User, label: 'Perfil' },
    { to: '/settings', icon: Settings, label: 'Ajustes' },
    { to: '/feedback', icon: MessageCircle, label: 'Feedback' },
  ];

  return (
    <>
      {/* Backdrop overlay on mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[260px] max-w-[85vw] bg-[#0A1020] border-r border-[#1F2937] p-5 text-white flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Header with Brand Logo & Mobile Close (X) button */}
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_12px_rgba(0,212,255,0.4)]">
                <Zap size={20} color="white" fill="white" />
              </div>

              <div>
                <h1 className="text-sm font-bold tracking-wider leading-none m-0 text-white">
                  CODEQUEST
                </h1>
                <p className="text-[10px] text-[#00D4FF] tracking-[2px] font-semibold leading-none mt-1">
                  NEXUS
                </p>
              </div>
            </div>

            {/* Minimize / Close button on mobile */}
            <button
              onClick={closeSidebar}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Minimizar menu lateral"
              aria-label="Minimizar menu lateral"
            >
              <X size={20} />
            </button>
          </div>

          {/* User profile card (clicks close sidebar on mobile) */}
          {user && (
            <NavLink
              to="/profile"
              onClick={closeSidebar}
              className="block no-underline text-inherit p-3.5 bg-[#111827] rounded-xl mb-5 text-center border border-[#00D4FF]/20 hover:border-[#00D4FF]/60 hover:scale-[1.02] transition-all cursor-pointer shadow-lg"
              title="Ver perfil e alterar avatar pixel art"
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-2 flex items-center justify-center text-lg font-bold overflow-hidden border-2 border-[#00D4FF]/50 shadow-[0_0_15px_rgba(0,212,255,0.25)]"
                style={{
                  background: user.avatarUrl
                    ? '#0B1220'
                    : 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
                  padding: user.avatarUrl ? '4px' : '0',
                }}
              >
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

              <p className="text-sm font-bold m-0 mb-1 text-white truncate px-1">
                {user.username}
              </p>

              <p className="text-xs text-gray-400 m-0">
                Nível {user.level}
              </p>
            </NavLink>
          )}

          {/* Nav items */}
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-all ${
                    isActive
                      ? 'bg-[#1F2937] text-[#00D4FF] font-bold border-l-4 border-[#00D4FF] shadow-[inset_0_0_10px_rgba(0,212,255,0.1)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                  }`
                }
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-4 border-t border-white/5 text-[11px] text-gray-500 text-center">
          CodeQuest Nexus &copy; {new Date().getFullYear()}
        </div>
      </aside>
    </>
  );
}
