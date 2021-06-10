import { animate,  state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations-demo',
  templateUrl: './animations-demo.component.html',
  styleUrls: ['./animations-demo.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'500px',
        backgroundColor:'aqua'
      })),
      state('open',style({
        height:'250px',
        backgroundColor:'lightgreen'
      })),
      transition('open=>close',[
        animate('1s')
      ]),
      transition('close=>open',[
        animate('2s')
      ])
    ])
  ]
})
export class AnimationsDemoComponent implements OnInit {

  isOpen=true;

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
   this.isOpen=!this.isOpen;
  }

}
