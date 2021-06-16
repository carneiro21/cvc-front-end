import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-je-menu',
  templateUrl: './je-menu.component.html',
  styleUrls: ['./je-menu.component.scss']
})
export class JeMenuComponent implements OnInit {

  dados: any = [
    { nome: 'CVC Brazil', link: 'https://www.cvc.com.br/', classe: 'tse-link', title: 'Visitar CVC Viagens' },
    { nome: 'https://www.cvc.com.br/', link: 'https://www.cvc.com.br/', classe: 'je-link', title: 'CVC Brasil' },
    { nome: 'Accessibility', link: 'https://www.cvc.com.br/', classe: 'acessibilidade-link', title: 'Link para acessibilidade' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
