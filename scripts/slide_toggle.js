$(document).ready(function() {
 
  	$('#toggle_container .title .icon').click(function() {
  		if($("i", this).hasClass("fa fa-plus-circle"))
  		{
			$(this).parent().next().slideDown('250');
			$("i", this).removeClass("fa fa-plus-circle");
			$("i", this).addClass("fa fa-minus-circle");
		}
		else if($("i", this).hasClass("fa fa-minus-circle"))
  		{
			$(this).parent().next().slideUp('250');
			$("i", this).removeClass("fa fa-minus-circle");
			$("i", this).addClass("fa fa-plus-circle");
		}
		
});
	$('#toggle_container .title .title_text').click(function() {
  		if($(this).next().find('i').hasClass("fa fa-plus-circle"))
  		{
			//$('.body_text').slideDown('250');
			$(this).parent().next().slideDown('250');
			$(this).next().find('i').removeClass("fa fa-plus-circle");
			$(this).next().find('i').addClass("fa fa-minus-circle");
		}
		else if($(this).next().find('i').hasClass("fa fa-minus-circle"))
  		{
			//$('.body_text').slideUp('250');
			$(this).parent().next().slideUp('250');
			$(this).next().find('i').removeClass("fa fa-minus-circle");
			$(this).next().find('i').addClass("fa fa-plus-circle");
		}
});

});

  
