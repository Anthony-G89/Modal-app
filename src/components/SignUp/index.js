import React, { useState } from "react";
import Modal from "../Modal";
import "./style.css";


function SignUp() {

    const [show, setShow] = useState(false);

    const [userName, setuserName] = useState();
    const [userPassword, setuserPassword] = useState();

    const handleClose = () => setShow(false);




    return (

        <div className="card container">
        < Modal show={show} close={handleClose} />
            <div className="header">
                <h1>Sign Up</h1>
            </div>

            <div className="content">
                <input className="form-control"
                    type="text"
                    placeholder="Enter your name"
                    onChange={e => setuserName(e.target.value)}
                />
                <br />
                <input className="form-control"
                    type="password"
                    placeholder="Enter your password"
                    onChange={e => setuserPassword(e.target.value)}
                />
            </div>

            <div className="footer">
                <button onClick={() => setShow(true)} className="deleteBtn">
                    delete
                </button>

                <div>
                    <h2>Hello {userName}!</h2>
                    <p>Type to see your password <span role="img" alt="Emoji">😀</span>. {userPassword}</p>
                </div>

            </div>
        </div>




    )

}

export default SignUp;