import * as React from 'react';
import { Link } from 'react-router';

const style = require('./style.css');

export const Header = () => (
  <nav className={style.Nav}>
    <ul>
      <li><Link to="main">Main</Link></li>
      <li><Link to="about">About</Link></li>
    </ul>
  </nav>
);
