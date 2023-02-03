import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-two-player',
  templateUrl: './two-player.component.html',
  styleUrls: ['./two-player.component.scss']
})
export class TwoPlayerComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  @ViewChild(BoardComponent) child;
  currentTurn
  gameStatus = 'ongoing'
  winner = null

  onGameStatusUpdate(data) {
    this.currentTurn = data.currentTurn
    this.gameStatus = data.gameStatus
    this.winner = data.winner
  }

  goToHome() {
    this.router.navigate(['home'])
  }

  playAgain() {
    this.child.resetBoard()
  }
}
