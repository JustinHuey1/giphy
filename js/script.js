// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$("#search-button").click(function(){
  var input = $("#search-term").val();
  $("#search-term").val("");
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?q=${input}&rating=pg&api_key=dc6zaTOxFJmzC&random`,
    method: "GET",
    success: function(response){
    $(".imagePlace").append("<img src=" + response.data[0].images.original.url + ">");
        
    }
  });
});

$("#clear").click(function(){
  $(".imagePlace").html("");
  $("#search-term").val("");
});

