import React, { useContext, useState } from "react";
import classes from './Cart.module.css';
import cartImg from '../../assets/Images/cart.png'
import CartContext from "../../store/cart-context";
import Modal from '../UI/Modal/Modal';
import Checkout from "../Checkout/Checkout";

const Cart = () =>{
    // console.log(images)
    const [isModalOpen,setIsModalOpen] = useState(false);
    const contx = useContext(CartContext);
    const closeHandler = ()=>{
        setIsModalOpen(false);
        console.log(121212);
    }

    const openCartModalHandler = () =>{
        setIsModalOpen(true);
    }
   
    return(
        <div className={classes['cart_wrapper']}>
            {isModalOpen && <Modal onClick={closeHandler}>
                <Checkout/>
            </Modal>}
            <div className={classes['cart_img']} onClick={openCartModalHandler}>
                <img src={cartImg} alt="cart" />
                <span>Your Cart</span>
            </div>
            <div className={classes.count}>{contx.totalOrderedItem}</div>
        </div>
    )
}

export default Cart;