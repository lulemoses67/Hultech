import React, { Component } from 'react';
import Hero from "./partials/Hero.js";
import Featured from './partials/Featured.js';
import WhyUs from './partials/WhyUs.js';
import Feedback from './partials/Feedback.js';

class Home extends Component {
    render() {
        return (
            <>
                <Hero bgimg="https://images.pexels.com/photos/8088449/pexels-photo-8088449.jpeg" title="Turning Clicks into Clients" body="Move and Grow your business online Today with our experts"/>
                <section className='reveal active fade-in'>
                    <div className="container">
                        <h3 className="section-title ">Ultimate D<span className="text-primary">igital Growth Parnter</span></h3>
                        <div className="row-content">
                        <p className="">[ For you next W<span className="text-primary">eb Solution ]</span></p>
                        <div className="row align-center justify-center  row-content">
                            <div className="col-4 d-none-xs">
                                <img src="https://pixabay.com/get/g6e532b9cdf900017535879d528af0d94febfb5d426ef102c18b92870c361f847b9f0cabfb601456a0566a7ed9b8add2f_640.png" alt="laptopman" />
                            </div>
                            <div className="col-8 col-xs-12">
                                <div className="gap-fix">
                                    <p>Our commitment to high-performance architecture and technical innovation ensures that your digital presence leads the market. From scalable enterprise frameworks to immersive user interfaces, our expert developers deliver nothing short of digital excellence.</p>
                                </div>
                                <div className="btn-group-rt">
                                    <button className="btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>  
                <Featured />
                <WhyUs/>
                <Feedback />
                
            </>
        );
    }
}

export default Home;
