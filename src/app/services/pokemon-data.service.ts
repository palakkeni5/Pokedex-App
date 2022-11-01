import { Injectable } from '@angular/core';
import pokemonData from '../../assets/json-data/pokedex.json';
import {PokemonDataInterface} from '../interfaces/pokemon-data-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor() { }
  
  getPokemonData = () => {
     let newPokemonData: Object[] = [];
     
     pokemonData.forEach( (data) => {
        let d = new Object({
          id : data.id,
          base : {
            attack : data.base?.Attack,
            defense :data.base?.Defense,
            hp : data.base?.HP,
            spAttack :data.base?.['Sp. Attack'],
            spDefense : data.base?.['Sp. Defense'],
            Speed : data.base?.Speed
        },
        description: data.description,
        image : data.image.hires,
        thumbnail : data.image.thumbnail,
        name : data.name.english,
        type : data.type
        }) ;

        
        newPokemonData.push(d);

     })
     
     return newPokemonData;
  }
}
