
//Jquery event listners starts here.
$(function(){
var grid = $('#pixelCanvas');
var color = '#000';

//on clicking submit button, prevent default and clear the table rows 
//then call the makeGrid function

$("#sizePicker").submit(function(e) {
    e.preventDefault();
    $("tr").remove();
    makeGrid();
  });

$("#colorPicker").change(function() {
    currentColor = $(this).val();
  });

//makes a drawing as the user clicks on the td area.
  grid.on("click", "td", function(e) {
    $(this).css("background-color", currentColor);
  });

  // mouse moves over the grid and the user holds down the mouse button 
  //while moving over the td area
  grid.on("mousemove", "td", function(e) {
    if (e.buttons == 1) {
      $(this).css("background-color", currentColor); 
    }
  });

//Build the grid
  function makeGrid() {
    //get the dimensions of the grid using .val()
    var gridHeight = $("#inputHeight").val();
    var gridWidth = $("#inputWeight").val();
    var grid = $("#pixelCanvas");
    //first loop for creating the rows 
    for (var x = 0; x <= gridHeight - 1; x++) 
    {
      grid.append("<tr>");
      //second loop for creating the columns
      for (var y = 0; y <= gridWidth - 1; y++) 
      {
        $("tr:eq(" + x + ")").append("<td></td>");
        grid.css('background-color','orange')
      }//end of column
      grid.append("</tr>"); //end of Row
    }
  }
})
