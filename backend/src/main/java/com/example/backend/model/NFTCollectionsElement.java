package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class NFTCollectionsElement {

    private String chain;
    private String contract_address;
    private String token_id;
    private String metadata_url;
    private MetadataFromCollection metadata;
    private String file_url;
    private String animation_url;
    private String cached_file_url;
    private String cached_animation_url;
    private String updated_date;
}
