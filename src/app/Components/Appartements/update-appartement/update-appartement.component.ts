import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";
import {IAppartement} from "../../../Services/Interfaces/iappartement";
import {AppartementService} from "../../../Services/appartement.service";
import {ListeAppartementsComponent} from "../liste-appartements/liste-appartements.component";



@Component({
  selector: 'app-update-appartement',
  templateUrl: './update-appartement.component.html',
  styleUrls: ['./update-appartement.component.css']
})
export class UpdateAppartementComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public appartement:IAppartement;
  myFormUpdate:FormGroup;
  @Input()
  affaires: Iaffaire[]=[];
  @Input()
  appartements: IAppartement[]=[];
  constructor(private formBuilder: FormBuilder,
              private appartementC:ListeAppartementsComponent,
              private appartementService:AppartementService,
              private notifyService : NotificationService,
              private affaireService:AffaireService) {}

  onUpdateAppartement() {
    const cmpteauExist=  this.appartements.find((app) => (app.compteurEau === this.myFormUpdate.value.compteurEau) && (app.id !=  this.appartement.id));
    const cmptelecExist=  this.appartements.find((app) => (app.compteurElectricite === this.myFormUpdate.value.compteurElectricite) && (app.id !=  this.appartement.id));
    if(cmpteauExist){
      this.notifyService.showError("Ce compteur d'eau existe déjà !!", "Erreur Compteur");
    }
    if(cmptelecExist){
      this.notifyService.showError("Ce compteur d'electricite existe déjà !!", "Erreur Compteur");

    }

    if (!cmpteauExist && !cmptelecExist) {
      this.myFormUpdate.value.affaire=this.affaires.find(aff=>aff.id===this.myFormUpdate.value.affaire);
      this.appartementService.update(this.myFormUpdate.value, this.appartement.id).subscribe(
        data => {
          this.notifyService.showSuccess("Appartement modifié avec succés !!", "Modification Appartement");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.appartementC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();

    this.affectAffaireForm(this.appartement.id);

  }
  ngOnInit(): void {
    this.initmyUpdateForm();
    this.affectAffaireForm(this.appartement.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      libelle: ['',Validators.required],
      compteurEau:['',Validators.required],
      compteurElectricite:['',Validators.required],
      montantLoye:['',Validators.required],
      affaire:['',Validators.required],

    });

  }
  private affectAffaireForm(id:number){
    this.myFormUpdate.setValue({
      libelle:this.appartement.libelle,
      compteurEau:this.appartement.compteurEau,
      compteurElectricite:this.appartement.compteurElectricite,
      montantLoye:this.appartement.montantLoye,
      affaire:this.appartement.affaire.id
    });

  }
  onMaterialGroupChange($event: Event) {

  }

}


