import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className="hover" activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/concept" className="hover" activeClassName="nav-active">
                    <li>Concept</li>
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
            </ul>
        </div>
    )
}
