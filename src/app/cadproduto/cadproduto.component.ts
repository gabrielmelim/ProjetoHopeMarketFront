import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.css']
})
export class CadprodutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[] = [];

  constructor(
    private prod: ProdutoService
  ) { }

  ngOnInit(  ) {
    this.prod.refreshToken()
  }

  cadProduto(){
    console.log(this.produto)
    this.prod.postProduto(this.produto).subscribe((resp: Produto)=> {
      this.produto = resp;
      alert('Produto cadastrado com sucesso!');
      this.produto = new Produto();
    });

  }

  getProdutos(){
    this.prod.getAllProduto().subscribe((produtos: Produto[]) => {
      this.listaProdutos = produtos;
      this.listaProdutos.sort((a, b) => a.id - b.id)
    })
  }

  getProdutoById(id: number){
    this.prod.getProdutoById(id).subscribe((produto: Produto) => {
      this.produto = produto;
    })
  }

}
