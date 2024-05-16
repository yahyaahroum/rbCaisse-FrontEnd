import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TokenStorageService} from "./Auth/services/token-storage.service";
import {GlobalService} from "./Auth/services/global.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(public globalVariableService:GlobalService) {
  }




}
