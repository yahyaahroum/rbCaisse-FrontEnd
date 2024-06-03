import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";
import {ListeAffairesComponent} from "../liste-affaires/liste-affaires.component";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
@Component({
  selector: 'app-add-affaire',
  templateUrl: './add-affaire.component.html',
  styleUrls: ['./add-affaire.component.css']
})
export class AddAffaireComponent {
  @ViewChild('closebutton') closebutton;
  @Input()
  affaires: Iaffaire[]=[];
  @Input()
  caisses: ICaisse[]=[];
  myFormAdd: FormGroup;


  codeExist: boolean = false;
  libelleExist: boolean = false;
  constructor(private notifyService: NotificationService,
              private affaireC:ListeAffairesComponent,
              private affaireService: AffaireService,
              private formBuilder: FormBuilder,
  ) {
  }
  onMaterialGroupChange(event) {}

  onAdd() {

    const libelleExist=  this.affaires.find((aff) => aff.libelle === this.myFormAdd.value.libelle);
    const codeExist=  this.affaires.find((aff) => aff.code === this.myFormAdd.value.code);
    if(codeExist){
      this.notifyService.showError("Ce code affaire existe déjà !!", "Erreur Code");
    }
    if(libelleExist){
      this.notifyService.showError("Ce nom affaire existe déjà !!", "Erreur Nom");

    }
    if (!codeExist && !libelleExist) {

      this.affaireService.addAffaire(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Affaire ajouté avec succés !!", "Ajout Affaire");
          this.initmyForm();
          setTimeout(() => {
            this.affaireC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      code:['',Validators.required],
      libelle: ['',Validators.required],
      statut:['',Validators.required],
      caisse:['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.initmyForm();
  }
}
