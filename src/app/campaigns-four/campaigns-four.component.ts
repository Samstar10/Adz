import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaigns-four',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './campaigns-four.component.html',
  styleUrl: './campaigns-four.component.css'
})
export class CampaignsFourComponent {
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
    this.router.navigate(['/campaigns-3']);
  }

}
