import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.scss']
})
export class MoreNewsComponent implements OnInit {

  colorWhite="string";

  constructor() { }

  ngOnInit(): void {
  }

  changecolor(){
    this.colorWhite="white";
  }

}
