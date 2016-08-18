$(document).ready(function(){
  var toRoman = function(number){
    
  }

  $("#userInput").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#userNumber").val());

    $("#numberOutput").text(toRoman(number));

  })
});
