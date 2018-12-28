import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Departamento } from "../model/model";
//import { AuthService } from "./auth.service";

const WS_LISTAR = 'http://localhost:3000/cad_departamento/listar'
const WS_SALVAR = 'http://localhost:3000/cad_departamento/salvar'

@Injectable()
export class DepartamentoService {

    constructor(private http: HttpClient) {

    }

    salvar(departamento : Departamento, cb : () => void) {
        this.http.post(WS_SALVAR, departamento).subscribe(cb, this.tratarErro)
    }

    listar(cb : (ret : any) => void) {
        this.http.get(WS_LISTAR).subscribe(cb, this.tratarErro)
    }

    tratarErro(e) {
        alert("Erro ao acessar o servidor: " + e.message)
    }

}