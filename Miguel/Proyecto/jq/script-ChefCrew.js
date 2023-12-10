$(document).ready(function() {
    
    $("#volverarriba").click(function(e){
        (e).preventDefault();
        $("body,html").animate({scrollTop:0},"slow");
        return false;
    })
    $(window).scroll(function() {
        if($(window).scrollTop()>5){
            $("#volverarriba").show();
        }else{
            $("#volverarriba").hide();
        }
        $('#menuPrincipal>ul').slideUp();
        $('#login>ul').slideUp();
        $('#ventanalogin').css({"display":"none"});

    });
    $( window ).resize(function() {
        $('#menuPrincipal>ul').slideUp();
        $('#login>ul').slideUp();
        $('#ventanalogin').css({"display":"none"});

    });
$('#menu-principal').click(function (e) { 
    e.preventDefault();
    $('#menuPrincipal>ul').css({"z-index": "2"});
    $('#menuPrincipal>ul').slideDown();;
});

$('#cabeceraMenu').click(function (e) { 
    e.preventDefault();
    $('#menuPrincipal>ul').slideUp();
});
$('main').click(function () {
    $('#menuPrincipal>ul').slideUp();
    $('#ventanalogin').css({"display":"none"});
    $("article>img").click(function(e){
        e.preventDefault;
        $("#receta").css({"display":"flex"})
    })
    
   
});

$('#btnlogin').click(function (e) { 
    e.preventDefault();
    $('#login>ul').css({"z-index": "2"});
    $('#login>ul').slideDown();;
});

$("#cabeceraMenuLogin").click(function (e) { 
    e.preventDefault();
    $('#login>ul').slideUp();
});
$('main').click(function () {
    $('#login>ul').slideUp();
});
$("#perfil").click(function(e){
    e.preventDefault();
    $('#ventanalogin').css({"display":"flex"});
});
$(".xlogin").click(function(e){
    e.preventDefault();
    $('#ventanalogin').css({"display":"none"});
});
$("article>img").click(function(e){
    e.preventDefault;
    $("#receta").css({"display":"flex"})
})
$("#receta>#cerrarReceta").click(function(e){
    e.preventDefault;
    $("#receta").css({"display":"none"})
})

$("#cabeceraMain a").mouseenter(function () { 
    $(this).css({"background-color":"#A84322"});
});
$("#cabeceraMain a").mouseleave(function () { 
    $(this).css({"background-color":"#f58f6e"});
});
})