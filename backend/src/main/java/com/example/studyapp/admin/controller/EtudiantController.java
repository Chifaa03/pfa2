package com.example.studyapp.admin.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.studyapp.admin.models.Etudiant;
import com.example.studyapp.admin.service.EtudiantService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/etudiant")
public class EtudiantController {
    @Autowired
    private EtudiantService etudiantService;

    @GetMapping
    public ResponseEntity<List<Etudiant>> listerEtudiant() {
        List<Etudiant> etudiants= etudiantService.getAllEtudiant();
        return new ResponseEntity<>(etudiants, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Etudiant> creerEtudiant(@RequestBody Etudiant etudiant) {
        Etudiant nouveauEtudiant = etudiantService.createEtudiant(etudiant);
        return new ResponseEntity<>(nouveauEtudiant, HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Etudiant> obtenirEtudiantParId(@PathVariable String id) {
        Optional<Etudiant> Etudiant = etudiantService.getEtudiantById(id);
        return Etudiant.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Etudiant> mettreAJourEtudiant(@PathVariable String id, @RequestBody Etudiant EtudiantDetails) {
        Etudiant EtudiantMaj = etudiantService.updateEtudiant(id, EtudiantDetails);
        return new ResponseEntity<>(EtudiantMaj, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerEtudiant(@PathVariable String id) {
        etudiantService.deleteEtudiant(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
