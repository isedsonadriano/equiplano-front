import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Prestador extends BaseResourceModel {
  constructor(
    public id?: number,
    public nome?: string,
    public cpf?: string,
    public tipo?: string,
    public status?: string,
    public telefone?: string,
    public conselho?: string,
    public numeroNoConselho?: string,
    public cbos?: string,
    public cnes?: string
  ){
    super();
  }


  static fromJson(jsonData: any): Prestador {
    console.log(Object.assign(new Prestador(), jsonData));

    return Object.assign(new Prestador(), jsonData);
  }
}