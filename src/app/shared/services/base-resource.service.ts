import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { BaseResourceModel } from "../models/base-resource.model";
import { LocalStorageUtils } from "../util/localstorage";
import { environment } from '../../../environments/environment';


export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;
  protected localStorage = new LocalStorageUtils();
  protected urlService: string = environment.apiUrlV1;

  constructor(
    protected apiPath: string, 
    protected injector: Injector, 
    protected jsonDataToResourceFn: (jsonData: any) => T,
    protected isListOnInit:boolean
  ){
      this.http = injector.get(HttpClient);    
    
  }

  getAll(): Observable<T[]> {
    return this.http.get(this.getFullApiPath()).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    )
  }

  protected extractData(response: any){
    return response || {};
}

  getById(id: number): Observable<T> {
    const url = `${this.getFullApiPath()}/${id}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)      
    )
  }

  create(resource: T): Observable<T> {
    return this.http.post(this.getFullApiPath(), resource).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    )
  }

  update(resource: T): Observable<T> {
    const url = `${this.getFullApiPath()}/${resource.id}`;

    return this.http.put(url, resource).pipe(
      map(() => resource),
      catchError(this.handleError)
    )
  }

  delete(id: number): Observable<any> {
    const url = `${this.getFullApiPath()}/${id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    )
  }

  protected obterHeaderJson(){
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.localStorage.obterTokenUsuario()}`
          })
    };
}

  protected jsonDataToResources(jsonData: any[]): T[] {
    const resources: T[] = [];
    jsonData.forEach(
      element => resources.push( this.jsonDataToResourceFn(element) )
    )
    return resources;
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }

  protected handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }

  protected getFullApiPath():string{
    return this.urlService +  this.apiPath ;
  }
}