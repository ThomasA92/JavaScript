// Commentaire js sur une seule ligne

/*
Commentaire
sur plusieurs
lignes
*/


// ECMAScript est un ensemble de norme concernant le langage Javascript notamment
// Javascript est exécuté par le navigateur via une interface interne aux navigateurs

// window est un outil js qui représente une fenetre du navigateur (onglet) contenant un document web
// document est un outil js qui représente la page web chargée dans le navigateur (notre script complet)

// Toute instruction doit finir par un ; ce caractère représente la fin de l'instruction

// Pour voir les erreurs js, elles sont visibles dans la console navigateur (F12) au niveau de l'onglet "console"

// le document nous permet d'aller chercher n'immporte quel élément html de notre page pour le manipuler en javascript
// document.getElementById('contenuChapitre1'); permet d'aller chercher l'élement html ayant l'id contenuChapitre1
// document.getElementById('contenuChapitre1').textContent = 'du texte'; // permet de modifier le contenu texte de l'élément
// document.getElementById('contenuChapitre1').innerHTML = '<p>du texte et/ou de l\'html</p>'; // permet de modifier le contenu texte et html de l'élément
// Voir la partie 2 de ce cours pour une explication complete sur les selecteurs.

//--------------------------------------------------
// - Chapitre1 : Affichage
//--------------------------------------------------

// Boite de dialogue
// alert()
// alert('Bonjour à tous'); // permet d'afficher un message pour l'utilisateur

// confirm()
// confirm('Etes-vous sûr ?'); // permet de récupérer une confirmation utilisateur (ok / annuler)

// prompt()
// prompt('Quel est votre prénom ?'); // permet de récupérer une saisie utilisateur.

// Affichage dans la console navigateur :
console.log('Une info visible dans la console F12');
console.info('Similaire à console.log() sauf que certains navigateurs affiche un icone i (firefox)');

// Affichage dans le document web
// on passe par un selecteur pour récupérer un element html de notre page afin de le manipuler
document.getElementById('contenuChapitre1').textContent = '<h3>Bonjour à tous</h3>'; // textContent permet de manipuler le contenu texte d'un élément. Si on met de l'html dans le texte, il ne sera pas interprété !

// document.getElementById('contenuChapitre1').innerHTML = document.getElementById('contenuChapitre1').innerHTML + '<h3 style="color: red;">Hello world !</h3>'; // innerHTML nous permet de gérer le contenu texte et/ou de l'html qui sera interprété par le navigateur
// le fait de dire qu'il est égal  à lui-même et qu'on rajoute un nouveau contenu permet de ne pas écraser l'existant !

document.getElementById('contenuChapitre1').innerHTML += '<h3 style="color: red;">Hello world !</h3>'; // cette ligne est similaire à la précédante sauf que le += est un raccourci d'écriture permettant de dire qu'on rajoute sans écraser

//--------------------------------------------------
// - Chapitre2 : Variables : déclaration & affectation
//--------------------------------------------------

// Une variable est un espace nommé permettant de conserver une valeur
// Un valeur possède un type, on parle de pseudo type ou type primitif

// caractères autorisés : les caractères alphanumérique sauf les caractères spéciaux. Le $ est autorisé mais par convention on l'utilise peu. L'underscore _ 
// JS est sensible à la casse : une majuscule n'est pas la même chose qu'une minuscule.
// Une variable ne peut pas commencer par un chiffre

//---------------------
// Déclaration avec var
//---------------------
// déclaration : 
var maBoite; // déclaration d'une variable nommée maBoite

// affectation : 
maBoite = 10; // affectation de la valeur 10 dans la variable maBoite

// déclaration et affectation sur la même ligne : 
// on récupère un élément html de la page pour le placer dans une  variable : 
var elementChapitre2 = document.getElementById('contenuChapitre2');
console.log(elementChapitre2);

elementChapitre2.innerHTML = '<p>Une variable est un espace nommé permettant de conserver une valeur</p>';
// le += permet de rajouter sans écraser l'existant : 
elementChapitre2.innerHTML += '<p>Un valeur possède un type, on parle de pseudo type ou type primitif</p>';

//---------------------
// Déclaration avec let
//---------------------

let autreVariable = 'du texte';

// différences  entre var et let

// Une variable déclarée avec var est disponible dans tout le code (sauf si elle est déclarée DANS une fonction (voir le chapitre des fonctions))
// Une  variable déclarée avec let n'existe que dans le bloc où elle a été déclarée. Un bloc en javascript est représenté par les accolades : {}

// if(condition) { // block }
// while(condition) { // block }
// function truc () { // block }
// { // block }

{
    let testLet = 'Un test';
    console.log('valeur de  la variable testLet dans le même bloc : ' + testLet);
}
// console.log('valeur de  la variable testLet à l\'extérieur du même bloc : ' + testLet);

// autre différence : à l'inverse de var, avec let on ne peut pas re déclarer la même variable dans le même block
var test1 = 123;
var test1 = 456;

let test2 = 'abc';
// let test2 = 'def'; // Identifier 'test2' has already been declared
test2 = 'def'; // ici ok car affectation, ce n'est pas une déclaration.


//---------------------
// Déclaration avec const
//---------------------
// même comportement que let sauf 2 points principaux  : 
// avec const on doit affecter la valeur lors de la déclaration obligatoirement.
// une variable déclarée avec const est constante, donc on ne peut pas modifier sa valeur lors de l'exécution du script

const maConstante = 'une valeur';
// maConstante = 'autre valeur'; // entrainement.js:121 Uncaught TypeError: Assignment to constant variable.


//--------------------------------------------------
// - Chapitre3 : Type de données
//--------------------------------------------------
// avec js on récupère des outils du langage selon le type (type primitif) de la donnée que l'on manipule.
// typeof est un opérateur du langage qui nous permet de connaitre le type d'une valeur
let elementChapitre3 = document.getElementById('contenuChapitre3');

let chaine = 'du texte'; // une variable contenant du texte
elementChapitre3.innerHTML = 'Le type contenu dans la variable nommée chaine : ' +  typeof chaine + '<br>'; // type : string

let numerique = 123;
elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée numerique : ' +  typeof numerique + '<br>'; // type : number

let autreChaine = '123'; // ou "123"
elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée autreChaine : ' +  typeof autreChaine + '<br>'; // type : string
// "123" est de type string mais la valeur reste numérique !

let negatif = -7;
elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée negatif : ' +  typeof negatif + '<br>'; // type : number

let decimale = 5.7;
elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée decimale : ' +  typeof decimale + '<br>'; // type : number

// booleen
// 2 valeurs possibles : true (vrai) ou false (faux)
let choix = true; // ou false
elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée choix : ' +  typeof choix + '<br>'; // type : boolean

// une variable qui n'existe pas car non déclarée ou une  variable déclarée sans affectation : undefined
elementChapitre3.innerHTML += 'Le type contenu dans la variable pas nommée : ' +  typeof existePas + '<br>'; // type : undefined


//--------------------------------------------------
// - Chapitre4 : Quotes
//--------------------------------------------------
let elementChapitre4 = document.getElementById('contenuChapitre4');

// les quotes pour représenter des chaines de caractères dans le code.

elementChapitre4.innerHTML = 'Hello<br>'; // '' ou "" aucune différence
elementChapitre4.innerHTML += "Bonjour<br>"; // '' ou "" aucune différence

// les quotes inversées (accent grave)
let prenom = 'Marie';
elementChapitre4.innerHTML += 'Bonjour ${ prenom }<br>'; // Bonjour ${ prenom }
elementChapitre4.innerHTML += `Bonjour ${ prenom }<br>`; // Bonjour Marie
// l'utilisation du gabarit ${} permet d'aller chercher la valeur de cette variable.

// avec la concaténation : 
elementChapitre4.innerHTML += 'Bonjour ' + prenom + '<br>'; // Bonjour Marie


//--------------------------------------------------
// - Chapitre5 : Concaténation
//--------------------------------------------------
// La concaténation permet d'assembler des chaines de caractères représentées notamment via du texte ou des variables.
// le caractère de concaténation est le signe + que l'on peut toujours traduire par "suivi de"

let prenom2 = 'Pierre';
let nom2 = 'Dupond';

let elementChapitre5 = document.getElementById('contenuChapitre5');
elementChapitre5.innerHTML = 'Bonjour ' + prenom2 + ' ' + nom2 + ', bienvenue sur notre site !<hr>';


//--------------------------------------------------
// - Chapitre6 : Opérateurs aryhtmétique
//--------------------------------------------------
let elementChapitre6 = document.getElementById('contenuChapitre6');

let result = 10 + 5; // addition
elementChapitre6.innerHTML = result + '<br>'; // 15

result = 10 - 5; // soustraction
elementChapitre6.innerHTML += result + '<br>'; // 5

result = 10 / 5; // division
elementChapitre6.innerHTML += result + '<br>'; // 2

result = 10 * 5; // multiplication
elementChapitre6.innerHTML += result + '<br>'; // 50

result = 10 % 5; // modulo (le restant de la division en terme d'entier) // exemple 10 % 3 = 1
elementChapitre6.innerHTML += result + '<br>'; // 0

result = 10 ** 5; // puissance
elementChapitre6.innerHTML += result + '<br>'; // 100000


//--------------------------------------------------
// - Chapitre7 : Les conditions !
//--------------------------------------------------
let elementChapitre7 = document.getElementById('contenuChapitre7');

// Une condition permet de prévoir différent cas possible.
// Une condition ne peut recevir qu'une réponse de type vrai (true) ou faux (false)

var a = 10, 
    b = 5,  
    c = 2;

if(a > b) { // si la valeur de la variable a est strictement supérieure à la valeur de la variable b
    elementChapitre7.innerHTML = '<p>La valeur de a est bien strictement supérieure à la valeur de b</p>';
} else { // sinon (toutes les autres possibilités)
    elementChapitre7.innerHTML = '<p>La valeur de a n\'est pas supérieure à la valeur de b</p>';
}  


// Plusieurs conditions : AND &&
if(a > b && b > c) {
    elementChapitre7.innerHTML += '<p>Ok pour les deux conditions</p>';
} else {
    elementChapitre7.innerHTML += '<p>Une des deux conditions ou les deux conditions sont fausses</p>';
}


// L'une ou l'autre d'un ensemble de conditions : OR ||
if(a == 9 || b > c) {
    elementChapitre7.innerHTML += '<p>Ok pour au moins une des deux conditions</p>';
} else {
    elementChapitre7.innerHTML += '<p>Les deux conditions sont fausses</p>';
}

var a = 10, 
    b = 5,  
    c = 2;

// else if() représente un nouveau cas possible (c'est une question donc les parenthese) 
if(a == 8) {
    elementChapitre7.innerHTML += '<p>Réponse 1</p>';
} else if(a != 10) {
    elementChapitre7.innerHTML += '<p>Réponse 2</p>';
} else {
    elementChapitre7.innerHTML += '<p>Réponse 3</p>'; // Réponse 3
}

// true / false
var test = true;

// on attend vrai pour rentrer
if(test) {
    elementChapitre7.innerHTML += '<p>1 On rentre dans le if</p>';
}

test = false;
if(!test) {
    // avec le ! (différent de) on attend la valeur false  dans test pour rentrer dans ce if.
    elementChapitre7.innerHTML += '<p>2 On rentre dans le if</p>';
}
// on devrait plutôt écrire de cette manière
if(test == false) {
    elementChapitre7.innerHTML += '<p>3 On rentre dans le if</p>';
}

let var1 = 1; //  type number
let var2 = '1'; // ou "1" // type string

// comparaison uniquement des valeurs
if(var1 == var2) {
    elementChapitre7.innerHTML += '<p>var1 a la même valeur que var2.</p>'; // on rentre ici
} else {
    elementChapitre7.innerHTML += '<p>var1 et var2 ont des valeurs différentes.</p>';
}

// comparaison des valeurs ET des types
if(var1 === var2) { // comparaison strict
    elementChapitre7.innerHTML += '<p>var1 a la même valeur et le même type que var2.</p>'; 
} else {
    elementChapitre7.innerHTML += '<p>var1 et var2 ont des valeurs différentes et/ou des types différents.</p>'; // on rentre ici
}

// la même condition sans les {}, c'est possible s'il n'y qu'une seule instruction liée au if et une seule liée au else
if(var1 === var2) 
    elementChapitre7.innerHTML += '<p>var1 a la même valeur et le même type que var2.</p>'; 
else 
    elementChapitre7.innerHTML += '<p>var1 et var2 ont des valeurs différentes et/ou des types différents.</p>'; // on rentre ici






/*
Les opérateurs de comparaison
-----------------------------
=       affectation (ce n'est pas une comparaison)
==      est égal à (comparaison des valeurs uniquement)
===     est strictement égal à (comparaison et des valeurs et des types)
!=      est différent de (comparaison uniquement des valeurs)
!==     est strictement différent de (comparaison et des valeurs et des types)
>       strictement supérieur
>=      supérieur ou égal
<       strictement inférieur
<=      inférieur ou égal 
*/

// isNaN() // is Not a Number
var1 = 1; // type number
var2 = '1'; // ou "1" // type string
if(isNaN(var1)) {
    elementChapitre7.innerHTML += '<p>var1 n\'a pas une valeur numérique</p>';
} else {
    elementChapitre7.innerHTML += '<p>var1 a une valeur numérique</p>'; // Ok
}

if(isNaN(var2)) {
    elementChapitre7.innerHTML += '<p>var2 n\'a pas une valeur numérique</p>';
} else {
    elementChapitre7.innerHTML += '<p>var2 a une valeur numérique</p>'; // Ok
}

// condition switch() { } 
elementChapitre7.innerHTML += '<b>Autre outil pour mettre en place des conditions : switch()</b><hr>';
let couleur = 'jaune';

switch(couleur) {
    case 'bleu' : 
        elementChapitre7.innerHTML += '<p>Vous aimez le bleu</p>';
    break;
    case 'rouge' : 
        elementChapitre7.innerHTML += '<p>Vous aimez le rouge</p>';
    break;
    case 'vert' : 
        elementChapitre7.innerHTML += '<p>Vous aimez le vert</p>';
    break;
    default : 
        elementChapitre7.innerHTML += '<p>Vous n\'aimez ni le bleu ni le rouge ni le vert</p>';
    break;
}
// Exercice : réécrire la même condition avec des if / else if / else
couleur = 'jaune';
if(couleur == 'bleu') {
    elementChapitre7.innerHTML += '<p style="color: blue;">Vous aimez le bleu</p>';
} else if (couleur == 'rouge') {
    elementChapitre7.innerHTML += '<p style="color: red;">Vous aimez le rouge</p>';
} else if (couleur == 'vert') {
    elementChapitre7.innerHTML += '<p style="color: green;">Vous aimez le vert</p>';
} else {
    elementChapitre7.innerHTML += '<p>Vous n\'aimez ni le bleu ni le rouge ni le vert</p>';
}



//--------------------------------------------------
// - Chapitre8 : Les boucles !
//--------------------------------------------------
let elementChapitre8 = document.getElementById('contenuChapitre8');

// Une boucle permet de répéter un ensemble d'instructions selon une condition d'entrée
// 3 informations nécessaires :
// 1 - valeur de départ (compteur)
// 2 - condition d'entrée (basée sur la valeur du compteur)
// 3 - Incrémentation ou décrémentation

// boucle while() {}
let i = 0; // valeur de départ
while(i < 10) { // condition d'entrée
    elementChapitre8.innerHTML += i; // à chaque tour de la boucle, on affiche la valeur du compteur i
    i++; // incrémentation  // raccourci d'écriture : i = i + 1; 
}

// Exercice : refaire la même boucle sauf que les chiffres doivent être un seul par ligne :
/*
0
1
2
3
...
*/
elementChapitre8.innerHTML += '<hr>';

i = 0; // on remet la valeur 0 dans  la variable.
while(i < 10) {
    elementChapitre8.innerHTML += i + '<br>';
    i++;
}

elementChapitre8.innerHTML += '<hr>';
// boucle for() {}
// for(valeur_de_depart; condition_entree; incrementation) {}
for(i = 0; i < 10; i++) {
    elementChapitre8.innerHTML += i + ' - ';
}
// 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 -

elementChapitre8.innerHTML += '<hr>';
// Exercice : faire en sorte d'avoir la même boucle mais sans afficher le dernier - en fin de ligne.
for(i = 0; i < 10; i++) {
    if(i != 9) {
        elementChapitre8.innerHTML += i + ' - ';
    } else {
        elementChapitre8.innerHTML += i;
    }
}

elementChapitre8.innerHTML += '<hr>';
// boucle do while() {}
// la boucle do while fera au moins 1 tour avant de poser la question à la condition d'entrée
i = 5;
do {
    elementChapitre8.innerHTML += i;
    i--;
} while(i > 10);

elementChapitre8.innerHTML += '<hr>';

// Exercice : faire une boucle qui affiche de 0 à 99 (100 tours) en revanche, le chiffre 50 doit être de couleur rouge !
i = 0;
while (i < 100) {

    if(i == 50) {
        elementChapitre8.innerHTML += '<span style="color: red;">' + i + '</span> ';
    } else {
        elementChapitre8.innerHTML += i + ' ';
    }

    i++;
}

// break; nous permet de sortir d'une boucle.
/*
while(true) {
    let reponse = prompt('Choisissez un fruit');
    if(reponse == 'pommes') {
        break; // permet de sortir de la boucle.
    }
}
*/



//--------------------------------------------------
// - Chapitre 9 : Fonctions prédéfinies (fonctions globales)
//--------------------------------------------------
let elementChapitre9 = document.getElementById('contenuChapitre9');

// une fonction prédéfinie est déjà inscrite au langage, le developpeur ne fait que l'exécuter à l'inverse d'une fonction utilisateur créée par le  developpeur puis ensuite exécutée !

// parseInt(chaine, base)
// parseInt() est une fonction permettant de transformer une chaine de caractère en un chiffre entier de type number !
// argument chaine : la chaine à traiter pour la transformer en type number
// argument base : la base arythmetique (base 10 pour les chiffres de 0 à 9)
// Valeur de retour : un number ou NaN si la chaine n'est pas numérique.

let uneChaine = '123'; // valeur 123 de type string
elementChapitre9.innerHTML += '<p>La chaine 123 est de type ' + typeof uneChaine + '</p>';
uneChaine = parseInt(uneChaine, 10);
elementChapitre9.innerHTML += '<p>La chaine 123 traitée avec un parseInt est de type ' + typeof uneChaine + '</p>';

elementChapitre9.innerHTML += '<p>Addition de 1 + 1 un type number et un type string : ' + ('1' + 1) + '</p>'; // affiche 11 car une des valeurs est en chaine de caractère donc le + est géré pour la concaténation

elementChapitre9.innerHTML += '<p>Addition de 1 + 1 un type number et un type string que l\'on passe dans parseInt pour le transformer en number : ' + (parseInt('1', 10) + 1) + '</p>'; // 2 



//--------------------------------------------------
// - Chapitre10 : Fonctions utilisateur 
//--------------------------------------------------
let elementChapitre10 = document.getElementById('contenuChapitre10');

// Une fonction utilisateur : déclarée et exécutée par le développeur.


separateur(elementChapitre10); // il est possible d'appeler une fonction avant sa declaration UNIQUEMENT si on a utilisé la methode function statement ! Ce n'est pas possible avec la methode function operator.

// elementChapitre10.innerHTML += maFonction2(); // entrainement.js:489 Uncaught ReferenceError: Cannot access 'maFonction2' before initialization


// déclaration d'une fonction : methode function statement
function maFonction() {
    // une fonction simple sans argument qui renvoie une chaine de caractère
    return "Bonjour à tous <hr>";
}

// exécution : 
elementChapitre10.innerHTML += maFonction(); // premiere exécution
elementChapitre10.innerHTML += maFonction(); // deuxième
elementChapitre10.innerHTML += maFonction(); // troisième

// fonction avec argument : 
// cette fonction permet d'afficher du texte pour dire bonjour à un utilisateur selon son pseudo que l'on récupère en argument.
function direBonjour(qui){
    return 'Bonjour ' + qui + ", bienvenue sur notre site<hr>";
}

// exécution
elementChapitre10.innerHTML += direBonjour('Mathieu'); // si la fonction attend un argument, il faut lui fournir lors de l'exécution.
// Cet argument va se placer dans l'argument de réception prévu (dans notre cas "qui") afin de permettre la bonne exécution du code de la fonction
// let p = prompt('Quel est votre prénom ?');
// elementChapitre10.innerHTML += direBonjour(p);

// fonction pour afficher 3 hr dans la page
function separateur(sectionConcernee) {
    // sectionConcernee représente le bloc où l'on veut faire l'affichage.
    return sectionConcernee.innerHTML += '<hr><hr><hr>';
    // lorsque l'on tombe sur un return dans une fonction, on sort immédiatement de la fonction. S'il y a des lignes à la suite du return, elles ne seront jamais exécutées !!!
    sectionConcernee.innerHTML += 'HELLO'; // après un return, cette ligne ne sera jamais exécutée
    sectionConcernee.innerHTML += 'BONJOUR'; // après un return, cette ligne ne sera jamais exécutée
    sectionConcernee.innerHTML += 'HOLA'; // après un return, cette ligne ne sera jamais exécutée
}

separateur(elementChapitre10);

// fonction meteo pour renvoyer du texte selon une saison et une temperature fournies en argument
function meteo(saison, temperature) {
    let debut = 'Nous sommes en ' + saison + ' ';
    let suite = 'et il fait ' + temperature + ' degré(s)';

    return debut + suite + '<hr>';
}
elementChapitre10.innerHTML += meteo('été', 35);
elementChapitre10.innerHTML += meteo('automne', 18);
elementChapitre10.innerHTML += meteo('printemps', 23);
elementChapitre10.innerHTML += meteo('hiver', 0);

// EXERCICE: gérer le 'en' ou le 'au' selon la saison et le (s) sur degré selon la temperature
function meteo2(saison, temperature) {

    let debut = '';
    let suite = '';

    if(saison == 'printemps') {
        debut = 'Nous sommes au ' + saison + ' ';
    } else {
        debut = 'Nous sommes en ' + saison + ' ';
    }
    //---
    // if(temperature == 0 || temperature == -1 || temperature == 1)
    if(temperature >= -1 && temperature <= 1) {
        suite = 'et il fait ' + temperature + ' degré';
    } else {
        suite = 'et il fait ' + temperature + ' degrés';
    }    
    
    return debut + suite + '<hr>';
}
elementChapitre10.innerHTML += meteo2('été', 35);
elementChapitre10.innerHTML += meteo2('automne', 18);
elementChapitre10.innerHTML += meteo2('printemps', 23);
elementChapitre10.innerHTML += meteo2('hiver', 0);



// au plus court
function meteo3(saison, temperature) {

    let article = 'en';
    let s = 's';

    if(saison == 'printemps') {
        article = 'au';
    }

    if(temperature >= -1 && temperature <= 1) {
        s = '';
    }

    return 'Nous sommes ' + article + ' ' + saison + ' et il fait ' + temperature + ' degré' + s + '<hr>';
}
separateur(elementChapitre10);

elementChapitre10.innerHTML += meteo3('été', 35);
elementChapitre10.innerHTML += meteo3('automne', 18);
elementChapitre10.innerHTML += meteo3('printemps', 23);
elementChapitre10.innerHTML += meteo3('hiver', 0);


// Autre façon de déclarer une fonction : function operator
let maFonction2 = function () {
    return 'Hello world!<br>';
}
// exécution
elementChapitre10.innerHTML += maFonction2();

// alert(info); // undefined
// var info = 123; // je ne peux pas appeler une variable avant de l'avoir déclarée !

separateur(elementChapitre10);

elementChapitre10.innerHTML += '<b>Environnement Global & Local</b><hr>';
// L'environnement global représente l'intégralité de notre script
// L'environnement local est à l'intérieur d'une fonction.

// Lorsque l'on déclare une variable dans une fonction avec le mot clé var, cette variable n'existe QUE dans la fonction !
var animal = 'chaton'; // variable déclarée dans l'espace global, cette variable est disponible partout

function foret() {
    var animal = 'loup'; // variable local car utilisation du mot clé var dans la fonction
    return animal;
}

elementChapitre10.innerHTML += animal + '<br>'; // chaton
foret();
elementChapitre10.innerHTML += animal + '<br>'; // chaton

elementChapitre10.innerHTML += foret() + '<br>'; // loup

// L'inverse
var vehicule = 'vélo';
function rouler() {
    vehicule = 'voiture'; // variable déclarée dans une fonction SANS le mot clé var
    return vehicule;
}
elementChapitre10.innerHTML += vehicule + '<br>'; // vélo
rouler();
elementChapitre10.innerHTML += vehicule + '<br>'; // voiture

// Attention, une variable déclarée avec let n'existera que dans les {} où elle a été déclaré

//--------------------------------------------------
// - Chapitre11 : Les tableaux de données ARRAY
//--------------------------------------------------
let elementChapitre11 = document.getElementById('contenuChapitre11');
// un tableau array est un peu comme une variable sauf qu'au lieu de contenir une seule valeur, nous pouvons en avoir un ensemble.
// c'est un nouveau type de données.

// pour déclarer un tableau array, on met les []
let tabFruits = ['pommes', 'poires', 'cerises', 'ananas', 'kiwi', 'pêches'];

// pour afficher l'intégralité du tableau :
elementChapitre11.innerHTML += tabFruits + '<br>';
console.log(tabFruits);
/*
0: "pommes"
1: "poires"
2: "cerises"
3: "ananas"
4: "kiwi"
5: "pêches"
*/
// Pour piocher dans un tableau, on appelle la variable qui le contient puis on rajoute les [] sur la variable et on met le numéro (indice) correspondant la valeur souhaitée.
// Exercice : affichez le mot cerises en passant par le tableau tabFruits
elementChapitre11.innerHTML += tabFruits[2] + '<br>';

separateur(elementChapitre11);

// pour modifier une valeur :
tabFruits[2] = 'mangues';
console.log(tabFruits);
elementChapitre11.innerHTML += tabFruits[2] + '<br>';

// pour connaitre la taille du tableau (le nb d'élément contenus) : length
elementChapitre11.innerHTML += 'Taille du tableau : ' + tabFruits.length + '<br>'; // 6

// Pour rajouter un élément en fin de tableau : push()
tabFruits.push('bananes');
console.log(tabFruits);
elementChapitre11.innerHTML += 'Taille du tableau : ' + tabFruits.length + '<br>'; // 7
/*
0: "pommes"
1: "poires"
2: "mangues"
3: "ananas"
4: "kiwi"
5: "pêches"
6: "bananes"
*/
// Pour rajouter un élément en début de tableau : unshift()
tabFruits.unshift('oranges');
console.log(tabFruits);
elementChapitre11.innerHTML += 'Taille du tableau : ' + tabFruits.length + '<br>'; // 8
/*
0: "oranges"
1: "pommes"
2: "poires"
3: "mangues"
4: "ananas"
5: "kiwi"
6: "pêches"
7: "bananes"
*/

// Pour ordonner les valeurs par ordre alphabétique : sort()
tabFruits.sort();
console.log(tabFruits);
/*
0: "ananas"
1: "bananes"
2: "kiwi"
3: "mangues"
4: "oranges"
5: "poires"
6: "pommes"
7: "pêches"
*/

// affichage du tableau sous forme de liste ul li => boucle
// pour le bon fonctionnement de la liste ul li avec la page html, on construit la liste dans une variable et on envoie la variable une fois que l'élément html est complet (sinon potentiellement incohérence avec l'interprétation du navigateur).
let liste = '<ul>';

let tailleTableau = tabFruits.length; 

for(i = 0; i < tailleTableau; i++) {
    liste += '<li>' + tabFruits[i] + '</li>';
}
liste += '</ul>';


//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
// pour utiliser sort() sur des valeurs numériques
var tabNumber = [50, 8, 101, 700, 23, 5.4, 68, -9, 5.3];
separateur(elementChapitre11);
tabNumber.sort();
elementChapitre11.innerHTML += tabNumber; // NOK (Not OK)
separateur(elementChapitre11);
// cette fonction passée en argument permet d'avoir un ordre correct sur des valeuurs numériques.
tabNumber.sort(function(a, b) {
    return a - b;
  });
elementChapitre11.innerHTML += tabNumber; // OK
separateur(elementChapitre11);
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------


elementChapitre11.innerHTML += liste;

separateur(elementChapitre11);

elementChapitre11.innerHTML += '<b>Tableau de données array multidimensionnel</b><hr></hr>';
// un ou des tableaux dans un tableau

var personnes = [ ['Marie', 'Dupond', 'marie@mail.fr'], ['Franck', 'Dupuis', 'franck@mail.fr'], ['Celine', 'Durand', 'celine@mail.fr'] ];

var personnes = [ 
                    [
                        'Marie', 
                        'Dupond', 
                        'marie@mail.fr'
                    ], 
                    [
                        'Franck', 
                        'Dupuis', 
                        'franck@mail.fr'
                    ], 
                    [
                        'Celine', 
                        'Durand', 
                        'celine@mail.fr'
                    ] 
                ];
console.log(personnes);    
// exercice : afficher : marie@mail.fr en passant par le tableau   

elementChapitre11.innerHTML += personnes[0][2] + '<br>';

//--------------------
// boucle for (... in ...) pour les tableaux array & les objets
//--------------------

let tabJours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
console.log(tabJours);

separateur(elementChapitre11);

for(let indice in tabJours) {
    elementChapitre11.innerHTML += '- ' + tabJours[indice] + '<br>';
}
// let indice représente l'indice en cours à chaque tour de la boucle
// la boucle for in va tourner autant de fois qu'il y a d'élément dans le tableau concerné.

//--------------------
// boucle for (... of ...) pour les tableaux array & les objets
//--------------------
separateur(elementChapitre11);
for(let valeur of tabJours) {
    elementChapitre11.innerHTML += '- ' + valeur + '<br>';
}
// let valeur représente la valeur en cours à chaque tour de la boucle
// la boucle for of va tourner autant de fois qu'il y a d'élément dans le tableau concerné.

//--------------------------------------------------
// - Chapitre12 : Les objets globaux
//--------------------------------------------------
let elementChapitre12 = document.getElementById('contenuChapitre12');
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux

// Un objet est un conteneur virtuel permettant de conserver des informations (propriétés ou attributs de l'objet) ainsi que du fonctionnel (methodes de l'objet).
// une variable simple => une information
// un tableau array => un ensemble d'information
// un objet => des propriétés & des methodes.

// Une valeur avec js est un objet car hérite de l'objet global correspondant à son type primitif : 
// exemple, une chaine de caractères va hériter des propriétés et des methodes de l'objet global STRING.

//---------------------------------
// - Objet global string
//---------------------------------

let phrase = "Bonjour nous sommes lundi, il fait beau";
elementChapitre12.innerHTML += phrase + '<hr>';

// cette variable phrase contient du texte. En réalité c'est un objet javascript qui hérite de la propriété et des methodes de l'objet global STRING

// une seule propriété pour les objet string : length => la longueur de la chaine.
elementChapitre12.innerHTML += 'Taille de la chaine : ' + phrase.length + '<br>';

// indexOf()
// indexOf() est une methode permettant de chercher la position d'un caractère ou du chaine de caractère dans une autre chaine.
// si le caractère ou la chaine est trouvée, on obtient un chiffre : la position dans la chaine
// sinon on obtient -1 car ce que l'on cherche n'est pas présent.
let positionLundi = phrase.indexOf('lundi');
console.log(positionLundi); // 20
// attention, indexOf() nous renvoie la position du premier caractère de ce qu'il cherche, en revanche la position du premier caractère de la chaine où l'on cherche a la position 0.
// Donc le l de lundi et le 21eme caractère, on obtient la position 20

// substring()
// substring() permet de découper une chaine en fournissant 1 ou 2 arguments :
// avec un seul argument, celui ci représente position de départ où l'on coupe et on récupère tout le reste de la chaine depuis cette position.
// avec deux arguments le premier représente la position de départ, le deuxième représente la position de fin de ce que l'on veut couper.
let positionDepart  = phrase.indexOf('lundi');
let positionFin = phrase.indexOf('lundi') + 'lundi'.length;

let mot = phrase.substring(positionDepart, positionFin);
elementChapitre12.innerHTML += '<hr>' + mot + '<hr>';

// toLowerCase() pour passer une chaine en minuscule
// toUpperCase() pour passer une chaine en majuscule.
let maj = 'BONJOUR';
let min = 'à tous';
elementChapitre12.innerHTML += maj.toLowerCase() + '<hr>';
elementChapitre12.innerHTML += min.toUpperCase() + '<hr>';

let bonjour = 'bonjour';
// nous aimerions passer la première lettre de cette variable bonjour en majuscule
let premiereLettre = bonjour.substring(0, 1);
console.log(premiereLettre);

let suite = bonjour.substring(1);
console.log(suite);

elementChapitre12.innerHTML += premiereLettre.toUpperCase() + suite + '<hr>';

// un fonction pour passer la premiere lettre d'une chaine  en majuscule
function upperCaseFirstLetter(chaine) {
    return chaine.substring(0, 1).toUpperCase() + chaine.substring(1);
}

elementChapitre12.innerHTML += upperCaseFirstLetter('alphabet') + '<hr>';
elementChapitre12.innerHTML += upperCaseFirstLetter('hello') + '<hr>';
elementChapitre12.innerHTML += upperCaseFirstLetter('vélo') + '<hr>';
elementChapitre12.innerHTML += upperCaseFirstLetter('bonjour à tous, nous sommes mardi') + '<hr>';

//---------------------------------
// - Objet global Math
//---------------------------------
// Outil pour faire des opérations mathématiques
separateur(elementChapitre12);
elementChapitre12.innerHTML += '<b>Objet global Math : </b><hr>';
// Math.floor() methode pour un arrondi à l'entier inférieur
elementChapitre12.innerHTML += 'La valeur 7.9 avec la methode Math.floor() : ' + Math.floor(7.9) + '<br>'; // 7

// Math.ceil() methode pour un arrondi à l'entier supérieur
elementChapitre12.innerHTML += 'La valeur 6.1 avec la methode Math.ceil() : ' + Math.ceil(6.1) + '<br>'; // 7

// Math.round() methode pour un arrondi à l'entier le plus proche
elementChapitre12.innerHTML += 'La valeur 6.1 avec la methode Math.round() : ' + Math.round(6.1) + '<br>'; // 6 
elementChapitre12.innerHTML += 'La valeur 7.9 avec la methode Math.round() : ' + Math.round(7.9) + '<br>'; // 8
elementChapitre12.innerHTML += 'La valeur 5.5 avec la methode Math.round() : ' + Math.round(5.5) + '<br>'; // 6 

// Math.abs() methode pour avoir la valeur absolue 
elementChapitre12.innerHTML += 'La valeur -5 avec la methode Math.abs() : ' + Math.abs(-5) + '<br>'; // 5


//---------------------------------
// - Objet global Date
//---------------------------------
// Outil pour faire des manipulation de date
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
separateur(elementChapitre12);
elementChapitre12.innerHTML += '<b>Objet global Date : </b><hr>';
// L'opérateur new permet de créer un nouvel objet à partir d'un constructeur qui existe natif ou défini par l'utiliseur
// Pour la manipulation de l'objet global Date() nous devons passer par le mot clé new
// Date() est en fait une fonction constructeur

let aujourdhui = new Date();
console.log(aujourdhui);

// pour avoir l'année en 4 chiffres
elementChapitre12.innerHTML += 'année en cours : ' + aujourdhui.getFullYear() + '<hr>';

// pour avoir le numéro du jour dans le mois
elementChapitre12.innerHTML += 'numéro du jour dans le mois : ' + aujourdhui.getDate() + '<hr>';

// pour avoir le numéro du jour dans la semaine (le numéro 0 correspond au dimanche)
var tabJour = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

elementChapitre12.innerHTML += 'numéro du jour dans la semaine : ' + aujourdhui.getDay() + '<hr>';
elementChapitre12.innerHTML += 'nom du jour dans la semaine : ' + tabJour[aujourdhui.getDay()] + '<hr>';

// Pour le avoir le numéro du mois dans l'année (janvier est le numéro 0)
elementChapitre12.innerHTML += 'numéro du mois dans l\'année : ' + aujourdhui.getMonth() + '<hr>';

// Exercice : affichez la date du jour, exemple au format français : 01/01/2020 
let numJour = aujourdhui.getDate();
let numMois = aujourdhui.getMonth() + 1;
let numAnnee = aujourdhui.getFullYear();
if(numJour < 10) {
    numJour = '0' + numJour;
}
if(numMois < 10) {
    numMois = '0' + numMois;
}
elementChapitre12.innerHTML += '<hr>Nous sommes le : ' + numJour + '/' +  numMois + '/' + numAnnee + '<hr>';

// pour avoir heures, minutes, secondes
elementChapitre12.innerHTML += '<hr>Il est : ' + aujourdhui.getHours() + ':' + aujourdhui.getMinutes() + ':' + aujourdhui.getSeconds() +  '<hr>';

//--------------------------------------------------
// - Chapitre13 : Les objets
//--------------------------------------------------
let elementChapitre13 = document.getElementById('contenuChapitre13');
// Pour créer un tableau array : []
// Pour créer un objet : {}

var monObjet = {}; // création d'un objet avec {}

elementChapitre13.innerHTML += 'Type de la variable monObjet : ' + typeof monObjet + '<hr>'; // object

// remplissage de l'objet : 
monObjet.pseudo = 'admin';
// autre syntaxe possible
monObjet['mail'] = 'admin@mail.fr';
console.log(monObjet);

// Affichage de l'information : 
elementChapitre13.innerHTML += monObjet['pseudo'] + '<hr>';
elementChapitre13.innerHTML += monObjet.mail + '<hr>';

// Creation et remplissage d'un objet
var objetProduit = {
    titre : 'Jean',
    categorie : 'Pantalon',
    prix : 20, // un valeur number
    couleur : ['rouge', 'vert', 'blanc', 'noir', 'rose'], // un tableau array dans l'objet
    promotion : false,
    stock : 50,
    taux : 20, // 20%    

    // methode pour calculer le prix ttc
    calculTTC : function () {
        // this représente l'élément parent. (ici représente l'objet objetProduit)
        return this.prixTTC = this.prix * (1 + (this.taux/100));
    },

    // methode pour mettre à jour le stock
    calculStock : function (quantite) {
        return this.stock = this.stock - quantite;
    }

}; // fin de la déclaration

elementChapitre13.innerHTML += 'Bonjour le produit est : ' + objetProduit.titre + ', catégorie : ' + objetProduit.categorie + '<hr>';
elementChapitre13.innerHTML += 'Prix : ' + objetProduit.prix + '€, prix TTC : ' + objetProduit.calculTTC() +  '€<hr>';
elementChapitre13.innerHTML += 'Prix TTC via la propriété : ' + objetProduit.prixTTC +  '€<hr>'; // cette propriété ne peut pax être appelée sans avoir au préalable exécuté la methode calculTTC()
elementChapitre13.innerHTML += 'Stock disponible : '  + objetProduit.stock + '<hr>';
//  mise à jour du stock
objetProduit.calculStock(3);
elementChapitre13.innerHTML += 'Stock disponible après la maj du stock : '  + objetProduit.stock + '<hr>';

elementChapitre13.innerHTML += 'Première couleur disponible pour ce produit : ' + objetProduit.couleur[0] + '<hr>';
elementChapitre13.innerHTML += 'Deuxième couleur disponible pour ce produit : ' + objetProduit['couleur'][1] + '<hr>';

elementChapitre13.innerHTML += 'Liste des couleurs disponibles : <br>';

for(let varieteCouleur of objetProduit.couleur) {
    elementChapitre13.innerHTML += '- ' + varieteCouleur + '<br>';
}





//-------------------------------------------------
// - Exercices : 
//-------------------------------------------------

// créer une section dans l'html pour afficher ces exercices : 
// Créer un tableau array contenant tous les mois de janvier à décembre
// Afficher le contenu du tableau array dans une liste ul li avec les outils suivant :
// 01 - while () {}
// 02 - for() {}
// 03 - for( in ) {}
// 04 - for( of ) {}