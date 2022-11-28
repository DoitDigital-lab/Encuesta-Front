import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Encuesta/add/add.component';
import { ListarComponent } from './Encuesta/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule} from '@angular/common/http';
import { ResponderComponent } from './Encuesta/responder/responder.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListarComponent,
    ResponderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
