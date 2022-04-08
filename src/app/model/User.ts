import { Produto } from "./Produto";

export class User {
    public id: number;
    public nome: string;
    public cpf: string;
    public senha: string;
    public pacote: string;
    public tipo: string;
    public produto: Produto[];

}