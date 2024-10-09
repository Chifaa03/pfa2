package com.example.studyapp.admin.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studyapp.admin.models.Etudiant;
import com.example.studyapp.admin.repo.EtudiantRepo;
@Service
public class EtudiantService {
    @Autowired
    private EtudiantRepo EtudiantRepo;

    public List<Etudiant> getAllEtudiant() {
        return EtudiantRepo.findAll();
    }

    public Etudiant createEtudiant(Etudiant Etudiant) {
        return EtudiantRepo.save(Etudiant);
    }

    public Optional<Etudiant> getEtudiantById(String id) {
        return EtudiantRepo.findById(id);
    }

    public Etudiant updateEtudiant(String id, Etudiant EtudiantDetails) {
        Optional<Etudiant> EtudiantOptional = EtudiantRepo.findById(id);
        if (EtudiantOptional.isPresent()) {
            Etudiant Etudiant = EtudiantOptional.get();
            // Mettre à jour les attributs
            if (EtudiantDetails.getFirstName() != null) {
                Etudiant.setFirstName(EtudiantDetails.getFirstName());
            }
            if (EtudiantDetails.getLastName() != null) {
                Etudiant.setLastName(EtudiantDetails.getLastName());
            }
            if (EtudiantDetails.getEmail() != null) {
                Etudiant.setEmail(EtudiantDetails.getEmail());
            }
            if (EtudiantDetails.getPassword() != null) {
                Etudiant.setPassword(EtudiantDetails.getPassword());
            }
            if (EtudiantDetails.getConfirmPassword() != null) {
                Etudiant.setConfirmPassword(EtudiantDetails.getConfirmPassword());
            }
            if (EtudiantDetails.getPhoneNumber() != null) {
                Etudiant.setPhoneNumber(EtudiantDetails.getPhoneNumber());
            }
            if (EtudiantDetails.getBirthday() != null) {
                Etudiant.setBirthday(EtudiantDetails.getBirthday());
            }
            if (EtudiantDetails.getSpeciality() != null) {
                Etudiant.setSpeciality(EtudiantDetails.getSpeciality());
            }
            if (EtudiantDetails.getPictureUrl() != null) {
                Etudiant.setPictureUrl(EtudiantDetails.getPictureUrl());
            }
            return EtudiantRepo.save(Etudiant);
        } else {
            throw new RuntimeException("Etudiant en attente non trouvé pour l'ID : " + id);
        }
    }
    
    public void deleteEtudiant(String id) {
        EtudiantRepo.deleteById(id);
    }
}
