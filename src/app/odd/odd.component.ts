import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnChanges {

  @Input() time: number;
  numArr: number[] = [];

  ngOnChanges(): void {
    if (this.time) {
      this.numArr.push(this.time);
    }
  }
}
