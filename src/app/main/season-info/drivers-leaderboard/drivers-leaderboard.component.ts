import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-leaderboard',
  templateUrl: './drivers-leaderboard.component.html',
  styleUrls: ['./drivers-leaderboard.component.scss']
})
export class DriversLeaderboardComponent implements OnInit {

  bottas="../../../../assets/images/drivers/bottas.png";
  lewis="../../../../assets/images/drivers/lewis.png";
  max="../../../../assets/images/drivers/max.png";

  constructor() { }

  ngOnInit(): void {
  }

}
