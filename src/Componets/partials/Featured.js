

const Featured = () => {
    return (
            <section className="reveal fade-in bg-detail text-white">
                <div className="container">
                    <h3 className="section-title">Lighting up Yo<span className="text-primary">ur Vision</span></h3>
                    <p>[ Transforming brands into di<span className="text-primary">gital assets ]</span></p>            
                    <div className='row-content justify-center row'>
                        <div className="col-4 col-md-6 col-xs-12">
                            <div className="gap-fix">
                                <div className="gap-fix box-shadow-light">
                                    <br/>
                                    <h3>Web development <i className='fa-solid fa-tasks text-warning'></i></h3>
                                    <p>We plan, create and code websites and web pages, many of which combine text with pictures, graphics and video clips.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-6 col-xs-12">
                            <div className="gap-fix">
                                <div className="gap-fix box-shadow-light">
                                    <br/>
                                    <h3>Content Management <i className='fa-solid fa-layer-group text-warning'></i></h3>
                                    <p>Building a brand identity and online presence through the creation and sharing of multimedia content online.</p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-md-6 col-xs-12">
                            <div className="gap-fix">
                                <div className="gap-fix box-shadow-light">
                                    <br/>
                                    <h3>Graphics Design <i className='fa-solid fa-edit text-warning'></i></h3>
                                    <p>We visualize and create graphics including illustrations, logos, layouts and photos. We design most of the graphics we use in our programs.</p>
                                    <br/>
                                </div>
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
