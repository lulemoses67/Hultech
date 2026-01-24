

const Featured = () => {
    return (
            <section className="reveal active fade-in">
                <div className="container">
                    <h3 className="section-title">Lighting up Yo<span className="text-primary">ur Vision</span></h3>
                    <p>[ Transforming brands into di<span className="text-primary">gital assets ]</span></p>            
                    <div className='row-content row'>
                        <div className='col-4'>
                            <div className='gap-fix'>
                            <img src="https://images.pexels.com/photos/1581634/pexels-photo-1581634.jpeg" alt="g" />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='gap-fix'>
                            <img src="https://images.pexels.com/photos/1581634/pexels-photo-1581634.jpeg" alt="g" />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='gap-fix'>
                            <img src="https://images.pexels.com/photos/1581634/pexels-photo-1581634.jpeg" alt="g" />
                            </div>
                        </div>
                    </div>
                    <div className="btn-group-rt">
                        <button className="btn-primary">Gallery</button>
                    </div>
                </div>
            </section>
    );
}

export default Featured;
