import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, Router, NavigationStart } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PainelComponent } from './painel/painel.component';
import { Cad_DepartamentoComponent } from './cad_departamento/cad_departamento.component';
import { DepartamentoService } from './service/departamento.service';
import { ChamadoService } from './service/chamado.service';

const rotas : Routes = [
    {path: 'registro', component: RegistroComponent},
    {path: 'home', component: HomeComponent, children : [
        {path: 'timeline', component: TimelineComponent},
        {path: 'painel', component: PainelComponent},
        {path: 'registro', component: RegistroComponent},
        {path: 'cad_departamento', component: Cad_DepartamentoComponent}
        //{path: '', pathMatch: 'full', redirectTo: 'timeline'}
    ]},
    {path: '', pathMatch: 'full', redirectTo: '/home'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    TimelineComponent,
    PainelComponent,
    Cad_DepartamentoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
    FormsModule,
    HttpClientModule
  ],
  providers: [
      ChamadoService,
      DepartamentoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

    constructor(private router : Router) {
        this.definirNavListener()
    }

    definirNavListener() {
        
    }

}
