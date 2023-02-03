import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnePlayerComponent } from './one-player/one-player.component';
import { TwoPlayerComponent } from './two-player/two-player.component';

const routes: Routes = [
  { path: 'twoplayer', component: TwoPlayerComponent },
  { path: 'oneplayer', component: OnePlayerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
