import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-campaigns-2',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './campaigns-2.component.html',
  styleUrl: './campaigns-2.component.css'
})
export class Campaigns2Component {

  currentYear: number = new Date().getFullYear();

}
