import {IAppartement} from "./iappartement";

export interface IPaiementLoye {
    id:number;
    moisLoye:number;
    anneeLoye:number;
    appartement:IAppartement;
}
