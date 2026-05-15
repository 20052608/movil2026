import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { IonContent } from "@ionic/angular/standalone";

@Component({ 
  selector: 'app-input', 
  templateUrl: './input.page.html', 
  styleUrls: ['./input.page.scss'],
  standalone: false,
}) 
export class InputPage implements OnInit { 
  nombre: string = 'Fernando'; 
  usuario = { 
    email: '', 
    password: '' 
  } 
  constructor() { } 
 
  ngOnInit() { 
  } 
 
  onSubmit(formulario: NgForm) { 
    console.log('submit'); 
    console.log(this.usuario); 
    console.log(formulario); 
  } 
} 
 

