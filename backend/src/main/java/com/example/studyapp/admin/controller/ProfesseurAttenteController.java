package com.example.studyapp.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.studyapp.admin.models.ProfesseurAttente;
import com.example.studyapp.admin.service.ProfesseurAttenteService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/professeurs-attente")
public class ProfesseurAttenteController {

    @Autowired
    private ProfesseurAttenteService professeurAttenteService;

    @GetMapping
    public ResponseEntity<List<ProfesseurAttente>> listerProfesseursAttente() {
        List<ProfesseurAttente> professeursAttente = professeurAttenteService.getAllProfesseursAttente();
        return new ResponseEntity<>(professeursAttente, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ProfesseurAttente> creerProfesseurAttente(@RequestBody ProfesseurAttente professeurAttente) {
        ProfesseurAttente nouveauProfesseurAttente = professeurAttenteService.createProfesseurAttente(professeurAttente);
        return new ResponseEntity<>(nouveauProfesseurAttente, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProfesseurAttente> obtenirProfesseurAttenteParId(@PathVariable String id) {
        Optional<ProfesseurAttente> professeurAttente = professeurAttenteService.getProfesseurAttenteById(id);
        return professeurAttente.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProfesseurAttente> mettreAJourProfesseurAttente(@PathVariable String id, @RequestBody ProfesseurAttente professeurAttenteDetails) {
        ProfesseurAttente professeurAttenteMaj = professeurAttenteService.updateProfesseurAttente(id, professeurAttenteDetails);
        return new ResponseEntity<>(professeurAttenteMaj, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerProfesseurAttente(@PathVariable String id) {
        professeurAttenteService.deleteProfesseurAttente(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
