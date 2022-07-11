import React from "react";

import styles from './Header.module.css';

const Header = (props)=>{
    return(
        <div className={styles.header}>
            <p>{props.children}</p>
        </div>
    )
}

export default Header;