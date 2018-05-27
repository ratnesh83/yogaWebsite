import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-yoga',
  templateUrl: './one-yoga.component.html',
  styleUrls: ['./one-yoga.component.css'],
  providers:[ApiService]
})
export class OneYogaComponent implements OnInit {
  yoga;
  id;

  constructor(private api: ApiService,private router:ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.router.params.subscribe(params=>{
      id = params['id'];
      this.getYoga(id);
    })
  }

  getYoga(id){
    this.api.getYoga(id).subscribe((data)=>{
      this.yoga=data;
    }); 
  }

}
