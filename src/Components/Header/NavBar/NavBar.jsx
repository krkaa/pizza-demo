import React, {useContext} from 'react';
import s from './NavBar.module.sass';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../Auth/Auth";
import app from "../../Firebase/Firebase";
import CartIcon from "../../Cart/CartIcon";

const NavBar = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <nav className={s.nav}>
            <div className="container">
                <div className="row"><ul>
                    <li className={s.item}><NavLink exact to="/" activeClassName={s.active}>Home</NavLink></li>
                    <li className={s.item}><NavLink to="/menu" activeClassName={s.active}>Menu</NavLink></li>
                    {!currentUser
                        ? <li className={s.item}><NavLink to="/login" activeClassName={s.active}>Login</NavLink></li>
                        : <button onClick={() => {
                            app.auth().signOut()
                        }}>Sign Out</button>
                    }
                </ul></div>
                <div className="row"><CartIcon/></div>
            </div>


        </nav>

    );
}

export default NavBar