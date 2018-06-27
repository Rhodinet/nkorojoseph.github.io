
$(function(){
var grid = $('#pixelCanvas');
var color = '#000';

$("#sizePicker").submit(function(e) {
    e.preventDefault();
    $("tr").remove();
    makeGrid();
  });

$("#colorPicker").change(function() {
    currentColor = $(this).val();
  });

  //If the user clicks or moves the mouse in the grid
  //while holding the left mouse button down draw the pixels
  grid.on("mousemove", "td", function(e) {
    if (e.buttons == 1) {
      $(this).css("background-color", currentColor); //Draw the td that the user hovers
    }
  });

  grid.on("click", "td", function(e) {
    $(this).css("background-color", currentColor); //Draw the td that the user clicks
  });
//Build the grid
  function makeGrid() {
        //Set the grid dimensions;
    var gridHeight = $("#inputHeight").val();
    var gridWidth = $("#inputWeight").val();
    var grid = $("#pixelCanvas");
    //Loop -> Create rows
    for (var x = 0; x <= gridHeight - 1; x++) {
      grid.append("<tr>"); //Start Row
      //Loop -> Create columns for each row
      for (var y = 0; y <= gridWidth - 1; y++) {
        $("tr:eq(" + x + ")").append("<td></td>");
        grid.css('background-color','orange')
      }
      grid.append("</tr>"); //End Row
    }
  }
 

})

 

  
