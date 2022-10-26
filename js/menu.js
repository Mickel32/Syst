$(document).ready(function(){
    var altura = $('#logo').offset().top;
    $('#logo').css({"background-color": "#FFFFFF80"});
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 500){
            $('#logo').css({"background-color": "#FFFFFF"});
        }else{
            $('#logo').css({"background-color": "#FFFFFF80"});
        }
    });
})