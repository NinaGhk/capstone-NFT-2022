import {ChangeEvent, useState} from "react";
import axios from "axios";
import {isNativeError} from "util/types";
import { Link } from "react-router-dom";


export default function CreateFavoriteNft(){

    const [name,setName] = useState("")

    const onNameChange =(event:ChangeEvent<HTMLInputElement>)=>{

        setName(event.target.value)
    }

    const onAddNewOne =()=>{

        let newFavoriteNft ={
            name:name,
           id:""
        }
        axios.post("/api/nft/favorite",newFavoriteNft)
            .then()
    }

    return (
        <div className="namechange">
            <input onChange={onNameChange} value ={name}/>
            <div className="new-one"></div>
            <button onClick={onAddNewOne}>Add New One</button>
            <Link to={"/homepage"} className="link-to-themes">
            <button className="btn button-add back-to-homepage-article" >Back to Articles
            </button>
            </Link>
        </div>
    )
}