$(function(){

    $vehicules = $('#vehicules');

    $(vehicules).each((index, vehicule) => {

        console.log( vehicule );

        //  Illustrations
        // --

        // Creation des items du carousel
        $carousel_items = $('<div>').addClass("carousel-inner");

        $(vehicule.illustrations).each((index, illustration) => {

            $img = $('<img>').attr('src', `./assets/images/${illustration}`)

            $item = $('<div>').addClass("carousel-item");
            $item.append($img);

            if (index == 0) $item.addClass("active");

            $carousel_items.append($item);
        });

        // Creation de elements de controle
        $carousel_control_left = $('<a>');
        $carousel_control_right = $('<a>');

        // Création du carousel
        $carousel = $('<div>').addClass("carousel").addClass("slide");
        $carousel.attr('id', vehicule.id).data('ride', "carousel");

        $carousel.append($carousel_items);
        // $carousel.append($carousel_control_left);
        // $carousel.append($carousel_control_right);

        // Creation de la colonne contenant les illustrations du vehicule
        $col_illustration = $('<div>').addClass("col-8").addClass("col-md-6");
        $col_illustration.append($carousel);


        // Description
        // --

        $h_model = $('<h3>').text( vehicule.model );
        $p_description = $('<p>').text( vehicule.description );
        $p_price = $('<p>').html( `${vehicule.amount} &euro; - Agence de ${vehicule.location}` );
    
        // Decription
        $div_description = $('<div>').addClass('d-none').addClass('d-lg-block');
        $div_description.append($h_model);
        $div_description.append($p_description);
        $div_description.append($p_price);

        // Bouton de reservation
        $btn = $('<button>').addClass('btn').addClass('btn-sm').addClass('btn-success');
        $btn.text("Réserver et Payer");

        // Creation de la colonne contenant la description du vehicule
        $col_description = $('<div>').addClass("col-4").addClass("col-md-6");
        // Injection de la dic description
        $col_description.append($div_description);
        // Injection du bouton de réservation
        $col_description.append($btn);

        

        // Ligne "item"
        // --

        // Creation de la ligne contenant les données du vehicule
        $row = $('<div>').addClass("row");
        // Injection de la colonne contenant les illustrations du vehicule
        $row.append($col_illustration);
        // Injection de la colonne contenant la description du vehicule
        $row.append($col_description);



        // Création de la colonne <.col-item>
        $item = $('<div>').addClass("col-12").addClass("col-item");
        // Injection de la ligne contenant les données du vehicule dans <.col-item>
        $item.append($row);

        // Injection du code HTML dans la balise <#vehicules>
        $vehicules.append($item);


        // Déclanchement manuel du carousel Bootstrap
        $(`#${vehicule.id}`).carousel({
            interval: 2000
        });
          
    });
});