/**
 * Lazy Load
 */

$(function() {
    $(document).on("scroll", lazyload);
});

// Chargement des images au fur et à mesure qu'elles apparaîssent
function lazyload()
{
    // Hauteur de ma fenêtre
    let hauteurFenetre = $(window).height();

    // Position de ma scrollbar
    let positionScroll = $(window).scrollTop();

    $("img").each(function() {
        // console.log(hauteurFenetre + positionScroll, $(this).offset().top);
        if ((hauteurFenetre + positionScroll) > $(this).offset().top) {
            // Je modifie l'attribut "src" de l'image par la valeur contenu dans
            // l'attribut "data-src"
            $(this).attr("src", function() {
                return $(this).data("src");
            });
        }
    });
}