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



    const params = useParams()
    const id = params.id

    if(id === undefined){
        return (<> No id given</>);
    }

    const navigate = useNavigate();


    const handleClick =()=>{
        navigate("/")
    }
    return(
        <Container>
            <Row className = "favorite">

                <FavoriteGallery  favoriteNfts={props.favoriteNfts}/>
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