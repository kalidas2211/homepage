import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  portfolio= [
    {'id':1,'name':'Floor planning','description':'Architectural Design','image':'../../assets/portfolio01.jpg'},
    {'id':2,'name':'Wall Decor','description':'Interior Design','image':'../../assets/portfolio02.jpg'},
    {'id':3,'name':'Living Room','description':'Interior Design','image':'../../assets/portfolio03.jpg'},
  ]

}
