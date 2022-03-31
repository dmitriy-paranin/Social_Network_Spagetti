import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img}
                 src="https://www.pngitem.com/pimgs/m/114-1147177_spaghetti-feed-for-freed-spaghetti-spaghetti-logo-png.png"
                 alt="logo"/>
        </header>
    )
}

export default Header;