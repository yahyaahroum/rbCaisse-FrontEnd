import {Component, Input, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {NotificationService} from "../../../Services/notification.service";
import {AffaireService} from "../../../Services/affaire.service";
import {ListeAffairesComponent} from "../liste-affaires/liste-affaires.component";

@Component({
  selector: 'app-delete-affaire',
  templateUrl: './delete-affaire.component.html',
  styleUrls: ['./delete-affaire.component.css']
})
export class DeleteAffaireComponent {
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
