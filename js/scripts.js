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

        // if(userNumber >= 1000){
        //   $("#numberOutput").append("M");
        //   userNumber -= 1000;
        // }
        // else if(userNumber >= 500){
        //   $("#numberOutput").append("D");
        //   userNumber -= 500;
        // }
        // else if (userNumber >= 400){
        //   $("#numberOutput").append("CD");
        //     userNumber -= 400;
        // }
        // else if (userNumber >= 100){
        //   $("#numberOutput").append("C");
        //   userNumber -= 100;
        // }
        // else if (userNumber >= 90){
        //   $("#numberOutput").append("XC");
        //     userNumber -= 90;
        // }
        // else if (userNumber >= 50){
        //   $("#numberOutput").append("L");
        //   userNumber -= 50;
        // }
        // else if (userNumber >= 40){
        //   $("#numberOutput").append("XL");
        //     userNumber -= 40;
        // }
        // else if (userNumber >= 10){
        //   $("#numberOutput").append("X");
        //   userNumber -= 10;
        // }
        // else if (userNumber === 9){
        //   $("#numberOutput").append("IX");
        //     userNumber -= 9;
        // }
        // else if (userNumber >= 5){
        //   $("#numberOutput").append("V");
        //     userNumber -= 5;
        // }
        // else if (userNumber === 4){
        //   $("#numberOutput").append("IV")
        //   userNumber -= 4;
        // }
        // else if (userNumber >= 1){
        //     $("#numberOutput").append("I");
        //     userNumber -= 1;
        // }
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
