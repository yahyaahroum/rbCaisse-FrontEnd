import {ICaisse} from "./icaisse";
import {IBanque} from "./ibanque";
import {Iuser} from "./iuser";
import {Inaturealimentation} from "./inaturealimentation";

export interface IAlimentation {
    id:number;
    dateDemande:Date;
    montant:number;
    natureAlimentation:Inaturealimentation;
    motif:string;
    statut:string;
    caisse:ICaisse;
    demandePar:Iuser;

}
