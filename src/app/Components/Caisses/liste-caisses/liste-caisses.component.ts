import {Component, OnChanges, OnInit} from '@angular/core';
import {CaisseService} from "../../../Services/caisse.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";

@Component({
  selector: 'app-liste-caisses',
  templateUrl: './liste-caisses.component.html',
  styleUrls: ['./liste-caisses.component.css']
})
export class ListeCaissesComponent implements OnInit,OnChanges{
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  caisseSelected: any;
  constructor(private caisseService: CaisseService,) {}
  postList(): void {
    this.caisseService.getAll().subscribe(data=>{
      this.POSTS=data;
    })
  }

  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.postList();
  }

  recupCaisse(caisse: ICaisse) {
    this.caisseSelected=caisse;
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();

  }

}

