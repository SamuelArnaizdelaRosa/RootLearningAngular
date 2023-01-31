import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-todos',
  templateUrl: './b-todos.component.html',
  styleUrls: ['./b-todos.component.css']
})
export class BTodosComponent implements OnInit{
  selecionado = document.getElementById("nav_busqueda_todos");
  all = document.getElementsByClassName("opcion") as HTMLCollectionOf<HTMLElement>;

  ngOnInit() {
    for(var i=0, len= this.all.length; i<len; i++)
    {
      this.all[i].style.boxShadow = "none";
    }
    
    this.selecionado.style.boxShadow = "inset 0px -5px 0px 0px #1192EE";
  }

  carrousel() {
    
  }
}
