import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {ListeCompteComptableComponent} from "../liste-compte-comptable/liste-compte-comptable.component";
import {Icomptecomptable} from "../../../Services/Interfaces/icomptecomptable";
import {ComptecomptableService} from "../../../Services/comptecomptable.service";

@Component({
  selector: 'app-update-compta-comptable',
  templateUrl: './update-compta-comptable.component.html',
  styleUrls: ['./update-compta-comptable.component.css']
})
export class UpdateComptaComptableComponent {


  @ViewChild('closebutton') closebutton;
  @Input()
  public compteComptable:Icomptecomptable;
  myFormUpdate:FormGroup;
  @Input()
  compteComptables: Icomptecomptable[]=[];

  constructor(private formBuilder: FormBuilder,
              private compteComptableC:ListeCompteComptableComponent,
              private compteComptableService:ComptecomptableService,
              private notifyService : NotificationService) {}

  onUpdatecompteComptable() {
    const codeExist=  this.compteComptables.find((fo) => fo.codeComptable === (this.myFormUpdate.value.codeComptable) && (fo.id !=  this.compteComptable.id));
    const intituleExist=  this.compteComptables.find((fo) => fo.intitule === (this.myFormUpdate.value.intitule) && (fo.id !=  this.compteComptable.id));
    if(codeExist){
      this.notifyService.showError("Ce code comptable existe déjà !!", "Erreur Code");
    }
    if(intituleExist){
      this.notifyService.showError("Cet intitule existe déjà !!", "Erreur Intitule");
    }
    if (!codeExist && !intituleExist) {
      this.compteComptableService.update(this.myFormUpdate.value, this.compteComptable.id).subscribe(
        data => {
          this.notifyService.showSuccess("compteComptable modifié avec succés !!", "Modification compteComptable");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.compteComptableC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectcompteComptableForm(this.compteComptable.id);

  }
  ngOnInit(): void {
    this.initmyUpdateForm();
    this.affectcompteComptableForm(this.compteComptable.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      codeComptable: ['',Validators.required],
      intitule: ['',Validators.required],

    });

  }
  private affectcompteComptableForm(id:number){
    this.myFormUpdate.setValue({
      codeComptable:this.compteComptable.codeComptable,
      intitule:this.compteComptable.intitule
    });

  }
  onMaterialGroupChange($event: Event) {

  }
}




