import {Component, OnChanges, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {UtilisateurService} from "../../../Services/utilisateur.service";
import {NatureOperationService} from "../../../Services/nature-operation.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {INatureOperation} from "../../../Services/Interfaces/inature-operation";
import {Icomptecomptable} from "../../../Services/Interfaces/icomptecomptable";
import {ComptecomptableService} from "../../../Services/comptecomptable.service";

@Component({
  selector: 'app-liste-natures',
  templateUrl: './liste-natures.component.html',
  styleUrls: ['./liste-natures.component.css']
})
export class ListeNaturesComponent  implements OnInit,OnChanges{
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  natureSelected: any;
  comptesComptable:Icomptecomptable[]=[];
  constructor(private natureService: NatureOperationService,
              private compteComptableService:ComptecomptableService) {}
  postList(): void {
    this.natureService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }
  getAllCompteComptable(){
    this.compteComptableService.getAll().subscribe(data=>
      this.comptesComptable=data
    );
  }
  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.postList();
    this.getAllCompteComptable();
  }

  recupNature(nature: INatureOperation) {
    this.natureSelected=nature;
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();

  }
}

