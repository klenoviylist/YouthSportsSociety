import React from 'react';
import { useState } from 'react';
import { init, send } from 'emailjs-com';
import './Contact.scss'


function Contact() {

    const USER_ID = process.env.REACT_APP_USER_ID;
    init(USER_ID);
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;


    const [toSend, setToSend] = useState({
        user_name: '',
        user_email: '',
        user_message: ''
    });

    const handleChange = (event) => {
        setToSend({
            ...toSend,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        send(
            SERVICE_ID,
            TEMPLATE_ID,
            toSend,
            USER_ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        setToSend({
            user_name: '',
            user_email: '',
            user_message: ''
        });
        alert("Message sent!");
    };


    return (

        <div className="container-md contact-form">
            <h2 className="featurette-heading contact-heading page-title">Contact us</h2>
            <form className="needs-validation" onSubmit={onSubmit} novalidate>
                <div className="mb-3">
                    <label for="validationCustom01" className="form-label p-text">Your name</label>
                    <input
                        type="text"
                        name="user_name"
                        className="form-control"
                        id="validationCustom01"
                        value={toSend.user_name}
                        onChange={handleChange}
                        placeholder="name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label for="validationCustom02" className="form-label p-text">Email address</label>
                    <input
                        type="email"
                        name="user_email"
                        className="form-control"
                        id="validationCustom02"
                        value={toSend.user_email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label for="validationCustom03" className="form-label p-text">Your message</label>
                    <textarea
                        type="text"
                        name="user_message"
                        className="form-control"
                        id="validationCustom03"
                        value={toSend.user_message}
                        onChange={handleChange}
                        rows="3"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-lg px-4 me-sm-3">Send</button>
            </form>

        </div>
    )
}

export default Contact;