import React, {useState, useContext} from "react";
import './Home.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
    const [pink, setPink]= useState(true)

    const bgColor = useContext(ThemeContext)

    return (
        <React.Fragment>
            <Header/>
            <div className={pink? "bg-pink" : "bg-blue"} style={{bgColor}}>
                <br/>
                <button type="button" onClick={()=>setPink
                (!pink)}>{pink? "Pink Mode" : "Blue Mode"}</button>
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