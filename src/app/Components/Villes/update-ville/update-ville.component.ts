import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iville} from "../../../Services/Interfaces/iville";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {villeService} from "../../../Services/ville.service";
import {NotificationService} from "../../../Services/notification.service";
import {ListeVillesComponent} from "../liste-villes/liste-villes.component";

@Component({
  selector: 'app-update-ville',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.css']
})
export class UpdateVilleComponent {


  @ViewChild('closebutton') closebutton;
  @Input()
  public ville:Iville;
  myFormUpdate:FormGroup;
  villes: Iville[]=[];
  libelleExist:Iville;
  constructor(private formBuilder: FormBuilder,
              private villeC:ListeVillesComponent,
              private villeService:villeService,
              private notifyService : NotificationService) {}

  onUpdateville() {
    this.libelleExist=  this.villes.find((a) => a.libelle === (this.myFormUpdate.value.libelle) && (a.id !=  this.ville.id));

    if(this.libelleExist){
      this.notifyService.showError("Cette ville existe déjà !!", "Erreur Nom");

    }
    if (!this.libelleExist) {
      this.villeService.updateville(this.myFormUpdate.value, this.ville.id).subscribe(
        data => {
          this.notifyService.showSuccess("ville modifié avec succés !!", "Modification ville");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.villeC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  getAllvilles(){
    this.villeService.getAll().subscribe(data=>
      this.villes=data
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectvilleForm(this.ville.id);

  }
  ngOnInit(): void {
    this.getAllvilles()
    this.initmyUpdateForm();
    this.affectvilleForm(this.ville.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      libelle: ['',Validators.required],


    });

  }
  private affectvilleForm(id:number){
    this.myFormUpdate.setValue({
      libelle:this.ville.libelle,
    });

  }
  onMaterialGroupChange($event: Event) {

  }


}




