import React from 'react';
import Backdrop from './Backdrop';
import styles from './Modal.module.css';
import Card from '../Card/Card';

const Modal = (props) =>{
    const modalCloseHandler = () =>{
        console.log('clicked');
    }
    return(
        <>
            <Backdrop></Backdrop>
            <div className={styles['modal_wrapper']}>
                {/* <Card> */}
                    <div className={styles.header}>
                        header
                        <span onClick={modalCloseHandler} className={styles['close_me']}>X</span>

                    </div>
                    <div className={styles.body}>Message</div>
                {/* </Card> */}
            </div>
        </>


    )
}

export default Modal;