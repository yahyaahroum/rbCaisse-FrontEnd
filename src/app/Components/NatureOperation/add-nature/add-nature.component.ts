import {Component, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {INatureOperation} from "../../../Services/Interfaces/inature-operation";
import {NatureOperationService} from "../../../Services/nature-operation.service";
import {ListeNaturesComponent} from "../liste-natures/liste-natures.component";
import {Icomptecomptable} from "../../../Services/Interfaces/icomptecomptable";
import {ComptecomptableService} from "../../../Services/comptecomptable.service";

@Component({
  selector: 'app-add-nature',
  templateUrl: './add-nature.component.html',
  styleUrls: ['./add-nature.component.css']
})
export class AddNatureComponent {

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  @Input()
  natures: INatureOperation[]=[];
  @Input()
  comptesCoptable: Icomptecomptable[]=[];
  constructor(private notifyService: NotificationService,
              private natureC:ListeNaturesComponent,
              private natureService: NatureOperationService,
              private formBuilder: FormBuilder) {
  }
  onMaterialGroupChange(event) {}




  onAdd() {
    const libelleExist=  this.natures.find((na) => na.libelle === this.myFormAdd.value.libelle);
    if(libelleExist){
      this.notifyService.showError("Cette nature d'opération existe déjà !!", "Erreur Nom");
    }
    if (!libelleExist) {
      this.natureService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Nature d'opération ajouté avec succés !!", "Ajout Nature");
          this.initmyForm();
          setTimeout(() => {
            this.natureC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }
  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      libelle: ['',Validators.required],
      compteComptable: ['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.initmyForm();
  }
}

