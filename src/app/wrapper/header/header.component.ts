import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  public isVisited: boolean = false;
  public checkVisited() {
    debugger
    this.isVisited = !this.isVisited;
    this.hamburger = !this.hamburger;
    this.isVisited = JSON.parse(JSON.stringify(this.isVisited));
    this.cd.detectChanges();
  }


  hamburger = false;
  closeMenu(event: string) {
    if (event == "hamburger") {
      this.hamburger = false;
      return
    }
    this.isVisited = false;
  }

  ngAfterViewInit() {
  }


  ngOnInit(): void {
  }

}
