import { Component, OnInit } from '@angular/core';
import { Chamado } from '../model/model';
import { DepartamentoService } from '../service/departamento.service';
//import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chamado : Chamado = new Chamado()

  constructor(private router : Router) { }

  ngOnInit() {
  }

  registrar() {

    this.router.navigateByUrl('/home/registro')
     
  }

  inicio(){

    this.router.navigateByUrl('/home/timeline')
    
  }

}
