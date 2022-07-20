import React, { useContext, useState } from "react";
import classes from './Cart.module.css';
import cartImg from '../../assets/Images/cart.png'
import CartContext from "../../store/cart-context";
import Modal from '../UI/Modal/Modal';
import Checkout from "../Checkout/Checkout";
import Order from '../Order/Order'

const Cart = () =>{
    // console.log(images)
    const [isCheckoutModalOpen,setIsCheckoutModalOpen] = useState(false);
    const contx = useContext(CartContext);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const closeHandler = ()=>{
        setIsCheckoutModalOpen(false);
    }

    const openCartModalHandler = () =>{
        setIsCheckoutModalOpen(true);
    }

    const openOrderModalHandler = ()=>{
        setIsCheckoutModalOpen(false);
        setIsOrderModalOpen(true);
    }
    const modalCloseHandler = () =>{
        setIsOrderModalOpen(false);

    }
    return(
        <div className={classes['cart_wrapper']}>
            {isCheckoutModalOpen && <Modal onClick={closeHandler}>
                <Checkout onClick= {openOrderModalHandler}/>
            </Modal>}
            { isOrderModalOpen && <Modal onClick={modalCloseHandler}>
                            <Order></Order>
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