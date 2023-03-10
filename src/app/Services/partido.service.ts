import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Partido } from '../Interfaces/partido.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  private partidos_url =environment.urlapi+'/partidos';
  
  constructor(private http:HttpClient) { }

  //CRUD
  getPartidos(): Observable<Partido[]> 
  {
    return this.http.get<Partido[]>(this.partidos_url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addPartidos(partido: Partido):Observable<Partido>
  {
    return this.http.post<Partido>(this.partidos_url, partido)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  eliminarPartido(id: number)
  {
    return this.http.delete<Partido>(this.partidos_url + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  actualizarPartido(partido: Partido, id: number)
  {
    return this.http.put<Partido>(this.partidos_url + '/' + id, partido)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  mostrarUnico(id: number)
  {
    return this.http.get<Partido>(this.partidos_url + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  //Error Handling
  private handleError(error: HttpErrorResponse)
  {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
