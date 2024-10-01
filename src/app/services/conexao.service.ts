import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conexao } from '../models/conexao';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

  apiURL: string = 'http://localhost:8080/conexoes';
  constructor(private httpClinte: HttpClient) { }

  getConexoes(): Observable<number>{
    return this.httpClinte.get<number>(`${this.apiURL}`);
  }


}
