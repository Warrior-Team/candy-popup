import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.less']
})
export class CompComponent implements OnInit {
   name=' שם';
   data1='013214';
   data2='מידע 2';
   data3='מידע 3';
   data4='גוף טרור';
   data5='מידע נוסף';
   amount1=5;
   amount2=3;
   amount3=4;
   time='שעתיים';

  constructor() { }

  ngOnInit(){
  }

}
