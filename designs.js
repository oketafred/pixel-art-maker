// *******************************************************
// Author: Oketa Fred
// Project Name: Pixel Art Maker
// *******************************************************

// Select color input and Select size input

/*Listening for a submit even and calling makeGrid function 
   in case the submit event occurs */

$('#sizePicker').submit(function (grid) {
	// Prevent the default behaviour of a form
	grid.preventDefault(); 

	// Getting Values from the inputs
	var setHeight = $('#inputHeight').val();
	var setWeight = $('#inputWeight').val();

	//Calling Function makeGrid
	makeGrid(setHeight, setWeight);		
});


// Creating the makeGrid Function
function makeGrid(rows, cols) {

	//Remove any table row if present.
	$('tr').remove(); 

	for (var i = 1; i <= rows; i++) {
		$('#pixelCanvas').append('<tr id=table' + i  + '></tr>');

		for (var j = 1; j <= cols; j++) {
			$('tr:last').append('<td></td>');

			////Class for each td.  and add an atribute
			$('td').attr('class', 'cells');
		}
	}	

	///Class cells on each td and having click envent
	$('.cells').click(function(event) {
		var paint = $('#colorPicker').val();
		$(event.target).css('background-color',paint);
	});
}



