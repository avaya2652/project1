import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
    totalOrderedItem: 0,
    addedCartItems:[],
    updateCartItems: ()=>{},
    decrementQty:(id)=>{}
})

export default CartContext;

export const CartContextProvider = (props) =>{
    const [cartList, setCartList] = useState([]);
    const [totalOrderd, setTotalOrderedItem] = useState(0);


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
    }

    const decrementQtyHandler = (id) =>{
        setCartList((prevState)=>{
            let indx = prevState.findIndex(item=>item.id === id);

            if(prevState[indx].requestedQty ===1){
               let leftItems = prevState.filter(item=> item.id !== prevState[indx].id);
                return [...leftItems]

            }
            prevState[indx].requestedQty -= 1;
            return [...prevState]

        })
    }

    return(
       <CartContext.Provider value={
            {   addedCartItems: cartList, 
                updateCartItems:updateCartItemsHandler, 
                totalOrderedItem: totalOrderd,
                decrementQty:decrementQtyHandler
            }}>
         {props.children}
       </CartContext.Provider>
    )
}