$(document).ready(function(){

	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
	});	
	
	$('.carousel').carousel({
            dist:0, //la propiedad dist en 0  quita el zoom pero no está funcionando
            shift:0,
            padding:20,

      });

	/*NAV NAV NAV*/
	
	$(window).scroll(function() {
		
		if($(this).scrollTop() > 100) { 
			$('.nav-wrapper').removeClass('transparent z-depth-0');	
			$('.nav-wrapper').addClass('nav');
		} else {
			$('.nav-wrapper').removeClass('nav');
		}
	});

});