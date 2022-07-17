import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
    totalOrderedItem: 0,
    addedCartItems:[],
    updateCartItems: ()=>{},
    openCartItems:()=>{},
    openModal: false
})

export default CartContext;

export const CartContextProvider = (props) =>{
    const [cartList, setCartList] = useState([]);
    const [totalOrderd, setTotalOrderedItem] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(()=>{
        let total = cartList.reduce(function(prev, cur) {
            return prev + cur.requestedQty;
          }, 0);
        setTotalOrderedItem(total);
    },[cartList])
    
    const updateCartItemsHandler=(item)=>{
        if(cartList.length!==0){
            setCartList((prevState)=>{
                const matchedItem =prevState.findIndex(ele=>ele.id === item.id);
                if(matchedItem>=0){
                     prevState[matchedItem].requestedQty = prevState[matchedItem].requestedQty+item.requestedQty;
                     return [...prevState];
                   }else{
                    return [...prevState, item];                    
                   }
            })       
        }else{
            setCartList((prev)=>{
                return [...prev, item]
            });
        }



        

        // setTotalOrderedItem(1, cartList)
    }

    

    const openCartItemsHandler=()=>{
        console.log(cartList)
        setIsModalOpen(true);

    }

    return(
       <CartContext.Provider value={
            {   addedCartItems: cartList, 
                updateCartItems:updateCartItemsHandler, 
                totalOrderedItem: totalOrderd,
                openCartItems:openCartItemsHandler,
                openModal:isModalOpen
            }}>
         {props.children}
       </CartContext.Provider>
    )
}