import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { User } from '../Interfaces/user.interface';
import { Mobile } from '../Interfaces/mobile.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MobileCodeService {

  private auth_url =environment.urlapi+'/auth';
  
  constructor(private http:HttpClient) { }

  //Verificar Codigo
  addMobile(mobile: Mobile, url: string):Observable<Mobile>
  {
    return this.http.post<Mobile>(url, mobile)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  reenviarCodigo(id:number):Observable<Mobile>
  {
    return this.http.get<any>(this.auth_url + '/reenviarCodigo/' + id)
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
