import { Routes } from "@angular/router";

import { DashboardComponent } from "../../../pages/dashboard/dashboard.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: 'clientes', loadChildren: () => import('../../../pages/clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'buscadorapolices', loadChildren: () => import('../../../pages/buscador-apolices/buscador-apolices.module').then(m => m.BuscadorApoliceModule) },
  { path: 'apolices', loadChildren: () => import('../../../pages/apolices/apolices.module').then(m => m.ApolicesModule) }
  

];
