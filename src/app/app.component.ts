import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSec: number;


  getTime(value: any): void {
    this.currentSec = value;
  }
}
