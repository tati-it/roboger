//Business logic is here
var checkInput = function(myString){
  if (myString.includes("1")){
    myNewString="Beep!";
  } else {

 

    var myNumber = parseInt(myString);
    var myNewString=[0];
    for (var index = 1; index <= myNumber; index += 1){
      
        myNewString.push(index);
    }

    if (myNewString[1] === 1){
      myNewString[1]="Beep!";
    } 
    if (myNewString[2] === 2){
      myNewString[2]="Boop!";
    } 
    if (myNewString[3] === 3){
      myNewString[3]="Won't you be my neighbor?";
    } 
  }  
  return myNewString;
}





//User interface logic is here
$(document).ready(function() {
  $("form#neighborhood").submit(function(event) {
    event.preventDefault();
    var myString=$("input#number").val();
    var result = checkInput(myString);
    $("#result").show(result);
    $("#result").text(result);
  });
});