import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.css']
})
export class SofaComponent implements OnInit {

  @Input()
  public LuzAcesa: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
