import React from "react";
import { FaUserAlt } from "react-icons/fa";
import './Contact.css';

type ContactType = {
    name: string;
}

function Contact (props: ContactType) {
    return (
        <div className="contact">
            <h3 className="user-profile"><FaUserAlt/></h3>
            <h3 className="user-name">{props.name}</h3>
        </div>
    )
}

export default Contact;