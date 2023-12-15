import { Alunos } from "./alunos.model";
import { Cursos } from "./cursos.model";

export class Matricula {
  id?: number;
  aluno = new Alunos();
  curso = new Cursos();
  datamatricula?: Date;
  status?: boolean;
}
