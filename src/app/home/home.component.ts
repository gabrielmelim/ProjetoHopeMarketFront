import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos: Produto[];
  produto: Produto = new Produto()

  listaFiltrada: any = []

  constructor(
    public auth: AuthService,
    private prod: ProdutoService,
    private router: Router,

  ) { }

  ngOnInit() {

  this.getAllProdutos();
  }

  getAllProdutos(){
    this.prod.getAllProduto().subscribe((resp: Produto[])=> {
      this.listaProdutos = resp;
      this.listaFiltrada = this.listaProdutos.sort((a,b) => a.preco - b.preco).slice(0,3)
    })
  }
}
