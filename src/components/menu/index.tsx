import React from 'react';
import { Link } from 'react-router-dom';

import './menu.scss'

const MenuHeader = () => (
  <menu className="bibo-menu-top">
    <nav className="bibo-menu-nav">
      <Link className="bibo-menu-link" to="/">Logo</Link>
      <Link className="bibo-menu-link" to="/">Sobre</Link>
      <Link className="bibo-menu-link" to="/">Catálogo</Link>
    </nav>
    <nav className="bibo-menu-nav-right">
      <Link className="bibo-menu-link" to="/">Entrar</Link>
      <Link className="bibo-menu-link" to="/">Registre-se</Link>
    </nav>
  </menu>
)

export default MenuHeader;
