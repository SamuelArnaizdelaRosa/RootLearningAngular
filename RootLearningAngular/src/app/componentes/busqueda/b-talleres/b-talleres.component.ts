import { Component, OnInit } from '@angular/core';
import { Curso } from "../curso";

@Component({
  selector: 'app-b-talleres',
  templateUrl: './b-talleres.component.html',
  styleUrls: ['./b-talleres.component.css']
})
export class BTalleresComponent implements OnInit{
  selecionado = document.getElementById("nav_busqueda_talleres");
  all = document.getElementsByClassName("opcion") as HTMLCollectionOf<HTMLElement>;

  //Crear objetos Curso
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
  
  //Crar listas con los cursos para los carouseles
  cursos_talleres  = [
    this.curso_2,
    this.curso_4,
    this.curso_2,
    this.curso_4,
    this.curso_2,
    this.curso_4
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
