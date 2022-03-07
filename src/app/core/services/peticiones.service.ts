import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeticionesService {
  private api = 'https://r7dl9crbdk.execute-api.eu-west-1.amazonaws.com/api';

  constructor(private http: HttpClient) {}

  obtenerSuperheroesYVillanos(): Observable<Object> {
    return this.http.get(this.api);
  }

  obtenerVillanos(): Observable<Object> {
    return this.http.get(this.api + '/villanos');
  }

  obtenerSuperheroes(): Observable<Object> {
    return this.http.get(this.api + '/superheroes');
  }

  eliminar(id: any): Observable<Object> {
    return this.http.delete(this.api, {
      body: {
        id: id,
      },
    });
  }

  actualizar(datos: any): Observable<Object> {
    return this.http.post(this.api, datos);
  }
}
