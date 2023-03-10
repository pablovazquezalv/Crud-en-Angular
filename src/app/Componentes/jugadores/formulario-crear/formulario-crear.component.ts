import { Component,Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { Jugador } from 'src/app/Interfaces/jugador.interface';
import { JugadorService } from 'src/app/Services/jugador.service';
import { Equipo } from 'src/app/Interfaces/equipo.interface';
import { EquipoService } from 'src/app/Services/equipo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css']
})

@Injectable()
export class FormularioCrearComponent implements OnInit
{
  equipos: Equipo[] = [];
  form: FormGroup;
  jugador?:Jugador;

  public apiFailed: boolean = false;
  
  constructor(private equipoService: EquipoService,private fb: FormBuilder,private jugadorService: JugadorService,private router:Router)
  {
    this.form = this.fb.group({
      nombre:  ['',Validators.required],
      ap_paterno:  ['',Validators.required],
      ap_materno:  ['',Validators.required],
      sexo:  ['',Validators.required],
      f_nac:  ['',Validators.required],
      equipo:  ['',Validators.required],
    })
  } 

  ngOnInit()
  {
    this.getEquipos();
  }
  
  getEquipos() {
    this.equipoService.getEquipos().subscribe(data => this.equipos = data);
    
  }
  onSubmit(values: Jugador)
  {
    this.jugadorService.addJugador(values).subscribe(response => { this.router.navigate(['jugadores/ver']); }, error => { this.apiFailed = true; });
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
