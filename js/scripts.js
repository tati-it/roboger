//Business logic is here
var checkInput = function(myString){
  if (myString.includes("3")){
    myNewString="Won't you be my neighbor?";
  } else if (myString.includes("2")){
    myNewString="Boop!";
  } else if (myString.includes("1")){
    myNewString="Beep!";
  } else if (myString === ""){
    myNewString="WARNING: PLEASE ENTER ANY NUMBER";  
  } else {

    var myNumber = parseInt(myString);
    var myNewString=[];
    for (var index = 0; index <= myNumber; index += 1){
      
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