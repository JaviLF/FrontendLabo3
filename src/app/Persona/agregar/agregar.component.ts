import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service'
import { Persona } from 'src/app/Model/Persona';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  persona:Persona=new Persona();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Se agrego con exito!!");
      this.router.navigate(["Lista"]);
    })
  }

  Cancelar(){
    this.router.navigate(["Lista"])
  }

}
