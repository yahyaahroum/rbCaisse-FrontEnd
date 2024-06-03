import {Component, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {NotificationService} from "../../../Services/notification.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {NatureOperationService} from "../../../Services/nature-operation.service";
import {CaisseService} from "../../../Services/caisse.service";
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {ModeOperationService} from "../../../Services/mode-operation.service";
import {EmployeService} from "../../../Services/employe.service";
import {INatureOperation} from "../../../Services/Interfaces/inature-operation";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {Ipersonnel} from "../../../Services/Interfaces/ipersonnel";
import {IModeOperation} from "../../../Services/Interfaces/imode-operation";
import {ListeSuiviCaisseComponent} from "../liste-suivi-caisse/liste-suivi-caisse.component";
import {SuiviCaisseService} from "../../../Services/suivi-caisse.service";
import {Affaire} from "../../../Services/Classes/affaire";
import {DatePipe} from "@angular/common";
import {FileUploadService} from "../../../Services/file-upload.service";

@Component({
  selector: 'app-add-suivi-caisse',
  templateUrl: './add-suivi-caisse.component.html',
  styleUrls: ['./add-suivi-caisse.component.css'],
  providers: [DatePipe]
})
export class AddSuiviCaisseComponent {

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  @Input()
  affaires: Iaffaire[]=[];
  @Input()
  naturesOperations:INatureOperation[]=[];
  @Input()
  caisses:ICaisse[]=[];
  @Input()
  employes:Ipersonnel[]=[];
  @Input()
  modesOperations:IModeOperation[]=[];
  fileSelected:any;

  codeExist: boolean = false;
  libelleExist: boolean = false;
  constructor(private formBuilder: FormBuilder,
              private suiviCaisseService:SuiviCaisseService,
              private notifyService : NotificationService,
              private suiviCaisseC:ListeSuiviCaisseComponent) {
  }
  onMaterialGroupChange(event) {}
  onAdd() {
      this.suiviCaisseService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Dépense ajouté avec succés !!", "Suivi Caisse");
          this.initmyForm();
          if(this.fileSelected){
            this.saveFile(data.id);
          }

          setTimeout(() => {
            this.fileSelected=[];
            this.suiviCaisseC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });


  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
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
  ngOnInit(): void {
    this.initmyForm();
  }

  selectFile(event: any): void {
    this.fileSelected = event.target.files[0];
  }

  saveFileByIdSuivi(id:number,file:File) {
    this.suiviCaisseService.saveFileByIdSuiviCaisse(id, file).subscribe(data => {
    });
  }
  saveFile(id:number){
        setTimeout(() => {
          this.saveFileByIdSuivi(id,this.fileSelected);
        },  100);
        this.closebutton.nativeElement.click();
    }
}

