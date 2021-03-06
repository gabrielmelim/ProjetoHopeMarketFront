import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome

  constructor(
    public auth: AuthService,
    public route: Router

  ) { }

  ngOnInit() {
  }

  sair(){
    this.route.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.tipo = ''
    environment.email = ''
    environment.id = 0

  }
}
