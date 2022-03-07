import { FormGroup, FormControl } from '@angular/forms';
import { PeticionesService } from './../services/peticiones.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  constructor(private peticiones: PeticionesService) {}
  resultado: any;
  mensajeCondicion = 'none';
  formCondicion = 'none';
  mensaje: string = '';

  profileForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    categoria: new FormControl(''),
    visibilidad: new FormControl(''),
    estado: new FormControl(''),
  });

  control = this.profileForm.controls;

  ngOnInit(): void {}

  insertar() {
    let datos = {
      id: this.control.id.value,
      nombre: this.control.nombre.value,
      categoria: this.control.categoria.value,
      visibilidad: this.control.visibilidad.value,
      estado: this.control.estado.value,
    };

    this.peticiones.actualizar(datos).subscribe(
      () => {
        this.mensajeCondicion = 'flex';
        this.formCondicion = 'none';
        this.mensaje = 'Se inserto super con exito';
      },
      () => {
        this.mensajeCondicion = 'flex';
        this.formCondicion = 'none';
        this.mensaje = 'Hubo un error';
      }
    );
  }

  ngOnDestroy(): void {
    this.subs?.forEach((s) => {
      s.unsubscribe();
    });
  }

  refresh(): void {
    window.location.reload();
  }
}
