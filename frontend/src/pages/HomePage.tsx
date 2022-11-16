import {Container} from "react-bootstrap";
import React from "react";
import {useNavigate} from "react-router-dom";

import {FavoriteNft} from "../model/FavoriteNft";
import Footer from "../components/Footer";
import "./HomePage.css";
import Carousel from "../components/Carousel";






type HomePageProps ={

    favoriteNft: FavoriteNft;
}

 export default function HomePage (props: HomePageProps) {
     const navigate= useNavigate();

     const handleClick1 = () => {
         navigate("/favorite")
     }
     const handleClick2 = () => {
         navigate("/collection")
     }
         const handleClick3 = () => {
             navigate("/search")

         }
     return (
         <Container>
             <Carousel/>
             <div className="HomePage">
                 <div className={"homePage-list"}>
                     <button type = "button"className={"favorite-name"} onClick ={handleClick1}>Favorite<span className="badge text-bg-warning"></span>
                     </button>
                     <button className={"collection-name"} onClick ={handleClick2}>Collection</button>
                     <button className={"search-name"}  onClick={handleClick3}>Search</button>
                     <button className={"logIn-name"} >Login</button>
                 </div>
             </div>
             <Footer/>
         </Container>)
 };





