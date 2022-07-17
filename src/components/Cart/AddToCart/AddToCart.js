import React, {  useRef } from "react";
import Button from "../../UI/Button/Button";
import classes from './AddToCart.module.css';

const AddToCart=(props)=>{
    const requestedQty = useRef();
    const clickHandler=()=>{
        props.onClick(requestedQty.current.value);
    }
    return(
        <div className={classes['addToCart_wrapper']}>
            <div className={classes['add_qty']}>
                <span className={classes.text}>Amount</span>
                <input type="text" className={classes.input} ref={requestedQty}/>
            </div>
            <Button onClick={clickHandler} type='submit'>+Add</Button>
        </div>
    )
}

export default AddToCart;