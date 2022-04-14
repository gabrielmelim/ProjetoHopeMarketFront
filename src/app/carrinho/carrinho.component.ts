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
  user : User = new User

  constructor(
    private carrinho : CarrinhoService,
    private produto: ProdutoService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    environment.id
  }

  total(){
    return this.comprados.map((item)=> item.preco).reduce((a,b)=> a + b, 0);

  }

  desconto(){
    if (this.user.pacote == 'SILVER'){
      this.total()*0,15
    } else if (this.user.pacote == 'GOLD'){
      this.total()*0,15
    } else if (this.user.pacote == 'PLANTIUM'){
      this.total()*0,15
    }

  }

  parcela(){
    return this.total()/12
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
