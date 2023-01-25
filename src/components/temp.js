import React, { useEffect } from 'react';
import { useState } from "react";

const Temp = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

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
        //name
        if (!nameError)
            makeElementFeedbackValid("validationCustom01");
        else
            makeElementFeedbackInvalid("validationCustom01")

    }

    const checkValidity = () => {

    }

    const handle = async (e) => {
        e.preventDefault();
        if (nameError)
            console.log(nameError)
        if (!nameError)
            console.log("no error")
        manageInputsFeedbacks();
    }

    useEffect(() => {
        if (name.length < 3)
            setNameError("your name must be at least 3 chars");
        if (name.length >= 3)
            setNameError("")
    }, [name])

    return (
        <div>
            <div>Login page --{'>'}
                <a href="/login">login</a>
            </div>

            <hr></hr>

            <div>Register page --{'>'}
                <a href="/register">register</a>
            </div>

            <hr></hr>

            <div>Event setup page --{'>'}
                <a href="/eventSetup">eventSetup</a>
            </div>

            <hr></hr>

        </div>
    )
};
export default Temp;