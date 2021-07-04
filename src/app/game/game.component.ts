import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  counter = 0;
  isStoped = true;
  timer;

  @Output() time = new EventEmitter();

  start(): void {
    clearInterval(this.timer);
    this.isStoped = false;
    this.timer = setInterval(() => {
      this.counter++;
      this.setTime(this.counter);
    }, 1000);
  }

  stop(): void {
    clearInterval(this.timer);
    this.isStoped = true;
  }

  setTime(sec: number): void {
    this.time.emit(sec);
  }

}
