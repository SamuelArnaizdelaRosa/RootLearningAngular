import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-buscador',
  templateUrl: './b-buscador.component.html',
  styleUrls: ['./b-buscador.component.css']
})
export class BBuscadorComponent implements OnInit{

  ngOnInit() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const busqueda = urlParams.get('busqueda')
    document.getElementById("busqueda_texto_item").innerHTML = busqueda
  }
}
