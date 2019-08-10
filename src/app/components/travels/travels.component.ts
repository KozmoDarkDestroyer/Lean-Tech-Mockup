import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  @Input() travel:any;
  @Input() i:number;
  @Input() travelLenght:number;
  private state:boolean;
  private dropdown:string;

  constructor() { 
    this.state = false;
    this.dropdown = 'none';
  }

  ngOnInit() {
  }

  public set State(value:boolean){
    this.state = value;
  }

  public get State():boolean{
    return this.state;
  }

  public get Dropdown():string{
    return this.dropdown;
  }

  public options(state:boolean){
    if (state) {
      this.dropdown = 'block';
      console.log(this.dropdown);
    }
    else{
      this.dropdown = 'none';
      console.log(this.dropdown);
    }
  }

}
