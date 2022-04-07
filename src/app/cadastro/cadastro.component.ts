import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserRegisterDTO } from '../model/UserRegisterDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  userRegister: UserRegisterDTO = new UserRegisterDTO()
  user: User = new User()

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(){
  }

  cadastrar(){
    // this.userRegister.tipo = 'cliente'
    this.auth.cadastrar(this.userRegister).subscribe((resp: User) => {
      this.user = resp;
      alert('Usuário cadastrado!')
      this.route.navigate(['/login'])
    })
  }

}
