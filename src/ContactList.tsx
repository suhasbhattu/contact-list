import React, { useEffect, useRef, useState } from "react";
import Contact from "./Contact";
import './ContactList.css';
import { populateContact } from "./MockData";

function ContactList() {

    const

        [start, setStart] = useState<number>(0),

        [loading, setLoading] = useState(true),

        limit = 20,

        data = useRef(populateContact(start, limit)),

        getList = () => {
            return data.current.map((contact, index) => <Contact key={`key${index}`} name={contact.name} />)
        },

        onScrollList = (event: any) => {
            const list = event.target;
            if (list.scrollHeight - list.scrollTop === list.clientHeight) {
                setStart(start + limit);
            }
        };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if (start !== 0) {
                data.current = data.current.concat(populateContact(start, limit));
            }
            setLoading(false);
        }, 1000);
    }, [start]);

    return (
        <div className="contact-container">
            <div className="contact-list" onScroll={onScrollList}>
                {getList()}
            </div>
            <div className="loading" style={{ display: loading ? 'block' : 'none' }}>
                <h5>Loading...</h5>
            </div>
        </div>
    )
}

export default ContactList;