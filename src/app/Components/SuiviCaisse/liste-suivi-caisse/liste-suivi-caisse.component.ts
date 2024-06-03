import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {SuiviCaisseService} from "../../../Services/suivi-caisse.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {ModeOperationService} from "../../../Services/mode-operation.service";
import {EmployeService} from "../../../Services/employe.service";
import {NatureOperationService} from "../../../Services/nature-operation.service";
import {CaisseService} from "../../../Services/caisse.service";
import {INatureOperation} from "../../../Services/Interfaces/inature-operation";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {Ipersonnel} from "../../../Services/Interfaces/ipersonnel";
import {IModeOperation} from "../../../Services/Interfaces/imode-operation";

@Component({
  selector: 'app-liste-suivi-caisse',
  templateUrl: './liste-suivi-caisse.component.html',
  styleUrls: ['./liste-suivi-caisse.component.css']
})
export class ListeSuiviCaisseComponent  implements OnInit,OnChanges{
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  suiviSelected: any;
  affaires: Iaffaire[]=[];
  naturesOpeations:INatureOperation[]=[];
  caisses:ICaisse[]=[];
  employes:Ipersonnel[]=[];
  modesOperations:IModeOperation[]=[];
  constructor(private suiviCaisseService: SuiviCaisseService,
              private storageService:TokenStorageService,
              private modeOperationService:ModeOperationService,
              private employeService:EmployeService,
              private natureOperationService:NatureOperationService,
              private caisseService:CaisseService,
              private affaireService:AffaireService,) {}
  postList(): void {
    this.suiviCaisseService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }
  getAllAffaires(){
    this.affaireService.getAffairesByUser(this.storageService.getUser().id).subscribe(data=>
      this.affaires=data
    );
  }
  getAllnatureOperation()
  {
    this.natureOperationService.getAll().subscribe(data=>
      this.naturesOpeations=data
    );
  }
  getAllCaisses(){
    this.caisseService.caissesByUser(this.storageService.getUser().id).subscribe(data=>
      this.caisses=data
    );
  }
  getAllModeOperation(){
    this.modeOperationService.getAll().subscribe(data=>
      this.modesOperations=data
    );
  }
  getAllEmploye(){
    this.employeService.getAll().subscribe(data=>
      this.employes=data
    );
  }

  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.getAllAffaires();
    this.getAllEmploye();
    this.getAllModeOperation();
    this.getAllnatureOperation();
    this.getAllCaisses();
    this.postList();
  }

  recupAffaire(affaire: Iaffaire) {
    this.suiviSelected=affaire;
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();

  }

}

