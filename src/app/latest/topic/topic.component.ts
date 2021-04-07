import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  urlAleatorio="https://placeimg.com/640/480/any";

  constructor() { }

  ngOnInit(): void {
  }

}
