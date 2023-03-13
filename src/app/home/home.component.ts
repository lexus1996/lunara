import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sarmale') sarmale: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
    Aos.init()

  }


}
