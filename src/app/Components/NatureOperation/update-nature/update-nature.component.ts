import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";
import {INatureOperation} from "../../../Services/Interfaces/inature-operation";
import {ListeNaturesComponent} from "../liste-natures/liste-natures.component";
import {NatureOperationService} from "../../../Services/nature-operation.service";
import {ComptecomptableService} from "../../../Services/comptecomptable.service";
import {Icomptecomptable} from "../../../Services/Interfaces/icomptecomptable";

@Component({
  selector: 'app-update-nature',
  templateUrl: './update-nature.component.html',
  styleUrls: ['./update-nature.component.css']
})
export class UpdateNatureComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public nature:INatureOperation;
  myFormUpdate:FormGroup;
  @Input()
  natures: INatureOperation[]=[];
  @Input()
  comptesCoptable: Icomptecomptable[]=[];
  constructor(private formBuilder: FormBuilder,
              private natureC:ListeNaturesComponent,
              private natureService:NatureOperationService,
              private notifyService : NotificationService,
              private compteComptableService:ComptecomptableService) {}

  onUpdateAffaire() {
    const libelleExist=  this.natures.find((aff) => aff.libelle === (this.myFormUpdate.value.libelle) && (aff.id !=  this.nature.id));

    if(libelleExist){
      this.notifyService.showError("Ce nom d'affaire existe déjà !!", "Erreur Nom");

    }
    if (!libelleExist) {
      this.myFormUpdate.value.compteComptable=this.comptesCoptable.find((a) => (a.id === this.myFormUpdate.value.compteComptable));
      this.natureService.update(this.myFormUpdate.value, this.nature.id).subscribe(
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
    this.affectForm(this.nature.id);

  }
  ngOnInit(): void {
    this.initmyUpdateForm();
    this.affectForm(this.nature.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      libelle: ['',Validators.required],
      compteComptable: ['',Validators.required],


    });

  }
  private affectForm(id:number){
    this.myFormUpdate.setValue({
      libelle:this.nature.libelle,
      compteComptable: this.nature.compteComptable.id,

    });

  }
  onMaterialGroupChange($event: Event) {

  }
}


