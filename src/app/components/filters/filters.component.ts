import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() icon:string;
  private move: boolean = false;
  private sphereMove: string;

  constructor() { 
  }

  ngOnInit() {
  }

  moveSphere(move:boolean){
    if (move) {
      this.sphereMove = 'move-left';
    }
    else{
      this.sphereMove = 'move-right';
    }
  }

  public get SphereMove():string{
    return this.sphereMove;
  }

  public get Move():boolean{
    return this.move;
  }

  public set Move(value: boolean){
    this.move = value;
  }
}
