import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() { 
  	this.correo={
  		titulo:'Titulo del email',
  		cuerpo:'Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email',
  		emisor:'correoEmisor@miau.com',
  		destinatario:'correoDestinatario@miau.com'
  	}

  }

  ngOnInit(): void {
  }

}
