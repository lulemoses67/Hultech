

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white">
                <section>
                    <div className="container">
                        <h2 className="row align-center">
                            <div className="col-1">
                                <img src="https://3dsigns.vercel.app/assets/logose-g-_PP4Ut.svg" alt="hello" />
                            </div>
                            <div className="col-11">
                                <h1>3d Signs Uganda</h1>
                            </div>
                        </h2>
                        <p>We offer a comprehensive range of signage solutions, including eye-catching 3D signs, vibrant neon displays, sleek plate signs, and towering pylons. Whether youre looking to enhance your storefront, event space, or corporate office, we have the expertise to bring your vision to life.</p>
                        <div className="row row-content">
                            <div className="col-4 col-md-3 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Shortcuts</h2>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/projects">Gallery</a></li>
                                        <li><a href="/services">Services</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 col-md-3 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Products</h2>
                                    <ul>
                                        <li><a href="/">3d Signs</a></li>
                                        <li><a href="/about">Plyons</a></li>
                                        <li><a href="/projects">Plate Signs</a></li>
                                        <li><a href="/services">Neon Signs</a></li>
                                        <li><a href="/t&cs">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 col-md-6 col-xs-12">
                                <div className="gap-fix">
                                    <h2>Contact</h2>
                                    <p><i class="fa-solid fa-phone text-success"></i> +256 704280086</p>
                                    <p><i class="fab fa-whatsapp text-success"></i> +256 788252428</p>
                                    <p><i class="fa-solid fa-envelope text-success"></i> <a href="dennisbwamiki77@gmail.com"> dennisbwamiki77@gmail.com</a></p>
                                    <p><i class="fa-solid fa-location text-success"></i> Kamapla, Uganda</p>
                                    <p><i class="fab fa-facebook text-primary"></i> <a href="3">3d Signs</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <p>Vynil 3d Signs</p>
                </div>
            </footer>
        </>
    );
}
export default Footer;