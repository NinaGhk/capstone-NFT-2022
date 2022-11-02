import {Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {FavoriteNft} from "../model/FavoriteNft";
import FavoriteGallery from "../components/FavoriteGallery";




type FavoriteProps ={
    favoriteNfts: FavoriteNft[];
    getAllFavorite: ()=>void
}

function FavoritePage (props: FavoriteProps){


    useEffect(()=>{props.getAllFavorite()},[])


    /*const navigate = useNavigate();

    const handleClick =()=>{
        navigate("/")*/

    return(
        <Container>
            <Row className = "favorite">

                <FavoriteGallery  favoriteNfts={props.favoriteNfts}/>
                <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2Fbeeple-human-one-christies-auction-1.jpg?q=75&w=800&cbr=1&fit=max"/>

            </Row>
        </Container>
    );
}
export default FavoritePage;

// line 36-39       <button className = "favorite" onClick={handleClick}></button>
//                 </div>
//                 <div className ={"favorite"}>
//                 </div>
// linem 31 <link to ={"/"}>back</link>