import { Component, OnInit , Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PokemonDetailsComponent} from '../pokemon-info/pokemon-details/pokemon-details.component';


@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() renderList? : any;
  

  ngOnInit(): void {
    console.log(this.renderList)
  }

  
  openDetails(event:any ,data :any){
    //console.log(event)
    //console.log(data)
    this.openDialog(data);
    
  }

  openDialog(data:any) {
    const dialogRef = this.dialog.open(PokemonDetailsComponent,{data});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
