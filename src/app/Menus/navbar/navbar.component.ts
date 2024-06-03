import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../Auth/services/token-storage.service";
import {GlobalService} from "../../Auth/services/global.service";
import {Iuser} from "../../Services/Interfaces/iuser";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input()
  userCon:Iuser;
  constructor(private router:Router,
              private tokenStorage:TokenStorageService,
              public globalVariableService:GlobalService) {
  }
  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/Login');
  }

  protected readonly UpperCasePipe = UpperCasePipe;
}
