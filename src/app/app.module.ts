import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CardService} from './services/card.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
