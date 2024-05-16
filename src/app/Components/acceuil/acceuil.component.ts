import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TokenStorageService} from "../../Auth/services/token-storage.service";
import {Router} from "@angular/router";
import {AuthService} from "../../Auth/services/auth.service";
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit,OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }




}
