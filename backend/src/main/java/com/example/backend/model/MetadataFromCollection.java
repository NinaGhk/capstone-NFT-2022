package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MetadataFromCollection {

    private String display_type;
    private String trait_type;
    private String value;
    private String background_image;
    private String description;
    private String external_url;
    private String external_link;
    private String image;
    private String image_url;
    private String name;

}
