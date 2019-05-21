import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './Persona/lista/lista.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { AgregarComponent } from './Persona/agregar/agregar.component';

const routes: Routes = [
  {path:'Lista',component:ListaComponent},
  {path:'Agregar',component:AgregarComponent},
  {path:'Editar',component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
