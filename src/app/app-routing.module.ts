import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./Components/acceuil/acceuil.component";
import {LoginComponent} from "./Auth/login/login.component";
import {AuthGuard} from "./Auth/guard/auth.guard";
import {ListeUtilisateursComponent} from "./Components/Utilisateurs/liste-utilisateurs/liste-utilisateurs.component";
import {AddAffaireComponent} from "./Components/Affaires/add-affaire/add-affaire.component";
import {ListeEmployesComponent} from "./Components/Employes/liste-employes/liste-employes.component";
import {ListeAffairesComponent} from "./Components/Affaires/liste-affaires/liste-affaires.component";
import {ListeFonctionsComponent} from "./Components/Fonctions/liste-fonctions/liste-fonctions.component";
import {ListeModesComponent} from "./Components/ModeOperation/liste-modes/liste-modes.component";
import {AddNatureComponent} from "./Components/NatureOperation/add-nature/add-nature.component";
import {ListeNaturesComponent} from "./Components/NatureOperation/liste-natures/liste-natures.component";
import {ListeBanquesComponent} from "./Components/Banques/liste-banques/liste-banques.component";
import {ListeAppartementsComponent} from "./Components/Appartements/liste-appartements/liste-appartements.component";
import {ListeVillesComponent} from "./Components/Villes/liste-villes/liste-villes.component";
import {
  ListeCompteComptableComponent
} from "./Components/CompteComptable/liste-compte-comptable/liste-compte-comptable.component";
import {ListeCaissesComponent} from "./Components/Caisses/liste-caisses/liste-caisses.component";
import {ListePaiementLoyeComponent} from "./Components/PaiementLoye/liste-paiement-loye/liste-paiement-loye.component";
import {
  ListeDemandeAlimentationComponent
} from "./Components/DemandeAlimentation/liste-demande-alimentation/liste-demande-alimentation.component";

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
  {path: 'Banques', component: ListeBanquesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'Appartements', component: ListeAppartementsComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'Villes', component: ListeVillesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'ComptesComptable', component: ListeCompteComptableComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'Caisse', component: ListeCaissesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'suiviCaisse', component: ListeCaissesComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'demandeAlimentationCaisse', component: ListeDemandeAlimentationComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
  {path: 'Loye', component: ListePaiementLoyeComponent ,
    canActivate: [ AuthGuard ], data: { expectedRoles: ['admin'] }},
];
ListeCompteComptableComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
