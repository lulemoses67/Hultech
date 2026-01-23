import React from 'react';

const Hero = (props) => {
    return (
        <>
            <section className="reveal active fade-in hero row align-center text-white" style={{'backgroundImage': `url("${props.bgimg}")`}} >
            <div className="container">
                <div className="row-content">
                    <h2 className='x4'>{props.title}</h2>
                    <p>{props.body}</p>
                    <div className="btn-group-rt">
                        <a href="/about" className="btn-outline">Contact Us</a>
                        <a href="/contact" className="btn-outline">About Us</a>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Hero;
