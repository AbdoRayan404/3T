import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WinCheckService } from '../win-check.service';

@Component({
  selector: 'app-two-player',
  templateUrl: './two-player.component.html',
  styleUrls: ['./two-player.component.scss']
})
export class TwoPlayerComponent implements OnInit {
  constructor(private winCheck: WinCheckService, private router: Router) { }

  ngOnInit(): void {
  }

  currentTurn: 'X' | 'O' = 'X'
  turnsPlayed = 0
  winner = null
  gameMatrix = Array(9).fill(null)
  gameStatus = 'ongoing'

  play(index: number) {
    if(!this.gameMatrix[index] && this.gameStatus == 'ongoing'){
      this.gameMatrix[index] = this.currentTurn;
      this.currentTurn == 'X' ? this.currentTurn = 'O' : this.currentTurn = 'X';
      this.turnsPlayed++

      this.checkWin()
    }
  }

  checkWin() {
    let winner = this.winCheck.check(this.gameMatrix)

    if(winner){
      this.gameStatus = 'done'
      this.winner = winner
    }else if(this.turnsPlayed == 9){
      this.gameStatus = 'done'
      this.winner = 'draw'
    }
  }

  goToHome() {
    this.router.navigate(['home'])
  }

  playAgain() {
    this.gameMatrix = Array(9).fill(null)
    this.gameStatus = 'ongoing'
    this.turnsPlayed = 0
    this.winner = null
    this.currentTurn = 'X'
  }
}
