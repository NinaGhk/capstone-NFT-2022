import {useEffect, useState} from "react";
import axios from "axios";







export default function useCollectionNft(){

    const [collectionNfts, setCollectionNfts]=useState([]);

    useEffect(()=>{axios.get("/api/nft")
        .then((response) =>response.data)
        .then((collectionNfts)=>setCollectionNfts(collectionNfts))
        },[])



    return {collectionNfts,};
}





