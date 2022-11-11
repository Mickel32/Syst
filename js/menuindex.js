$(document).ready(function(){
    var altura = $('#logo').offset().top;
    $('#logo').css({"background-color": "#666B7180"});
    $('.text-menu').css({"color": "#FFFFFF"});
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 300){
            $('#logo').css({"background-color": "#FFFFFF"});
            $('.text-menu').css({"color": "#000000"});
        }else{
            $('#logo').css({"background-color": "#666B7180"});
            $('.text-menu').css({"color": "#FFFFFF"});
        }
    });
})
