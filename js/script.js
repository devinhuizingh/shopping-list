$(document).ready(function() {


$('button').click(function(e) {
	e.preventDefault();
	$('#list').prepend('<li><button class="checkbutton">Got It</button><button class="deletebutton">Delete</button>' + $('input#item').val() +  '</li>');
})




//$('.deletebutton').on('click', 'li', function(event){
;//})
var i = 0;

$('#list').on('click', '.deletebutton', i, function(event){
	console.log ("button clicked");
	console.log(event);
	$(this).closest('li').remove();
})

})




