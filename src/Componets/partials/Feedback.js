import React from 'react';

const Feedback = () => {
    return (
        <section className='reveal fade-in'>
            <div className="container">
                <h3 className="section-title "><span className='text-primary'>Our B</span>log</h3>
                <p>Keep updated with all tech news</p>
                <div className='row-content row'>
                <div className='col-4 col-md-6 col-xs-12'>
                        <div className='gap-fix'>
                            <img src="https://images.pexels.com/photos/30530416/pexels-photo-30530416.jpeg" alt="" />
                            <h2>The Human Edge</h2>
                            <p>As AI handles the "boring" 70% of our daily tasks, the value of human judgment has skyrocketed. In 2026, the most successful individuals are those who have mastered "AI literacy"—the ability to steer these powerful tools toward more meaningful, creative, and human-centered goals.</p>
                        </div>
                    </div>
                    <div className='col-4 col-md-6 col-xs-12'>
                        <div className='gap-fix'>
                            <img src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg" alt="" />
                            <h2>Digital strategies to grow your b'ss</h2>
                            <p>In 2026, digital strategy has moved past simple "online presence" to ecosystem orchestration. Growing a business now requires integrating autonomous AI, video-first discovery, and trust-based data models.</p>
                        </div>
                    </div>
                    <div className='col-4 col-md-6 col-xs-12'>
                        <div className='gap-fix'>
                            <img src="https://images.pexels.com/photos/14348488/pexels-photo-14348488.jpeg" alt="" />
                            <h2>The Future: CBDCs and Beyond</h2>
                            <p>Most major banks have now fully integrated with mobile money platforms, allowing users to move funds between traditional bank accounts and digital wallets with a single tap</p>
                        </div>
                    </div>
                </div>
                <div className="btn-group-rt">
                    <a className='btn-detail' href="/contact"><i className="fa-solid fa-circle-arrow-right"></i> All Blogs</a>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
