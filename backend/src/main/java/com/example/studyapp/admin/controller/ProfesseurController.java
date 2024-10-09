package com.example.studyapp.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.studyapp.admin.models.Professeur;
import com.example.studyapp.admin.service.ProfesseurService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/professeurs")
public class ProfesseurController {

    @Autowired
    private ProfesseurService professeurService;

    @GetMapping
    public ResponseEntity<List<Professeur>> listerProfesseurs() {
        List<Professeur> professeurs = professeurService.getAllProfesseurs();
        return new ResponseEntity<>(professeurs, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Professeur> creerProfesseur(@RequestBody Professeur professeur) {
        Professeur nouveauProfesseur = professeurService.createProfesseur(professeur);
        return new ResponseEntity<>(nouveauProfesseur, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professeur> obtenirProfesseurParId(@PathVariable String id) {
        Optional<Professeur> professeur = professeurService.getProfesseurById(id);
        return professeur.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Professeur> mettreAJourProfesseur(@PathVariable String id, @RequestBody Professeur professeurDetails) {
        Professeur professeurMaj = professeurService.updateProfesseur(id, professeurDetails);
        return new ResponseEntity<>(professeurMaj, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerProfesseur(@PathVariable String id) {
        professeurService.deleteProfesseur(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
