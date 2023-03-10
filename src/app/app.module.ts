import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { SignUpComponent } from './Componentes/sign-up/sign-up.component';
import { MobileCodeComponent } from './Componentes/mobile-code/mobile-code.component';
import { VerJugadoresComponent } from './Componentes/jugadores/ver-jugadores/ver-jugadores.component';
import { VerEstadosComponent } from './Componentes/estado/ver-estados/ver-estados.component';
import { VerPropietariosComponent } from './Componentes/propietario/ver-propietarios/ver-propietarios.component';
import { VerEquiposComponent } from './Componentes/equipo/ver-equipos/ver-equipos.component';
import { FormularioCrearComponent } from './Componentes/equipo/formulario-crear/formulario-crear.component';
import { FormularioCrearComponent as FormularioCrearJugador } from './Componentes/jugadores/formulario-crear/formulario-crear.component';
import { FormularioCrearComponent as FormularioCrearEstado } from './Componentes/estado/formulario-crear/formulario-crear.component';
import { FormularioCrearComponent as FormularioCrearPropietario } from './Componentes/propietario/formulario-crear/formulario-crear.component';
import { FormularioEditarComponent } from './Componentes/equipo/formulario-editar/formulario-editar.component';
import { FormularioEditarComponent as FormularioEditarJugador } from './Componentes/jugadores/formulario-editar/formulario-editar.component';
import { FormularioEditarComponent as FormularioEditarEstado } from './Componentes/estado/formulario-editar/formulario-editar.component';
import { FormularioEditarComponent as FormularioEditarPropietario } from './Componentes/propietario/formulario-editar/formulario-editar.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormularioCrearPartidoComponent } from './Componentes/partidos/formulario-crear-partido/formulario-crear-partido.component';
import { FormularioEditarPartidoComponent } from './Componentes/partidos/formulario-editar-partido/formulario-editar-partido.component';
import { VerPartidosComponent } from './Componentes/partidos/ver-partidos/ver-partidos.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { VerUsuariosComponent } from './Componentes/Admin/ver-usuarios/ver-usuarios.component';

import { TokenInterceptor } from './Interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { RolesDialogComponentComponent } from './Componentes/Admin/roles-dialog-component/roles-dialog-component.component';
import { StatusDialogComponent } from './Componentes/Admin/status-dialog/status-dialog.component';
import { MostrarJugadoresComponent } from './Componentes/equipo/mostrar-jugadores/mostrar-jugadores.component';
import { AdministrarJugadoresComponent } from './Componentes/equipo/administrar-jugadores/administrar-jugadores.component';
import { EliminarJugadoresEquipoComponent } from './Componentes/equipo/eliminar-jugadores-equipo/eliminar-jugadores-equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioEditarJugador,
    FormularioEditarEstado,
    FormularioEditarPropietario,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    FormularioCrearJugador,
    FormularioCrearEstado,
    FormularioCrearPropietario,
    MobileCodeComponent,
    FormularioCrearComponent,
    VerEquiposComponent,
    FormularioEditarComponent,
    VerJugadoresComponent,
    VerEstadosComponent,
    VerPropietariosComponent,
    FormularioCrearPartidoComponent,
    FormularioEditarPartidoComponent,
    VerPartidosComponent,
    PageNotFoundComponent,
    VerUsuariosComponent,
    RolesDialogComponentComponent,
    StatusDialogComponent,
    MostrarJugadoresComponent,
    AdministrarJugadoresComponent,
    EliminarJugadoresEquipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
