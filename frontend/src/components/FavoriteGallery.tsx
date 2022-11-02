import {FavoriteNft} from "../model/FavoriteNft";
import FavoriteCard from "./FavoriteCard";



type FavoriteGalleryProps = {
    favoriteNfts:FavoriteNft[];
}

export default  function FavoriteGallery(props:FavoriteGalleryProps){

    return (
     <div className ="favoritecard">
         {props.favoriteNfts.map((FavoriteNft) =>
             <div className={"favoritecard"}>
                 <FavoriteCard favoriteNft={FavoriteNft}/>
             </div>)}
     </div>
    )}

        // line 17 <p>{FavoriteNft.name}</p>)}