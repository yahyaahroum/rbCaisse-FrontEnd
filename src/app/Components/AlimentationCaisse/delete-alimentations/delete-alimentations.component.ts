import {Component, Input, ViewChild} from '@angular/core';
import {ListeAlimentationsComponent} from "../liste-alimentations/liste-demande-alimentation.component";
import {AlimentationService} from "../../../Services/alimentation.service";
import {IAlimentation} from "../../../Services/Interfaces/ialimentation";
import {NotificationService} from "../../../Services/notification.service";

@Component({
  selector: 'app-delete-alimentations',
  templateUrl: './delete-alimentations.component.html',
  styleUrls: ['./delete-alimentations.component.css']
})
export class DeleteAlimentationsComponent {
  @ViewChild('closebutton') closebutton;
  @Input()
  public alimentation:IAlimentation;

  constructor(private alimentationService: AlimentationService,
              private alimentationC:ListeAlimentationsComponent,
              private notifyService : NotificationService) {}


  deleteAlimentation() {
    this.alimentationService.delete(this.alimentation.id).subscribe(data=>
      this.notifyService.showSuccess("Demande alimentation supprimé avec succés !!", "Suppression Demande ")
    );
    setTimeout(() => {
      this.alimentationC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }


}

