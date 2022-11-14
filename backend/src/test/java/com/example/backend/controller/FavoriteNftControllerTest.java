package com.example.backend.controller;

import com.example.backend.model.FavoriteNft;
import com.example.backend.repository.FavoriteNftRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class FavoriteNftControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private FavoriteNftRepo favoriteNftRepo;

    @DirtiesContext
    @Test
    void addNft() throws Exception {
        //String
        String requestbody = """
                {
                 "id":"10",
                 "name":"Ocean Front",
                 "description":"The picture depicts the fusion of a huge container, a caravan and a tree, standing high in the middle of the sea, very imposing!The founder of TRON photographed Beeple's work Ocean Front. Justin Sun subsequently issued an open letter stating that the auction proceeds will be donated to the Open Earth Foundation to combat the challenges posed by global climate change.",
                 "image":"https://cdni.blockcast.it/wp-content/uploads/2022/01/02220048/image10-1140x1425.jpg",
                "auctionprice":"$6.0 million"
                }
                """;

        String expectedJSON= """
                {
                 "id":"10",
                 "name":"Ocean Front",
                 "description":"The picture depicts the fusion of a huge container, a caravan and a tree, standing high in the middle of the sea, very imposing!The founder of TRON photographed Beeple's work Ocean Front. Justin Sun subsequently issued an open letter stating that the auction proceeds will be donated to the Open Earth Foundation to combat the challenges posed by global climate change.",
                 "image":"https://cdni.blockcast.it/wp-content/uploads/2022/01/02220048/image10-1140x1425.jpg",
                "auctionprice":"$6.0 million"
                }
                """;

        // WHEN THEN
        mockMvc.perform(
                post("/api/nft/favorite")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestbody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }


    }
