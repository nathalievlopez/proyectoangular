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
}
