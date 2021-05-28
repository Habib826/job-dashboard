import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className="h-100 w-100" style={{backgroundColor: '#95c2de'}}>
            <div className="mainbox">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="err2">4</div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to='/'>Home</Link> and try from there.</p></div>
            </div>
        </section>
    );
};

export default NotFound;