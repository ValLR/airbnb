$(document).ready(function() {
    $('select').material_select();

    var slider = document.getElementById('test-slider');
  	noUiSlider.create(slider, {
   	start: [20, 80],
   	connect: true,
   	step: 1,
   	orientation: 'horizontal', // 'horizontal' or 'vertical'
   	range: {
     'min': 0,
     'max': 100
   	},
   		format: wNumb({
     	decimals: 0
   		})
  	});
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
