import { Cursos } from "./cursos.model";

export class Faculdades {
  id?: number;
  razaosocial?: string;
  curso = new Cursos();
  cnpj?: string;
  uf?: string;
  cidade?: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  telefone?: string;
  email?: string;
}
