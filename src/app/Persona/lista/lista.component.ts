import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service'
import { Persona } from 'src/app/Model/Persona';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  personas: Persona[]; 

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }
  Editar(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["Editar"]);
  }
  Eliminar(persona:Persona):void{
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado");
    })
  }

}
