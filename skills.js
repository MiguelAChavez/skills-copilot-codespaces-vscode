function calculateNumbers(var1,  var2) {
    return var1 + var2;
}

//Obio esto no funciona, pero es para que se entienda como se usa GitHub Copilot para generar codigo
//tic tac toe
const board = [ 
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
];

const turn = Object.freeze({
    X: 'X',
    O: 'O'
});

const Square = (props) => {
    return (
        <button className="square" onClick={() => props.onClick(key)}>
            {props.value}
        </button>
    )
};

const handleClick = (i) => {
    setSquares(squares[i] = (turn === 'X') ? 'O' : 'X');
};

function paintBoard(board) {
   board.map((row) => {
        row.map((square, index) => {
            return <Square key={index} value={square} onClick={handleClick} />
        })
    })
}