import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TwoPlayerComponent } from './two-player/two-player.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [TwoPlayerComponent, BoardComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
