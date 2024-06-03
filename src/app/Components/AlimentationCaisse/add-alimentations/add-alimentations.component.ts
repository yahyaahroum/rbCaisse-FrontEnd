import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {environment} from "../../../../environnements/environment";
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {CaisseService} from "../../../Services/caisse.service";
import {DatePipe} from "@angular/common";
import {FileUploadService} from "../../../Services/file-upload.service";
import {AlimentationService} from "../../../Services/alimentation.service";
import {IAlimentation} from "../../../Services/Interfaces/ialimentation";
import {ListeAlimentationsComponent} from "../liste-alimentations/liste-demande-alimentation.component";
import {Inaturealimentation} from "../../../Services/Interfaces/inaturealimentation";


@Component({
  selector: 'app-add-alimentations',
  templateUrl: './add-alimentations.component.html',
  styleUrls: ['./add-alimentations.component.css', "./add-alimentations.component.css"],
  providers: [DatePipe]
})
export class AddAlimentationsComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @Input()
  caisses: ICaisse[] = [];
  @Input()
  alimentations: IAlimentation[] = [];
  @Input()
  listeNatureAlimentation:Inaturealimentation[]=[];
  myFormAdd: FormGroup;

  listeFiles: any = [];


  constructor(private notifyService: NotificationService,
              private alimentationC: ListeAlimentationsComponent,
              private alimentationService: AlimentationService,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private caisseService: CaisseService,
              private storageService: TokenStorageService,
              private fileService: FileUploadService
  ) {
  }


  onMaterialGroupChange(event) {}
  getCurrentDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  onAdd() {

    if(this.myFormAdd.value.caisse.soldeActuel>environment.minAutorisationDemandeAlimentationCaisse){
      this.notifyService.showError("Impossible d'effectuer cette demande , Vous plus que "+environment.minAutorisationDemandeAlimentationCaisse
        +" dirhams sur cette caisse!!", "Erreur Demande Alimentation");
    }else {

      this.alimentationService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Alimentation Caisse ajouté avec succés !!", "Demande Alimentation Caisse");
          this.saveFiles(data.id);
          this.initmyForm();
          setTimeout(() => {
            this.alimentationC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      dateDemande:[this.datePipe.transform(new Date(), 'yyyy-MM-dd'),Validators.required],
      caisse:['',Validators.required],
      statut:['Brouillon'],
      montant:['',Validators.required],
      motif:['',Validators.required],
      natureAlimentation:['',Validators.required],
      pieceJointe:[''],
    });
  }
  ngOnInit(): void {
    this.initmyForm();
  }

  selectFile(event: any): void {
    this.listeFiles = event.target.files;
  }
  saveFiles(id:number){
    if(this.listeFiles.length>0){
      this.listeFiles.forEach((file, i) => {
        setTimeout(() => {
          this.saveFileByIdAlimentation(id, file);
        }, i * 100);
        this.notifyService.showSuccess("Piéce jointe ajouté avec succés !!", "Ajout Piéce Jointe");
        this.closebutton.nativeElement.click();
      });
    }

    /*this.listePJForDelete.forEach(itemD=>{
      this.fileService.deleteFile(itemD.name).subscribe(data=>
        console.log(data)
      );
    });*/
    setTimeout(() => {
  //    this.ngOnChanges();
      this.closebutton.nativeElement.click();
    },  400);
    this.listeFiles=[];
   // this.listePJForDelete=[];
  }
  uploadFile(file:File){
    this.fileService.upload(file).subscribe(f =>{
    });
  }
  saveFileByIdAlimentation(id:number,file:File) {
    this.fileService.saveFileByIdAlimentation(id, file).subscribe(data => {
      console.log(data);
    });
  }

}

