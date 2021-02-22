import { DefaultBaseModel } from "../base.model";

export class NewsAdminModel {

  titre: string;
  type: number;
  Subject: string;
  source: string;
  storage: string;



}

export class ListNewsAdminModel {
  id?: string;
  newsAdmin: NewsAdminModel;


}
export class TypeNewsModel {
  id: number;
  libelle: string;


}

