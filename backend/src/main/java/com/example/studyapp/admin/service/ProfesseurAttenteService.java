package com.example.studyapp.admin.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.studyapp.admin.models.ProfesseurAttente;
import com.example.studyapp.admin.repo.ProfesseurAttenteRepo;

import java.util.List;
import java.util.Optional;

@Service

public class ProfesseurAttenteService {
    @Autowired
    private ProfesseurAttenteRepo professeurAttenteRepo;

    public List<ProfesseurAttente> getAllProfesseursAttente() {
        return professeurAttenteRepo.findAll();
    }

    public ProfesseurAttente createProfesseurAttente(ProfesseurAttente professeurAttente) {
        return professeurAttenteRepo.save(professeurAttente);
    }

    public Optional<ProfesseurAttente> getProfesseurAttenteById(String id) {
        return professeurAttenteRepo.findById(id);
    }

    public ProfesseurAttente updateProfesseurAttente(String id, ProfesseurAttente professeurAttenteDetails) {
        Optional<ProfesseurAttente> professeurAttenteOptional = professeurAttenteRepo.findById(id);
        if (professeurAttenteOptional.isPresent()) {
            ProfesseurAttente professeurAttente = professeurAttenteOptional.get();
            // Mettre à jour les attributs
            if (professeurAttenteDetails.getFirstName() != null) {
                professeurAttente.setFirstName(professeurAttenteDetails.getFirstName());
            }
            if (professeurAttenteDetails.getLastName() != null) {
                professeurAttente.setLastName(professeurAttenteDetails.getLastName());
            }
            if (professeurAttenteDetails.getEmail() != null) {
                professeurAttente.setEmail(professeurAttenteDetails.getEmail());
            }
            if (professeurAttenteDetails.getPassword() != null) {
                professeurAttente.setPassword(professeurAttenteDetails.getPassword());
            }
            if (professeurAttenteDetails.getConfirmPassword() != null) {
                professeurAttente.setConfirmPassword(professeurAttenteDetails.getConfirmPassword());
            }
            if (professeurAttenteDetails.getPhoneNumber() != null) {
                professeurAttente.setPhoneNumber(professeurAttenteDetails.getPhoneNumber());
            }
            if (professeurAttenteDetails.getBirthday() != null) {
                professeurAttente.setBirthday(professeurAttenteDetails.getBirthday());
            }
            if (professeurAttenteDetails.getSpeciality() != null) {
                professeurAttente.setSpeciality(professeurAttenteDetails.getSpeciality());
            }
            if (professeurAttenteDetails.getPictureUrl() != null) {
                professeurAttente.setPictureUrl(professeurAttenteDetails.getPictureUrl());
            }
            return professeurAttenteRepo.save(professeurAttente);
        } else {
            throw new RuntimeException("Professeur en attente non trouvé pour l'ID : " + id);
        }
    }
    
    public void deleteProfesseurAttente(String id) {
        professeurAttenteRepo.deleteById(id);
    }
}
