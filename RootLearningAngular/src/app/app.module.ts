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
import { BNavComponent } from './componentes/busqueda/b-nav/b-nav.component';
import { BTodosComponent } from './componentes/busqueda/b-todos/b-todos.component';
import { BDestacadosComponent } from './componentes/busqueda/b-destacados/b-destacados.component';
import { BCursosComponent } from './componentes/busqueda/b-cursos/b-cursos.component';
import { BTalleresComponent } from './componentes/busqueda/b-talleres/b-talleres.component';
import { BComunidadComponent } from './componentes/busqueda/b-comunidad/b-comunidad.component';
import {CarouselModule} from 'primeng/carousel';

import { PCabeceraComponent } from './componentes/producto/p-cabecera/p-cabecera.component';
import { PCaractCursoComponent } from './componentes/producto/p-caract-curso/p-caract-curso.component';
import { PCompraComponent } from './componentes/producto/p-compra/p-compra.component';
import { PTemasComponent } from './componentes/producto/p-temas/p-temas.component';
import { PComentariosComponent } from './componentes/producto/p-comentarios/p-comentarios.component';
import { PCursosRelacionadosComponent } from './componentes/producto/p-cursos-relacionados/p-cursos-relacionados.component';

import { LPopupComponent } from './componentes/login/l-popup/l-popup.component';
import { LContenidoComponent } from './componentes/login/l-contenido/l-contenido.component';

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
    BComunidadComponent,
    PCaractCursoComponent,
    PCompraComponent,
    PTemasComponent,
    PComentariosComponent,
    PCursosRelacionadosComponent,
    LPopupComponent,
    LContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
