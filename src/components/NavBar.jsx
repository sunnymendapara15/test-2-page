
import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Dashboard', to: '/' },
  { label: 'Portfolio', to: '/portfolio' }
];

export default function NavBar() {
  return (
    <nav className="top-nav">
      <div className="logo">Sparkfolio</div>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
