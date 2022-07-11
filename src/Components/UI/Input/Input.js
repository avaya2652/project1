import React from "react";
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref)=>{
    return(
        <>
            <input type={props.type} value={props.value} name={props.name} onChange={props.onChange} {...props} ref={ref}/>
        </>
    )
})

export default Input;