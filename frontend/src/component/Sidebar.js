import React from 'react';

const navLinks = [
    { url: '/hot', name: '인기' },
    { url: '/celebrity', name: '연예' },
    { url: '/daily', name: '일상' }];

const Sidebar = () => {
    return(
        <nav className="Sidebar-body">
            {navLinks.map(({ url, name }) => (
              <li className="Sidebar-li">
                <a href={url}>{name}</a>
              </li>
              ))}
        </nav>
    );
}

export default Sidebar;