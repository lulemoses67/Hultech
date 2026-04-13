import React from 'react';
import { Link } from 'react-router-dom';

const Hero = (props) => {
    return (
        <>
            <section className="reveal active fade-in hero row align-center" style={{'backgroundImage': `url("${props.bgimg}")`}} >
            <div className="container">
                <div className="row-content">
                    <h2 className='x4'>{props.title}</h2>
                    <p>{props.body}</p>
                    <div className="btn-group-rt">
                    <Link to={'./about'} className='btn-outline'>About us</Link>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Hero;
