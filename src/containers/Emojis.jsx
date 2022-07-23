import React, {useState, useEffect } from "react";
import './Emojis.css';
import Header from "../components/Header";
import Footer from "../components/Footer";


const Emojis = () => {

    const [emojis, setEmojis]=useState ([]);

    useEffect ( ()=> {
        fetch ("https://emojihub.herokuapp.com/api/all/")
        .then (response => response.json())
        .then (data => setEmojis(data.results));
    },[]);
    
    return (
        <React.Fragment>
            <Header/>
                <div className="emojis">
                    {emojis.map(emoji =>(
                        <h3>{emoji.name}</h3>))}
                </div>
                <br/>
                <h2>Another link</h2>
                <br/><p>This will be another page with interesting information</p>
            <Footer/>
        </React.Fragment>
       
    );
}

export default Emojis;