import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "../../../Services/notification.service";
import {IAlimentation} from "../../../Services/Interfaces/ialimentation";
import {AlimentationService} from "../../../Services/alimentation.service";
import {ListeAlimentationsComponent} from "../liste-alimentations/liste-alimentations.component";

@Component({
  selector: 'app-add-alimentations',
  templateUrl: './add-alimentations.component.html',
  styleUrls: ['./add-alimentations.component.css']
})
export class AddAlimentationsComponent {
  @ViewChild('closebutton') closebutton;
  myFormAdd: FormGroup;
  alimentations: IAlimentation[]=[];

  codeExist: boolean = false;
  libelleExist: boolean = false;
  constructor(private notifyService: NotificationService,
              private alimentationC:ListeAlimentationsComponent,
              private alimentationService: AlimentationService,
              private formBuilder: FormBuilder,
  ) {
  }
  onMaterialGroupChange(event) {}


  getAllAlimentations(){
    this.alimentationService.getAll().subscribe(data=>
      this.alimentations=data
    );
  }
  onAdd() {




      this.alimentationService.register(this.myFormAdd.value).subscribe(
        data => {
          this.notifyService.showSuccess("Affaire ajouté avec succés !!", "Ajout Affaire");
          this.initmyForm();
          setTimeout(() => {
            this.alimentationC.ngOnInit();
            this.closebutton.nativeElement.click();
          }, 400);
        });
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      code:['',Validators.required],
      libelle: ['',Validators.required],
      statut:['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.getAllAlimentations();
    this.initmyForm();
  }
}
