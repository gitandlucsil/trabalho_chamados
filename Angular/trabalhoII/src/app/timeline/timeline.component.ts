import { Component, OnInit } from '@angular/core';
import { Chamado } from '../model/model';
import { ChamadoService } from '../service/chamado.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

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

    atualizar(chamado : Chamado) {
        this.ch.atualizar(chamado, () => {
            this.listar()
        })
    }
    
    excluir(id : string) {
        this.ch.excluir(id, () => {
            this.listar()
        })
    }

    analisar(chamado : Chamado) {
        this.ch.analisar(chamado, () => {
            this.listar()
        })
    }

    aceitar(chamado : Chamado) {
        this.ch.aceitar(chamado, () => {
            this.listar()
        })
    }

    rejeitar(id : string) {
        this.ch.rejeitar(id, () => {
            this.listar()
        })
    }

    concluir(chamado : Chamado) {
        this.ch.concluir(chamado, () => {
            this.listar()
        })
    }


}
