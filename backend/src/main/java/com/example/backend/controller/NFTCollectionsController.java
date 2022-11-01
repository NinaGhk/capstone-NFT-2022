package com.example.backend.controller;

import com.example.backend.model.MetadataFromCollection;
import com.example.backend.model.NFTCollectionsElement;
import com.example.backend.model.NFTCollectionsResponseElement;
import com.example.backend.service.CollectionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api.nftport.xyz/v0/")
public class NFTCollectionsController {

    private CollectionsService collectionsService;

    @Autowired
    public NFTCollectionsController(CollectionsService service){
        this.collectionsService= service;
    }

    @GetMapping("")
    public MetadataFromCollection getAllNfts(){
        return collectionsService.getAllNfts();
    }

    @GetMapping(path="{query}")
    public List<NFTCollectionsElement> getNftsByQuery(@PathVariable String query){
        return collectionsService.getNftsByQuery(query);
    }

}
