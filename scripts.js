$(document).ready(function(){
    var className = "k";
    $('.color').click(function(event) {
        className = $(this).attr('class');
        console.log(className[0]);
   });
    $('td').on('click', function(event) {
        $('td').on('mouseover', function(event) {
            $(this).toggleClass(className[0]);
        });
    });
});
