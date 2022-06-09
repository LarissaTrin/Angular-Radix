import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {

  title = 'New Component'

  lista = ["Angular","Type Script","Python"]

  isLista = true;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarLista() {
      this.isLista = !this.isLista;
  }

}
