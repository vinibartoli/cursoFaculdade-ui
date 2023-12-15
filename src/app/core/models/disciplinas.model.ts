import { Professores } from "./professores.model";

export class Disciplinas {
  id?: number;
  descricao?: string;
  status?: boolean;
  professor = new Professores();
}
