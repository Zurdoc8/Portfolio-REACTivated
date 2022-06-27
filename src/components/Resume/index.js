import React from 'react';

function Resume() {
    return (
        <section class="container">
            <h2 className='top-title'>Resume</h2>
            <hr></hr>

            <div>
                <div class="mt-5">
                    <p class="mt-5">
                        <a href='www.linkedin.com/in/andres-garza-web-dev/'>
                        <img src='https://img.icons8.com/fluent/48/000000/linkedin.png' alt='LinkedIn'
                        className='icon'/></a>
                        <a href='https://github.com/Zurdoc8'>
                        <img src = 'https://img.icons8.com/color/48/000000/github--v1.png' alt='Github'
                        className='icon'/></a>
                    </p>
                    <img src = "/Users/andres/Desktop/Bootcamp/projects/Portfolio-REACTivated/src/assets/Resume ANDRES GARZA.pdf" alt='Resume' 
                    className='file'>Download Resume</img>
                </div>
            </div>
        </section>
    )
}

export default Resume;