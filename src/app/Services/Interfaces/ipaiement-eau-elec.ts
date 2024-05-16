import {IAppartement} from "./iappartement";

export interface IPaiementEauElec {
    id:number;
    type:string;
    montant:number;
    datePaiement:Date;
    moisFacture:number;
    anneeFacture:number;
    appartement:IAppartement;
}
