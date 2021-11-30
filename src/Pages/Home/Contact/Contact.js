import React from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_as24jxl', 'template_r40d4ha',
            e.target,
            'user_2gJ559BWejZGe6md2Ma1g'
        )
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err));
    }

    return (
        <div className="container-border" id="contact"
            style={{
                marginTop: "50px",
                width: '50%,',
                backgroundColor: "black",
                backgroundPosition: "center",
                backgroundSize: "cover",

            }
            }>

            <h1 style={{ marginTop: '25px', color: "white" }}>Contact form</h1>
            <form className="row"
                style={{ margin: "25px 300px 75px 300px", color: "white" }} onSubmit={sendEmail}>
                <label>name</label>
                <input type="text" name="name" className="form-control" />

                <label>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label>Message</label>
                <textarea name='message' rows='4' className="form-control" />

                <input type='submit' value='send' className="form-control btn btn-secondary mb-5" style={{ marginTop: '30px' }} />
            </form>

        </div>
    );
};

export default Contact;