import {Component, OnChanges, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../Auth/services/token-storage.service";
import {UtilisateurService} from "../../../Services/utilisateur.service";
import {Affaire} from "../../../Services/Classes/affaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Irole} from "../../../Services/Interfaces/irole";
import {Iuser} from "../../../Services/Interfaces/iuser";
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {NotificationService} from "../../../Services/notification.service";
import {AffaireService} from "../../../Services/affaire.service";
import {RoleService} from "../../../Services/role.service";


@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit,OnChanges {
  POSTS;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  pfiltre: any;
  userSelected:Iuser=null;

  constructor(private tokenstorage: TokenStorageService,
              private userService: UtilisateurService,
              private notifyService: NotificationService,
              private affaireservice: AffaireService,
              private formBuilder: FormBuilder,
              private userservice: UtilisateurService,
              private roleService: RoleService,
  ) {
  }

  postList(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.POSTS = data;
    })
  }

  ngOnChanges(): void {
    this.postList();
  }
  ngOnInit(): void {
    this.postList();
  }
  recupUser(user: Iuser) {
    this.userSelected=user;
  }
}
