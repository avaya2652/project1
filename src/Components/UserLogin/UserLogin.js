import React, { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import styles from './UserLogin.module.css';
import { useRef } from 'react';

const UserLogin = (props) =>{
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsvalid] = useState(true);

    const emailChangeHandler = (e) =>{
        setEmail(e.target.value)
    }
    const passwordChangeHandler = (e) =>{
        setPassword(e.target.value)
    }

    useEffect(()=>{
        console.log('inside effect');
        // setIsvalid(email.trim().length>0 && password.trim().length>4)
        return ()=>{
            console.log('cleanup');
        };
    },[password])

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
                        <Input type="text" name="email" value={email} ref={emailRef} onChange={emailChangeHandler} />
                        {/* <input  type="text" /> */}
                    </div>
                </div>
                <div className={styles['form_group']}>
                    <div className={styles.label}>
                        <label>Password</label>
                    </div>
                    <div className={styles['form_controls']}>
                        <Input type="password" value={password} name="password"ref={passwordRef} onChange={passwordChangeHandler}  />
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