$(function(){
	var set = {
		starCount: 30,
		meteorCount: 20	
	}
	var c, e, f, g, h, i = "";	
	
	for ( j = 0; j < set.starCount; j++){
		c = (640 * Math.random()).toFixed(2), 
		e = (600 * Math.random()).toFixed(2), 
		g = Math.random().toFixed(2), 
		h = (1 + 4 * Math.random()).toFixed(), 
		f = Math.round(1 + 3 * Math.random()), 
		i += '<i class="star style' + f + '" style="left:' + c + "px; top:" + e + "px; -webkit-animation-delay:" + g + "s; -webkit-animation: star " + h + 's linear infinite;"></i>';
	}
	$(".m-animationBox").html(i);
});	