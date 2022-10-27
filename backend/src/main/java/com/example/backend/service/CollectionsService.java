package com.example.backend.service;


import com.example.backend.model.MetadataFromCollection;
import com.example.backend.model.NFTCollectionsElement;
import com.example.backend.model.NFTCollectionsResponseElement;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
public class CollectionsService {

    private final WebClient client = WebClient.create("https://api.nftport.xyz/v0/");

    private MetadataFromCollection AllNfts() {return AllNfts();}



     public List<NFTCollectionsElement> getNftsByQuery(String query){
         NFTCollectionsResponseElement responseElement =
                 client.get()
                         .uri("nfts?chain=ethereum&include=metadata&Authorization=d4f5003c-bf80-4a38-8b65-444e985d8919" + query)
                         .retrieve()
                         .toEntity(NFTCollectionsResponseElement.class)
                         .block()
                         .getBody();
         return responseElement.getNfts();
     }

    public MetadataFromCollection getAllNfts() {
        MetadataFromCollection AllNfts =
                client.get()
                        .uri("nfts?chain=ethereum&include=metadata&Authorization=d4f5003c-bf80-4a38-8b65-444e985d8919")
                        .retrieve()
                        .toEntity(MetadataFromCollection.class)
                        .block()
                        .getBody();
        return AllNfts();

    }
}



