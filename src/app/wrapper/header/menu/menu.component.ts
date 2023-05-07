import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }


  isVisited: boolean = false;
  @Input() set menuUpdated(isVisited: boolean) {
    this.isVisited = isVisited;
    if (isVisited == false) {
      this.closeMenu("hamburger");
    }
  }

  @Output() closeMenuEmitter: EventEmitter<any> = new EventEmitter();
  @ViewChild("menu") menuElement?: ElementRef;

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
    },
    {
      path: "portfolio",
      name: "Portfolio"
    }
  ]

  closeMenu(type: string = "") {
    this.menuElement?.nativeElement.classList.remove("is-visible");
    this.closeMenuEmitter.emit("hamburger");
    if (type === "hamburger") {
      return
    }
    setTimeout(() => {
      this.closeMenuEmitter.emit();
    }, 300)

  }

  ngAfterViewInit() {
    console.log(this.menuElement);
    setTimeout(() => {
      this.menuElement?.nativeElement.classList.add("is-visible");
    }, 1);
  }


  public checkVisited() {
    this.isVisited = !this.isVisited;
  }

  ngOnInit(): void {
  }

}
