import {ICaisse} from "./icaisse";
import {Iuser} from "./iuser";

export interface IDemandeAlimentation {
    id:number;
    type:string;
    dateDemande:Date;
    etat:string;
    motif:string;
    pieceJointe:string;
    caisse:ICaisse;
    user:Iuser;
}
