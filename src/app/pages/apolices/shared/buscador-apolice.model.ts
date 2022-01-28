import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class BuscadorApolice extends BaseResourceModel {
  
  constructor(
    public id?: number,
    public vencida?: boolean,
    public vencimento?: string,
    public placa?: string,
    public valor?: string,

  ){
    super();
  }


  static fromJson(jsonData: any): BuscadorApolice {
    console.log(Object.assign(new BuscadorApolice(), jsonData));

    return Object.assign(new BuscadorApolice(), jsonData);
  }
}