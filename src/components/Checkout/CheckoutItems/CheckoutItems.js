import React from "react";
import classes from '../CheckoutItems/CheckoutItems.module.css';

const CheckoutItems = (props) =>{
    console.log(props);

    return(
        <div className={classes['checkout_wrapper']}>
            <div className={classes.name}>
                {props.name}
                <p>{props.desc}</p>
            </div>
            <div className={classes.qty}>
                {props.requestedQty}
            </div>
            <div className={classes.price}>
                {props.requestedQty * props.price}
            </div>
            <div className={classes['update_qty']}>
                <div className={classes.increment} >+</div>
                <div className={classes.decrement}>-</div>
            </div>
        </div>
    )
}

export default CheckoutItems;