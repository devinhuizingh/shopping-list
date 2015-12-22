$(document).ready(function() {


$('button').click(function(e) {
	e.preventDefault();
	$('#list').prepend('<li><button class="checkbutton">Got It</button><button class="deletebutton">Delete</button>' + $('input#item').val() +  '</li>');
	$('#item').val('');
});



$('#list').on('click', '.deletebutton', function(event){
		$(this).closest('li').remove();
});

$('#list').on('click', '.checkbutton', function(event){
	$(this).closest('li').insertBefore($('#test'));
	$(this).remove();

	

});

$('#gotit').on('click', '.deletebutton', function(event){
		$(this).closest('li').remove();
});

$('#gotit >checkbutton').remove()

});




