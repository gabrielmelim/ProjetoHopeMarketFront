import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { UserRegisterDTO } from '../model/UserRegisterDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLoginDTO): Observable<UserLoginDTO> {
    return this.http.put<UserLoginDTO>('https://projetohopemarket.herokuapp.com/api/usuario/auth', userLogin)
  }

  cadastrar(user: UserRegisterDTO): Observable<User> {
    return this.http.post<User>('https://projetohopemarket.herokuapp.com/api/usuario/cadastrar', user)

  }
}