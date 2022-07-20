import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from '../CheckoutItems/CheckoutItems.module.css';
import Button from '../../UI/Button/Button'
// import Modal from '../../UI/Modal/Modal';

const CheckoutItems = (props) =>{
    const contx = useContext(CartContext);
    // const [isModalOpen,setIsModalOpen] = useState(false);
    // const closeHandler = ()=>{
    //     setIsModalOpen(false);
    // }
    const incrementHandler = ()=>{
        // contx.incrementQty(props.id)
        contx.updateCartItems({
            "id": props.id,
            "name": props.name, 
            "description": props.description,
            "price": props.price,
            "requestedQty":1,
            "availableQty":props.availableQty,
        })
        
    }
    const decrementHandler = ()=>{
        contx.decrementQty(props.id)
    }
    // console.log(props.id)
    return(
        <>
        {/* {(contx.quantityUpdateState.isButtonDisable) &&
            <Modal onClick={closeHandler}>{contx.quantityUpdateState.msg}</Modal>} */}
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
                <Button type="button" onClick={incrementHandler}>+</Button>
                <Button type="button"  onClick={decrementHandler}>-</Button>
            </div>
        </div>
        </>
    )
}

export default CheckoutItems;