import {Irole} from "./irole";
import {Iaffaire} from "./iaffaire";

export interface Iuser {
  id : number;
  email : string;
  matricule : string;
  nom : string;
  password: string;
  prenom: string;
  session: string;
  username: string;
  roles: Irole[];
  affaires:Iaffaire[];
}
