import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  URL: string = 'http://localhost:8080/disciplinas';
  constructor(private httpClinte: HttpClient) { }

  buscarDisciplinas(): Observable<Disciplina[]>{
    return this.httpClinte.get<Disciplina[]>(this.URL)

  }
   
  
}
