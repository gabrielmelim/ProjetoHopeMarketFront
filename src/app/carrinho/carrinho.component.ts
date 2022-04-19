import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  listaCompras = this.carrinho.listar()
  comprados = this.carrinho.listar()
  user : User = new User()
  valorTotal: number
  precoDesc: number = 0

  constructor(
    private carrinho : CarrinhoService,
    private produto: ProdutoService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.refreshToken()
    this.getUser()
    this.total()
  }

  getUser(){
    this.auth.usuarioId(environment.id).subscribe((resp: User) => {
      this.user = resp
      console.log(this.user)

      if(this.user.pacote == 'SILVER'){
        this.precoDesc = (this.valorTotal - (this.valorTotal * 0.05))
        console.log(this.precoDesc)
      } else if (this.user.pacote == 'GOLD'){
        this.precoDesc = (this.valorTotal - this.valorTotal * 0.10)
        console.log(this.precoDesc)
      } else if (this.user.pacote == 'PLANTIUM'){
        this.precoDesc = (this.valorTotal - this.valorTotal * 0.15)
        console.log(this.precoDesc)
      }
    })
  }

  total(){
    this.valorTotal = this.comprados.map((item) => item.preco).reduce((a,b)=> a + b, 0);
  }

  parcela(){
    return this.valorTotal/12
  }

  confirmar(){
    this.carrinho.limpar()
    this.router.navigate(['/home'])
    alert('Compra realizada com sucesso, volte sempre 😁')

  }

  limpar(){
    this.carrinho.limpar()
    alert('Carrinho limpado com sucesso!')
  }

}
