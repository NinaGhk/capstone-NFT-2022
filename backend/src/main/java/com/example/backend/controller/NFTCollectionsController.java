package com.example.backend.controller;

import com.example.backend.model.NFTCollectionsElement;
import com.example.backend.service.CollectionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nft")
public class NFTCollectionsController {

    private CollectionsService collectionsService;

    @Autowired
    public NFTCollectionsController(CollectionsService service){
        this.collectionsService= service;
    }

    @GetMapping
    public List<NFTCollectionsElement> getNftsByQuery(){
        return collectionsService.getNftsByQuery("");
    }

}
