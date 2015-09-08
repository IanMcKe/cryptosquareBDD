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

var cryptoSquare = function(string) {
  var string_sqrt = findSquare(string.length);
  var string_array = string.chunk(string_sqrt);
  debugger;
  return string_array;
};
