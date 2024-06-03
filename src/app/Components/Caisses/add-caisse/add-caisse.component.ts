import {Component, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {ListeCaissesComponent} from "../liste-caisses/liste-caisses.component";
import {CaisseService} from "../../../Services/caisse.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";

@Component({
  selector: 'app-add-caisse',
  templateUrl: './add-caisse.component.html',
  styleUrls: ['./add-caisse.component.css']
})
export class AddCaisseComponent {

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  @Input()
  caisses: ICaisse[]=[];
  @Input()
  affaires: Iaffaire[]=[];

  constructor(private notifyService: NotificationService,
              private caisseC:ListeCaissesComponent,
              private caisseService: CaisseService,
              private formBuilder: FormBuilder,
              private affaireService:AffaireService
  ) {
  }
  onMaterialGroupChange(event) {}



  onAdd() {
    const nomExist=  this.caisses.find((a) => a.nomCaisse === this.myFormAdd.value.nomCaisse);
    if(nomExist){
      this.notifyService.showError("Un caisse existe dejà avec ce nom !!", "Erreur Caisse");
    }

    if (!nomExist) {

      this.caisseService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Caisse ajouté avec succés !!", "Ajout caisse");
          this.initmyForm();
          setTimeout(() => {
            this.caisseC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      nomCaisse: ['',Validators.required],
      soldeActuel:['',Validators.required],
      statut: ['Actif',Validators.required],
    });
  }
  ngOnInit(): void {
    this.initmyForm();
  }
}

