import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {NotificationService} from "../../../Services/notification.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {IBanque} from "../../../Services/Interfaces/ibanque";
import {ListeBanquesComponent} from "../liste-banques/liste-banques.component";
import {BanqueService} from "../../../Services/banque.service";

@Component({
  selector: 'app-add-banque',
  templateUrl: './add-banque.component.html',
  styleUrls: ['./add-banque.component.css']
})
export class AddBanqueComponent {

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  banques: IBanque[]=[];
  libelleExist: boolean = false;
  constructor(private notifyService: NotificationService,
              private banqueC:ListeBanquesComponent,
              private banqueService: BanqueService,
              private formBuilder: FormBuilder,
  ) {
  }
  onMaterialGroupChange(event) {}


  getAllAffaires(){
    this.banqueService.getAll().subscribe(data=>
      this.banques=data
    );
  }
  onAdd() {

    const libelleExist=  this.banques.find((ban) => ban.libelle === this.myFormAdd.value.libelle);


    if(libelleExist){
      this.notifyService.showError("Cette banque existe déjà !!", "Erreur Nom");

    }
    if (!libelleExist) {

      this.banqueService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Banque ajouté avec succés !!", "Ajout Banque");
          this.initmyForm();
          setTimeout(() => {
            this.banqueC.ngOnInit();
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
    this.getAllAffaires()
    this.initmyForm();
  }
}

