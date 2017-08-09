$(document).ready(function(){	
	$("#filtros").click(function(){
		if($("#filter").hasClass("hide")== true){
			$("#filter").removeClass("hide");
		}
		else{
			$("#filter").addClass("hide");
		}

	});
		$(document).ready(function() {
	   var slider = document.getElementById('test-slider');
	    $('.slider').slider();
	    // Pause slider
	    $('.slider').slider('pause');
	    // Start slider
	    $('.slider').slider('start');
	    // Next slide
	    $('.slider').slider('next');
	    // Previous slide
	    $('.slider').slider('prev');
	 });

	
})