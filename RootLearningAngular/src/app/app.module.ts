import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';
import { CestaComponent } from './paginas/cesta/cesta.component';
import { BBuscadorComponent } from './componentes/busqueda/b-buscador/b-buscador.component';
import { PCabeceraComponent } from './componentes/producto/p-cabecera/p-cabecera.component';
import { BNavComponent } from './componentes/busqueda/b-nav/b-nav.component';
import { BTodosComponent } from './componentes/busqueda/b-todos/b-todos.component';
import { BDestacadosComponent } from './componentes/busqueda/b-destacados/b-destacados.component';
import { BCursosComponent } from './componentes/busqueda/b-cursos/b-cursos.component';
import { BTalleresComponent } from './componentes/busqueda/b-talleres/b-talleres.component';
import { BComunidadComponent } from './componentes/busqueda/b-comunidad/b-comunidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BusquedaComponent,
    ProductoComponent,
    LoginComponent,
    RegisterComponent,
    CestaComponent,
    BBuscadorComponent,
    PCabeceraComponent,
    BNavComponent,
    BTodosComponent,
    BDestacadosComponent,
    BCursosComponent,
    BTalleresComponent,
    BComunidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
