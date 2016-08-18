$(document).ready(function(){
  var toRoman = function(number){
    var userNumber = number;
    var i = 0;
    var numberArray = [1000,500,400,100,90,50,40,10,9,5,4,1];
    var romanArray = ["M","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    if(number >= 4000){
      alert("Please enter a number under 4000.");
    }
    else {
      while(userNumber > 0){
        while(i < numberArray.length){
          if(userNumber >= numberArray[i]){
            $("#numberOutput").append(romanArray[i]);
            userNumber -= numberArray[i];
          }
          else{
            i++;
          }
        }
      }
    }
  }
  $("#userInput").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#userNumber").val());
    $("#numberOutput").text("")
    $("#numberOutput").text(toRoman(number));
    $("#userNumber").val("");
  })
});
