export class DefaultBaseModel implements IDefaultModel {
  id: number;
}
export interface IDefaultModel extends IModel<number> {
  id: number;
}
export interface IModel<TPrimaryKey> {
  id: TPrimaryKey;
}
