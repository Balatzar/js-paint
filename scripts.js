$(document).ready(function(){
    var className = "k";
    
    $('.color').click(function() {
        className = $(this).attr('class');
   });
    
    
    $('td').on('click', function() {
        $('td').on('mouseover', function() {
            $(this).toggleClass(className[0]);
        });
    });
    
    $('.color').click(function() {
        var color = $(this).css("background-color");
        $('h1').replaceWith("<h1 style='color: " + color + ";'>Petit paint un peu nul</h1>");
    });
    
});
