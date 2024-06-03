import {IAppartement} from "./iappartement";

export interface IPaiementEauElec {
    id:number;
    type:string;
    montant:number;
    numeroFacture :string;
    datePaiement:Date;
    dateFacture:string,
    appartement:IAppartement;
}
