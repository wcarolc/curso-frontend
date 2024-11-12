//jQuery(function($)
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    $('.featured-item a').addClass('btn btn-dark strech-link');

    $('.featured-item a').on('blur', function(event){

        event.preventDefault();
        alert('Produto esgotado');

    })

    $('.featured-item:nth(1)')
    .hide(500, function(){
        // este é o callback
        console.log( $(this).find('h4').text() + " esgotado")
    })
    .show(500, function(){
        console.log( $(this).find('h4').text() + " em estoque")
    })


})
