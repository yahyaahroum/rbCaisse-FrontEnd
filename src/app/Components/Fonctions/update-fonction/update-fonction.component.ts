import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";
import {IfonctionEmploye} from "../../../Services/Interfaces/ifonctionEmploye";
import {ListeFonctionsComponent} from "../liste-fonctions/liste-fonctions.component";
import {FonctionService} from "../../../Services/fonction.service";

@Component({
  selector: 'app-update-fonction',
  templateUrl: './update-fonction.component.html',
  styleUrls: ['./update-fonction.component.css']
})
export class UpdateFonctionComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public fonction:IfonctionEmploye;
  myFormUpdate:FormGroup;
  @Input()
  fonctions: IfonctionEmploye[]=[];
  libelleExist:IfonctionEmploye;
  codeExist:IfonctionEmploye;
  constructor(private formBuilder: FormBuilder,
              private fonctionC:ListeFonctionsComponent,
              private fonctionService:FonctionService,
              private notifyService : NotificationService) {}

  onUpdateFonction() {
    this.libelleExist=  this.fonctions.find((fo) => fo.libelle === (this.myFormUpdate.value.libelle) && (fo.id !=  this.fonction.id));
    if(this.libelleExist){
      this.notifyService.showError("Ce nom d'affaire existe déjà !!", "Erreur Nom");

    }
    if (!this.codeExist && !this.libelleExist) {
      this.fonctionService.update(this.myFormUpdate.value, this.fonction.id).subscribe(
        data => {
          this.notifyService.showSuccess("Fonction modifié avec succés !!", "Modification Fonction");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.fonctionC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectFonctionForm(this.fonction.id);

  }
  ngOnInit(): void {
    this.initmyUpdateForm();
    this.affectFonctionForm(this.fonction.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      libelle: ['',Validators.required],
    });

  }
  private affectFonctionForm(id:number){
    this.myFormUpdate.setValue({
      libelle:this.fonction.libelle,
    });

  }
  onMaterialGroupChange($event: Event) {

  }
}



