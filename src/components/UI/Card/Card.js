import React from "react";
import classes from './Card.module.css';
const Card=(props)=>{
    return(
        <div className={classes['card_warapper']}>
            {props.children}
        </div>
    )
}

export default Card;