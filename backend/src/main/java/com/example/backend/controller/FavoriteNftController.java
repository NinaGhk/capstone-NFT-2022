package com.example.backend.controller;

import com.example.backend.model.FavoriteNft;
import com.example.backend.service.FavoriteNftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nft/favorite")
public class FavoriteNftController {

    private final FavoriteNftService favoriteNftService;

    @Autowired
    public FavoriteNftController(FavoriteNftService favoriteNftService){this.favoriteNftService = favoriteNftService;}

    @PostMapping
    public FavoriteNft addNft(@RequestBody FavoriteNft favoriteNft){return favoriteNftService.addNft(favoriteNft);}

    @GetMapping
    public List<FavoriteNft> getAllNfts (){return favoriteNftService.getAllNfts();}

    @DeleteMapping ("/{id}")
    public void deleteNft(@PathVariable String id) {favoriteNftService.deleteNft(id);}
    };

