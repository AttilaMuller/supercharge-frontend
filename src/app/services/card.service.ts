import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Card} from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardArrayChanged: Subject<Array<Card>> = new BehaviorSubject<Array<Card>>([]);
  cardArray: Card[] = [];
  cardImages = ['/assets/angular.png', '/assets/d3.png', '/assets/jenkins.png', '/assets/postcss.png',
                '/assets/react.png', '/assets/redux.png', '/assets/sass.png', '/assets/supercharge.png',
                '/assets/ts.png', '/assets/webpack.png'];

  constructor() {
    this.cardArray = this.cardImages.map(img => ({img: img, isFlipped: false, isFound: false}));
    this.cardArray = [...this.cardArray, ...(this.cardArray.map(card => ({...card})))];
    this.shuffle(this.cardArray);
    this.cardArrayChanged.next(this.cardArray);
  }

  flipCard(index: number) {
    this.cardArray[index].isFlipped = !this.cardArray[index].isFlipped;
    this.cardArrayChanged.next(this.cardArray);
  }

  foundCards(indexArray: number[]) {
    for (let cardIndex of indexArray) {
      this.cardArray[cardIndex].isFound = true;
    }
    this.cardArrayChanged.next(this.cardArray);
  }

  shuffle(array: any[]) {
    let i = 0, j = 0, temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
