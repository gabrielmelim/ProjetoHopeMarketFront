import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken()  {
    this. token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://projetohopemarket.herokuapp.com/produtos')
  }

  getProdutoByCategoria(categoria: string): Observable<Produto>{
    return this.http.get<Produto>(`https://projetohopemarket.herokuapp.com/produtos/categoria/${categoria}`, this.token)
  }

  getProdutoById(id:number): Observable<Produto>{
    return this.http.get<Produto>(`https://projetohopemarket.herokuapp.com/produtos/${id}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://projetohopemarket.herokuapp.com/produtos', produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://projetohopemarket.herokuapp.com/produtos', produto, this.token)
  }

  deleteProduto(id:number): Observable<Produto>{
    return this.http.delete<Produto>(`https://projetohopemarket.herokuapp.com/produtos/${id}`, this.token)
  }

}


