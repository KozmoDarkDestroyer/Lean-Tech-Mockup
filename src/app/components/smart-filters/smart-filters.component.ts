import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-filters',
  templateUrl: './smart-filters.component.html',
  styleUrls: ['./smart-filters.component.css']
})
export class SmartFiltersComponent implements OnInit {

  private smartFilter: string;

  constructor() { }

  ngOnInit() {
  }

  public get SmartFilter():string{
    return this.smartFilter;
  }

  public set SmartFilter(value:string){
    this.smartFilter = value;
  }

}
