import React from "react";
import { Link } from 'react-router-dom';


function Welcome({pageSelected, setPageSelected}) {
    return (
        <section className="section-one">

            <div className="section-one-content">
                <h2> Andres Garza - Zurdoc8</h2>

            <div className="section-one-content-p">
                <p>WELCOME TO THE SHOW</p>
            </div>
            <div className="button">
                <button onClick={() => setPageSelected(true)}><Link to={'/about'}>Let's Begin</Link></button>
            </div>
            </div>
        </section>
    )
}

export default Welcome;