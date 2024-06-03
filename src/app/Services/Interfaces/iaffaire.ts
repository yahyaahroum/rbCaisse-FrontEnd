import {ICaisse} from "./icaisse";

export interface Iaffaire {
   id:number;
   code:string;
   libelle:string;
   statut:string;
   caisse:ICaisse;
}
