import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFrontend';

  constructor(private router:Router){}
  
  Lista(){
    this.router.navigate(["Lista"]);
  }
  Agregar(){
    this.router.navigate(["Agregar"]);
  }
  Editar(){
    this.router.navigate(["Editar"]);
  }
}
