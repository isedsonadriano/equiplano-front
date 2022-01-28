import { Injectable, Injector } from '@angular/core';
import { Apolice } from "./apolice.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class ApoliceService extends BaseResourceService<Apolice> {

  constructor(protected injector: Injector) {
    super("v1/apolices", injector, Apolice.fromJson, true);
  }

}