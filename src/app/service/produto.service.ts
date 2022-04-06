import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient ) {  }

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://projetohopemarket.herokuapp.com/produtos')
  }

  getProdutoByCategoria(categoria: string): Observable<Produto>{
    return this.http.get<Produto>(`https://projetohopemarket.herokuapp.com/produtos/categoria/${categoria}`)
  }

  getProdutoById(id:number): Observable<Produto>{
    return this.http.get<Produto>(`https://projetohopemarket.herokuapp.com/produtos/${id}`)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://projetohopemarket.herokuapp.com/produtos', produto)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://projetohopemarket.herokuapp.com/produtos', produto)
  }

  deleteProduto(id:number): Observable<Produto>{
    return this.http.delete<Produto>(`https://projetohopemarket.herokuapp.com/produtos/${id}`)
  }

}


