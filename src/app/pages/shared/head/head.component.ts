import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  providers: [ApiService]

})
export class HeadComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  setFilter(filter){
    this.api.setFilter(filter);
  }
}
