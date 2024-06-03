import {Component, OnChanges, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {UtilisateurService} from "../../../Services/utilisateur.service";
import {ModeOperationService} from "../../../Services/mode-operation.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {IModeOperation} from "../../../Services/Interfaces/imode-operation";

@Component({
  selector: 'app-liste-modes',
  templateUrl: './liste-modes.component.html',
  styleUrls: ['./liste-modes.component.css']
})
export class ListeModesComponent  implements OnInit,OnChanges{
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  modeSelected: any;
  constructor(private modeService: ModeOperationService,) {}
  postList(): void {
    this.modeService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }

  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.postList();
  }
  recupMode(mode: IModeOperation) {
    this.modeSelected=mode;
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();

  }
}

