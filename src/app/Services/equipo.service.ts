import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Equipo } from '../Interfaces/equipo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipoService 
{

  private equipo_url =environment.urlapi+'/equipos';
  

  constructor(private http:HttpClient) 
  {
    
   }

getEquipos(): Observable<Equipo[]> 
{
  return this.http.get<Equipo[]>(this.equipo_url)
  .pipe(
    retry(3),
    catchError(this.handleError)
  );
}

addEquipo(equipo: Equipo):Observable<Equipo>
{
  return this.http.post<Equipo>(this.equipo_url,equipo)
  .pipe(
    catchError(this.handleError)
  );
}
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
