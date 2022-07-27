import React, { useContext, useReducer, useState } from "react";
import useHttp from "../../hook/use-http";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button/Button";
import Card from '../UI/Card/Card';
import Input from "../UI/Input/Input";
import classes from './Order.module.css';

const orderReducer = (state, action)=>{
    switch(action.type){
    //  return state
        case 'NAME_VALIDATION':{
            if(action.value.trim().length === 0){
                return{
                    ...state,
                    'nameMessage':'Name can not be empty',
                    'isNameValid': false
                }
            }else{
                return {...state,
                    'nameMessage':'',
                    'isNameValid': true
                }
            }
        }
        case 'ADDRESS1_VALIDATION':{
            if(action.value.trim().length === 0){
                return {
                    ...state,
                    'address1Message':' Address 1 can not be empty',
                    'isAddress1Valid': false

                }
            }else{
                return {
                    ...state,
                    'address1Message':'',
                    'isAddress1Valid': true

                }
            }

        }
        case 'ADDRESS2_VALIDATION':{
            if(action.value.trim().length === 0){
                return {
                    ...state,
                    'address2Message':' Address 2 can not be empty',
                    'isAddress2Valid': false
                }
            }else{
                return {
                    ...state,
                    'address2Message':'',
                    'isAddress2Valid': true
                }
            }

        }
        default: return{
            'nameMessage':'',
            'isNameValid': false,
            'address1Message':'',
            'isAddress1Valid': false,
            'address2Message':'',
            'isAddress2Valid': false
        }
    }
}



const Order = (props)=>{
    // const [orderFormValidity, setOrderFormValidity] = useState({})
    const [message, setMessage] = useState('');
    const contx = useContext(CartContext);
    const manageOrderSubmittedData = (data)=>{
        console.log(data)
        if(data.name){
            setMessage('Order placed')
        }
    }
 
    const{errorMessage, isLoading, sendRequest:placeOrder} = useHttp(manageOrderSubmittedData)
    const [orderFormValue, setOrderFormValue] = useState({
        'name':'',
        'address1':'',
        'address2':''
    })
    const initialState = {
        'nameMessage':'',
        'isNameValid': false,
        'address1Message':'',
        'isAddress1Valid': false,
        'address2Message':'',
        'isAddress2Valid': false
    }
    const [state, dispatch] = useReducer(orderReducer, initialState);
    
    const nameBlurHandler=(e)=>{
        console.log(2);
        dispatch({'type':'NAME_VALIDATION', value:e.target.value})
    }
    const address1BlurHandler=(e)=>{
        dispatch({'type':'ADDRESS1_VALIDATION', value:e.target.value})
    }
    const address2BlurHandler=(e)=>{
        dispatch({'type':'ADDRESS2_VALIDATION', value:e.target.value})
    }
    
    const nameOnChangeHandler = (e) =>{
        setOrderFormValue((prev)=>{
            return{...prev, 'name':e.target.value}
        })
    }
    const address1OnChangeHandler = (e) =>{
        setOrderFormValue((prev)=>{
            return{...prev, 'address1':e.target.value}
        })
    }
    const address2OnChangeHandler = (e) =>{
        setOrderFormValue((prev)=>{
            return{...prev, 'address2':e.target.value}
        })
    }
    const orderDataHandler = (e)=>{
        e.preventDefault();
        // console.log(orderFormValue);
        placeOrder({
            URL:'https://react-movie-1a655-default-rtdb.firebaseio.com/orders.json', 
            method:'POST',
            headers: {
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
              },
            body: {user:orderFormValue, cartItem: contx.addedCartItems}

        })
        setOrderFormValue(
            {
                'name':'',
                'address1':'',
                'address2':''
            }
        )
        dispatch({'type':'RESET_ALL'})

        

    }
    return(
        <Card>
            {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            {message && <p className={classes.success}>{message}</p>}
            {isLoading && <p>Loading...</p>}
            <form onSubmit={orderDataHandler}>
                <Input 
                    type="text" 
                    name="name" 
                    label="Name" 
                    id="name" 
                    value={orderFormValue.name}
                    onBlur={nameBlurHandler} 
                    onChange={nameOnChangeHandler}
                    errorMessage={state.nameMessage}
                />
                <Input 
                    type="text" 
                    name="address1" 
                    label="Address 1" 
                    id="address1" 
                    value={orderFormValue.address1}
                    onBlur={address1BlurHandler} 
                    onChange={address1OnChangeHandler}
                    errorMessage={state.address1Message}

                />
                <Input 
                    type="text" 
                    name="address2" 
                    label="Address 2" 
                    id="address1" 
                    value={orderFormValue.address2}
                    onChange={address2OnChangeHandler}
                    onBlur={address2BlurHandler} 
                    errorMessage={state.address2Message}

                />
                <Button type="submit" onClick={props.onClick} 
                    disabled={!(state.isNameValid && state.isAddress1Valid && state.isAddress2Valid)}>Submit</Button>
            </form>
        </Card>
    )
}

export default Order;