import { Component } from '@angular/core';
import {villeService} from "../../../Services/ville.service";
import {Iville} from "../../../Services/Interfaces/iville";

@Component({
  selector: 'app-liste-villes',
  templateUrl: './liste-villes.component.html',
  styleUrls: ['./liste-villes.component.css']
})
export class ListeVillesComponent {
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  villeSelected: any;
  constructor(private villeService: villeService,) {}
  postList(): void {
    this.villeService.getAll().subscribe(data=>{
      this.POSTS=data;
      console.log(data);
    })
  }

  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.postList();
  }

  recupville(ville: Iville) {
    this.villeSelected=ville;
  }
}

