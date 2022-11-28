import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Respuesta } from '../../Modelo/Respuesta';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  respuestas: Respuesta[] = [];
  constructor(private service: ServiceService, private router: Router) {  }
  ngOnInit() {
    this.service.getRespuesta()
    .subscribe(response=> this.respuestas = response)
  }
}

