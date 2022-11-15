import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function CreateFavoriteNft(){

    const [name,setName] = useState("")
    const [id, setId] =useState("")


    const onNameChange =(event:ChangeEvent<HTMLInputElement>)=>{

        setName(event.target.value)
    }

    const onIdChange =(event:ChangeEvent<HTMLInputElement>)=>{

        setId(event.target.value)
    }

    const onAddNewOne =()=>{

        let newFavoriteNft ={
            name:name,
            id:id,
        }
        axios.post("/api/nft/favorite",newFavoriteNft)
            .then()
    }

    return (
        <div className="new-one">
        <button onClick={onAddNewOne}>Add New One</button>
            <Link to={"/homepage"} className="link-to-themes">
                <button className="btn button-add back-to-homepage-article" >Back to HomePage
                </button>
                <Link to={"/collection"} className ="link-to-collection">
                    <button className="btn button-add back-to-homepage-article" >Go to Collection
                    </button>
                </Link>
            </Link>
        <div className="namechange">
            <input onChange={onNameChange} value ={name}/>
            <input onChange={onIdChange} value ={id}/>


        </div>
        </div>
    )
}