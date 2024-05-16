import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../Auth/services/token-storage.service";
import {GlobalService} from "../../Auth/services/global.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router:Router,
              private tokenStorage:TokenStorageService,
              public globalVariableService:GlobalService) {
  }
  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/Login');
  }
}
