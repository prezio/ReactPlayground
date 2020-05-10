import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: "orange" };
    return (
        <nav>
            <NavLink activeStyle={activeStyle} exact to="/">
                Strona główna
            </NavLink> 
            {" | "} 
            <NavLink activeStyle={activeStyle} to="/games">
                Gry
            </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to="/math">
                Matematyka
            </NavLink>
        </nav>
    );
};

export default Header;