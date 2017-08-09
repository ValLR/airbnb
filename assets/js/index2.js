$(document).ready(function(){	
	$("#filtros").click(function(){
		if($("#filter").hasClass("hide")== true){
			$("#filter").removeClass("hide");
		}
		else{
			$("#filter").addClass("hide");
		}

	});
})