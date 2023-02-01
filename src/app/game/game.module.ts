import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TwoPlayerComponent } from './two-player/two-player.component';


@NgModule({
  declarations: [TwoPlayerComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
