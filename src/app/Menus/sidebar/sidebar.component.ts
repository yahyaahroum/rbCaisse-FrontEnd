import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {GlobalService} from "../../Auth/services/global.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponen{
  showSideBar:boolean=true;
  subscription:Subscription;
  constructor(public globalVariableService:GlobalService) {}



}
