import React from "react";
import classes from './Modal.module.css';

const ModalBackdrop = (props)=>{
    return(
        <div className={classes.backdrop} onClick ={props.onClick} ></div>
    )
}

export default ModalBackdrop;
