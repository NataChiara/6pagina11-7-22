import React from "react";
import './Containers.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="body">
                <br/><br/>
                <h2>Argentina según Wikipedia</h2>
                <br/>
                <p>Argentina es un país sudamericano de gran envergadura con un terreno que incluye las montañas de los Andes, lagos glaciales y praderas en las Pampas, la tierra tradicional de pastoreo de su famoso ganado. El país es conocido por el baile y la música del tango. Su gran capital cosmopolita, Buenos Aires, se centra en la Plaza de Mayo, rodeada por imponentes edificios del siglo XIX, como la Casa Rosada, el icónico palacio presidencial.</p>
            </div>
            
            <Footer/>
        </React.Fragment>
    )
}
export default Home;