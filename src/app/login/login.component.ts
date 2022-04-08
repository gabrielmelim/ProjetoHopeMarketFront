import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserCredentialDTO } from '../model/UserCredentialDTO';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLoginDTO = new UserLoginDTO()
  user : UserCredentialDTO = new UserCredentialDTO()

  constructor(

    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
  window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserCredentialDTO) => {
      this.user = resp;
      environment.token = this.user.token
      environment.nome = this.user.nome
      environment.tipo = this.user.tipo

      console.log(environment)

      this.route.navigate(['/home'])
    }, erro => {
      if(erro.status == 401 || 404){
        alert('Usuário ou senha estão incorretos, tente novamente!')
      }
    })
}
}
