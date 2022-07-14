import React, {  useContext, useReducer } from 'react';
import AuthContext from '../../Store/auth-context';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import styles from './UserLogin.module.css';


const loginReducer = (state, action)=>{
    switch(action.type){
        case 'VALIDATE_EMAIL':{
            if(action.payload.trim().length === 0){
                return{
                    ...state,
                    eMessage:'Empty email',
                    isEmailValid: false

                }
            }
            else if(!action.payload.includes('@')){
                console.log(1)  
              return{
                    ...state,
                    eMessage:'Not a valid email',
                    isEmailValid: false

                }
            } else{
                return{
                    ...state,
                    eMessage:'',
                    isEmailValid: true

                }
            }
            
        }
        case 'UPDATE_EMAIL':{
            return {
                ...state,
                email: action.payload
            }
        }
        case 'VALIDATE_PASSWORD':{
            if(action.payload.trim().length === 0){
                return{
                    ...state,
                    pMessage:'Empty password',
                    isPasswordValid: false

                }
            }
            else if(action.payload.trim().length <6){
              return{
                    ...state,
                    pMessage:'Password should be more than 5 digit',
                    isPasswordValid: false

                }
            }else{
                return{
                    ...state,
                    pMessage:'',
                    isPasswordValid: true

                }
            }
            
        }
        case 'UPDATE_PASSWORD':{
            return {
                ...state,
                password: action.payload
            }
        }
        default: return {
            email:'',
            isEmailValid: null,
            eMessage:'',
            password:'',
            isPasswordValid: null,
            pMessage:''
    
        };
    }

}

const UserLogin = () =>{
    const initialState = {
        email:'',
        isEmailValid: null,
        eMessage:'',
        password:'',
        isPasswordValid: null,
        pMessage:''

    }
    const contx = useContext(AuthContext)
    const [state, dispatchAction] = useReducer(loginReducer, initialState)
    
    const emailBlurHandler = (e) =>{
        dispatchAction({type:'VALIDATE_EMAIL', payload:e.target.value})
    }
    const emailChangeHandler = (e) =>{
        dispatchAction({type:'UPDATE_EMAIL', payload:e.target.value})

    }
    const passwordBlurHandler = (e) =>{
        dispatchAction({type:'VALIDATE_PASSWORD', payload:e.target.value})
    }
    const passwordChangeHandler = (e) =>{
        dispatchAction({type:'UPDATE_PASSWORD', payload:e.target.value})

    }

    const loginHandler = (e) =>{
        e.preventDefault();
        contx.loginHandler(state.email, state.password)
    }
  
    return(
        <Card>
            <form onSubmit={loginHandler}>
                <Input type='text'
                    id='email'
                    name="email"
                    label='Email'
                    value={state.email}
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                    message={state.eMessage}
                    isValid = {state.isEmailValid}
                  />
                <Input type='text'
                    id='password'
                    name="password"
                    label='Password'
                    value={state.password}
                    onBlur={passwordBlurHandler}
                    onChange={passwordChangeHandler}
                    message={state.pMessage}
                    isValid = {state.isPasswordValid}


                  />
                <div className={styles['form_group']}>
                    {console.log(state.isEmailValid , state.isPasswordValid)}
                     <Button type="submit" disabled={!(state.isEmailValid === true && state.isPasswordValid  === true)} >Login</Button>
                </div>
            </form>
        </Card>
    )
}

export default UserLogin;
