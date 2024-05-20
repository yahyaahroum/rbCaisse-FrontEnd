import {Component, Input, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {AffaireService} from "../../../Services/affaire.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {NotificationService} from "../../../Services/notification.service";
import {ICaisse} from "../../../Services/Interfaces/icaisse";
import {CaisseService} from "../../../Services/caisse.service";
import {ListeCaissesComponent} from "../liste-caisses/liste-caisses.component";

@Component({
  selector: 'app-delete-caisse',
  templateUrl: './delete-caisse.component.html',
  styleUrls: ['./delete-caisse.component.css']
})
export class DeleteCaisseComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public caisse:ICaisse;

  constructor(private caisseService: CaisseService,
              private caisseC:ListeCaissesComponent,
              private notifyService : NotificationService) {}


  deletecaisse() {
    this.caisseService.delete(this.caisse.id).subscribe(data=>
      this.notifyService.showSuccess("Caisse supprimé avec succés !!", "Suppression Caisse")
    );
    setTimeout(() => {
      this.caisseC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }


}

