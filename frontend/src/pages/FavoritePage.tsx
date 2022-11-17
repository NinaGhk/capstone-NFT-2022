import {Container, Row} from "react-bootstrap";
import React, {useEffect,} from "react";
import {FavoriteNft} from "../model/FavoriteNft";
import FavoriteGallery from "../components/FavoriteGallery";


type FavoriteProps ={
    favoriteNfts: FavoriteNft[];
    getAllFavorite: ()=>void
    addNft:()=>void
    deleteNft:(id:string) =>void;
}

function FavoritePage (props: FavoriteProps){
    /*eslint-disable-next-line*/
    useEffect(()=>{props.getAllFavorite()},[])



    return(
        <Container>

            <Row className = "favorite">
                <FavoriteGallery  favoriteNfts={props.favoriteNfts} getAllFavorite={props.getAllFavorite} addNft={props.addNft} deleteNft={props.deleteNft}/>

            </Row>
        </Container>
    );
}
export default FavoritePage;

