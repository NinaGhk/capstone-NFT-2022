package com.example.backend.api;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.web.reactive.function.client.WebClient;

public class NftApiService {

    private final WebClient webClient;

    @Value("${NFT_PORT_API_KEY}")

    private String nftPortApiKey;

    public NftApiService(WebClient webClient){
        this.webClient = webClient;
    }
}