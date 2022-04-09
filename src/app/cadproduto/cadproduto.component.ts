import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { User } from '../model/User';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.css']
})
export class CadprodutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[] = [];
  idProduto: number;
  user:  User = new User;


  constructor(
    private router: Router,
    private prod: ProdutoService
  ) { }

  ngOnInit(  ) {
    this.prod.refreshToken()

    this.getAllProdutos()

  }

  cadProduto(){
    console.log(this.produto)
    this.prod.postProduto(this.produto).subscribe((resp: Produto)=> {
      this.produto = resp;
      alert('Produto cadastrado com sucesso!');
      this.getAllProdutos()
      this.produto = new Produto();
    });

  }

  editProduto(){
    this.prod.putProduto(this.produto).subscribe((resp : Produto)=> {
      this.produto = resp;
      alert('Produto atualizado com sucesso!');
      this.getAllProdutos()
      this.produto = new Produto();
    })
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

  getAllProdutos(){
    this.prod.getAllProduto().subscribe((resp: Produto[])=>{this.listaProdutos = resp})
  }

  deleteProduto(){
    this.prod.deleteProduto(this.produto.id).subscribe(()=> {
      alert('Produto apagado com sucesso!')
      this.getAllProdutos()
      this.router.navigate(['/cadproduto'])
    })
  }


}
