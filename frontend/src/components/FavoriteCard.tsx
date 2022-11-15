import {FavoriteNft} from "../model/FavoriteNft";
import "./FavoriteCard.css"




type FavoriteCardProps = {
    favoriteNft: FavoriteNft;
    getAllFavorite: ()=>void
    addNft:()=>void
    deleteNft: (id:string)=>void;

}

export  default function FavoriteCard(props: FavoriteCardProps){


    return (

        <div className="card mb-3">
        <img src={props.favoriteNft.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="dropdown">
                    <span>Show me the Price</span>
                    <div className="dropdown-content">
                        <p>{props.favoriteNft.auctionprice}</p>
                    </div>
                </div>
                <h5 className="card-name">{props.favoriteNft.name}</h5>
                <p className="card-text">{props.favoriteNft.description}</p>
                <p className="card-text"><small className="text-muted">Last updated 30 second ago</small></p>
                <button onClick={()=>props.deleteNft(props.favoriteNft.id)}>Delete</button>
                <label className="like">
                    <input type="checkbox"/>
                    <div className="hearth"/>
                </label>

             </div>
        </div>)

};


