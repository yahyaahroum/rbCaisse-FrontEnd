import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {NotificationService} from "../../../Services/notification.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";

@Component({
  selector: 'app-add-demande-alimentation',
  templateUrl: './add-demande-alimentation.component.html',
  styleUrls: ['./add-demande-alimentation.component.css']
})
export class AddDemandeAlimentationComponent {

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  affaires: Iaffaire[]=[];

  codeExist: boolean = false;
  libelleExist: boolean = false;
  constructor(private notifyService: NotificationService,
              private affaireC:ListeAffairesComponent,
              private affaireService: AffaireService,
              private formBuilder: FormBuilder,
  ) {
  }
  onMaterialGroupChange(event) {}


  getAllAffaires(){
    this.affaireService.getAll().subscribe(data=>
      this.affaires=data
    );
  }
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
    });
  }
  ngOnInit(): void {
    this.getAllAffaires()
    this.initmyForm();
  }
}

