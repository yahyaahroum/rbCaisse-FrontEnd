import {Component, OnChanges, OnInit} from '@angular/core';
import {EmployeService} from "../../../Services/employe.service";
import {Ipersonnel} from "../../../Services/Interfaces/ipersonnel";
import {FonctionService} from "../../../Services/fonction.service";
import {IfonctionEmploye} from "../../../Services/Interfaces/ifonctionEmploye";




@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.css']
})
export class ListeEmployesComponent  implements OnInit,OnChanges{
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  employeSelected: any;
  listeFonctions:IfonctionEmploye[]=[];
  constructor(private employeService: EmployeService,
              private fonctionService:FonctionService) {}
  postList(): void {
    this.employeService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }
  getAllFonction(){
    this.fonctionService.getAll().subscribe(data=>
      this.listeFonctions=data
    );
  }
  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.postList();
    this.getAllFonction();
  }

  recupEmploye(employe: Ipersonnel) {
    this.employeSelected=employe;
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.postList();

  }
}

