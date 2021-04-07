import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LatestComponent } from './latest/latest.component';
import { TopicComponent } from './latest/topic/topic.component';
import { NewsComponent } from './latest/news/news.component';
import { ScheduleComponent } from './nav-bar/schedule/schedule.component';
import { RaceComponent } from './nav-bar/schedule/race/race.component';
import {StandingsComponent} from './nav-bar/standings/standings.component';
import { DriversComponent } from './nav-bar/drivers/drivers.component';
import { TeamsComponent } from './nav-bar/teams/teams.component';
import { GamingComponent } from './nav-bar/gaming/gaming.component';
import { LiDriverComponent } from './nav-bar/drivers/li-driver/li-driver.component';
import { MainComponent } from './main/main.component';
import { LastestNewComponent } from './main/lastest-new/lastest-new.component';
import { NewComponent } from './main/lastest-new/new/new.component';
import { SecondaryNewsComponent } from './main/secondary-news/secondary-news.component';
import { MoreNewsComponent } from './main/more-news/more-news.component';
import { CalendarComponent } from './main/calendar/calendar.component';
import { RaceCalendarComponent } from './main/calendar/race-calendar/race-calendar.component';
import { RaceSelectedComponent } from './main/calendar/race-selected/race-selected.component';
import { FlagComponent } from './main/calendar/flag/flag.component';
import { DateComponent } from './main/calendar/date/date.component';
import { SeasonInfoComponent } from './main/season-info/season-info.component';
import { ConstructorsComponent } from './main/season-info/constructors/constructors.component';
import { LastRaceComponent } from './main/season-info/last-race/last-race.component';
import { DriversLeaderboardComponent } from './main/season-info/drivers-leaderboard/drivers-leaderboard.component';
import { LiLeaderboardComponent } from './main/season-info/drivers-leaderboard/li-leaderboard/li-leaderboard.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LatestComponent,
    TopicComponent,
    NewsComponent,
    ScheduleComponent,
    RaceComponent,
    StandingsComponent,
    DriversComponent,
    TeamsComponent,
    GamingComponent,
    LiDriverComponent,
    MainComponent,
    LastestNewComponent,
    NewComponent,
    SecondaryNewsComponent,
    MoreNewsComponent,
    CalendarComponent,
    RaceCalendarComponent,
    RaceSelectedComponent,
    FlagComponent,
    DateComponent,
    SeasonInfoComponent,
    ConstructorsComponent,
    LastRaceComponent,
    DriversLeaderboardComponent,
    LiLeaderboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
