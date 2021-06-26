import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { LoginComponent } from './pages/login/login.component';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { HistorialDetalleComponent } from './pages/historial-detalle/historial-detalle.component';
import { MiembroComponent } from './pages/miembro/miembro.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MiembrosComponent,
    LoginComponent,
    EscritorioComponent,
    HistorialComponent,
    HistorialDetalleComponent,
    MiembroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
