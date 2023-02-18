import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { User } from '../Interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user_url =environment.urlapi+'/register';
  private login_url =environment.urlapi+'/login';

  private admin_url = environment.urlapi+ '/admin'
  
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> 
  {
    return this.http.get<User[]>(this.admin_url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  actualizarEstado(user: User, id: number)
  {
    return this.http.put<User>(this.admin_url + '/status/' + id, user).pipe(retry(3));
  }

  actualizarRol(user: User, id: number)
  {
    return this.http.put<User>(this.admin_url + '/' + id, user).pipe(retry(3));
  }

  addUser(user: User):Observable<User>
  {
    return this.http.post<User>(this.user_url,user).pipe(catchError(this.handleError));
  }


  login(user: User)
  {
    return this.http.post<User>(this.login_url,user).pipe(retry(3),catchError(this.handleError));
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
