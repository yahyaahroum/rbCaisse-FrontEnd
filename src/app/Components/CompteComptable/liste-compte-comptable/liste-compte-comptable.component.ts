import {Component, OnChanges, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {ComptecomptableService} from "../../../Services/comptecomptable.service";
import {Icomptecomptable} from "../../../Services/Interfaces/icomptecomptable";


@Component({
  selector: 'app-liste-compte-comptable',
  templateUrl: './liste-compte-comptable.component.html',
  styleUrls: ['./liste-compte-comptable.component.css']
})
export class ListeCompteComptableComponent implements OnInit,OnChanges{
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  compteComptableSelected: any;
  constructor(private tokenstorage: TokenStorageService,
              private compteComptableService: ComptecomptableService) {}
  postList(): void {
    this.compteComptableService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }

  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.postList();
  }

  recupcompteComptable(compteComptable: Icomptecomptable) {
    this.compteComptableSelected=compteComptable;
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();

  }

}
