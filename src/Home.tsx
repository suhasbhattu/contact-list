import React from "react";
import { Link } from "react-router-dom";
import ContactList from "./ContactList";
import './Home.css';

function Home () {
    return (
        <div className="app-home">
            <div className="app-header">
                <h2 className="app-name">Contact List</h2>
                <Link to="/" className="app-logout">Logout</Link>
            </div>
            <div className="app-content">
                <ContactList />
            </div>
        </div>
    )
}

export default Home;