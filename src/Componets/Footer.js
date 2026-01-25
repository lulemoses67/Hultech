

const Footer = () => {
    return (
        <>
            <footer className="bg-dark reveal fade-in text-white">
                <section>
                    <div className="container">
                        <h1>Hultech</h1>
                        <p>We are a tech company based in Kampala Uganda specialised in web development (websites, web application, mobile apps and other customs software).</p>
                        <div>
                            <h2>Get in Touch</h2>
                            <p><i className="fab fa-whatsapp text-success"></i> <a href="tel:+256750203055">+256 75023055</a></p>
                            <p><i className="fa-solid fa-envelope text-success"></i> <a href="mailto:lulemoses7@gmail.com"> hultech90@gmail.com</a></p>
                            <p><i className="fa-solid fa-location text-success"></i> Kamapla, Uganda</p>
                        </div>
                    </div>
                </section><hr />
                <div className="container">
                    <p>2026 all rights reserved © hultech <a href="https://github.com/lulemoses67/Hultech"> Source Code</a></p>
                </div>
            </footer>
        </>
    );
}
export default Footer;