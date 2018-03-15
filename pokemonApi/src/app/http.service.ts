import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
    
  }
  getPokemon(){
    let mewTwo = this._http.get('https://pokeapi.co/api/v2/pokemon/150/');
    mewTwo.subscribe(data => console.log("Got our Pokemon!", data));
  }
}