import { Transferencia } from './models/transferencia.model';
import { ExtratoComponent } from './extrato/extrato.component';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { Routes } from '@angular/router';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountigModule{}
