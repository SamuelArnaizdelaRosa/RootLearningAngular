import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-destacados',
  templateUrl: './b-destacados.component.html',
  styleUrls: ['./b-destacados.component.css']
})
export class BDestacadosComponent implements OnInit{
  selecionado = document.getElementById("nav_busqueda_destacados");
  all = document.getElementsByClassName("opcion") as HTMLCollectionOf<HTMLElement>;

  ngOnInit() {
    for(var i=0, len= this.all.length; i<len; i++)
    {
      this.all[i].style.boxShadow = "none";
    }
    
    this.selecionado.style.boxShadow = "inset 0px -5px 0px 0px #1192EE";
  }
}
