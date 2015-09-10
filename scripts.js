$(document).ready(function(){
    
    var className = "k";
    
    $('.color').click(function() {
        className = $(this).attr('class');
        $('td').removeClass('gomme');
    });
    
    $('td').on('mousedown', function() {
        $('td').on('mouseover', function() {
            $(this).addClass(className[0]);
        });
    });
    $('body').on('mouseup', function() {
        $('td').off('mouseover')
    });
    
    $( "td" ).mousedown(function(){return false;});
    
    $('.color').click(function() {
        var color = $(this).css("background-color");
        $('h1').replaceWith("<h1 style='color: " + color + ";'>Petit paint un peu nul</h1>");
    });
    
    $('.w').click(function() {
        $('td').toggleClass('gomme');
    });
    
    $(".plus").click(function() {
        $('.blabla').animate({
            width: "60%"
        }, 1200);
        $('.palette').animate({
            width: "39.5%"
        }, 1200);
        $('.palette-plus .color').addClass('display');
    });
});
