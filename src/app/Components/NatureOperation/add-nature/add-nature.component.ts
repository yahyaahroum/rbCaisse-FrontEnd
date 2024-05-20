import {Component, ViewChild} from '@angular/core';
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
  natures: INatureOperation[]=[];
  comptesCoptable: Icomptecomptable[]=[];
  constructor(private notifyService: NotificationService,
              private natureC:ListeNaturesComponent,
              private natureService: NatureOperationService,
              private formBuilder: FormBuilder,
              private compteComptableService:ComptecomptableService
  ) {
  }
  onMaterialGroupChange(event) {}


  getAllnatures(){
    this.natureService.getAll().subscribe(data=>
      this.natures=data
    );
  }
  getAllCompteComptable(){
    this.compteComptableService.getAll().subscribe(data=>
      this.comptesCoptable=data
    );
  }
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
    this.getAllnatures();
    this.getAllCompteComptable();
    this.initmyForm();
  }
}

