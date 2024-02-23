import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaign-five',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './campaign-five.component.html',
  styleUrl: './campaign-five.component.css'
})
export class CampaignFiveComponent {
  isSideBarVisible: boolean = false;

  currentYear: number = new Date().getFullYear();

  constructor(private router: Router){}

  toggleSidebar(): void {
    this.isSideBarVisible = !this.isSideBarVisible;
  }

  redirectTo(){
    this.router.navigate(['/campaigns-5']);
  }

  redirectBack(){
    this.router.navigate(['/campaigns-4']);
  }

}
