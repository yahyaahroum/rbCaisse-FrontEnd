import {Component, Input, ViewChild} from '@angular/core';
import {Iville} from "../../../Services/Interfaces/iville";
import {villeService} from "../../../Services/ville.service";
import {NotificationService} from "../../../Services/notification.service";
import {ListeVillesComponent} from "../liste-villes/liste-villes.component";

@Component({
  selector: 'app-delete-ville',
  templateUrl: './delete-ville.component.html',
  styleUrls: ['./delete-ville.component.css']
})
export class DeleteVilleComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public ville:Iville;

  constructor(private villeService: villeService,
              private villeC:ListeVillesComponent,
              private notifyService : NotificationService) {}


  deleteville() {
    this.villeService.deleteville(this.ville.id).subscribe(data=>
      this.notifyService.showSuccess("ville supprimé avec succés !!", "Suppression Ville")
    );
    setTimeout(() => {
      this.villeC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }

}

