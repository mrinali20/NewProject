import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../search.pipe';
import { firstValueFrom } from 'rxjs';

@NgModule({
  declarations: [
    SearchPipe
  ],

  
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule,
   
   
  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule,
    SearchPipe
  ]
})
export class SharedModule { }
