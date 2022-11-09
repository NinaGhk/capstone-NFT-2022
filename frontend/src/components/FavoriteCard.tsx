import {FavoriteNft} from "../model/FavoriteNft";



type FavoriteCardProps ={
    favoriteNft: FavoriteNft;
}

export  default function FavoriteCard(props: FavoriteCardProps){

    return (

        <div className="card mb-3">
        <img src={props.favoriteNft.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-name">{props.favoriteNft.name}</h5>
                <p className="card-text">{props.favoriteNft.description}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>)
}




