import {Component, OnChanges, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {UtilisateurService} from "../../../Services/utilisateur.service";
import {FonctionService} from "../../../Services/fonction.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {IfonctionEmploye} from "../../../Services/Interfaces/ifonctionEmploye";

@Component({
  selector: 'app-liste-fonctions',
  templateUrl: './liste-fonctions.component.html',
  styleUrls: ['./liste-fonctions.component.css']
})
export class ListeFonctionsComponent  implements OnInit,OnChanges{
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  fonctionSelected: any;
  constructor(private tokenstorage: TokenStorageService,
              private fonctionService: FonctionService) {}
  postList(): void {
    this.fonctionService.getAll().subscribe(data=>{
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

  recupFonction(fonction: IfonctionEmploye) {
    this.fonctionSelected=fonction;
  }
}

