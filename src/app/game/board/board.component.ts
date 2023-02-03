import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WinCheckService } from '../win-check.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private winCheck: WinCheckService) { }

  ngOnInit(): void {
    this.emitGameStatus()
  }

  @Output() gameStatusChange = new EventEmitter()
  matrix = Array(9).fill(null)
  turnsPlayed = 0
  winner = null
  gameStatus = 'ongoing'
  currentTurn = 'X'


  play(index: number) {
    if(!this.matrix[index] && this.gameStatus == 'ongoing'){
      this.matrix[index] = this.currentTurn;
      this.currentTurn == 'X' ? this.currentTurn = 'O' : this.currentTurn = 'X';
      this.turnsPlayed++

      this.checkWin()
    }
  }

  private checkWin() {
    let winner = this.winCheck.check(this.matrix)

    if(winner){
      this.gameStatus = 'done'
      this.winner = winner
    }else if(this.turnsPlayed == 9){
      this.gameStatus = 'done'
      this.winner = 'draw'
    }

    this.emitGameStatus()
  }

  resetBoard() {
    this.matrix = Array(9).fill(null)
    this.gameStatus = 'ongoing'
    this.turnsPlayed = 0
    this.winner = null
    this.currentTurn = 'X'

    this.emitGameStatus()
  }

  emitGameStatus() {
    this.gameStatusChange.emit({turnsPlayer: this.turnsPlayed, winner: this.winner, gameStatus: this.gameStatus, currentTurn: this.currentTurn})
  }
}
