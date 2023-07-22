import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken()  {
    this. token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  usuarioId(id: number): Observable<User>{
    return this.http.get<User>(`https://projetohopemarket-production.up.railway.app/api/usuario${id}`, this.token)
  }

  entrar(userLogin: UserLoginDTO): Observable<UserCredentialDTO> {
    return this.http.put<UserCredentialDTO>('https://projetohopemarket-production.up.railway.app/api/usuario/auth', userLogin)
  }

  cadastrar(user: UserRegisterDTO): Observable<User> {
    return this.http.post<User>('https://projetohopemarket-production.up.railway.app/api/usuario/cadastrar', user)

  }

  pacote(user: User): Observable<User> {
    return this.http.put<User>(`https://projetohopemarket-production.up.railway.app/api/usuario`, user, this.token)

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
