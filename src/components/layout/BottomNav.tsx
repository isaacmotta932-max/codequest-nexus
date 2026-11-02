import { NavLink } from 'react-router-dom';
import { Home, Globe, Target, Award, User } from 'lucide-react';

const items = [
  { to: '/dashboard', icon: Home, label: 'Início' },
  { to: '/galaxy', icon: Globe, label: 'Galáxia' },
  { to: '/missions', icon: Target, label: 'Missões' },
  { to: '/achievements', icon: Award, label: 'Conquistas' },
  { to: '/profile', icon: User, label: 'Perfil' },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-[#0A1020]/95 px-2 py-1.5 backdrop-blur-xl md:hidden">
      <ul className="flex items-center justify-around m-0 p-0 list-none">
        {items.map((item) => (
          <li key={item.to} className="flex-1 text-center">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 rounded-lg py-1 text-[11px] font-medium transition-colors ${
                  isActive
                    ? 'font-bold text-[#00D4FF] drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]'
                    : 'text-gray-400 hover:text-white'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
