function analyzeArray(arr) {
    const arrSum = arr.reduce((total, value) => total + value);
    const arrMin = Math.min(...arr);
    const arrMax = Math.max(...arr);
  
    const analyzedArray = {
      average: arrSum / arr.length,
      min: arrMin,
      max: arrMax,
      length: arr.length,
    };
  
    return analyzedArray;
  }
  
  module.exports = analyzeArray;