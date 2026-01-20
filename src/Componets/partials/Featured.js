

const Featured = () => {
    return (
            <section className="reveal active fade-in bg-dark text-white">
                <div className="container">
                    <h3 className="section-title text-center">Lighting up Your Vision</h3>
                    <p className="text-center">[ Transforming brands with creative 3D, neon, and plate signage solutions ]</p>            
                    <div className='row-content row'>
                        <div className='col-4'>
                            <div className='gap-fix'>
                            <img src="https://blog.grantmcgregor.co.uk/hubfs/web%20developer.png" alt="hello" />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='gap-fix'>
                            <img src="https://blog.grantmcgregor.co.uk/hubfs/web%20developer.png" alt="hello" />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='gap-fix'>
                            <img src="https://blog.grantmcgregor.co.uk/hubfs/web%20developer.png" alt="hello" />
                            </div>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button className="btn-primary">Gallery</button>
                    </div>
                </div>
            </section>
    );
}

export default Featured;
