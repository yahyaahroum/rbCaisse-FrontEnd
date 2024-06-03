import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ipersonnel} from "../../../Services/Interfaces/ipersonnel";
import {ListeEmployesComponent} from "../liste-employes/liste-employes.component";
import {EmployeService} from "../../../Services/employe.service";
import {NotificationService} from "../../../Services/notification.service";
import {FonctionService} from "../../../Services/fonction.service";
import {IfonctionEmploye} from "../../../Services/Interfaces/ifonctionEmploye";

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public employe:Ipersonnel;
  myFormUpdate:FormGroup;
  @Input()
  employes: Ipersonnel[]=[];
  @Input()
  listeFonctions:IfonctionEmploye[]=[];
  constructor(private formBuilder: FormBuilder,
              private employeC:ListeEmployesComponent,
              private employeService:EmployeService,
              private notifyService : NotificationService,
              private fonctionService:FonctionService,) {}


  onUpdate() {
    const matriculeExist=  this.employes.find((emp) => emp.matricule === (this.myFormUpdate.value.matricule) && (emp.id !=  this.employe.id));
    const nomExist=  this.employes.find((emp) => ((emp.nom === this.myFormUpdate.value.nom) && (emp.nom === this.myFormUpdate.value.prenom)) && (emp.id !=  this.employe.id));
    if(matriculeExist){
      this.notifyService.showError("Ce matricule d'employe existe déjà !!", "Erreur Matricule");
    }
    if(nomExist){
      this.notifyService.showError("Ce nom d'employe existe déjà !!", "Erreur Nom");

    }
    if (!nomExist && !matriculeExist) {
      this.myFormUpdate.value.fonction=this.listeFonctions.find((fonction) => (fonction.id === this.myFormUpdate.value.fonction));
      this.employeService.update(this.myFormUpdate.value, this.employe.id).subscribe(
        data => {
          this.notifyService.showSuccess("Employé modifié avec succés !!", "Modification Employé");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.employeC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectemployeForm(this.employe.id);

  }
  ngOnInit(): void {
    this.initmyUpdateForm();
    this.affectemployeForm(this.employe.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      matricule:['',Validators.required],
      nom: ['',Validators.required],
      prenom:['',Validators.required],
      fonction:['',Validators.required],
    });

  }
  private affectemployeForm(id:number){
    this.myFormUpdate.setValue({
      matricule: this.employe.matricule,
      nom:this.employe.nom,
      prenom:this.employe.prenom,
      fonction:this.employe.fonction.id,
    });
  }
  onMaterialGroupChange($event: Event) {

  }
}



