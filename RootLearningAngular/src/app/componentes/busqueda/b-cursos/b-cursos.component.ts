import { Component, OnInit } from '@angular/core';
import { Curso } from "../curso";

@Component({
  selector: 'app-b-cursos',
  templateUrl: './b-cursos.component.html',
  styleUrls: ['./b-cursos.component.css']
})
export class BCursosComponent implements OnInit{
  //Selecionar Nav
  selecionado = document.getElementById("nav_busqueda_cursos");
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
    for(var i=0, len= this.all.length; i<len; i++)
    {
      this.all[i].style.boxShadow = "none";
    }
    
    this.selecionado.style.boxShadow = "inset 0px -5px 0px 0px #1192EE";
  }
}
