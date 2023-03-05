import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  routes = [
    {
      path: "home",
      name: "Home"
    },
    {
      path: "contact",
      name: "Contact"
    },
    {
      path: "about",
      name: "About"
    },
    {
      path: "services-page",
      name: "Services"
    }
  ]



  public isVisited: boolean = false;
  elementOpacity = 0;
  public checkVisited() {
    this.isVisited = !this.isVisited;
    this.elementOpacity = 1;
  }

  ngAfterViewInit() {
  }


  ngOnInit(): void {
  }

}
