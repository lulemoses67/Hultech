import React from 'react';

const Feedback = () => {
    return (
        <section>
            <div className="container">
                <h3 className="section-title text-center"><span className='text-primary'>Our Cus</span>tomers` <span className='text-primary'>Experience</span></h3>
                <p className='text-center'>Join The Modern World Of Branding</p>
                <div className='row-content row'>
                    <div className='col-4 col-md-6 col-xs-12'>
                        <div className='card-feedback text-center'>
                            <img src="ttps://blog.grantmcgregor.co.uk/hubfs/web%20developer.png" alt="ddd" />
                            <h2>Jackson</h2>
                            <p><small>Manager</small></p>
                            <p>"The sleek design of our signage commands attention and perfectly embodies our brand identity."</p>
                        </div>
                    </div>
                    <div className='col-4 col-md-6 col-xs-12'>
                        <div className='card-feedback text-center'>
                            <img src="ttps://blog.grantmcgregor.co.uk/hubfs/web%20developer.png" alt="ddd" />
                            <h2>Shakirah Jordan</h2>
                            <p><small>Sales Manager</small></p>
                            <p>"Working with Vynil was a truly exceptional experience from start to finish. Their creative excellence and commitment to quality were evident in every aspect of the project, from the initial consultation to the final installation."</p>
                        </div>
                    </div>
                    <div className='col-4 col-md-6 col-xs-12'>
                        <div className='card-feedback text-center'>
                            <img src="ttps://blog.grantmcgregor.co.uk/hubfs/web%20developer.png" alt="ddd" />
                            <h2>Ryan</h2>
                            <p><small>Business Owner</small></p>
                            <p>"Our new signage has elevated our brand image to new heights. It's a testament to their skill and dedication to delivering top-notch results."</p>
                        </div>
                    </div>
                </div>
                <div className="btn-group">
                    <a className='btn-outline' href="/contact"><i class="fa-solid fa-circle-arrow-right"></i> Get Started</a>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
