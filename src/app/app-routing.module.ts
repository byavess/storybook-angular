import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import BuscarCepComponent from 'src/stories/buscar-cep.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/BuscarCepComponent', pathMatch: 'full' },
  { path: 'cepRetorno', component: BuscarCepComponent },
];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
