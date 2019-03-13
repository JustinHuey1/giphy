// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$("#search-button").click(function(){
  var input = $("#search-term").val();
  
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?q=${input}&rating=pg&api_key=dc6zaTOxFJmzC&random`,
    method: "GET",
    success: function(response){
    for(var i = 0; i < response.data.length; i++){
      $(".imagePlace").append("<img src=" + response.data[i].images.original.url + ">");
        
      }
    }
  });
});

$("#random").click(function(){
  var input = $("#search-term").val();
  
  $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?q=${input}&rating=pg&api_key=dc6zaTOxFJmzC&random`,
    method: "GET",
    success: function(response){
    var images = response.data.length;
    var num = Math.floor(Math.random()* images);
    $(".imagePlace").append("<img src=" + response.data[num].images.original.url + ">");
        
    }
  });
});

$("#clear").click(function(){
  $(".imagePlace").html("");
  $("#search-term").val("");
});
