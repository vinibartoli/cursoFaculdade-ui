import { Disciplinas } from "./disciplinas.model";

export class Cursos {
  id?: number;
  descricao?: string;
  status?: boolean;
  disciplina = new Disciplinas();
}
