import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {

  titulo = 'for';

  lista = ["Angular","Type Script","Python"];

  isLista = true;

  buttons: { label: string; link: string; hidden?: string }[] = [

    {

      label: 'ADMIN_TOOLS.TANK_STRAPPING',

      link: 'admin-tools/tank-strapping',

    },

    {

      label: 'ADMIN_TOOLS.MODIFY_MDM_ATTRIBUTES',

      link: 'admin-tools/mdm-editing',

    }

];

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarLista() {
    this.isLista = !this.isLista;
  }

}
