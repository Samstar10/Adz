import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {

  currentYear: number = new Date().getFullYear();

}
