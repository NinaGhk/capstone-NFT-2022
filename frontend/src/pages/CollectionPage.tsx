import {Container, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import {CollectionNft} from "../model/CollectionNft";
import CollectionGallery from "../components/CollectionGallery";


type CollectionProps ={
    collectionNfts:CollectionNft[];
    getAllCollection:()=>void
}

function CollectionPage (props: CollectionProps){

    useEffect(()=>{props.getAllCollection()},[])


    return(
        <Container>
            <Row className = "collection">

                <CollectionGallery  collectionNfts={props.collectionNfts}/>
            </Row>
        </Container>
    );
}
export default CollectionPage;