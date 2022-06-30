import React from "react";
import styles from './CustomInput.module.css';

const CustomInput = (props)=>{
    const onChangeHandler = (e)=>{
        props.onChange(e.target.value);
    }
    return(

        <div className={styles['form-control']}>
            <div>
                <label>{props.label}</label>
            </div>
            <input name={props.name} value={props.value} onChange={onChangeHandler}  type={props.type} 
                className={styles[props.className]}/>
        </div>
        )
}

export default CustomInput;