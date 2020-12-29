import { DefaultBaseModel } from "../base.model";

export class ProfilsModel {

  firstName: string;
  lastName: string;
  age: number;
  nationalite : string;
  email: string;
  phoneNumber: string;



}

export class ListProfilsodel {
  id?: string;
  profil: ProfilsModel;


}
