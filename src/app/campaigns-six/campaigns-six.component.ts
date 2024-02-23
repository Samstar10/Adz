import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

declare let google: any;

@Component({
  selector: 'app-campaigns-six',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './campaigns-six.component.html',
  styleUrl: './campaigns-six.component.css'
})
export class CampaignsSixComponent {
  @ViewChild('map') mapElement!: ElementRef;
  @ViewChild('location') locationInput!: ElementRef;
  map: any
  geocoder: any
  autocomplete: any
  isSideBarVisible: boolean = false;

  currentYear: number = new Date().getFullYear();

  constructor(private router: Router, private ngZone: NgZone){}

  toggleSidebar(): void {
    this.isSideBarVisible = !this.isSideBarVisible;
  }

  redirectTo(){
    this.router.navigate(['/campaigns-7']);
  }

  redirectBack(){
    this.router.navigate(['/campaigns-5']);
  }

  ngOnInit(): void {
    this.initMap()
  }

  initMap(): void {
    const center = new google.maps.LatLng(35.2271, -80.8431);
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      zoom: 8,
      center: center,
    });
    new google.maps.Marker({
      position: center,
      map: map,
    });
  }

  initAutoComplete(): void {
    this.autocomplete = new google.maps.places.Autocomplete(this.locationInput.nativeElement, {
      types: ['geocode'],
    })
    this.autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = this.autocomplete.getPlace()
        if (!place.geometry) {
          return
        }
        if (place.geometry.viewport){
          this.map.fitBounds(place.geometry.viewport)
        } else {
          this.map.setCenter(place.geometry.location)
          this.map.setZoom(17)
        }
        // Place a marker on the selected location
        new google.maps.Marker({
          map: this.map,
          position: place.geometry.location
        })
      })
    })
  }
}
