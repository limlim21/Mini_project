import React  from "react";
import style from "./Home.css";
import { GiSpellBook } from "react-icons/gi";

const Home = () => {
    return (
        <>
        <div className="d-flex flex-row justify-content-center align-items-start home" 
            style={{Home}}>            
            <header className="header">
                <p className="brand">
                    Magic<GiSpellBook/>
                    <br />
                    <b>BOOK</b> Library</p>
                <p className="brandlt"><b>Read and Buy Books, Here!</b></p>
            </header>
            <br/>
        </div>
        </>
    )
}

export default Home;
