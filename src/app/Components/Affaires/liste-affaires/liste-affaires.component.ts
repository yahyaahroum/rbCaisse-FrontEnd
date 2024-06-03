import {Component, OnChanges, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {CaisseService} from "../../../Services/caisse.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";

@Component({
  selector: 'app-liste-affaires',
  templateUrl: './liste-affaires.component.html',
  styleUrls: ['./liste-affaires.component.css']
})
export class ListeAffairesComponent implements OnInit,OnChanges{
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  affaireSelected: any;
  listeCaisses:ICaisse[]=[];
  constructor(private tokenstorage: TokenStorageService,
              private affaireService: AffaireService,
              private caisseService:CaisseService) {}
  postList(): void {
    this.affaireService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }
 getAllCaisses(){
    this.caisseService.getAll().subscribe(data=>
    this.listeCaisses=data);
 }
  ngOnChanges(): void {
    this.postList();
    this.getAllCaisses();
  }

  ngOnInit(): void {
    this.getAllCaisses();
    this.postList();
  }

  recupAffaire(affaire: Iaffaire) {
    this.affaireSelected=affaire;
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();

  }
}

