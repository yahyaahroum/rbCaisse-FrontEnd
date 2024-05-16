import {Component, OnChanges, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {demandeAlimentationService} from "../../../Services/demande-alimentation.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";


@Component({
  selector: 'app-liste-demande-alimentation',
  templateUrl: './liste-demande-alimentation.component.html',
  styleUrls: ['./liste-demande-alimentation.component.css']
})
export class ListeDemandeAlimentationComponent  implements OnInit,OnChanges{
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
      console.log(data);
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

