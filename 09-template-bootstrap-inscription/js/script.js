$(document).ready(function() {

    // Affichage du mot de passe lors du click sur l'icone.
    $('#affichage-mdp, #affichage-mdp-inscription, #affichage-mdp-confirmation').on('mousedown', function() {
        // on change la valeur de l'attribut type du champ. Le fait de le passer en text permet l'affichage de la saisie
        // $('#mdp, #mdp-inscription, #mdp-confirmation').attr('type', 'text');

        // .parent() est un selecteur jquery permettant de récupérer l'element parent immédiat

        /*
        <div> <!-- ce div est le direct parent de la balise p -->
            <p>Test</p>
        </div>
        */

        // .next() est un selecteur jquery permettant de récupérer l'element html suivant au même niveau 
        /*
        <div id="depart"></div>
        <div></div><!-- element .next() depuis le div id="depart" -->
        <div></div><!-- element .next().next() depuis le div id="depart" -->
        <div></div><!-- element .next().next().next() depuis le div id="depart" -->
        */
        $(this).parent().next().attr('type', 'text');


        // on change la classe de l'icone pour afficher un icone non barré
        $(this).attr('class', 'fas fa-eye');

        // exercice mettre en place un evenement "mouseup" pour remettre le type password et remettre l'icone initial
        
        $('body').on('mouseup', function() {
            $('#mdp, #mdp-inscription, #mdp-confirmation').attr('type', 'password');
            $("#affichage-mdp, #affichage-mdp-inscription, #affichage-mdp-confirmation").attr('class', 'fas fa-eye-slash');
        });      

    });

    /*
    $('#affichage-mdp').on('mouseleave', function() {
        $('#mdp').attr('type', 'password');
        $(this).attr('class', 'fas fa-eye-slash');
    });
    */

    /*
    $('#affichage-mdp').on('mouseup', function() {
        $('#mdp').attr('type', 'password');
        $(this).attr('class', 'fas fa-eye-slash');
    });
    */

// CONTROLE SUR la valididité des saisie du formulaire d'inscription
// On met en place un évènement sur la validation du formulaire afin de le bloquer pour appliquer nos contrôles.
// Un formulaire peut être validé de plusieurs façons(clic sur le bouton, entrée dans un champ input...),dans ce cas l'évènement qui couvre toutes ces actions : "submit"
$('#modal-inscription form').on('submit', function(e){
    // on bloque le submit
    e.preventDefault();

    // pour récupérer la valeur d'un champ de formulaire : 
    // En natif : 
    let valeurPseudo = document.getElementById('pseudo-inscription').value;
     //
     let valPseudo = $('#pseudo-inscription').val();
     // La méthode Trim() permet d'enlever les espaces en début et en fin de chaîne mais pas au milieu de chaîne.
     console.log(valPseudo);
     valPseudo =valPseudo.trim();
     console.log(valPseudo);

     // 1er contrôle : la pseudo doit avoir entre 4 et 14 caractères inclus, sinon message d'erreur pour l'utilisateur.
    let taillePseudo = valPseudo.length;
    console.log(taillePseudo);

    if(taillePseudo < 4 || taillePseudo >14)
    // cas d'erreur !
    $('message').append('<div class="alert alert-danger mb-3">Attention, <br> le pseudo doit avoir entre 4 et 14 caractères inclus ! </div>' );

    // mise en place du calendrier sur le champ date de naissance via leplugin jQuery-ui Datepicker
$('#,naissance-inscription').datepicker();
    
// pour valider le formulaire.submit()
// si le div id="message" est vide : alors il n'y a pas eu d'erreur, on valide le formulaire.

}); // Fin du DOCUMENT READY