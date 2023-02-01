import { Component, OnInit } from '@angular/core';
import { Curso } from "../curso";

@Component({
  selector: 'app-b-comunidad',
  templateUrl: './b-comunidad.component.html',
  styleUrls: ['./b-comunidad.component.css']
})
export class BComunidadComponent implements OnInit{
  selecionado = document.getElementById("nav_busqueda_publi");
  all = document.getElementsByClassName("opcion") as HTMLCollectionOf<HTMLElement>;

  //Crear objetos Curso
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
    for(var i=0, len= this.all.length; i<len; i++)
    {
      this.all[i].style.boxShadow = "none";
    }
    
    this.selecionado.style.boxShadow = "inset 0px -5px 0px 0px #1192EE";
  }
}
