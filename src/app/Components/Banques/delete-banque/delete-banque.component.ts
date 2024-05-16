import {Component, Input, ViewChild} from '@angular/core';
import {Iaffaire} from "../../../Services/Interfaces/iaffaire";
import {AffaireService} from "../../../Services/affaire.service";
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {NotificationService} from "../../../Services/notification.service";
import {ListeBanquesComponent} from "../liste-banques/liste-banques.component";
import {BanqueService} from "../../../Services/banque.service";
import {IBanque} from "../../../Services/Interfaces/ibanque";

@Component({
  selector: 'app-delete-banque',
  templateUrl: './delete-banque.component.html',
  styleUrls: ['./delete-banque.component.css']
})
export class DeleteBanqueComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public banque:IBanque;

  constructor(private banqueService: BanqueService,
              private banqueC:ListeBanquesComponent,
              private notifyService : NotificationService) {}


  deleteBanque() {
    this.banqueService.delete(this.banque.id).subscribe(data=>
      this.notifyService.showSuccess("Banque supprimé avec succés !!", "Suppression Banque")
    );
    setTimeout(() => {
      this.banqueC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }

}

