import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";

@Component({
  selector: 'app-update-alimentations',
  templateUrl: './update-alimentations.component.html',
  styleUrls: ['./update-alimentations.component.css']
})
export class UpdateAlimentationsComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public affaire:Iaffaire;
  myFormUpdate:FormGroup;
  affaires: Iaffaire[]=[];

  libelleExist:Iaffaire;
  codeExist:Iaffaire;
  constructor(private formBuilder: FormBuilder,
              private affaireC:ListeAffairesComponent,
              private affaireService:AffaireService,
              private notifyService : NotificationService) {}

  onUpdateAffaire() {
    this.libelleExist=  this.affaires.find((aff) => aff.libelle === (this.myFormUpdate.value.libelle) && (aff.id !=  this.affaire.id));
    this.codeExist=  this.affaires.find((aff) => (aff.code === this.myFormUpdate.value.code) && (aff.id !=  this.affaire.id));
    if(this.codeExist){
      this.notifyService.showError("Ce code d'affaire existe déjà !!", "Erreur Code");
    }
    if(this.libelleExist){
      this.notifyService.showError("Ce nom d'affaire existe déjà !!", "Erreur Nom");

    }
    if (!this.codeExist && !this.libelleExist) {
      this.affaireService.updateAffaire(this.myFormUpdate.value, this.affaire.id).subscribe(
        data => {
          this.notifyService.showSuccess("Affaire modifié avec succés !!", "Modification Affaire");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.affaireC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  getAllAffaires(){
    this.affaireService.getAll().subscribe(data=>
      this.affaires=data
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectAffaireForm(this.affaire.id);

  }
  ngOnInit(): void {
    this.getAllAffaires()
    this.initmyUpdateForm();
    this.affectAffaireForm(this.affaire.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      code:['',Validators.required],
      libelle: ['',Validators.required],
      statut:['',Validators.required],

    });

  }
  private affectAffaireForm(id:number){
    this.myFormUpdate.setValue({
      code: this.affaire.code,
      libelle:this.affaire.libelle,
      statut:this.affaire.statut,
    });

  }
  onMaterialGroupChange($event: Event) {

  }
}



