import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
import {Iuser} from "../../../Services/Interfaces/iuser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Irole} from "../../../Services/Interfaces/irole";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {UtilisateurService} from "../../../Services/utilisateur.service";
import {RoleService} from "../../../Services/role.service";
import {ListeUtilisateursComponent} from "../liste-utilisateurs/liste-utilisateurs.component";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  @ViewChild('closebutton') closebutton;
  @Input()
  public user:Iuser;
  myFormUpdate:FormGroup;
  @Input()
  listeAffaires: Iaffaire[] = [];
  @Input()
  listeRoles: Irole[] = [];
  @Input()
  Users:Iuser[]=[];
  listRolesUser:string[]=[];
  listAffairesUser:string[]=[];
  usernameExist:boolean=false;
  emailExist:boolean=false;
  constructor(private userservice: UtilisateurService,
              private roleService: RoleService,
              private formBuilder: FormBuilder,
              private userC:ListeUtilisateursComponent,
              private affaireService:AffaireService,
              private notifyService : NotificationService) {}

  onUpdateUser() {
    this.userservice.existeByUsername(this.myFormUpdate.value.username).subscribe(username=>{
        if(username && this.myFormUpdate.value.username!=this.user.username){
          this.usernameExist=true;
          this.notifyService.showError("Ce username existe déjà !!", "Erreur Username");
        }
        else {
          this.usernameExist=false;
        }
      }
    );
    this.userservice.existeByEmail(this.myFormUpdate.value.email).subscribe(email=>{
        if(email && this.myFormUpdate.value.email!=this.user.email){
          this.emailExist=true;
          this.notifyService.showError("Cet email existe déjà !!", "Erreur Email");
        }else{
          this.emailExist=false;
        }
      }
    );
    if (!this.usernameExist && !this.emailExist) {
      this.userservice.updateUser(this.myFormUpdate.value, this.user.id).subscribe(
        data => {
          this.myFormUpdate.value.listeRoles.forEach(a => {
            this.userservice.addRoles(this.user.id, a).subscribe();
            this.myFormUpdate.value.listeAffaires.forEach(aff => {
              this.userservice.addAffairesToUser(this.user.id, aff).subscribe();
            });
            // alert('Utilisateur modifié avec succés');
            this.notifyService.showSuccess("Utilisateur modifié avec succés !!", "Modification Utilisateur");
            this.initmyUpdateForm();
            setTimeout(() => {
              this.userC.ngOnInit();
              this.closebutton.nativeElement.click();
            }, 400);
          });
        },
      );
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initmyUpdateForm();
    this.affectUsertoForm(this.user.id);

  }
  ngOnInit(): void {
    this.initmyUpdateForm();
    this.affectUsertoForm(this.user.id);
  }
  private initmyUpdateForm() {
    this.myFormUpdate = this.formBuilder.group({
      username:['',Validators.required],
      email: ['',Validators.email],
      listeRoles:['',Validators.required],
      listeAffaires:['',Validators.required],
      matricule: [''],
      nom: ['',Validators.required],
      prenom: ['',Validators.required],
    });

  }
  private affectUsertoForm(id:number){
    this.listAffairesUser=[];
    this.listRolesUser=[];
    this.userservice.getUserById(id).subscribe(data=> {
      this.user=data;
      data.roles.forEach(a=>{
        this.listRolesUser.push(a.name);
      });
      data.affaires.forEach(a=>{
        this.listAffairesUser.push(a.code);
      });
      this.myFormUpdate.setValue({
        username:this.user.username,
        email: this.user.email,
        listeRoles:this.listRolesUser,
        listeAffaires:this.listAffairesUser,
        matricule:this.user.matricule,
        nom: this.user.nom,
        prenom: this.user.prenom,
      });
    });
  }

  onMaterialGroupChange($event: Event) {

  }
}

