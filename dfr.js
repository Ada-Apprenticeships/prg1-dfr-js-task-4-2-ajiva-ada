const fs = require("fs");

function fileExists(filename) {
  return fs.existsSync(filename);
}

function validNumber(value) {
  
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
  
}

function calculateMean(dataset) {
  //check is data set is not empty array DOES NOT WORK
  if (!Array.isArray(dataset) || dataset.length === 0) {
    return false;
  }
    // Filter out invalid numbers, allowing strings that represent numbers
    const validNumbers = dataset
    .map(value => (typeof value === 'string' && !isNaN(value) ? parseFloat(value) : value))
    .filter(value => typeof value === 'number' && !isNaN(value));
    // If there are no valid numbers, return false
    if (validNumbers.length === 0) {
      return false;
  };
  // Calculate the mean
  const sum = validNumbers.reduce((acc, num) => acc + num, 0);
  return sum / validNumbers.length;
}

function calculateMedian(dataset) {

}

function convertToNumber(dataframe, col) {

}

function flatten(dataframe) {

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