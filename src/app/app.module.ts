import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { ListeUtilisateursComponent } from './Components/Utilisateurs/liste-utilisateurs/liste-utilisateurs.component';
import { AddUserComponent } from './Components/Utilisateurs/add-user/add-user.component';
import { UpdateUserComponent } from './Components/Utilisateurs/update-user/update-user.component';
import { ChangePasswordComponent } from './Components/Utilisateurs/change-password/change-password.component';
import { ListeAffairesComponent } from './Components/Affaires/liste-affaires/liste-affaires.component';
import { AddAffaireComponent } from './Components/Affaires/add-affaire/add-affaire.component';
import { UpdateAffaireComponent } from './Components/Affaires/update-affaire/update-affaire.component';
import { ListeAppartementsComponent } from './Components/Appartements/liste-appartements/liste-appartements.component';
import { AddAppartementComponent } from './Components/Appartements/add-appartement/add-appartement.component';
import { UpdateAppartementComponent } from './Components/Appartements/update-appartement/update-appartement.component';
import { ListeCaissesComponent } from './Components/Caisses/liste-caisses/liste-caisses.component';
import { AddCaisseComponent } from './Components/Caisses/add-caisse/add-caisse.component';
import { UpdateCaisseComponent } from './Components/Caisses/update-caisse/update-caisse.component';
import { ListeEmployesComponent } from './Components/Employes/liste-employes/liste-employes.component';
import { AddEmployeComponent } from './Components/Employes/add-employe/add-employe.component';
import { UpdateEmployeComponent } from './Components/Employes/update-employe/update-employe.component';
import { ListeFonctionsComponent } from './Components/Fonctions/liste-fonctions/liste-fonctions.component';
import { AddFonctionComponent } from './Components/Fonctions/add-fonction/add-fonction.component';
import { UpdateFonctionComponent } from './Components/Fonctions/update-fonction/update-fonction.component';
import { ListeModesComponent } from './Components/ModeOperation/liste-modes/liste-modes.component';
import { AddModeComponent } from './Components/ModeOperation/add-mode/add-mode.component';
import { UpdateModeComponent } from './Components/ModeOperation/update-mode/update-mode.component';
import { ListeNaturesComponent } from './Components/NatureOperation/liste-natures/liste-natures.component';
import { AddNatureComponent } from './Components/NatureOperation/add-nature/add-nature.component';
import { UpdateNatureComponent } from './Components/NatureOperation/update-nature/update-nature.component';
import { ListeSuiviCaisseComponent } from './Components/SuiviCaisse/liste-suivi-caisse/liste-suivi-caisse.component';
import { AddSuiviCaisseComponent } from './Components/SuiviCaisse/add-suivi-caisse/add-suivi-caisse.component';
import { UpdateSuiviCaisseComponent } from './Components/SuiviCaisse/update-suivi-caisse/update-suivi-caisse.component';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './Menus/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { FooterComponent } from './Menus/footer/footer.component';
import {NgxPaginationModule} from "ngx-pagination";
import { PsearchPipe } from './pipes/psearch.pipe';
import { SwitcherComponent } from './Menus/switcher/switcher.component';
import {SidebarComponen} from "./Menus/sidebar/sidebar.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {ToastrModule} from "ngx-toastr";
import { DeleteUsersComponent } from './Components/Utilisateurs/delete-users/delete-users.component';
import { DeleteAffaireComponent } from './Components/Affaires/delete-affaire/delete-affaire.component';
import { DeleteAppartementComponent } from './Components/Appartements/delete-appartement/delete-appartement.component';
import { DeleteCaisseComponent } from './Components/Caisses/delete-caisse/delete-caisse.component';
import { DeleteEmployeComponent } from './Components/Employes/delete-employe/delete-employe.component';
import { DeleteFonctionComponent } from './Components/Fonctions/delete-fonction/delete-fonction.component';
import { DeleteModeComponent } from './Components/ModeOperation/delete-mode/delete-mode.component';
import { DeleteNatureComponent } from './Components/NatureOperation/delete-nature/delete-nature.component';
import { DeleteSuiviCaisseComponent } from './Components/SuiviCaisse/delete-suivi-caisse/delete-suivi-caisse.component';
import { ListeCompteComptableComponent } from './Components/CompteComptable/liste-compte-comptable/liste-compte-comptable.component';
import { AddCompteComptableComponent } from './Components/CompteComptable/add-compte-comptable/add-compte-comptable.component';
import { UpdateComptaComptableComponent } from './Components/CompteComptable/update-compta-comptable/update-compta-comptable.component';
import { DeleteCompteComptableComponent } from './Components/CompteComptable/delete-compte-comptable/delete-compte-comptable.component';
import {
  UpdateAlimentationsComponent
} from "./Components/AlimentationCaisse/update-alimentations/update-alimentations.component";
import {AddAlimentationsComponent} from "./Components/AlimentationCaisse/add-alimentations/add-alimentations.component";
import {
  ListeAlimentationsComponent
} from "./Components/AlimentationCaisse/liste-alimentations/liste-demande-alimentation.component";
import {
  DeleteAlimentationsComponent
} from "./Components/AlimentationCaisse/delete-alimentations/delete-alimentations.component";
import { PieceJointeComponent } from './Components/AlimentationCaisse/piece-jointe/piece-jointe.component';
import { ListeNatureAlimentationComponent } from './Components/NatureAlimentation/liste-nature-alimentation/liste-nature-alimentation.component';
import { AddNatureAlimentationComponent } from './Components/NatureAlimentation/add-nature-alimentation/add-nature-alimentation.component';
import { UpdateNatureAlimentationComponent } from './Components/NatureAlimentation/update-nature-alimentation/update-nature-alimentation.component';
import { DeleteNatureAlimentationComponent } from './Components/NatureAlimentation/delete-nature-alimentation/delete-nature-alimentation.component';
import { ValidationDemandeAlimentationComponent } from './Components/AlimentationCaisse/validation-demande-alimentation/validation-demande-alimentation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    ListeUtilisateursComponent,
    AddUserComponent,
    UpdateUserComponent,
    ChangePasswordComponent,
    ListeAffairesComponent,
    AddAffaireComponent,
    UpdateAffaireComponent,
    ListeAlimentationsComponent,
    AddAlimentationsComponent,
    UpdateAlimentationsComponent,
    ListeAppartementsComponent,
    AddAppartementComponent,
    UpdateAppartementComponent,
    ListeCaissesComponent,
    AddCaisseComponent,
    UpdateCaisseComponent,
    ListeEmployesComponent,
    AddEmployeComponent,
    UpdateEmployeComponent,
    ListeFonctionsComponent,
    AddFonctionComponent,
    UpdateFonctionComponent,
    ListeModesComponent,
    AddModeComponent,
    UpdateModeComponent,
    ListeNaturesComponent,
    AddNatureComponent,
    UpdateNatureComponent,
    ListeSuiviCaisseComponent,
    AddSuiviCaisseComponent,
    UpdateSuiviCaisseComponent,
    NavbarComponent,
    FooterComponent,
    PsearchPipe,
    SwitcherComponent,
    SidebarComponen,
    DeleteUsersComponent,
    DeleteAffaireComponent,
    DeleteAlimentationsComponent,
    DeleteAppartementComponent,
    DeleteCaisseComponent,
    DeleteEmployeComponent,
    DeleteFonctionComponent,
    DeleteModeComponent,
    DeleteNatureComponent,
    DeleteSuiviCaisseComponent,
    ListeCompteComptableComponent,
    AddCompteComptableComponent,
    UpdateComptaComptableComponent,
    DeleteCompteComptableComponent,
    PieceJointeComponent,
    ListeNatureAlimentationComponent,
    AddNatureAlimentationComponent,
    UpdateNatureAlimentationComponent,
    DeleteNatureAlimentationComponent,
    ValidationDemandeAlimentationComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NgSelectModule,
      ToastrModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
