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
    <nav className="ios-tabbar fixed bottom-0 left-0 right-0 z-30 px-2 pt-1.5 md:hidden">
      <ul className="mx-auto flex max-w-md items-center justify-around m-0 p-0 list-none">
        {items.map((item) => (
          <li key={item.to} className="flex-1 text-center">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `ios-press relative flex flex-col items-center justify-center gap-0.5 rounded-2xl py-1.5 text-[10px] tracking-tight transition-all duration-200 no-underline ${
                  isActive
                    ? 'font-semibold text-[#00D4FF]'
                    : 'font-medium text-gray-400/90 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`flex h-7 w-11 items-center justify-center rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-[#00D4FF]/15 shadow-[0_0_12px_rgba(0,212,255,0.25)]'
                        : 'bg-transparent'
                    }`}
                  >
                    <item.icon
                      className={`h-[19px] w-[19px] transition-transform duration-200 ${
                        isActive ? 'scale-105 stroke-[2.4px]' : 'stroke-[1.9px]'
                      }`}
                    />
                  </div>
                  <span className="leading-tight">{item.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
