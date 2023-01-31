import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-talleres',
  templateUrl: './b-talleres.component.html',
  styleUrls: ['./b-talleres.component.css']
})
export class BTalleresComponent implements OnInit{
  selecionado = document.getElementById("nav_busqueda_talleres");
  all = document.getElementsByClassName("opcion") as HTMLCollectionOf<HTMLElement>;

  ngOnInit() {
    for(var i=0, len= this.all.length; i<len; i++)
    {
      this.all[i].style.boxShadow = "none";
    }
    
    this.selecionado.style.boxShadow = "inset 0px -5px 0px 0px #1192EE";
  }
}
