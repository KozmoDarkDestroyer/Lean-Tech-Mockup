import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapse:boolean;
  display:string;
  widht:number;

  constructor() { 
    this.collapse = false;
  }

  ngOnInit() {
  }

  onResize(event) {
    event.target.innerWidth;
    console.log(event.target.innerWidth);
    if (event.target.innerWidth >= 680) {
      this.display = 'flex';
    }
    else{
      this.display = 'none';
    }
  }


  collapseMenu(collapse:boolean){
    if (collapse) {
      this.display = 'flex';
    }
    else{
      this.display = 'none';
    }
  }
}
