import { Component } from '@angular/core';
import { PokemonDataService } from './services/pokemon-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-pokedex';
  //value = '';
  searchValue = '';

  constructor(private pokemonDataService: PokemonDataService){

  }
  
  pokemonData: any = [];
  displayList: any = [];

  ngOnInit(): void {
    this.pokemonData = this.pokemonDataService.getPokemonData();
    this.displayList = this.pokemonData;
    console.log(this.pokemonData);
  }

  filterPokemon = () =>{
    //console.log(this.searchValue);
    if(this.searchValue === ""){
       this.displayList = this.pokemonData ;
       return ;
      }
    // else 
    this.displayList = this.pokemonData.filter((a:any) => {
      if(a.name.toLowerCase().includes(this.searchValue)){
        //console.log(a);
        return a;
      }
      //return a.name.english.substring(this.searchValue);
    })
  }

  clearOnClick(){
    this.searchValue = "" ; 
    this.filterPokemon()
  }

}
