$(document).ready(function(){
	
	$('.carousel').carousel({ 

  interval: 3000 

});
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});
$(".right").click(function(){
  $("#myCarousel").carousel("next");
});
	
}); 
