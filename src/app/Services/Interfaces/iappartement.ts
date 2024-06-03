import {Iaffaire} from "./iaffaire";

export interface IAppartement {
    id:number;
    libelle:string;
    montantLoye:number;
    compteurEau:string;
    compteurElectricite:string;
    affaire:Iaffaire;
}
