import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {ListeAppartementsComponent} from "../liste-appartements/liste-appartements.component";
import {AppartementService} from "../../../Services/appartement.service";
import {IAppartement} from "../../../Services/Interfaces/iappartement";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {Affaire} from "../../../Services/Classes/affaire";
import {AffaireService} from "../../../Services/affaire.service";

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent implements OnInit,OnChanges{

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  @Input()
  affaires: Iaffaire[]=[];
  @Input()
  appartements: IAppartement[]=[];

  codeExist: boolean = false;
  libelleExist: boolean = false;
  constructor(private notifyService: NotificationService,
              private appartementC:ListeAppartementsComponent,
              private appartementService:AppartementService,
              private formBuilder: FormBuilder,
              private affaireService:AffaireService
  ) {
  }
  onMaterialGroupChange(event) {}



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
      affaire:['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.initmyForm();

  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}

