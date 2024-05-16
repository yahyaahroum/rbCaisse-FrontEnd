import {Component, Input, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {AffaireService} from "../../../Services/affaire.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {NotificationService} from "../../../Services/notification.service";

@Component({
  selector: 'app-delete-suivi-caisse',
  templateUrl: './delete-suivi-caisse.component.html',
  styleUrls: ['./delete-suivi-caisse.component.css']
})
export class DeleteSuiviCaisseComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public affaire:Iaffaire;

  constructor(private affaireService: AffaireService,
              private affaireC:ListeAffairesComponent,
              private notifyService : NotificationService) {}


  deleteUser() {
    this.affaireService.deleteAffaire(this.affaire.id).subscribe(data=>
      this.notifyService.showSuccess("Affaire supprimé avec succés !!", "Suppression Affaire")
    );
    setTimeout(() => {
      this.affaireC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }

}

