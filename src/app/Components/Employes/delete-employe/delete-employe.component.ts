import {Component, Input, ViewChild} from '@angular/core';

import {NotificationService} from "../../../Services/notification.service";

import {ListeEmployesComponent} from "../liste-employes/liste-employes.component";
import {EmployeService} from "../../../Services/employe.service";
import {Ipersonnel} from "../../../Services/Interfaces/ipersonnel";

@Component({
  selector: 'app-delete-employe',
  templateUrl: './delete-employe.component.html',
  styleUrls: ['./delete-employe.component.css']
})
export class DeleteEmployeComponent {

  @ViewChild('closebutton') closebutton;
  @Input()
  public employe:Ipersonnel;

  constructor(private employeService: EmployeService,
              private employeC:ListeEmployesComponent,
              private notifyService : NotificationService) {}


  deleteUser() {
    this.employeService.delete(this.employe.id).subscribe(data=>
      this.notifyService.showSuccess("Employé supprimé avec succés !!", "Suppression Employé")
    );
    setTimeout(() => {
      this.employeC.ngOnInit();
      this.closebutton.nativeElement.click();
    },  400);
  }

}

