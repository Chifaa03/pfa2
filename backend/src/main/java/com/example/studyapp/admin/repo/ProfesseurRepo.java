package com.example.studyapp.admin.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.studyapp.admin.models.Professeur;

public interface ProfesseurRepo extends MongoRepository<Professeur, String> {
}