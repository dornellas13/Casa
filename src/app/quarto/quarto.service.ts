import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://www.mocky.io/v2';

export class QuartoModel{
  vagalumes: VagalumeModel[];
}

export class VagalumeModel {
  public nome: string;
  public left: string;
  public bottom: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuartoService {
  constructor(private http: HttpClient) { }

  public vagalumes() {
    return this.http.get<QuartoModel>(`${url}/5b971c2d3000006a000bd4a3`);
  }
}
