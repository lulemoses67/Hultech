import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
            const form = useRef();

            const sendEmail = (e) => {
            e.preventDefault();

            emailjs
            .sendForm('service_wp6p117', 'template_yecbclo', form.current, {
                publicKey: '2cVv8kPPvY6awQBFE',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                form.current.reset()
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
            };
            return (
            <>
                <section className="reveal active fade-in row align-center">
                    <div className="container">
                        <div className="row-content">
                            <h2 className='x4'>Get in Touch</h2>
                            <p>Our commitment to high-performance architecture and technical innovation ensures that your digital presence leads the market. From scalable enterprise frameworks to immersive user interfaces, our expert developers deliver nothing short of digital excellence</p>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="reveal fade-in">
                    <div className="container">
                        <h3 className="x4">Drop your message</h3>
                        <div className="row row-content">
                            <div className="col-12">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-element">
                                        <label htmlFor="fullname">Full name</label>
                                        <input type="text" name="fullname" id="fullname" placeholder="Full name" required />
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Email" required />
                                    </div>
                                    <div className="form-element">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message" required></textarea>
                                    </div>
                                    <div className="btn-group-rt">
                                        <button type="submit" className="btn-primary"><i className="fa fa-angles-right"></i> Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
}

export default Contact;
