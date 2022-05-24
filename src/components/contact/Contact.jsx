import React, { useRef } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"


const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault ();

        emailjs.sendForm('service_o5zt9mu', 'template_mqe65q9', form.current, '2hK4QwxJ7Pdcblh6Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    };
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" 
                            className="c-icon"/>
                            +254 700 660 770
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" 
                            className="c-icon"/>
                            info@info.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" 
                            className="c-icon"/>
                            Nairobi, Kenya
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story</b>Get in touch. I 
                        will help you turn your website into a leads powerhouse
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                       <input type="text" placeholder="Name" name="user_name"/>
                       <input type="text" placeholder="Subject" name="user_subject"/>
                       <input type="text" placeholder="Email" name="user_email"/>
                       <textarea rows="5" placeholder="Message"></textarea>
                       <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
