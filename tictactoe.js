// Goal:

// We want to make a version of tic tac toe that runs in your browser.

// But the goal here is to try to develop a well designed solution in javascript, and then add a GUI (html/css) after.

// 1. Make a class that represents your tic tac toe board that looks as follows:

class TicTacToe {
    constructor(player, win){
        this.player = player;
        this.win = win;
    };
    
    add_token(token, position){
        if(token === 'X'){
            console.log('X')
        } else {
            console.log('O')
        }
    };
    
    print_board(){
    };
  }
  
  
  
let TTT = new TicTacToe()
  
console.log(TTT.add_token('X'))
//   TTT.print_board()
  
//   #################################
  
//   | | | |
//   | | | |
//   | | | |
  
//   TTT.add_token('X', [0,1])
  
//   TTT.print_board()
  
//   #################################
  
//   | |X| |
//   | | | |
//   | | | |


class TicTacToe{
    constructor(player, playersTurn){
        this.player = player;
        this.playersTurn = playersTurn;
    };
    
    add_token(token){
        if(token === 'X'){
            console.log('X')
            return 'X'
        } else {
            console.log('O')
            return 'O'
        }
    };
    
    print_board(){
        let gameBoard = [
            [ ' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.gameBoard = gameBoard;
        console.log(gameBoard);
    };
		foo(){
      let a = 4
      let b = 7
      // what variables can I see here?
      // - a 
      // - b
      // - this.player
      // - this.playersTurn

    }
        // let board = {
        //     rowOne: [ ' ', ' ', ' '],
        //      rowOne: [' ', ' ', ' '],
        //    rowThree: ['h ', ' ', ' ']
        // }

        // console.log('| | | |' )
        // console.log('| | | |' )
        // console.log('| | | |' )
    }

  
let TTT = new TicTacToe()
  
// add_token needs user input
TTT.add_token('X', TTT.print_board.board[1][1]);
// board needs to be printed first or second? does it matter?
TTT.print_board();

// ######### instructions ##########
let TTT = new TicTacToe()

TTT.print_board()
// >>
// >>  | | | |
// >>  | | | |
// >>  | | | |
  
TTT.add_token('X', [0,1])
// >>

TTT.print_board()  
// >>
// >>  | |X| |
// >>  | | | |
// >>  | | | |
  
TTT.add_token('O', [1,1])
// >>

TTT.print_board()  
// >>  | |X| |
// >>  | |o| |
// >>  | | | |


//