
import CollectionCard from "./CollectionCard";
import {CollectionNft} from "../model/CollectionNft";
import {Link} from "react-router-dom";


type CollectionGalleryProps = {
    collectionNfts:CollectionNft[];
}

export default  function CollectionGallery(props:CollectionGalleryProps){

    return (
        <div className="collectionbutton">
            <Link to={"/homepage"} className="link-to-themes">
                <button className="btn button-add back-to-homepage-article" >Back to HomePage
                </button>
            </Link>

        <div className ="collectioncard">
            {props.collectionNfts.map((CollectionNft, index) =>
                <div className={"collectioncard"}>
                    <CollectionCard collectionNft={CollectionNft} key={index}/>
                </div>)}
        </div>
        </div>
    )}
