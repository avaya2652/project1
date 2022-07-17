import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import AddToCart from "../../Cart/AddToCart/AddToCart";
import classes from './Item.module.css';


const Item=(props)=>{
    const contx = useContext(CartContext);

    const addToCartHandler =(requestedQty)=>{
        contx.updateCartItems({
            "id": props.id,
            "name": props.name, 
            "description": props.description,
            "price": props.price,
            "requestedQty":+requestedQty
        })
        // console.log(requestedQty)
    }
    return(
        <div className={classes['item_wrapper']}>
            <div className={classes['item_info']}>
                <p className={classes['item_name']}>{props.name}</p>
                <p>{props.description}</p>
                <p className={classes['item_price']}>
                    ${props.price}
                </p>
            </div>
            <div className={classes['item_action']}>
                {/* <Button onClick={clickHandler}>+Add</Button> */}
                <AddToCart onClick={addToCartHandler}></AddToCart>
            </div>
        </div>
    )

}

export default Item;