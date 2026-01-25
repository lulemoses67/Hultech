import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <>
            <section className='text-dark'>
                <div className="container">
                    <div className="row-content">
                        <div className="gap-fix">
                            <h2 className='x4'>About Hultech</h2>
                            <p>We are a tech company based in Kampala Uganda specialised in web development (websites, web application, mobile apps and other customs software). <br />
                            Our commitment to high-performance architecture and technical innovation ensures that your digital presence leads the market. From scalable enterprise frameworks to immersive user interfaces, our expert developers deliver nothing short of digital excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className='text-dark'>
            <div className="container">
                <div className="row-content">
                    <div className="gap-fix">
                        <h2 className='x4'>What we do</h2>
                        <ul>
                            <li><h3>Web development <i className='fa-solid fa-tasks text-warning'></i></h3></li>
                            <li><p>We plan, create and code websites and web pages, many of which combine text with pictures, graphics and video clips.</p></li>
                            <li><h3>Content Management <i className='fa-solid fa-layer-group text-warning'></i></h3></li>
                            <li><p>Building a brand identity and online presence through the creation and sharing of multimedia content online.</p></li>
                            <li><h3>Graphics Design <i className='fa-solid fa-edit text-warning'></i></h3></li>
                            <li><p>We visualize and create graphics including illustrations, logos, layouts and photos. We design most of the graphics we use in our programs.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
        );
    }
}

export default About;
