import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CheckoutItems from './CheckoutItems/CheckoutItems';
import classes from './Checkout.module.css';
import Button from "../UI/Button/Button";

const Checkout = (props)=>{
    const contx = useContext(CartContext);
    let total = 0;
    return(<>
        
        {contx.addedCartItems.length >0 &&<div>
            {contx.addedCartItems.map((item)=>{
                total = total+(item.requestedQty * item.price);
                return <CheckoutItems 
                name={item.name} 
                desc={item.description}
                requestedQty={item.requestedQty}
                price={item.price}
                key={item.id}
                id={item.id}
                total = {total}>

            </CheckoutItems>
            })}

            <div className={classes.total}>Total: <span>{total}</span></div>
            <Button type="button" onClick={props.onClick}>Order</Button>
        </div>}
        {contx.addedCartItems.length ===0 &&<div className={classes['no_item']}>No item added</div>}
    </>)
}

export default Checkout;