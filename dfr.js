const fs = require("fs");

function fileExists(filename) {
  return fs.existsSync(filename);
}

function validNumber(value) {
  //check if he value is a number and finite
  if (typeof value === 'number') {
    return !isNaN(value) && isFinite(value);
  }
  //check if valid numeric string that stays same when converted 
  if (typeof value === 'string' && value.trim() !== '') {
    const convertedValue = Number(value);
    return !isNaN(convertedValue) && isFinite(convertedValue) && convertedValue.toString() === value.trim();
  }

  return false;
}

function dataDimensions(dataframe) {
  if (!Array.isArray(dataframe) || dataframe.length === 0) {
    return [-1, -1];} // no data in rows or columns 

  // Check if the first element is an array
  if (!Array.isArray(dataframe[0])) {
    return [dataframe.length, -1]; //rows not columns 
  }
//returns rows and dimensions 
  return [dataframe.length, dataframe[0].length || -1];
}

function findTotal(dataset) {
  if (!Array.isArray(dataset) || dataset.some(Array.isArray)) return 0; //1d array
  return dataset.reduce((total, item) => { //calculate sum no.
    const num = parseFloat(item); 
    return !isNaN(num) ? total + num : total; //if valid then add to total 
  }, 0);
}

function calculateMean(dataset) {
  //check is data set is not empty array
  if (!Array.isArray(dataset) || dataset.length === 0 || dataset.some(Array.isArray)) {
    return 0;
  }
    //filter invalid numbers allow strings
    const validNumbers = dataset
    .map(value => (typeof value === 'string' && !isNaN(value) ? parseFloat(value) : value))
    .filter(value => typeof value === 'number' && !isNaN(value));
    //no valid numbers 
    if (validNumbers.length === 0) {
      return 0;
  };
  //calculate average 
  const sum = validNumbers.reduce((acc, num) => acc + num, 0);
  return sum / validNumbers.length;
}

function calculateMedian(dataset) {
   //filter invalid numbers allow strings
   const validNumbers = dataset
   .map(value => (typeof value === 'string' && !isNaN(value) ? parseFloat(value) : value))
   .filter(value => typeof value === 'number' && !isNaN(value));
   //no valid numbers 
   if (validNumbers.length === 0) {
     return 0;
 };
 validNumbers.sort((a, b) => a - b); //sort by value of numbers
 const middleIndex = Math.floor(validNumbers.length / 2);
 if (validNumbers.length % 2 === 0) { // for even no. elements
  return (validNumbers[middleIndex - 1] + validNumbers[middleIndex]) / 2; //calculate median 
} else {
  //odd no.elements 
  return validNumbers[middleIndex];
}
}

function convertToNumber(dataframe, col) {
  
}

function flatten(dataframe) {
  if (!Array.isArray(dataset) || dataset.some(Array.isArray)) return 0;
}

function loadCSV(csvFile, ignoreRows, ignoreCols) {

}


function createSlice(dataframe, columnIndex, pattern, exportColumns = []) {

}

module.exports = {
  fileExists,
  validNumber,
  dataDimensions,
  calculateMean,
  findTotal,
  convertToNumber,
  flatten,
  loadCSV,
  calculateMedian,
  createSlice,
};