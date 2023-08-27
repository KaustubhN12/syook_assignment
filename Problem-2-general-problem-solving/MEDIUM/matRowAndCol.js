// problem

// Greater than and less than in a matrix

// Detect values in a matrix that is greater than or equal to every element in its row and less than or equal to every element in its column.
// So say you have a matrix-like so:
//     1  2  3
//   |---------
// 1 | 7  8  7
// 2 | 5  4  2    value at column 1, row 2, with 5 (Ans)
// 3 | 8  6  7
// A matrix may have zero or more values like these which are greater than or equal and less than or equal.
// Your code should be able to provide a list of all the values for any given matrix. If no values are found it should return an empty list.
// The matrix can have a different number of rows and columns (Non-square matrix).


// Solution:-





function greaterAndLessThanInMatrix(mat) {

  let row = mat[0].length;
  let col = mat.length;

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (checkRow(i, j, mat) && checkCol(i, j, mat)) {
        return mat[i][j];
      }
    }
  }

  function checkRow(i, j, mat) {
    for (let k = 0; k < mat[0].length; k++) {
      if (mat[i][j] < mat[i][k]) {
        return false;
      }
    }
    return true;
  }

  function checkCol(i, j, mat) {
    for (let l = 0; l < mat.length; l++) {
      if (mat[i][j] > mat[l][j]) {
        return false;
      }
    }
    return true;
  }

}


let matrix = [
  [7, 8, 7],
  [5, 4, 2],
  [8, 6, 7]
]

let res = greaterAndLessThanInMatrix(matrix);
console.log(res);
