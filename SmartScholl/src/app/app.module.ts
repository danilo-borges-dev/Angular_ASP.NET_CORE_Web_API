import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [			
    AppComponent,
    AlunosComponent,
    ProfessoresComponent,
    PerfilComponent,
    TelaInicialComponent,
    NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
