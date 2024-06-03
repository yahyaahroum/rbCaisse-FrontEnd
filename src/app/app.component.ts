import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TokenStorageService} from "./Auth/services/token-storage.service";
import {GlobalService} from "./Auth/services/global.service";
import {Iuser} from "./Services/Interfaces/iuser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userConnected:Iuser;
  constructor(public globalVariableService:GlobalService,
              private tokenStorage:TokenStorageService) {
  }

  ngOnInit(): void {
    this.userConnected=this.tokenStorage.getUser();
  }




}
