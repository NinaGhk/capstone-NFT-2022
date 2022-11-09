import {FavoriteNft} from "../model/FavoriteNft";
import FavoriteCard from "./FavoriteCard";



type FavoriteGalleryProps = {
    favoriteNfts:FavoriteNft[];
}

export default  function FavoriteGallery(props:FavoriteGalleryProps){

    return (
     <div className ="favoritecard">
         {props.favoriteNfts.map((favoriteNft) =>
             <div className={"favoritecard"}>
                 <FavoriteCard favoriteNft={favoriteNft}/>
             </div>)}
     </div>
    )}
