import { Component, OnInit } from '@angular/core';
import { Curso } from "../curso";

@Component({
  selector: 'app-b-todos',
  templateUrl: './b-todos.component.html',
  styleUrls: ['./b-todos.component.css']
})
export class BTodosComponent implements OnInit{
  selecionado = document.getElementById("nav_busqueda_todos");
  all = document.getElementsByClassName("opcion") as HTMLCollectionOf<HTMLElement>;

  curso_1: Curso = {
    titulo: "Kotlin desde cero",
    foto: "Curso1.png",
    autor: "Pepe Fernandez",
    descipcion: "Aprende Kotlin desde cero con este curso paso a paso",
    tiempo: "4",
    dificultad: "Basico",
    longitud: "27",
    nota: "4.9",
    precio: "19,00"
  };
  
  cursos = [
    this.curso_1,
    this.curso_1,
    this.curso_1,
    this.curso_1,
    this.curso_1
  ];

  responsiveOptions;

	constructor() {
		this.responsiveOptions = [
            {
                breakpoint: '1350px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '1250px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '930px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

  ngOnInit() {
    for(var i=0, len= this.all.length; i<len; i++)
    {
      this.all[i].style.boxShadow = "none";
    }
    
    this.selecionado.style.boxShadow = "inset 0px -5px 0px 0px #1192EE";
  }
}
