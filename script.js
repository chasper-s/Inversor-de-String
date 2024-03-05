function invertString() {
    var inputString = document.getElementById('inputString').value;
    var invertedString = '';
    
    for (var i = inputString.length - 1; i >= 0; i--) {
      invertedString += inputString[i];
    }
    
    document.getElementById('output').textContent = invertedString;
  }