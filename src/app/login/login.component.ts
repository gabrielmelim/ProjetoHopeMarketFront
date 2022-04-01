import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLoginDTO = new UserLoginDTO()

  constructor(

    private auth: AuthService,
    private router: Router
  ) { }

   ngOnInit() {
  window.scroll(0,0)
  }
  
//   entrar() {
//     this.auth.entrar(this.userLogin).subscribe({
//       next: (resp: UserLogin)=>{
//       this.userLogin = resp
//       this.userLogin.foto
//       environment.token = this.userLogin.token
//       environment.nome  = this.userLogin.nome
//       environment.foto = this.userLogin.foto
//       environment.id  = this.userLogin.id
//       this.router.navigate(['/inicio'])
//     },
//     error: erro => {
//       if(erro.status == 500){
//         alert('Usuário ou senha estão incorretos!')
//       }
//     },
//   });
// }
}
