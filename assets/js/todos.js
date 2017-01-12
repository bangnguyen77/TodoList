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