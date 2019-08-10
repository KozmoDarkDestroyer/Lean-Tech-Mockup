type period  = 'AM'|'PM';

export interface Travels{
    time:{
        day:string,
        hour:string,
        period:period
    },
    iniTravel:string,
    endTravel:string;
    price:number;
    quantity:number;
}