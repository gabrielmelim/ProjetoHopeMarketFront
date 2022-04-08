import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    public route : Router

  ) { }

  ngOnInit() {
  }

  enviar(){
    alert('Mensagem enviada com sucesso!')
    this.route.navigate(['/home'])
  }

}
