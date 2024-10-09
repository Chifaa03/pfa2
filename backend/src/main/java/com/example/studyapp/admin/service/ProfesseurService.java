package com.example.studyapp.admin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studyapp.admin.models.Professeur;
import com.example.studyapp.admin.repo.ProfesseurRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ProfesseurService {
    @Autowired
    private ProfesseurRepo professeurRepository;

    // Récupérer tous les professeurs
    public List<Professeur> getAllProfesseurs() {
        return professeurRepository.findAll();
    }

    // Créer un nouveau professeur
    public Professeur createProfesseur(Professeur professeur) {
        return professeurRepository.save(professeur);
    }

    // Récupérer un professeur par son ID
    public Optional<Professeur> getProfesseurById(String id) {
        return professeurRepository.findById(id);
    }

    public Professeur updateProfesseur(String id, Professeur professeurDetails) {
        Optional<Professeur> professeurOptional = professeurRepository.findById(id);
        if (professeurOptional.isPresent()) {
            Professeur professeur = professeurOptional.get();
            // Mettre à jour les attributs
            if (professeurDetails.getFirstName() != null) {
                professeur.setFirstName(professeurDetails.getFirstName());
            }
            if (professeurDetails.getLastName() != null) {
                professeur.setLastName(professeurDetails.getLastName());
            }
            if (professeurDetails.getEmail() != null) {
                professeur.setEmail(professeurDetails.getEmail());
            }
            if (professeurDetails.getPassword() != null) {
                professeur.setPassword(professeurDetails.getPassword());
            }
            if (professeurDetails.getConfirmPassword() != null) {
                professeur.setConfirmPassword(professeurDetails.getConfirmPassword());
            }
            if (professeurDetails.getPhoneNumber() != null) {
                professeur.setPhoneNumber(professeurDetails.getPhoneNumber());
            }
            if (professeurDetails.getBirthday() != null) {
                professeur.setBirthday(professeurDetails.getBirthday());
            }
            if (professeurDetails.getSpeciality() != null) {
                professeur.setSpeciality(professeurDetails.getSpeciality());
            }
            if (professeurDetails.getPictureUrl() != null) {
                professeur.setPictureUrl(professeurDetails.getPictureUrl());
            }
            return professeurRepository.save(professeur);
        } else {
            throw new RuntimeException("Professeur non trouvé pour l'ID : " + id);
        }
    }
    
    // Supprimer un professeur par son ID
    public void deleteProfesseur(String id) {
        professeurRepository.deleteById(id);
    }
}

