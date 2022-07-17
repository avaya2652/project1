import React from "react";
import ReactDOM from "react-dom";
import ModalBackdrop from "./ModalBackdrop";
import ModalBody from "./ModalBody";

const Modal = (props) =>{
    let backdrop = document.getElementById("modalBackdrop");
    let modal = document.getElementById("modalBody");
    return(
        <div className="aaa">
            {ReactDOM.createPortal(<ModalBackdrop onClick={props.onClick}></ModalBackdrop>, backdrop)}
            {ReactDOM.createPortal(<ModalBody onClick={props.onClick}>{props.children}</ModalBody>, modal)}
        </div>
    )
}

export default Modal;