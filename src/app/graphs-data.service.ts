import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Campaign {
  id: number;
  title: string;
  adSpend: number;
  conversions: number;
  impressions: number;
}

export interface Locations {
  id: number;
  image: string;
  location: string;
  impressions: number;
}

@Injectable({
  providedIn: 'root'
})
export class GraphsDataService {

  constructor( private http: HttpClient ) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/viewers');
  }

  getSummaryData(){
    return {
      today: { users: 102, impressions: 422 },
      yesterday: { users: 172, impressions: 578 },
      lastWeek: { users: 1507, impressions: 4376 },
      last7Days: { users: 4259, impressions: 10925 },
      last30Days: { users: 7185, impressions: 15837 },
      thisYear: { users: 9970, impressions: 20796 },
      lastYear: { users: 33899, impressions: 111185 }
    };
  }

  getCampaignData(): Campaign[]{
    return[
      { id: 1, title: 'Nike: Just Do It.', adSpend: 1906, conversions: 43, impressions: 422 },
      { id: 2, title: 'Coke: Share a Coke', adSpend: 1906, conversions: 58, impressions: 578 },
      { id: 3, title: 'Absolut Vodka: The Absolut Bottle', adSpend: 1906, conversions: 438, impressions: 4376 },
      { id: 4, title: 'Anheuser-Busch: Whassup (1999)', adSpend: 1906, conversions: 110, impressions: 10925 },
      { id: 5, title: 'Miller Lite: Great Taste, Less Filling (1974)', adSpend: 1906, conversions: 159, impressions: 15837 },
      { id: 6, title: 'Always: #LikeAGirl (2015)', adSpend: 1906, conversions: 208, impressions: 20796 },
      { id: 7, title: 'Volkswagen: Think Small (1960)', adSpend: 1906, conversions: 1112, impressions: 111185 },
      { id: 8, title: 'Google: Year in Search (2017)', adSpend: 1906, conversions: 223, impressions: 22296 },
      { id: 9, title: 'Dos Equis: The Most Interesting Man in the World (2006)', adSpend: 1906, conversions: 8, impressions: 74 }
    ]
  }

  getLocationsData(): Locations[]{
    return[
      { id: 1, image: '../../assets/South Africa.png', location: 'South Africa', impressions: 422 },
      { id: 2, image: '../../assets/New Zealand.png', location: 'New Zealand', impressions: 578 },
      { id: 3, image: '../../assets/Kenya.png', location: 'Kenya', impressions: 4376 },
      { id: 4, image: '../../assets/Australia.png', location: 'Australia', impressions: 10925 },
      { id: 5, image: '../../assets/United Kingdom.png', location: 'United Kingdom', impressions: 15837 },
      { id: 6, image: '../../assets/Canada.png', location: 'Canada', impressions: 20796 },
      { id: 7, image: '../../assets/United States.png', location: 'United States of America', impressions: 111185 },
      { id: 8, image: '../../assets/Russia.png', location: 'Russian Federation', impressions: 22296 },
      { id: 9, image: '../../assets/France.png', location: 'France', impressions: 74 },
      { id: 10, image: '../../assets/Ireland.png', location: 'Ireland', impressions: 74 }
    ]
  }
}
