import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from '../Modelo/Respuesta';
import { HttpClient } from '@angular/common/http';
import { Estilo } from '../Modelo/Estilo';

@Injectable({
  providedIn: 'root'
})
export class ResponderService {

  Url = 'http://localhost:8088'

  constructor(private http: HttpClient) { }
  getEstilos(): Observable<Estilo[]> {
    return this.http.get<Estilo[]>(this.Url+'/estilo/getEstilo')
  }
  responderEncuesta(respuesta: Respuesta):Observable<Respuesta>{
    
    return this.http.post<Respuesta>(this.Url+"/respuesta/crear",respuesta)
  }
}
