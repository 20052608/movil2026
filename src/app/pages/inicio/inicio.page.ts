import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})

export class InicioPage {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'Alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Input',
      redirectTo: '/input',
    },
    

  ];

  constructor() {}



}







