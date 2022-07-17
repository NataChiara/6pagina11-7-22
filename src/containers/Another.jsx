import React from "react";
import './Containers.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Another = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="body">
                <br/><br/>
                <h2>Another link</h2>
                <br/><p>This will be another page with interesting information</p>
            </div>
            <Footer/>
        </React.Fragment>
       
    )
}

export default Another;