
import{useNavigate} from "react-router-dom";
import React from "react";
import "./AppPage.css";



function AppPage(){

    const navigate = useNavigate();


    const handleClick =()=>{
        navigate("/HomePage")
    }

    return(

        <div className="App-header">

            <button className="image-button" onClick={handleClick}>
           <img src ="https://en.cryptonomist.ch/wp-content/uploads/2022/08/nft-hacker-1140x600.jpg.webp" alt="nft"/>
            </button>
        </div>
    )

}
export default AppPage;
