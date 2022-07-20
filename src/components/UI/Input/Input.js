import React from "react";
import classes from './Input.module.css';
const Input=(props)=>{
    return(
        <>
        <div className={classes['form_group']}>
                    
            <div className={classes['form_label']}>
                <label htmlFor={props.id}>{props.label}</label>
                <div className={classes.msg}><p></p></div>
            </div>
            <div className={classes['form_input']}>
                <input 
                    type={props.type || 'text'} 
                    name={props.name}
                    value={props.value}
                    onBlur={props.onBlur}
                    onChange={props.onChange}
                    className={classes.input}
                />
                <div className={classes.msg}><p className={classes['error_msg']}>{props.errorMessage}</p></div>

            </div>   
            </div>

        </>
    )
}
export default Input;