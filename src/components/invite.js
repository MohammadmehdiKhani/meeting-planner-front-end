import React from 'react';
import { useState, useEffect } from "react";
import axiox from "axios";

const Invite = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");

    useEffect(() => {
        const myArray = email.split("@");

        if (myArray.length == 2 && myArray[0] && myArray[1])
            setEmailError("");
        else
            setEmailError("Enter a valid email");

        if (!name)
            setNameError("Enter name");
        else
            setNameError("")

    }, [email, name])


    const makeElementFeedbackInvalid = (id) => {
        if (document.getElementById(id).classList.contains('is-valid')) {
            document.getElementById(id).classList.remove('is-valid');
        }
        document.getElementById(id).classList.add('is-invalid');
    }

    const makeElementFeedbackValid = (id) => {
        if (document.getElementById(id).classList.contains('is-invalid')) {
            document.getElementById(id).classList.remove('is-invalid');
        }
        document.getElementById(id).classList.add('is-valid');
    }

    const manageInputsFeedbacks = () => {

        const idArray = ["email-input", "name-input"];
        const errorStateArray = [emailError, nameError];

        for (let i = 0; i < idArray.length; i++) {

            if (!errorStateArray[i])
                makeElementFeedbackValid(idArray[i]);
            else
                makeElementFeedbackInvalid(idArray[i]);
        }

    }

    const handleEventSetupSubmit = async (e) => {
        e.preventDefault();

        try {
            manageInputsFeedbacks();
            if (!emailError && !nameError) {
                alert("ok")
                //const response = await axiox.post("api-url", "this is body");
            }
        }
        catch (error) {
            alert("oops");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <form className="login-form" noValidate onSubmit={handleEventSetupSubmit}>

                        <div className="form-row">
                            <div className="col name-col">
                                <fieldset className="form-group">
                                    <label>
                                        <span className="label-of-event-setup-form-input">Name</span>
                                    </label>
                                    <input className="form-control" type="text" placeholder="Enter a name" id="name-input" onChange={(e) => setName(e.target.value)}></input>
                                    <div className="invalid-feedback">{nameError}</div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="form-row mt-2">
                            <div className="col">
                                <fieldset className="form-group mt-1">
                                    <label>
                                        <span className="label-of-event-setup-form-input">Email</span>
                                    </label>
                                    <input className="form-control mt-1" type="text" placeholder="Enter a email" id="email-input" onChange={(e) => setEmail(e.target.value)}></input>
                                    <div className="invalid-feedback">{emailError}</div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="form-row mt-4 btns-row-of-save-and-quit-of-event-setup">
                            <button className="btn btn-success save-btn-of-event-setup" type="submit">
                                <div className="text-inside-save-btn-and-reset-btn">Save</div>
                            </button>

                            <button className="btn btn-light quit-btn-of-event-setup" type="reset">
                                <div className="text-inside-save-btn-and-reset-btn">Reset</div>
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </div>

    )
};
export default Invite;