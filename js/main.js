/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author :    Joan Vallat
 * @since :     2023-08-29
 * @version :   0.0.1
 */

"use strict";


//Récupérer tout les paragraphe du documents et l'affiche dans la console
let tableauDesPara = document.querySelectorAll("p");
console.log(tableauDesPara);


//Récupère le bouton et l'affiche dans la console
let btAjouter = document.querySelector("button.ajouter");
let txtArticle = document.querySelector("#article");
let ulArticles = document.querySelector("ul.articles");


//Ecoute le click sur le bouton sur btAjouter
btAjouter.addEventListener("click",()=> {

    //Affiche la valeur du champs de saisie dans la console
    ulArticles.innerHTML += "<li>" + txtArticle.value + "</li>";
    //Vide la console
    txtArticle.value = "";
});