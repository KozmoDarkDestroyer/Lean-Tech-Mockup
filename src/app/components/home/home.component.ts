import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../services/travel.service';
import { Travels } from '../../interfaces/Travels';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private iconSales:string;
  private iconHeart:string;
  private iconCalendar:string;
  private travelLength:number;
  private travels:Travels[];

  constructor(private travelService:TravelService) { 
    this.iconSales = 'fas fa-certificate';
    this.iconHeart = 'far fa-heart';
    this.iconCalendar = 'fas fa-calendar-alt';
    this.travels = travelService.Travels;
    this.travelLength = this.Travels.length;
  }

  ngOnInit() {
  }

  public get Travels():Travels[]{
    return this.travels;
  }

  public get IconSales():string{
    return this.iconSales;
  }

  public get IconHeart():string{
    return this.iconHeart;
  }

  public get IconCalendar():string{
    return this.iconCalendar;
  }

  public get TravelLength():number{
    return this.travelLength;
  }
}
