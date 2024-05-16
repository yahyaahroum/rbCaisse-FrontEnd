import {Component, Input, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {AffaireService} from "../../../Services/affaire.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {NotificationService} from "../../../Services/notification.service";
import {IAppartement} from "../../../Services/Interfaces/iappartement";
import {AppartementService} from "../../../Services/appartement.service";
import {ListeAppartementsComponent} from "../liste-appartements/liste-appartements.component";

@Component({
  selector: 'app-delete-appartement',
  templateUrl: './delete-appartement.component.html',
  styleUrls: ['./delete-appartement.component.css']
})
export class DeleteAppartementComponent {
  @ViewChild('closebutton') closebutton;
  @Input()
  public appartement:IAppartement;

  constructor(private appartementService: AppartementService,
              private appartementC:ListeAppartementsComponent,
              private notifyService : NotificationService) {}


  deleteAppartement() {
    this.appartementService.delete(this.appartement.id).subscribe(data=>
      this.notifyService.showSuccess("Appartement supprimé avec succés !!", "Suppression Appartement")
    );
    setTimeout(() => {
      this.appartementC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }


}

