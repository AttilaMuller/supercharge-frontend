import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // TODO refactor deck size counting in navbar
  // deckSizes: number[] = [];
  // deckSize = 0;

  constructor() {
    // this.addDeckNumbers();
  }

  ngOnInit() {
  }

  // addDeckNumbers() {
  //   for (let i = 6; i <= 20; i++) {
  //     if (i % 2 === 0) {
  //       this.deckSizes.push(i);
  //     }
  //   }
  // }
  //
  // setDeckSize(select: HTMLSelectElement) {
  //   this.deckSize = parseInt(select.value);
  // }
}
