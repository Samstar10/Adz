import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-transactions-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './transactions-home.component.html',
  styleUrl: './transactions-home.component.css'
})
export class TransactionsHomeComponent {
  isSideBarVisible: boolean = false;

  currentYear: number = new Date().getFullYear();

  toggleSidebar(): void {
    this.isSideBarVisible = !this.isSideBarVisible;
  }

}
