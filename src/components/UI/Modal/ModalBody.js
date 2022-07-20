import React from "react";
import Card from '../Card/Card';
import classes from './Modal.module.css';
// import Button from '../Button/Button'

const ModalBody=(props)=>{
    return(
        <div className={classes['modal_body']}>
         <Card>
            <div className={classes['close_header']} onClick={props.onClick}>
                <span>X</span>
            </div>
                {props.children}
            {/* <div className={classes.close}>
                <Button onClick={props.onClick} type='button'>Close</Button>
            </div> */}
         </Card>
        </div>
    )
}
export default ModalBody;