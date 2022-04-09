import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProdutoComponent } from './produto/produto.component';
import { AssinantesComponent } from './assinantes/assinantes.component';
import { CadprodutoComponent } from './cadproduto/cadproduto.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
    MenuComponent,
    CadastroComponent,
    LoginComponent,
    ProdutoComponent,
    AssinantesComponent,
    CadprodutoComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
