import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  services= [
    {'id':1,'name':'Engineering and Innovation','description':'Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.','image':'../../assets/service01.PNG'},
    {'id':2,'name':'IT System Ingeration','description':'Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.','image':'../../assets/service02.PNG'},
    {'id':3,'name':'Retail Smartkirana Distribution','description':'Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.','image':'../../assets/service03.PNG'},
    {'id':4,'name':'Interior & Architectural Solution','description':'Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.','image':'../../assets/service04.PNG'},
  ]

}
