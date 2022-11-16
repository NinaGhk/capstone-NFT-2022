import {FavoriteNft} from "../model/FavoriteNft";
import FavoriteCard from "./FavoriteCard";
import "./FavoriteCard.css"
import "./FavoriteGallery.css"
import CreateFavoriteNft from "./CreateFavoriteNft";





type FavoriteGalleryProps = {
    favoriteNfts:FavoriteNft[];
    getAllFavorite: ()=>void
    addNft:()=>void
    deleteNft:(id:string) =>void;

}

export default  function FavoriteGallery(props:FavoriteGalleryProps){


    return (
     <div className ="favoritecard">
         <CreateFavoriteNft/>
         {props.favoriteNfts.map((favoriteNft) =>
             <div className={"favoritecard"}>
                 <FavoriteCard favoriteNft={favoriteNft} getAllFavorite={props.getAllFavorite} addNft={props.addNft} deleteNft={props.deleteNft}/>

             </div>)}


     </div>
    )}

