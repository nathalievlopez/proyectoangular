import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Taita';
  edad:number= 22;
  pasaLaMateria:boolean= true;
  dato:any= 46
  contador:number= 0;

  aumentar(){
    this.contador=this.contador + 1;
  }
  disminuir(){
    this.contador=this.contador - 1;
  }
  multx2(){
    this.contador=this.contador * 2;
  }
  divx2(){
    this.contador=this.contador / 2;
  }
  reset(){
    this.contador=0;
  }
  esPar(numero:number):boolean{
    if(numero % 2 ===0){
      return true
    } else {
      return false 
    }
   }
   estudiantes:string[]= ["walter", "leidy", "romario", "alejandro", "daniela", "luisa"];

   animales=[
    {
      nombre: "Gato",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg",
      pesoPromedioKg: "4Kg",
      numeroPatas: 4,
      colorPredominante: "atigrado",
      alimentacion:"carnivoro",
      habitat: "domestico",
      vuela: false,
    },
    {
      nombre: "Caballo",
      imagen: "https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738164508-800x400.jpg",
      pesoPromedioKg: "800Kg",
      numeroPatas: 4,
      colorPredominante: "cafe",
      alimentacion:"herbivoro",
      habitat: "domestico/salvaje",
      vuela: false,
    },
    {
      nombre: "Serpiente",
      imagen: "https://www.nationalgeographic.com.es/medio/2021/03/02/blue-pitviper-from-komodo-ruchira-somaweera_a965d16c_800x800.jpg",
      pesoPromedioKg: "4Kg",
      numeroPatas: 0,
      colorPredominante: "verde oscuro",
      alimentacion:"carnivoro",
      habitat: "salvaje",
      vuela: false,
    },
    {
      nombre: "Aguila",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bald_Eagle_%28Haliaeetus_leucocephalus%29_Kachemak_Bay%2C_Alaska.jpg/1200px-Bald_Eagle_%28Haliaeetus_leucocephalus%29_Kachemak_Bay%2C_Alaska.jpg",
      pesoPromedioKg: "6Kg",
      numeroPatas: 2,
      colorPredominante: "cafe",
      alimentacion:"carnivoro",
      habitat: "salvaje",
      vuela: true,
    },
    {
      nombre: "Pinguino",
      imagen: "https://images.ecestaticos.com/pqIAcGCEagnkjdIBVKVbC9i5FH4=/0x0:1920x1278/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe8e%2Fe27%2F2bf%2Fe8ee272bfd36f69679936351209d708c.jpg",
      pesoPromedioKg: "43Kg",
      numeroPatas: 2,
      colorPredominante: "blanco",
      alimentacion:"carnivoro",
      habitat: "salvaje",
      vuela: false,
    },
    {
      nombre: "Tiburon",
      imagen: "https://concepto.de/wp-content/uploads/2020/04/tiburones-e1588033520746.jpg",
      pesoPromedioKg: "220Kg",
      numeroPatas: 0,
      colorPredominante: "gris azulado",
      alimentacion:"carnivoro",
      habitat: "salvaje",
      vuela: false,
    },
    {
      nombre: "Conejo",
      imagen: "https://www.tiendanimal.es/articulos/wp-content/uploads/2017/10/enfermedades-conejos-1200x900.jpg",
      pesoPromedioKg: "2Kg",
      numeroPatas: 4,
      colorPredominante: "marron claro",
      alimentacion:"herbivoro",
      habitat: "salvaje/domestico",
      vuela: false,
    },
    {
      nombre: "Huron",
      imagen: "https://www.tiendanimal.es/articulos/wp-content/uploads/2020/01/hur%C3%B3n-1200x720.jpg",
      pesoPromedioKg: "2Kg",
      numeroPatas: 4,
      colorPredominante: "almendra",
      alimentacion:"carnivoro",
      habitat: "salvaje/domestico",
      vuela: false,
    }

   ]
}
