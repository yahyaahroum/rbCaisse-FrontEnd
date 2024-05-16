import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {NotificationService} from "../../../Services/notification.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {AffaireService} from "../../../Services/affaire.service";
import {EmployeService} from "../../../Services/employe.service";
import {ListeEmployesComponent} from "../liste-employes/liste-employes.component";
import {Ipersonnel} from "../../../Services/Interfaces/ipersonnel";
import {IfonctionEmploye} from "../../../Services/Interfaces/ifonctionEmploye";
import {FonctionService} from "../../../Services/fonction.service";

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent {
  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  employes: Ipersonnel[]=[];
  listeFonctions:IfonctionEmploye[]=[];

  constructor(private notifyService: NotificationService,
              private employeC:ListeEmployesComponent,
              private employeService: EmployeService,
              private formBuilder: FormBuilder,
              private fonctionService:FonctionService
  ) {
  }
  onMaterialGroupChange(event) {}

getAllFonction(){
    this.fonctionService.getAll().subscribe(data=>
    this.listeFonctions=data
    );
}
  getAll(){
    this.employeService.getAll().subscribe(data=>
      this.employes=data
    );
  }
  onAdd() {
    const matriculeExist=  this.employes.find((emp) => emp.matricule === this.myFormAdd.value.matricule);
    const nomExist=  this.employes.find((emp) => emp.nom === this.myFormAdd.value.nom && emp.prenom === this.myFormAdd.value.prenom);
    if(matriculeExist){
      this.notifyService.showError("Ce matricule existe déjà !!", "Erreur Matricule");
    }
    if(nomExist){
      this.notifyService.showError("Ce nom existe déjà !!", "Erreur Nom");

    }
    if (!matriculeExist && !nomExist) {

      this.employeService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Employé ajouté avec succés !!", "Ajout Employé");
          this.initmyForm();
          setTimeout(() => {
            this.employeC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      matricule:['',Validators.required],
      nom: ['',Validators.required],
      prenom:['',Validators.required],
      fonction:['',Validators.required],
    });

  }
  ngOnInit(): void {
    this.getAll();
    this.getAllFonction();
    this.initmyForm();
  }
}
