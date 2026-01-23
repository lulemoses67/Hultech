import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Notfound extends Component {
    render() {
        return (
            <section className="hero d-flex text-center reveal active fade-in">
            <div className="container">
                <p className="title text-detail">SORRY THAT PAGE NOT FOUND</p>
                <div className="btn-group">
                    <Link to="/" className="btn-primary">Go Back Home</Link>
                </div>
            </div>
        </section>
        );
    }
}

export default Notfound;
