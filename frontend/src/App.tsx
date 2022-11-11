import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage"

import useFavoriteNfts from "./hooks/useFavoriteNfts";
import FavoritePage from "./pages/FavoritePage";
import useCollectionNft from "./hooks/useCollectionNft";
import CollectionPage from "./pages/CollectionPage";




export default function App() {

    const{getAllNfts,favoriteNfts,deleteNft,favoriteNft}=useFavoriteNfts();
    const {collectionNfts} =useCollectionNft();

    return (
        <div className="App">
            <header className="App-header">
                <h1 className={"App-title"}> NFT World </h1>

                <HashRouter>
                    <Routes>
                        <Route path="/" element={<AppPage/>}/>
                        <Route path ="/homepage" element = {<HomePage favoriteNft={favoriteNft}  />}/>
                        <Route path ="/favorite" element ={<FavoritePage favoriteNfts={favoriteNfts} getAllFavorite={getAllNfts} deleteNft={deleteNft} markHeartAsFavorite={getAllNfts}/>}/>
                        <Route path = "/collection" element = {<CollectionPage collectionNfts={collectionNfts} getAllCollection={getAllNfts}/>}/>
                        </Routes>
                </HashRouter>

        </header>

        </div>
    );
};


