import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  next="../../../assets/images/next.svg"
  nextRed="../../../assets/images/next-red.svg"
  teste="../../../assets/images/schedule/Portuguese_Grand_Prix.png"

  constructor() { }

  ngOnInit(): void {
  }

}
