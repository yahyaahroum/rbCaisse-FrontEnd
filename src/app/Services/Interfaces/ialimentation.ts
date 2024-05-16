import {ICaisse} from "./icaisse";
import {IBanque} from "./ibanque";

export interface IAlimentation {
    id:number;
    dateAlimentation:Date;
    montant:number;
    etat:string;
    pieceJointe:string;
    caisse:ICaisse;
    banque:IBanque;
}
