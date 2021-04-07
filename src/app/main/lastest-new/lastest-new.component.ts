import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './lastest-new.component.html',
  styleUrls: ['./lastest-new.component.scss']
})
export class LastestNewComponent implements OnInit {

  img="../../../assets/images/news/new1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
