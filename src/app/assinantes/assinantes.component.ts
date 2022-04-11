import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-assinantes',
  templateUrl: './assinantes.component.html',
  styleUrls: ['./assinantes.component.css']
})
export class AssinantesComponent implements OnInit {
  user: User = new User()

  constructor(
    private pacoteAuth: AuthService
  ) { }

  ngOnInit() {
    this.pacoteAuth.refreshToken()
    this.getUsuario()
  }

  getUsuario(){
    this.pacoteAuth.usuarioId(environment.id).subscribe((resp: User) => {
      this.user = resp
    })
  }

  putPacoteSilver(){
    this.user.pacote = 'SILVER'

    console.log(this.user)
    this.pacoteAuth.pacote(this.user).subscribe((resp: User) => {
      this.user = resp;
      alert('Pacote Silver incluído com sucesso!')
    })
  }

  putPacoteGold(){
    this.user.pacote = 'GOLD'

    console.log(this.user)
    this.pacoteAuth.pacote(this.user).subscribe((resp: User) => {
      this.user = resp;
      alert('Pacote Gold incluído com sucesso!')
    })
  }

  putPacotePlatinum(){
    this.user.pacote = 'PLANTIUM'

    console.log(this.user)
    this.pacoteAuth.pacote(this.user).subscribe((resp: User) => {
      this.user = resp;
      alert('Pacote Platinum incluído com sucesso!')
    })
  }
}
