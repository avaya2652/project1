import React, { useEffect, useReducer, useState, useRef } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import styles from './UserLogin.module.css';
// import { useRef } from 'react';

const loginReducer = (state, action) =>{
    if(action.type==='EMAIL_VALUE'){
        // console.log(state, action)
        return{
            ...state,
            emailValue: action.value,
            isEmailValid: action.value.includes('@')
        }
    }
    if(action.type==='PASSWORD_VALUE'){
        return{
            ...state,
            passwordValue: action.value,
            isPasswordValid: action.value.trim().length >=6
        }
    }
    return {
        emailValue:'',
        isEmailValid: false,
        passwordValue:'',
        isPasswordValid: false
    }
}

const UserLogin = (props) =>{
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [isValid, setIsvalid] = useState(true);

    const initialState = {
        emailValue:'',
        isEmailValid: false,
        passwordValue:'',
        isPasswordValid: false
    }

    const [state, dispatchAction] = useReducer(loginReducer,initialState)

    const emailChangeHandler = (e) =>{
        // setEmail(e.target.value)
        dispatchAction({type:'EMAIL_VALUE', value: e.target.value})
    }
    const passwordChangeHandler = (e) =>{
        // setPassword(e.target.value)
        dispatchAction({type:'PASSWORD_VALUE', value: e.target.value})

    }

    useEffect(()=>{
        // console.log('inside effect');
        setIsvalid(state.isEmailValid && state.isPasswordValid)
        return ()=>{
            // console.log('cleanup');
        };
    },[state.isEmailValid,state.isPasswordValid])

    const userLoginHandler = (e)=>{
        e.preventDefault();
        const userDetails = {email:emailRef.current.value, password: passwordRef.current.value}
        localStorage.setItem('user', JSON.stringify(userDetails));
        props.onSubmit(true);
    }
    return(
        <Card>
            <form onSubmit={userLoginHandler}>
                <div className={styles['form_group']}>
                    <div className={styles.label}>
                        <label>Email</label>
                    </div>
                    <div className={styles['form_controls']}>
                        {!state.isEmailValid && <p className={styles.errorMessage}>NOt a valid email</p>}
                        <Input type="text" name="email" value={state.emailValue} ref={emailRef} onChange={emailChangeHandler} />
                        {/* <input  type="text" /> */}
                    </div>
                </div>
                <div className={styles['form_group']}>
                    <div className={styles.label}>
                        <label>Password</label>
                    </div>
                    <div className={styles['form_controls']}>
                    {!state.isPasswordValid && <p className={styles.errorMessage}>NOt a valid password</p>}

                        <Input type="password" value={state.passwordValue} name="password"ref={passwordRef} onChange={passwordChangeHandler}  />
                    </div>
                </div>
                <div className={styles['form_group']}>
                    <Button type="submit" disabled={!isValid?true: false}>Login</Button>
                </div>
            </form>
        </Card>
    )
}

export default UserLogin;