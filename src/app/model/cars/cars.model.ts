import { DefaultBaseModel } from "../base.model";

export class CarsModel {

  fullName: string;
  code3: string;
  mobile: string;


}

export class ListCarsModel {
  id?: string;
  cars: CarsModel;


}
