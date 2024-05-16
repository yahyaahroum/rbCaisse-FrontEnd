import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Iuser} from "../../../Services/Interfaces/iuser";
import {UtilisateurService} from "../../../Services/utilisateur.service";
import {RoleService} from "../../../Services/role.service";
import {FormBuilder} from "@angular/forms";
import {ListeUtilisateursComponent} from "../liste-utilisateurs/liste-utilisateurs.component";
import {AffaireService} from "../../../Services/affaire.service";
import {NotificationService} from "../../../Services/notification.service";


@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent{
  @ViewChild('closebutton') closebutton;
  @Input()
  public user:Iuser;

  constructor(private userService: UtilisateurService,
              private userC:ListeUtilisateursComponent,
              private notifyService : NotificationService) {}


  deleteUser() {
    this.userService.deleteUser(this.user.id).subscribe(data=>
      this.notifyService.showSuccess("Utilisateur supprimé avec succés !!", "Suppression Utilisateur")
    );
    setTimeout(() => {
      this.userC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }

}
