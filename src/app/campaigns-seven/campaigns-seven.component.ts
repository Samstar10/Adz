import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaigns-seven',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './campaigns-seven.component.html',
  styleUrl: './campaigns-seven.component.css'
})
export class CampaignsSevenComponent {
  isSideBarVisible: boolean = false;

  currentYear: number = new Date().getFullYear();

  constructor(private router: Router){}

  toggleSidebar(): void {
    this.isSideBarVisible = !this.isSideBarVisible;
  }

  redirectTo(){
    this.router.navigate(['/campaigns-dashboard']);
  }

  redirectBack(){
    this.router.navigate(['/campaigns-5']);
  }


}
