import React from "react";
import classes from './Item.module.css';

const ItemDisplay = (props)=>{
    return(
        <div className={classes['item_info']}>
                <p className={classes['item_name']}>{props.name}</p>
                <p>{props.description}</p>
                <p className={classes['item_price']}>
                    ${props.price}
                </p>
            </div>
    )
}

export default ItemDisplay;