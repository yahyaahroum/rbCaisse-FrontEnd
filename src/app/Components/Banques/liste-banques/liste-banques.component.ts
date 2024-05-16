import { Component } from '@angular/core';

import {BanqueService} from "../../../Services/banque.service";
import {IBanque} from "../../../Services/Interfaces/ibanque";


@Component({
  selector: 'app-liste-banques',
  templateUrl: './liste-banques.component.html',
  styleUrls: ['./liste-banques.component.css']
})
export class ListeBanquesComponent {
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  banqueSelected: any;
  constructor(private banqueService: BanqueService,) {}
  postList(): void {
    this.banqueService.getAll().subscribe(data=>{
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

  recupBanque(banque: IBanque) {
    this.banqueSelected=banque;
  }
}

