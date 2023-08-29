
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  if(matrix){
    for(let i = 0; i < matrix.length; i++){
      let arrayFromMatrix = matrix[i];
      if((i % 2) === 0){
        for(let k = 0; k < arrayFromMatrix.length; k++){
          let firstNumbers = arrayFromMatrix[k];
          result.push(firstNumbers);
        }
      }else{
        for(let k = arrayFromMatrix.length - 1; k >= 0; k--){
          let numbers = arrayFromMatrix[k];
          result.push(numbers);
        }
      }
    }
  }
  return result;
}
