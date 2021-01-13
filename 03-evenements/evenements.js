/*
3 façon de mettre en place un évènement js :
-------------------------------------------

Anciennement : 
--------------
1 - par un attribut html d'évènement exemple : onclick=""
<div onclick="alert('Hello')">Cliquez sur ce div pour voir une alerte</div>

2 - Par l'évènement directement en js
document.getElementById('unId').onclick = function() {
    // CODE ...
}

3 - La bonne pratique : on rajoute un écouteur d'évènement
document.getElementById('unId').addEventListener('click', function()  {
    // CODE  ...
});

*/

// EVENEMENT CLICK
document.getElementById('div1').addEventListener('click', function() {
    // console.log('ok');
    // dans un évènement, le mot clé this représente l'élément ayant reçu l'évènément
    console.log(this.style.backgroundColor);

    let couleurActuelle = this.style.backgroundColor;

    if(couleurActuelle == 'cornflowerblue') {
        this.style.backgroundColor = 'red';
        this.style.width = '200px';
    } else if (couleurActuelle == 'red') {
        this.style.backgroundColor = 'orange';
        this.style.height = '200px';
    } else if (couleurActuelle == 'orange') {
        this.style.backgroundColor = 'purple';
        this.style.width = '100px';
    } else {
        this.style.backgroundColor = 'cornflowerblue';
        this.style.height = '100px';
    }

}); // fin de cet evenement click

// EVENEMENT DBLCLICK
document.getElementById('div2').addEventListener('dblclick', function () {
    let posTop = this.style.top;
    console.log(posTop);
    let posLeft = this.style.left;
    console.log(posLeft);

    if(posTop == '0px' && posLeft == '0px') {
        this.style.left = '100px';
    } else if (posTop == '0px' && posLeft == '100px') {
        this.style.top = '100px';
    } else if (posTop == '100px' && posLeft == '100px') {
        this.style.left = '0';
    } else {
        this.style.top = '0';
    }

});

let listeImage = document.querySelectorAll('#blocImage1 img');

// EVENEMENT MOUSEENTER & MOUSELEAVE
/*
document.getElementById('blocImage1').addEventListener('mouseenter', function () {
    // console.log(1);
    console.log(listeImage);

    listeImage[0].style.top = '-360px';
    listeImage[1].style.top = '-360px';
});
*/
document.getElementById('blocImage1').addEventListener('mouseenter', function () {
    // console.log(1);
    console.log(listeImage);

    listeImage[0].style.top = '-360px';
    listeImage[1].style.top = '-360px';
});

// EXERCICE : remettre les images dans leur position initiale lorsque l'on sort du sruvol avec la souris (mouseleave)
document.getElementById('blocImage1').addEventListener('mouseleave', function () {
    // console.log(1);
    console.log(listeImage);

    listeImage[0].style.top = '0';
    listeImage[1].style.top = '0';
});


// CAROUSEL

document.getElementById('changerImage').addEventListener('click', function (e) {
    // le fait de mettre un argument de réception dans la fonction qui se déclenche, permet de récupérer cet évènement.
    // Cela nous permet ensuite notamment de le bloquer : 
    e.preventDefault(); // .preventDefault() permet d'annuler un évènement.

    let imageEnCours = document.getElementById('blocImage2').getAttribute('data-image');
    console.log(imageEnCours);

    if(imageEnCours == 'image1') {
        document.getElementById('image1').style.opacity = 0;
        document.getElementById('image2').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image2');
    } else if(imageEnCours == 'image2') {
        document.getElementById('image2').style.opacity = 0;
        document.getElementById('image3').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image3');
    } else if(imageEnCours == 'image3') {
        document.getElementById('image3').style.opacity = 0;
        document.getElementById('image4').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image4');
    } else if(imageEnCours == 'image4') {
        document.getElementById('image4').style.opacity = 0;
        document.getElementById('image5').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image5');
    } else {
        document.getElementById('image5').style.opacity = 0;
        document.getElementById('image1').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image1');
    }
    
});

// document.getElementById('changerImage').addEventListener('click', activeCarousel); // pour déclencher l'évènement avec cette fonction plutôt que l'écriture au dessus.


// pour déclencher une fonction selon un timer
// setInterval(la_fonction, timer_milliseconde)
// L'idée est de déclencher le carousel avec le setInterval()
let animationCarousel = setInterval(activeCarousel, 3000);
function activeCarousel(e = '') {
    // le fait de mettre un argument de réception dans la fonction qui se déclenche, permet de récupérer cet évènement.
    // Cela nous permet ensuite notamment de le bloquer :
    if (e != '') {
        e.preventDefault();
    }   
    let imageEnCours = document.getElementById('blocImage2').getAttribute('data-image');
    console.log(imageEnCours);

    

    if(imageEnCours == 'image1') {
        document.getElementById('image1').style.opacity = 0;
        document.getElementById('image2').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image2');
    } else if(imageEnCours == 'image2') {
        document.getElementById('image2').style.opacity = 0;
        document.getElementById('image3').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image3');
    } else if(imageEnCours == 'image3') {
        document.getElementById('image3').style.opacity = 0;
        document.getElementById('image4').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image4');
    } else if(imageEnCours == 'image4') {
        document.getElementById('image4').style.opacity = 0;
        document.getElementById('image5').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image5');
    } else {
        document.getElementById('image5').style.opacity = 0;
        document.getElementById('image1').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image1');
        // clearInterval(animationCarousel); // pour arreter le setInterval()
    }    
}

// EXERCICE : 
// Faire un nouveau div dans la page html avec une couleur de fond
// Tant que l'utilisateur garde appuyé le clic sur la souris on change la couleur du div
// Lorsque l'utilisateur relache le clic de la souris on remet la couleur initiale.
// evenement => clic appuyé : mousedown
// evenement => clic relaché : mouseup

// mousedown
document.getElementById('div3').addEventListener('mousedown', function () {
    this.style.backgroundColor = "red";
});

// mouseup
document.getElementById('div3').addEventListener('mouseup', function () {
    this.style.backgroundColor = "darkorchid";
});

// changer la couleur au survol
var color = 100000;

function changerCouleur(elem) {
    if(color >=  999999) {
        color = 100000;
    }
    color += 2154;
    console.log(color);
    return elem.style.backgroundColor = '#' + color ;
}
var effet;
document.getElementById('div3').addEventListener('mouseenter', function () {
    effet = setInterval(function () {
        changerCouleur(document.getElementById('div3'));
    }, 1000);
});

document.getElementById('div3').addEventListener('mouseleave', function () {
    clearInterval(effet);
});