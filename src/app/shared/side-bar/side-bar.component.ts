import { Component, OnInit } from '@angular/core';
import { faCoffee,faAngleUp,faAngleDown,faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { MenuItems } from '../menu-item/menu-item';
// import { faCo,faAngleUp,faAngleDown,faSlidersH } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faCoffee = faCoffee;
  faAngleUp=faAngleUp;
  faAngleDown=faAngleDown;
  faSlidersH=faSlidersH;
  expandedMenu=-1;
  expandPages=false;

  Dashboard:boolean
  expandDashboard: any=[];
 
  

  constructor(public menuItems: MenuItems) { this.Dashboard=false}

  ngOnInit(): void {
    this.menuItems.getAll().map((el)=>{
el.main.map((item)=>{
  this.expandPages=item.name 
  this.Dashboard= item.state=false

  this.expandDashboard.push(this.expandPages)
})

console.log('this.expandDashboard',this.expandDashboard)
    })

 
  }
  

  expand(index:any,x:any){
   
    alert(index)
    alert(x)

    if(index===1 && x==false){
    
      this.Dashboard=true 
    } else{
      this.Dashboard=false;
    }
  }

}
