$(document).ready(function() {


$('button').click(function() {
	alert('it is working');
	$('#list').prepend('<li>')
	+ $('input#item').val() 
})







})