import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function onSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_4p4pggt', 'template_711vers', e.target, 'user_bssm1tSjhlHODeHG5i2bb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="form" id="contact">
            <h1 className="text-center pt-5 text-primary">Stay Touch With Us</h1>
            <div className="container pt-5 pb-5">
                <form className="text-center" onSubmit={onSubmit}>
                    <input type="hidden" name="contact_number" />
                    <input
                        className="field"
                        type="text"
                        name="user_name"
                        placeholder="Name"
                    /><br />
                    <input
                        className="field"
                        type="email"
                        name="user_email"
                        placeholder="Email"
                    /><br />
                    <textarea
                        className="field"
                        name="message"
                        placeholder="Message"
                    /><br />
                    <input type="submit" className="btn btn-primary" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;