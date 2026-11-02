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
} from 'lucide-react';
import { useAuthStore } from '@/stores/useAuthStore';

export function Sidebar() {
  const { user } = useAuthStore();

  const items = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/galaxy', icon: Globe, label: 'Galaxia' },
    { to: '/missions', icon: Target, label: 'Missoes' },
    { to: '/achievements', icon: Award, label: 'Conquistas' },
    { to: '/profile', icon: User, label: 'Perfil' },
    { to: '/settings', icon: Settings, label: 'Ajustes' },
    { to: '/feedback', icon: MessageCircle, label: 'Feedback' },
  ];

  return (
    <aside
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        width: '250px',
        background: '#0A1020',
        borderRight: '1px solid #1F2937',
        padding: '20px',
        color: 'white',
        fontFamily: 'sans-serif',
        zIndex: 50,
        boxSizing: 'border-box',
      }}
      className="sidebar"
    >
      <div style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Zap size={20} color="white" fill="white" />
          </div>

          <div>
            <h1
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                margin: 0,
              }}
            >
              CODEQUEST
            </h1>

            <p
              style={{
                fontSize: '10px',
                color: '#00D4FF',
                letterSpacing: '2px',
                margin: 0,
              }}
            >
              NEXUS
            </p>
          </div>
        </div>
      </div>

      {user && (
        <NavLink
          to="/profile"
          style={{
            display: 'block',
            textDecoration: 'none',
            color: 'inherit',
            padding: '15px',
            background: '#111827',
            borderRadius: '10px',
            marginBottom: '20px',
            textAlign: 'center',
            border: '1px solid rgba(0, 212, 255, 0.15)',
            transition: 'border-color 0.2s, transform 0.2s',
            cursor: 'pointer',
          }}
          title="Ver perfil e alterar avatar pixel art"
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: user.avatarUrl
                ? '#0B1220'
                : 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
              border: '2px solid rgba(0, 212, 255, 0.4)',
              boxShadow: '0 0 15px rgba(0, 212, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 10px',
              fontSize: '20px',
              fontWeight: 'bold',
              overflow: 'hidden',
              padding: user.avatarUrl ? '4px' : '0',
            }}
          >
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.username}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  imageRendering: 'pixelated',
                }}
              />
            ) : (
              (user.username?.[0] || 'U').toUpperCase()
            )}
          </div>

          <p
            style={{
              fontSize: '13px',
              fontWeight: 'bold',
              margin: '0 0 5px',
              color: '#FFFFFF',
            }}
          >
            {user.username}
          </p>

          <p
            style={{
              fontSize: '11px',
              color: '#9CA3AF',
              margin: 0,
            }}
          >
            Nível {user.level}
          </p>
        </NavLink>
      )}

      <nav>
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 15px',
              marginBottom: '5px',
              borderRadius: '8px',
              background: isActive ? '#1F2937' : 'transparent',
              color: isActive ? '#00D4FF' : '#9CA3AF',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: isActive ? 'bold' : 'normal',
              borderLeft: isActive
                ? '3px solid #00D4FF'
                : '3px solid transparent',
            })}
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
