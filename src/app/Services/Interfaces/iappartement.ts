import {Iville} from "./iville";

export interface IAppartement {
    id:number;
    libelle:string;
    montantLoye:number;
    compteurEau:string;
    compteurElectricite:string;
    ville:Iville;
}
