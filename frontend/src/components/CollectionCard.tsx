import {CollectionNft} from "../model/CollectionNft";
import {Link} from "react-router-dom";


type CollectionCardProps ={
    collectionNft: CollectionNft;
}

export  default function CollectionCard(props:CollectionCardProps){

    return (
        <div className ={"collectioncard"}>
            <Link to ={"collection/" + props.collectionNft.metadata}>
                <h3>{props.collectionNft.chain}</h3>
                <h3>{props.collectionNft.contract_address}</h3>
                <h3>{props.collectionNft.token_id}</h3>
                <h3>{props.collectionNft.metadata_url}</h3>
                <h3>{props.collectionNft.file_url}</h3>
                <h3>{props.collectionNft.animation_url}</h3>
                <h3>{props.collectionNft.cached_file_url}</h3>
                <h3>{props.collectionNft.cached_animation_url}</h3>
                <h3>{props.collectionNft.updated_date}</h3>

            </Link>


        </div>)

}