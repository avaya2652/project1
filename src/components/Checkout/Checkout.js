import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CheckoutItems from './CheckoutItems/CheckoutItems';
import classes from './Checkout.module.css';
import Button from "../UI/Button/Button";

const Checkout = ()=>{
    const contx = useContext(CartContext);

    let total = 0;

    return(<>
        {contx.addedCartItems.map((item)=>{
            total = total+(item.requestedQty * item.price);
            // console.log(total)
            return <CheckoutItems 
            name={item.name} 
            desc={item.description}
            requestedQty={item.requestedQty}
            price={item.price}
            key={item.id}
            total = {total}>

        </CheckoutItems>
        })}

        <div className={classes.total}>Total: <span>{total}</span></div>
        <Button type="button">Order</Button>
        
    </>)
}

export default Checkout;