import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto []

  nome = environment.nome
  categoria = environment.categoria
  preco = environment.preco
  estoque = environment.estoque
  foto = environment.foto

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private carrinho: CarrinhoService,
    private auth: AuthService

  ) { }

  ngOnInit() {

    this.findAllProduto()

}


  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp

    })
  }
  cadastrar() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert('Produto cadastrado com sucesso!')
      this.findAllProduto()
      this.produto = new Produto()
})
}

  getProdById(id: number){
    if(this.auth.logado() == true) {
      this.produtoService.getProdutoById(id).subscribe((resp: Produto)=> {
        this.produto = resp
        this.addProduto()
        alert('Produto adicionado ao carrinho')
        this.router.navigate(['/carrinho'])
      })
    } else {
      alert('Entre na sua conta ou cadastre-se para realizar a compra.')
      this.router.navigate(['/login'])
    }
    }

  addProduto(){
    this.carrinho.adicionar(this.produto)
  }
}






