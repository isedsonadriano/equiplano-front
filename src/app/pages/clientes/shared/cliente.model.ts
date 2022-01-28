import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Cliente extends BaseResourceModel {
  
  constructor(
    public nome?: string,
    public cpf?: string,
    public cidade?: string,
    public uf?: string

  ){
    super();
  }


  static fromJson(jsonData: any): Cliente {
    console.log(Object.assign(new Cliente(), jsonData));

    return Object.assign(new Cliente(), jsonData);
  }
}