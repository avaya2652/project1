import React from "react";
import styles from './Modal.module.css';

const Backdrop = (props) =>{
    const clickHandler = () =>{
        props.onClick(true)
    }
    return(
        <div className={styles.backdrop} onClick={clickHandler}></div>
    )
}

export default Backdrop;