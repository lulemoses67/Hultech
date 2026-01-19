import { Component } from "react";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Hero from "./Componets/Hero";

class MainComponent extends Component {
    state = {  } 
    render() { 
        return (

            <>
             <Header/>
             <main>
                <Hero/>
             </main>
             <Footer/>
            </>

        );
    }
}
 
export default MainComponent;