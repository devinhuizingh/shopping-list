$(document).ready(function() {


$('button').click(function() {
	alert('it is working');
	$('#list').prepend('<li>' + $('input#item').val() + '</li>');
})







})

//$('ul').append('<li class="todo"> + $('input#add-todo').val() + '</li>');