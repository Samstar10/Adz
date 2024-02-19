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
}
