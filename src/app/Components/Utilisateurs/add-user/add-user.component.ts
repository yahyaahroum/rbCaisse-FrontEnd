import {Component, OnInit} from '@angular/core';
import {Irole} from "../../../Services/Interfaces/irole";
import {UtilisateurService} from "../../../Services/utilisateur.service";
import {RoleService} from "../../../Services/role.service";

import {Iuser} from "../../../Services/Interfaces/iuser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";
import {ListeUtilisateursComponent} from "../liste-utilisateurs/liste-utilisateurs.component";
import {Affaire} from "../../../Services/Classes/affaire";
import {TokenStorageService} from "../../../Auth/services/token-storage.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  myFormAdd: FormGroup;
  listeAffaires: Affaire[] = [];
  confirmpassword: null;
  listeRoles: [] = [];
  roles: Irole[] = [];
  user: Iuser;
  affaires: Iaffaire[] = [];
  showPassword?: boolean = false;
  showconfirmPassword?: boolean = false;
  usernameExist: boolean = false;
  emailExist: boolean = false;
  options = [
    { value: 'option1', label: 'Option 1', color: '#f0f0f0' },
    { value: 'option2', label: 'Option 2', color: '#e0e0e0' },
  ];

  getOptionStyle(option) {
    return {
      'background-color': option.color
    };
  }
  constructor(private notifyService: NotificationService,
              private userC:ListeUtilisateursComponent,
              private affaireservice: AffaireService,
              private formBuilder: FormBuilder,
              private userservice: UtilisateurService,
              private roleService: RoleService,
  ) {
  }
  onMaterialGroupChange(event) {}
/*  private loadAffaires() {
    this.affaireservice.getAffairesByUser(this.tokenstorage.getUser().id).subscribe(x => {
      this.listeAffaires = x;
    });
  }*/

  getAllRoles() {
    this.roleService.getAllRoles().subscribe(data =>
        this.roles = data
    );
  }
  getAllAffaires(){
    this.affaireservice.getAll().subscribe(data=>
        this.affaires=data
    );
  }
  onAdd() {
    this.userservice.existeByUsername(this.myFormAdd.value.username).subscribe(username => {
          this.usernameExist = username;
          if (this.usernameExist) {
            this.notifyService.showError("Ce username existe déjà !!", "Erreur Username");
          }
        }
    );
    this.userservice.existeByEmail(this.myFormAdd.value.email).subscribe(email => {
          this.emailExist = email;
          if (email) {
            this.notifyService.showError("Cet email existe déjà !!", "Erreur Email");
          }
        }
    );
    if (!this.usernameExist && !this.emailExist) {
      this.userservice.register(this.myFormAdd.value).subscribe(
          data => {
            this.user = data;
            this.myFormAdd.value.listeRoles.forEach(a => {
              this.userservice.addRoles(data.id, a).subscribe(role =>
                  console.log(role)
              );

              this.myFormAdd.value.listeAffaires.forEach(aff => {
                this.userservice.addAffairesToUser(data.id, aff).subscribe(affaire =>
                    console.log(affaire)
                );
              });
              this.notifyService.showSuccess("Utilisateur ajouté avec succés !!", "Ajout Utilisateur");
              this.initmyForm();
              setTimeout(() => {
                this.userC.ngOnInit();
              }, 400);
            });
          },
      );
    }
  }

  private initmyForm() {
    this.myFormAdd = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      listeRoles: ['', Validators.required],
      listeAffaires: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      matricule: [''],
      session: ['Actif'],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
    }, {validator: this.passwordMatchValidator});

  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showconfirmPassword = !this.showconfirmPassword;
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmpassword');

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({passwordMismatch: true});
    } else {
      confirmPasswordControl.setErrors(null);
    }
  }

  ngOnInit(): void {
    this.getAllRoles();
    this.getAllAffaires()
    this.initmyForm();
  }
}
