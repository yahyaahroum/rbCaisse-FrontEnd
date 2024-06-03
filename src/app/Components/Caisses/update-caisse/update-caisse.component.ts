import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";
import {INatureOperation} from "../../../Services/Interfaces/inature-operation";
import {Icomptecomptable} from "../../../Services/Interfaces/icomptecomptable";
import {NatureOperationService} from "../../../Services/nature-operation.service";
import {ComptecomptableService} from "../../../Services/comptecomptable.service";
import {ListeCaissesComponent} from "../liste-caisses/liste-caisses.component";
import {CaisseService} from "../../../Services/caisse.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";

@Component({
  selector: 'app-update-caisse',
  templateUrl: './update-caisse.component.html',
  styleUrls: ['./update-caisse.component.css']
})
export class UpdateCaisseComponent {
  @ViewChild('closebutton') closebutton;
  @Input()
  public caisse:ICaisse;
  myFormUpdate:FormGroup;
  @Input()
  caisses: ICaisse[]=[];
  @Input()
  affaires: Iaffaire[]=[];
  constructor(private formBuilder: FormBuilder,
              private natureC:ListeCaissesComponent,
              private caisseService:CaisseService,
              private notifyService : NotificationService) {}

  onUpdateCaisse() {
    const nomExist=  this.caisses.find((a) => a.nomCaisse === this.myFormUpdate.value.nomCaisse);
    if(nomExist){
      this.notifyService.showError("Un caisse existe dejà avec ce nom !!", "Erreur Caisse");
    }

    if (!nomExist) {
      this.myFormUpdate.value.affaire=this.affaires.find((a) => (a.id === this.myFormUpdate.value.affaire));
      this.caisseService.update(this.myFormUpdate.value, this.caisse.id).subscribe(
        data => {
          this.notifyService.showSuccess("Affaire modifié avec succés !!", "Modification Affaire");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.natureC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectForm(this.caisse.id);

  }
  ngOnInit(): void {
    this.initmyUpdateForm();
    this.affectForm(this.caisse.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      nomCaisse: ['',Validators.required],
      soldeActuel:['',Validators.required],
      statut: ['',Validators.required],


    });

  }
  private affectForm(id:number){
    this.myFormUpdate.setValue({
      soldeActuel:this.caisse.soldeActuel,
      nomCaisse:this.caisse.nomCaisse ,
      statut: this.caisse.statut,
    });

  }
  onMaterialGroupChange($event: Event) {

  }
}


