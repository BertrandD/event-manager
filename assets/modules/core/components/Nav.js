import React from 'react';
import { Link } from 'react-router';

function Nav () {
  const links = [
    {
      icon: 'glyphicon-home',
      path: '/',
      title: 'Home'
    }
  ];

  return (
    <nav className="navi clearfix">
      <ul className="nav">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>
              <i className={`glyphicon ${link.icon}`} />
              <span className="font-bold">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
