import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-campaigns-three',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './campaigns-three.component.html',
  styleUrl: './campaigns-three.component.css'
})
export class CampaignsThreeComponent {
  currentYear: number = new Date().getFullYear();
  isSideBarVisible: boolean = false;

  constructor(private router: Router){}

  redirectTo(){
    this.router.navigate(['/campaigns-4']);
  }

  toggleSidebar(): void {
    this.isSideBarVisible = !this.isSideBarVisible;
  }
}
