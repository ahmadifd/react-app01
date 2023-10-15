import React from "react";

import styles  from './header.module.css';

const Header  = () => {
    return (
        <div className={styles.header}>
            <h3 className={styles.header_title}>Find Your Favorite Cocktail</h3>
        </div>
    )
}

export default Header;