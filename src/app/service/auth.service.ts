import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserCredentialDTO } from '../model/UserCredentialDTO';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { UserRegisterDTO } from '../model/UserRegisterDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLoginDTO): Observable<UserCredentialDTO> {
    return this.http.put<UserCredentialDTO>('https://projetohopemarket.herokuapp.com/api/usuario/auth', userLogin)
  }

  cadastrar(user: UserRegisterDTO): Observable<User> {
    return this.http.post<User>('https://projetohopemarket.herokuapp.com/api/usuario/cadastrar', user)

  }

  logado(){
    let ok: boolean = false;
    if(environment.token != '') {
      ok = true
    }
    return ok
  }

  admin(){
    let ok: boolean = false;
    if(environment.tipo == 'admin'){
      ok = true 
    }
    return ok
    
  }

 

  sair(){
    this.logado
  }
}
