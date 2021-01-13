// console.log($())
$(document).ready(function () { // on ne déclenche rien tant que la page n'est pas entièrement chargée

// l'outil jQuery est représenté par : $
// Il est toujours possible de l'appeler via l'ancienne façon : jQuery
// console.log($());
// console.log(jQuery());

//-------------------
// SELECTION PAR L'ID
//-------------------

// let maSection = document.getElementById('maSection'); // en natif
let maSection = $('#maSection');

console.log(maSection);

// Pour changer le contenu texte : en natif : textContent, avec jQuery : text()
maSection.text('<p>Bienvenue sur notre site</p>');

// Pour changer le contenu html et texte : en natif : innerHTML, avec jQuery : html()
maSection.html('<h4>Hello world !</h4>');


//-------------------
// SELECTION PAR UNE CLASSE
//-------------------
let mesElemDiv = $('.mesDivs');
console.log(mesElemDiv);

// pour changer le css d'un élément : css()
// pour changer une propriété : .css( 'propriété', 'valeur' )
// pour changer plusieurs propriétés : .css( { propriete1: 'valeur1', 'propriete2' : 'valeur2', propriete3: 'valeur3' } );

mesElemDiv.css('margin-top', '10px');
// font-family: sans-serif; font-size: 21px; color: orange; background-color: lightblue; padding: 10px;
mesElemDiv.css( { 
                    'font-family': 'sans-serif', 
                    fontSize: '21px', 
                    color: 'orange', 
                    backgroundColor: 'lightblue', 
                    padding: '10px' 
                } );


//-------------------
// SELECTION PAR UNE BALISE
//-------------------                
let mesElemP = $('p');

let bgColor = 654815;
let tailleMesElemsP = mesElemP.length;

// en natif
console.log(tailleMesElemsP);
let i = 0;
while(i < tailleMesElemsP) {
    mesElemP[i].style.padding = "20px";    
    i++;
}

// .each() est une methode de jquery permettant de faire une boucle pour traiter chaque élément d'un tableau l'un après l'autre :
// avec jQuery
mesElemP.each(function() {
    $(this).css( {backgroundColor: '#' + bgColor, color: 'white'} );
    bgColor += 2846;
});


//-------------------
// SELECTION MULTIPLE
//-------------------   
let multiples = $('div, p, span');
console.log(multiples);

// pour rajouter un attribut en natif => setAttribute('nomdelattribut', 'valeur');
multiples.attr('title', 'un test');

multiples.css('border', '3px solid red');

/*
// RESUME DES SELECTEURS : 
-------------------------- 

- par un nom de balise          => $('p')
- par un id                     => $("#monId")
- par une classe                => $('.maClasse')
- par lui même                  => $(this)
- par un type                   => $('input:text')
- par un attribut               => $('img[alt]')
- par la valeur d'un attribut   => $('a[title="Paris"]')
- par un chemin css             => $('body > div > p')
- selection multiple            => $('#monId, p, .truc a:first-child(), span')

*/






}); // fin document ready