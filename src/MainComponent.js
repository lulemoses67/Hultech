import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Componets/Header.js";
// import Footer from './Componets/Footer.js';
// import Home from "./Componets/Home.js";

const Footer = require('./Componets/Footer.js');
const Home = require('./Componets/Home.js');
const Header = require('./Componets/Header.js');
// import Notfound from './Componets/Notfound';
// import About from './Componets/About';
// import Portfolio from './Componets/Portfolio';
// import Contact from './Componets/Contact';
 
const MainComponent = () => {

        return(
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        {/* <Route path='/about' Component={About} />
                        <Route path='/gallery' Component={Portfolio} />
                        <Route path='/contact' Component={Contact} />
                        <Route path='/*' Component={Notfound} /> */}
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        );
}
export default MainComponent;