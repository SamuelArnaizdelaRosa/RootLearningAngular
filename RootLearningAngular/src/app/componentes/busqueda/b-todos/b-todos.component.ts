import { Component, OnInit } from '@angular/core';
import { Curso } from "../curso";

@Component({
  selector: 'app-b-todos',
  templateUrl: './b-todos.component.html',
  styleUrls: ['./b-todos.component.css']
})
export class BTodosComponent implements OnInit{
  //Selecionar Nav
  selecionado = document.getElementById("nav_busqueda_todos");
  all = document.getElementsByClassName("opcion") as HTMLCollectionOf<HTMLElement>;

  //Crear objetos Curso
  curso_1: Curso = {
    titulo: "Kotlin desde cero",
    foto: "FotoCurso.png",
    autor: "Pepe Fernandez",
    descipcion: "Aprende Kotlin desde cero con este curso paso a paso",
    tiempo: "4",
    dificultad: "Basico",
    longitud: "27",
    nota: "4.9",
    precio: "19,00"
  };  

  curso_2: Curso = {
    titulo: "Crea tu primera App",
    foto: "Curso1.png",
    autor: "Aitor Tilla",
    descipcion: "Crea y publica tu primera App",
    tiempo: "8",
    dificultad: "Medio",
    longitud: "46",
    nota: "3.7",
    precio: "39,99"
  };  

  curso_3: Curso = {
    titulo: "Angular desde 0",
    foto: "Curso2.png",
    autor: "Eren Jagger",
    descipcion: "Aprende angular desde 0 con este curso paso a paso (tatakae)",
    tiempo: "6",
    dificultad: "Basico",
    longitud: "12",
    nota: "5",
    precio: "25.99"
  };  

  curso_4: Curso = {
    titulo: "Mac mini m1",
    foto: "curso4.png",
    autor: "Armin Elquemado",
    descipcion: "Aprende Kotlin desde cero con este curso paso a paso",
    tiempo: "23",
    dificultad: "Avanzado",
    longitud: "78",
    nota: "2.5",
    precio: "19,99"
  };  

  curso_5: Curso = {
    titulo: "Vue3 desde cero",
    foto: "Curso3.png",
    autor: "Lana LaPiedra",
    descipcion: "Aprende Vue3 desde cero con este curso paso a paso",
    tiempo: "4",
    dificultad: "Basico",
    longitud: "27",
    nota: "5",
    precio: "19,99"
  };  
  
  //Crar listas con los cursos para los carouseles
  cursos_todos = [
    this.curso_1,
    this.curso_2,
    this.curso_3,
    this.curso_1,
    this.curso_2,
    this.curso_3,
    this.curso_1,
    this.curso_2,
    this.curso_3
  ];

  cursos_destacados = [
    this.curso_1,
    this.curso_2,
    this.curso_1,
    this.curso_2,
    this.curso_1,
    this.curso_2
  ];

  cursos_talleres  = [
    this.curso_2,
    this.curso_4,
    this.curso_2,
    this.curso_4,
    this.curso_2,
    this.curso_4
  ];

  cursos_comunidad = [
    this.curso_5,
    this.curso_5,
    this.curso_5
  ];

  //Responsive Carousel
  responsiveOptions;

	constructor() {
		this.responsiveOptions = [
      {
          breakpoint: '1660px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '1120px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '780px',
          numVisible: 1,
          numScroll: 1
      }
    ];
	}

  ngOnInit() {
    //Selecion de nav
    for(var i=0, len= this.all.length; i<len; i++)
    {
      this.all[i].style.boxShadow = "none";
    }
    
    this.selecionado.style.boxShadow = "inset 0px -5px 0px 0px #1192EE";
  }
}
