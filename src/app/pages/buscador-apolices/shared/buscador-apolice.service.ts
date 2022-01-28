import { Injectable, Injector } from '@angular/core';
import { map, catchError } from "rxjs/operators";

import { BaseResourceService } from "../../../shared/services/base-resource.service";
import { Apolice } from '../../apolices/shared/apolice.model';
import { Observable } from 'rxjs';
import { BuscadorApolice } from '../../apolices/shared/buscador-apolice.model';

@Injectable({
  providedIn: 'root'
})
export class BuscadorApoliceService extends BaseResourceService<Apolice> {

  constructor(protected injector: Injector) {
    super("v1/buscadorapolices", injector, Apolice.fromJson, false);
  }

  ngOnInit() {
    
  }



  searchByNumeroApolice(numeroApolice: string): Observable<BuscadorApolice[]> {
    
    const url = `${this.getFullApiPath()}/${numeroApolice}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToResources),
      catchError(this.handleError)      
    )
  }

  protected jsonDataToResources(jsonData: any[]): BuscadorApolice[] {
    const resources: BuscadorApolice[] = [];
    jsonData.forEach(
      element => resources.push( BuscadorApolice.fromJson(element) )
    )
    return resources;
  }

}