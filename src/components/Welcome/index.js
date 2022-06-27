import React from "react";
import { Link } from 'react-router-dom';

function Welcome({ pageSelected, setPageSelected }) {
    return (
        <section>

            <div>
                <h2> Andres Garza - Zurdoc8</h2>

                <div>
                    <p>WELCOME TO THE SHOW</p>
                </div>
                <div className="button">
                    <button onClick={() => setPageSelected(true)}><Link to={'/about'}>Let's Begin</Link></button>
                </div>
                <div id="headshot">
                <img
                    src="https://user-images.githubusercontent.com/97048430/170190977-96bf83a1-b8bc-40e3-8f37-b8cd66f9bfb2.JPG"
                    alt="Let me introduce myself"
                />
                </div>
            </div>
        </section>
    )
}

export default Welcome;