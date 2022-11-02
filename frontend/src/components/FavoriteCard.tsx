import {FavoriteNft} from "../model/FavoriteNft";
import {Link} from "react-router-dom";


type FavoriteCardProps ={
    favoriteNft: FavoriteNft;
}

export  default function FavoriteCard(props: FavoriteCardProps){

    return (
        <div className ={"favoritecard"}>
            <Link to ={"favorite/" + props.favoriteNft.id}>
                <h3>{props.favoriteNft.name}</h3>
                <h3>{props.favoriteNft.description}</h3>
                <p>{props.favoriteNft.auctionprice}</p>
                <img src ={props.favoriteNft.image}/>

            </Link>


        </div>)

}