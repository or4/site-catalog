import * as React from 'react';
import { Link } from 'react-router';


export const Header = () => (
  <nav>
    <ul>
      <li><Link to="main">Main</Link></li>
      <li><Link to="about">About</Link></li>
    </ul>
  </nav>
);
