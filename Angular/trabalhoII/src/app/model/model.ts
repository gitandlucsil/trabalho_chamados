export class Departamento {
    public _id : string
    public nome : string
}

export class Chamado {
    public _id : string
    public descricao : string
    public solicitante : string
    public departamento : Departamento
    public data : Date
    public status : Number
}

