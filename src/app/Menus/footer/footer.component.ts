import { Component } from '@angular/core';
import {GlobalService} from "../../Auth/services/global.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public globalVariableService:GlobalService) {}

}
