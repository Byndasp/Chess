$(document).ready(function(){
	
	$("tr:even td:odd").css("background","url(dark.jpg)");
	$("tr:odd td:even").css("background","url(dark.jpg)");
	$("td").slice(8,16).wrapInner("<img src=image/darkPawn.png>");
	$("td").slice(48,56).wrapInner("<img src=image/lightPawn.png>");
	$("tr:first td:first-child" ).wrapInner("<img src=image/darkRook.png>");
	$("tr:first td:last-child").wrapInner("<img src=image/darkRook.png>");
	$("tr:last td:first-child" ).wrapInner("<img src=image/lightRook.png>");
	$("tr:last td:last-child").wrapInner("<img src=image/lightRook.png>");
	$("td:eq(1)").wrapInner("<img src=image/darkHorse.png>");
	$("td:eq(6)").wrapInner("<img src=image/darkHorse.png>");
	$("td:eq(2)").wrapInner("<img src=image/darkBishop.png>");
	$("td:eq(5)").wrapInner("<img src=image/darkBishop.png>");
	$("td:eq(3)").wrapInner("<img src=image/darkQueen.png>");
	$("td:eq(4)").wrapInner("<img src=image/darkKing.png>");
	$("tr:last td:eq(1)").wrapInner("<img src=image/lightHorse.png>");
	$("tr:last td:eq(6)").wrapInner("<img src=image/lightHorse.png>");
	$("tr:last td:eq(2)").wrapInner("<img src=image/lightBishop.png>");
	$("tr:last td:eq(5)").wrapInner("<img src=image/lightBishop.png>");
	$("tr:last td:eq(3)").wrapInner("<img src=image/lightQueen.png>");
	$("tr:last td:eq(4)").wrapInner("<img src=image/lightKing.png>");
	$("img").slice(0,16).wrap("<div id=black></div>");
	$("img").slice(16,32).wrap("<div id=white></div>");
	$("div").slice(8,24).addClass("pawn");
	
	$("div").draggable({
		containment:"table",
		revert: "invalid",
		stack:"div",
	});
	
	$("td").droppable({
		drop: function(ev, ui) {
			var dropped = ui.draggable;
			var droppedOn = $(this);
			if($(droppedOn).not("td:empty")){
				if($(dropped).is("#black")){
					if($("div",this).is("#black")){
						$(dropped).draggable({revert:true});
						return;
					};
					$("div",this).clone().prependTo("#left");					
				};
				if($(dropped).is("#white")){
					if($("div",this).is("#white")){
						$(dropped).draggable({revert:true});
						return;
					}
					$("div",this).clone().prependTo("#right");
				};				
			};
			$(droppedOn).not("td:empty").empty();
			$(dropped).parent().droppable("enable");
			$(dropped).detach().css({top: 0, left: 0}).appendTo(droppedOn);
		}
	});   	

});
		
