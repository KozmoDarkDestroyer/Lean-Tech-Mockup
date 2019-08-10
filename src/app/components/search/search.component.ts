import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchTravel: string;

  constructor() { }

  ngOnInit() {
  }

  public set SearchTravel(value:string){
    this.searchTravel = value;
  }

  public get SearchTravel():string{
    return this.searchTravel;
  }

}
