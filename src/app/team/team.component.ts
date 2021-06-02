import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  team= [
    {'id':1,'name':'Person 1','description':'CEO','image':'../../assets/team01.jpg'},
    {'id':2,'name':'Person 2','description':'CFO','image':'../../assets/team02.jpg'},
    {'id':3,'name':'Person 3','description':'DIRECTOR','image':'../../assets/team03.jpg'},
  ]
}
