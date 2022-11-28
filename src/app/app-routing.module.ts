import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Encuesta/add/add.component';
import { ListarComponent } from './Encuesta/listar/listar.component';
import { ResponderComponent } from './Encuesta/responder/responder.component';

const routes: Routes = [
  {path:'add', component:AddComponent},
  {path: 'listar', component:ListarComponent},
  {path: 'responder', component:ResponderComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
