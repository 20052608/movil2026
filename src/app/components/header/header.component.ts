import { Component, Input } from '@angular/core';

import { IonHeader, IonBackButton, IonToolbar, IonButtons, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle],
})
export class HeaderComponent {

  @Input() titulo: string = '';
  constructor() { }



}
