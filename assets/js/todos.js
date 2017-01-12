// alert("Connected!");
// check off specific Todos by clicking

// $("li").click(function() {
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration", "line-through");
// }); this is them same as belows

// $("li").click(function() {
// 	// if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)") {
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} else {
// 		// turn it gray
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

$("li").click(function() {
	$(this).toggleClass("completed");
});

// click on X to delete a Todo
// $("span").click(function(event) {
// 	alert('clicked on a span');
// 	event.stopPropagation(); // prevent event bubbling
// });

// $("span").click(function(event) {
// 	$(this).parent().remove();
// 	event.stopPropagation();
// });

// $("span").click(function(event) {
// 	$(this).parent().fadeOut(); // the lis were not removed, just display: "none"
// 	event.stopPropagation();
// });

$("span").click(function(event) {
	$(this).parent().fadeOut(500, function() { // this here is the span clicked 
		$(this).remove(); // this here is the parent element that was clicked (li)
	});
	event.stopPropagation();
});


// Add a new Todo
// $("input[type='text']").keypress(function() {
// 	console.log("keypressed"); // any key
// });

// $("input[type='text']").keypress(function(event) {
// 	if(event.which === 13) {
// 		console.log('You hit the Enter key'); // only Enter key was hit
// 	}
// });

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		// clear out the input after users enter an input
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});
















