import {Component, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {NotificationService} from "../../../Services/notification.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {ListeModesComponent} from "../liste-modes/liste-modes.component";
import {ModeOperationService} from "../../../Services/mode-operation.service";
import {IModeOperation} from "../../../Services/Interfaces/imode-operation";

@Component({
  selector: 'app-add-mode',
  templateUrl: './add-mode.component.html',
  styleUrls: ['./add-mode.component.css']
})
export class AddModeComponent {
  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  @Input()
  modes: IModeOperation[]=[];
  libelleExist: boolean = false;
  constructor(private notifyService: NotificationService,
              private modeC:ListeModesComponent,
              private modeService: ModeOperationService,
              private formBuilder: FormBuilder,
  ) {
  }
  onMaterialGroupChange(event) {}

  onAdd() {

    const libelleExist=  this.modes.find((mo) => mo.libelle === this.myFormAdd.value.libelle);

    if(libelleExist){
      this.notifyService.showError("Ce mode existe déjà !!", "Erreur Nom");
    }
    if (!libelleExist) {
      this.modeService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Mode ajouté avec succés !!", "Ajout Mode");
          this.initmyForm();
          setTimeout(() => {
            this.modeC.ngOnInit();
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

