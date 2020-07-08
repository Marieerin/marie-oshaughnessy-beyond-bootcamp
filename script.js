// Game board, and handling whos turn it is and where they are playing their token
class TicTacToe{
    constructor(player, playersTurn){
        // WHO IS PLAYING
        this.player = player;
        // WHERE THE TOKEN IS PLACED
        this.playersTurn = playersTurn;
        //GAME BOARD
        // An array of arrays, the parent array holds the rows. 
        // The columns are 
        // column one has index of 0.0 1.0 and 2.0
        // column two has index of 0.1 1.1 and 2.1
        // column three has index of 0.2 1.2 and 2.2
        this.gameBoard = [
            [ ' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ]        
    };

    // Placing token
    // either X or O    
    //Position changes the value of part of the arrays in this.gameBoard
    add_token(token, position){
        // local variable that points into the row that you are adding your token to
        // Position [a, b] 
        // a is the row selected and has index of 0
        // b is the column selected and has index of 1
        let row = position[0];
        let column = position[1];
        
        //set position to token
        // this.gameBoard 
        this.gameBoard[row][column] = token
        console.log(this.gameBoard);
        this.winGame()
    };
    
    print_board(){
        console.log(this.gameBoard)
    };

    // AI aka Phyllis
    aiMove(aiToken){
        //1 put token in first available spot
        for(let row = 0; row < this.gameBoard.length; row++){
            let stopTurn = false
                for(let column = 0; column < 3; column++){
                            if(this.gameBoard[row][column] === ' '){
                                this.gameBoard[row][column] = aiToken
                                stopTurn = true
                                break
                            } 
                }
                if(stopTurn === true){
                    break;
                }
            }
        console.log(this.gameBoard);
        this.winGame()
    };
    // start of TTT.winGame
    winGame(){
        // let winningToken
        // determin if row won
        // determin if column won
        //determin if diagonal won
        
        let t = undefined;
        //rows
        // for(let row = 0; row < this.gameBoard.length; row++){
        //     for(let column = 0; column < 3; column++){
        //         console.log(row, column)
        //         if(column === 0){
        //             // console.log('setting t', row, column)
        //             t = this.gameBoard[row][column]
        //             if(this.gameBoard[row][column] === ' '){
        //                 // console.log('hi')
        //                 return undefined }
        //         } else {
        //             // console.log('not setting t', row, column, t)
        //             if(!(this.gameBoard[row][column] === t)){
        //                 // console.log('here2', row, column)
        //                 return undefined
        //             } }
        //         // console.log('here3', row, column)
        //         if(column === 2){
        //             // console.log('here4')
        //             return t
        //             }   
        //     } 
        // };

        // check if column is the same
            // start column loop
            for(let column = 0; column < 3; column++){
                // start row loop
                for(let row = 0; row < 3; row++){
                    console.log('this row = ' + row)
                    // checking for start of column in row 0
                    if(row === 0){
                        t = this.gameBoard[row][column]
                        // if(t === ' '){
                        //     // console.log('theres nothing here', row, column)
                        //     // return underfined
                        //     return
                        // } 
                        // else {
                            console.log('checking for a line!', row, column)
                            if(!(this.gameBoard[row][column] === t)){
                                console.log('aint no line')
                                return undefined }}    
                    // end of checking row 0
                    // }


        // diagonal
            // start of diagonal loop
            // row loop
            // for(row = 0; row < 2; row++){
            //     // start with checking row 0
            //     for(column = 0; column < 2; column++){
            //         // path for 00 >>> set 00 as t
            //             // check 11 is same as t
            //                 // check 22 is same as tt
            //         if(row === 0){
            //             if(column === 0){
            //                 if(this.gameBoard[row][column] === ' '){
            //                     return undefined
            //                 }
            //             //column 0 check
            //             } 
            //         // end  of row 0 check
            //         }
                        
            //         // path for 02 >>> set 02 as t
                    
            //             // check 11 is same as t
            //                 // check 20 us same as t
                
            //     // end of column loop
            //     }
            // // end of row loop
            // }
                



//end of TTT.winGame()
        }
    };



//when testing code input in console
    //1  
    let TTT = new TicTacToe()



    // 2 whatever order.
    // TTT.add_token('o', [0, 0]); TTT.add_token('o', [0, 1]); TTT.add_token('o', [0, 2]); TTT.print_board(); TTT.winGame()
    
    // TTT.aiMove('x'); TTT.aiMove('x'); TTT.aiMove('x'); TTT.winGame()

    //TTT.aiMove(); TTT.aiMove(); TTT.print_board();

    // TTT.add_token('O', [0, 0]);TTT.add_token('O', [1, 0]);TTT.add_token('O', [2, 0]);

    // TTT.aiMove('X');
    // TTT.add_token('O', [0, 1]);
    // TTT.print_board();
    // TTT.add_token('O', [2, 1]);
    // TTT.print_board();