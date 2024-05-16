import {Component, Input, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {AffaireService} from "../../../Services/affaire.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {NotificationService} from "../../../Services/notification.service";

@Component({
  selector: 'app-delete-alimentations',
  templateUrl: './delete-alimentations.component.html',
  styleUrls: ['./delete-alimentations.component.css']
})
export class DeleteAlimentationsComponent {

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

