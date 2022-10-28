import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Location } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  path = '';
  onNotifications=false
  onMessages=false
  constructor(private router: Router, private location: Location) {
   this.router.events.subscribe((val) => {
     this.path = this.location.path();
   });}

  ngOnInit(): void {
  }

}
