import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Apolice extends BaseResourceModel {
  
  constructor(
    public id?: number,
    public numero?: string,
    public inicioVigencia?: string,
    public fimVigencia?: string,
    public placa?: string,
    public valor?: string,
  ){
    super();
  }


  static fromJson(jsonData: any): Apolice {
    console.log(Object.assign(new Apolice(), jsonData));

    return Object.assign(new Apolice(), jsonData);
  }
}