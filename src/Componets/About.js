import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <>
            <section className='"reveal active fade-in'>
                <div className="container">
                    <div className="row-content">
                        <div className="gap-fix">
                            <h2 className='x4'>About Hultech</h2>
                            <p>We are a tech company based in Kampala Uganda specialised in web development (websites, web application, mobile apps and other customs software). <br />
                            Our commitment to high-performance architecture and technical innovation ensures that your digital presence leads the market. From scalable enterprise frameworks to immersive user interfaces, our expert developers deliver nothing short of digital excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className='"reveal fade-in'>
                <div className="container">
                    <div className="row-content">
                        <div className="gap-fix">
                            <h2 className='x4'>What we do</h2>
                            <ul>
                                <li><h3>Web development <i className='fa-solid fa-tasks text-warning'></i></h3></li>
                                <li><p>We plan, create and code websites and web pages, many of which combine text with pictures, graphics and video clips.</p></li>
                                <li><h3>Content Management <i className='fa-solid fa-layer-group text-warning'></i></h3></li>
                                <li><p>Building a brand identity and online presence through the creation and sharing of multimedia content online.</p></li>
                                <li><h3>Graphics Design <i className='fa-solid fa-edit text-warning'></i></h3></li>
                                <li><p>We visualize and create graphics including illustrations, logos, layouts and photos. We design most of the graphics we use in our programs.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className='"reveal fade-in'>
                <div className="container">
                    <div className="row-content">
                        <h2>WEB DEVELOPMENT TERMS AND CONDITIONS</h2>
                        <p>These Web Development Terms and Conditions ("Agreement") govern all web design, development, and related
                        services provided by Hultech ("Developer") to its clients ("Client").
                        </p>
                    </div>
                    <div className="row-content">
                        <div className="gap-fix">
                            <h3>1. DEFINITIONS AND ACCEPTANCE</h3>
                            <p>This Agreement consists of these Terms and Conditions together with any applicable Statement of Work (SOW). Acceptance occurs upon signing an SOW, approving a proposal, or making payment.</p>
                        </div>
                        <div className="gap-fix">
                            <h3>2. FEES AND PAYMENT</h3>
                            <p><b>Design Preview Phase.</b> Hultech will begin by creating an initial design concept or visual demo for the Client’s review</p>
                            <p><b>First Payment (30%)</b> Upon approval of the design and confirmation to proceed, the Client shall pay thirty percent (30%) of the total project fee to continue with development.</p>
                            <p><b>Demo Go-Live Payment (30%).</b> An additional thirty percent (30%) payment is due when a functional demo orstaging version of the website is presented for go-live review.
                            </p>
                            <p><b>Final Payment (40%).</b> The remaining forty percent (40%) balance is due upon final delivery. The completed website, source files, and live deployment will only be released after full payment is received.
                            </p>
                            <p><b>Late PAyments</b> Invoices unpaid after fourteen (14) days may incur a late fee of 1.5% per month.</p>
                        </div>
                        <div className="gap-fix">
                            <h3>3. SCOPE AND REVISIONS</h3>
                            <p>Services are limited to the agreed scope. Two rounds of revisions are included. Additional revisions are billable. Client delays exceeding fourteen (14) days may result in suspension or restart fees.</p>
                        </div>
                        <div className="gap-fix">
                            <h3>4. INTELLECTUAL PROPERTY</h3>
                            <p>Ownership of bespoke work transfers upon full payment. Hultech retains ownership of pre-existing tools,
                            frameworks, and proprietary materials and may display the project in its portfolio.</p>
                        </div>
                        <div className="gap-fix">
                            <h3>5. ACCESSIBILITY AND COMPLIANCE</h3>
                            <p>Hultech uses commercially reasonable efforts to align with WCAG 2.2 Level AA standards and applicable data
                            protection laws. AI-generated elements will be disclosed where required.</p>
                        </div>
                        <div className="gap-fix">
                            <h3>6. HOSTING AND MAINTENANCE</h3>
                            <p>Hosting and post-launch maintenance are not included unless agreed separately. Hultech is not liable for
                            third-party hosting failures.</p>
                        </div>
                        <div className="gap-fix">
                            <h3>7. LIMITATION OF LIABILITY</h3>
                            <p>Hultech’s total liability is limited to the total fees paid for the specific project.</p>
                        </div>
                        <div className="gap-fix">
                            <h3>8. TERMINATION</h3>
                            <p>Either party may terminate with thirty (30) days’ written notice. The Client must pay for all work completed up to termination. Deposits are non-refundable.</p>
                        </div>
                        <div className="gap-fix">
                            <h3>9. GOVERNING LAW</h3>
                            <p>This Agreement shall be governed by the laws of the Republic of Uganda</p>
                        </div>
                        <div className="gap-fix">
                            <h3>ACCEPTANCE</h3>
                            <p>By approving a proposal, signing an SOW, or making payment, the Client agrees to these Terms and Conditions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
        );
    }
}

export default About;
