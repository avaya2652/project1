import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";
import Button from "../UI/Button/Button";
import styles from './Welcome.module.css';


const Welcome = (props)=>{
    // console.log(props)
    const contx= useContext(AuthContext);
    return(
        <div className={styles['welcome_wrapper']}>
            <h1>Wlcome to this site {props.user}</h1>
            <Button onClick={contx.logoutHandler}>Logout</Button>
        </div>
    )
}

export default Welcome;