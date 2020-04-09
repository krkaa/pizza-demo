import React from 'react';
import {Footer, Navbar} from "react-materialize";
import {NavLink} from "react-router-dom";
import s from "./Footer.module.sass"

const FooterContent = () => {
    return <div>
        <Footer
            className={s.footer}
            copyrights="copy 2020 Copyright Text"
            links={<ul>
                <li>
                    <NavLink to="/" className="grey-text text-lighten-3">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className="grey-text text-lighten-3">
                        Menu
                    </NavLink>
                </li>
            </ul>}
            moreLinks={<a className="grey-text text-lighten-4 right" href="https://vk.com/trylatter">My VK profile</a>}
        >
            <h5 className="white-text">
                Pizza-shop
            </h5>
            <p className="grey-text text-lighten-4">
                This is my not commerce portfolio project.
            </p>
        </Footer>
    </div>
}

export default FooterContent