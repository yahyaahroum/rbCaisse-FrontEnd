import {Component, Input, ViewChild} from '@angular/core';
import {ListeAffairesComponent} from "../../Affaires/liste-affaires/liste-affaires.component";
import {NotificationService} from "../../../Services/notification.service";
import {IModeOperation} from "../../../Services/Interfaces/imode-operation";
import {ModeOperationService} from "../../../Services/mode-operation.service";
import {ListeModesComponent} from "../liste-modes/liste-modes.component";

@Component({
  selector: 'app-delete-mode',
  templateUrl: './delete-mode.component.html',
  styleUrls: ['./delete-mode.component.css']
})
export class DeleteModeComponent {
  @ViewChild('closebutton') closebutton;
  @Input()
  public modeOp:IModeOperation;

  constructor(private modeService: ModeOperationService,
              private modeC:ListeModesComponent,
              private notifyService : NotificationService) {}


  deleteMode() {
    this.modeService.delete(this.modeOp.id).subscribe(data=>
      this.notifyService.showSuccess("Mode supprimé avec succés !!", "Suppression Mode")
    );
    setTimeout(() => {
      this.modeC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }

}

