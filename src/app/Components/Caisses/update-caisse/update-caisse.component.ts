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
  caisses: ICaisse[]=[];
  affaires: Iaffaire[]=[];
  constructor(private formBuilder: FormBuilder,
              private natureC:ListeCaissesComponent,
              private caisseService:CaisseService,
              private notifyService : NotificationService,
              private affaireService:AffaireService) {}

  onUpdateCaisse() {
    const affaireExist=  this.caisses.find((c) => c.affaire.id === (this.myFormUpdate.value.affaire) && (c.id !=  this.caisse.id));

    if(affaireExist){
      this.notifyService.showError("Cette affaire a dejà une caisse !!", "Erreur Affaire");
    }
    if (!affaireExist) {
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
  getAllCaisses(){
    this.caisseService.getAll().subscribe(data=>
      this.caisses=data
    );
  }
  getAllAffaires(){
    this.affaireService.getAll().subscribe(data=>
      this.affaires=data
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectForm(this.caisse.id);

  }
  ngOnInit(): void {
    this.getAllAffaires()
    this.initmyUpdateForm();
    this.getAllCaisses();
    this.affectForm(this.caisse.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      soldeActuel: ['',Validators.required],
      affaire: ['',Validators.required],


    });

  }
  private affectForm(id:number){
    this.myFormUpdate.setValue({
      soldeActuel:this.caisse.soldeActuel,
      affaire: this.caisse.affaire.id,
    });

  }
  onMaterialGroupChange($event: Event) {

  }
}


