import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styles: [
  ]
})
export class ClientesFormComponent implements OnInit {


  cliente?: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
