import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {NotificationService} from "../../../Services/notification.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {Iville} from "../../../Services/Interfaces/iville";
import {villeService} from "../../../Services/ville.service";
import {ListeAppartementsComponent} from "../liste-appartements/liste-appartements.component";
import {AppartementService} from "../../../Services/appartement.service";
import {IAppartement} from "../../../Services/Interfaces/iappartement";

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent implements OnInit,OnChanges{

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  villes: Iville[]=[];
  appartements: IAppartement[]=[];

  codeExist: boolean = false;
  libelleExist: boolean = false;
  constructor(private notifyService: NotificationService,
              private appartementC:ListeAppartementsComponent,
              private appartementService:AppartementService,
              private formBuilder: FormBuilder,
              private villeService:villeService
  ) {
  }
  onMaterialGroupChange(event) {}


  getAllVilles(){
    this.villeService.getAll().subscribe(data=>
      this.villes=data
    );
  }
  getAllAppartements(){
    this.appartementService.getAll().subscribe(data=>
      this.appartements=data
    );
  }
  onAdd() {

    const cmpteauExist=  this.appartements.find((app) => app.compteurEau === this.myFormAdd.value.compteurEau);
    const cmptelecExist=  this.appartements.find((app) => app.compteurElectricite === this.myFormAdd.value.compteurElectricite);
    if(cmpteauExist){
      this.notifyService.showError("Ce compteur d'eau existe déjà !!", "Erreur Compteur");
    }
    if(cmptelecExist){
      this.notifyService.showError("Ce compteur d'electricite existe déjà !!", "Erreur Compteur");

    }
    if(cmptelecExist){
      this.notifyService.showError("Ce compteur d'electricite existe déjà !!", "Erreur Compteur");

    }

    if (!cmpteauExist && !cmptelecExist ) {

      this.appartementService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Appartement ajouté avec succés !!", "Ajout Appartement");
          this.initmyForm();
          setTimeout(() => {
            this.appartementC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      libelle:['',Validators.required],
      compteurEau: ['',Validators.required],
      compteurElectricite:['',Validators.required],
      montantLoye:['',Validators.required],
      ville:['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.initmyForm();
    this.getAllVilles();
    this.getAllAppartements();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllVilles();
    this.getAllAppartements();
    alert('fgdsdfs');
  }
}

