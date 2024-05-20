import { Component } from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {UtilisateurService} from "../../../Services/utilisateur.service";
import {AlimentationService} from "../../../Services/alimentation.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";

@Component({
  selector: 'app-liste-alimentations',
  templateUrl: './liste-alimentations.component.html',
  styleUrls: ['./liste-alimentations.component.css']
})
export class ListeAlimentationsComponent {
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  affaireSelected: any;
  constructor(private tokenstorage: TokenStorageService,
              private affaireService: AffaireService,) {}
  postList(): void {
    this.affaireService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }

  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.postList();
  }

  recupAffaire(affaire: Iaffaire) {
    this.affaireSelected=affaire;
  }
}

