import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";
import {ISuiviCaisse} from "../../../Services/Interfaces/isuivi-caisse";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {INatureOperation} from "../../../Services/Interfaces/inature-operation";
import {IModeOperation} from "../../../Services/Interfaces/imode-operation";
import {Ipersonnel} from "../../../Services/Interfaces/ipersonnel";
import {NatureOperationService} from "../../../Services/nature-operation.service";
import {CaisseService} from "../../../Services/caisse.service";
import {ModeOperationService} from "../../../Services/mode-operation.service";
import {EmployeService} from "../../../Services/employe.service";
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {DatePipe} from "@angular/common";
import {SuiviCaisseService} from "../../../Services/suivi-caisse.service";
import {ListeSuiviCaisseComponent} from "../liste-suivi-caisse/liste-suivi-caisse.component";

@Component({
  selector: 'app-update-suivi-caisse',
  templateUrl: './update-suivi-caisse.component.html',
  styleUrls: ['./update-suivi-caisse.component.css'],
  providers: [DatePipe]
})
export class UpdateSuiviCaisseComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public suivi:ISuiviCaisse;
  myFormUpdate:FormGroup;
  @Input()
  affaires: Iaffaire[]=[];
  @Input()
  naturesOpeations:INatureOperation[]=[];
  @Input()
  caisses:ICaisse[]=[];
  @Input()
  employes:Ipersonnel[]=[];
  @Input()
  modesOperations:IModeOperation[]=[];
  fileSelected:any;
  constructor(private formBuilder: FormBuilder,
              private suiviCaisseC:ListeSuiviCaisseComponent,
              private suiviCaisseService:SuiviCaisseService,
              private notifyService : NotificationService,
              private datePipe: DatePipe,
            ) {}

  onUpdate() {
    this.myFormUpdate.value.caisse=this.caisses.find(
      (caisse) => (caisse.id === this.myFormUpdate.value.caisse));
    this.myFormUpdate.value.natureOperation=this.naturesOpeations.find(
      (natureOperation) => (natureOperation.id === this.myFormUpdate.value.natureOperation));
    this.myFormUpdate.value.affaireDepense=this.affaires.find(
      (affaireDepense) => (affaireDepense.id === this.myFormUpdate.value.affaireDepense));
    this.myFormUpdate.value.modeOperation=this.modesOperations.find(
      (modeOperation) => (modeOperation.id === this.myFormUpdate.value.modeOperation));
    this.myFormUpdate.value.employeDepense=this.employes.find(
      (employeDepense) => (employeDepense.id === this.myFormUpdate.value.employeDepense));
     this.suiviCaisseService.update(this.myFormUpdate.value, this.suivi.id).subscribe(
        data => {
          this.notifyService.showSuccess("Affaire modifié avec succés !!", "Modification Affaire");
          this.initmyUpdateForm();
          if(this.fileSelected){
            if(this.fileSelected){
              this.saveFile(this.suivi.id);

            }
          }
          setTimeout(() => {
            this.fileSelected=[];
            this.suiviCaisseC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectAffaireForm(this.suivi.id);
  }
  ngOnInit(): void {
    this.initmyUpdateForm();
    this.affectAffaireForm(this.suivi.id);
  }
  selectFile(event: any): void {
    this.fileSelected = event.target.files[0];
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      dateDepense:['',Validators.required],
      designation: ['',Validators.required],
      numeroPiece:['',Validators.required],
      montant:['',Validators.required],
      caisse:['',Validators.required],
      pieceJointe:[''],
      natureOperation:['',Validators.required],
      affaireDepense:['',Validators.required],
      modeOperation:['',Validators.required],
      employeDepense:['',Validators.required],
    });

  }
  private affectAffaireForm(id:number){
    this.myFormUpdate.setValue({
      dateDepense:this.datePipe.transform(this.suivi.dateDepense, 'yyyy-MM-dd'),
      designation:this.suivi.designation,
      numeroPiece:this.suivi.numeroPiece,
      montant:this.suivi.montant,
      pieceJointe:this.suivi.pieceJointe,
      caisse:this.suivi.caisse.id,
      natureOperation:this.suivi.natureOperation.id,
      affaireDepense:this.suivi.affaireDepense.id,
      modeOperation:this.suivi.modeOperation.id,
      employeDepense:this.suivi.employeDepense.id,
    });

  }
  onMaterialGroupChange($event: Event) {}
  updateFileByIdSuivi(id:number,file:File) {
    this.suiviCaisseService.saveFileByIdSuiviCaisse(id, file).subscribe(data => {
    });
  }
  saveFile(id:number){
    setTimeout(() => {
      this.updateFileByIdSuivi(id,this.fileSelected);
    },  100);
    this.closebutton.nativeElement.click();
  }

}
