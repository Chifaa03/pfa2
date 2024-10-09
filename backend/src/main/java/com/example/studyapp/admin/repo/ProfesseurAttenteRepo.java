package com.example.studyapp.admin.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.studyapp.admin.models.Professeur;
import com.example.studyapp.admin.models.ProfesseurAttente;

public interface ProfesseurAttenteRepo extends MongoRepository<ProfesseurAttente, String> {
}