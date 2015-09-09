$(document).ready(function(){
    var className = "k";
    
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
