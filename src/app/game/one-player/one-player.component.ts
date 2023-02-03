import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-one-player',
  templateUrl: './one-player.component.html',
  styleUrls: ['./one-player.component.scss']
})
export class OnePlayerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @ViewChild(BoardComponent) board

  matrix
  winner = null
  currentTurn = 'X'
  currentTurnToView = 'Player'
  gameStatus = 'ongoing'

  onGameStatusUpdate(data) {
    this.winner = data.winner
    this.gameStatus = data.gameStatus
    this.matrix = data.matrix
    this.currentTurn = data.currentTurn
    this.currentTurnToView = data.currentTurn == 'X' ? 'Player' : 'Computer'
  }

  onGamePlay(turn) {
    if(turn == 'X' && this.gameStatus == 'ongoing') {
      for(let i = 0; i < this.matrix.length; i++) {
        if(!this.matrix[i]) {
          this.board.play(i)
          break;
        }
      }
    }
  }

  goToHome() {
    this.router.navigate(['home'])
  }

  playAgain() {
    this.board.resetBoard()
  }
}
