import './contact.css';
import { useRef, useState } from 'react';

const Contact = () => {
    return (

        <div className="contact">
                <div className="contactWrapper">
                    <div className="contact-left">
                        <div className="contactInfo">
                        <h1 className="contactTitle"> Contact Information</h1>
                            <div className="contactInfoItem">
                            720-982-9511
                            </div>
                            <div className="contactInfoItem">
                            yanezjose9087@gmail.com
                            </div>
                            <div className="contactInfoItem">
                            Aurora, CO, United States
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <p className="contactDesc">
                            <b></b> 
                        </p>
                    </div>
                </div>
        </div>

    )
};

export default Contact