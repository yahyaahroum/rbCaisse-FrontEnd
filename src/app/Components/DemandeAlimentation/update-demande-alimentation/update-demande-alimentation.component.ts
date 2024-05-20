import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";
import {IDemandeAlimentation} from "../../../Services/Interfaces/idemande-alimentation";
import {ListeDemandeAlimentationComponent} from "../liste-demande-alimentation/liste-demande-alimentation.component";
import {demandeAlimentationService} from "../../../Services/demande-alimentation.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {CaisseService} from "../../../Services/caisse.service";
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {environment} from "../../../../environnements/environment";


@Component({
  selector: 'app-update-demande-alimentation',
  templateUrl: './update-demande-alimentation.component.html',
  styleUrls: ['./update-demande-alimentation.component.css']
})
export class UpdateDemandeAlimentationComponent {
  @ViewChild('closebutton') closebutton;
  @Input()
  public demandeAlimentation:IDemandeAlimentation;
  myFormUpdate:FormGroup;
  caisses: ICaisse[]=[];
  constructor(private formBuilder: FormBuilder,
              private demandeAlimentationC:ListeDemandeAlimentationComponent,
              private demandeAlimentationService:demandeAlimentationService,
              private notifyService : NotificationService,
              private caisseService:CaisseService,
              private affaireService:AffaireService,
              private storageService:TokenStorageService) {}

  onUpdatedemandeAlimentation() {
    if(this.myFormUpdate.value.caisse.soldeActuel>environment.minAutorisationDemandeAlimentationCaisse){
      this.notifyService.showError("Impossible d'effectuer cette demande , Vous plus que "+environment.minAutorisationDemandeAlimentationCaisse
        +" dirhams sur cette caisse!!", "Erreur Demande Alimentation");
    }else {
      this.myFormUpdate.value.caisse=this.caisses.find((a) => (a.id === this.myFormUpdate.value.caisse));
      this.demandeAlimentationService.update(this.myFormUpdate.value, this.demandeAlimentation.id).subscribe(
        data => {
          this.notifyService.showSuccess("Affaire modifié avec succés !!", "Modification Affaire");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.demandeAlimentationC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }
  getCaisses(){
    this.caisseService.caissesByUser(this.storageService.getUser().id).subscribe(data=>
      this.caisses=data
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectForm(this.demandeAlimentation.id);
  }
  ngOnInit(): void {
    this.initmyUpdateForm();
    this.getCaisses();
    this.affectForm(this.demandeAlimentation.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      caisse:['',Validators.required],
      montantDemande:['',Validators.required],
      motif:['',Validators.required],
      type:['',Validators.required],
    });

  }
  private affectForm(id:number){
    this.myFormUpdate.setValue({
      caisse:this.demandeAlimentation.caisse.id,
      montantDemande:this.demandeAlimentation.montantDemande,
      motif:this.demandeAlimentation.motif,
      type:this.demandeAlimentation.type
    });
  }
  onMaterialGroupChange($event: Event) {

  }
}


