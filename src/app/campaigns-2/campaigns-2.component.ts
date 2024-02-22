import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaigns-2',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './campaigns-2.component.html',
  styleUrl: './campaigns-2.component.css'
})
export class Campaigns2Component {

  isSideBarVisible: boolean = false;

  currentYear: number = new Date().getFullYear();

  constructor(private router: Router){}

  toggleSidebar(): void {
    this.isSideBarVisible = !this.isSideBarVisible;
  }

  redirectTo(){
    this.router.navigate(['/campaigns-3']);
  }

}
