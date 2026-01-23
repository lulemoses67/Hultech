import React from 'react';

const Feedback = () => {
    return (
        <section>
            <div className="container">
                <h3 className="section-title "><span className='text-primary'>Our B</span>log</h3>
                <p>Keep updated with all tech news</p>
                <div className='row-content row'>
                    <div className='col-4 col-md-6 col-xs-12'>
                        <div className='card-feedback '>
                            <p>img</p>
                            <h2>Ai making life easy</h2>
                            <p>"The sleek design of our signage commands attention and perfectly embodies our brand identity."</p>
                        </div>
                    </div>
                    <div className='col-4 col-md-6 col-xs-12'>
                        <div className='card-feedback '>
                            <p>img</p>
                            <h2>Digital strategies to grow your b'ss</h2>
                            <p>"Working with Vynil was a truly exceptional experience from start to finish. Their creative excellence and commitment to quality were evident in every aspect of the project, from the initial consultation to the final installation."</p>
                        </div>
                    </div>
                    <div className='col-4 col-md-6 col-xs-12'>
                        <div className='card-feedback '>
                            <p>img</p>
                            <h2>Mobile Money Transformin economies</h2>
                            <p>"Our new signage has elevated our brand image to new heights. It's a testament to their skill and dedication to delivering top-notch results."</p>
                        </div>
                    </div>
                </div>
                <div className="btn-group-rt">
                    <a className='btn-primary' href="/contact"><i className="fa-solid fa-circle-arrow-right"></i> Readmore</a>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
