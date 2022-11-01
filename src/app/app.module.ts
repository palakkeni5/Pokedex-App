import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import {PokemonDataService} from './services/pokemon-data.service';
import { PokemonDetailsComponent } from './pokemon-info/pokemon-details/pokemon-details.component'
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PokemonInfoComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatRippleModule,
    OverlayModule,
    MatDialogModule
    
  ],
  providers: [PokemonDataService , MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
