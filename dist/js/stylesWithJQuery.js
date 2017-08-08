$(document).ready(function() {
        
        $(window).scroll(function() {
         
          if($(this).scrollTop() > 300) { 
          	$('.nav-wrapper').removeClass('transparent z-depth-0');	
              $('.nav-wrapper').addClass('nav');
          } else {
              $('.nav-wrapper').removeClass('nav');
          }
        });
});