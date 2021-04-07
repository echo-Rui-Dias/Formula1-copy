import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  next="../../../assets/images/next.svg";

  aston="../../../assets/images/teams/aston-martin.png";

  constructor() { }

  ngOnInit(): void {
  }

}
