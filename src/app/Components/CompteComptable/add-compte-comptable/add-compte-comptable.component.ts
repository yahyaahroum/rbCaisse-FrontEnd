import {Component, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {Icomptecomptable} from "../../../Services/Interfaces/icomptecomptable";
import {ListeCompteComptableComponent} from "../liste-compte-comptable/liste-compte-comptable.component";
import {ComptecomptableService} from "../../../Services/comptecomptable.service";


@Component({
  selector: 'app-add-compte-comptable',
  templateUrl: './add-compte-comptable.component.html',
  styleUrls: ['./add-compte-comptable.component.css']
})
export class AddCompteComptableComponent {


  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  @Input()
  compteComptables: Icomptecomptable[]=[];
  constructor(private notifyService: NotificationService,
              private compteComptableC:ListeCompteComptableComponent,
              private compteComptableService: ComptecomptableService,
              private formBuilder: FormBuilder,
  ) {
  }
  onMaterialGroupChange(event) {}

  onAdd() {

    const codeExist=  this.compteComptables.find((fo) => fo.codeComptable === this.myFormAdd.value.codeComptable);
    const intituleExist=  this.compteComptables.find((fo) => fo.intitule === this.myFormAdd.value.intitule);
    if(codeExist){
      this.notifyService.showError("Ce code comptable existe déjà !!", "Erreur Code");
    }
    if(intituleExist){
      this.notifyService.showError("Cet intitule existe déjà !!", "Erreur Intitule");
    }
    if (!codeExist && !intituleExist) {
      this.compteComptableService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Compte comptable ajouté avec succés !!", "Ajout Compte comptable");
          this.initmyForm();
          setTimeout(() => {
            this.compteComptableC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      codeComptable: ['',Validators.required],
      intitule: ['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.initmyForm();
  }
}


