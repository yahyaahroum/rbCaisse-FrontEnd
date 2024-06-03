import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {CaisseService} from "../../../Services/caisse.service";
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {environment} from "../../../../environnements/environment";
import {IAlimentation} from "../../../Services/Interfaces/ialimentation";
import {AlimentationService} from "../../../Services/alimentation.service";
import {ListeAlimentationsComponent} from "../liste-alimentations/liste-demande-alimentation.component";
import {Inaturealimentation} from "../../../Services/Interfaces/inaturealimentation";


@Component({
  selector: 'app-update-alimentations',
  templateUrl: './update-alimentations.component.html',
  styleUrls: ['./update-alimentations.component.css']
})
export class UpdateAlimentationsComponent implements OnInit,OnChanges{
  @ViewChild('closebutton') closebutton;
  @Input()
  public alimentation:IAlimentation;
  @Input()
  caisses: ICaisse[] = [];
  @Input()
  listeNatureAlimentation:Inaturealimentation[]=[];
  myFormUpdate:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private alimentationC:ListeAlimentationsComponent,
              private alimentationService:AlimentationService,
              private notifyService : NotificationService) {}

  onUpdateAlimentation() {
    if(this.myFormUpdate.value.caisse.soldeActuel>environment.minAutorisationDemandeAlimentationCaisse){
      this.notifyService.showError("Impossible d'effectuer cette demande , Vous plus que "+environment.minAutorisationDemandeAlimentationCaisse
        +" dirhams sur cette caisse!!", "Erreur Demande Alimentation");
    }else {
      this.myFormUpdate.value.natureAlimentation=this.listeNatureAlimentation.find(n=>
        n.id===this.myFormUpdate.value.natureAlimentation);
      this.myFormUpdate.value.caisse=this.caisses.find((a) => (a.id === this.myFormUpdate.value.caisse));
      this.alimentationService.update(this.myFormUpdate.value, this.alimentation.id).subscribe(
        data => {
          this.notifyService.showSuccess("Affaire modifié avec succés !!", "Modification Affaire");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.alimentationC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.alimentation){
      this.initmyUpdateForm();
      this.affectForm(this.alimentation.id);
    }

  }
  ngOnInit(): void {
    this.initmyUpdateForm();
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      caisse:['',Validators.required],
      montant:['',Validators.required],
      motif:['',Validators.required],
      natureAlimentation:['',Validators.required],
    });

  }
  private affectForm(id:number){
    this.myFormUpdate.setValue({
      caisse:this.alimentation.caisse.id,
      montant:this.alimentation.montant,
      motif:this.alimentation.motif,
      natureAlimentation:this.alimentation.natureAlimentation.id
    });
  }
  onMaterialGroupChange($event: Event) {

  }
}


