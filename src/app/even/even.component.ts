import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnChanges {

  @Input() time: number;

  numArr: number[] = [];

  ngOnChanges(): void {
    this.addNum();
  }

  addNum(): any {
    if (this.time) {
      this.numArr.push(this.time);
    }

  }

}
