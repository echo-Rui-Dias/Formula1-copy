import { style } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  url = "../../assets/images/f1-tv-logo.png"
  f2="../../assets/images/f2_logo.png"
  f3="../../assets/images/f3_logo.png"
  next="../../assets/images/next.svg"
  next2="../../assets/images/next-black.svg"
  fia="../../assets/images/fia_logo.png"
  down="../../assets/images/arrow-down-sign-to-navigate.svg"


  showAppLatest:boolean;
  showAppSchedule:boolean;
  showAppStandings:boolean;
  showAppDrivers:boolean;
  showAppTeams:boolean;
  showAppGaming:boolean;

  showSubnav: string | null = null;
  tSubNav: any = null;
  
  showNav:boolean =true;

  teste1:boolean=false;

  // isFixedNavbar:boolean=true;


  constructor() { 
    this.showAppLatest=false;
    this.showAppSchedule=false;
    this.showAppStandings=false;
    this.showAppDrivers=false;
    this.showAppTeams=false;
    this.showAppGaming=false;
  }

  // timeout(){
  //     setTimeout(()=>{
  //       this.showAppDrivers=false;
  //     },2000)
  // }

  ngOnInit(): void {

  }

  activateSubmenu(area: string): void {
    window.clearTimeout(this.tSubNav);
    this.resetSubmenu();
    this.tSubNav = window.setTimeout(() =>{
      this.showSubnav = area;
    }, 500);
  }

  resetSubmenu(): void {
    console.log("saiu");
    window.clearTimeout(this.tSubNav);
    this.showSubnav=null;
  }

  toggleNav(){
    this.showNav=!this.showNav;
  }




}
