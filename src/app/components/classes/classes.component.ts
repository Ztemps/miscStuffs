import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

  constructor() { }

  alert = 'alert-danger';
  properties: Object = {
    danger: true
  };

  loading = false;

  ngOnInit() {
  }

  executeProcess() {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000 );
  }
}
