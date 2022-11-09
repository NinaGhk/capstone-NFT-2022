import {useEffect, useState} from "react";
import axios from "axios";
import {FavoriteNft} from "../model/FavoriteNft";


export default function useFavoriteNfts(){

    const [favoriteNfts,setFavoriteNfts] =useState([])

    const  getAllNfts =()=> {
        axios.get("/api/nft/favorite")
            .then(response => response.data)
            .then(data => setFavoriteNfts(data))
            .catch((error) => console.log(error));
    }


    const addNft = (newFavoriteNft: FavoriteNft)=>{
        axios.post("/api/nft/favorite",newFavoriteNft)
             .then(response => response.data)
             .then(getAllNfts)
             .catch(console.error)
    }
    return {getAllNfts,addNft,favoriteNfts};
}
