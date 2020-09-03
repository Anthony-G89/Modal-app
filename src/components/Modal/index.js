import React from "react";
import "./style.css";



const Modal = ({show, close}) => {

    return (
        <div className="modal-wrapper something"
            style={{
                transform: show ? "translateY(0vh)" : "translateY(-100vh)",
                display: show ? "block" : "none"
            }}
        >
            <div className="modal-header">
                <p>Delete User</p>
                <span onClick={close} className="closeWindowBtn">X</span>
            </div>

            <div className="modal-content">
                <div className="modal-body">
                    <p>
                        Are you sure you want to delete User. 
                    </p>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="close-modal-btn">Close</button>
                </div>

            </div>


        </div>
    )

}

export default Modal;
