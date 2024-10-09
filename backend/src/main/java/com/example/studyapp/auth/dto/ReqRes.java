package com.example.studyapp.auth.dto;


import com.example.studyapp.auth.model.OurUsers;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;


import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReqRes {

    private int statusCode;
    private String error;
    private String message;
    private String token;
    private String refreshToken;
    private String expirationTime;
   
    private String email;
    private String role;
    private String password;
private String confirmPassword;
    private String firstName;
    private String lastName;
    private Date birthday;
    private String phoneNumber;
    private String speciality;
    private String pictureUrl;
   // private List<Produit> products;
    private OurUsers ourUsers;
}