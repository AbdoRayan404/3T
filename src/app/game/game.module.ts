import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TwoPlayerComponent } from './two-player/two-player.component';
import { BoardComponent } from './board/board.component';
import { OnePlayerComponent } from './one-player/one-player.component';


@NgModule({
  declarations: [TwoPlayerComponent, BoardComponent, OnePlayerComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
