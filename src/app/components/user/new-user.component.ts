import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor( private route: ActivatedRoute) {

    this.route.parent.params.subscribe( params => {
      console.log('CHILD PARAM NEW', params);
    });
   }

  ngOnInit() {
  }

}
