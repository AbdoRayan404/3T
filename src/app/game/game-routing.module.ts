import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoPlayerComponent } from './two-player/two-player.component';

const routes: Routes = [
  { path: 'twoplayer', component: TwoPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
