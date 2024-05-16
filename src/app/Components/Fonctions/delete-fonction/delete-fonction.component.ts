import {Component, Input, ViewChild} from '@angular/core';
import {NotificationService} from "../../../Services/notification.service";
import {IfonctionEmploye} from "../../../Services/Interfaces/ifonctionEmploye";
import {FonctionService} from "../../../Services/fonction.service";
import {ListeFonctionsComponent} from "../liste-fonctions/liste-fonctions.component";

@Component({
  selector: 'app-delete-fonction',
  templateUrl: './delete-fonction.component.html',
  styleUrls: ['./delete-fonction.component.css']
})
export class DeleteFonctionComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public fonction:IfonctionEmploye;

  constructor(private fonctionService: FonctionService,
              private fonctionC:ListeFonctionsComponent,
              private notifyService : NotificationService) {}


  deleteUser() {
    this.fonctionService.delete(this.fonction.id).subscribe(data=>
      this.notifyService.showSuccess("Fonction supprimé avec succés !!", "Suppression Fonction")
    );
    setTimeout(() => {
      this.fonctionC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }

}

