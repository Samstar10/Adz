import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {
  isSideBarVisible: boolean = false;

  currentYear: number = new Date().getFullYear();

  constructor(private router: Router){}

  redirectTo(){
    this.router.navigate(['/campaigns-2']);
  }

  toggleSidebar(): void {
    this.isSideBarVisible = !this.isSideBarVisible;
  }

}
