s = "PAYPALISHIRING";
numRows = 3;
let x = convert(s, numRows);

function convert (s , numRows){
    if (numRows === 1) return s;
    let rows = [];
    //construct the grid
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        rows[i] = '';
    }
    //fill the grid
    let curRow = 0;
    let goingDown = false;
    let goingUp = true;
    for (let i = 0; i < s.length; i++) {
        rows[curRow] += s[i];
        if (curRow === 0 || curRow === numRows - 1) { //up or down
            goingDown = !goingDown;
            goingUp = !goingUp;
        }
        curRow += goingDown ? 1 : -1;
    }
    let result = '';
    for (let i = 0; i < rows.length; i++) { //rows to string
        result += rows[i];
    }
    return result;
}
