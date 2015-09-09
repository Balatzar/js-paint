$(document).ready(function(){
    
    var className = "k";
    
    $('.color').click(function() {
        className = $(this).attr('class');
   });
    
    
    $('td').on('mousedown', function() {
        $('td').on('mouseover', function() {
            $(this).toggleClass(className[0]);
        });
    });
    $('td').on('mouseup', function() {
        $('td').off('mouseover')
    });
    
    
    
    $('.color').click(function() {
        var color = $(this).css("background-color");
        $('h1').replaceWith("<h1 style='color: " + color + ";'>Petit paint un peu nul</h1>");
    });
    
    $(".plus").click(function() {
        $('.blabla').animate({
            width: "60%"
        }, 1200);
        $('.palette').animate({
            width: "39.5%"
        }, 1200);
        $('.palette-plus .color').toggleClass('display');
    });
});
