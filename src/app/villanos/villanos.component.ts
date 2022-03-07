import { PeticionesService } from './../core/services/peticiones.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Supers } from './../core/interfaces/supers.inteface';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css'],
})
export class VillanosComponent implements OnInit, OnDestroy {
  resultado: Supers[] = [];
  subs: Subscription[] = [];
  mensajeCondicion: string = 'none';
  formCondicion: string = 'none';
  detallesCondicion: string = 'none';
  mensaje = 'Este es un mensaje';

  profileForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    categoria: new FormControl(''),
    visibilidad: new FormControl(''),
    estado: new FormControl(''),
  });

  control = this.profileForm.controls;

  constructor(private peticiones: PeticionesService) {}

  ngOnInit(): void {
    this.subs.push(
      this.peticiones.obtenerVillanos().subscribe((data: any) => {
        this.resultado = data.Items.sort((a: any, b: any) => {
          if (a.nombre > b.nombre) {
            return -1;
          }
          if (a.nombre < b.nombre) {
            return 1;
          }
          return 0;
        });
      })
    );
  }

  eliminar(id: string) {
    this.peticiones.eliminar(id).subscribe(
      () => {
        this.mensajeCondicion = 'flex';
        this.mensaje = 'Se elemino un super';
      },
      (error) => {
        this.mensajeCondicion = 'flex';
        this.mensaje = 'Hubo un error';
      }
    );
  }

  ngOnDestroy(): void {
    this.subs?.forEach((s) => {
      s.unsubscribe();
    });
  }

  ocultar(cual: string = '') {
    if (cual === 'mensaje') {
      this.subs.push(
        this.peticiones.obtenerVillanos().subscribe((data: any) => {
          this.resultado = data.Items.sort((a: any, b: any) => {
            if (a.nombre > b.nombre) {
              return -1;
            }
            if (a.nombre < b.nombre) {
              return 1;
            }
            return 0;
          });
          this.mensajeCondicion = 'none';
        })
      );
    } else {
      this.detallesCondicion = 'none';
      this.mensajeCondicion = 'none';
    }
  }

  modalActualizar(item: any) {
    this.control.id.setValue(item.id);
    this.control.nombre.setValue(item.nombre);
    this.control.categoria.setValue(item.categoria);
    this.control.visibilidad.setValue(item.visibilidad);
    this.control.estado.setValue(item.estado);
    this.formCondicion = 'flex';
  }

  actualizar() {
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
        this.mensaje = 'Se actualizo super con exito';
      },
      () => {
        this.mensajeCondicion = 'flex';
        this.formCondicion = 'none';
        this.mensaje = 'Hubo un error';
      }
    );
  }

  modalDetalles(item: any) {
    this.control.id.setValue(item.id);
    this.control.nombre.setValue(item.nombre);
    this.control.categoria.setValue(item.categoria);
    this.control.visibilidad.setValue(item.visibilidad);
    this.control.estado.setValue(item.estado);
    this.detallesCondicion = 'flex';
  }
}
