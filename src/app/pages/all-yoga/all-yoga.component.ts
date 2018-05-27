import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-yoga',
  templateUrl: './all-yoga.component.html',
  styleUrls: ['./all-yoga.component.css'],
  providers: [ApiService]
})
export class AllYogaComponent implements OnInit {

  yogas;

  constructor(private api:ApiService) { 

  }

  ngOnInit() {
    this.api.getAllYoga().subscribe((data)=>{
      this.yogas = data;
      console.log(data);
    },err=>console.log(err));
  }

}
