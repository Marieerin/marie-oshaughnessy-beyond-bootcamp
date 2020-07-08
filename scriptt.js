// Template for a game
class TicTacToe{
    constructor(player, playersTurn){
        // Who is playing
        this.player = player

        //Where they are placing their token
        this.playersTurn = playersTurn

        // The game board that is being played on
        this.gameBoard = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }
    
    // place token
    addToken(token, position) {
        // token is a string, either 'X' or 'O'
        // position is an array [ , ]
        const row = position[0]
        const column = position[1]

        // use position to place token on this.gameboard
        this.gameBoard[row][column] = token
        this.winGame(token)
        // this.placeToken(token, position)
    }

    // AI aka Phyllis
    aiMove(aiToken) {
        //1 put token in first available spot
        for (let row = 0; row < this.gameBoard.length; row++) {
            let stopTurn = false
            for (let column = 0; column < 3; column++) {
                if (this.gameBoard[row][column] === ' ') {
                    this.gameBoard[row][column] = aiToken
                    stopTurn = true
                    break
                }
            }
            if (stopTurn === true) {
                break;
            }
        }
        this.winGame(aiToken)
    }


    // win game
    winGame(token){
        // if all contents of row equal token then game
        // else if diagonal 1 || diagonal 2 equal token then game
        // else if column itterator if they equal token  then game
        // else continue game
        let countLine = 0

        //checking for row
        //   |x|x|x|   | | | |  | | | |
        //   | | | |   |x|x|x|  | | | |
        //   | | | |   | | | |  |x|x|x|
        for(let i = 0; i <= 2; i++){
            if(this.gameBoard[i][0] === token){
                this.gameBoard[i].forEach(function (spot) {
                    if (spot === token) {
                        countLine = countLine + 1

                        if (countLine === 3) {
                            console.log('row');
                            
                        } 
                        
                    } else {
                        countLine = 0
                        playersTurn = 
                    }
                })
            } 
        }

        //checking for column
        //   |x| | |   | |x| |  | | |x|
        //   |x| | |   | |x| |  | | |x|
        //   |x| | |   | |x| |  | | |x|
        for (let i = 0; i <= 2; i++ ){
            for (let ii = 0; ii <= 2; ii++) {
                if (this.gameBoard[ii][i] === token) {
                    countLine = countLine + 1
                    console.log('add to count line', ii, i);
                    if (countLine === 3) {
                        console.log(`column ${token} wins game`);
                    }
                } else {
                    countLine = 0 
                }
            } 

        }
            // check diagonal 1 or check diagonal 2 
            //   |x| | |           | | |x|
            //   | |x| |           | |x| |
            //   | | |x|           |x| | |
        if (this.gameBoard[0][0] === token && this.gameBoard[1][1] === token && this.gameBoard[2][2] === token || this.gameBoard[0][2] && this.gameBoard[1][1] === token && this.gameBoard[2][0] === token) {
            console.log(`diagonal game! ${token} wins`)
        }


    }

    placeToken(token){
        const board = document.querySelector('.gameBoard');
        const square = document.querySelector(this.li)


        board.addEventListener('click', function () {
            square.innerHTML = `${token}`;
        });

    }
}

function setPlayers(){
    let playerOne = ''
    let playerTwo = ''

}
let TTT = new TicTacToe()

document.addEventListener('click', function () {
    if(this.getElementsByClassName('box')){
        TTT.placeToken('x')
        console.log(TTT.gameBoard);
    } else if (this.getElementsByName('XorO')){
        console.log('xoro');
        setPlayers()
    }
});





// document.addEventListener('click', function (event) {
//     if(document.getElementsByClassName('gameBoard')=== event){
//         console.log('click');
//     }



// }, false);




// handle which player is playing. This effects which token will be placed and if the aiMove is called.


// let TTT = new TicTacToe()

// TTT.addToken('x', [0, 1])
// TTT.addToken('x', [1, 1])
// TTT.addToken('x', [2, 1])



