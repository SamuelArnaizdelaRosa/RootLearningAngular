import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor () {

  }

  showBar() {
    let elem = document.getElementById("texto_busqueda");
    let buscar = document.getElementById("barra_busqueda");
    let boton_salir = document.getElementById("boton_salida");
    let boton_buscar = document.getElementById("boton_busqueda");

    if (elem.className=="activo") {
        elem.className = "desactivado";
        buscar.className = "busqueda";
        boton_salir.className = "boton_salida--desactivado";
        boton_buscar.className = "boton_busqueda--active";
    }
    else {
        elem.className = "activo";
        buscar.className = "busqueda--active";
        boton_salir.className = "boton_salida--active";
        boton_buscar.className = "boton_busqueda--desactivado";
    }

  }

  showBurger() {
    let elem1 = document.getElementById("elementos_links");
    if (elem1.className=="menu_cerrado") {
        elem1.className = "menu_abierto";
    }
    else {
        elem1.className = "menu_cerrado";
    }
  }
}
