$(document).ready(function(){
    var className = "k";
    
    $('.color').mouseenter(function(){
        $(this).animate({color: '#0687f8'}, 'slow')
    });
    $('.color').mouseleave(function(){
        $(this).animate({width: "50px", height: "50px", marginTop: "20px"}, 'slow')
    });
    
    $('.color').click(function() {
        className = $(this).attr('class');
        console.log(className[0]);
   });
    $('td').on('click', function() {
        $('td').on('mouseover', function() {
            $(this).toggleClass(className[0]);
        });
    });
});
