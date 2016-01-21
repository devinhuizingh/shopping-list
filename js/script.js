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
		$(this).closest('li').appendTo($('#gotit'));
		$(this).remove();

		

	});

	$('#gotit').on('click', '.deletebutton', function(event){
			$(this).closest('li').remove();
	});

	//$('#gotit >checkbutton').remove()



 
$(function() {
    $( "#list" ).sortable({
      revert: true
    });
    
    $( "#list" ).draggable({
      connectToSortable: "#list",
      helper: "clone",
      revert: "invalid"
    });
    $( "#gotit" ).sortable({
      revert: true
    });
    
    $( "#gotit" ).draggable({
      connectToSortable: "#list",
      helper: "clone",
      revert: "invalid"
    });
    
});


});



