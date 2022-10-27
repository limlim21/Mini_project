import React  from "react";
import style from "./Home.css";
import { GiSpellBook } from "react-icons/gi";
import Navbar from "./Navbar/Navbar.jsx";

const Home = () => {
    return (
        <>
        <Navbar/>
                   
        <div className="d-flex flex-row justify-content-center align-items-start home" 
            style={{Home}}>
            <header className="header">
                <p className="brand">
                    Magic<GiSpellBook/>
                    <br />
                    <b>BOOK</b> Store</p>
                <p className="brandlt"><b>Search and Buy Books, Here!</b></p>
            </header>
            <br/>
        </div>
        </>
    )
}

export default Home;
