import {ICaisse} from "./icaisse";
import {INatureOperation} from "./inature-operation";
import {Iaffaire} from "./iaffaire";
import {IModeOperation} from "./imode-operation";
import {Ipersonnel} from "./ipersonnel";

export interface ISuiviCaisse {
  id:number
  dateDepense:Date;
  designation:string;
  numeroPiece:string;
  montant:number;
  pieceJointe:string;
  caisse:ICaisse;
  natureOperation:INatureOperation;
  affaireDepense:Iaffaire;
  modeOperation:IModeOperation;
  employeDepense:Ipersonnel;
}
