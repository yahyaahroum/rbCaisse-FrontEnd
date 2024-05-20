import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {ListeCaissesComponent} from "../liste-caisses/liste-caisses.component";
import {CaisseService} from "../../../Services/caisse.service";
import {AffaireService} from "../../../Services/affaire.service";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";

@Component({
  selector: 'app-add-caisse',
  templateUrl: './add-caisse.component.html',
  styleUrls: ['./add-caisse.component.css']
})
export class AddCaisseComponent {

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  caisses: ICaisse[]=[];
  affaires: Iaffaire[]=[];

  constructor(private notifyService: NotificationService,
              private caisseC:ListeCaissesComponent,
              private caisseService: CaisseService,
              private formBuilder: FormBuilder,
              private affaireService:AffaireService
  ) {
  }
  onMaterialGroupChange(event) {}


  getAllcaisses(){
    this.caisseService.getAll().subscribe(data=>
      this.caisses=data
    );
  }
  getAllAffaires(){
    this.affaireService.getAll().subscribe(data=>
      this.affaires=data
    );
  }
  onAdd() {
    const codeExist=  this.caisses.find((a) => a.affaire.id === this.myFormAdd.value.affaire.id);
    if(codeExist){
      this.notifyService.showError("Cette caisse existe dejà pour ce chantier !!", "Erreur Caisse");
    }

    if (!codeExist) {

      this.caisseService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Caisse ajouté avec succés !!", "Ajout caisse");
          this.initmyForm();
          setTimeout(() => {
            this.caisseC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      soldeActuel:['',Validators.required],
      affaire: ['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.getAllcaisses()
    this.getAllAffaires()
    this.initmyForm();
  }
}

