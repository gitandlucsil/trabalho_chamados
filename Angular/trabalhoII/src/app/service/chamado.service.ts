import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Chamado } from "../model/model";

const WS_SALVAR = "http://localhost:3000/chamado/salvar"
const WS_LISTAR = "http://localhost:3000/chamado/listar"
const WS_ATUALIZAR = "http://localhost:3000/chamado/atualizar"
const WS_ANALISAR = "http://localhost:3000/chamado/analisar"
const WS_ACEITAR = "http://localhost:3000/chamado/aceitar"
const WS_REJEITAR = "http://localhost:3000/chamado/rejeitar/"
const WS_CONCLUIR = "http://localhost:3000/chamado/concluir"
const WS_EXCLUIR = "http://localhost:3000/chamado/excluir/"

@Injectable()
export class ChamadoService {

    constructor(private http : HttpClient) {

    }

    salvar(chamado : Chamado, cb : () => void) {
        this.http.post(WS_SALVAR, chamado).subscribe(cb, this.tratarErro)
    }

    listar(cb : (ret : any) => void) {
        this.http.get(WS_LISTAR).subscribe(cb, this.tratarErro)
    }

    atualizar(chamado: Chamado, cb : () => void) {
        this.http.post(WS_ATUALIZAR, chamado).subscribe(cb, this.tratarErro)
    }

    excluir(id : string, cb : () => void) {
        this.http.get(WS_EXCLUIR + id).subscribe(cb, this.tratarErro)
    }

    analisar(chamado: Chamado, cb : () => void) {
        chamado.status = 2
        this.http.post(WS_ANALISAR, chamado).subscribe(cb, this.tratarErro)
    }

    aceitar(chamado: Chamado, cb : () => void) {
        chamado.status = 3
        this.http.post(WS_ACEITAR, chamado).subscribe(cb, this.tratarErro)
    }

    rejeitar(id : string, cb : () => void) {
        this.http.get(WS_REJEITAR + id).subscribe(cb, this.tratarErro)
    }

    concluir(chamado: Chamado, cb : () => void) {
        chamado.status = 4
        this.http.post(WS_CONCLUIR, chamado).subscribe(cb, this.tratarErro)
    }

    private tratarErro(e : Error) {
        alert('Erro ao executar ws Chamado ' + e.message)
    }

}