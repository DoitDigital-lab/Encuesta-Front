import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Estilo } from 'src/app/Modelo/Estilo';
import { Respuesta } from '../Modelo/Respuesta';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url = 'http://localhost:8088/respuesta'
  constructor(private http: HttpClient) { }


  getRespuesta() {
    return this.http.get<Respuesta[]>(this.Url+'/getRespuesta');
  }
}
