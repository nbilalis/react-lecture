import { NavLink } from 'react-router-dom';

import './Menu.scoped.scss';

function Menu() {
  const routes = { '/': 'Home', '/about': 'About', '/pokemon': 'Pokémon' };

  return (
    <nav>
      <ul>
        {Object.entries(routes).map(([key, value]) => (
          <li key={key}>
            <NavLink to={key} className={({ isActive }) => (isActive ? 'active' : '')}>
              {value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
