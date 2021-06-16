import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ajuda } from './ajuda.model';
import { AjudaService } from './ajuda.service';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.scss']
})
export class AjudaComponent implements OnInit {

  ajuda: Ajuda = {} as Ajuda;

  constructor(
    private ajudaService: AjudaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.codigo) {
        const codigo = +params.codigo; // (+) converte o string 'codigo' para number
        this.ajudaService.getAjuda(codigo).subscribe(a => this.ajuda = a);
      }
    });
  }

  voltar() {
    if (this.ajuda && this.ajuda.urlVoltar) {
      this.router.navigate([this.ajuda.urlVoltar]);
    } else {
      console.log('Sem link configurado');
    }
  }

}
