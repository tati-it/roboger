//Business logic is here
var checkResult = function(myString){
  var myNumber = parseInt(myString);
  myNewString=[0];
  for (var index = 1; index <= myNumber; index += 1){
    myNewString+=index;
  }
  return myNewString;
}





//User interface logic is here
$(document).ready(function() {
  $("form#neighborhood").submit(function(event) {
    event.preventDefault();
    var myString=$("input#number").val();
    var result = checkResult(myString);
    $("#result").show(result);
    $("#result").text(result);
  });
});