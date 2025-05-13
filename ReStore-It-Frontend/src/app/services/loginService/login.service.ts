import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  ValidateLogin(email: string, password: string): Observable<boolean>{
    return this.http.get<boolean>(`/business/login/validate`, {
      params: { email, password }}
)
  }
}
