import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className="hover" activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>
                <li className='nav-portfolio'>
                    Portfolio
                    <ul className='nav-projects'>
                        <NavLink to="/portraits">
                            <li>Portraits</li>
                        </NavLink>
                        <NavLink to="/creations">
                            <li>Créations</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to="/contact" className="hover" activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    )
}
