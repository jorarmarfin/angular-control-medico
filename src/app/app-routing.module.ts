import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path:'inicio', component: InicioComponent },
  { path:'escritorio', component: EscritorioComponent },
  { path:'**', pathMatch:'full', redirectTo:'escritorio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
