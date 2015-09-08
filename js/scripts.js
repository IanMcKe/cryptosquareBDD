var findSquare = function(number) {
  var sqrt = Math.sqrt(number);
  return Math.ceil(sqrt);
};

String.prototype.chunk = function(number) {
  var array = [];
  for (var i = 0, length=this.length; i < length; i += number) {
    array.push(this.substr(i, number));
  }
  return array;
};

var formatString = function(string) {
  var lowerString = string.toLowerCase();
  var result = lowerString.replace(/[\'\ \-\,\.]+/g, '');
  //debugger;
  return result;
};

var cryptoSquare = function(string) {
  var formattedString = formatString(string);
  var stringSqrt = findSquare(formattedString.length);
  var stringArray = formattedString.chunk(stringSqrt);
  var highIndex = stringArray.length - 1;
  var characterArray = [];
  for (entry in stringArray) {
    var chars = stringArray[entry].split("");
    characterArray.push(chars);
  }
  //debugger;
  var encryptedArray = [];
  for (var j = 0; j < stringSqrt; j += 1){
    for(var i = 0; i < stringSqrt; i += 1){
      encryptedArray.push(characterArray[i][j]);
    }
  }

  // debugger;
  return encryptedArray;
  // return stringArray;
};

$(document).ready(function() {
  $("form#string").submit(function(event) {
    $(".cryptoSquare").empty();
    var string = $("input#string").val();
    var result = cryptoSquare(string);
    for (i in result){
      $(".cryptoSquare").append(result[i]);
      if (((parseInt(i) + 1) % 5) === 0){
        console.log(i);
        $(".cryptoSquare").append(" ");
      }
      // debugger;
    }
    $("#result").show();
    event.preventDefault();
  });
});
