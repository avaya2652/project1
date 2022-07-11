import React from "react";
import styles from './Welcome.module.css';

const Welcome = (props)=>{
    console.log(props)
    return(
        <div className={styles['welcome_wrapper']}>
            <h1>Wlcome to this site {props.user}</h1>
        </div>
    )
}

export default Welcome;