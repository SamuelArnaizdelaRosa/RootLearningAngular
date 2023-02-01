import { Component, OnInit } from '@angular/core';
import { Curso } from "../curso";

@Component({
  selector: 'app-b-destacados',
  templateUrl: './b-destacados.component.html',
  styleUrls: ['./b-destacados.component.css']
})
export class BDestacadosComponent implements OnInit{
  selecionado = document.getElementById("nav_busqueda_destacados");
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
  
  //Crar listas con los cursos para los carouseles
  cursos_destacados = [
    this.curso_1,
    this.curso_2,
    this.curso_1,
    this.curso_2,
    this.curso_1,
    this.curso_2
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
