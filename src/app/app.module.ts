import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import BuscarCepComponent from 'src/stories/buscar-cep.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/buscarCepComponent',
    pathMatch: 'full',
    component: BuscarCepComponent,
  },
];
@NgModule({
  declarations: [AppComponent, BuscarCepComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
