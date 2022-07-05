import React, {useState} from 'react';
import Backdrop from './Backdrop';
import styles from './Modal.module.css';
import Button from '../Button/Button';
import ReactDOM  from 'react-dom';

const ModalBody = (props) =>{
    return(
            <div className={styles['modal_wrapper']}>
                {/* <Card> */}
                    <div className={styles.header}>
                        header
                        <span onClick={props.onClick} className={styles['close_me']}>X</span>

                    </div>
                    <div className={styles.body}>
                       <p>
                            {props.messages}
                        </p > 
                        <p style = {{textAlign:'right'}}>
                            <Button type="button" onClick={props.onClick} >Ok</Button>
                        </p>
                    </div>
                {/* </Card> */}
            </div>
    )
}

// export default ModalBody;

const Modal = (props) =>{
    const [isOpen, setIsOpen] = useState(true);
    const modalCloseHandler = () =>{
        console.log('clicked');
        setIsOpen(false)
        props.onClose(true);
    }
    return(
        <>
            { 
                ReactDOM.createPortal(<Backdrop onClick={modalCloseHandler} />, document.getElementById('backdrop_root'))}
                {
                ReactDOM.createPortal(<ModalBody onClick={modalCloseHandler} messages={props.messages}/>,
                 document.getElementById('modal_root'))}
            {/* <Backdrop onClick={modalCloseHandler} ></Backdrop>
            <ModalBody onClick={modalCloseHandler} messages={props.messages}/> */}
            
        </>


    )
}

export default Modal;