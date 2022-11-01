package com.example.backend.service;

import com.example.backend.model.FavoriteNft;
import com.example.backend.repository.FavoriteNftRepo;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class FavoriteNftServiceTest {

    FavoriteNftRepo favoriteNftRepo = mock(FavoriteNftRepo.class);

    FavoriteNftService favoriteNftService = new FavoriteNftService(favoriteNftRepo);

    @Test
    void addNft_ShouldReturn_AddedNft() {
        //GIVEN
        FavoriteNft favoriteNft = new FavoriteNft("1", "test1", "test2", "test3", "test4");
        when(favoriteNftRepo.save(any())).thenReturn(favoriteNft);

        //WHEN
        FavoriteNft actual = favoriteNftService.addNft(favoriteNft);

        //THEN
        FavoriteNft expected = new FavoriteNft("1", "test1", "test2", "test3", "test4");
        assertEquals(expected, actual);
    }

    @Test
    void getAllNft_ShouldReturn_AllNftInRepo(){
        //GIVEN
        FavoriteNft favoriteNft = new FavoriteNft("1", "test1", "test2", "test3", "test4");
        FavoriteNft favoriteNft2 = new FavoriteNft("2", "test1", "test2", "test3", "test4");

        favoriteNftRepo.save(favoriteNft);
        favoriteNftRepo.save(favoriteNft2);

        when(favoriteNftRepo.findAll()).thenReturn(List.of(favoriteNft, favoriteNft2));

        //WHEN
        List<FavoriteNft> actual = favoriteNftService.getAllNfts();

        //THEN
        List<FavoriteNft> expected = List.of(favoriteNft,favoriteNft2);
        assertEquals(expected, actual);
    }
}