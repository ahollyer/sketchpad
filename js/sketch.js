var gridSize = 16;


$(document).ready(function() {

	for (var i = 0; i < gridSize * gridSize; i++) {
		$("#canvas").append('<div class="box"></div>');
	}

	$(".box").css({
		'width': $('#canvas').width() / gridSize,
		'height': $('#canvas').height() / gridSize
	})
	
	$(".box").mouseenter(function(){
		$(this).css("background-color", "#b2b2b2")
	})
});