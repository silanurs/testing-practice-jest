function caesarsChipher(str) { 
  
    var finish = str.length;
    var result = "";
    var letterA;
    var letterB;
   
    for (let i = 0; i < finish; i++) {
      
      letterA = (str.charCodeAt(i));
      
      if (letterA >= 78 & letterA <= 90) {
        letterA = letterA - 13;
        letterB = String.fromCharCode(letterA);
        result = result + letterB;
      }
      else if (letterA >= 65 & letterA < 78) {
        letterA = letterA + 13;
        letterB = String.fromCharCode(letterA);
        result = result + letterB;
      }
      else if (letterA >= 32 & letterA <= 64) {
        letterA = letterA;
        letterB = String.fromCharCode(letterA);
        result = result + letterB;
      }
    }
    
    
    return result;
  }
  module.exports = caesarsChipher;