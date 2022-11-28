import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../../Modelo/Respuesta';
import { ResponderService } from '../../Service/responder.service';
import { Estilo } from '../../Modelo/Estilo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-responder',
  templateUrl: './responder.component.html',
  styleUrls: ['./responder.component.css'],

})
export class ResponderComponent implements OnInit {

  formularioRespuesta = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
    estilo: new FormControl('',Validators.required)
  })

  error!: string;
  requestFailed!: boolean;
  respuesta: Respuesta = new Respuesta();
  estilos: Estilo[] = [];
  constructor(private ResponderService: ResponderService) {

  }

  ngOnInit(): void {
    this.ResponderService.getEstilos()
      .subscribe(response => this.estilos = response)
  }

  responderEncuesta() {
    if (this.formularioRespuesta.valid)
      this.ResponderService.responderEncuesta(this.respuesta)
      .subscribe(response => {},res=>{this.requestFailed = true;
        this.showError();})
    else
      console.log("invalido")

 
  }
  showError() {
    this.error = 'El Email está repetido';
}

}
