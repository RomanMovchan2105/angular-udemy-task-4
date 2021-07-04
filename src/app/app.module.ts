import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
