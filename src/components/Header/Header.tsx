import styles from './styles.module.scss';

import { HEADER_NAV_LINKS } from 'constants/headerNavLinks';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        {HEADER_NAV_LINKS.map((link) => {
          const { to, text } = link;
          return (
            <NavLink
              key={text}
              to={to}
              className={({ isActive }) => (isActive ? styles.activeNavLink : '')}
            >
              {text}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
