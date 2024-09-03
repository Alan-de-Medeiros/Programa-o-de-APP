import Dono from "./Dono";

export default class cachorro{
    static dono: any;
    constructor(nome: string,raca: string,cor: string,tamanho: string,dono: Dono){
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.tamanho = tamanho; 
        this.dono = dono;
    }

    nome: string;
    raca: string;
    cor: string;
    tamanho: string;
    dono: Dono;
    

    exibirCachorro() {
        console.log(` O NOME DO CACHORRO É ${this.nome}\n A RACA É ${this.raca}\n A COR É ${this.cor}\n E O TAMANHO É ${this.tamanho}`);
    }
    
    exibirDono() {
        console.log(` O DONO DO ${this.nome} É ${this.dono.nome} E O TELEFONE É ${this.dono.telefone}`);
    }
}
