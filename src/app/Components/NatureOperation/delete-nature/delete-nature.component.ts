import {Component, Input, ViewChild} from '@angular/core';
import {NotificationService} from "../../../Services/notification.service";
import {INatureOperation} from "../../../Services/Interfaces/inature-operation";
import {ListeNaturesComponent} from "../liste-natures/liste-natures.component";
import {NatureOperationService} from "../../../Services/nature-operation.service";

@Component({
  selector: 'app-delete-nature',
  templateUrl: './delete-nature.component.html',
  styleUrls: ['./delete-nature.component.css']
})
export class DeleteNatureComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public nature:INatureOperation;

  constructor(private natureService: NatureOperationService,
              private natureC:ListeNaturesComponent,
              private notifyService : NotificationService) {}


  deleteNature() {
    this.natureService.delete(this.nature.id).subscribe(data=>
      this.notifyService.showSuccess("Nature d'opération supprimé avec succés !!", "Suppression Nature")
    );
    setTimeout(() => {
      this.natureC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }


}

