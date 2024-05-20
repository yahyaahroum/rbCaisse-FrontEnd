import {Component, OnChanges, OnInit} from '@angular/core';
import {EmployeService} from "../../../Services/employe.service";
import {Ipersonnel} from "../../../Services/Interfaces/ipersonnel";




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
  constructor(private employeService: EmployeService,) {}
  postList(): void {
    this.employeService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }

  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.postList();
  }

  recupEmploye(employe: Ipersonnel) {
    this.employeSelected=employe;
  }


}

