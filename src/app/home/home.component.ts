import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
archives=[
  {
    year:2011 ,
    month:5
  },
  {
    year:2018 ,
    month:7
  },
  {
    year:2021 ,
    month:1
  }
];


  constructor() { }

  ngOnInit(): void {
  }

}
