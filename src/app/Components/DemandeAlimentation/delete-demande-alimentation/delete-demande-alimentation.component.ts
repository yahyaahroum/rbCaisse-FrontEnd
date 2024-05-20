import {Component, Input, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {AffaireService} from "../../../Services/affaire.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {NotificationService} from "../../../Services/notification.service";
import {demandeAlimentationService} from "../../../Services/demande-alimentation.service";
import {ListeDemandeAlimentationComponent} from "../liste-demande-alimentation/liste-demande-alimentation.component";
import {IDemandeAlimentation} from "../../../Services/Interfaces/idemande-alimentation";

@Component({
  selector: 'app-delete-demande-alimentation',
  templateUrl: './delete-demande-alimentation.component.html',
  styleUrls: ['./delete-demande-alimentation.component.css']
})
export class DeleteDemandeAlimentationComponent {
  @ViewChild('closebutton') closebutton;
  @Input()
  public demandeAlimentation:IDemandeAlimentation;

  constructor(private demandeAlimentationService: demandeAlimentationService,
              private demandeAlimentationC:ListeDemandeAlimentationComponent,
              private notifyService : NotificationService) {}


  deletedemandeAlimentation() {
    this.demandeAlimentationService.delete(this.demandeAlimentation.id).subscribe(data=>
      this.notifyService.showSuccess("demandeAlimentation supprimé avec succés !!", "Suppression demandeAlimentation")
    );
    setTimeout(() => {
      this.demandeAlimentationC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }


}

