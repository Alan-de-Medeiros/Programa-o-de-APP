import leia from 'readline-sync';
import {Celular,cadastraCelular} from './repository/CelularRepository';

var cor = leia.question("INFORME A COR DO CELULAR: ")
var marca = leia.question("INFORME A MARCA: ")
var tamanho = leia.question("INFORME O TAMANHO: ")

var celular: Celular = {
    cor: cor,
    marca: marca,
    tamanhoTela: tamanho
}

cadastraCelular(celular);

type Pessoa = {
    nome: string;
    cpf: string;
    dataNascimento: string;
    contatos:{
        telefones: string[],
        emails: string[]
    }
    celular: Celular
}

var nome = leia.question("DIGITE O NOME: ");
var cpf = leia.question("DIGITE O CPF: ");
var dataNascimento = leia.question("DIGITE A DATA DE NASCIMENTO: ");
var telefone = leia.question("DIGITE O TELEFONE: ");
var email = leia.question("DIGITE O EMAIL: ");

const pessoa: Pessoa = {
    nome: nome,
    cpf: cpf,
    dataNascimento: dataNascimento,
    contatos: {
        telefones: [telefone],
        emails: [email]
    },
    celular: celular
}

console.log(pessoa);