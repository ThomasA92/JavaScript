$(document).ready(function() {

    // il faut bloquer le rechargement de page lors du clic sur les liens a car ils nous servent de lanceur pour les évènements.

    // en natif
    /*
    let listeA = document.getElementsByTagName('a');
    for(let i = 0; i < listeA.length; i++) {
        listeA[i].addEventListener('click', function(evenementClic) {
            evenementClic.preventDefault();
        });
    }
    */

    // avec jQuery
    // .on() est l'équivalent du .addEventListener() en natif
    $('a').on('click', function(evenementClic) { 
        evenementClic.preventDefault();
    });


    // LES ANIMATIONS FADE
    //--------------------
    // permet de faire apparaitre ou disparaitre un élément.
    
    // disparition : fadeOut(temps_danimation)
    $('#disparition').click(function() {  // $('#disparition').on('click', function() {});
        $('#div1').fadeOut(2000);
    });

    // Exercice : faire la même chose pour le div suivant bouton : #apparition, div : div2
    // apparition : fadeIn(temps_danimation)
    $('#apparition').click(function () {
        $('#div2').fadeIn(3000);
    });

    // Toggle : soit l'un soit l'autre.
    $('#toggle').on('click', function () {
        $('#div3').fadeToggle(2000);

        let contenuText = $(this).text(); // on récupère le contenu texte
        if(contenuText == 'Disparition') { // selon la valeur du texte récupéré, on change le texte du bouton
            $(this).text('Apparition');
        } else {
            $(this).text('Disparition');
        }

    });

    // fadeTo(temps, valeur_opacity)
    // fade to permet de gérer la valeur finale de l'opacité
    $('#fadeTo').on('click', function () {
        $('#div4').fadeTo(2000, 0.2);
    });


    // LES ANIMATIONS AVEC ANIMATE
    //----------------------------
    // .animate( { les_propriétés_css }, temps )
    // .delay( temps ) // permet de mettre une pause dans l'animation

    $('#simple').on('click', function () {

        $('#div5')
        .animate( { left: '400px', width: '100px', height: '100px', borderRadius: '50%' }, 2000)
        .delay(2000)
        .animate( { left: '0', width: '200px', height: '200px', borderRadius: '0' }, 2000);
    });


});