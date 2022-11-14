
import CollectionCard from "./CollectionCard";
import {CollectionNft} from "../model/CollectionNft";


type CollectionGalleryProps = {
    collectionNfts:CollectionNft[];
}

export default  function CollectionGallery(props:CollectionGalleryProps){

    return (
        <div className ="collectioncard">
            {props.collectionNfts.map((CollectionNft, index) =>
                <div className={"collectioncard"}>
                    <CollectionCard collectionNft={CollectionNft} key={index}/>
                </div>)}
        </div>
    )}
