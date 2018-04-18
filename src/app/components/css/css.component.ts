import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
    Wow it's an awesome component paragraph!
    </p>
  `,
  styles: [`
    p {
      color: red;
      font-size: 20px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
