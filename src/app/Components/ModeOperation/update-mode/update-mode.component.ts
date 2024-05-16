import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {IModeOperation} from "../../../Services/Interfaces/imode-operation";
import {ListeModesComponent} from "../liste-modes/liste-modes.component";
import {ModeOperationService} from "../../../Services/mode-operation.service";

@Component({
  selector: 'app-update-mode',
  templateUrl: './update-mode.component.html',
  styleUrls: ['./update-mode.component.css']
})
export class UpdateModeComponent {
  @ViewChild('closebutton') closebutton;
  @Input()
  public modeOp:IModeOperation;
  myFormUpdate:FormGroup;
  modes: IModeOperation[]=[];
  constructor(private formBuilder: FormBuilder,
              private modeC:ListeModesComponent,
              private modeService:ModeOperationService,
              private notifyService : NotificationService) {}

  onUpdateMode() {
    const libelleExist=  this.modes.find((mo) => mo.libelle === (this.myFormUpdate.value.libelle) && (mo.id !=  this.modeOp.id));
    if(libelleExist){
      this.notifyService.showError("Ce nom d'affaire existe déjà !!", "Erreur Nom");

    }
    if (!libelleExist) {
      this.modeService.update(this.myFormUpdate.value, this.modeOp.id).subscribe(
        data => {
          this.notifyService.showSuccess("Affaire modifié avec succés !!", "Modification Affaire");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.modeC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  getAllModes(){
    this.modeService.getAll().subscribe(data=>
      this.modes=data
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectModeForm(this.modeOp.id);

  }
  ngOnInit(): void {
    this.getAllModes()
    this.initmyUpdateForm();
    this.affectModeForm(this.modeOp.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      libelle: ['',Validators.required],
    });

  }
  private affectModeForm(id:number){
    this.myFormUpdate.setValue({
      libelle:this.modeOp.libelle,
    });

  }
  onMaterialGroupChange($event: Event) {

  }
}



