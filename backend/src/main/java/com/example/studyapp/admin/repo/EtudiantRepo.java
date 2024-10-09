package com.example.studyapp.admin.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.studyapp.admin.models.Etudiant;

public interface EtudiantRepo extends MongoRepository<Etudiant, String>{

}
