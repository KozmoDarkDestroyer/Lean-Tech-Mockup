import { Injectable } from '@angular/core';
import { Travels } from '../interfaces/Travels';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private travels:Travels[];

  constructor() {
    this.travels = [
      {
        time:{
          day: "Monday",
          hour:"10th 2:28",
          period: "AM"
        },
        iniTravel: "Houston, TX, 33619",
        endTravel: "Atlanta, GA, 30123",
        price: 250,
        quantity: 1
      },
      {
        time:{
          day: "Sunday",
          hour:"11th 8:28",
          period: "PM"
        },
        iniTravel: "New York, NY, 31618",
        endTravel: "Texas, TX, 30152",
        price: 350,
        quantity: 2
      },
      {
        time:{
          day: "Wednesday",
          hour:"12th 2:28",
          period: "AM"
        },
        iniTravel: "Houston, TX, 33619",
        endTravel: "New York, NY, 30123",
        price: 550,
        quantity: 3
      }
    ];
   }

   public get Travels():Travels[]{
     return this.travels;
   }

   public set Travels(value:Travels[]){
     this.travels = value;
   }
}

