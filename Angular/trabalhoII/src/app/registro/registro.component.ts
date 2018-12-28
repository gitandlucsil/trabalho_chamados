import { Component, OnInit } from '@angular/core';
import { Chamado, Departamento } from '../model/model';
import { ChamadoService } from '../service/chamado.service';
import { DepartamentoService } from '../service/departamento.service';
import { Router } from '@angular/router';

export interface Departamento {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    chamado : Chamado = new Chamado()

    departamentos : Departamento[]

    constructor(private cs : ChamadoService,
                private ds : DepartamentoService,
                private router : Router) { }

    ngOnInit() {
        this.ds.listar( (ret) => {
            this.departamentos = ret
        })
    }

    salvar() {
        this.cs.salvar(this.chamado,
            () => {
                this.router.navigateByUrl('/home/timeline')
            }
        )
    }

    cancelar() {
        this.router.navigateByUrl('/home/timeline')
    }

}
