import { Component, OnInit } from '@angular/core';
import { QuartoService, VagalumeModel } from '../quarto.service';

@Component({
  selector: 'quarto-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private quartoService: QuartoService) { }

  public NomeVagalume: string = "";
  public vagalumes: VagalumeModel[];
  public LuzAcesa: boolean = false;

  ngOnInit() {
    this.quartoService.vagalumes().subscribe(quarto => {
      this.vagalumes = quarto.vagalumes;
    })
  }

  public AcenderApagarLuz(){
    this.LuzAcesa = !this.LuzAcesa;
  }

  public TrocaNomeVagalume(nome:string){
    this.NomeVagalume = nome;
  }
}
