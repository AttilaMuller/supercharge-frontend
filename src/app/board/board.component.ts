import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import {CardService} from '../services/card.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  cards: Card[];
  indexOfFlipped: number[] = [];
  gameWon = false;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.cardArrayChanged.subscribe(cards => this.cards = cards);
  }

  flipCheck(cardIndex: number) {
    if (this.cards[cardIndex].isFound) {
      return;
    } else if (this.indexOfFlipped.length === 0) {
      this.flipCard(cardIndex);
    } else if (this.indexOfFlipped.length === 1 && this.indexOfFlipped[0] != cardIndex) {
      this.flipCard(cardIndex);
      const [firstCardIndex, secondCardIndex] = this.indexOfFlipped;
      setTimeout(() => {
        if (this.cards[firstCardIndex].img === this.cards[secondCardIndex].img) {
          this.cardService.foundCards(this.indexOfFlipped);
          if (this.cards.every(card => card.isFound)){
            this.gameWon = true;
          }
        } else {
          for (let i of this.indexOfFlipped) {
            this.cardService.flipCard(i);
          }
        }
        this.indexOfFlipped = [];
      }, 1400); }
  }

  flipCard(cardIndex: number) {
    this.cardService.flipCard(cardIndex);
    this.indexOfFlipped.push(cardIndex);
  }
}
