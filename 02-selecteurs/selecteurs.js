/*
    DOM : DOCUMENT OBJECT MODEL
    ---------------------------
    - Le DOM est une interface interne aux navigateurs.
    - Le DOM permet que chaque élément html (balises), chaque attribut (width, href, alt, src, id, class, title, ...) et chaque évènement (chargement de la page, click, dblclick, mouseenter, mouseout, keypress, keyup, ...) est un objet récupérable et manipulable avec javascript
*/

//---------------------------------
// - SELECTION PAR L'ID
//---------------------------------
let sectionElem = document.getElementById('maSection');

console.log('Section : ' + sectionElem); // [object HTMLElement]
console.log(sectionElem);

// Pour récupérer le contenu texte 
console.log(sectionElem.textContent);
// Pour récupérer le contenu HTML
console.log(sectionElem.innerHTML);

// Pour modifier :
sectionElem.innerHTML = '<h3>Bonjour à tous</h3>';

// pour manipuler le css de l'élément, on passe par son attribut style : 
sectionElem.style.backgroundColor = 'steelblue';
sectionElem.style.fontSize = '42px'; 
sectionElem.style.padding = '30px'; 

// tous les attributs de balise sont disponibles : 
sectionElem.title = 'Un test';

/*
// Pour voir tous les éléments disponibles de l'objet : 
for(let indice in sectionElem) {
    console.log(indice + ' : ' + sectionElem[indice]);
}
*/

//---------------------------------
// - SELECTION PAR LE NOM DE CLASSE
//---------------------------------
let mesElemDiv = document.getElementsByClassName('mesDivs');
console.log('Mes elements div : ' + mesElemDiv); // [object HTMLCollection]
console.log(mesElemDiv);

// on change le texte dans le premier element :
mesElemDiv[0].textContent = 'Nous sommes mardi';

// pour impacter tous éléments : une boucle
for(let i = 0; i < mesElemDiv.length; i++) {
    // style.cssText : remplace tout le contenu de l'attribut style
    mesElemDiv[i].style.cssText = 'font-family: sans-serif; font-size: 21px; color: orange; background-color: lightblue; padding: 10px;';
    mesElemDiv[i].style.marginTop = '10px';

    // autre façon de gérer un attribut : setAttribute()
    mesElemDiv[i].setAttribute('title', 'Hello titre');
}
// setAttribute('nom_de_lattribut', 'sa_valeur') // permet de manipuler un attribut
// getAttribute('nom_de_lattribut') // permet de récupérer la valeur de l'attribut

//---------------------------------
// - SELECTION PAR LE NOM DE BALISE
//---------------------------------
let mesElemP = document.getElementsByTagName('p');
console.log('Mes elements p : ' + mesElemP); // [object HTMLCollection]
console.log(mesElemP);

let bgColor = 654815;
for(let y = 0; y < mesElemP.length; y++) {
    mesElemP[y].style.backgroundColor = "#" + bgColor;
    mesElemP[y].style.padding = "20px";
    mesElemP[y].style.color = "white";

    bgColor += 2846; // en  changeant la valeur de bgColor qui représente la valeur hexadécimale de l'élément, on change la couleur.
    console.log(bgColor);
}


// Exercice : appliquer du css sur ces balises via une boucle.
// Si vous pouvez, essayez d'appliquer une couleur différente sur chaque p dans une boucle.

//---------------------------------
// - SELECTION CAS PARTICULIER
//---------------------------------
// par un id directement
let idResultat = resultat; // on appelle directement le nom de l'id
console.log('Mon element avec id resultat : ' + idResultat); // [object HTMLDivElement]
console.log(idResultat);

// body et head
let monElemBody = document.body; // pareil pour head
console.log('Mon element body : ' + monElemBody); // [object HTMLBodyElement]
console.log(monElemBody);

//---------------------------------
// - SELECTION AVEC querySelector() & querySelectorAll()
//---------------------------------
// querySelector() nous renvoie le premier élément correspondant au selecteur mis dans les parentheses
// querySelectorAll() nous renvoie tous les éléments correspondant au selecteur mis dans les parentheses 

let premierElementP = document.querySelector('body p');
console.log('Le premier element P : ' + premierElementP); // [object HTMLParagraphElement]
console.log(premierElementP);

let tousLesDivEtP = document.querySelectorAll('div, p');
console.log('Tous les éléments div & P : ' + tousLesDivEtP); // [object NodeList]
console.log(tousLesDivEtP);

/*
RESUME DES SELECTEURS
---------------------
- Sélection naturelle => id / document.body / document.head
- Par son id => document.getElementById()
- par sa classe => document.getElementsByClassName()
- par sa balise => document.getElementsByTagName()
- par un selecteur (css) => document.querySelector() ou document.querySelectorAll()
*/