import React from "react";
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref)=>{
    return(
        <>
                <div className={styles['form_group']}>
                     <div className={styles.label}>
                        <label htmlFor={props.id} className={styles.label}>{props.label}</label>
                     </div>
                     <div className={styles['form_controls']}>
                        <input 
                            type={props.type} 
                            value={props.value} 
                            name={props.name} 
                            onChange={props.onChange} 
                            onBlur={props.onBlur} 
                            ref={ref}
                            className={props.isValid !== false?'': styles.error}
                        />
                        <div className={styles['message_wrapper']}>
                            <p className={styles['error_message']}>{props.message}   </p>
                        </div>

                    </div>
                </div>
           
        </>
    )
})

export default Input;