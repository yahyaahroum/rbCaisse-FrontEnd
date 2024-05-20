import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {NotificationService} from "../../../Services/notification.service";
import {AffaireService} from "../../../Services/affaire.service";
import {IDemandeAlimentation} from "../../../Services/Interfaces/idemande-alimentation";
import {ListeDemandeAlimentationComponent} from "../liste-demande-alimentation/liste-demande-alimentation.component";
import {demandeAlimentationService} from "../../../Services/demande-alimentation.service";
import {environment} from "../../../../environnements/environment";
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {CaisseService} from "../../../Services/caisse.service";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-add-demande-alimentation',
  templateUrl: './add-demande-alimentation.component.html',
  styleUrls: ['./add-demande-alimentation.component.css',"./add-demande-alimentation.component.css"],
  providers: [DatePipe]
})
export class AddDemandeAlimentationComponent {
  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  demandeAlimentations: IDemandeAlimentation[]=[];
  caisses: ICaisse[]=[];

  constructor(private notifyService: NotificationService,
              private demandeAlimentationC:ListeDemandeAlimentationComponent,
              private demandeAlimentationService: demandeAlimentationService,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private caisseService:CaisseService,
              private storageService:TokenStorageService
  ) {
  }
  onMaterialGroupChange(event) {}


  getAlldemandeAlimentations(){
    this.demandeAlimentationService.getAll().subscribe(data=>
      this.demandeAlimentations=data
    );
  }
  getCaisses(){
    this.caisseService.caissesByUser(this.storageService.getUser().id).subscribe(data=>
      this.caisses=data
    );
  }
  getCurrentDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  onAdd() {

    if(this.myFormAdd.value.caisse.soldeActuel>environment.minAutorisationDemandeAlimentationCaisse){
      this.notifyService.showError("Impossible d'effectuer cette demande , Vous plus que "+environment.minAutorisationDemandeAlimentationCaisse
        +" dirhams sur cette caisse!!", "Erreur Demande Alimentation");
    }else {

      this.demandeAlimentationService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("demandeAlimentation ajouté avec succés !!", "Ajout demandeAlimentation");
          this.initmyForm();
          setTimeout(() => {
            this.demandeAlimentationC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      dateDemande:[this.datePipe.transform(new Date(), 'yyyy-MM-dd'),Validators.required],
      caisse:['',Validators.required],
      etat:['Envoyé'],
      montantDemande:['',Validators.required],
      motif:['',Validators.required],
      type:['',Validators.required],
      pieceJointe:[''],
    });
  }
  ngOnInit(): void {
    this.getAlldemandeAlimentations();
    this.getCaisses();
    this.initmyForm();
  }
}

