import React from 'react';

const Hero = (props) => {
    return (
        <>
            <section className="reveal active fade-in hero row align-center" style={{'backgroundImage': `url("${props.bgimg}")`}} >
            <div className="container">
                <div className="row-content">
                    <h2 className='x4'>{props.title}</h2>
                    <p>{props.body}</p>
                    <div className="btn-group-rt">
                        <a href="/contact" className="btn-detail">About Us</a>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Hero;
