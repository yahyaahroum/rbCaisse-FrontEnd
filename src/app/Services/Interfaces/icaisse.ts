import {Iaffaire} from "./iaffaire";

export interface ICaisse {
    id:number;
    soldeActuel:number;
    affaire:Iaffaire;
}
