import { Component,OnInit } from '@angular/core';
import { Cantante } from 'src/app/model/cantante.model';

@Component({
  selector: 'cantantes',
  templateUrl: './cantantes.component.html',
  styleUrls: ['./cantantes.component.css']
})
export class CantantesComponent implements OnInit {

  cantantes:Cantante[]=[
    {
      nombre:'Freddy Mercury',
      edad: 45,
      vivo: false,
    },
    {
      nombre:'Michael Jackson',
      edad: 50,
      vivo: false,
    },
    {
      nombre:'Elvis Presley',
      edad: 42,
      vivo: false,
    },
    {
      nombre:'The Weeknd',
      edad: 33,
      vivo: true,
    }, 
    {
      nombre:'Selena Gomez',
      edad: 30,
      vivo: true,
    },
    {
      nombre:'Miley Cyrus',
      edad: 30,
      vivo: true,
    },
    {
      nombre:'Ariana Grande',
      edad: 29,
      vivo: true,
    },
    {
      nombre:'Lady Gaga',
      edad: 37,
      vivo: true,
    },
    {
      nombre:'Britney Spears',
      edad: 41,
      vivo: true,
    },
    {
      nombre:'Iggy Azalea',
      edad: 32,
      vivo: true,
    },
  ]
  ngOnInit(): void {
    console.log("Hola");
    console.log(this.cantantes[0].nombre);
    console.log(this.cantantes[0].nombre.length);
    console.log(this.cantantes[0].nombre.charAt(1));
    console.log(this.cantantes[0].nombre.substring(1,4));
    console.log(this.cantantes[0].nombre.replace("Mercury","Mercurio"));
    console.log(this.cantantes[0].nombre.toUpperCase());
    console.log(this.cantantes[0].nombre.concat(" Sanchez"));
    console.log(this.cantantes[0].nombre.indexOf("Mercury"));
    console.log(this.cantantes[0].nombre.includes("Mercury"));
    console.log(this.cantantes[0].nombre.startsWith("Fre"));
    console.log(this.cantantes);
    console.table(this.cantantes[2])
    console.log(this.cantantes.length);
    // elimina el ultimo elemento del arreglo//
    this.cantantes.pop();
    // elimina el primer elemento del arreglo//
    this.cantantes.shift();
    // elimina la cantidad de elementos del segundo numero de la posicion que es el primer numero//
    this.cantantes.splice(2,1);
    console.log(this.cantantes);
    // añadir un nuevo elemento al arreglo//
    let nuevoCantante:Cantante={
      nombre: 'Steve Aoki',
      edad: 45,
      vivo: true,
    }
    this.cantantes.push(nuevoCantante)
    console.log(this.cantantes);
    // convertir todo a un grupo de strings//
    let nombres=this.cantantes.map(cantante => cantante.nombre.toUpperCase()).sort();
    console.log(nombres);
    
    let sumas=this.cantantes.map(cantantes => cantantes.edad + 2);
    console.log(sumas);
    let raices=this.cantantes.map(cantantes => Math.sqrt(cantantes.edad));
    console.log(raices);
    let potencia=this.cantantes.map(cantantes => Math.pow(cantantes.edad,2));
    console.log(potencia);

 


    
  }

}
