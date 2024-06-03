import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./Components/acceuil/acceuil.component";
import {LoginComponent} from "./Auth/login/login.component";
import {AuthGuard} from "./Auth/guard/auth.guard";
import {ListeUtilisateursComponent} from "./Components/Utilisateurs/liste-utilisateurs/liste-utilisateurs.component";
import {ListeEmployesComponent} from "./Components/Employes/liste-employes/liste-employes.component";
import {ListeAffairesComponent} from "./Components/Affaires/liste-affaires/liste-affaires.component";
import {ListeFonctionsComponent} from "./Components/Fonctions/liste-fonctions/liste-fonctions.component";
import {ListeModesComponent} from "./Components/ModeOperation/liste-modes/liste-modes.component";
import {ListeNaturesComponent} from "./Components/NatureOperation/liste-natures/liste-natures.component";
import {ListeAppartementsComponent} from "./Components/Appartements/liste-appartements/liste-appartements.component";
import {ListeCompteComptableComponent} from "./Components/CompteComptable/liste-compte-comptable/liste-compte-comptable.component";
import {ListeCaissesComponent} from "./Components/Caisses/liste-caisses/liste-caisses.component";
import {ListeAlimentationsComponent} from "./Components/AlimentationCaisse/liste-alimentations/liste-demande-alimentation.component";
import {ListeSuiviCaisseComponent} from "./Components/SuiviCaisse/liste-suivi-caisse/liste-suivi-caisse.component";
import {
  ListeNatureAlimentationComponent
} from "./Components/NatureAlimentation/liste-nature-alimentation/liste-nature-alimentation.component";

const routes: Routes = [

  { path: 'Login', component: LoginComponent },
  {path: 'Acceuil', component: AcceuilComponent,
    canActivate: [ AuthGuard ]},
  {path: '', component: AcceuilComponent,
    canActivate: [ AuthGuard ]},
  {path: 'Utilisateurs', component: ListeUtilisateursComponent ,
    canActivate: [ AuthGuard ]},
  {path: 'Affaires', component: ListeAffairesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'Employes', component: ListeEmployesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'Fonctions', component: ListeFonctionsComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'ModesOperations', component: ListeModesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'NaturesOperations', component: ListeNaturesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},

  {path: 'Appartements', component: ListeAppartementsComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'ComptesComptable', component: ListeCompteComptableComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'Caisse', component: ListeCaissesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'suiviCaisse', component: ListeSuiviCaisseComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'alimentationCaisse', component: ListeAlimentationsComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'EmployeLoye', component: ListeEmployesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},

  {path: 'NaturesAlimentation', component: ListeNatureAlimentationComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},

];
ListeCompteComptableComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
