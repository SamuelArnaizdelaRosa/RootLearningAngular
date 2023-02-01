import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./paginas/home/home.component";

import { BusquedaComponent } from "./paginas/busqueda/busqueda.component";
import { BTodosComponent } from "./componentes/busqueda/b-todos/b-todos.component";
import { BDestacadosComponent } from "./componentes/busqueda/b-destacados/b-destacados.component";
import { BCursosComponent } from "./componentes/busqueda/b-cursos/b-cursos.component";
import { BTalleresComponent } from "./componentes/busqueda/b-talleres/b-talleres.component";
import { BComunidadComponent } from "./componentes/busqueda/b-comunidad/b-comunidad.component";

import { ProductoComponent } from "./paginas/producto/producto.component";
import { LoginComponent } from "./paginas/login/login.component";
import { RegisterComponent } from "./paginas/register/register.component";
import { CestaComponent } from "./paginas/cesta/cesta.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"busqueda", component: BusquedaComponent,
    children: [
      { path: 'todos', component: BTodosComponent },
      { path: 'destacados', component: BDestacadosComponent },
      { path: 'cursos', component: BCursosComponent },
      { path: 'talleres', component: BTalleresComponent },
      { path: 'comunidad', component: BComunidadComponent }
    ]
  },
  {path: "producto", component: ProductoComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path:"cesta",component: CestaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
