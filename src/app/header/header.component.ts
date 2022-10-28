import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerI',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponentI implements OnInit {
   
  isFixed: boolean = false;
  
  @HostListener('document:scroll') isScrolled() {
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }



}
