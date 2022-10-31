package com.example.backend.service;

import com.example.backend.model.FavoriteNft;
import com.example.backend.repository.FavoriteNftRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteNftService {

    private  final FavoriteNftRepo favoriteNftRepo;

    @Autowired
    public FavoriteNftService(FavoriteNftRepo favoriteNftRepo){this.favoriteNftRepo =favoriteNftRepo;}

    public FavoriteNft addNft (FavoriteNft favoriteNft) {return favoriteNftRepo.save(favoriteNft);}

    public List<FavoriteNft> getAllNfts(){return favoriteNftRepo.findAll();}


    /* public void deleteNft(String name) {return; favoriteNftRepo.deleteByName(name);}*/
}
