import { Component} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  constructor() {}



  title = "Hello, Angular!";
  subTitle= "Created this component manually for fun"
}
