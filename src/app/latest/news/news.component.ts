import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  urlAleatorio="https://placeimg.com/206/116/any";
  
  constructor() { }

  ngOnInit(): void {
  }

}
