import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  cardDescription = 'Some quick example component created using CLI';

  @Input() compNum: string;

  constructor() {}


}
