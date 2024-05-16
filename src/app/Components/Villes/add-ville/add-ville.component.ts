import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iville} from "../../../Services/Interfaces/iville";
import {NotificationService} from "../../../Services/notification.service";

import {villeService} from "../../../Services/ville.service";
import {ListeVillesComponent} from "../liste-villes/liste-villes.component";

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent {

  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  villes: Iville[]=[];
  libelleExist: boolean = false;
  constructor(private notifyService: NotificationService,
              private villeC:ListeVillesComponent,
              private villeService: villeService,
              private formBuilder: FormBuilder,
  ) {
  }
  onMaterialGroupChange(event) {}


  getAllVilles(){
    this.villeService.getAll().subscribe(data=>
      this.villes=data
    );
  }
  onAdd() {

    const libelleExist=  this.villes.find((a) => a.libelle === this.myFormAdd.value.libelle);

    if(libelleExist){
      this.notifyService.showError("Cette ville existe déjà !!", "Erreur Nom");
    }
    if (!libelleExist) {

      this.villeService.addville(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("ville ajouté avec succés !!", "Ajout Ville");
          this.initmyForm();
          setTimeout(() => {
            this.villeC.ngOnInit();
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
    this.getAllVilles()
    this.initmyForm();
  }
}


