
// import Hero from "./partials/Hero.js";

const Hero = require('./partials/Hero.js');

function Home() {
    return ( 
        <>
                <Hero/>
                <section className='reveal active fade-in'>
                    <div className="container">
                        <h3 className="section-title ">Ultimate D<span className="text-primary">igital Growth Parnter</span></h3>
                        <div className="row-content">
                        <p className="">[ For you next W<span className="text-primary">eb Solution ]</span></p>
                        <div className="row align-center justify-center  row-content">
                            <div className="col-4 d-none-xs">
                                <p>img</p>
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
                
            </>
     );
}

export default Home;

