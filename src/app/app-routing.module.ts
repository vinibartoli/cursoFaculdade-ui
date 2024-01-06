import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'alunos' , loadChildren: () =>
    import('./pages/alunos/alunos.module').then(m => m.AlunosModule)
  },
  {
    path: 'cursos' , loadChildren: () =>
    import('./pages/cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'disciplinas' , loadChildren: () =>
    import('./pages/disciplinas/disciplinas.module').then(m => m.DisciplinasModule)
  },
  {
    path: 'faculdades' , loadChildren: () =>
    import('./pages/faculdades/faculdades.module').then(m => m.FaculdadesModule)
  },
  {
    path: 'matriculas' , loadChildren: () =>
    import('./pages/matriculas/matriculas.module').then(m => m.MatriculasModule)
  },
  {
    path: 'professores' , loadChildren: () =>
    import('./pages/professores/professores.module').then(m => m.ProfessoresModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
