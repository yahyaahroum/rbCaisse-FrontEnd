import {Component, Input, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {AffaireService} from "../../../Services/affaire.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {NotificationService} from "../../../Services/notification.service";
import {ISuiviCaisse} from "../../../Services/Interfaces/isuivi-caisse";
import {SuiviCaisseService} from "../../../Services/suivi-caisse.service";
import {ListeSuiviCaisseComponent} from "../liste-suivi-caisse/liste-suivi-caisse.component";

@Component({
  selector: 'app-delete-suivi-caisse',
  templateUrl: './delete-suivi-caisse.component.html',
  styleUrls: ['./delete-suivi-caisse.component.css']
})
export class DeleteSuiviCaisseComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public suivi:ISuiviCaisse;

  constructor(private suiviService: SuiviCaisseService,
              private suiviC:ListeSuiviCaisseComponent,
              private notifyService : NotificationService) {}


  deleteUser() {
    this.suiviService.delete(this.suivi.id).subscribe(data=>
      this.notifyService.showSuccess("Affaire supprimé avec succés !!", "Suppression Affaire")
    );
    setTimeout(() => {
      this.suiviC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }

}

