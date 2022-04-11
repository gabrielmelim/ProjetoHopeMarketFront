import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: Produto [] = []
  totalItems: number

  constructor(
    private router: Router
  ) { }

  adicionar(produto: Produto) {
    this.produtos.push(produto)
    this.totalItems = this.produtos.length
  }

  listar() {
    return this.produtos
  }

  limpar() {
    this.produtos = [];
    return this.produtos
  }

  confirmar() {
    this.produtos = []
    alert('Parabéns! Compra realizada com sucesso.')
    return this.produtos
    this.router.navigate(['/produto'])

  }

}
