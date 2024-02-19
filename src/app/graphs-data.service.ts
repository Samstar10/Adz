import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
