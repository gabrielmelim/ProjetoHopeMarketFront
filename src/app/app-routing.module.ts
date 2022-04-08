import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssinantesComponent } from './assinantes/assinantes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadprodutoComponent } from './cadproduto/cadproduto.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'assinantes', component: AssinantesComponent},
  {path: 'cadproduto', component: CadprodutoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
