package com.example.backend.repository;

import com.example.backend.model.FavoriteNft;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteNftRepo extends MongoRepository <FavoriteNft, String>{

}
