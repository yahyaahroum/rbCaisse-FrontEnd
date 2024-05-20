import {Component, OnChanges, OnInit} from '@angular/core';
import {demandeAlimentationService} from "../../../Services/demande-alimentation.service";
import {IDemandeAlimentation} from "../../../Services/Interfaces/idemande-alimentation";




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
  demandeAlimentationSelected: any;
  constructor(private demandeAlimentationService: demandeAlimentationService,) {}
  postList(): void {
    this.demandeAlimentationService.getAll().subscribe(data=>{
      this.POSTS=data;
      console.log(this.POSTS);
    })
  }

  ngOnChanges(): void {
    this.postList();
  }

  ngOnInit(): void {
    this.postList();
  }

  recupdemandeAlimentation(demandeAlimentation: IDemandeAlimentation) {
    this.demandeAlimentationSelected=demandeAlimentation;
  }

}

