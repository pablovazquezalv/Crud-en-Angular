import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Login
import { LoginComponent } from './Componentes/login/login.component';
import { SignUpComponent } from './Componentes/sign-up/sign-up.component';
import { MobileCodeComponent } from './Componentes/mobile-code/mobile-code.component';
//Equipo
import { FormularioCrearComponent } from './Componentes/equipo/formulario-crear/formulario-crear.component';
import { VerEquiposComponent } from './Componentes/equipo/ver-equipos/ver-equipos.component';
import { FormularioEditarComponent } from './Componentes/equipo/formulario-editar/formulario-editar.component';
import { MostrarJugadoresComponent } from './Componentes/equipo/mostrar-jugadores/mostrar-jugadores.component';
import { AdministrarJugadoresComponent } from './Componentes/equipo/administrar-jugadores/administrar-jugadores.component';
//Jugadores
import { FormularioCrearComponent as FormularioJugador } from './Componentes/jugadores/formulario-crear/formulario-crear.component';
import { VerJugadoresComponent } from './Componentes/jugadores/ver-jugadores/ver-jugadores.component';
import { FormularioEditarComponent as FormularioEditarJugador } from './Componentes/jugadores/formulario-editar/formulario-editar.component';
//Estados
import { FormularioCrearComponent as FormularioEstado } from './Componentes/estado/formulario-crear/formulario-crear.component';
import { VerEstadosComponent } from './Componentes/estado/ver-estados/ver-estados.component';
import { FormularioEditarComponent as FormularioEditarEstado } from './Componentes/estado/formulario-editar/formulario-editar.component';
//Propietarios
import { FormularioCrearComponent as FormularioPropietario} from './Componentes/propietario/formulario-crear/formulario-crear.component';
import { VerPropietariosComponent } from './Componentes/propietario/ver-propietarios/ver-propietarios.component';
import { FormularioEditarComponent as FormularioEditarPropietario } from './Componentes/propietario/formulario-editar/formulario-editar.component';
//Partidos
import { FormularioCrearPartidoComponent } from './Componentes/partidos/formulario-crear-partido/formulario-crear-partido.component';
import { VerPartidosComponent } from './Componentes/partidos/ver-partidos/ver-partidos.component';
import { FormularioEditarPartidoComponent } from './Componentes/partidos/formulario-editar-partido/formulario-editar-partido.component';
//Usuarios
import { VerUsuariosComponent } from './Componentes/Admin/ver-usuarios/ver-usuarios.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { UsuarioGuard } from './Guards/usuario.guard';
const routes: Routes = [
  //Default
  { path:'',redirectTo:'equipo/ver',pathMatch:'full'},

  //Login
  { path:'login',component:LoginComponent},
  { path:'sign-up',component:SignUpComponent},
  { path:'mobile-code',component:MobileCodeComponent},

  //Usuarios
  { path:'usuarios/ver',component:VerUsuariosComponent},

  //Equipo
  { path:'equipo/ver',component:VerEquiposComponent},
  { path:'equipo/crear',component:FormularioCrearComponent},
  { path:'equipo/editar/:id',component:FormularioEditarComponent},
  { path:'equipo/jugadores/:id',component:MostrarJugadoresComponent},
  { path:'equipo/administrar-jugadores/:id',component:AdministrarJugadoresComponent},

  //Jugadores
  { path:'jugadores/ver',component:VerJugadoresComponent},
  { path:'jugadores/crear',component:FormularioJugador},
  { path:'jugadores/editar/:id',component:FormularioEditarJugador},

  //Estados
  { path:'estados/ver',component:VerEstadosComponent},
  { path:'estados/crear',component:FormularioEstado},
  { path:'estados/editar/:id',component:FormularioEditarEstado},

  //Propietarios
  { path:'propietario/ver',component:VerPropietariosComponent},
  { path:'propietario/crear',component:FormularioPropietario},
  { path:'propietario/editar/:id',component:FormularioEditarPropietario},

  //Partidos
  { path:'partidos/ver',component:VerPartidosComponent},
  { path:'partidos/crear',component:FormularioCrearPartidoComponent},
  { path:'partidos/editar/:id',component:FormularioEditarPartidoComponent},

  //404
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
