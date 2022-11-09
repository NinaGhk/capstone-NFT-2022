import {Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {FavoriteNft} from "../model/FavoriteNft";
import FavoriteGallery from "../components/FavoriteGallery";
import Carousel from "../components/Carousel";




type FavoriteProps ={
    favoriteNfts: FavoriteNft[];
    getAllFavorite: ()=>void
}

function FavoritePage (props: FavoriteProps){


    useEffect(()=>{props.getAllFavorite()},[])



    return(
        <Container>
            <Container/>
            <Carousel/>
            <Row className = "favorite">

                <FavoriteGallery  favoriteNfts={props.favoriteNfts}/>

            </Row>
        </Container>
    );
}
export default FavoritePage;

