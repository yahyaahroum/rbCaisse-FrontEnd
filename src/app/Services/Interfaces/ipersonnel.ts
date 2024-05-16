import {IfonctionEmploye} from "./ifonctionEmploye";

export interface Ipersonnel {
  id:number;
  nom:string;
  prenom:string;
  matricule:string;
  fonction:IfonctionEmploye;
}
