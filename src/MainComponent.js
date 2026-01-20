import { Component } from "react";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Hero from "./Componets/Hero";
import Home from "./Componets/Home";

class MainComponent extends Component {
    state = {  } 
    render() { 
        return (

            <>
             <Header/>
             <main>
                <Hero/>
                <Home />
             </main>
             <Footer/>
            </>

        );
    }
}
 
export default MainComponent;