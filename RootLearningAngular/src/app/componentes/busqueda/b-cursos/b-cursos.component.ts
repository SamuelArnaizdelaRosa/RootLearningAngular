import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-cursos',
  templateUrl: './b-cursos.component.html',
  styleUrls: ['./b-cursos.component.css']
})
export class BCursosComponent implements OnInit{
  selecionado = document.getElementById("nav_busqueda_cursos");
  all = document.getElementsByClassName("opcion") as HTMLCollectionOf<HTMLElement>;

  ngOnInit() {
    for(var i=0, len= this.all.length; i<len; i++)
    {
      this.all[i].style.boxShadow = "none";
    }
    
    this.selecionado.style.boxShadow = "inset 0px -5px 0px 0px #1192EE";
  }
}
