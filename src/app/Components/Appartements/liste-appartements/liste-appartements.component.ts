import { Component } from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {UtilisateurService} from "../../../Services/utilisateur.service";
import {AppartementService} from "../../../Services/appartement.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {IAppartement} from "../../../Services/Interfaces/iappartement";

@Component({
  selector: 'app-liste-appartements',
  templateUrl: './liste-appartements.component.html',
  styleUrls: ['./liste-appartements.component.css']
})
export class ListeAppartementsComponent {
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  appartementSelected: any;
  listeAffaires:Iaffaire[]=[];
  constructor(private appartementService: AppartementService,
              private affaireService:AffaireService) {}
  postList(): void {
    this.appartementService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }
  getAllAffaires(){
    this.affaireService.getAll().subscribe(data=>
      this.listeAffaires=data
    );
  }

  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.getAllAffaires();
    this.postList();
  }

  recupAppartement(appartement: IAppartement) {
    this.appartementSelected=appartement;
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();

  }

}

