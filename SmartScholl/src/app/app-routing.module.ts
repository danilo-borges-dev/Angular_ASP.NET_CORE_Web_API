import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfessoresComponent } from './professores/professores.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';


const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: TelaInicialComponent },
  { path: "alunos", component: AlunosComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "professores", component: ProfessoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
