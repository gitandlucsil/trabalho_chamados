import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../service/auth.service';
import { DepartamentoService } from '../service/departamento.service';
import { Chamado, Departamento } from '../model/model';

@Component({
  selector: 'app-cad_departamento',
  templateUrl: './cad_departamento.component.html',
  styleUrls: ['./cad_departamento.component.css']
})
export class Cad_DepartamentoComponent implements OnInit {

    departamento = new Departamento()
    departamentos : Departamento[]

    constructor(private dp : DepartamentoService) {             
    }

    ngOnInit() {       
        this.listar()
    }

    listar() {
        this.dp.listar( (ret) => {
            this.departamentos = ret
        })
    }

    salvar() {        

        this.dp.salvar(this.departamento,
            () => {
                this.listar()
            }
        )
    }

}
