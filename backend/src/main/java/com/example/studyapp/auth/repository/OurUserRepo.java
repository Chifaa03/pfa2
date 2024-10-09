package com.example.studyapp.auth.repository;
import com.example.studyapp.auth.model.OurUsers;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface OurUserRepo extends MongoRepository<OurUsers, String> {
    Optional<OurUsers> findByEmail(String email);
}

