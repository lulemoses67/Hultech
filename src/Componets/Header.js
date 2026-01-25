import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {

    // 1. Initialize state based on current window width
    const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 539);

    // 2. Optimized resize listener
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 539) {
                setIsNavOpen(true);
            } else {
                setIsNavOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toogleNav = () => {
        // window.scrollTo(0,0);
        isNavOpen && window.innerWidth < 538 ? setIsNavOpen(false) : setIsNavOpen(true);
    }
    var navs = document.getElementsByTagName('a');

    for (let i = 0; i < navs.length; i++) navs[i].addEventListener('click', () => window.scrollTo(0,0));
    
    const NavItem = (props) => {
        return (
            <NavLink className="nav-item" to={props.link} onClick={toogleNav}>{props.name}</NavLink>
        );
    }

    return (
        <>
            <header className="bg-light row align-center text-dark">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xs-11 col-lg-4 d-none-md row align-center">
                        <div className="col-2 col-xs-2">
                        </div>
                        <div className="col-10 col-xs-10">
                            <span className="logo">Hul<span className="small">tech</span></span>
                        </div>
                    </div>
                    <div className="col-xs-1 col-md-6  d-none-md d-none-lg">
                        <span className="btn-menu" onClick={toogleNav}>   
                            {!isNavOpen && <i className="fa fa-bars" ></i>}
                            {isNavOpen && <i className="fa fa-close" ></i>}
                        </span>
                    </div>
                    <div className="col-xs-12 s col-md-12 col-lg-8">
                    {isNavOpen && <nav>
                            <ol className="nav-bars">
                                <NavItem link="/" name="Home"/>
                                <NavItem link="/about" name="About"/>
                                <NavItem link="/gallery" name="Portfolio"/>
                                <NavItem link="/contact" name="Contact"/>
                            </ol>
                        </nav>}
                    </div>
                </div>
            </div>
            </header><br />
        </>
    );
}

export default Header;