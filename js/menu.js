var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav");
var slider=$('#slider');
var anterior=$('#btn-prev');
var siguiente=$('#btn-next');


btnMenu.addEventListener('click', function(){
nav.classList.toggle('mostrar');
});



/*--------------slider---------------------*/

$('#slider li:last').insertBefore('#slider li:first');

slider.css('margin-left', '-'+100+'%');

function moverD(){
   slider.animate({marginLeft:'-'+200+'%'},800,function(){
      $('#slider li:first').insertAfter('#slider li:last');
       slider.css('margin-left', '-'+100+'%');
   }); 
}

function moverI(){
   slider.animate({marginLeft:0},800,function(){
      $('#slider li:last').insertBefore('#slider li:first');
       slider.css('margin-left', '-'+100+'%');
   }); 
}

siguiente.on('click', function(){
             moverD();
             });
anterior.on('click', function(){
             moverI();
             });

/*--------------scroll---------------------*/

$('#inicio').on('click', function(){
    $('html,boy').animate({scrollTop:0}, 1500);
})
$('#nosotros').on('click', function(){
    $('html,boy').animate({scrollTop:590}, 1500);
})
$('#nosotros2').on('click', function(){
    $('html,boy').animate({scrollTop:590}, 1500);
})
$('#catalogo').on('click', function(){
    $('html,boy').animate({scrollTop:1180}, 1500);
})
$('#catalogo2').on('click', function(){
    $('html,boy').animate({scrollTop:1180}, 1500);
})


