import {Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {FavoriteNft} from "../model/FavoriteNft";
import FavoriteGallery from "../components/FavoriteGallery";
import Carousel from "../components/Carousel";




type FavoriteProps ={
    favoriteNfts: FavoriteNft[];
    getAllFavorite: ()=>void
    deleteNft:(id:string) =>void;
    markHeartAsFavorite:(favoriteNfts:FavoriteNft) =>void


}

function FavoritePage (props: FavoriteProps){


    useEffect(()=>{props.getAllFavorite()},[])



    return(
        <Container>
            <Carousel/>
            <Row className = "favorite">
                <FavoriteGallery  favoriteNfts={props.favoriteNfts} deleteNft={props.deleteNft}  markHeartAsFavorite={props.markHeartAsFavorite}/>
            </Row>
        </Container>
    );
}
export default FavoritePage;

