import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <>
                <section className="reveal active fade-in hero row align-center text-white" style={{'backgroundImage': `url("https://images.pexels.com/photos/31505955/pexels-photo-31505955.jpeg")`}} >
                <div className="container">
                    <div className="row-content">
                        <h2 className='x4'>Turning Clicks into Clients</h2>
                        <p>Move and Grow your business online Today with our expert.</p>
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
}

export default Hero;
