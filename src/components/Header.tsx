import Menu from '@/components/Menu';

import logo from '@/assets/logo.svg';

import './Header.scoped.scss';

function Header() {
  return (
    <header>
      <div id="wrapper">
        <svg id="logo" data-src={logo} />
        <span id="title">Pokémon</span>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
