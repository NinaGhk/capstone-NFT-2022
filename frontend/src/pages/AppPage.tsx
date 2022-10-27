
import{useNavigate} from "react-router-dom";
import React from "react";
import "./AppPage.css";

type AppPageProps = {}

function AppPage(props: AppPageProps){

    const navigate = useNavigate();
    /*const navigateToHomePage = ()=>{
        navigate("/HomePage")*/


    const handleClick =()=>{
        navigate("/HomePage")
    }

    return(

        <div className="App-header">

            <button className="image-button" onClick={handleClick}>
           <img src ="https://en.cryptonomist.ch/wp-content/uploads/2022/08/nft-hacker-1140x600.jpg.webp" alt="image"/>
            </button>
        </div>
    )

}
export default AppPage;
/* <body>
            <a href="/">HomePage</a>
            </body>*/