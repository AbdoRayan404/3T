import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo2PGame() {
    this.router.navigate(['play/twoplayer'])
  }

  goTo1PGame() {
    this.router.navigate(['play/oneplayer'])
  }
}
