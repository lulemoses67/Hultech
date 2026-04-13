import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <>
                <section className="reveal active fade-in row align-center">
                    <div className="container">
                        <div className="row-content">
                            <h2 className='x4'>Our Projects</h2>
                            <p>Our commitment to high-performance architecture and technical innovation ensures that your digital presence leads the market. From scalable enterprise frameworks to immersive user interfaces, our expert developers deliver nothing short of digital excellence</p>
                        </div>
                    </div>
                </section>
                <section className="reveal fade-in">
                    <div className="container">
                        <div className="row justify-center row-content">
                            <div className="col-3 col-md-6 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Clock</h2>
                                    <p>
                                        <i className="fab fa-html5"></i>
                                        <i className="fab fa-css"></i>
                                        <i className="fab fa-js"></i> 
                                        <i className="fab fa-github"></i>
                                    </p>
                                    <p>Anolog clock designed using html, css and javascript give you realtime update according your time zones, 
                                    it's open source and is easy to intergrate.</p>
                                </div>
                            </div>
                            <div className="col-3 col-md-6 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Calculator</h2>
                                    <p>
                                        <i className="fab fa-js"></i> 
                                        <i className="fab fa-react"></i>
                                        <i className="fab fa-sass"></i>
                                        <i className="fab fa-github"></i>
                                    </p>
                                    <p>ODigital calculator app that can perform althemic tasks very fast and effecient
                                    designed using html, css and javascript.</p>
                                </div>
                            </div>
                            <div className="col-3 col-md-6 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Hulstrap</h2>
                                    <p>
                                        <i className="fab fa-node-js"></i> 
                                        <i className="fab fa-css"></i>
                                        <i className="fab fa-sass"></i>
                                        <i className="fab fa-github"></i>
                                    </p>
                                    <p>A CSS Library used to develop awesome user interface and user experience like this site is using.Developed in sass and some javascript, it can be modified and very easy to use by adding classname to elements.</p>
                                </div>
                            </div>
                            <div className="col-3 col-md-6 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Personal site</h2>
                                    <p>
                                        <i className="fab fa-js"></i> 
                                        <i className="fab fa-react"></i>
                                        <i className="fab fa-sass"></i>
                                        <i className="fab fa-github"></i>
                                    </p>
                                    <p>An awesome Portfolio for any professional worker to highlight his or her experience and projects done in certain feilds. Responsivr and also designed using Hulstrap our css library</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Portfolio;
