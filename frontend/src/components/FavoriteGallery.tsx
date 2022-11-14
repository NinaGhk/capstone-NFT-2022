import {FavoriteNft} from "../model/FavoriteNft";
import FavoriteCard from "./FavoriteCard";
import "./FavoriteCard.css"
import "./FavoriteGallery.css"
import CreateFavoriteNft from "./CreateFavoriteNft";




type FavoriteGalleryProps = {
    favoriteNfts:FavoriteNft[];
    deleteNft:(id:string) =>void;
    markHeartAsFavorite:(favoriteNfts:FavoriteNft) =>void
}

export default  function FavoriteGallery(props:FavoriteGalleryProps){



    return (
     <div className ="favoritecard">
         {props.favoriteNfts.map((favoriteNft) =>
             <div className={"favoritecard"}>
                 <FavoriteCard favoriteNft={favoriteNft} deleteNft={props.deleteNft} markHeartAsFavorite={props.markHeartAsFavorite}/>
             </div>)}

         <CreateFavoriteNft/>
     </div>
    )}
