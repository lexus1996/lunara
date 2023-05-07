import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor() {

  }

  bgImgLink: string = "url('assets\Images\main-background-lunara.png')";



  ngOnInit(): void {
  }

}
