package com.example.backend.repository;

import com.example.backend.model.NFTCollectionsElement;
import com.example.backend.model.NFTCollectionsResponseElement;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectionRepo extends MongoRepository<NFTCollectionsElement, String> {

}
