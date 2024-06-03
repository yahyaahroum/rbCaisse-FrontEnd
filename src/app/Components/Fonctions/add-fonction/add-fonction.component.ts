import {Component, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {IfonctionEmploye} from "../../../Services/Interfaces/ifonctionEmploye";
import {ListeFonctionsComponent} from "../liste-fonctions/liste-fonctions.component";
import {FonctionService} from "../../../Services/fonction.service";



@Component({
  selector: 'app-add-fonction',
  templateUrl: './add-fonction.component.html',
  styleUrls: ['./add-fonction.component.css']
})
export class AddFonctionComponent {

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  @Input()
  fonctions: IfonctionEmploye[]=[];
  libelleExist: boolean = false;
  constructor(private notifyService: NotificationService,
              private fonctionC:ListeFonctionsComponent,
              private fonctionService: FonctionService,
              private formBuilder: FormBuilder,
  ) {
  }
  onMaterialGroupChange(event) {}
  onAdd() {

    const libelleExist=  this.fonctions.find((aff) => aff.libelle === this.myFormAdd.value.libelle);
    console.log(libelleExist);
    if(libelleExist){
      this.notifyService.showError("Ce nom de fonction existe déjà !!", "Erreur Nom");
    }
    if (!libelleExist) {

      this.fonctionService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Fonction ajouté avec succés !!", "Ajout Fonction");
          this.initmyForm();
          setTimeout(() => {
            this.fonctionC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      libelle: ['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.initmyForm();
  }
}

