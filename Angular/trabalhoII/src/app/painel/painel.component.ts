import { Component, OnInit } from '@angular/core';
import { Chamado } from '../model/model';
import { ChamadoService } from '../service/chamado.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

    chamados : Chamado[]

    constructor(private ch : ChamadoService) { 
    }

    ngOnInit() {
        this.listar()
    }

    listar() {
        this.ch.listar( (ret) => {
            this.chamados = ret
        })
    }   

}
