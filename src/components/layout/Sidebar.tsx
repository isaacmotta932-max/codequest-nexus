import { NavLink, useNavigate } from 'react-router-dom';
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
  LogOut,
} from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUIStore } from '@/stores/useUIStore';
import { getAvatarByUrlOrId } from '@/constants/pixelAvatars';

export function Sidebar() {
  const { user, logout } = useAuthStore();
  const { sidebarOpen, closeSidebar } = useUIStore();
  const navigate = useNavigate();

  const activeAvatar = getAvatarByUrlOrId(user?.avatarUrl);
  const { primary, secondary, surfaceTint, glowRgb } = activeAvatar.themePalette;

  const handleLogout = async () => {
    closeSidebar();
    try {
      await logout();
    } finally {
      navigate('/', { replace: true });
    }
  };

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
        className={`fixed top-0 left-0 z-50 h-screen w-[260px] max-w-[85vw] border-r p-5 text-white flex flex-col justify-between overflow-y-auto transition-all duration-300 ease-in-out md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
        style={{
          backgroundColor: '#0A1020',
          backgroundImage: `linear-gradient(180deg, rgba(${glowRgb}, 0.07) 0%, transparent 40%)`,
          borderColor: `rgba(${glowRgb}, 0.16)`,
        }}
      >
        <div>
          {/* Header with Brand Logo & Mobile Close (X) button */}
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${primary}, ${secondary})`,
                  boxShadow: `0 0 12px rgba(${glowRgb}, 0.4)`,
                }}
              >
                <Zap size={20} color="white" fill="white" />
              </div>

              <div>
                <h1 className="text-sm font-bold tracking-wider leading-none m-0 text-white">
                  CODEQUEST
                </h1>
                <p
                  className="text-[10px] tracking-[2px] font-semibold leading-none mt-1 transition-colors duration-300"
                  style={{ color: primary }}
                >
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
              className="block no-underline text-inherit p-3.5 rounded-xl mb-5 text-center border hover:scale-[1.02] transition-all cursor-pointer shadow-lg"
              style={{
                backgroundColor: surfaceTint,
                borderColor: `rgba(${glowRgb}, 0.3)`,
              }}
              title="Ver perfil e alterar avatar pixel art"
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-2 flex items-center justify-center text-lg font-bold overflow-hidden border-2"
                style={{
                  background: user.avatarUrl
                    ? '#0B1220'
                    : `linear-gradient(135deg, ${primary}, ${secondary})`,
                  borderColor: `rgba(${glowRgb}, 0.6)`,
                  boxShadow: `0 0 15px rgba(${glowRgb}, 0.25)`,
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

              <p className="text-sm font-bold m-0 mb-0.5 text-white truncate px-1">
                {user.username}
              </p>

              <p
                className="text-[10px] font-mono m-0 mb-0.5 truncate"
                style={{ color: primary }}
              >
                {activeAvatar.name}
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
                      ? 'bg-[#1F2937] font-bold border-l-4'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? primary : undefined,
                  borderLeftColor: isActive ? primary : 'transparent',
                  boxShadow: isActive ? `inset 0 0 12px rgba(${glowRgb}, 0.12)` : undefined,
                })}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer with Logout button & copyright */}
        <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
          {user && (
            <button
              type="button"
              onClick={handleLogout}
              className="ios-press w-full flex items-center justify-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/25 transition-colors cursor-pointer"
            >
              <LogOut size={16} />
              <span>Sair da conta</span>
            </button>
          )}
          <div className="text-[11px] text-gray-500 text-center">
            CodeQuest Nexus &copy; {new Date().getFullYear()}
          </div>
        </div>
      </aside>
    </>
  );
}
