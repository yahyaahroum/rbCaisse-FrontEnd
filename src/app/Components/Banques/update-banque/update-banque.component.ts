import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {IBanque} from "../../../Services/Interfaces/ibanque";
import {ListeBanquesComponent} from "../liste-banques/liste-banques.component";
import {BanqueService} from "../../../Services/banque.service";

@Component({
  selector: 'app-update-banque',
  templateUrl: './update-banque.component.html',
  styleUrls: ['./update-banque.component.css']
})
export class UpdateBanqueComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public banque:IBanque;
  myFormUpdate:FormGroup;
  banques: IBanque[]=[];
  libelleExist:IBanque;
  constructor(private formBuilder: FormBuilder,
              private banqueC:ListeBanquesComponent,
              private banqueService:BanqueService,
              private notifyService : NotificationService) {}

  onUpdateBanque() {
    this.libelleExist=  this.banques.find((ban) => ban.libelle === (this.myFormUpdate.value.libelle) && (ban.id !=  this.banque.id));

    if(this.libelleExist){
      this.notifyService.showError("Cette banque existe déjà !!", "Erreur Nom");

    }
    if (!this.libelleExist) {
      this.banqueService.update(this.myFormUpdate.value, this.banque.id).subscribe(
        data => {
          this.notifyService.showSuccess("Banque modifié avec succés !!", "Modification Banque");
          this.initmyUpdateForm();
          setTimeout(() => {
            this.banqueC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });

    }
  }

  getAllbanques(){
    this.banqueService.getAll().subscribe(data=>
      this.banques=data
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectbanqueForm(this.banque.id);

  }
  ngOnInit(): void {
    this.getAllbanques()
    this.initmyUpdateForm();
    this.affectbanqueForm(this.banque.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      libelle: ['',Validators.required],


    });

  }
  private affectbanqueForm(id:number){
    this.myFormUpdate.setValue({
      libelle:this.banque.libelle,
    });

  }
  onMaterialGroupChange($event: Event) {

  }


}



