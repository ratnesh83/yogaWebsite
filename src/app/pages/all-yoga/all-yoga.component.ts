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
  filter;

  constructor(private api:ApiService) { 

  }

  ngOnInit() {
    this.api.getAllYoga().subscribe((data)=>{
      this.filterData(data);
    },err=>console.log(err));
  }

  filterData(data){
    this.api.getFilter().subscribe((filter)=>{
      if(filter != 'all'){
      this.yogas = data.filter((element)=>{
        return element.type === filter;
      });
    }else{
      this.yogas = data;
    }
    });
  }
}
