import React, { Component } from 'react';
import Hero from "./partials/Hero.js";
import Featured from './partials/Featured.js';
import WhyUs from './partials/WhyUs.js';
import Feedback from './partials/Feedback.js';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="text-white">
                <Hero bgimg="https://images.pexels.com/photos/8088449/pexels-photo-8088449.jpeg" title="Turning Clicks into Clients" body="Move and Grow your business online Today with our experts"/>
                </div>
                <section className='reveal fade-in'>
                    <div className="container">
                        <h3 className="section-title ">Ultimate D<span className="text-primary">igital Growth Parnter</span></h3>
                        <div className="row-content">
                        <p className="">[ For you next W<span className="text-primary">eb Solution ]</span></p>
                        <div className="row align-center justify-center  row-content">
                            <div className="col-3 d-none-xs">
                                <img src="./logo.png" alt="laptopman" />
                            </div>
                            <div className="col-9 col-xs-12">
                                <div className="gap-fix">
                                    <p>Our commitment to high-performance architecture and technical innovation ensures that your digital presence leads the market. From scalable enterprise frameworks to immersive user interfaces, our expert developers deliver nothing short of digital excellence.</p>
                                </div>
                                <div className="btn-group-rt">
                                    <button className="btn-detail">Get Started</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>  
                <Featured />
                <WhyUs/>
                <Feedback />
                
            </div>
        );
    }
}

export default Home;
