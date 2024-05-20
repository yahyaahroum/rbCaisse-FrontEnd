import {Component, Input, ViewChild} from '@angular/core';
import {IfonctionEmploye} from "../../../Services/Interfaces/ifonctionEmploye";
import {NotificationService} from "../../../Services/notification.service";
import {ComptecomptableService} from "../../../Services/comptecomptable.service";
import {ListeCompteComptableComponent} from "../liste-compte-comptable/liste-compte-comptable.component";
import {Icomptecomptable} from "../../../Services/Interfaces/icomptecomptable";

@Component({
  selector: 'app-delete-compte-comptable',
  templateUrl: './delete-compte-comptable.component.html',
  styleUrls: ['./delete-compte-comptable.component.css']
})
export class DeleteCompteComptableComponent {


  @ViewChild('closebutton') closebutton;
  @Input()
  public compteComptable:Icomptecomptable;

  constructor(private compteComptableService: ComptecomptableService,
              private compteComptableC:ListeCompteComptableComponent,
              private notifyService : NotificationService) {}


  deleteUser() {
    this.compteComptableService.delete(this.compteComptable.id).subscribe(data=>
      this.notifyService.showSuccess("Compte comptable supprimé avec succés !!", "Suppression Compte comptable")
    );
    setTimeout(() => {
      this.compteComptableC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }

}


